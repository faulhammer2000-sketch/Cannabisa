"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations/gsap-init";
import { useI18n } from "@/lib/i18n";

export function BrandIntroduction() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 80%",
          },
        }
      );

      // Description reveal
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 80%",
          },
        }
      );

      // Highlight reveal
      gsap.fromTo(
        highlightRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: highlightRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-spacing bg-black"
    >
      <div className="container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Headline */}
          <h2
            ref={headlineRef}
            className="heading-section text-cream text-center mb-12 opacity-0"
          >
            {t("brandIntro.headline")}
          </h2>

          {/* Description */}
          <div
            ref={descriptionRef}
            className="max-w-4xl mx-auto mb-16 opacity-0"
          >
            <p className="body-large text-center whitespace-pre-line">
              {t("brandIntro.description")}
            </p>
          </div>

          {/* Highlight */}
          <div
            ref={highlightRef}
            className="relative overflow-hidden rounded-sm border border-olive/30 bg-olive-dark/20 p-12 md:p-16 opacity-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-olive/10 to-transparent" />
            <h3 className="heading-section text-cream text-center relative z-10 whitespace-pre-line">
              {t("brandIntro.highlight")}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
