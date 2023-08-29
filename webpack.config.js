const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: false,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './src'),
        filename: 'index_bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Your App Title', // This is used in the template
        template: './src/templates/template-1.html' // Point to your custom template
    })],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};