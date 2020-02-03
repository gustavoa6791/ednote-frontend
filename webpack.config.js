const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const dotenv = require('dotenv')
const CompressionPlugin = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin')

dotenv.config()

const isProduction = (process.env.NODE_ENV == 'production')

module.exports = {

    devtool: isProduction ? 'hidden-source-map' : 'cheap-source-map',

    entry: './src/frontend/index.js',

    mode: process.env.NODE_ENV,

    output: {
        path:  path.join(process.cwd(), './src/server/public') ,
        filename: isProduction ? 'assets/app-[hash].js' : 'assets/app.js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
       

            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader'
                }
            
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                    "sass-loader",
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|svg|gif|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [

        isProduction ? new ManifestPlugin(): () => {},



       isProduction ? new CompressionPlugin({
        test: /\.js$|\.css$/,
        filename: '[path].gz'
       }) : () => {}, 

        new webpack.HotModuleReplacementPlugin(),

        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer(),
                ],
            },
        }),

        new MiniCssExtractPlugin({
            filename: isProduction ? 'assets/app-[hash].css' : 'assets/app.css'
        })
    ],

    devServer: {
        historyApiFallback: true
    },

    optimization: {

        minimizer: isProduction? [new TerserPlugin()] : [],

        splitChunks: {
            chunks: 'async',
            name: true,
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    chunks: 'all',
                    reuseExistingChunk: true,
                    priority: 1,
                    filename: isProduction ? 'assets/vendor-[hash].js' : 'assets/vendor.js',
                    enforce: true,
                    test(module, chunks) {
                        const name = module.nameForCondition && module.nameForCondition();
                        return chunks.some((chunk) => chunk.name !== 'vendor' && /[\\/]node_modules[\\/]/.test(name));
                    },
                },
            },
        },
    },





}