"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string }[];
  currentIndex: number;
  onNext: () => void;
  onPrevious: () => void;
}

export function ImageLightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNext,
  onPrevious,
}: ImageLightboxProps) {
  const { t, dir } = useI18n();
  const currentImage = images[currentIndex];

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        if (dir === "rtl") {
          onNext();
        } else {
          onPrevious();
        }
      } else if (e.key === "ArrowRight") {
        if (dir === "rtl") {
          onPrevious();
        } else {
          onNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrevious, dir]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center text-cream hover:bg-cream/10 rounded-sm transition-colors duration-300 focus-premium"
            aria-label={t("common.close")}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute top-6 left-6 z-10">
            <span className="text-cream/60 font-sans text-sm tracking-wide">
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              {/* Previous */}
              <button
                onClick={onPrevious}
                className={`absolute ${
                  dir === "rtl" ? "right-6" : "left-6"
                } top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center text-cream hover:bg-cream/10 rounded-sm transition-colors duration-300 focus-premium`}
                aria-label={t("common.previous")}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={dir === "rtl" ? "rotate-180" : ""}
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Next */}
              <button
                onClick={onNext}
                className={`absolute ${
                  dir === "rtl" ? "left-6" : "right-6"
                } top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center text-cream hover:bg-cream/10 rounded-sm transition-colors duration-300 focus-premium`}
                aria-label={t("common.next")}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={dir === "rtl" ? "rotate-180" : ""}
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Image */}
          <motion.div
            className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            key={currentIndex}
          >
            <div className="relative w-full h-full">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-contain"
                sizes="90vw"
                quality={95}
                priority
              />
            </div>
          </motion.div>

          {/* Image Caption */}
          {currentImage.alt && (
            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-cream/80 font-sans text-sm tracking-wide text-center max-w-2xl px-6">
                {currentImage.alt}
              </p>
            </motion.div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
