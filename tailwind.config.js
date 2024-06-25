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
        'green': '#BCEC30',
        'white': '#ffffff',
        'gray':'#FAFAFA'
      },
  },
  plugins: [],
}

// export default {
//   content: ["./**/*.{html,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
//
//
//
// module.exports = {
//   theme: {
//       colors: {
//         'green': '#BCEC30',
//         'white': '#ffffff',
//         'gray':'#FAFAFA'
//       },
//   },
// }
