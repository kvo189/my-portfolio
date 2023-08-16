import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-red': '#F1665A',
        'primary-red-hover': '#ef574a',
        'primary-red-active': '#ee493b',
        'primary-blue': '#8DA9D4',
        'primary-yellow': '#EBCA9A',
        'primary-gray': '#F0EFF4',
        'secondary-gray': '#25283A;',
        'secondary-gray-50': '#25283A80',
        'secondary-gray2': '#474B63',
      },    
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
