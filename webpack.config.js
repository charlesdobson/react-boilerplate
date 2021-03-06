const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  devtool: '',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
      path.join(__dirname, 'public')
    ],
    alias: {
      src: path.resolve(__dirname, 'src'),
      public: path.resolve(__dirname, 'public')
    }
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './build',
    port: 3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('./public/index.html'),
      favicon: './public/favicon.ico'
    })
  ]
};
