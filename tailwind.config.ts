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
      },
      colors: {
        primary: "var(--primary-color)",
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
