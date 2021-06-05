module.exports = {
  indexPath: "../public/app.html",
  outputDir: "../public",
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.module.rule("eslint").use("eslint-loader").options({
      fix: true,
    });

    config.module
      .rule("pdf")
      .test(/\.pdf$/)
      .use("file-loader")
      .loader("file-loader");
  },
  pages: {
    index: {
      entry: "src/main.js",
      title: "Stand Advocacy Toolkits",
    },
  },
};
