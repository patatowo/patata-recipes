// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  vite: {
    define: {
      // By default, Vite doesn't include shims for NodeJS/
      // necessary for segment analytics lib to work
      "window.global": {},
    },
    resolve: {
      alias: {
        "node-fetch": "isomorphic-fetch",
      },
    },
  },
  css: ["~/assets/scss/main.scss"],
  modules: [
    // ...
    "@pinia/nuxt",
  ],
});
