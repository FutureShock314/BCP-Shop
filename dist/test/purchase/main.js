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

eval("console.log(\"working (purchase-test)\");\n\nvar items = [\n    'football',\n    'pen'\n];\nvar modals = [];\nvar modalOpenButtons = [];\nvar modalCloseButtons = [];\nvar purchaseButtons = [];\n\nvar buyItem = (itemName, personName) => {\n    console.log('Bought Stuffs ('+itemName+') for '+personName);\n    //* Do firebase buy stuff *//\n};\n\nvar count = items.length;\nfor(var i = 0; i < count; i++) {\n    console.log(i);\n    var item = items[i];\n    console.log(item);\n\n    //var tempModal = document.querySelector('.'+item+'-modal');\n    //modals.push(tempModal);\n\n    document.querySelector('.'+item+'-modal-open').addEventListener('click', () => {\n        document.querySelector('.'+item+'-modal').showModal();\n    })\n    //modalCloseButtons.push(document.querySelector('.'+item+'-modal-close'));\n    //purchaseButtons.push(document.querySelector('.'+item+'-purchase'));\n\n    //var itemPerson = document.querySelector('.'+item+'-name');\n\n    /*modalOpenButtons[i].addEventListener('click', () => {\n        modals[i].showModal();\n    });\n    /*modalCloseButtons[i].addEventListener('click', () => {\n        modals[i].close();\n    });\n    purchaseButtons[i].addEventListener('click', () => {\n        buyItem(item, itemPerson);\n    });*/\n\n    console.log(i + item);\n}\nconsole.info('modals: '+modals);\nconsole.log('finished');\n\n\n//# sourceURL=webpack://bcp-shop/./src/purchase-test.js?");

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