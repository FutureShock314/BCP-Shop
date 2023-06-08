const path = require('path');

module.exports = {
    mode: "development",
    watch: true,
     entry: {
     "./main": './src/index.js',
     "./test/main": './src/test.js'
     },
    output: {
      filename: '[name].js',
     path: path.resolve(__dirname, 'dist')
     },
};
