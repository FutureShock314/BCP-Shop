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

/***/ "./src/modal-test.js":
/*!***************************!*\
  !*** ./src/modal-test.js ***!
  \***************************/
/***/ (() => {

eval("console.log(\"working (modal-test)\")\r\n\r\nconst modal = document.querySelector('.modal')\r\nconst openModal = document.querySelector('.open-modal')\r\nconst closeModal = document.querySelector('.close-modal')\r\n\r\nopenModal.addEventListener('click', () => {\r\n    modal.showModal()\r\n})\r\n\r\n// closeModal.addEventListener('click', () => {\r\n//     modal.close()\r\n// })\r\n\r\n// * play anim for hiding modal\r\n\r\ncloseModal.addEventListener('click', () => {\r\n    modal.classList.add('hide');\r\n    console.log('added hide')\r\n    modal.addEventListener('animationend', function(){\r\n        console.log('added event listener')\r\n        modal.classList.remove('hide');\r\n        console.log('removed \"hide\"')\r\n        modal.close();\r\n        modal.removeEventListener('animationend',  arguments.callee, false);\r\n        console.log('removed animationend check')\r\n    }, false);\r\n})\r\n\n\n//# sourceURL=webpack://bcp-shop/./src/modal-test.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/modal-test.js"]();
/******/ 	
/******/ })()
;