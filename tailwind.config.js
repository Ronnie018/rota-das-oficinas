/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#FFA400',
        't-gray': '#747474',
        'dark-gray': '#2C2C2C',
        'l-gray': '#ACACAC',
        gray: '#505050',
        whitegrayish: '#EEEEEE;',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
