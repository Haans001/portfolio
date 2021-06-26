module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: {
          light: '#2753ff',
          DEFAULT: '#123eee',
          dark: '#03f',
        },
        gray: {
          light: '#888888',
          DEFAULT: '#4D4D4D',
          dark: '#313131',
        },
      },
      backgroundColor: {
        page: '#131313',
        card: '#161616',
      },
      boxShadow: {
        DEFAULT: '0px 2px 6px rgba(0,0,0,0.26)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
