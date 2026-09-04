import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#050505",
          soft: "#0B0B0B",
        },
        cream: {
          DEFAULT: "#F4F0E8",
          dark: "#E8E0D2",
        },
        olive: {
          DEFAULT: "#59664A",
          dark: "#1D2A20",
        },
        gold: {
          DEFAULT: "#C8A96B",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        arabic: ["var(--font-noto-arabic)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem, 8vw, 9rem)", { lineHeight: "0.95" }],
        "display-xl": ["clamp(2.75rem, 6vw, 7rem)", { lineHeight: "0.97" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 5.5rem)", { lineHeight: "1.0" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 4rem)", { lineHeight: "1.05" }],
        "display-sm": ["clamp(1.5rem, 2.5vw, 2.75rem)", { lineHeight: "1.1" }],
      },
      letterSpacing: {
        widest: "0.25em",
        wider: "0.15em",
        wide: "0.08em",
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "expo-in-out": "cubic-bezier(0.87, 0, 0.13, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1000": "1000ms",
        "1200": "1200ms",
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(to bottom, transparent 0%, #050505 100%)",
        "gradient-dark-mid": "linear-gradient(to bottom, transparent 40%, #050505 100%)",
      },
      screens: {
        xs: "390px",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "88": "22rem",
        "100": "25rem",
        "112": "28rem",
        "128": "32rem",
      },
    },
  },
  plugins: [],
};

export default config;
