"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import { Button, ArrowIcon } from "@/components/ui";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

export function SiteNavigation() {
  const { t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();
  const navBlur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { key: "home", href: "#home" },
    { key: "experience", href: "#experience" },
    { key: "products", href: "#products" },
    { key: "lounge", href: "#lounge" },
    { key: "gallery", href: "#gallery" },
    { key: "visit", href: "#visit" },
  ];

  return (
    <>
      <motion.header
        className={`
          fixed top-0 left-0 right-0 z-30 
          transition-all duration-500 ease-expo-out
          ${isScrolled ? "py-3" : "py-6"}
        `}
        style={{
          backgroundColor: `rgba(5, 5, 5, ${isScrolled ? 0.95 : 0.7})`,
        }}
      >
        <motion.div
          className={`
            container-padding
            ${isScrolled ? "backdrop-blur-xl border-b border-cream/10" : ""}
          `}
          style={{
            backdropFilter: navBlur.get() > 0 ? `blur(${navBlur.get()}px)` : undefined,
          }}
        >
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              className="font-serif text-2xl md:text-3xl text-cream hover:text-cream-dark transition-colors duration-300 focus-premium"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {siteConfig.name}
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navItems.map((item) => (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      className="font-sans text-sm tracking-wide text-cream/80 hover:text-cream transition-colors duration-300 link-hover focus-premium"
                    >
                      {t(`nav.${item.key}`)}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="w-px h-6 bg-cream/20" />

              <LanguageSwitcher />

              <Button variant="outline" href="#visit" size="sm" icon={<ArrowIcon />}>
                {t("nav.comeSayHi")}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 lg:hidden">
              <LanguageSwitcher />

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="w-10 h-10 flex items-center justify-center text-cream hover:bg-cream/5 rounded-sm transition-colors duration-300 focus-premium"
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12H21M3 6H21M3 18H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </nav>
        </motion.div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
