// ==UserScript==
// @name Fruit Loops
// @version 0.2.0
// @author Chester.js
// @description Automates PIPS
// @homepage https://github.com/Sir-Chasington/fruit-loops/#readme
// @supportURL https://github.com/Sir-Chasington/fruit-loops/issues
// @match https://fruitlab.com/*
// @contributor JSON
// @downloadURL https://raw.githubusercontent.com/Sir-Chasington/fruit-loops/master/fruitloops.user.js
// @updateURL https://raw.githubusercontent.com/Sir-Chasington/fruit-loops/master/fruitloops.meta.js
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_notification
// @grant window.focus
// @run-at document-start
// @noframes true
// ==/UserScript==

!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var o=e=>{setInterval(()=>{const{log:n}=console,t=document.getElementById("flat_pips_balance").innerText;n("balance check"),e!==t&&(window.location.href="https://fruitlab.com/ggm")},1e3)};var r=()=>{const e=document.getElementsByClassName("videothumbnail"),n=Math.floor(Math.random()*e.length-1),t=window.location.origin,o=e[n].pathname,r=e[n].search;return window.location.href=`${t}${o}${r}`,null};const a="https://fruitlab.com/ggm";window.addEventListener("load",async()=>{window.stop(),await async function(){const e=document.getElementById("flat_pips_balance").innerText,{pathname:n}=window.location;return document.getElementById("flat_pips_balance")?("/"===n&&(window.location.href=a),"/ggm"===n?setInterval(()=>{r()},5e3):window.location.href.includes("video")?o(e):window.location.href=a,null):(window.location.href=a,null)}()},{capture:!0,once:!0}),window.addEventListener("unload",async()=>{},!1)}]);