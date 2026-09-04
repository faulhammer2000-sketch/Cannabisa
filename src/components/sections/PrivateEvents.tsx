"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/animations/gsap-init";
import { useI18n } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import { Button, ArrowIcon } from "@/components/ui";

export function PrivateEvents() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-spacing bg-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={siteConfig.images.party}
          alt="Private events and gatherings"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content */}
      <div className="container-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={contentRef} className="opacity-0">
            <h2 className="heading-section text-cream mb-8">
              {t("events.headline")}
            </h2>
            <p className="body-large mb-10 whitespace-pre-line">
              {t("events.description")}
            </p>
            <Button variant="primary" href="#visit" icon={<ArrowIcon />}>
              {t("events.cta")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
