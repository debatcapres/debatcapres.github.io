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
          { text: "Transrkip", link: "/debat-pertama/transkrip" },
        ],
      },
      {
        text: "Debat Kedua",
      },
      {
        text: "Debat Ketiga",
      },
      {
        text: "Debat Keempat",
      },
    ],

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
});
