/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'hanken': ['Hanken Grotesk', 'sans-serif'],
      'roboto': ['Roboto', 'Poppins', 'sans-serif']
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      DEFAULT: '.25rem',
      'lg': '.5rem',
      'full': '9999px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      purple: {
        50: '#F0F0FF',
        100: '#E0E0F5',
        850: '#0D0D1C',
        900: '#090913',
      },
      coral: {
        100: '#EEAFC2',
        400: '#EC2662',
        500: '#D62F4D',
        700: '#C3003B',
      }
    },
    extend: {
      colors: {
        backgroundPrimary: 'var(--backgroundPrimary)',
        backgroundSecondary: 'var(--backgroundSecondary)',
        fontPrimary: 'var(--fontPrimary)',
        highlightPrimary: 'var(--highlightPrimary)',
        highlightSecondary: 'var(--highlightSecondary)',
      }
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
}