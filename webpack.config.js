var path = require('path');

module.exports = {
  entry: './server/frontend/index.js',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
  },
  output: {
    path: __dirname + '/client',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  }
};