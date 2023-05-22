const urlPolyfill = require.resolve('url-polyfill');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback.url = urlPolyfill;
      return webpackConfig;
    },
  },
};
