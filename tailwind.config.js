/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003527",
          dark: "#002117",
          container: "#064e3b",
          light: "#0b513d",
          fixed: "#b0f0d6",
          "fixed-dim": "#95d3ba",
        },
        "on-primary": {
          DEFAULT: "#ffffff",
          container: "#80bea6",
        },
        secondary: {
          DEFAULT: "#735b24",
          gold: "#b4975a",
          container: "#fddc98",
          fixed: "#ffdf9e",
          "fixed-dim": "#e3c381",
        },
        "on-secondary": {
          DEFAULT: "#ffffff",
          container: "#785f28",
        },
        surface: {
          DEFAULT: "#f8faf6",
          dim: "#d8dbd7",
          bright: "#f8faf6",
          "container-lowest": "#ffffff",
          "container-low": "#f2f4f1",
          container: "#eceeeb",
          "container-high": "#e7e9e5",
          "container-highest": "#e1e3e0",
          variant: "#e1e3e0",
          tint: "#2b6954",
        },
        "on-surface": {
          DEFAULT: "#191c1b",
          variant: "#404944",
        },
        background: "#f8faf6",
        "on-background": "#191c1b",
        outline: {
          DEFAULT: "#707974",
          variant: "#bfc9c3",
        },
      },
      fontFamily: {
        headline: ["'Playfair Display'", "Georgia", "serif"],
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
        label: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
      },
      spacing: {
        gutter: "24px",
        "margin-safe": "32px",
        "section-padding-mobile": "64px",
        "section-padding-desktop": "100px",
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'ambient': '0 10px 40px -10px rgba(6, 78, 59, 0.06)',
        'ambient-hover': '0 20px 40px -10px rgba(6, 78, 59, 0.12)',
      }
    },
  },
  plugins: [],
}
