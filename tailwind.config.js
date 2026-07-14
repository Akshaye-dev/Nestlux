/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        regular: ["PlusJakartaSans"],
        heading: ["PlayfairDisplay"],
      },
      colors: {
        primary: "#1B3A5C",
        accent: "#C07A3A",
        bg: "#F4F1EB",
        secondary: "#151312",
        placeholder: "##A8B5DB",
        surface: "##0F0D23",
        text: "#18141A",
        textSecondary: "#A8B5DB",
        light: {
          100: "#d6c6ff",
          200: "a8b5db",
          300: "#9ca4ab",
        },
        dark: {
          100: "#221f3d",
          200: "#0f0d23",
        },
      },
    },
  },
  plugins: [],
};
