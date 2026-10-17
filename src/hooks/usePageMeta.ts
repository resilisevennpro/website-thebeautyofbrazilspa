import { useEffect } from "react";
import { useLanguage, type Lang } from "@/lib/language";

type MetaCopy = { title: string; description: string };

const htmlLang: Record<Lang, string> = { pt: "pt-BR", en: "en", es: "es" };

export const usePageMeta = (copy: Record<Lang, MetaCopy>) => {
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = htmlLang[lang];
    document.title = copy[lang].title;
    const meta =
      document.querySelector('meta[name="description"]') ||
      document.head.appendChild(Object.assign(document.createElement("meta"), { name: "description" }));
    (meta as HTMLMetaElement).content = copy[lang].description;

    const canonicalUrl = `https://beautyofbrazil.com${window.location.pathname}`;
    const canonical =
      document.querySelector('link[rel="canonical"]') ||
      document.head.appendChild(Object.assign(document.createElement("link"), { rel: "canonical" }));
    (canonical as HTMLLinkElement).href = canonicalUrl;
  }, [lang, copy]);
};
