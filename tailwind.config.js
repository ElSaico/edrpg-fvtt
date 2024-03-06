import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{js,svelte}"],

   theme: {
      fontFamily: {
         sans: ['"Exo 2"', "sans-serif"],
      },
      colors: {
         black: "#000000",
         white: "#ffffff",
         transparent: "transparent",
         section: {
            "embedded-header": "#025778",
            "long-corner": "#0e2b45",
            "short-corner": "#236b9d",
            end: "#3397d9",
         },
         notes: "#e3e3e3",
         border: "#858585",
         table: {
            header: "#759cc7",
            check: "#4c82ba",
            name: "#a8bad9",
            cell: "#eeeeee",
            highlight: "#dee8f3",
            "highlight-border": "#5e85ab",
            military: "#c7d4e6",
         },
         damage: {
            DEFAULT: "#fae3dc",
            border: "#f04f21",
         },
         karma: {
            begin: "#2e0078",
            corner: "#421197",
            end: "#8a51ff",
            notes: "#c2b8ff",
            table: "#9e9cd1",
            name: "#bdbae0",
         },
         endurance: {
            begin: "#e60000",
            end: "#ff9700",
            notes: "#f8c2b5",
         },
         cash: "#68d7ba",
      },
   },

   plugins: [forms],
};
