import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: { sm: { max: "900px" } },
      width: {
        138: "38rem",
        140: "40rem",
      },
      keyframes: {
        blob: {
          "0%, 100%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "50%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
        },
        fish: {
          "0%": { transform: "rotate(95deg)" },
          "10%": { transform: "rotate(105deg)" },
          "20%": { transform: "rotate(115deg)" },
          "30%": { transform: "rotate(125deg)" },
          "40%": { transform: "rotate(135deg)" },
          "50%": { transform: "rotate(125eg)" },
          "60%": { transform: "rotate(115deg)" },
          "70%": { transform: "rotate(105deg)" },
          "100%": { transform: "rotate(95deg)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOutRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        avatar: "blob 12s linear infinite alternate",
        fish: "fish 2s linear infinite",
        openMenu: "slideInRight 0.3s ease-in-out",
        closeMenu: "slideOutRight 3.3s ease-in-out",
      },
    },
  },
  plugins: [],
  darkMode: ["class"],
};
export default config;
