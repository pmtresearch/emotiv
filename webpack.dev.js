var webpack = require('webpack');

module.exports = {
    entry: './emotiv-portal/index.js',
    output: {
        'path': './public/dist',
        'filename': 'index.js',
    },
    resolve: {
        root: process.cwd(),
        modulesDirectories: ['node_modules']
    },

    devtool: 'source-map',

    module: {
        loaders: [
            { test: /.*\.scss$/, loaders: ['style', 'css', 'sass'] },
            {
                test: /.*?\.js$/,
                loader: 'babel'
            }
        ]
    }
}
