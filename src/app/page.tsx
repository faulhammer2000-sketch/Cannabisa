"use client";

import React from "react";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SiteNavigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero";
import {
  BrandIntroduction,
  ProductExperience,
  NoPressureService,
  LoungeExperience,
  PrivateEvents,
  OwnerSection,
  VisitSection,
} from "@/components/sections";
import { ExperienceStack } from "@/components/stack-cards";
import { GallerySection } from "@/components/gallery";
import { SiteFooter } from "@/components/footer";
import { AgeVerification } from "@/components/age-gate";
import { WhatsAppButton } from "@/components/ui";

export default function Home() {
  return (
    <>
      {/* Smooth Scroll */}
      <SmoothScroll />

      {/* Age Verification */}
      <AgeVerification />

      {/* Navigation */}
      <SiteNavigation />

      {/* Main Content */}
      <main>
        {/* Hero */}
        <HeroSection />

        {/* Brand Introduction */}
        <BrandIntroduction />

        {/* Product Experience */}
        <ProductExperience />

        {/* No-Pressure Service */}
        <NoPressureService />

        {/* Lounge Experience */}
        <LoungeExperience />

        {/* Private Events */}
        <PrivateEvents />

        {/* Stack Cards */}
        <ExperienceStack />

        {/* Gallery */}
        <GallerySection />

        {/* Owner */}
        <OwnerSection />

        {/* Visit / Location */}
        <VisitSection />
      </main>

      {/* Footer */}
      <SiteFooter />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </>
  );
}
