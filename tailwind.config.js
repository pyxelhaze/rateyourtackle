/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1E40AF',
      },
      spacing: {
        'custom-spacing': '10rem',
      },
      borderRadius: {
        'scrollbar-thumb': '25px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
