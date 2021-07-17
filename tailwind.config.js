// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FEEBD2',
          200: '#FEE5CA',
          300: '#FDDFC1',
          400: '#F4EFE8',
          600: '#BFB0A4',
          700: '#C3996B',
          800: '#705C43',
          900: '#754D29',
        },
        secondary: {
          500: '#F17B9A',
        },
      },
      fontFamily: {
        body: 'Mohave',
        alt: 'IBM Plex Sans',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen sm': {},
          '@screen md': {
            maxWidth: '1200px',
          },
          '@screen lg': {},
          '@screen xl': {},
        },
      });
    },
  ],
  // specify other options here
};
