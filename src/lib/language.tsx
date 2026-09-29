import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "pt" | "en";

/**
 * Production default is "en" per project decision (see REESTRUTURACAO.md).
 * The site targets a US business in Florida; Portuguese is opt-in via the
 * navbar toggle for Brazilian clients.
 */
const DEFAULT_LANG: Lang = "en";

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
