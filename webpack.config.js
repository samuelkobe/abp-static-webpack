const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true
  },
  entry: './src/index.js',
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets',
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogv)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'videos',
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]'
            }
          }
        ]
      },
      // compile all .scss files to plain old css
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    // extract css into dedicated file
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
  ]
};
