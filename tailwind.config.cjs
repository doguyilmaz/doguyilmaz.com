const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "fill-16": "repeat(auto-fill, minmax(16rem, 1fr))",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', defaultTheme.fontFamily.mono],
      },
      colors: {
        contentbackground: "var(--content-bg)",
        lightercontentbackground: "var(--lighter-content-bg)",
        primary: {
          50: "rgb(var(--primary-50) / <alpha-value>)",
          100: "rgb(var(--primary-100) / <alpha-value>)",
          200: "rgb(var(--primary-200) / <alpha-value>)",
          300: "rgb(var(--primary-300) / <alpha-value>)",
          400: "rgb(var(--primary-400) / <alpha-value>)",
          500: "rgb(var(--primary-500) / <alpha-value>)",
          600: "rgb(var(--primary-600) / <alpha-value>)",
          700: "rgb(var(--primary-700) / <alpha-value>)",
          800: "rgb(var(--primary-800) / <alpha-value>)",
          900: "rgb(var(--primary-900) / <alpha-value>)",
        },
        accent: {
          50: colors.teal[50],
          100: colors.teal[100],
          200: "rgb(var(--accent-verylight) / <alpha-value>)",
          300: "rgb(var(--accent-light) / <alpha-value>)",
          400: "rgb(var(--accent-regular) / <alpha-value>)",
          500: "rgb(var(--accent-dark) / <alpha-value>)",
          600: colors.teal[600],
          700: colors.teal[700],
          800: "rgb(var(--accent-darkest) / <alpha-value>)",
          900: colors.teal[900],
        },
      },
    },
  },
  plugins: [
    require("tailwind-gradient-mask-image"),
    require("@tailwindcss/typography"),
  ],
};
