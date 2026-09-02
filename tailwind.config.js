/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#020617",
        surface: "#0f2027",
        glass: "rgba(6, 23, 21, 0.6)",
        brand: "#1ef0d7",
      },
      fontFamily: {
        sans: ["system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
        mono: ['"Roboto Mono"', "monospace"],
        display: ["Rubik", "sans-serif"],
        script: ["cursive"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(12px)" },
        },
        blink: {
          "0%, 50%, 100%": { opacity: 1 },
          "25%, 75%": { opacity: 0 },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(30px, -20px) scale(1.08)" },
        },
        "drift-reverse": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-24px, 24px) scale(1.05)" },
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(18px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fill-bar": {
          "0%": { width: "0%" },
        },
      },
      animation: {
        float: "float 2.4s ease-in-out infinite",
        blink: "blink 1s infinite",
        drift: "drift 9s ease-in-out infinite",
        "drift-slow": "drift-reverse 12s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};
