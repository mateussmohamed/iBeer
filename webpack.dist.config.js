var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config');

config.output = {
  filename: '[name].bundle.js',
  publicPath: '',
  path: path.resolve(__dirname, 'dist'),
  sourceMapFilename: '[name].map'
};

config.plugins = config.plugins.concat([
  // new webpack.LoaderOptionsPlugin({
  //   minimize: true,
  //   debug: false
  // }),
  new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    mangle: {
      screw_ie8: true,
      keep_fnames: true,
      except: ['$super', '$', 'exports', 'require', 'angular']
    },
    compress: {
      screw_ie8: true
    },
    comments: false,
    // sourceMap: false,
    // sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0),
  })
  // Reduces bundles total size
  // new webpack.optimize.UglifyJsPlugin({
  //   beautify: false,

  //   compress: {
  //     screw_ie8: true
  //   },
  //   comments: false
  //   mangle: {
  //     screw_ie8: true,
  //     keep_fnames: true,
  //     // You can specify all variables that should not be mangled.
  //     // For example if your vendor dependency doesn't use modules
  //     // and relies on global variables. Most of angular modules relies on
  //     // angular global variable, so we should keep it unchanged

  //   }
  // })
]);

module.exports = config;
