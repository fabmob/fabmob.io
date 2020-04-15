const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  },

  entry: {
    javascript: ["react-hot-loader/patch", "./index.js"]
  },

  output: {
    filename: "index.js",
    path: __dirname + "/dist"
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Démo recherche floue",
      template: "index.html"
    })
  ]
};
