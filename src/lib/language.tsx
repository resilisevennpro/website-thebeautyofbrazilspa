import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "pt" | "en" | "es";

/**
 * Production default is "en" per project decision (see REESTRUTURACAO.md).
 * Portuguese and Spanish are opt-in via the navbar toggle.
 */
const DEFAULT_LANG: Lang = "en";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
