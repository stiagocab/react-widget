const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = ({ env }) => {
  // console.log("ENV: -- ", env);
  const envConfig = require(`./webpack.dev.js`);
  // merge default configuration with a chosen mode configuration
  return merge(commonConfig, envConfig);
};
