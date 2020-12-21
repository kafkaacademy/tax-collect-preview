const path=require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common=require ("./webpack.common.cjs");
const merge=require( "webpack-merge");

module.exports = merge(common,{
    mode:"development",
    entry: "./src/index.js",
    plugins : [
        new MiniCssExtractPlugin({ filename: 'index.css'}) 
    ],
    output: {
        filename: "src/index.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules:[
            {
               test: /\.css$/,
               use: [
                   "style-loader",
                   "css-loader"
               ]
           }
        ]
    }
});
