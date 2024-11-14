/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        arima: ['Arima', 'system-ui'],
      },
      colors: {
        BrandCerulean: '#2D517B',
        BrandWhite: '#FFFFFF',
        BrandOffWhite: '#E6E7E8',
        BrandCyan: '#7DCCC0',
        BrandCyanPurge: '#49C7EC',
        BrandPale: '#E8F6FF',
      },
     
    },
  },
  plugins: [],
};