const path=require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports = {
    entry: {
        main : "./src/index.js"  },
    output: {
        path: path.resolve(__dirname, "dist")
    },
    plugins : [
        new HtmlWebpackPlugin({ template: './src/index.html' }) , 
        new MiniCssExtractPlugin({ filename: 'index.css'})
    ],
    module: {
     rules:[      
        {
            test: /\.html$/,
            use: [
                "html-loader"
            ]
        },
        {
            test: /\.(svg|jpg|jpeg|png|gif|jfif)$/,
            use: { 
                loader:  "file-loader", 
                options: {
                    name: "[name].[ext]",
                    outputPath: "images"
                }
             }            
        },
        {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader'
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true
                  }
                }
              ]
          }
     ]
    }
}
