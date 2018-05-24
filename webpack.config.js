const path = require('path');
const pluginExtractCSS = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'index.jsx')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          pluginExtractCSS.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new pluginExtractCSS({ filename: 'styles.css' })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 8080
  }
}
