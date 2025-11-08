/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        island: ["Island Moments", "cursive"],
      },
      screens: {
        xxs: "360px",
        xs: "480px",
      },
    },
  },
  plugins: [],
};
