// Prerenders the SPA's static routes into dist/ so crawlers that don't run
// JavaScript (most AI crawlers) see the real content and meta tags instead
// of the generic index.html shell. Runs automatically after `npm run build`
// via the "postbuild" script.
import { spawn } from "node:child_process";
import { mkdir, writeFile, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer";

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;
const DIST_DIR = path.resolve("dist");

const routes = [
  { path: "/", out: "index.html" },
  { path: "/services", out: "services/index.html" },
];

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

    const browser = await puppeteer.launch({ headless: "new" });

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
  console.error("Prerender failed:", err);
  process.exit(1);
});
