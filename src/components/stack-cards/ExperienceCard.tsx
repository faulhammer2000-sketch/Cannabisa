"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  number: string;
  image: string;
  label: string;
  index: number;
  total: number;
}

export function ExperienceCard({ number, image, label, index, total }: ExperienceCardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      className={`
        stack-card relative w-full 
        ${isMobile ? "" : "md:absolute md:w-[90%] lg:w-[70%]"}
        aspect-[4/3] rounded-sm overflow-hidden
        shadow-2xl
      `}
      style={{
        zIndex: total - index,
        ...(isMobile
          ? {}
          : {
              top: `${index * 40}px`,
              left: "50%",
              transform: "translateX(-50%)",
            }),
      }}
      whileHover={
        isMobile
          ? {}
          : {
              scale: 1.02,
              y: -10,
              transition: { duration: 0.3 },
            }
      }
    >
      {/* Image */}
      <div className="absolute inset-0">
        <Image src={image} alt={label} fill className="object-cover" sizes="(max-width: 768px) 100vw, 70vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
        {/* Number */}
        <div className="flex justify-end">
          <motion.span
            className="font-serif text-6xl md:text-8xl text-cream/20 leading-none"
            whileHover={{ scale: 1.1, color: "rgba(244, 240, 232, 0.4)" }}
            transition={{ duration: 0.3 }}
          >
            {number}
          </motion.span>
        </div>

        {/* Label */}
        <div>
          <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl text-cream tracking-tight leading-tight">
            {label}
          </h3>
        </div>
      </div>

      {/* Border accent */}
      <div className="absolute inset-0 border border-cream/10 pointer-events-none rounded-sm" />
    </motion.div>
  );
}
