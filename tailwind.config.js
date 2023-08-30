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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
