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
      animation: {
        loading: "loading 2s infinite ease",
        loadingInner: "loadingInner 2s infinite ease",
      },
      keyframes: {
        loading: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "25%,50%": {
            transform: "rotate(180deg)",
          },
          "75%,100%": {
            transform: "rotate(360deg)",
          },
        },
        loadingInner: {
          "0%,25%": {
            height: "0%",
          },
          "50%,75%": {
            height: "100%",
          },
          "100%": {
            height: "0%",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
