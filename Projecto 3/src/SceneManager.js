'use strict';

let plane, lights, holofotes, cameratrackball, control, clock,TRACKBALL_CAMERA=true,scene;
let h_orig = window.innerHeight,w_orig=window.innerWidth,VIEW_SIZE=80;


var axes=false;



function SceneManager() {

    this.TOPVIEW=[0,100,0];
    this.FRONTVIEW=[0,50,100];
    this.SIDEVIEW=[100,100,100];
    this.CAMERA_POS = new THREE.Vector3(0, 40, 0);



    scene = new THREE.Scene();

    sceneSetup(scene);

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let aspectRatio=window.innerWidth/ window.innerHeight;

    this.camera = new THREE.PerspectiveCamera( 45, aspectRatio, 1, 1000 );

    
    this.camera.position.set(...this.SIDEVIEW);

    this.camera.lookAt(scene.position);



    // renderer.shadowMapEnabled = true;
    // renderer.shadowMapSoft = false;
    //
    // renderer.shadowCameraNear = 3;
    // // renderer.shadowCameraFar = this.camera1.far;
    // renderer.shadowCameraFov = 45;
    //
    // renderer.shadowMapBias = 0.0039;
    // renderer.shadowMapDarkness = 0.5;
    // renderer.shadowMapWidth = 1024;
    // renderer.shadowMapHeight = 1024;


    this.onResize=()=>{
        renderer.setSize(window.innerWidth, window.innerHeight);

        let aspectRatio=window.innerWidth/window.innerHeight;
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();


        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    this.changeCamera = (camera) =>{
        TRACKBALL_CAMERA=false;
        this.camera = camera;
        this.onResize();
        renderer.render(scene, this.camera);
    };

    this.changeCamera(this.camera);


    this.animate=()=>{
        createEventAnimate();

        requestAnimationFrame(this.animate);

        renderer.render(scene, this.camera);



    };


    clock = new THREE.Clock();
    clock.start();

    this.animate();




    this.setupTrackball = function () {
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

    this.changeWireframe=()=>{

        plane.changeWireframe();
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
    plane = new Plane();
    scene.add(plane);
    scene.add(new THREE.AxesHelper(10));

    lights = new Lights();
    scene.add(lights);

    holofotes = new Holofotes();
    scene.add(holofotes);

}
