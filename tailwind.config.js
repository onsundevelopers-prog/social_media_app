/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],

  content: [
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
  ],

  theme: {
    container: {
      center: true,
      padding: '1rem',
    },

    extend: {
      // 🎨 COLORS (meme vibe)
      colors: {
        bg: '#0a0a0a',          // main background
        card: '#121214',        // post background
        border: '#1f1f22',

        primary: '#ff3b3b',     // like / upvote
        secondary: '#ffd60a',   // highlight / coins
        accent: '#3b82f6',      // buttons

        text: '#ffffff',
        muted: '#9ca3af',
      },

      // 📱 FEED WIDTH (like TikTok)
      maxWidth: {
        feed: '500px',
      },

      // 🔤 FONT
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      // ⚡ FAST ANIMATIONS
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pop: {
          '0%': { transform: 'scale(0.95)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },

      animation: {
        fade: 'fadeIn 0.2s ease-out',
        pop: 'pop 0.15s ease-out',
        slide: 'slideUp 0.2s ease-out',
      },

      // 🧱 BORDER RADIUS (modern cards)
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },

  plugins: [require('tailwindcss-animate')],
};
