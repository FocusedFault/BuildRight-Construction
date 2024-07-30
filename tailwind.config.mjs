/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('/img/heroBg.jpg')",
      },
      colors: {
        "navy-blue": "#2A3A5E",
        "dark-orange": "#D35400",
        "light-gray": "#F4F4F4",
        "medium-gray": "#B0B0B0",
        "dark-gray": "#333333",
        "gold-yellow": "#F39C12",
        "forest-green": "#27AE60",
      },
      keyframes: {
        "move-in-left": {
          "0%": { opacity: 0, transform: "translateX(-100px)" },
          "80%": { transform: "translateX(10px)" },
          "100%": { opacity: 1, transform: "translate(0)" },
        },
        "move-in-right": {
          "0%": { opacity: 0, transform: "translateX(100px)" },
          "80%": { transform: "translateX(-10px)" },
          "100%": { opacity: 1, transform: "translate(0)" },
        },
        "move-in-bottom": {
          "0%": { opacity: 0, transform: "translateY(60px)" },
          "100%": { opacity: 1, transform: "translate(0)" },
        },
        "move-in-top": {
          "0%": { opacity: 0, transform: "translateY(-60px)" },
          "100%": { opacity: 1, transform: "translate(0)" },
        },
      },
      animation: {
        "move-in-left": "move-in-left 1s ease-out",
        "move-in-right": "move-in-right 1s ease-out",
        "move-in-bottom": "move-in-bottom 0.5s ease-out 0.75s",
        "move-in-top": "move-in-top 0.5s ease-out 0.75s",
      },
    },
  },
  plugins: [],
};
