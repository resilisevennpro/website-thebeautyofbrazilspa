import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "pt" | "en";

/**
 * Dev default is "pt" per project decision (see REESTRUTURACAO.md).
 * Flip to "en" here before production launch.
 */
const DEFAULT_LANG: Lang = "pt";

type LanguageContextValue = {
  lang: Lang;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);
  const toggleLang = () => setLang((l) => (l === "pt" ? "en" : "pt"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
