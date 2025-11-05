// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@alexcolls/nuxt-ux', // Add this LAST
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/test-utils',
    '@nuxt/image'
  ],

  // Configure i18n
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'es', iso: 'es-ES', name: 'Español' },
      { code: 'fr', iso: 'fr-FR', name: 'Français' }
    ],
    defaultLocale: 'en'
  },

  // Configure nuxt-ux
  nuxtUx: {
    version: '0.6.0',
    logoURL: 'https://quantium-rock.com'
  },

  // SEO configuration
  app: {
    head: {
      title: 'Quantium Rock - Technology & Cloud Solutions',
      meta: [
        { name: 'description', content: 'International technology company specializing in cloud solutions (AWS, GCP, Azure), blockchain development (Bitcoin, Solana), AI integration, and mobile apps.' },
        { name: 'keywords', content: 'cloud solutions, blockchain development, Bitcoin, Solana, AI integration, mobile apps, AWS, GCP, Azure, React Native, Flutter' }
      ]
    }
  }
})
