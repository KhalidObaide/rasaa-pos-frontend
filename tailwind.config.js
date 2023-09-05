/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    mode: "jit",
  purge: {
    content: [
      "./src//*.{js,jsx,ts,tsx}",
      "./src/views/*.{js,jsx,ts,tsx}",
      "./src/components//*.{js,jsx,ts,tsx}",
      "./node_modules/tw-elements/dist/js/**/*.js",
    ],
  },
    colors: {
      
    },
    extend: {
      fontSize: {
        "btnS": "20px",
        "sm" : '3px',
        "sizeBig" : "668px"
      },
      colors:{
        btn:"#00B4FF",
        charts: "#E6F6FD",
        page:"#999999",
        gray_fac: "#666666",
        gray_line:"#DADADA",
        lightGray : '#F2F8FE',
        gray_input:"#FFFFFF",
        gray_button: "#F5F5F5",
        lightBlue : " #F2F8FE",
        error: "#EB5252",
        black : "#000",
        grayLine : "#FAFAFA",
        B_blue: '#00B4FF',
        white: '#fff',
        shadow : "rgba(0,0,0,0.3)" ,
        editGreen : "#52C181",
        delet  :"#EC615A", 
       textGray : "#808080"
      },
      spacing: {
        // "1000": "1000px",
        // "713": "713px",
        // "637": "637px",
        // "419": "419px",
        // "322": "322px",
        // "282": "282px",
        // "44": "40px",
        // "38":"35px",
        // "60": "60px",
        // "290":"290px",
        // "300":"300px",
        // "324":"324px",
        // "310": "330px",
        "50" : "50rem",

        // "256": "256px",
        // "235" : "235px",
        // "112px":"112px",
        // "104": "104px",
        // "52": "52px",
        "31%": "31%", 
        // "88" : "88px",
        // "18" : "18px"

      }
    },
  },
  plugins: [],
}