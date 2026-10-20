import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef3fb",
          100: "#d9e4f5",
          200: "#b3c9ea",
          300: "#7fa3d8",
          400: "#4c7cc2",
          500: "#2d5ea6",
          600: "#1f4684",
          700: "#173764",
          800: "#102848",
          900: "#0b1f3a",
          950: "#071426",
        },
        teal: {
          50: "#effefb",
          100: "#c8fff4",
          200: "#91fee9",
          300: "#52f4d9",
          400: "#1fdfc4",
          500: "#06c3ab",
          600: "#029d8c",
          700: "#067e72",
          800: "#0a645c",
          900: "#0d534d",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
