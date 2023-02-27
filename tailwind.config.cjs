/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    colors: {
      'primary': '#568dff',
      'default-dark': '#2c2c2c',
      'default-light': '#fbfbfb'
    },
    extend: {},
  },
  plugins: [],
}
