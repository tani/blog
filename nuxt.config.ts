// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@unocss/nuxt"],
  markdown: {
    remarkPlugins: ["remark-math"],
    rehypePlugins: ["rehype-mathjax"],
  },
  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2024-09-25",
});
