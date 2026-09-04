"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/animations/gsap-init";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import { Button, ArrowIcon } from "@/components/ui";

export function HeroSection() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
      });

      // Image scale and fade
      tl.fromTo(
        imageRef.current,
        {
          scale: 1.08,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
        }
      );

      // Eyebrow
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=1.0"
      );

      // Headline - word by word reveal
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll(".word");
        tl.fromTo(
          words,
          { opacity: 0, y: 50, rotateX: -15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.08,
          },
          "-=0.6"
        );
      }

      // Description
      tl.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.4"
      );

      // Buttons
      if (buttonsRef.current) {
        const buttons = buttonsRef.current.querySelectorAll(".hero-button");
        tl.fromTo(
          buttons,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
          },
          "-=0.3"
        );
      }

      // Scroll indicator
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.2"
      );

      // Parallax effect on scroll
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headline = t("hero.headline");
  const words = headline.split(/\s+/);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src={siteConfig.images.hero}
          alt={`${siteConfig.name} - ${siteConfig.location.display}`}
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative h-full flex items-center">
        <div className="container-padding w-full">
          <div className="max-w-5xl">
            {/* Eyebrow */}
            <div ref={eyebrowRef} className="mb-6 opacity-0">
              <span className="eyebrow text-cream/80">{t("hero.eyebrow")}</span>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="heading-display text-cream mb-8 whitespace-pre-line"
              style={{ perspective: "1000px" }}
            >
              {words.map((word, index) => (
                <span
                  key={index}
                  className="word inline-block opacity-0 mr-[0.3em]"
                  style={{ transformOrigin: "bottom" }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Description */}
            <p
              ref={descriptionRef}
              className="body-large max-w-2xl mb-10 opacity-0 text-cream-dark"
            >
              {t("hero.description")}
            </p>

            {/* Buttons */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                href="#experience"
                icon={<ArrowIcon />}
                className="hero-button opacity-0"
              >
                {t("hero.cta1")}
              </Button>
              <Button
                variant="outline"
                href="#visit"
                icon={<ArrowIcon />}
                className="hero-button opacity-0"
              >
                {t("hero.cta2")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0"
      >
        <motion.div
          className="flex flex-col items-center gap-3 cursor-pointer group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => {
            document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-xs text-cream/60 tracking-widest uppercase">
            {t("hero.scrollIndicator")}
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-cream/60 group-hover:text-cream transition-colors"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
