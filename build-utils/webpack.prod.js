const Dotenv = require("dotenv-webpack");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  // https://webpack.js.org/configuration/output/
  mode: "production",
  // source-map - A full SourceMap is emitted as a separate file.
  // It adds a reference comment to the bundle so development tools know where to find it.
  devtool: "source-map",
  entry: "./src/index.prod.js",
  plugins: [
    new Dotenv({
      path: "./.env.production",
    }),
  ],
});
