// Prerenders the SPA's static routes into dist/ so crawlers that don't run
// JavaScript (most AI crawlers) see the real content and meta tags instead
// of the generic index.html shell. Runs automatically after `npm run build`
// via the "postbuild" script.
import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;
const DIST_DIR = path.resolve("dist");

const routes = [
  { path: "/", out: "index.html" },
  { path: "/services", out: "services/index.html" },
];

// Vercel's build container is a minimal Linux image, missing the shared
// libraries the regular `puppeteer` package's bundled Chromium needs
// (libnss3, libatk, etc.), so the browser fails to launch there. On
// Vercel we use `puppeteer-core` with `@sparticuz/chromium`, a Chromium
// build made for exactly this kind of serverless/build environment.
// Locally (Windows/Mac dev machines), that Linux-only binary doesn't
// run, so we fall back to the regular `puppeteer` package instead.
async function launchBrowser() {
  if (process.env.VERCEL) {
    const [{ default: chromium }, { default: puppeteerCore }] = await Promise.all([
      import("@sparticuz/chromium"),
      import("puppeteer-core"),
    ]);
    return puppeteerCore.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  }
  const { default: puppeteer } = await import("puppeteer");
  return puppeteer.launch({ headless: "new" });
}

function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tryFetch = () => {
      fetch(url)
        .then(() => resolve())
        .catch(() => {
          if (Date.now() - start > timeoutMs) {
            reject(new Error(`Timed out waiting for ${url}`));
          } else {
            setTimeout(tryFetch, 300);
          }
        });
    };
    tryFetch();
  });
}

async function main() {
  if (!existsSync(DIST_DIR)) {
    console.error("dist/ not found. Run `vite build` first.");
    process.exit(1);
  }

  console.log("Starting preview server...");
  const server = spawn(
    "node",
    [
      path.resolve("node_modules/vite/bin/vite.js"),
      "preview",
      "--port",
      String(PORT),
      "--strictPort",
    ],
    { stdio: "ignore" }
  );

  try {
    await waitForServer(BASE_URL);
    console.log("Preview server ready.");

    const browser = await launchBrowser();

    for (const route of routes) {
      const page = await browser.newPage();
      const url = `${BASE_URL}${route.path}`;
      console.log(`Rendering ${url}`);
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
      // Give reveal/intersection-observer driven content a moment to settle.
      await new Promise((r) => setTimeout(r, 500));
      const html = await page.content();
      const outPath = path.join(DIST_DIR, route.out);
      await mkdir(path.dirname(outPath), { recursive: true });
      await writeFile(outPath, html, "utf8");
      console.log(`Wrote ${route.out} (${(html.length / 1024).toFixed(0)} KB)`);
      await page.close();
    }

    await browser.close();
    console.log("Prerender done.");
  } finally {
    server.kill();
  }
}

main().catch((err) => {
  // Prerendering is an SEO enhancement, not core functionality: if it
  // breaks (for example a Vercel environment change), fail loudly in the
  // logs but let the build succeed anyway, so the plain client-rendered
  // dist/index.html that Vite already produced still deploys instead of
  // blocking the whole site.
  console.error("Prerender failed, deploying without it:", err);
  process.exitCode = 0;
});
