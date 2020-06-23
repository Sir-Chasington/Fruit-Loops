// ==UserScript==
// @name         Robot watch
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://fruitlab.com*
// @match        https://fruitlab.com/*
// @run-at
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const fullVid = true;
    const openingUrl = 'user-home';
    const pathname = window.location.pathname;
    const newDayStartTime = 1800;
    const newDate = new Date();

    // check if cookie exists
    const fruitLoopsCookie = (document.cookie.match(/^(?:.*;)?\s*FruitLoops\s*=\s*([^;]+)(?:.*)?$/) || [, null])[1];

    const forwardToVideo = (videoList, parseFruitLoops) => {
        const videoPageList = videoList[0].children;
        const whichVideo = videoPageList[parseFruitLoops.currentVideoIndex];
        const videoToWatch = whichVideo.getElementsByClassName('videothumbnail')[0].href;
        window.location.href = videoToWatch;
    }

    if (window.location.href.includes('video')) {
        console.log('we are on video page');
        const parseFruitLoops = JSON.parse(fruitLoopsCookie);
        let count = 0;
        const videoSetInt = setInterval(() => {
            const firstNum = document.getElementsByClassName('vjs-current-time-display');
            const secondNum = document.getElementsByClassName('vjs-duration-display');
            if (fullVid) {
                if (firstNum.length) {
                    const fNumText = Number(firstNum[0].innerText.split(':').join(''));
                    const sNumText = Number(secondNum[0].innerText.split(':').join(''));
                    console.log('video playing: ', count);

                    if (fNumText >= sNumText) {
                        // End of video so rate video
                        // update index in cookie + 1
                        document.getElementsByClassName('say-rate-3')[0].click();
                        parseFruitLoops.currentVideoIndex = parseFruitLoops.currentVideoIndex + 1;
                        document.cookie = `FruitLoops=${JSON.stringify(parseFruitLoops)}; path=/`;
                        clearInterval(videoSetInt);
                        window.location.href = parseFruitLoops.currentVideoPageUrl;
                    }
                    if (count > 400) {
                        // update index in cookie + 1
                        // video was too long go back and pick next
                        document.getElementsByClassName('say-rate-3')[0].click();
                        parseFruitLoops.currentVideoIndex = parseFruitLoops.currentVideoIndex + 1;
                        document.cookie = `FruitLoops=${JSON.stringify(parseFruitLoops)}; path=/`;
                        clearInterval(videoSetInt);
                        window.location.href = parseFruitLoops.currentVideoPageUrl;
                    }

                }
            } else {
                // not sure we want to just watch add, dont know if you get xp now for just watching ad vs full video
                if (firstNum.length && firstNum[0].innerText === '0:01') {
                    window.location.href = parseFruitLoops.currentVideoPageUrl;
                    console.log('end of ad');
                }
            }
            count += 1;
        }, 1000);
    } else {
        if (fruitLoopsCookie) {
            const parseFruitLoops = JSON.parse(fruitLoopsCookie);
            if (parseFruitLoops.isUpdatingCurrentVideoUrl) {
                const gamesContainer = document.getElementsByClassName('hm_top_game_slider_list');
                let gamesList;
                if (gamesContainer.length) {
                    gamesList = gamesContainer[0].children;
                }
                if (gamesList.length) {
                    parseFruitLoops.currentVideoPageUrl = gamesList[parseFruitLoops.pageListIndex + 1].children[1].href;
                    parseFruitLoops.isUpdatingCurrentVideoUrl = false;
                    parseFruitLoops.pageListIndex = parseFruitLoops.pageListIndex + 1;
                    parseFruitLoops.currentVideoIndex = 0;

                    document.cookie = `FruitLoops=${JSON.stringify(parseFruitLoops)}; path=/`;
                    window.location.href = parseFruitLoops.currentVideoPageUrl;
                    return;
                }
            } else if (!window.location.href.includes('watch')) {
                window.location.href = parseFruitLoops.currentVideoPageUrl;
                return;
            }
            // TODO: Check if you are past newDayStartTime but cookie time stamp is not to reset cookie and start over from vid 1
            if (false) {
                // if true make new cookie
            } else {
                // if cookie exists and in current day pull data for it
                const intervalCheck = setInterval(() => {
                    const videoList = document.getElementsByClassName('jscroll-inner');
                    // check if index in cookie is greater than video list length if so go back to video page to get new game page
                    if (videoList.length && parseFruitLoops.currentVideoIndex >= videoList[0].children.length) {
                        // TODO: time to change the game url
                        parseFruitLoops.isUpdatingCurrentVideoUrl = true;
                        document.cookie = `FruitLoops=${JSON.stringify(parseFruitLoops)}; path=/`;
                        clearInterval(intervalCheck);
                        window.location.href = "https://fruitlab.com/" + openingUrl;
                    } else if (videoList.length) {
                        clearInterval(intervalCheck);
                        forwardToVideo(videoList, parseFruitLoops);
                    }
                }, 1000);
            }
        } else if (pathname === '/' + openingUrl) {
            // set cookie and forward to first video
            const gamesContainer = document.getElementsByClassName('hm_top_game_slider_list');
            let gamesList;
            if (gamesContainer.length) {
                gamesList = gamesContainer[0].children;
            }

            if (gamesList.length) {
                const fruitLoopObject = {
                    pageListIndex: 0,
                    currentVideoIndex: 0,
                    timestamp: new Date().valueOf(),
                    currentVideoPageUrl: gamesList[0].children[1].href,
                    isUpdatingCurrentVideoUrl: false,
                }

                document.cookie = `FruitLoops=${JSON.stringify(fruitLoopObject)}; path=/`;
                window.location.href = fruitLoopObject.currentVideoPageUrl;
            }
        } else {
            // if cookie does not exist go to openingUrl and make cookie
            window.location.href = "https://fruitlab.com/" + openingUrl;
        }
    }
})();