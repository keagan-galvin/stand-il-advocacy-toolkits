module.exports = {
  outputDir: '../server/presentation',
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true
    })
  }
};