"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/animations/gsap-init";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import { ImageLightbox } from "./ImageLightbox";

export function GallerySection() {
  const { t } = useI18n();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.querySelectorAll(".gallery-item");
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % siteConfig.gallery.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? siteConfig.gallery.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section
        id="gallery"
        ref={sectionRef}
        className="section-spacing bg-black-soft"
      >
        <div className="container-padding">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="heading-section text-cream">
                {t("gallery.headline")}
              </h2>
            </div>

            {/* Gallery Grid */}
            <div
              ref={gridRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
              {siteConfig.gallery.map((image, index) => {
                const spanClass =
                  image.span === "tall"
                    ? "sm:row-span-2"
                    : image.span === "wide"
                    ? "sm:col-span-2"
                    : "";

                return (
                  <motion.div
                    key={image.src}
                    className={`gallery-item relative aspect-square ${spanClass} overflow-hidden rounded-sm cursor-pointer group opacity-0`}
                    onClick={() => openLightbox(index)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Image */}
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500">
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="text-center">
                          <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full border-2 border-cream">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-cream"
                            >
                              <path
                                d="M10 4V16M4 10H16"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                          <span className="text-cream/80 text-xs tracking-widest uppercase">
                            {t("gallery.imageNumber")} {index + 1}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Border */}
                    <div className="absolute inset-0 border border-cream/10 group-hover:border-cream/30 transition-colors duration-500 pointer-events-none rounded-sm" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={siteConfig.gallery}
        currentIndex={currentImageIndex}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </>
  );
}
