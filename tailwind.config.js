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
        900: '#090913',
      },
      coral: {
        100: '#EEAFC2',
        400: '#EC2662',
        500: '#D62F4D',
      }
    },
    extend: {
      colors: {
        backgroundPrimary: 'var(--backgroundPrimary)',
        fontPrimary: 'var(--fontPrimary)',
        highlightPrimary: 'var(--highlightPrimary)',
        highlightSecondary: 'var(--highlightSecondary)',
      }
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
}