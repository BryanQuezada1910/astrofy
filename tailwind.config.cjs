import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [animations, require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      'night',
      {
        mytheme: {
          primary: "#009e98",
          secondary: "#00e1ff",
          accent: "#008fff",
          neutral: "#060405",
          "base-100": "#002d3a",
          info: "#00bde7",
          success: "#00ecbb",
          warning: "#f4bf50",
          error: "#ff1c72",
        },
        secondarytheme: {
          primary: "#00b189",
          secondary: "#00bace",
          accent: "#0004ff",
          neutral: "#0e0503",
          "base-100": "#e1ffff",
          info: "#00bde7",
          success: "#00d6b0",
          warning: "#f4bf50",
          error: "#ea0032",
        },
      },
    ],
  },
};
