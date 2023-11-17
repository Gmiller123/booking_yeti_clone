/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#6F61C0",
      },
      fontFamily: {
        primary: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
