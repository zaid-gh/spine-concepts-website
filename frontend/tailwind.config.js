/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        inset: "inset 0px 0px 6px rgba(0, 0, 0, 0.1)",
        "inset-lg": "inset 0px 0px 15px rgba(0, 0, 0, 0.2)",
        "inset-xl": "inset 0px 0px 25px rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        "custom-bg-gray": "#F5F5F5",
        "custom-logo-aqua": "#7CA7AD",
        "custom-dark-gray": "#4B4B4B",
        "custom-light-gray": "#DEDEDE",
        "custom-light-beige": "#EFEDE8",
        "custom-logo-gray": "#969799",
      },
      fontFamily: {
        sans: ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
