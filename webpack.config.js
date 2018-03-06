const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

// webpack run
function config () {
    const compiler = webpack({
        entry: path.join(__dirname, "/src/main.js"),
        output: {
            path: path.join(__dirname, "/public"),
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
                {from: './*.html', to: path.join(__dirname, "/public")},
                {from: path.join(__dirname, "/src/styles.css"), to: path.join(__dirname, "/public")}
            ])
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