const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  name: 'new-react-app',
  entry: {
    app: './src/index.js',
  },
  devServer: {
    noInfo: true,
    compress: true,
    port: 3000,
    open: true,
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    liveReload: true,
    stats: {
      colors: true,
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: devMode ? '[name].bundle.js' : '[name]-[hash].bundle.js',
    chunkFilename: devMode ? '[name].chunk.js' : '[name]-[hash].chunk.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
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
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name]-[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id]-[hash].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
};
