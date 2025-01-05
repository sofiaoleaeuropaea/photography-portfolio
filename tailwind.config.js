/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: '1rem',
      base: '1.25rem',
      xl: '1.563rem',
      '2xl': '3.75rem',
      '3xl': '6.25rem',
    },
    extend: { 
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-120%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        slideOut: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-120%)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.8s cubic-bezier(.4,0,.2,1) forwards',
        slideOut: 'slideOut 0.7s cubic-bezier(.4,0,.2,1) forwards',
      },
      
    },
  },
  plugins: [],
};
