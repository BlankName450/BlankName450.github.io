module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      'md': '768px',
      // other breakpoints...
    },
    extend: {
      fontFamily: {
        edu: ['"Edu QLD Beginner"', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
  // Remove any unnecessary restrictions
  corePlugins: {
    verticalAlign: false,
  }
}

  