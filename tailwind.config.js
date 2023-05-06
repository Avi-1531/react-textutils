/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      backgroundColor: {
        dark: '#1c114a',
        light: '#bfb7e2',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark', 'hover', 'focus'],
    },
  },
  plugins: [],
};








