/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {},
    colors: {
      "white": "#ffffff",
      "gray-300": "#2D2E32",
      "gray-200": "#555555",
      "blue": "#147EFB",
      "gray-100": "#F9F9F9"
    },
  },
  plugins: [],
}