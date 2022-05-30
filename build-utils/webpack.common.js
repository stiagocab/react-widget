const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");

const publicPath = "/";

module.exports = {
  // Entry point, from where all extraction should be made
  // Init webpack rules to collect js, jsx, css files
  module: {
    rules: [
      {
        // Extract and Transpile ES6+ in to ES5
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        // Extract CSS files
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    // contentBase: path.join(__dirname, '../dist'),
    hot: true,
    compress: true,
  },
  // https://webpack.js.org/configuration/plugins/
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "index.css",
      chunkFilename: "index.css",
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  // https://webpack.js.org/configuration/optimization/
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        // sourceMap: true,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  output: {
    path: path.resolve(__dirname, "../widget"),
    filename: "[name].min.js",
    // chunkFilename: "index.chunk.js",
    // Output library name
    library: "ReactWidget",
    libraryTarget: "umd",
    publicPath: publicPath,
    libraryExport: "default",
  },
};
