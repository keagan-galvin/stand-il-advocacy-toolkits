module.exports = {
  indexPath: "../public/app.html",
  outputDir: "../public",
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.module.rule("eslint").use("eslint-loader").options({
      fix: true,
    });
  },
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Stand Advocacy Toolkits'
    }
  },
  chainWebpack: config => {
    config.module.rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader').loader('file-loader')
  }
};
