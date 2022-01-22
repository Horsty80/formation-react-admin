module.exports = {
  mode: "jit",
  presets: [require("./kanoma-preset.js")],
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    boxShadow: {
      curveShadowAfter: "35px -35px 0 10px var(--white)",
      curveShadowBefore: "35px 35px 0 10px var(--white)",
      card: "0 7px 25px rgba(0, 0, 0, 0.08)",
    },
    extend: {
      colors: {
        primary: "var(--purple)",
        secondary: "var(--yellow)",
        black2: "var(--black2)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
};
