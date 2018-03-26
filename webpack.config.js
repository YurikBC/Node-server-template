const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// webpack run

const extractSass = new ExtractTextPlugin('[name].css')
const publicPath = path.join(__dirname, "/public")

function config () {
    const compiler = webpack({
        entry: path.join(__dirname, "/src/main.js"),
        output: {
            path: publicPath,
            filename: 'app.js'
        },
        module: {
            rules: [
                {
                  test: /\.(html)$/,
                  use: {
                    loader: 'html-loader'
                  }
                },
                {
                    test: /\.scss$/,
                    use: extractSass.extract({
                      use: [{
                        loader: "css-loader"
                      }, {
                        loader: "sass-loader"
                      }],
                      fallback: "style-loader"
                    })
                },
              {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                  loader: 'url-loader',
                  options: {
                    limit: 8000,
                    name: 'images/[hash]-[name].[ext]'
                  }
                }]
              }
            ]
        },
        plugins: [
          new CleanWebpackPlugin(['public']),
          extractSass
        ]
    });

// watch
    compiler.watch({
        watch: true,
        watchOptions: {
            aggregateTimeout: 100,
            poll: 500
        }
    }, () => {});

    compiler.run(() => {});
}

module.exports.config = config;