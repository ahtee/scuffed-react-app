const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: 'style-loader'
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css', '.scss'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    filename: 'bundle.js',
    contentBase: path.join(__dirname, 'dist/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/'
  }
};
