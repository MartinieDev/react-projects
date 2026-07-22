/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        newColor: '#f2b4',
      },

      fontFamily: {
        sans: ['monospace', 'Yuyu Short'],
      },

      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
