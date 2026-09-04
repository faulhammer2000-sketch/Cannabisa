"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { useI18n } from "@/lib/i18n";
import { Button, ArrowIcon } from "@/components/ui";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t, dir } = useI18n();

  const menuItems = [
    { key: "home", href: "#home" },
    { key: "experience", href: "#experience" },
    { key: "products", href: "#products" },
    { key: "lounge", href: "#lounge" },
    { key: "gallery", href: "#gallery" },
    { key: "visit", href: "#visit" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className={`
              fixed top-0 ${dir === "rtl" ? "left-0" : "right-0"} bottom-0 
              w-full max-w-sm bg-black-soft/98 backdrop-blur-premium 
              border-${dir === "rtl" ? "r" : "l"} border-cream/10 
              overflow-y-auto no-scrollbar z-50
            `}
            initial={{ x: dir === "rtl" ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: dir === "rtl" ? "-100%" : "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col min-h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-cream/10">
                <motion.span
                  className="font-serif text-2xl text-cream"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  CANABISA
                </motion.span>
                <button
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center text-cream hover:bg-cream/5 rounded-sm transition-colors duration-300 focus-premium"
                  aria-label="Close menu"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-6">
                <ul className="flex flex-col gap-1">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.key}
                      initial={{ opacity: 0, x: dir === "rtl" ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                    >
                      <a
                        href={item.href}
                        onClick={onClose}
                        className="block px-4 py-4 font-sans text-lg tracking-wide text-cream/80 hover:text-cream hover:bg-cream/5 rounded-sm transition-all duration-300"
                      >
                        {t(`nav.${item.key}`)}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  <Button
                    variant="primary"
                    href="#visit"
                    fullWidth
                    icon={<ArrowIcon />}
                    onClick={onClose}
                  >
                    {t("nav.comeSayHi")}
                  </Button>
                </motion.div>

                {/* Language Switcher */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <LanguageSwitcher mobile />
                </motion.div>
              </nav>

              {/* Footer Info */}
              <motion.div
                className="p-6 border-t border-cream/10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-xs text-cream/40 tracking-wide">
                  PATONG · PHUKET · THAILAND
                </p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
