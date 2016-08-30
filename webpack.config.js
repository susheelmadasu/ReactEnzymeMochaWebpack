const path = require('path');
const webpack = require('webpack');
//const buildDirectory = './codebuild/';
const buildDirectory = './testbuild/';

module.exports = {
  externals: {
    'cheerio': 'window',
    'jsdom': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  
  entry:[
  "mocha\!./test/react-test.js",
  //"./lib/main.jsx"
   
  ],
  
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(buildDirectory),
    filename: 'app.js',    
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
      },
    }],
  }
  
};
