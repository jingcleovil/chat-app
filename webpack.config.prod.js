var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: path.resolve(__dirname, 'scripts/index.js'),
    output: {
        path: path.join(__dirname, 'scripts'),
        filename: 'bundle.min.js',
        publicPath: '/scripts/'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    module: {
        loaders: [
            {
                test: /scripts\/.+.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
};