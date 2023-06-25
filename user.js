// ==UserScript==
// @name         Comic图片加载
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       acer
// @match        https://18comic.vip/search/*
// @match        https://18comic.org/search/*
// @downloadURL  https://github.com/JKwarn/18comic-search-Img-load/blob/main/user.js
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