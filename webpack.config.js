const path = require('path');

module.exports = {

  entry:{
    'table_functions' : [
      './table_functions/main.ts',
      './table_functions/Table.ts'
    ]
  },

  target: ['web', 'es5'],

  output: {
    filename: 'compiled.js',
    path: path.resolve(__dirname, './static/js'),
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  },
  
};