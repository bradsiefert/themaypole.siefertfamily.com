// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
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
    documentDriven: true,
    markdown: {
      anchorLinks: false
    }
  },

  css: [
    '@/assets/scss/styles.scss' // Needed to install sass and bootstrap to make this work.
  ],

  compatibilityDate: '2024-12-25'
})