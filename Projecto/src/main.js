'use strict';

var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var camera;

function init() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    cameraSetup(...TOPVIEW); //... ->spread operator, passa o tuplo para argumentos

    render();

    window.addEventListener("resize", onResize);
    animate();

    document.onkeydown = function(e){
        e = e || window.event;
        switch(e.which || e.keyCode){
            case 39:
                //left
                rotateLeft=true;
                break;
            case 38:
                //up
                moveForward=true;
                break;
            case 37:
                //right
                rotateRight=true;
                break;
            case 40:
                //down
                moveBackward=true;
                break;
            case 65:
                //A
                material.wireframe=! material.wireframe;
                // if(material){
                //     currentMaterial = material2;
                // }
                // else currentMaterial = material;
                // changeRepresentation();
                break;
            case 49:
                //1
                cameraSetup(...TOPVIEW);
                renderer.render(scene, camera);
                break;
            case 50:
                //2
                cameraSetup(...FRONTVIEW);
                renderer.render(scene, camera);
                break;
            case 51:
                //3
                cameraSetup(...SIDEVIEW);
                renderer.render(scene, camera);
                break;
            default: return;
        }
        e.preventDefault();
    };

    document.onkeyup = function(e){
        e = e || window.event;
        switch(e.which || e.keyCode){
            case 39:
                //left
                rotateLeft=false;
                break;
            case 38:
                //up
                moveForward=false;
                break;
            case 37:
                //right
                rotateRight=false;
                break;
            case 40:
                //down
                moveBackward=false;
                break;
        }
        e.preventDefault();
    }

}

function render() {
    renderer.render(scene, camera);
}

function onResize(){
    renderer.setSize(window.innerWidth, window.innerHeight);
}