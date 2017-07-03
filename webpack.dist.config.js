var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var config = require('./webpack.config');

config.output = {
  filename: '[name].bundle.js',
  publicPath: '',
  path: path.resolve(__dirname, 'dist'),
  sourceMapFilename: '[name].map',
};

config.plugins = config.plugins.concat([
  new CopyWebpackPlugin([
    { from: 'src/img', to: 'img' }
  ]),
  new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    mangle: {
      screw_ie8: true,
      keep_fnames: true,
      except: ['$super', '$', 'exports', 'require', 'angular', 'firebase', 'angularfire']
    },
    compress: {
      screw_ie8: true
    },
    comments: false,
  })
]);

module.exports = config;
