"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n, Language } from "@/lib/i18n";

const languages: { code: Language; label: string; native: string }[] = [
  { code: "en", label: "English", native: "EN" },
  { code: "th", label: "ภาษาไทย", native: "ไทย" },
  { code: "ar", label: "العربية", native: "العربية" },
];

interface LanguageSwitcherProps {
  mobile?: boolean;
}

export function LanguageSwitcher({ mobile = false }: LanguageSwitcherProps) {
  const { language, setLanguage, dir } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  if (mobile) {
    return (
      <div className="flex flex-col gap-3 py-4 border-t border-cream/10">
        <span className="eyebrow text-cream/50 px-1">Language</span>
        <div className="flex flex-col gap-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`
                px-4 py-3 text-left font-sans text-sm tracking-wide transition-all duration-300
                rounded-sm
                ${
                  language === lang.code
                    ? "bg-olive text-cream font-medium"
                    : "text-cream/70 hover:text-cream hover:bg-cream/5"
                }
              `}
            >
              <span className="flex items-center justify-between">
                <span>{lang.native}</span>
                <span className="text-xs opacity-60">{lang.label}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-sans tracking-wide text-cream/80 hover:text-cream transition-colors duration-300 focus-premium rounded-sm"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{languages.find((l) => l.code === language)?.native}</span>
        <motion.svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path
            d="M2 4L6 8L10 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              className={`
                absolute top-full ${dir === "rtl" ? "left-0" : "right-0"} mt-2 
                w-48 py-2 bg-black-soft/95 backdrop-blur-premium 
                border border-cream/10 rounded-sm shadow-2xl z-50
              `}
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {languages.map((lang, index) => (
                <motion.button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`
                    w-full px-4 py-3 text-left font-sans text-sm tracking-wide
                    transition-all duration-300
                    ${
                      language === lang.code
                        ? "bg-olive/20 text-cream font-medium"
                        : "text-cream/70 hover:text-cream hover:bg-cream/5"
                    }
                  `}
                  initial={{ opacity: 0, x: dir === "rtl" ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <div className="flex items-center justify-between">
                    <span>{lang.native}</span>
                    {language === lang.code && (
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-olive"
                        layoutId="activeLanguage"
                      />
                    )}
                  </div>
                  <span className="text-xs opacity-50 mt-0.5 block">{lang.label}</span>
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
