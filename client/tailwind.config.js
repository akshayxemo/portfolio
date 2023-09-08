/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        msm: "550px",
        xsm: "420px",
        xxsm: "300px",
      },
      keyframes: {
        spin360: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        drop: {
          from: {
            top: "0",
            opacity: "0",
          },
          to: {
            top: "5rem",
            opacity: "1",
          },
        },
        dropBack: {
          from: {
            top: "5rem",
            opacity: "1",
          },
          to: {
            top: "0",
            opacity: "0",
          },
        },
        scrollY: {
          from: {
            transform: "translateY(0%)",
          },
          to: {
            transform: "translateY(-75%)",
          },
        },
      },
      animation: {
        "spin-one": "spin360 1s linear 1 forwards",
        "drop-t": "drop 0.5s linear 1 forwards",
        "drop-t-back": "dropBack 0.5s linear 1 backwards",
        "scroll-y": "scrollY 10s linear 1 forwards",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      body: ["Hind", "sans-serif"],
    },
  },
  plugins: [],
  darkMode: "class",
};
