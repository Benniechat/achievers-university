import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-secondary-fixed": "#2d0050",
        "surface-container-lowest": "#ffffff",
        "surface-tint": "#3a5f94",
        "surface": "#f0f4f8",
        "on-primary-fixed": "#001b3c",
        "on-tertiary-fixed-variant": "#723610",
        "secondary-fixed-dim": "#dfb7ff",
        "secondary": "#803abd",
        "on-tertiary-fixed": "#341100",
        "on-primary-container": "#799dd6",
        "inverse-surface": "#2f3034",
        "tertiary": "#381300",
        "surface-dim": "#dad9de",
        "on-secondary-container": "#4e0084",
        "inverse-primary": "#a7c8ff",
        "surface-container-highest": "#e2e2e7",
        "on-tertiary": "#ffffff",
        "inverse-on-surface": "#f1f0f5",
        "on-surface-variant": "#1a202c",
        "on-tertiary-container": "#d8885c",
        "primary": "#020b1f",
        "tertiary-fixed-dim": "#ffb690",
        "surface-container-low": "#f4f3f8",
        "outline-variant": "#c3c6d1",
        "secondary-container": "#c17bff",
        "surface-container": "#eeedf2",
        "error-container": "#ffdad6",
        "surface-container-high": "#e8e8ed",
        "surface-variant": "#e2e2e7",
        "on-secondary-fixed-variant": "#661aa3",
        "outline": "#737780",
        "on-primary-fixed-variant": "#1f477b",
        "on-primary": "#ffffff",
        "on-error": "#ffffff",
        "background": "#f9f9fe",
        "secondary-fixed": "#f1dbff",
        "on-error-container": "#93000a",
        "on-surface": "#1a1c1f",
        "primary-fixed": "#d5e3ff",
        "surface-bright": "#f9f9fe",
        "error": "#ba1a1a",
        "tertiary-fixed": "#ffdbca",
        "tertiary-container": "#592300",
        "primary-fixed-dim": "#a7c8ff",
        "on-background": "#1a1c1f",
        "primary-container": "#003366",
        "on-secondary": "#ffffff",
        "cta": "#fdbf0f",
        "accent": "#fdbf0f",
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "stack-lg": "48px",
        "container-max": "1280px",
        "margin-mobile": "16px",
        "margin-desktop": "48px",
        "base": "8px",
        "stack-sm": "12px",
        "gutter": "24px",
        "stack-md": "24px"
      },
      fontFamily: {
        "headline-lg": ["Inter", "sans-serif"],
        "display-lg-mobile": ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "display-lg": ["Inter", "sans-serif"],
        "body-xl": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "headline-xl": ["Inter", "sans-serif"],
        "label-sm": ["Inter", "sans-serif"]
      },
      fontSize: {
        "headline-lg": ["28px", { lineHeight: "36px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "display-lg-mobile": ["40px", { lineHeight: "48px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.02em", fontWeight: "500" }],
        "display-lg": ["64px", { lineHeight: "72px", letterSpacing: "-0.04em", fontWeight: "700" }],
        "body-xl": ["20px", { lineHeight: "30px", letterSpacing: "0", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", letterSpacing: "0", fontWeight: "400" }],
        "headline-xl": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "600" }]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
