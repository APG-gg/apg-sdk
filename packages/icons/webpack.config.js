const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');

const pkg = require('./package.json');

const LIB_NAME = pkg.name;
const outputFolder = 'lib';

const entry = require('./entries');

module.exports = {
  entry,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: [{
          loader: 'babel-loader',
        }],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'url-loader',
          options: {
            generator: (content) => svgToMiniDataURI(content.toString()),
          },
        }],
      }
    ],
  },
  externals: [{
    react: 'react',
    'react-dom': 'react-dom',
    immer: 'immer',
  }],
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'src/styles', to: `${outputFolder}/styles` }],
    }),
  ],
  output: {
    path: path.resolve(__dirname, outputFolder),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: LIB_NAME,
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
};