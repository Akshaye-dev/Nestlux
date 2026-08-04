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
        "plus-jakarta-sans": ["PlusJakartaSans"],
        "playfair-display": ["PlayfairDisplay"],
        "plus-jakarta-sans-semi-bold": ["PlusJakartaSansSemiBold"],
      },
      colors: {
        primary: "#1B3A5C",
        accent: "#c2410c",
        accentLight: "#ffedd5",
        bg: "#F4F1EB",
        secondary: "#151312",
        placeholder: "#A8B5DB",
        surface: "#1B3A5C",
        surfaceSecondary: "#D5E0EA",
        text: "#18141A",
        divider: "#E5E5E5",
        textSecondary: "#666666",
        input: {
          background: "#F3F3F3",
          text: "#666666",
        },
        light: {
          100: "#d6c6ff",
          200: "#a8b5db",
          300: "#9ca4ab",
        },
        dark: {
          100: "#221f3d",
          200: "#0f0d23",
        },
        gray: {
          50: "#F9F9F9",
          100: "#F3F3F3",
          200: "#E5E5E5",
          300: "#D1D5DB",
          400: "#A8B5DB",
          500: "#9CA4AB",
          600: "#666666",
          700: "#4B5563",
          800: "#374151",
          900: "#18141A",
          950: "#151312",
        },
      },
    },
  },
  plugins: [],
};
