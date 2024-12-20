// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1b1e',
        'dark-surface': '#25262b',
        'dark-text': '#e4e5e7',
        'dark-muted': '#909296',
        'dark-link': '#5c9fef',
        'dark-border': '#373A40',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#e4e5e7',
            a: {
              color: '#5c9fef',
              '&:hover': {
                color: '#7eb1f1',
              },
            },
            h1: {
              color: '#e4e5e7',
            },
            h2: {
              color: '#e4e5e7',
            },
            h3: {
              color: '#e4e5e7',
            },
            h4: {
              color: '#e4e5e7',
            },
            strong: {
              color: '#e4e5e7',
            },
            code: {
              color: '#e4e5e7',
              backgroundColor: '#25262b',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config