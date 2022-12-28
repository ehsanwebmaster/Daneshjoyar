/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./assets/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        iransans: "iransans",
        iransansbold: "iransansbold",
      },
      colors: {
        mainColor: "#FF99D76B",
        secondColor: "#D58BDD",
        tirthColor: "#FF99D7",
        fourthColor: "#FFD372",
      },
    },
  },
  plugins: [],
};
