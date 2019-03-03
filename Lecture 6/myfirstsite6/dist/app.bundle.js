/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/FatFreeFood.js":
/*!********************************!*\
  !*** ./src/app/FatFreeFood.js ***!
  \********************************/
/*! exports provided: FatFreeFood */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FatFreeFood\", function() { return FatFreeFood; });\n/* harmony import */ var _food_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food.js */ \"./src/app/food.js\");\n\n// FatFreeFood is a derived class\n\n\n\nclass FatFreeFood extends _food_js__WEBPACK_IMPORTED_MODULE_0__[\"Food\"] {\n\n\tconstructor(name, protein, carbs) {\n\t\tsuper(name, protein, carbs, 0);\n\t}\n\n\tprint() {\n\t\tsuper.print();\n\t\tconsole.log(`Would you look at that -- ${this.name} has no fat!`);\n\t}\n}\n\n//# sourceURL=webpack:///./src/app/FatFreeFood.js?");

/***/ }),

/***/ "./src/app/food.js":
/*!*************************!*\
  !*** ./src/app/food.js ***!
  \*************************/
/*! exports provided: Food */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Food\", function() { return Food; });\n\n\n// Food is a base class\n\nclass Food {\n\n    constructor(name, protein, carbs, fat) {\n        this.name = name;\n        this.protein = protein;\n        this.carbs = carbs;\n        this.fat = fat;\n    }\n\n    toString() {\n        return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`;\n    }\n\n    print() {\n        console.log(this.toString());\n    }\n}\n\n//# sourceURL=webpack:///./src/app/food.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_food_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/food.js */ \"./src/app/food.js\");\n/* harmony import */ var _app_FatFreeFood_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/FatFreeFood.js */ \"./src/app/FatFreeFood.js\");\n\n\n\nconst chicken_breast = new _app_food_js__WEBPACK_IMPORTED_MODULE_0__[\"Food\"]('Chicken Breast', 26, 0, 3.5);\n\nchicken_breast.print(); // 'Chicken Breast | 26g P :: 0g C :: 3.5g F'\nconsole.log(chicken_breast.protein); // 26 (LINE A)\nconsole.log(\"Hello\");\n\nconst fat_free_yogurt = new _app_FatFreeFood_js__WEBPACK_IMPORTED_MODULE_1__[\"FatFreeFood\"]('Greek Yogurt', 16, 12);\nfat_free_yogurt.print();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });