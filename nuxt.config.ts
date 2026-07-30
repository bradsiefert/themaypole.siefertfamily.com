// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
          lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'The Maypole, a newletter from The Sieferts',
      meta: [
        { name: 'description', content: 'An occasional newsletter about the goings on around the Siefert family.' },
        { property: "og:image", content: 'https://themaypole.siefertfamily.com/sharing.png' },
      ],
    }
  },

  modules: ['@nuxt/content'],

  content: {
    // Netlify functions only allow SQLite under /tmp.
    database: {
      type: 'sqlite',
      filename: '/tmp/contents.sqlite'
    },
    experimental: {
      // Avoid native better-sqlite3 bindings (break when local Mac deploy hits Linux).
      sqliteConnector: 'native'
    },
    markdown: {
      anchorLinks: false
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/archive': { prerender: true },
    '/success': { prerender: true },
    '/an-addition': { prerender: true },
    '/wait-what': { prerender: true }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/archive', '/success']
    }
  },

  css: [
    '@/assets/scss/styles.scss' // Needed to install sass and bootstrap to make this work.
  ],

  compatibilityDate: '2026-07-30'
})
