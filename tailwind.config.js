/** @type {import('tailwindcss').Config} */
module.exports = {
     content: ["./dist/*.{html,js}"],
     theme: {
          screens: {
               sm: "480px",
               md: "768px",
               lg: "976px",
               xl: "1440px",
          },
          borderRadius: {
               'none': '0',
               'sm': '.125rem',
               DEFAULT: '.25rem',
               'lg': '.5rem',
               'full': '9999px',
             },
          colors: {
               blue: "#1fb6ff",
               purple: "#7e5bef",
               pink: "#ff49db",
               orange: "#ff7849",
               green: "#13ce66",
               yellow: "#ffc82c",
               "gray-dark": "#273444",
               gray: "#8492a6",
               "gray-light": "#d3dce6",
          },
          fontFamily: {
               sans: ["Graphik", "sans-serif"],
               serif: ["Merriweather", "serif"],
          },
          extend: {
               spacing: {
                    128: "32rem",
                    144: "36rem",
               },
               borderRadius: {
                    "4xl": "2rem",
               },
          },
     },
     plugins: [],
};
