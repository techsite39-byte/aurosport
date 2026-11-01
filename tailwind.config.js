/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#080B14',
        card: '#111827',
        primary: {
          DEFAULT: '#8B5CF6',
          hover: '#7C3AED',
          glow: 'rgba(139, 92, 246, 0.4)',
        },
        secondary: {
          DEFAULT: '#06B6D4',
          hover: '#0891B2',
          glow: 'rgba(6, 182, 212, 0.4)',
        },
        highlight: {
          DEFAULT: '#A3E635',
          hover: '#84CC16',
          glow: 'rgba(163, 230, 53, 0.4)',
        },
        dark: {
          950: '#05070D',
          900: '#080B14',
          850: '#0D1220',
          800: '#111827',
          700: '#1F2937',
          600: '#374151',
        },
      },
      fontFamily: {
        gaming: ['Orbitron', 'sans-serif'],
        sans: ['Rajdhani', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Chakra Petch', 'Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'neon-purple': '0 0 25px -3px rgba(139, 92, 246, 0.45)',
        'neon-cyan': '0 0 25px -3px rgba(6, 182, 212, 0.45)',
        'neon-lime': '0 0 25px -3px rgba(163, 230, 53, 0.45)',
        'card-glow': '0 8px 32px 0 rgba(139, 92, 246, 0.15)',
        'card-hover': '0 16px 48px 0 rgba(6, 182, 212, 0.25)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'grid-pattern': "radial-gradient(circle, rgba(139, 92, 246, 0.08) 1px, transparent 1px)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
