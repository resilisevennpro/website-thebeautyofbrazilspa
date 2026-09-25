import { useEffect } from "react";
import { useLanguage } from "@/lib/language";

type MetaCopy = { title: string; description: string };

export const usePageMeta = (copy: Record<"pt" | "en", MetaCopy>) => {
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = copy[lang].title;
    const meta =
      document.querySelector('meta[name="description"]') ||
      document.head.appendChild(Object.assign(document.createElement("meta"), { name: "description" }));
    (meta as HTMLMetaElement).content = copy[lang].description;
  }, [lang, copy]);
};
