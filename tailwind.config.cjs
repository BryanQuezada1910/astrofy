/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  theme: {
    extend: {
      // Extensiones personalizadas
      colors: {
        customPrimary: '#009e98',
        customSecondary: '#00b189',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#009e98",
          secondary: "#00e1ff",
          accent: "#008fff",
          neutral: "#060405",
          "base-100": "#002d3a",
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
      // Temas predeterminados
      "light",
      "dark"
    ],
    theme: "mytheme", // Configura 'mytheme' como el tema predeterminado
    darkTheme: "dark", // Nombre del tema para el modo oscuro
    logs: false, // Desactiva los registros de DaisyUI en la consola
  },
};
