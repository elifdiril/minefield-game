/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "bg-primary": "#E0AED0",
      "bg-secondary": "#FFE5E5",
      "text-primary": "#756AB6",
      "text-secondary": "#AC87C5",
      "square-primary": "#3D0C11",
      "white": "#fff",
      "black": "#000",
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1160px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
