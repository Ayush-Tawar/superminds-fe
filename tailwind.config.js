/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      benzgrotesk: ["BenzGrotesk", "sans-serif"],
      glancyrMedium: ["Glancyr-Medium", "sans-serif"],
      glancyrThin: ["Glancyr-Thin", "sans-serif"],
    },
    extend: {
      colors: {
        darkBg: "#1A1919",
        greenBg: "#BAFF3B",
        lightPinkTxt: "#FFE9E9",
        offWhiteTxt: "#FFFEFE",
        placeHolderTxt: "#999999",
        dialogBg: "#1C1C1C",
        dialogSubTxt: "#858181",
        btnLight: "#686767",
        btnDark: "#373737",
        addNewProfileTxt: "#212121",
        footerBg: "#188CFF",
        copyright: "#D0DAF5",
        yellowTxt: "#FFD233",
        ContactModalBg: "#0D250E",
      },
    },
  },
  plugins: [],
};
