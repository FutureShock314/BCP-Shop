const path = require('path');

module.exports = {
    mode: "development",
    watch: true,
     entry: {
     "./login/main": './src/login.js',
     "./home/main": './src/home.js',
     "./test/ModalTest/main": './src/modal-test.js',
     "./test/purchase/main": './src/purchase-test.js',
     "./test/purchase/firestore_write": './src/purchase-test-2.js',
     "./main": './src/main.js',
     },
    output: {
      filename: '[name].js',
     path: path.resolve(__dirname, 'dist')
     },
};
