/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '763': '763px',
      },

      colors: {
        bgDark:'#383D34',
        bgGray:'#B5B9B1',
        bgImgHero:'#292D26',
        btnGreen:'#0C574E',
        yellowClr:'#D9B863',
        bgWhite:"#F4F4F4",
        bgGrayLight:"#DAD9D9",
      },
    },
    fontFamily: {
      digikala: ["Digikala"],
      iranianSans: ["IranianSans"],
    },
  },
  plugins: [],

};
