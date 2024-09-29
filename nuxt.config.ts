// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  devtools: { enabled: true },
  site: {
    url: "https://tani.github.io",
  },
  modules: ["@nuxt/content", "@unocss/nuxt", "@nuxtjs/seo", "@nuxt/image"],
  content: {
    markdown: {
      remarkPlugins: ["remark-math"],
      rehypePlugins: ["rehype-mathjax"],
    },
    highlight: {
      theme: "vitesse-light",
      langs: [
        "json",
        "javascript",
        "typescript",
        "html",
        "css",
        "shell",
        "yaml",
        "c++",
        "c",
        "python",
        "common-lisp",
        "scheme",
        "emacs-lisp",
        "vimscript",
        "ruby",
      ],
    },
  },
  routeRules: {
    "/": { prerender: true },
  },
  compatibilityDate: "2024-09-25",
});
