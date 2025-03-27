// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/faq', '/gallery', '/contact', '/news']
    }
  },
  hooks: {
    async 'nitro:config' (nitroConfig) {
      if (nitroConfig?.prerender?.routes && Array.isArray(nitroConfig.prerender.routes)) {
        try {
          // Récupérer les noms des galeries depuis l'API
          const axios = await import('axios');
          const response = await axios.default.get(process.env.VITE_API_URL + '/api/galleries');
          
          if (response.data.success && Array.isArray(response.data.data)) {
            // Ajouter les routes dynamiques des galeries
            const galleryRoutes = response.data.data.map(folder => `/gallery/${folder}`);
            nitroConfig.prerender.routes.push(...galleryRoutes);
            console.log('Routes de galerie ajoutées pour le prérendu:', galleryRoutes);
          }
          
          // Récupérer les slugs des articles depuis l'API
          const articlesResponse = await axios.default.get(process.env.VITE_API_URL + '/api/articles');
          
          if (articlesResponse.data.success && Array.isArray(articlesResponse.data.data)) {
            // Ajouter les routes dynamiques des articles
            const articleRoutes = articlesResponse.data.data.map(article => `/news/${article.slug}`);
            nitroConfig.prerender.routes.push(...articleRoutes);
            console.log('Routes d\'articles ajoutées pour le prérendu:', articleRoutes);
          }
        } catch (error) {
          console.error('Erreur lors de la récupération des routes dynamiques:', error);
        }
      }
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Granulés de Bois Picard - Poêles à granulés en Picardie',
      meta: [
        { name: 'description', content: 'Spécialiste des poêles à granulés en Picardie. Vente, installation et entretien de poêles à granulés, poêles à bois et poêles mixtes.' },
        { name: 'keywords', content: 'poêle à granulés, poêle à bois, chauffage écologique, granulés de bois, Picardie, Corbie, économie d\'énergie, chauffage économique, installation poêle, entretien poêle' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Granulés de Bois Picard' },
        { property: 'og:title', content: 'Granulés de Bois Picard - Poêles à granulés en Picardie' },
        { property: 'og:description', content: 'Spécialiste des poêles à granulés en Picardie. Vente, installation et entretien de poêles à granulés, poêles à bois et poêles mixtes.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://granulespicard.fr' },
        { property: 'og:image', content: 'https://granulespicard.fr/logo.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Granulés de Bois Picard - Poêles à granulés en Picardie' },
        { name: 'twitter:description', content: 'Spécialiste des poêles à granulés en Picardie. Vente, installation et entretien de poêles à granulés, poêles à bois et poêles mixtes.' },
        { name: 'twitter:image', content: 'https://granulespicard.fr/logo.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'canonical', href: 'https://granulespicard.fr' }
      ]
    }
  },
})
