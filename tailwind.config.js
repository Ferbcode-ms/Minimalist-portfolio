/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "custom-b": "50% 0% 10% 50% / 50% 10% 0% 45% ",
        "custom-b2": "24% 0% 62% 59% / 0% 10% 100% 100%",
      },
      transitionTimingFunction: {
        "custom-e": "cubic-bezier(0.76,0,0.24,1)",
      },
      colors: {
        dark: "#1C1D20",
        "dark-dark": "#141517",
        light: "#FFFFFF",
        blue: "#455CE9",
        "blue-dark": "#334BD3",
        gray: "#999D9E",
        lightgray: "#E9EAEB",
        white: "#FFFFFF",
        border: "rgba(28, 29, 32, 0.175)",
        "border-solid": "#D2D2D2",
        "border-light": "rgba(255, 255, 255, 0.2)",
        "border-solid-light": "#545557",
        text: "#1C1D20",
        "text-light": "#FFF",
        "alert-error": "#ff4444",
        "alert-success": "#24C958",
      },
      transitionTimingFunction: {
        primary: "cubic-bezier(.7, 0, .3, 1)",
      },
      transitionDuration: {
        primary: ".5s",
        fast: ".3s",
        smooth: ".7s",
        slow: ".9s",
      },
      padding: {
        "section-padding": "clamp(5em, 21vh, 12em)",
        "container-padding": "clamp(2.5em, 8vw, 8em)",
        "gap-padding": "clamp(1.5em, 4vw, 2.5em)",
      },
    },
  },
  plugins: [],
};
