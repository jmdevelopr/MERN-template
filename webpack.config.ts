import * as webpack from "webpack";
import * as path from "path";
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const srcPath = path.resolve(__dirname, "client", "src");    
const distPath = path.resolve(__dirname, "dist");

const config: webpack.Configuration ={  
    devtool: 'source-map',  
    entry: [  
        srcPath+"/index.tsx"  
    ],  
    output: {    
        path: distPath,    
        publicPath: '/',  
        filename: "bundle.js"    
    },    
    resolve: {   
        extensions: [ '.js', '.jsx', '.ts', '.tsx' ]      
    },  
    module: {  
        rules:[  
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
              test: /\.scss$/,
              use: [
                'style-loader',
                {
                  loader: 'css-loader',
                },
                'sass-loader'
              ]
            },
            {    
                test: /\.js?$/,    
                exclude: /node_modules/,    
                include: srcPath,    
                loader: "babel-loader", 
            },  
            {    
                test: /\.jsx?$/,    
                exclude: /node_modules/,    
                loader: "babel-loader",    
                query: {    
                    presets: ['@babel/preset-react']    
                }     
            },  
            {  
                test: /\.tsx?$/,  
                loader: "ts-loader",  
                exclude: /node_modules/,
                include: srcPath
            },
            {    
                test: /\.js?$/,    
                exclude: /node_modules/,    
                include: [
                    /controllers/,
                    /middleware/,
                    /routes/
                ],
                loader: "babel-loader", 
            },  
            {  
                test: /\.ts?$/,  
                loader: "ts-loader",  
                exclude: /node_modules/,
                include: [
                    /controllers/,
                    /middleware/,
                    /routes/
                ]
            },
        ]  
   },  
   plugins: [new MiniCssExtractPlugin()],
   mode: "development"
}  
  
export default config;