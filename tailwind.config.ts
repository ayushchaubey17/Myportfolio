import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#08090c",
          900: "#0b0d12",
          850: "#10131a",
          800: "#141821",
          700: "#1c2130",
          600: "#272e40",
          500: "#3a4358",
        },
        line: {
          DEFAULT: "#1e2430",
          strong: "#2c3444",
        },
        accent: {
          DEFAULT: "#5eead4",
          dim: "#2dd4bf",
          deep: "#0f766e",
        },
        amber2: "#fbbf24",
        mist: {
          DEFAULT: "#e6e9ef",
          dim: "#9aa3b2",
          faint: "#5c6675",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      keyframes: {
        "flow-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(400%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.45" },
        },
        "dash-flow": {
          to: { strokeDashoffset: "-24" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "flow-down": "flow-down 2.4s linear infinite",
        "pulse-soft": "pulse-soft 2.2s ease-in-out infinite",
        "dash-flow": "dash-flow 1.2s linear infinite",
        marquee: "marquee 36s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
