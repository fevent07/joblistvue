/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        radii: '5px',
        'radii-full': '50%',
      },
      boxShadow: {
        main: 'rgba(50, 50, 93, 0.1) 0px 16px 18px -2px',
      },
      backgroundImage: {
        'header-mobile': 'url("/assets/images/bg-header-mobile.svg")',
        'header-desktop': 'url("/assets/images/bg-header-desktop.svg")',
        'icon-remove': 'url("/assets/images/icon-remove.svg")',
      },
      colors: {
        primary: 'hsl(180, 29%, 50%)',
        'gr-100': 'hsl(180, 52%, 96%)',
        'gr-200': 'hsl(180, 31%, 95%)',
        'gr-800': 'hsl(180, 8%, 52%)',
        'gr-900': 'hsl(180, 14%, 20%)',
        "50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554",
      },
      fontFamily: {
        spartan: ['Spartan', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        normal: '15px',
      },
    },
  },
  plugins: [],
};
