const path = require("path"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  merge = require("webpack-merge"),
  common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "dist"),
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
        secure: false
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',

        }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            "presets": [
              "@babel/preset-react",
              "@babel/preset-env"
            ],
            "plugins": [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-transform-async-to-generator"
            ]
          }
        }
      },
      {
        test: /\.json$/,
        loader: "json-loader",
        options: {
          name: "[name].[ext]"
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
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
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
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]"
          }
        }
      }
    ]
  }
});
