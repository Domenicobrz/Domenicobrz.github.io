const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  entry: './src/libs/index.js',
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true, interpolate: true }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", 
              {
                loader: "postcss-loader",
                options: {
                  plugins: () => [require("autoprefixer")()],
                },
              }, 
              "sass-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(png|svg|jp(e*)g|gif)$/,
        exclude: /node_modules/,
        use: [
          'file-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
        {from:'src/images',to:'images'}, 
        {from:'src/root',to:'./'}, 
    ]), 
  ]
};