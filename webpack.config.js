const path = require('path');

module.exports = {
    mode: "development",
    watch: true,
     entry: {
     "./login/main": './src/login.js',
     "./home/main": './src/home.js',
     "./test/ModalTest/main": './src/modal-test.js',
     "./test/purchase/main": './src/purchase-test.js',
     "./main": './src/main.js',
     },
    output: {
      filename: '[name].js',
     path: path.resolve(__dirname, 'dist')
     },
};
