/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: "Quicksand , sans-serif",
      display: "Gotham Rounded, Arial, sans-serif",
    },

    extend: {
      colors: {
        neutral: "#323232",
        primary: "#1D9A78",
        "primary-extralight": "#40B9B3",
        "primary-dark": "#00A886",
        "primary-light": "#32B4A8",
      },
    },
  },
  plugins: [],
};
