module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      black: 'var(--black)',
      gray: 'var(--gray)',
      white: 'var(--white)',
      beige: 'var(--beige)',
      green: 'var(--green)',
      red: 'var(--red)'
    },
    fontFamily: {
      sans: 'Raleway, sans-serif'
    },
    boxShadow: {
      btn: '3px 3px 0px var(--green)',
      card: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1), -2px 2px 0px 0px var(--white)'
    },
    extend: {
      fontFamily: {
        handwritten: "'Amatic SC', sans-serif"
      }
    }
  },
  plugins: []
};
