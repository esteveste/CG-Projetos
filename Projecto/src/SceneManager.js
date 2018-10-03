'use strict';

let chair, lamp, table, cameratrackball, control, clock,TRACKBALL_CAMERA=true;
let h_orig = window.innerHeight,w_orig=window.innerWidth;

function SceneManager() {

    this.TOPVIEW=[0,100,0];
    this.FRONTVIEW=[0,0,100];
    this.SIDEVIEW=[100,0,0];


    var scene = new THREE.Scene();

    sceneSetup(scene);

    var renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var camera = new THREE.OrthographicCamera(window.innerWidth / - 12, window.innerWidth / 12, window.innerHeight / 12, window.innerHeight / - 12, 1, 1000);

    this.changeCamera = function (x, y, z) {
        TRACKBALL_CAMERA=false;

        camera.position.x = x;
        camera.position.y = y;
        camera.position.z = z;
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
    };

    this.changeCamera(...this.TOPVIEW);

    this.animate=()=>{
        createEventAnimate();

        requestAnimationFrame(this.animate);

        if(TRACKBALL_CAMERA){
            renderer.render(scene, cameratrackball);
        }else {
            renderer.render(scene, camera);
        }

    };

    clock = new THREE.Clock();
    clock.start();
    this.animate();

    this.onResize=function (){
        renderer.setSize(window.innerWidth, window.innerHeight);
        // let aspectRation =
        let zoomFactor = (window.innerHeight/h_orig)*(window.innerWidth/w_orig);
        camera.left = window.innerWidth / - (12*zoomFactor);
        camera.right = window.innerWidth / (12*zoomFactor);
        camera.top = window.innerHeight / (12*zoomFactor);
        camera.bottom = window.innerHeight / - (12*zoomFactor);
        camera.updateProjectionMatrix();

        //trackball update
        cameratrackball.aspect = window.innerWidth / window.innerHeight;
        cameratrackball.updateProjectionMatrix();
    };

    this.setupTrackball = function () {
        console.log("tb");
        cameratrackball = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        cameratrackball.position.set(100, 100, 100);
        cameratrackball.lookAt(scene.position);

        control = new THREE.TrackballControls(cameratrackball, renderer.domElement);
        control.rotateSpeed = 3.0;
        control.zoomSpeed = 3.0;
        control.panSpeed = 3.0;
        control.addEventListener('change', trackballRender);

        trackballAnimate();
    };

    function trackballAnimate() {
        requestAnimationFrame(trackballAnimate);
        control.update();
    }

    function trackballRender() {
        if(TRACKBALL_CAMERA) {
            renderer.render(scene, cameratrackball);
        }
    }

    this.setupTrackball();

}





function createEventAnimate() {
    let evt = new CustomEvent('animate', {  });

    window.dispatchEvent(evt);
}


function sceneSetup(scene) {
    scene.add(new THREE.AxesHelper(10));

    chair = new Chair();
    table = new Table();
    lamp = new Lamp();

    scene.add(chair);
    scene.add(table);
    scene.add(lamp);
}