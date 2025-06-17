/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: '#14b8a6',
        accent: '#00ff99', // neon green
      },
      animation: {
        glow: "glowPulse 4s ease-in-out infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 30px #00ff9560" },
          "50%": { boxShadow: "0 0 60px #00ff9588" },
        },
      },
    },
  },
  plugins: [],
};
