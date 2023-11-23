const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /tailwind-merge\/dist\/bundle-cjs\.js$/,
        use: 'babel-loader',
      }
    ],
  },
  externals: [{
    react: 'react',
    'react-dom': 'react-dom',
    immer: 'immer'
  }],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          output: {
            beautify: false,
          },
          compress: {
            passes: 3,
            drop_console: true,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, 'src/styles'), to: path.resolve(__dirname, `${outputFolder}/styles`) }],
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