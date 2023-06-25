// ==UserScript==
// @name         测试18mic
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://18comic.vip/search/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=18comic.vip
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let overlay = document.getElementsByClassName("thumb-overlay");
    let hrefLabel;
    let imageAddress = "";

    for (let count = 0; count < overlay.length; count++)
    {
        hrefLabel = overlay[count].firstElementChild;
        if (hrefLabel)
        {
            imageAddress = hrefLabel.firstElementChild.getAttribute("data-original");
            hrefLabel.firstElementChild.setAttribute("src", imageAddress);
        }
    }
    // Your code here...
})();