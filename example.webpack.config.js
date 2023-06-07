const path = require('path');

module.exports = {
    watch: true,
     entry: {
     main: './src/index.js',
     vendor: './src/vendor.js'
     },
    output: {
      filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist')
     },
};
