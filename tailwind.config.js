/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F2937',  // Darker color for better contrast
        secondary: '#4B5563',
        accent: '#3B82F6',  // Accent color for buttons
        background: '#F3F4F6',  // Light background color
      },
    },
  },
  plugins: [],
};
