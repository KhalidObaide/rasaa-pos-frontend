/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./src/views/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
      "./node_modules/tw-elements/dist/js/**/*.js",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        btn:"#00B4FF",
        chart:"#E6F6FD",
        error:"#EB5252"
      },
      fontSize: {
        "btnS": "20px",
        "sm" : '3px',
        "sizeBig" : "668px"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}