module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: theme('fontFamily.serif'),
              fontWeight: theme('fontWeight.bold'),
            },
            a: {
              color: theme('colors.blue.500'),
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              textDecorationThickness: '1px',
            }
          }
        }
      })
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
