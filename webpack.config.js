const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name]-chunk.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.(ts|tsx)$/,
        use: { loader: 'ts-loader' },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ],
  },
  devServer: {
    compress: true,
    port: 9000,
    clientLogLevel: 'silent',
    open: true,
    stats: {
      colors: true,
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ]
};
