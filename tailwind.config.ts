import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--primary-background)",
        secondary: "var(--secondary-background)",
        terciary: "var(--terciary-background)",
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
      },
      borderColor: {
        spacing: "var(--spacing-border-color)",
      },
      borderRadius: {
        "bottom-rounded": "0% 0% 50% 50% / 93% 93% 7% 7%",
      },
    },
    keyframes: {
      drawIn: {
        to: {
          "stroke-dashoffset": "0",
        },
      },
      drawOut: {
        "0%": {
          "stroke-dashoffset": "0",
        },
        "100%": {
          "stroke-dashoffset": "-282",
        },
      },
    },
    animation: {
      draw: "drawIn 1s ease-out forwards",
    },
  },
  plugins: [],
};
export default config;
