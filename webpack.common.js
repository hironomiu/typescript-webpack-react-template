const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: { app: './src/ts/app.tsx' },
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, 'public'),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          minChunks: 1,
        },
        // vendorModules: {
        //   chunks: 'initial',
        //   test: /src[\\/]ts[\\/]modules/,
        //   name: 'vendor-modules',
        //   minSize: 0,
        //   minChunks: 1,
        // },
        defaultVendors: {
          filename: 'js/[name].[contenthash].js',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          // 'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      chunks: ['app'],
    }),
    new ESLintPlugin({
      extensions: ['.ts', '.js', '.tsx'],
      exclude: 'node_modules',
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].[contenthash].css',
    }),
  ],
}
