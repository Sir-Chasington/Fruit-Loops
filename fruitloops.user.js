// ==UserScript==
// @name        Fruit Loops
// @version     0.2.3
// @author      Chester.js
// @description Automates PIPS
// @homepage    https://github.com/Sir-Chasington/fruit-loops/#readme
// @supportURL  https://github.com/Sir-Chasington/fruit-loops/issues
// @match       https://fruitlab.com/
// @match       https://fruitlab.com/ggm
// @match       https://fruitlab.com/video/*
// @contributor JSON
// @downloadURL https://raw.githubusercontent.com/Sir-Chasington/fruit-loops/master/fruitloops.user.js
// @updateURL   https://raw.githubusercontent.com/Sir-Chasington/fruit-loops/master/fruitloops.meta.js
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_notification
// @grant       window.focus
// @run-at      document-start
// @noframes    true
// ==/UserScript==

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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/watchBalance.js
const watchBalance = (pips) => {
    setInterval(() => {
        const checkPips = document.getElementById('flat_pips_balance').innerText;

        if (pips !== checkPips) {
            const date = new Date();
            const options = {
                hour12: true,
                hour: '2-digit',
                minute: '2-digit',
            };

            GM_notification(`${date.toLocaleTimeString([], options)} Balance: ${checkPips}`);

            window.location.href = 'https://fruitlab.com/ggm';
        }
    }, 1000);
};

/* harmony default export */ var src_watchBalance = (watchBalance);

// CONCATENATED MODULE: ./src/check.js
const check = () => {
    const vid = document.getElementsByClassName('videothumbnail');
    const randomIndex = Math.floor(Math.random() * vid.length - 1);

    window.location.href = `${window.location.origin}${vid[randomIndex].pathname}${vid[randomIndex].search}`;
};

/* harmony default export */ var src_check = (check);

// CONCATENATED MODULE: ./src/index.js



const url = 'https://fruitlab.com/ggm';

async function setup() {
    let { href } = window.location;
    const { pathname } = window.location;
    const pips = document.getElementById('flat_pips_balance');

    if (!pips || pathname === '/') {
        href = url;
    }

    if (pathname === '/ggm') {
        setInterval(() => {
            src_check();
        }, 5000);
    } else if (href.includes('video')) {
        src_watchBalance(pips.innerText);
    } else {
        href = url;
    }
}

window.addEventListener(
    'load',
    async () => {
        window.stop();
        await setup();
    },
    { capture: true, once: true },
);

window.addEventListener(
    'unload',
    async () => {
        // do some clean up?
    },
    false,
);


/***/ })
/******/ ]);