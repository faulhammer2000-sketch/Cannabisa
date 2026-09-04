"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function AgeVerification() {
  const { t } = useI18n();
  const [isVerified, setIsVerified] = useState(true); // Set to false to enable age gate
  const [showExitMessage, setShowExitMessage] = useState(false);

  useEffect(() => {
    // Check if user has already verified age
    const verified = localStorage.getItem("canabisa-age-verified");
    if (verified === "true") {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  }, []);

  const handleVerify = (isOfAge: boolean) => {
    if (isOfAge) {
      localStorage.setItem("canabisa-age-verified", "true");
      setIsVerified(true);
    } else {
      setShowExitMessage(true);
    }
  };

  if (isVerified) {
    return null;
  }

  return (
    <AnimatePresence>
      {!isVerified && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {!showExitMessage ? (
            <motion.div
              className="max-w-md w-full mx-4 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              {/* Logo */}
              <motion.h1
                className="font-serif text-5xl text-cream mb-8"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {siteConfig.name}
              </motion.h1>

              {/* Location */}
              <motion.p
                className="eyebrow text-cream/60 mb-12"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {siteConfig.location.eyebrow}
              </motion.p>

              {/* Question */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="font-serif text-3xl text-cream mb-4">
                  {t("ageGate.headline")}
                </h2>
                <p className="body-regular mb-10">{t("ageGate.description")}</p>
              </motion.div>

              {/* Buttons */}
              <motion.div
                className="flex flex-col gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <motion.button
                  onClick={() => handleVerify(true)}
                  className="w-full py-4 bg-olive text-cream font-sans text-sm font-medium tracking-wide uppercase rounded-sm transition-all duration-300 hover:bg-olive-dark focus-premium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t("ageGate.yes")}
                </motion.button>
                <motion.button
                  onClick={() => handleVerify(false)}
                  className="w-full py-4 border border-cream/30 text-cream font-sans text-sm font-medium tracking-wide uppercase rounded-sm transition-all duration-300 hover:bg-cream/5 focus-premium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t("ageGate.no")}
                </motion.button>
              </motion.div>

              {/* Legal Note */}
              <motion.p
                className="text-xs text-cream/30 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                {siteConfig.responsible.notice}
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              className="max-w-md w-full mx-4 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <h2 className="font-serif text-3xl text-cream mb-4">
                {t("ageGate.exitMessage")}
              </h2>
              <p className="body-regular mb-8">Thank you for visiting.</p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
