module.exports = {
  darkMode: false, // or 'media' or 'class'
  plugins: [require('@tailwindcss/forms')],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: { extend: {} },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
      cursor: ['disabled'],
    },
  },
};
