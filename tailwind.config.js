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
        "h-7-2": "1.97rem" /* 30px */,
        "h-15": "3.25rem" /* 52px */,
        "h-35": "8.8rem" /* 141px */,
        "h-37": "9.1rem" /* 146px */,
        "h-79": "19.38rem" /* 310px */,
        "h-100": "25.7rem" /* 412px */,
        "h-103": "30.3rem" /* 486px */,
      },
      width: {
        "w-7-2": "1.97rem" /* 30px */,
        "w-84": "23rem" /* 368px */,
        "w-88": "26.75rem" /* 431px */,
        container: "22rem" /*353px*/,
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
    padding: {
      "p-8-2": "1.97rem" /*30px*/,
      "pt-15": "3.75rem" /* 60px */,
      "pt-26": "6.37rem" /* 102px */,
      "pt-38": "9.75rem" /* 156px */,
    },
    screens: {
      sm: "425px",
      // => @media (min-width: 425px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    gap: {
      "gap-17": "1.06rem" /*17px */,
      "gap-8-1": "2.1rem" /* 34px */,
      "gap-31": "7.8rem" /* 124px */,
    },
    fontSize: {
      "7.2xl": "4.8rem",
      "text-3-1xl": "1.975rem" /* 32px */,
    },
    lineHeight: {
      "leading-4-1": "1.03rem" /* 17,6px */,
      "leading-6-1": "1.6rem" /* 26,4px */,
      "leading-8-9": "2.19rem" /* 35,2px */,
      "leading-11": "2.75rem" /*44px*/,
      "leading-15": "3.75rem" /*60px */,
      "leading-16": "4rem" /*64px */,
      "leading-26": "6.3rem" /*101.25 */,
    },
    colors: {
      "custom-yellow": "#FFC700",
      "custom-black1": "#151720",
      "custom-black2": "#1E212E",
      "custom-green": "#BCEC30",
      "custom-green-hover": "#C6FF00",
      "custom-purple": "#7D458C",
      "custom-pink": "#FF7E65",
      "custom-orange": "#F7A012",
      "custom-blue": "#2491D2",
    },
  },
  plugins: [],
};
