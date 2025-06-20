/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["'Irish Grover'", "cursive"],
      },
      colors: {
        primary: {
          50: "#ffffff",
          100: "#f7f7f7",
          200: "#eeeeee",
          300: "#e1e1e1",
          400: "#cccccc",
          500: "#999999",
          600: "#666666",
          700: "#444444",
          800: "#222222",
          900: "#000000",
        },
        accent: {
          light: "#fefefe",
          medium: "#e6e6e6",
          dark: "#1c1c1c",
        },
      },
      dropShadow: {
        subtle: "0 1px 2px rgba(0, 0, 0, 0.06)",
        classic: "0 3px 8px rgba(0, 0, 0, 0.15)",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 1s ease-out forwards",
        "bounce-gentle": "bounceGentle 3s infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
