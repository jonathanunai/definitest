
module.exports = {
   router: {
     base: '/'
  },
  ...require('./nuxt.config'),
  ...{
    build: {
      publicPath: 'public/',
    },
  }
};
