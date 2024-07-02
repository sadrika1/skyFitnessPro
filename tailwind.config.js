/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      height: {
        h639px: "639px",
      },
      rounded: {
        radiusVideo: "30px",
      },
    },
    colors: {
      green: "#BCEC30",
      white: "#ffffff",
      gray: "#FAFAFA",
    },
  },
  plugins: [],
};
