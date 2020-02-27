// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://fruitlab.com*
// @match        https://fruitlab.com/*
// @run-at
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (!document.getElementById('flat_pips_balance')) {
        window.location.href = "https://fruitlab.com/ggm";
        return;
    }

    var pips = document.getElementById('flat_pips_balance').innerText;
    var pathname = window.location.pathname;

    var watchBalance = () => {
        setInterval(() => {
            console.log('balance check');
            var checkPips = document.getElementById('flat_pips_balance').innerText;
            if (pips !== checkPips) {
                window.location.href = "https://fruitlab.com/ggm";
            }
        }, 1000);
    }

    var check = () => {
        var vid = document.getElementsByClassName('videothumbnail');
        var randomIndex = Math.floor(Math.random() * vid.length - 1)
        var baseUrl = window.location.origin;
        var pathToNew = vid[randomIndex].pathname;
        var endSearch = vid[randomIndex].search;
        window.location.href = `${baseUrl}${pathToNew}${endSearch}`;
        return;
    }

    if (pathname === '/') {
        window.location.href = "https://fruitlab.com/ggm";
    }

    if (pathname === '/ggm') {
        setInterval(() => {
            check();
        }, 5000);
    } else if (window.location.href.includes('video')) {
        watchBalance();
    } else {
        window.location.href = "https://fruitlab.com/ggm";
    }
})();