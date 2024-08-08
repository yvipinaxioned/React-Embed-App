const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      if (env === 'production') {
        // Disable filename hashing
        webpackConfig.output.filename = 'static/js/[name].js';
        webpackConfig.output.chunkFilename = 'static/js/[name].chunk.js';

        // Disable hashing in CSS files
        webpackConfig.plugins.forEach(plugin => {
          if (plugin.constructor.name === 'MiniCssExtractPlugin') {
            plugin.options.filename = 'static/css/[name].css';
            plugin.options.chunkFilename = 'static/css/[name].chunk.css';
          }
        });

        // Disable source maps
        webpackConfig.devtool = false;
      }
      return webpackConfig;
    },
  },
};
