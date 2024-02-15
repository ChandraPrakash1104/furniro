/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#B88E2F',
        'font-color1': '#333333',
        'font-color2': '#666666',
        'green-accents': '#2EC1AC',
        'red-accents': '#E97171',
        'light-bg': '#F4F5F7',
        'box-color': '#FFF3E3',
      },
    },
  },
  plugins: [],
};
