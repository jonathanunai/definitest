module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'definitest',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'El definitest es el test definitivo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    '@/assets/css/config.styl',
    '@/assets/css/main.styl',
    '@/assets/css/card.styl',
  ],
  /*
  ** Build configuration
  */
  build: {
    extend (config, ctx) {
      /*[].concat(...config.module.rules.find( e => e.test.toString().match(/\.styl/) ).oneOf.map(e => e.use.filter(e => e.loader == 'stylus-loader'))).forEach(stylus => {
        Object.assign(stylus.options, {
          import: [
            '~rupture/rupture/index.styl',
            '~assets/css/config.styl'
          ]
        })
      });*/
    /*
    ** Run ESLint on save
    */
      if (ctx.isDev && ctx.isClient) {
        // find the stylus loader
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
}


