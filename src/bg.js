function updateIcon(){
    "use strict";
    const ua = navigator.userAgent;
    const vstring = ua.substr(ua.indexOf("Vivaldi"));
    const vnum = vstring.substr(vstring.indexOf("/")+1);
    const vdots = vnum.split(".");
    const display = vdots[0] + "." + vdots[1];
    const canvas = document.createElement("canvas");
    canvas.width = 48;
    canvas.height = 48;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.font = "32px Arial";
    ctx.fillText(display,0,32);
    const icon = canvas.toDataURL();
    chrome.browserAction.setIcon({path: icon});
    chrome.browserAction.setTitle({title: vnum});
}

chrome.runtime.onStartup.addListener(updateIcon);
chrome.runtime.onInstalled.addListener(updateIcon);
chrome.browserAction.onClicked.addListener(updateIcon);
