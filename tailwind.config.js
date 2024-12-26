/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        sans:['Poppins', 'sans-serif']
      }
    },
    gridTemplateColumns:{
      '50/50':'49% 49%',
    }
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

