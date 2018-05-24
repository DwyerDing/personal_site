var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin"),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: './src/app/app.js',
        vender: [
            "react",
            "react-dom",
            "react-router",
            "mobx",
            "mobx-react",
            "jquery",
            "babel-polyfill"
        ],
        componentVender: ["react-bootstrap", "jquery-ui"]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name][hash:8].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', 'css', 'scss', 'html', 'png', 'jpg', 'jpeg'],
        alias: {
            appComponent: path.resolve(__dirname, '../src/app/components/'),
            appModels: path.resolve(__dirname, '../src/app/models/'),
            appImages: path.resolve(__dirname, '../src/app/images/'),
            appServices: path.resolve(__dirname, '../src/app/services/'),
            appStores: path.resolve(__dirname, '../src/app/stores/'),
            appStyles: path.resolve(__dirname, '../src/app/styles/'),
            appUtils: path.resolve(__dirname, '../src/app/utils/')
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_model/,
                query: {
                    cacheDirectory: true,
                    presets: [
                        'es2015', 'react'
                    ],
                    plugins: [
                        "transform-es2015-for-of",
                        "transform-object-assign"
                    ]
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: "assets/images/[name].[ext]"
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            // {
            //     test: /\.scss$/,
            //     use: [{
            //         loader: 'style-loader'
            //     },{
            //         loader: 'css-loader'
            //     },{
            //         loader: 'sass-loader'
            //     }]
            // },
            {
                //scss单独打包
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    },{
                        loader: 'sass-loader'
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: "assets/fonts/[name].[ext]"
                }
            },
            {
                test: require.resolve('numbro'),
                loader: 'expose-loader?numbro'
            },
            {
                test: require.resolve('moment'),
                loader: 'expose-loader?moment'
            },
            {
                test: require.resolve('pikaday'),
                loader: 'expose-loader?Pikaday'
            }, {
                test: require.resolve('zeroclipboard'),
                loader: 'expose-loader?ZeroClipboard'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ["componentVendor", "vendor"],
            minChunks: Infinity
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: 'jquery',
            "window.jQuery": "jquery"
        }),
        new ExtractTextPlugin("css/style[hash:8].css"),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            minify: false,
            template: './src/app/app.html'
        })
    ]
}
