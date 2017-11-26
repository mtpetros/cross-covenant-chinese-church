var path = require('path');
var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');


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
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
              'NODE_ENV': JSON.stringify('production')
            }
          }),
        new webpack.optimize.UglifyJsPlugin()
    ],
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
                include: path.join(__dirname, '/src/styling'),
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