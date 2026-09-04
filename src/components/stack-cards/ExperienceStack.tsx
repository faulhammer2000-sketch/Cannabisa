"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations/gsap-init";
import { useI18n } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceStack() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Mobile: Simple stagger animation
      const ctx = gsap.context(() => {
        const cards = cardsContainerRef.current?.querySelectorAll(".stack-card");
        if (cards) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 60, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.2,
              ease: "expo.out",
              scrollTrigger: {
                trigger: cardsContainerRef.current,
                start: "top 80%",
              },
            }
          );
        }
      }, sectionRef);

      return () => ctx.revert();
    }

    // Desktop: Advanced pinning and stacking animation
    const ctx = gsap.context(() => {
      const cards = cardsContainerRef.current?.querySelectorAll(".stack-card");
      if (!cards || cards.length === 0) return;

      // Pin the container
      gsap.to(cardsContainerRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * 2}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
        },
      });

      // Animate each card
      cards.forEach((card, index) => {
        const isLast = index === cards.length - 1;

        if (!isLast) {
          gsap.to(card, {
            scale: 0.9 - index * 0.05,
            y: -80 * index,
            rotate: -5 * index,
            opacity: 0.8 - index * 0.15,
            filter: `brightness(${1 - index * 0.1})`,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: () => `+=${window.innerHeight * 2}`,
              scrub: 1,
            },
          });
        }

        // Initial stagger entrance
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "expo.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
            delay: index * 0.1,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-20 md:py-32 bg-black">
      <div className="container-padding">
        <div className="max-w-7xl mx-auto">
          {/* Cards Container */}
          <div
            ref={cardsContainerRef}
            className="relative flex flex-col md:items-center md:justify-center gap-8 md:gap-0"
          >
            {siteConfig.stackCards.map((card, index) => (
              <ExperienceCard
                key={card.number}
                number={card.number}
                image={card.image}
                label={t(card.labelKey)}
                index={index}
                total={siteConfig.stackCards.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
