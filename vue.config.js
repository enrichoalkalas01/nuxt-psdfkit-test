module.exports = {
  pages: {
    index: {
      title: "KompasData"
    }
  },

  devServer: {
    disableHostCheck: true,
    // host: 'test.kompas.id'
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/'

}
