/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

// const preserve3d = plugin(function({addUtilities}) {
//   addUtilities({
//     '.preserve-3d': {
//       'transform-style': 'preserve-3d',
//     }
//   })
// });

module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily:{
        sans:'Viga, sans-serif',
      },
      colors: {
        primary: '#9A1032',
        gold: '#FFD700',
        silver: '#A9A9A9',
        bronze: '#CD7F32',
      }
    },
    
  },
  plugins: [
    // preserve3d
  ],
}