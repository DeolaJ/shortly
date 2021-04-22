module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: 'hsl(180, 66%, 49%)',
          cyanHover: 'hsl(180, 56%, 75%)',
          darkViolet: 'hsl(257, 27%, 26%)',
        },
        secondary: {
          red: 'hsl(0, 87%, 67%)',
        },
        neutral: {
          gray: 'hsl(0, 0%, 75%)',
          grayishViolet: 'hsl(257, 7%, 63%)',
          lightGrey: 'hsl(230, 25%, 95%)',
          darkBlue: 'hsl(255, 11%, 22%)',
          darkViolet: 'hsl(260, 8%, 14%)',
        },
      },
      screens: {
        xs: '375px',
      },
      lineHeight: {
        12: '3rem',
        16: '4rem',
        20: '5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
