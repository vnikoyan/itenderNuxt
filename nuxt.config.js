module.exports = {

  // toggle SPA mode
  // mode: 'spa',
  
  // create extra file for netlify
  generate: { fallback: true },
  /*
  ** Headers of the page
  */
  head: {
    title: 'iTender',
    titleTemplate: '%s | itender.am',
    htmlAttrs: {
      lang: 'hy'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: 'Տենդերների տեղեկատվություն, փաստաթղթերի ավտոմատացում, պայմանագրերի կառավարում' }
    ],
    link: [
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Lato' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: '/apple_touch_icon.png'
      }
    ]
  },
  babel: {
    plugins: ['transform-vue-jsx']
  },
  plugins: [
    '~/plugins/main',
    {
      src: '~/plugins/client-plugins.js',
      mode: 'client', ssr: false
    },
    { src: "~/plugins/vue-tables-2.js", mode: 'client', ssr: false }
    // ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
    // ["@babel/plugin-proposal-private-methods", { "loose": true }]
  ],
  router: {
    extendRoutes (routes, resolve) {
      routes.splice(0, routes.length, ...routes)
    },
    middleware: ['~/router/routes.js']
  },
  modules: [
    // '@nuxtjs/pwa',
    '@nuxtjs/i18n',
    'bootstrap-vue/nuxt',
  ],
  i18n: {
    /* module options */
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  buildModules: [
    // '@nuxtjs/pwa', 
    '@nuxtjs/dotenv',
    'vue-ssr-carousel/nuxt'
  ],
  router: {
    middleware: ['redirect']
  },
  build: {
    // vendor: ['vue-session', 'vue-tables-2'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
