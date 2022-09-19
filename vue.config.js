// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const webpack = require('webpack')

module.exports = {
  transpileDependencies: [
    'vue-meta',
  ],

  configureWebpack: {
    // plugins: [
    //   new BundleAnalyzerPlugin(),
    // ],

    optimization: {
      splitChunks: {
        minSize: 100,
        maxSize: 7500,
      }
    }
  },
  
  devServer: {
    disableHostCheck: true,
  },

  // optimization: {
  //   splitChunks: {
  //     chunks: 'async',
  //     minSize: 3000,
  //     maxSize: 0,
  //     minChunks: 1,
  //     maxAsyncRequests: 5,
  //     maxInitialRequests: 3,
  //     automaticNameDelimiter: '~',
  //     automaticNameMaxLength: 30,
  //     name: true,
  //     cacheGroups: {
  //       vendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10
  //       },
  //       default: {
  //         minChunks: 2,
  //         priority: -20,
  //         reuseExistingChunk: true
  //       }
  //     }
  //   }
  // }

  // lintOnSave: process.env.NODE_ENV !== 'production',
  // publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
}
