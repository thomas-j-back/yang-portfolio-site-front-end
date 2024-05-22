import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '360px',
      // => @media (min-width: 360px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'md2': "1000px",
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl' : '2400px'
      
    },
    colors: {
      'dark-text': '#1C1C1C',
      'accent': '#CFEBCA',
      'white': '#fff',
      'accent-dark' : '#384139',
      'footer' :'#000000',
      'soft-gray': '#575757',
      'faint-gray':'#F5F5F5',
      'light-gray': '#839599',
      'fill-grey': '#F3F4F5',
      'dark-gray': '#505B5D',
      'hero-highlight':'#666666'
    },
    fontFamily: {
      neue: ['Helvetica Neue'],
      gs: ['GS']
    },
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}
export default config
