/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans Lao', 'sans-serif'],
        pops: ['Poppins', 'cursive']
      },
    },
    colors: {
      purp: {
        50: '#faf5ff',
        100: '#f2e8ff',
        200: '#e7d5ff',
        300: '#d4b4fe',
        400: '#ba83fd',
        500: '#a054f8',
        600: '#8a32eb',
        700: '#7e25dc',
        800: '#6420a9',
        900: '#531c87',
    },
    
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ]
}