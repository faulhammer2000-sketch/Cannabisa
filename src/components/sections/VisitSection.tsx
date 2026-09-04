"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/animations/gsap-init";
import { motion } from "motion/react";
import { useI18n } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import { Button, ArrowIcon } from "@/components/ui";

export function VisitSection() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = contentRef.current?.querySelectorAll(".visit-element");
      if (elements) {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "expo.out",
            scrollTrigger: {
              trigger: contentRef.current,
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
      id="visit"
      ref={sectionRef}
      className="section-spacing bg-black-soft relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src={siteConfig.images.night}
          alt="Patong night"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="container-padding relative z-10">
        <div className="max-w-5xl mx-auto">
          <div ref={contentRef} className="text-center">
            {/* Headline */}
            <h2 className="visit-element heading-section text-cream mb-6 opacity-0">
              {t("visit.headline")}
            </h2>

            {/* Location */}
            <div className="visit-element mb-8 opacity-0">
              <p className="eyebrow text-cream/80 mb-2">{siteConfig.location.eyebrow}</p>
            </div>

            {/* Description */}
            <p className="visit-element body-large mb-12 opacity-0 whitespace-pre-line">
              {t("visit.description")}
            </p>

            {/* Buttons */}
            <div className="visit-element flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0">
              <Button
                variant="primary"
                href={siteConfig.maps.directionsUrl}
                asLink
                icon={<ArrowIcon />}
              >
                {t("visit.cta")}
              </Button>
              <Button variant="outline" href={siteConfig.social.instagram} asLink icon={<ArrowIcon />}>
                {t("nav.comeSayHi")}
              </Button>
            </div>

            {/* Contact Info Cards */}
            <div className="visit-element grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0">
              {/* Address */}
              <motion.div
                className="card-premium p-6 text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto text-olive"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="font-sans text-sm font-medium tracking-wide text-cream mb-2">
                  {t("visit.address")}
                </h3>
                <p className="text-sm text-cream/60">{siteConfig.location.address}</p>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="card-premium p-6 text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto text-olive"
                  >
                    <path
                      d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="font-sans text-sm font-medium tracking-wide text-cream mb-2">
                  {t("visit.phone")}
                </h3>
                <p className="text-sm text-cream/60">{siteConfig.location.phone}</p>
              </motion.div>

              {/* Hours */}
              <motion.div
                className="card-premium p-6 text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto text-olive"
                  >
                    <path
                      d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="font-sans text-sm font-medium tracking-wide text-cream mb-2">
                  {t("visit.hours")}
                </h3>
                <p className="text-sm text-cream/60">{siteConfig.location.hours.weekdays}</p>
                <p className="text-xs text-cream/40 mt-1">{siteConfig.location.hours.note}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
