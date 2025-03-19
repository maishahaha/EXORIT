/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        primary: "#007BFF",
        secondary: "#6c757d",
        dark: "#212529",
        light: "#f8f9fa"
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}