"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function WhatsAppButton() {
  const { t, dir } = useI18n();
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    // Open WhatsApp with the custom pre-filled message
    const message = encodeURIComponent(
      "Welcome to Cannabisa Cafe Weed & Bar. Could you tell us what you are looking for?"
    );
    window.open(`${siteConfig.social.whatsappUrl}?text=${message}`, "_blank");
  };

  return (
    <div
      className={`fixed bottom-6 z-40 ${
        dir === "rtl" ? "left-6" : "right-6"
      } flex items-center gap-3`}
    >
      {/* Tooltip/Message */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: dir === "rtl" ? -10 : 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: dir === "rtl" ? -10 : 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`px-4 py-2 bg-black-soft/95 backdrop-blur-md border border-cream/20 rounded-full shadow-2xl ${
              dir === "rtl" ? "mr-2" : "ml-2"
            }`}
          >
            <p className="text-cream text-sm font-sans tracking-wide whitespace-nowrap">
              {t("whatsapp.message")}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group focus-premium cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label={`WhatsApp ${siteConfig.social.whatsapp}`}
        title="Chat with us on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white group-hover:scale-110 transition-transform duration-300"
        >
          <path
            d="M17.472 14.382C17.367 14.32 16.672 13.979 16.567 13.917C16.462 13.855 16.39 13.824 16.318 13.948C16.246 14.072 15.968 14.382 15.907 14.454C15.846 14.526 15.785 14.537 15.68 14.475C15.575 14.413 15.243 14.299 14.85 13.948C14.538 13.671 14.332 13.329 14.271 13.205C14.21 13.081 14.264 13.024 14.326 12.962C14.381 12.907 14.448 12.821 14.51 12.759C14.572 12.697 14.603 12.656 14.665 12.584C14.727 12.512 14.696 12.45 14.665 12.388C14.634 12.326 14.332 11.631 14.238 11.383C14.147 11.144 14.054 11.177 13.99 11.173C13.929 11.169 13.857 11.169 13.785 11.169C13.713 11.169 13.598 11.2 13.493 11.324C13.388 11.448 13.014 11.789 13.014 12.484C13.014 13.179 13.504 13.843 13.566 13.915C13.628 13.987 14.332 15.116 15.472 15.73C15.731 15.851 15.933 15.928 16.089 15.981C16.348 16.061 16.586 16.049 16.774 16.018C16.984 15.983 17.555 15.741 17.669 15.467C17.783 15.193 17.783 14.961 17.752 14.909C17.721 14.857 17.577 14.444 17.472 14.382ZM12.024 21.508C10.372 21.508 8.758 21.05 7.372 20.191L7 20L3.51 20.899L4.426 17.565L4.218 17.178C3.298 15.741 2.808 14.068 2.809 12.348C2.811 6.796 7.29 2.317 12.842 2.317C15.531 2.318 18.036 3.397 19.875 5.237C21.714 7.077 22.792 9.583 22.791 12.273C22.789 17.825 18.31 22.304 12.758 22.304L12.024 21.508Z"
            fill="currentColor"
          />
          <path
            d="M12 1C5.925 1 1 5.925 1 12C1 14.094 1.579 16.055 2.586 17.729L1 23L6.406 21.449C8.027 22.347 9.959 22.85 12 22.85C18.075 22.85 23 17.925 23 12C23 5.925 18.075 1 12 1ZM12 20.85C10.181 20.85 8.447 20.364 6.969 19.465L6.627 19.264L3.951 19.956L4.659 17.346L4.439 16.987C3.463 15.463 2.95 13.677 2.95 11.8C2.95 7.027 6.777 3.2 11.55 3.2C13.852 3.2 16.008 4.098 17.635 5.725C19.262 7.352 20.16 9.508 20.16 11.81C20.16 16.583 16.333 20.41 11.56 20.41L12 20.85Z"
            fill="currentColor"
          />
        </svg>

        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </motion.button>
    </div>
  );
}