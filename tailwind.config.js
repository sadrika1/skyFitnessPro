/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
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

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        h639px: "639px",
      },
      rounded: {
        radiusVideo: "30px",
      },
    },
  },
  plugins: [],
};
