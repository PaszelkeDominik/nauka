const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    another: "./src/js/another.js",
    hamburgerMenu: "./src/js/hamburger-menu.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index", "hamburgerMenu"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/another.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "another.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/pierwszy.html",
      inject: true,
      chunks: ["index", "hamburgerMenu"],
      filename: "pierwszy.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/drugi.html",
      inject: true,
      chunks: ["index", "hamburgerMenu"],
      filename: "drugi.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/trzeci.html",
      inject: true,
      chunks: ["index", "hamburgerMenu"],
      filename: "trzeci.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/czwarty.html",
      inject: true,
      chunks: ["index", "hamburgerMenu"],
      filename: "czwarty.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/piaty.html",
      inject: true,
      chunks: ["index", "hamburgerMenu"],
      filename: "piaty.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/szosty.html",
      inject: true,
      chunks: ["index", "hamburgerMenu"],
      filename: "szosty.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/siodmy.html",
      inject: true,
      chunks: ["index", "hamburgerMenu"],
      filename: "siodmy.html",
    }),
  ],
};
