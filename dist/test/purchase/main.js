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

eval("var items = [\n    'football',\n    'pen'\n];\n\nvar count = items.length;\nfor(var i = 0; i < count; i++) {\n    console.log(i);\n    var item = items[i];\n    console.log(item);\n    \n    var modal = document.querySelector('.'+item+'-modal');\n    var openModal = document.querySelector('.'+item+'-modal-open');\n    var closeModal = document.querySelector('.'+item+'-modal-close');\n\n    openModal.addEventListener('click', () => {\n        modal.showModal();\n    });\n    closeModal.addEventListener('click', () => {\n        modal.close();\n    });        \n\n    console.log(i + item);\n}\nconsole.log('finished');\n\n\n\n\n\nconsole.log(\"working (purchase-test)\");\n\nconst o_modal = document.querySelector('.football-modal');\nconst o_openModal = document.querySelector('.football-modal-open');\nconst o_closeModal = document.querySelector('.football-modal-close');\n\no_openModal.addEventListener('click', () => {\n    o_modal.showModal();\n});\n\no_closeModal.addEventListener('click', () => {\n    o_modal.close();\n});\n\n// * play anim for hiding modal\n\ncloseModal.addEventListener('click', () => {\n    modal.classList.add('hide');\n    console.log('added hide');\n    modal.addEventListener('animationend', function(){\n        console.log('added event listener');\n        modal.classList.remove('hide');\n        console.log('removed \"hide\"');\n        modal.close();\n        modal.removeEventListener('animationend',  arguments.callee, false);\n        console.log('removed animationend check');\n    }, false);\n});\n\n\n//# sourceURL=webpack://bcp-shop/./src/purchase-test.js?");

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