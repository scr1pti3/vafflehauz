const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const entry = {
    index: './src/index.js'
}

const output = {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
}

const optimization = {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules/,
                name: 'vendors',
                chunks: 'all'
            }
        }
    }
}

const plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    })
]

const __module = {
    rules: [
        {
            test: /.(js|jsx)$/,
            exclude: /[\\/]node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /.html$/,
            loader: 'html-loader'
        },
        {
            test: /.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }
    ] 
}

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry,
    output,
    optimization,
    plugins,
    module: __module,
}
