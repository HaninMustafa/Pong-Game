const join = require('path').join;
const resolve = require('path').resolve;
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const PATHS = {
	src: join(__dirname, 'src'),
	fonts: join(__dirname, 'fonts'),
	build: join(__dirname, 'build')
};

module.exports = {
   entry: "./src/index.js",
   devServer: {
     inline: true,
     host: '0.0.0.0',
     port: '3000',
     watchOptions: {
         aggregateTimeout: 300,
         poll: true
     }
   },
   output: {
       path: __dirname,
       filename: "./build/bundle.js"
   },
   module: {
       loaders: [
           {
             test: /\.css$/,
             loader: "style!css"
           },
           {
             test: /\.scss$/,
             loaders: ['style', 'css', 'sass?sourceMap']
           },
           {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
               presets: ['es2015']
             }
           },
           {
           test: /\.(eot|svg|ttf|woff|woff2)$/,
           loader: 'file?name=public/fonts/[name].[ext]'
           }
       ]
   }
};
