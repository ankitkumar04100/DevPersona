/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",      // Custom brand color (blue-purple)
        secondary: "#F59E0B",    // Accent color (orange-yellow)
        accent: "#10B981",       // Highlight / call-to-action
        darkBg: "#1F2937",       // Dark mode background
        lightBg: "#F3F4F6"       // Light mode background
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // Modern, readable font
        heading: ["Poppins", "ui-sans-serif", "system-ui"] // For headings and hero
      },
      spacing: {
        128: "32rem",   // Extra-large spacing for hero sections
        144: "36rem"
      },
      borderRadius: {
        xl: "1.25rem",  // Rounded cards and buttons
        "2xl": "1.5rem"
      },
      boxShadow: {
        "card": "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)"
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),   // Beautify forms (Contact Form)
    require("@tailwindcss/typography"), // Styled text for blog / projects description
    require("@tailwindcss/aspect-ratio") // Maintain responsive project images
  ],
  darkMode: "class" // Enable manual dark/light mode toggle
};
