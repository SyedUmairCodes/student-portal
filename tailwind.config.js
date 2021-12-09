module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        eden: {
          '50': '#f2f7f7', 
          '100': '#e6efee', 
          '200': '#c0d6d5', 
          '300': '#9abdbc', 
          '400': '#4f8c89', 
          '500': '#035a57', 
          '600': '#03514e', 
          '700': '#024441', 
          '800': '#023634', 
          '900': '#012c2b'
      }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
