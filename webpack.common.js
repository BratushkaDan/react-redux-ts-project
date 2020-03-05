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
    main: path.resolve(__dirname, "src", "Application.tsx")
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
      Components: path.resolve(__dirname, "src/app/components"),
      Containers: path.resolve(__dirname, "src/app/containers"),
      Actions: path.resolve(__dirname, "src/app/actions"),
      Reducers: path.resolve(__dirname, "src/app/reducers"),
      Layouts: path.resolve(__dirname, "src/app/layouts"),
      Pages: path.resolve(__dirname, "src/app/pages"),
      Modules: path.resolve(__dirname, "src/app/modules"),
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
    new CleanWebpackPlugin(),
    new ProgressBarPlugin()
  ]
};
