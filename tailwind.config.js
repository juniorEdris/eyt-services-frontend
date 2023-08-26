/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        "app-theme": "#00BCD4",
        "app-light": "#FFFFFF",
        "app-dark": "#111",
      },
    },
  },
  plugins: [],
};
