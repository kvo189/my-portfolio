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
        'primary-red': 'var(--primary-red)',
        'primary-red-hover': '#ef574a',
        'primary-red-active': '#ee493b',
        'secondary-red': '#FF595A',
        'primary-blue': '#8DA9D4',
        'dark-blue': '#010F5C',
        'primary-yellow': '#EBCA9A',
        'primary-gray': '#F0EFF4',
        'secondary-gray': '#25283A;',
        'secondary-gray-50': '#25283A80',
        'secondary-gray-75': '#25283ABF',
        'secondary-gray2': '#474B63',
      },    
      fontFamily: {
        inter: ['var(--font-inter)'],
        urbanist: ['var(--font-urbanist)'],
        rubik: ['var(--font-rubik)'],
        notoSans: ['var(--font-notoSans)'],
      },
      boxShadow: {
        'red': '6px 6px 25px 0px rgba(255, 89, 90, 0.2)',
      },
      borderRadius: {
        '1sm': '4px',
      }
    },
  },
  plugins: [],
}
export default config
