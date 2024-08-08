const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  webpack: {
    plugins: {
      add: [
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1,
        }),
      ],
      skipEnvChecks: true,
    },
    configure: (webpackConfig, { env }) => {
      if (env === 'production') {
        // Disable filename hashing for JS
        webpackConfig.output.filename = 'static/js/[name].js';
        webpackConfig.output.chunkFilename = 'static/js/[name].js';

        // Disable filename hashing for CSS
        webpackConfig.plugins = webpackConfig.plugins.map(plugin => {
          if (plugin instanceof MiniCssExtractPlugin) {
            return new MiniCssExtractPlugin({
              filename: 'static/css/[name].css',
              chunkFilename: 'static/css/[name].css',
            });
          }
          return plugin;
        });

        // Disable source maps
        webpackConfig.devtool = false;
      }
      return webpackConfig;
    },
  },
};
