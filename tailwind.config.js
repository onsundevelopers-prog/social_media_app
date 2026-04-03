/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],

  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        card: '#121214',
        border: '#1f1f22',

        primary: '#ff3b3b',
        secondary: '#ffd60a',
        accent: '#3b82f6',

        text: '#ffffff',
        muted: '#9ca3af',
      },

      maxWidth: {
        feed: '500px',
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pop: {
          '0%': { transform: 'scale(0.95)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },

      animation: {
        fade: 'fadeIn 0.2s ease-out',
        pop: 'pop 0.15s ease-out',
      },
    },
  },

  plugins: [],
};
