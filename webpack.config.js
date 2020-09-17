const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { 
        test: /\.(js|ts)x?$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin()
  ]

}