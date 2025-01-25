import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out'
      },
      colors: {
        'gray-medium': '#3B3B3B',
        'neutral-500': '#737373',
        'neutral-700': '#404040',
        'neutral-dark': '#585660',
        'stone-100': '#F5F5F4',
        'stroke-alternative': '#8F8F8F',
        'stroke-tertiary': '#EFEDF3',
        'white-primary': '#FFFFFF',
        'white-secondary': '#EEEEEE',
        primary: '#3B3B3B'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
export default config
