import React, { createContext, useContext, useMemo, useState } from "react";
import en from "./en.json";
import es from "./es.json";

type Language = "en" | "es";
type TranslationValue = string | { [key: string]: TranslationValue };

const dictionaries: Record<Language, Record<string, TranslationValue>> = {
  en,
  es,
};

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const getInitialLanguage = (): Language => {
  const storedLanguage = localStorage.getItem("language");
  return storedLanguage === "es" || storedLanguage === "en" ? storedLanguage : "en";
};

const translate = (language: Language, key: string) => {
  const value = key
    .split(".")
    .reduce<TranslationValue | undefined>((current, segment) => {
      if (!current || typeof current === "string") {
        return undefined;
      }

      return current[segment];
    }, dictionaries[language]);

  return typeof value === "string" ? value : key;
};

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setCurrentLanguage] = useState<Language>(getInitialLanguage);

  const setLanguage = (nextLanguage: Language) => {
    setCurrentLanguage(nextLanguage);
    localStorage.setItem("language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "en" ? "es" : "en"),
      t: (key: string) => translate(language, key),
    }),
    [language]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return context;
};
