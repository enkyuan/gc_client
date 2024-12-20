/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      black: {
        light: "#1F1F1F",
        DEFAULT: "#000000",
        dark: "#0D1321",
      },
      night: "#141414",
      cornflowerblue: {
        light: "#6495ED",
        dark: "#788BFF",
      },
      blue: {
        light: "#EFF8FB",
        DEFAULT: "3B82F6",
        dark: "#448EE4",
      },
      tropicalindigo: "#8585FF",
    },
    extend: {},
  },
  plugins: [],
};
