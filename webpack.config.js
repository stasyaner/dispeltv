const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
  entry: {
    index: ['react-hot-loader/patch', path.join(__dirname, './src/index.jsx')],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-dom',
      'redux-thunk',
      'redux',
      'react-hot-loader',
      'firebase',
      'hls.js'
    ],
  },
  output: {
     path: path.join(__dirname, './public'),
     filename: '[name].bundle-[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js.$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [['es2015', { 'modules': false }], 'react'],
            plugins: ['react-hot-loader/babel'],
          },
        }],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader?includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib')
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: 'file-loader?name=[name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new HtmlWebpackPlugin({
      template: 'template.html',
      inject: 'body',
      hash: true,
    }),
  ],
 };

 if (process.env.NODE_ENV === 'production') {
  config.plugins = [
    new webpack.optimize.UglifyJsPlugin({
      warnings: false,
      screw_ie8: true,
      drop_console: true,
      drop_debugger: true,
      dead_code: true,
      comments: false,
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
    }),
  ];
};

module.exports = config;
