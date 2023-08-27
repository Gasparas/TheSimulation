const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './src'),
        filename: 'index_bundle.js',
    },
    plugins: [new HtmlWebpackPlugin()],
};