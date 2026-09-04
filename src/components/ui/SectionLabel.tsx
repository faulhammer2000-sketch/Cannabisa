"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
  animate?: boolean;
}

export function SectionLabel({
  children,
  className = "",
  centered = false,
  animate = true,
}: SectionLabelProps) {
  const baseStyles = `eyebrow ${centered ? "text-center" : ""} ${className}`;

  if (animate) {
    return (
      <motion.div
        className={baseStyles}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={baseStyles}>{children}</div>;
}
