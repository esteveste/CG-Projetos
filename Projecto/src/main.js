'use strict';

var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var sceneManager,input;

function init() {

    sceneManager=new SceneManager();

    input=new Input();

    window.addEventListener("resize", sceneManager.onResize);


}


