const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('../config')

module.exports = {
    mode:'development',// production
    entry:{
        main:path.resolve(__dirname,"src/main.js"),
    },
    output:{
        path: path.resolve(__dirname,'public'),
        filename:'[name].[contenthash].js',
        clean:true,
    },

    devServer:{

        static: {
            directory: path.join(__dirname, 'public'),
          },
        compress: true,
        port: config['FRONTEND_PORT'],
    },

    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']}
        ]
    },


    plugins:[
        new HtmlWebpackPlugin({
            title:'just a demo',
            filename:'index.html',
            template: path.resolve(__dirname,'src/temp/index.html')
        }),
        new HtmlWebpackPlugin({
            title:'login page',
            filename:'login.html',
            template: path.resolve(__dirname,'src/temp/login.html')
        })


    ]
}