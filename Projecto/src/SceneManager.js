'use strict';

const TOPVIEW=[0,100,0];
const FRONTVIEW=[0,25,70];
const SIDEVIEW=[80,25,0];

var camera, rotateRight=false, rotateLeft=false, moveForward=false, moveBackward=false, accelRotLeft=0.01, accelRotRight=0.01, accelPosZ=0.25, accelNegZ=0.25;


function SceneManager() {

}
function cameraSetup(x,y,z){
    camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
    camera.position.x = x;
    camera.position.y = y;
    camera.position.z = z;
    camera.lookAt(scene.position);
}