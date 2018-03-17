const path = require('path');
const webpack = require('webpack');

const DIST_DIR = path.join(__dirname, "dist");
const SRC_DIR = path.join(__dirname, "src");

module.exports = {
  entry: path.join(SRC_DIR, "index.js"),
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: SRC_DIR,
        loader: ["babel-loader"]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: DIST_DIR,
    hot: true
  }
};


