const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  plugins: [new HtmlWebpackPlugin({ title: "Hello World!" })],
};
