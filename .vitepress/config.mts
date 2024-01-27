import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Debat Capres",
  description:
    "Menganalisa Debat Capres 2024 dengan AI. Hindari terpolarisasi di Pilpres 2024.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Debat Pertama",
        items: [
          { text: "Intro", link: "/debat-pertama/intro" },
          { text: "Transkrip", link: "/debat-pertama/transkrip" },
        ],
      },
      {
        text: "Debat Kedua",
        items: [{ text: "Intro", link: "/debat-kedua/intro" }],
      },
      {
        text: "Debat Ketiga",
        items: [{ text: "Intro", link: "/debat-ketiga/intro" }],
      },
      {
        text: "Debat Keempat",
        items: [{ text: "Intro", link: "/debat-keempat/intro" }],
      },
      {
        text: "Debat Kelima",
        items: [{ text: "Intro", link: "/debat-kelima/intro" }],
      },
    ],

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
});
