module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      animation: {
        "bounce-slow": "bounce 2.5s infinite",
      },
      colors: {
        primary: {
          50: "#fdfaf6",
          100: "#f8f1e8",
          200: "#e9d7c1",
          300: "#dabf9a",
          400: "#cba573",
          500: "#b98a4c", // warna utama (classic brown)
          600: "#956e3b",
          700: "#71532c",
          800: "#4e381d",
          900: "#2b1e0e",
        },
        gray: {
          50: "#fafafa",
          100: "#f4f4f4",
          200: "#e4e4e4",
          300: "#d1d1d1",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      lineHeight: {
        hero: "4.5rem",
      },
    },
  },
  plugins: [],
};
