/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#8a8a8a",
          "200": "#3d2219",
          "300": "rgba(0, 0, 0, 0.5)",
        },
        dimgray: "#47333d",
        oldlace: "#fff4e6",
        black: "#000",
        pink: "#f5c8c8",
        whitesmoke: "#f5f5f7",
        tomato: "#ff4646",
        silver: "#d1bfad",
        palegoldenrod: "#d8f1b7",
        lemonchiffon: "#fffdcf",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        belleza: "Belleza",
        arsenal: "Arsenal",
        "pt-serif": "'PT Serif'",
        poppins: "Poppins",
        baskervville: "Baskervville",
      },
      borderRadius: {
        "12xs-8": "0.8px",
        lgi: "19px",
        "3xs": "10px",
        "13xl": "32px",
      },
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      xl: "1.25rem",
      "29xl": "3rem",
      "5xl": "1.5rem",
      "9xl": "1.75rem",
      "27xl": "2.875rem",
      "17xl": "2.25rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
