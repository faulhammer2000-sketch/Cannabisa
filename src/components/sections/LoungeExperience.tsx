"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/animations/gsap-init";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function LoungeExperience() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const features = featuresRef.current?.querySelectorAll(".feature-item");
      if (features) {
        gsap.fromTo(
          features,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    "lounge.features.atmosphere",
    "lounge.features.drinks",
    "lounge.features.conversations",
    "lounge.features.vibes",
  ];

  return (
    <section
      id="lounge"
      ref={sectionRef}
      className="section-spacing bg-black-soft"
    >
      <div className="container-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="heading-section text-cream mb-8">
                {t("lounge.headline")}
              </h2>
              <p className="body-large mb-10 whitespace-pre-line">
                {t("lounge.description")}
              </p>

              {/* Features */}
              <div ref={featuresRef} className="grid grid-cols-2 gap-4">
                {features.map((featureKey, index) => (
                  <motion.div
                    key={featureKey}
                    className="feature-item card-premium p-6 opacity-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-olive" />
                      <span className="font-sans text-sm tracking-wide text-cream">
                        {t(featureKey)}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src={siteConfig.images.lounge}
                alt="Lounge atmosphere"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
