/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        qprimary:'#065758',
        qbg:'#E2F0EF',
        qsecondary:'#A9D4D6',
        qsuccess: '#82C3C5',
        qerror:'#C46960'

      },
      fontFamily:{
        kt:['KT']
      }
    },
  },
  plugins: [],
}