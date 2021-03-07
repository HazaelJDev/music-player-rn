module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightShades: {
          200: '#FFF599',
          500: '#F9F9F9',
          700: '#B79900',
        },
        secondary: {
          200: '#F8EAA5',
          500: '#FFDC00',
          700: '#896510',
        },
        primary: {
          200: '#96DCFB',
          500: '#0074D9',
          700: '#00429C',
        },
        text: {
          200: '#F1F1F1',
          500: '#DDDDDD',
          700: '#858585',
        },
        darkShades: {
          200: '#A0A0A0',
          500: '#111111',
          700: '#0A0A0A',
        },
        success: {
          200: '#CFF8A6',
          500: '#51BF22',
          700: '#258911',
        },
        info: {
          200: '#96DCFB',
          500: '#00DAF7',
          700: '#0080B1',
        },
        warning: {
          200: '#FEF198',
          500: '#FCCE00',
          700: '#B58D00',
        },
        danger: {
          200: '#FEC2A9',
          500: '#F9312A',
          700: '#B3152A',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
