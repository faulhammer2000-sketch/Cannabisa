"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations } from "./translations";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("canabisa-language");
    if (saved === "th" || saved === "ar" || saved === "en") {
      setLanguageState(saved);
    }
  }, []);

  // Persist language and update document dir
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("canabisa-language", lang);
    
    // Update document direction
    if (typeof document !== "undefined") {
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
    }
  };

  // Update dir when language changes
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = language;
    }
  }, [language]);

  // Translation function with nested key support
  const t = (key: string): string => {
    try {
      const keys = key.split(".");
      let value: any = translations;

      for (const k of keys) {
        value = value[k];
        if (value === undefined) {
          console.warn(`Translation key not found: ${key}`);
          return key;
        }
      }

      if (typeof value === "object" && language in value) {
        return value[language];
      }

      console.warn(`Translation not found for language ${language}: ${key}`);
      return key;
    } catch (error) {
      console.error(`Translation error for key ${key}:`, error);
      return key;
    }
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
