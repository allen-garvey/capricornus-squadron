const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: [
            `${__dirname}/js_src/index.js`, 
            `${__dirname}/sass/style.scss`,
        ],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public_html/js'),
    },
    resolve: {
        alias: {
            images: path.resolve(__dirname, 'public_html/images'),
        },
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            outputStyle: 'compressed',
                        },
                    },
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000,
                            fallback: 'file-loader',
                            name: '/images/[name].[ext]',
                        }
                    },
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/style.css',
        }),
    ],
};