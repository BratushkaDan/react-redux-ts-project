const path = require("path"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin"),
  HTMLplugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
  UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
  SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

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
    extensions: [".js", ".jsx"],
    alias: {
      components: path.resolve(__dirname, "src", "Components"),
      containers: path.resolve(__dirname, "src", "Containers"),
      actions: path.resolve(__dirname, "src", "actions"),
      reducers: path.resolve(__dirname, "src", "reducers"),
      layouts: path.resolve(__dirname, "src", "layouts")
    }
  },
  plugins: [
    new HTMLplugin({
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
      chunkFilename: "styles/[id].css"
    }),
    new SpriteLoaderPlugin(),
    new CleanWebpackPlugin()
  ]
};
