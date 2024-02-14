/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue3: "#19b0e0",
        "white-not-white": "#f8f8f8",
        white: "#fff",
        gray2: "#bcbebf",
        gray: "#7a8998",
        blue2: "#00427e",
        minigray: "#eee",
        whitesmoke: "#f9f9f9",
        "blue-4": "#0070cd",
        "texto-padrao": "#464646",
        gainsboro: "#d9d9d9",
        "green-buttons": "#34cd71",
        black: "#000",
        blue1: "#0f3c50",
        goldenrod: "#f5bd50",
        saddlebrown: "#994203",
        aquamarine: "#00ebc1",
        darkolivegreen: "#376a4c",
        salmon: "#f47070",
        gray3: "#aaa",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        paragrafo: "Ubuntu",
      },
      borderRadius: {
        "8xs": "5px",
        "3xs": "10px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      xl: "20px",
      "13xl": "32px",
      base: "16px",
      "2xs": "11px",
      "3xs": "10px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
