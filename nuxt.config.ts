// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  devtools: { enabled: true },
  site: {
    url: "https://tani.github.io",
  },
  modules: ["@nuxt/content", "@unocss/nuxt", "@nuxtjs/seo"],
  markdown: {
    remarkPlugins: ["remark-math"],
    rehypePlugins: ["rehype-mathjax"],
  },
  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2024-09-25",
});
