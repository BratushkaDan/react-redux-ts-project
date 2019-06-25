const path = require("path"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  merge = require("webpack-merge"),
  common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.json$/,
        loader: "json-loader",
        options: {
          name: "[hash:5].[ext]"
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(gif|jpe?g|png|ico)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "images/[name].[ext]",
              limit: 8192,
              fallback: {
                loader: "file-loader",
                options: "images/[name].[ext]"
              }
            }
          },
          {
            loader: "image-webpack-loader"
          }
        ]
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: "svg-sprite-loader",
            options: {
              extract: true,
              spriteFilename: "img/sprite-[hash:6].svg"
            }
          },
          {
            loader: "svgo-loader",
            options: {
              plugins: [
                {
                  removeTitle: true
                },
                {
                  convertColors: {
                    shorthex: false
                  }
                },
                {
                  convertPathData: false
                }
              ]
            }
          },
          "svg-transform-loader"
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "fonts/[name].[ext]"
          }
        }
      }
    ]
  }
});
