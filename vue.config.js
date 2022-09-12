// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const webpack = require('webpack')

module.exports = {
  // configureWebpack: {
  //   plugins: [
  //     new BundleAnalyzerPlugin(),
  //   ],

  //   optimization: {
  //     splitChunks: {
  //       cacheGroups: {
  //         commons: {
  //           test: /[\\/]node_modules[\\/]/,
  //           name: "vendors",
  //           chunks: "all"
  //         }
  //       }
  //     }
  //   },
  // },

  devServer: {
    disableHostCheck: true,
  },

  // lintOnSave: process.env.NODE_ENV !== 'production',
  // publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
}
