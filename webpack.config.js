const fs = require('fs')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: '/.html$/',
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  // devServer: {
  //   contentBase: './build',
  //   host: '0.0.0.0',
  //   port: 8080,
  //   disableHostCheck: true,
  //   https: true,
  //   headers: {
  //     'Access-Control-Allow-Origin': '*'
  //   },
  //   useLocalIp: false,
  //   cert: fs.readFileSync('/etc/letsencrypt/live/uniium.com/fullchain.pem'),
  //   key: fs.readFileSync('/etc/letsencrypt/live/uniium.com/privkey.pem'),
  // },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}
