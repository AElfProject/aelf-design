/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        'primary-color': '#8B60F7',
        'dark-caption': '#796F94',
        'dark-bgc-disable': '#211A34',
        'dark-border-default': '#231F30',
        'dark-bgc': '#0E0C15',
        'dark-bgc-hover': '#181327',
        'primary-bg': '#33245866',
        'primary-border': '#211938',
        'primary-border-hover': '#A280F9',
        'dark-border-shadow': '#252132',
        'dark-clickable': '#7B7782',
        'dark-hover-list': '#181327',
        'primary-border-active': '#8256F2',
        'card-bg': '#100D1B',
        'countdown-text': '#09001B',
        'view-more-border': '#FFFFFF1A',
        'dark-modal-bg': '#191624',
        'countdown-bg': '#0000007A',
        'error-border': '#BE283A',
        'nav-search-bg': '#18161E',
        'error-color': '#BE283A',
        'dark-link': '#1B76E2',
        'dark-loading-bg': 'rgba(0, 0, 0, 0.64)'
      },
      boxShadow: {
        dropMenu: '0px 6px 16px 0px rgba(0, 0, 0, 0.16)',
        inset: '0px -1px 0px 0px #252132 inset',
        'line-bot': '0px 1px 0px 0px #252132 inset',
        'tab-active': '0px -2px 0px 0px #8B60F7 inset'
      },
      screens: {
        pcMax: '1440px',
        pcMin: '500px'
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
