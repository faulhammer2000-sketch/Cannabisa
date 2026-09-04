"use client";

import React from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import { LanguageSwitcher } from "@/components/navigation";

export function SiteFooter() {
  const { t } = useI18n();

  const navLinks = [
    { key: "home", href: "#home" },
    { key: "experience", href: "#experience" },
    { key: "products", href: "#products" },
    { key: "lounge", href: "#lounge" },
    { key: "gallery", href: "#gallery" },
    { key: "visit", href: "#visit" },
  ];

  const legalLinks = [
    { key: "privacy", href: "#" },
    { key: "terms", href: "#" },
    { key: "responsible", href: "#" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: siteConfig.social.instagram,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM15.5 8.5C15.7761 8.5 16 8.72386 16 9C16 9.27614 15.7761 9.5 15.5 9.5C15.2239 9.5 15 9.27614 15 9C15 8.72386 15.2239 8.5 15.5 8.5ZM12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9ZM12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10ZM16 7H8C7.448 7 7 7.448 7 8V16C7 16.552 7.448 17 8 17H16C16.552 17 17 16.552 17 16V8C17 7.448 16.552 7 16 7Z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: siteConfig.social.facebook,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.878V14.891H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.891H13.563V21.878C18.343 21.128 22 16.991 22 12C22 6.477 17.523 2 12 2Z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-black border-t border-cream/10 pt-16 pb-8">
      <div className="container-padding">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="font-serif text-3xl text-cream mb-3">{siteConfig.name}</h3>
              <p className="text-sm text-cream/60 mb-4">{t("footer.tagline")}</p>
              <p className="text-sm text-cream/60">{t("footer.location")}</p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-sans text-sm font-medium tracking-wide uppercase text-cream mb-4">
                Navigate
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.key}>
                    <a
                      href={link.href}
                      className="text-sm text-cream/60 hover:text-cream transition-colors duration-300 link-hover inline-block"
                    >
                      {t(`nav.${link.key}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-sans text-sm font-medium tracking-wide uppercase text-cream mb-4">
                {t("common.contact")}
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-cream/60">{siteConfig.location.address}</li>
                <li>
                  <a
                    href={`tel:${siteConfig.location.phone}`}
                    className="text-sm text-cream/60 hover:text-cream transition-colors duration-300"
                  >
                    {siteConfig.location.phone}
                  </a>
                </li>
                <li className="text-sm text-cream/60">{siteConfig.location.hours.weekdays}</li>
              </ul>
            </div>

            {/* Social & Language */}
            <div>
              <h4 className="font-sans text-sm font-medium tracking-wide uppercase text-cream mb-4">
                Connect
              </h4>
              <div className="flex gap-3 mb-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-cream/5 hover:bg-cream/10 text-cream rounded-sm transition-colors duration-300 focus-premium"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Legal Links */}
          <div className="border-t border-cream/10 pt-8 mb-8">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              {legalLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-xs text-cream/40 hover:text-cream/60 transition-colors duration-300 uppercase tracking-wider"
                >
                  {t(`footer.${link.key}`)}
                </a>
              ))}
            </div>
          </div>

          {/* Responsible Use Notice */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-xs text-center text-cream/40 leading-relaxed">
              {t("footer.responsibleNotice")}
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-cream/30">
              © {new Date().getFullYear()} {siteConfig.name}. {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
