/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bcDark:'#383D34'
      },
    },
    fontFamily: {
      digikala: ["Digikala"],
      iranianSans: ["IranianSans"],
    },
  },
  plugins: [],

};
