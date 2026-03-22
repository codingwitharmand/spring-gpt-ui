import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#090909",
        paper: "#f5f5f4",
        mist: "#e7e5e4",
        fog: "#d6d3d1",
        graphite: "#262626",
        cloud: "#fafaf9"
      },
      fontFamily: {
        sans: ['"Avenir Next"', '"Segoe UI"', '"Helvetica Neue"', "sans-serif"],
        serif: ['"Iowan Old Style"', '"Palatino Linotype"', "serif"],
        mono: ['"SFMono-Regular"', '"IBM Plex Mono"', '"Menlo"', "monospace"]
      },
      boxShadow: {
        panel: "0 30px 80px rgba(0, 0, 0, 0.08)",
        soft: "0 16px 40px rgba(0, 0, 0, 0.06)"
      },
      animation: {
        rise: "rise 0.6s ease-out",
        pulseDots: "pulseDots 1.2s infinite ease-in-out"
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        pulseDots: {
          "0%, 80%, 100%": { opacity: "0.25", transform: "translateY(0)" },
          "40%": { opacity: "1", transform: "translateY(-3px)" }
        }
      }
    }
  },
  plugins: []
} satisfies Config;
