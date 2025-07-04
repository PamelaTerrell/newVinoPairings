/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: '#7B1E3F',
        cream: '#F5F0EB',
        gold: '#C59B5F',
        charcoal: '#2D2D2D',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
