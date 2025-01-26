/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          light: '#2a2a2a',
          dark: '#0f0f0f',
        },
        secondary: {
          DEFAULT: '#333333',
          light: '#4a4a4a',
          dark: '#262626',
        },
        accent: {
          DEFAULT: '#e0e0e0',
          light: '#f5f5f5',
          dark: '#cccccc',
        },
        neutral: {
          DEFAULT: '#f8f8f8',
          dark: '#1f1f1f',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [],
};