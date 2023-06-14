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

eval("console.log(\"working (purchase-test)\");\n\nvar items = [\n    'football',\n    'pen'\n];\n\nvar count = items.length;\nfor(var i = 0; i < count; i++) {\n    console.log(i);\n    var item = items[i];\n    console.log(item);\n    \n    var modal = document.querySelector('.'+item+'-modal');\n    var openModal = document.querySelector('.'+item+'-modal-open');\n    var closeModal = document.querySelector('.'+item+'-modal-close');\n\n    openModal.addEventListener('click', () => {\n        modal.showModal();\n    });\n    closeModal.addEventListener('click', () => {\n        modal.close();\n    });        \n\n    console.log(i + item);\n}\nconsole.log('finished');\n\n\n//# sourceURL=webpack://bcp-shop/./src/purchase-test.js?");

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