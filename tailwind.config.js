
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: false,
  },
  theme: {
    extend: {
      animation: {
        modal: "modal 0.5s",
        "drawer-right": "drawer-right 0.3s",
        "drawer-left": "drawer-left 0.3s",
        "drawer-top": "drawer-top 0.3s",
        "drawer-bottom": "drawer-bottom 0.3s",
      },
      keyframes: {
        modal: {
          "0%, 100%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "drawer-right": {
          "0%, 100%": { right: "-500px" },
          "100%": { right: "0" },
        },
        "drawer-left": {
          "0%, 100%": { left: "-500px" },
          "100%": { left: "0" },
        },
        "drawer-top": {
          "0%, 100%": { top: "-500px" },
          "100%": { top: "0" },
        },
        "drawer-bottom": {
          "0%, 100%": { bottom: "-500px" },
          "100%": { bottom: "0" },
        },
      },
    },
  },
  variants: {},
  plugins: [

    require("daisyui"),
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
