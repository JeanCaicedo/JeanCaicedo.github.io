module.exports = {
  content: ['./*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#64748B',
        dark: {
          DEFAULT: 'rgba(15, 23, 42, 0.3)',
          lighter: 'rgba(30, 41, 59, 0.3)',
          card: 'rgba(30, 41, 59, 0.4)'
        },
        light: {
          DEFAULT: 'rgba(15, 23, 42, 0.3)',
          darker: 'rgba(30, 41, 59, 0.3)',
          card: 'rgba(30, 41, 59, 0.4)'
        },
        text: {
          dark: '#F8FAFC',
          light: '#F8FAFC',
          muted: '#94A3B8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
} 