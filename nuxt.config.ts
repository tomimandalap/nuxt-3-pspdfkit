// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt PSPDFKit",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "~/modules/copy-files"],
  colorMode: { preference: "light" },
  ui: {
    icons: ["iconoir"],
  },
  runtimeConfig: {
    public: {
      pspdfKey: "",
    },
  },
  css: ["~/assets/css/global.css"],
});
