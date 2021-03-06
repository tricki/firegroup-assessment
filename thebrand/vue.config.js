/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  css: {
      loaderOptions: {
          sass: {
              prependData: `
                  @import "@/assets/css/_variables.scss";
              `,
          },
      },
  },
  pwa: {
    name: 'The Brand',
    themeColor: '#caa25c',
    msTileColor: '#ffffff',
  },
  // ignore Stencil web components
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: tag => tag.startsWith('fg-')
        }
        return options
      })
  },
}