module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#f7a072',
              '&:hover': {
                color: '#b5e2fa',
              },
            },
          },
        },
      },
      colors: {
        primary: '#b5e2fa',
        secondary: '#f7a072',
        tertiary: '#f9f7f3'
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}