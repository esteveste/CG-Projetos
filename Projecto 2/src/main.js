'use strict';

var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var sceneManager,input;

function init() {

    input=new Input();

    sceneManager=new SceneManager();


    window.addEventListener("resize", sceneManager.onResize);

}


