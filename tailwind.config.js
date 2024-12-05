/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in',
        zoomIn: 'zoomIn 1s ease-in-out',
        bounceInUp: 'bounceInUp 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        bounceInUp: {
          '0%': { transform: 'translateY(200px)', opacity: 0 },
          '60%': { transform: 'translateY(-30px)', opacity: 1 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}