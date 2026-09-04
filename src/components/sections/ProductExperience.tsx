"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/animations/gsap-init";
import { motion } from "motion/react";
import { useI18n } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import { SectionLabel } from "@/components/ui";

export function ProductExperience() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll(".product-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "expo.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="section-spacing bg-black-soft"
    >
      <div className="container-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="heading-section text-cream mb-6">
              {t("products.headline")}
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              {t("products.description")}
            </p>
          </div>

          {/* Product Categories */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.productCategories.map((category) => (
              <motion.div
                key={category.key}
                className="product-card card-premium p-8 text-center opacity-0"
                whileHover={{ y: -8, borderColor: "rgba(244, 240, 232, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-sans text-lg font-medium tracking-wide text-cream">
                  {t(`products.categories.${category.key}`)}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Product Image */}
          <div className="mt-16 relative aspect-[16/9] rounded-sm overflow-hidden">
            <Image
              src={siteConfig.images.products}
              alt="Product selection"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
