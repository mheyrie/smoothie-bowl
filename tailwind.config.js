/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        arima: ["Arima", "system-ui"],
      },
      colors: {
        PrimaryY: "#FFF7CF",
        SecondaryY: "#F5DE6E",
        PrimaryP: "#FFE1E2",
        SecondaryP: "#FCB1B4",
        PrimaryG: "#ECFFCC",
        SecondaryG: "#8FB351",
        PrimaryDp: "#FFCBEA",
        SecondaryDp: "#C976A7",
        HoverOne: "#D1BC5A",
        HoverTwo: "#C67679",
        HoverThr: "#5E8220",
        HoverFor: "#F1AEDC",
      },
    },
  },
  plugins: [],
};
