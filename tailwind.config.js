/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(215, 25%, 15%)',
        surface: 'hsl(215, 25%, 20%)',
        primary: 'hsl(210, 80%, 50%)',
        accent: 'hsl(170, 70%, 40%)',
        success: 'hsl(130, 70%, 45%)',
        warning: 'hsl(30, 70%, 50%)',
        error: 'hsl(0, 70%, 50%)',
        textPrimary: 'hsl(0, 0%, 95%)',
        textSecondary: 'hsl(0, 0%, 70%)',
      },
      borderRadius: {
        'sm': '6px',
        'md': '10px',
        'lg': '16px',
      },
      spacing: {
        'sm': '8px',
        'md': '12px',
        'lg': '20px',
      },
      boxShadow: {
        'card': '0 4px 16px hsla(0, 0%, 0%, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
