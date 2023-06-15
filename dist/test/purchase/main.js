/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/purchase-test.js":
/*!******************************!*\
  !*** ./src/purchase-test.js ***!
  \******************************/
/***/ (() => {

eval("console.log(\"working (purchase-test)\");\r\n\r\nvar items = [\r\n    'football',\r\n    'pen'\r\n];\r\n\r\n\r\nvar count = items.length;\r\nfor(var i = 0; i < count; i++) {\r\n    console.log(i);\r\n    var item = items[i];\r\n    console.log(item);\r\n\r\n    var openModal = document.querySelector('.'+item+'-modal-open');\r\n    console.log(\"openModal set\");\r\n    openModal.addEventListener('click', (event) => {\r\n        var modalName = event.target.innerHTML.toLowerCase();\r\n        console.log(\"modalName set\")\r\n        console.info(document.querySelector('.'+item+'-modal'));\r\n        document.querySelector('.'+modalName+'-modal').showModal();\r\n    });\r\n    console.log('added open event listener for '+item);\r\n\r\n    var closeModal = document.querySelector('.'+item+'-modal-close');\r\n    closeModal.addEventListener('click', (event) => {\r\n        console.info('yay, close button pressed');\r\n        var modalName = event.target.id.toLowerCase();\r\n        console.log('modalName: \\''+modalName+'\\'');\r\n        console.info(document.querySelector('.'+item+'-modal'));\r\n        document.querySelector('.'+modalName+'-modal').close();\r\n    });\r\n    console.log('added close event listener for '+item);\r\n\r\n    /*var purchaseButton = document.querySelector('.'+item+'-modal-open');\r\n    purchaseButton.addEventListener('click', (event) => {\r\n        console.info('yay, button pressed');\r\n        var itemName = event.target.innerHTML.toLowerCase();\r\n        console.info(document.querySelector('.'+itemName+'-purchase'));\r\n        document.querySelector('.'+itemName+'-purchase');\r\n    });*/\r\n    console.log(i + item);\r\n}\r\nconsole.log('finished');\r\n\n\n//# sourceURL=webpack://bcp-shop/./src/purchase-test.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/purchase-test.js"]();
/******/ 	
/******/ })()
;