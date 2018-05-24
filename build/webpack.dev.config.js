var webpack = require('webpack'),
    baseConfig = require('./webpack.base.config'),
    webpackMerge = require('webpack-merge');

//webpack Config
var webpackConfig = {
    output: {
        publicPath: '/',
    },

    devtool: 'source-map',

    devServer: {
        historyApiFallback: true,
        watchOptions: {
            aggregatrTimeout: 300,
            poll: 1000
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-with, contrnt-type, Authorization"
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = webpackMerge(baseConfig, webpackConfig);