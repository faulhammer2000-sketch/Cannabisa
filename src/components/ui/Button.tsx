"use client";

import React from "react";
import { motion } from "motion/react";
import { useI18n } from "@/lib/i18n";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  asLink?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  icon,
  iconPosition = "right",
  fullWidth = false,
  asLink = false,
  className = "",
  ...props
}: ButtonProps) {
  const { dir } = useI18n();

  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide uppercase transition-all duration-300 ease-expo-out focus-premium disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group";

  const variants = {
    primary: "bg-olive text-cream hover:bg-olive-dark",
    secondary: "border border-cream/20 text-cream hover:bg-cream hover:text-black",
    outline: "border border-cream/30 text-cream hover:border-cream hover:bg-cream/5",
  };

  const sizes = {
    sm: "px-6 py-2.5 text-xs",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  // Reverse icon position for RTL
  const effectiveIconPosition = dir === "rtl" && iconPosition === "right" ? "left" : iconPosition;

  const content = (
    <>
      {effectiveIconPosition === "left" && icon && (
        <motion.span
          className="inline-flex"
          initial={{ x: 0 }}
          whileHover={{ x: dir === "rtl" ? 3 : -3 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.span>
      )}
      <span className="relative z-10">{children}</span>
      {effectiveIconPosition === "right" && icon && (
        <motion.span
          className="inline-flex"
          initial={{ x: 0 }}
          whileHover={{ x: dir === "rtl" ? -3 : 3 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.span>
      )}
      {/* Hover background effect */}
      <motion.span
        className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />
    </>
  );

  if (href || asLink) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}

// ─── Arrow Icon ─────────────────────────────────────────────────────────────
export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 8H15M15 8L8 1M15 8L8 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
