const path = require('path');

module.exports = {
    mode: "development",
    watch: true,
     entry: {
     "./home-non_logged/login/main": './src/login.js',
     "./home-logged/main": './src/home.js',
     "./ModalTest/main": './src/modal-test.js',
     "./main": './src/main.js',
     },
    output: {
      filename: '[name].js',
     path: path.resolve(__dirname, 'dist')
     },
};
