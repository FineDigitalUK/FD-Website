/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.{html,twig}',
    './src/**/*.{js,ts}',
    './web/**/*.{html,js}',
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        'brand': '#66cc32',
        'navy': '#181c2a',
        'charcoal': '#23272f',
        'blue': '#3b82f6',
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}