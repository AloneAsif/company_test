import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0A1B33',
          900: '#0F2748',
          700: '#1E3A66',
          500: '#3A5A8C',
          100: '#E7ECF5',
        },
        red: {
          700: '#A3121F',
          600: '#D62839',
          100: '#FBE1E4',
        },
        gray: {
          900: '#1A1D23',
          600: '#5B6472',
          200: '#E4E7EC',
          50: '#F7F8FA',
        },
        white: '#FFFFFF',
      },
      fontFamily: {
        heading: ['var(--font-sora)'],
        body: ['var(--font-inter)'],
      },
      fontSize: {
        'h1-mobile': ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1-desktop': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2-mobile': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2-desktop': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3-mobile': ['1.25rem', { lineHeight: '1.3' }],
        'h3-desktop': ['1.5rem', { lineHeight: '1.3' }],
        'body-mobile': ['1rem', { lineHeight: '1.6' }],
        'body-desktop': ['1.125rem', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
};

export default config;