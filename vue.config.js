const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        modules: path.resolve(__dirname, "src/modules"),
        assets: path.resolve(__dirname, "src/assets"),
        stores: path.resolve(__dirname, "src/store"),
        routers: path.resolve(__dirname, "src/router"),
        components: path.resolve(__dirname, "src/components"),
        repositories: path.resolve(__dirname, "src/repositories"),
        utils: path.resolve(__dirname, "src/utils"),
        plugins: path.resolve(__dirname, "src/plugins"),
        layouts: path.resolve(__dirname, "src/layouts"),
      },
    },
  },
});
