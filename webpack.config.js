var path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/public/assets",
        filename: "bundle.min.js",
        publicPath: "/assets/"
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    },
    module: {
        loaders: [
            //JS
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                include: path.join(__dirname, '/src/components'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            //CSS
            {
                test: /\.scss$/,
                include: path.join(__dirname, '/src/components'),
                use: [{
                    loader: "style-loader"
                }, {
                  loader: "css-loader" 
                }, {
                  loader: "sass-loader" 
                }]
            }

        ]
    }
}