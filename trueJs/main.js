/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/articles.js":
/*!************************!*\
  !*** ./js/articles.js ***!
  \************************/
/*! namespace exports */
/*! export all [provided] [no usage info] [missing usage info prevents renaming] */
/*! export one [provided] [no usage info] [missing usage info prevents renaming] */
/*! export remove [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"all\": () => /* binding */ all,\n/* harmony export */   \"one\": () => /* binding */ one,\n/* harmony export */   \"remove\": () => /* binding */ remove\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ \"./js/db.js\");\n;\r\n\r\n\r\nfunction all() {\r\n    return _db__WEBPACK_IMPORTED_MODULE_0__.alll().then(console.log());\r\n}\r\n\r\nfunction one(id) {\r\n\r\n}\r\n\r\nfunction remove(id) {\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://3/./js/articles.js?");

/***/ }),

/***/ "./js/db.js":
/*!******************!*\
  !*** ./js/db.js ***!
  \******************/
/*! namespace exports */
/*! export alll [provided] [no usage info] [missing usage info prevents renaming] */
/*! export get [provided] [no usage info] [missing usage info prevents renaming] */
/*! export remove [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"alll\": () => /* binding */ alll,\n/* harmony export */   \"get\": () => /* binding */ get,\n/* harmony export */   \"remove\": () => /* binding */ remove\n/* harmony export */ });\n/**\r\n * Глобальная вероятность успеха для удобства тестирования\r\n */\r\nconst GLOBAL_PROPABILITY = 1;\r\nconst BAD_JSON_PROPABILITY = 0;\r\n\r\n/**\r\n * Получить все записи из хранилища\r\n * @param {callable} onAnswer Функция, обрабатывающая ответ от сервера в формате JSON \r\n */\r\nfunction alll(onAnswer) {\r\n    return TimeoutPropabiliry(300, GLOBAL_PROPABILITY).then(() => {\r\n        return onAnswer(serverAnswer(articlesStorage));\r\n    })\r\n}\r\n\r\n/**\r\n * Получить статью по id\r\n * @param {int} id Id статьи\r\n * @param {callable} onAnswer Функция, обрабатывающая ответ от сервера в формате JSON \r\n */\r\nfunction get(id, onAnswer) {\r\n    TimeoutPropabiliry(300, GLOBAL_PROPABILITY).then(() => {\r\n        onAnswer(serverAnswer(articlesStorage[mapArticles[id]]));\r\n    }).catch(e => {\r\n        onAnswer(serverAnswer('', 100500, \"Propability Error\"));\r\n    })\r\n}\r\n\r\n/**\r\n * Удалить статью из базы\r\n * @param {int} id Id статьи\r\n * @param {callable} onAnswer Функция, обрабатывающая ответ от сервера в формате JSON  \r\n */\r\nfunction remove(id, onAnswer) {\r\n    TimeoutPropabiliry(300, GLOBAL_PROPABILITY, () => {\r\n        if (id in mapArticles) {\r\n            let num = mapArticles[id];\r\n            delete mapArticles[id];\r\n            articlesStorage.splice(num, 1);\r\n            onAnswer(serverAnswer(true));\r\n        } else {\r\n            onAnswer(false);\r\n        }\r\n    }, () => {\r\n        onAnswer(serverAnswer('', 100500, \"Propability Error\"));\r\n    });\r\n}\r\n\r\n/* полуприватная часть, вдруг захотите сделать промис :) */\r\nfunction TimeoutPropabiliry(time, probability) {\r\n    return new Promise((resolve, reject) => {\r\n        window.setTimeout(() => {\r\n            console.log(1);\r\n            Math.random() < probability ? resolve() : reject();\r\n        }, time);\r\n    })\r\n}\r\n\r\nfunction serverAnswer(data, code = 200, status = \"OK\") {\r\n    if (Math.random() < BAD_JSON_PROPABILITY) {\r\n        return 'incoorect json';\r\n    }\r\n\r\n    return JSON.stringify({\r\n        code,\r\n        status,\r\n        data\r\n    });\r\n}\r\n\r\n/*  приватная часть */\r\nlet articlesStorage = [{\r\n        id: 1,\r\n        title: 'Профисификация кода',\r\n        dt: '2018-12-06',\r\n        text: 'Код без промисов бывает жестью, но и с ними можно изобразить много странного.'\r\n    },\r\n    {\r\n        id: 2,\r\n        title: 'Итераторы и генераторы',\r\n        dt: '2018-12-01',\r\n        text: 'Сначала пугают всех, кто к ним прикасается, а Symbol кажется бредом.'\r\n    },\r\n    {\r\n        id: 5,\r\n        title: 'Javascript',\r\n        dt: '2018-12-02',\r\n        text: 'Всё равно хороший язык программирования.'\r\n    }\r\n];\r\n\r\nlet mapArticles = {};\r\n\r\narticlesStorage.forEach((item, i) => {\r\n    mapArticles[item.id] = i;\r\n});\n\n//# sourceURL=webpack://3/./js/db.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _articles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articles */ \"./js/articles.js\");\n;\r\n\r\n\r\n_articles__WEBPACK_IMPORTED_MODULE_0__.all().then(console.log)\r\n    // .then((articles) => {\r\n    //     console.log('articles count = ' + articles.length);\r\n    //     let ind = Math.floor(Math.random() * articles.length);\r\n    //     console.log('select index ' + ind + ', id = ' + articles[ind].id)\r\n    //     return ArticlesModel.one(articles[ind].id)\r\n    //         //return { ob: ArticlesModel.one(ind), id: ind }\r\n    // }).then((article) => {\r\n    //     console.log(article);\r\n    //     return ArticlesModel.remove(article.id)\r\n    // }).then((result) => {\r\n    //     console.log(\"что с удалением\" + result);\r\n    //     return ArticlesModel.all()\r\n    // }).then((articles) => {\r\n    //     console.log('articles count = ' + articles.length);\r\n    // })\r\n    // .catch(e => {\r\n    //     console.log(e);\r\n    // })\n\n//# sourceURL=webpack://3/./js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;