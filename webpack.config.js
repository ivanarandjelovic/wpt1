const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist"
  },
  module: {
  //  preLoaders: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       loader: 'jshint-loader'
   //
  //     }
  //  ],
   loaders: [
     {
       test: [/\.js$/, /\.jsx$/],
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
       }
      }
   ]
 },
 resolve: {
   extensions: ['.js', '.jsx']
 }
};
