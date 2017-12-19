 var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './public/src/App.jsx',
     output: {
         path: path.resolve(__dirname, 'public', 'lib'),
         filename: 'app.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['react']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };