/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    './src/pages/**/*.{html,js,tsx}',
    './src/components/**/*.{html,js}',
    './src/route/**/*.{ts, tsx}',
  ],
  theme: {
    extend: {
      height: {
        'h-7-2': '1.97rem', /* 30px */
        'h-15': '3.25rem', /* 52px */
        'h-35':	'8.8rem', /* 141px */
        'h-37':	'9.1rem', /* 146px */
        'h-103': '30.3rem', /* 486px */
      },
      width: {
        'w-7-2': '1.97rem', /* 30px */
        'w-84': '23rem', /* 368px */
        'w-88': '26.75rem', /* 431px */
        },
        padding: {
          'p-8-2': '1.97rem', /*30px*/
          'pt-26': '6.37rem', /* 102px */
        },
        gap: {
          'gap-17': '1.06rem', /*17px */
          'gap-8-1': '2.1rem', /* 34px */
          'gap-31': '7.8rem', /* 124px */
        },
      fontSize: {
        '7.2xl': '4.8rem',
      },
      lineHeight: {
        'leading-6-1': '1.6rem', /* 26,4px */
        'leading-16': '4rem', /*64px */
        'leading-11': '2.75rem',
        'leading-26': '6.3rem', /*101.25 */
        'leading-15': '3.75rem', /*60px */
      },
      colors: {
        'custom-yellow': '#FFC700',
        'custom-black1': '#151720',
        'custom-black2': '#1E212E',
        'custom-green': '#BCEC30',
        'custom-green-hover': '#C6FF00',

      }
    },
  },
  plugins: [
     
  ],
}

