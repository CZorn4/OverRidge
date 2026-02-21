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
        primary: "#1a2a3a",
        "primary-dark": "#0f1d2d",
        accent: "#C12130",
        secondary: "#2c3e50",
        muted: "#f8f9fa",
      },
      fontFamily: {
        heading: ["Playfair Display", "Georgia", "Times New Roman", "serif"],
        body: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
