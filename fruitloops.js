// ==UserScript==
// @name         Fruit Loops
// @version      0.1.1
// @description  try to take over the world!
// @author       Chester.js
// @contributor  JSON
// @supportURL   https://github.com/Sir-Chasington/fruit-loops/issues
// @updateURL    https://raw.githubusercontent.com/Sir-Chasington/fruit-loops/master/fruitloops.js
// @match        https://fruitlab.com*
// @match        https://fruitlab.com/*
// @run-at
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const pips = document.getElementById('flat_pips_balance').innerText;
    const { pathname } = window.location;

    const watchBalance = () => {
        setInterval(() => {
            const { log } = console;
            const checkPips = document.getElementById('flat_pips_balance').innerText;

            log('balance check');

            if (pips !== checkPips) {
                window.location.href = 'https://fruitlab.com/ggm';
            }
        }, 1000);
    };

    const check = () => {
        const vid = document.getElementsByClassName('videothumbnail');
        const randomIndex = Math.floor(Math.random() * vid.length - 1);
        const baseUrl = window.location.origin;
        const pathToNew = vid[randomIndex].pathname;
        const endSearch = vid[randomIndex].search;
        window.location.href = `${baseUrl}${pathToNew}${endSearch}`;
        return null;
    };

    if (!document.getElementById('flat_pips_balance')) {
        window.location.href = 'https://fruitlab.com/ggm';
        return null;
    }

    if (pathname === '/') {
        window.location.href = 'https://fruitlab.com/ggm';
    }

    if (pathname === '/ggm') {
        setInterval(() => {
            check();
        }, 5000);
    } else if (window.location.href.includes('video')) {
        watchBalance();
    } else {
        window.location.href = 'https://fruitlab.com/ggm';
    }
})();
