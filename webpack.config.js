const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.(js|ts)x?$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]

}