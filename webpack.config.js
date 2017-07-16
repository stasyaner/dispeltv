const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index: path.join(__dirname, './src/index.jsx'),
    vendor: ['react', 'react-dom'],
  },
  output: {
     path: path.join(__dirname, './public'),
     filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js.$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] },
        }],
      }
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
  ],
 };
