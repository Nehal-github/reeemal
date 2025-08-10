/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        romantic: ['var(--font-romantic)', 'cursive'],
        keyframes: {
    'fade-in-up': {
      '0%': { opacity: 0, transform: 'translateY(20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
      boxShadow: {
    romantic: '0 4px 20px rgba(236, 72, 153, 0.3)',
  },
    },
    
  },
  animation: {
    'fade-in-up': 'fade-in-up 1s ease-out forwards',
  },

        
      },
      colors: {
        pink: {
          100: '#ffe4e6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
        },
        purple: {
          200: '#e9d5ff',
        },
      },
      boxShadow: {
        romantic: '0 4px 20px rgba(236, 72, 153, 0.3)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-in-out',
      },
      fontFamily: {
  romantic: ['var(--font-romantic)', 'cursive'],
}

    },
  },
  plugins: [],
};
