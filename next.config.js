// next.config.js
const withPreact = require('@zeit/next-preact')
const withSass = require('@zeit/next-sass')

const enhance = config => withPreact(withSass(config))

module.exports = enhance({
    exportPathMap: function () {
      return {
        '/': { page: '/' }
      }
    }
  })