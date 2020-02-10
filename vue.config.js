const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/test-vue/'
    : '/',
  pluginOptions: {
    'style-resources-loader': {
      'preProcessor': 'scss',
      'patterns': [
        path.resolve(__dirname, './src/styles/imports.scss'),
      ]
    }
  }
}