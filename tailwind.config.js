/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '980px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        'primary': '#FD5006',
        'secondary': '#F08152',
        'tertiary': '#F6F1EA',
        'green': '#203635',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        canveat: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
}

