
module.exports = {
  // productionSourceMap: process.env.NODE_ENV === 'dev',
  devServer: {
    port: 9000,
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}