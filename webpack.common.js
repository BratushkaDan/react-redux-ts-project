const path = require("path"),
  {CleanWebpackPlugin} = require("clean-webpack-plugin"),
  HTMLplugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
  UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
  SpriteLoaderPlugin = require("svg-sprite-loader/plugin"),
  ProgressBarPlugin = require("progress-bar-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src", "Application.jsx")
  },
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      chunks: "all"
    }
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      Components: path.resolve(__dirname, "src/components"),
      Actions: path.resolve(__dirname, "src/actions"),
      Reducers: path.resolve(__dirname, "src/reducers"),
      App: path.resolve(__dirname, "src/app"),
      Store: path.resolve(__dirname, "src/store"),
      API: path.resolve(__dirname, "src/api"),
      Utils: path.resolve(__dirname, "src/utils")
    }
  },
  plugins: [
    new HTMLplugin({
      template: path.resolve(__dirname, "src/public", "index.html"),
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
      chunkFilename: "styles/[id].css"
    }),
    new SpriteLoaderPlugin(),
    new CleanWebpackPlugin(),
    new ProgressBarPlugin()
  ]
};
