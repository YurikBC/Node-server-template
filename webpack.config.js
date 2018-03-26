const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

// webpack run
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
                    test: /\.html$/,
                    use: 'raw-loader'
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin([
                {from: './*.html', to: publicPath},
                {from: '**/assets/*.css', to: publicPath}
            ]),
          new CleanWebpackPlugin(['public']),
        ]
    });

// watch
    compiler.watch({
        watch: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }, () => {});

    compiler.run(() => {});
}

module.exports.config = config;