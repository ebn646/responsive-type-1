const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './source'),
  entry: {
    app: './javascript/app.js',
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].bundle.js',
  },
  module: {
    rules:[{
      test:/\.(sass|scss)$/,
      use:[
        'style-loader',
        'css-loader',
        'sass-loader',
      ]
    }]
  }
};
