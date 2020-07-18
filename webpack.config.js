const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "game-spa",
    projectName: "services",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    devServer: {
      port: 8082,
    },
  });
};
