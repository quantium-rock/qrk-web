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
    '@nuxt/image',
    '@nuxtjs/sitemap'
  ],

  // Configure i18n
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'es', iso: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'fr', iso: 'fr-FR', name: 'Français', file: 'fr.json' }
    ],
    defaultLocale: 'en',
    langDir: 'i18n/locales',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  // Configure nuxt-ux
  nuxtUx: {
    version: '0.6.0',
    logoURL: 'https://quantium-rock.com'
  },

  // SEO configuration
  site: {
    url: 'https://quantium-rock.com',
    name: 'Quantium Rock'
  },

  sitemap: {
    hostname: 'https://quantium-rock.com',
    gzip: true,
    routes: ['/', '/services', '/technology', '/portfolio', '/team', '/blog', '/contact']
  },

  app: {
    head: {
      title: 'Quantium Rock - Technology & Cloud Solutions',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'International technology company specializing in cloud solutions (AWS, GCP, Azure), blockchain development (Bitcoin, Solana), AI integration, and mobile apps.' },
        { name: 'keywords', content: 'cloud solutions, blockchain development, Bitcoin, Solana, AI integration, mobile apps, AWS, GCP, Azure, React Native, Flutter, Web3, dApp development' },
        { name: 'author', content: 'Quantium Rock' },
        
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Quantium Rock' },
        { property: 'og:title', content: 'Quantium Rock - Technology & Cloud Solutions' },
        { property: 'og:description', content: 'International technology company specializing in cloud solutions, blockchain development, AI integration, and mobile apps.' },
        { property: 'og:url', content: 'https://quantium-rock.com' },
        { property: 'og:image', content: 'https://quantium-rock.com/branding/Logo Quantium Rock.jpg' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Quantium Rock - Technology & Cloud Solutions' },
        { name: 'twitter:description', content: 'International technology company specializing in cloud solutions, blockchain development, AI integration, and mobile apps.' },
        { name: 'twitter:image', content: 'https://quantium-rock.com/branding/Logo Quantium Rock.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://quantium-rock.com' }
      ]
    }
  }
})
