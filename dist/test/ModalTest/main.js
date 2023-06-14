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

eval("console.log(\"working (modal-test)\")\n\nconst modal = document.querySelector('.modal')\nconst openModal = document.querySelector('.open-modal')\nconst closeModal = document.querySelector('.close-modal')\n\nopenModal.addEventListener('click', () => {\n    modal.showModal()\n})\n\n// closeModal.addEventListener('click', () => {\n//     modal.close()\n// })\n\n// * play anim for hiding modal\n\ncloseModal.addEventListener('click', () => {\n    modal.classList.add('hide');\n    console.log('added hide')\n    modal.addEventListener('animationend', function(){\n        console.log('added event listener')\n        modal.classList.remove('hide');\n        console.log('removed \"hide\"')\n        modal.close();\n        modal.removeEventListener('animationend',  arguments.callee, false);\n        console.log('removed animationend check')\n    }, false);\n})\n\n\n//# sourceURL=webpack://bcp-shop/./src/modal-test.js?");

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