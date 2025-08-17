import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#0f4c5c",
        color2: "#fcbf49",
        color3: "#f77f00",
        color4: "#ffecd1",
      },
      screens: {
        sm: "400px",
        xs: "300px", // Add custom small screens
      },
      keyframes: {
        slideX: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideY: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        slideX: "slideX 1s linear ",
        slideY: "slideY 1s linear ",
        slideRight: "slideRight 1s linear ", // اسم الحركة + المدة + التكرار
      },
    },
  },
  plugins: [],
};
export default config;
