const path = require('path');

module.exports = {
    mode: "development",
    watch: true,
     entry: {
     "./main": './src/index.js',
     },
    output: {
      filename: '[name].js',
     path: path.resolve(__dirname, 'dist')
     },
};
