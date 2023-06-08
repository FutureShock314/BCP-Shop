const path = require('path');

module.exports = {
    mode: "development",
    watch: true,
     entry: {
     "./login/main": './src/login.js',
     "./login/test/main": './src/test.js',
     "./ModalTest/main": './src/modal-test.js'
     },
    output: {
      filename: '[name].js',
     path: path.resolve(__dirname, 'dist')
     },
};
