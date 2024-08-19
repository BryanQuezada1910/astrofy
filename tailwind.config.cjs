/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#009e98",
          secondary: "#00e1ff",
          accent: "#008fff",
          neutral: "#060405",
          "base-100": "#002d33",
          info: "#0081b0",
          success: "#00ecbb",
          warning: "#cc8300",
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
          warning: "#af4700",
          error: "#ea0032",
        },
      },
    ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
