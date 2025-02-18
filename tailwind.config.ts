import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      blue: '#5F9DE2',
      purple: '#9781F3',
      danger: '#F05D6C',

      gray: {
        100: '#DAE4F2',
        200: '#C8D0DA',
        300: '#95A1B1',
        400: '#6F7D90',
        500: '#2A313C',
        600: '#21252C',
        700: '#191D24',
        800: '#13161B',
        900: '#0F1216'
      }
    },
    fontFamily: {
      heading: 'var(--font-oxanium)',
      sans: 'var(--font-montserrat)'
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      }
    }
  },
  plugins: []
};
export default config;
