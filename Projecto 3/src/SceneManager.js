'use strict';

let global_light,plane, lights,cameratrackball, control, clock,TRACKBALL_CAMERA=true,scene;
let h_orig = window.innerHeight,w_orig=window.innerWidth,VIEW_SIZE=80;


var axes=false;



function SceneManager() {

    this.TOPVIEW=[0,100,0];
    this.FRONTVIEW=[0,50,100];
    this.SIDEVIEW=[100,0,0];
    this.CAMERA_POS = new THREE.Vector3(0, 40, 0);



    scene = new THREE.Scene();

    sceneSetup(scene);

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let aspectRatio=window.innerWidth/ window.innerHeight;

    this.camera1 = new THREE.OrthographicCamera(-aspectRatio*VIEW_SIZE / 2, aspectRatio*VIEW_SIZE / 2, VIEW_SIZE / 2, -VIEW_SIZE / 2, 1, 1000);
    this.camera2 = new THREE.PerspectiveCamera( 45, aspectRatio, 1, 1000 );
    this.camera3 = new THREE.PerspectiveCamera( 45, aspectRatio, 1, 1000 );

    this.camera1.position.set(...this.TOPVIEW);
    this.camera2.position.set(...this.FRONTVIEW);
    this.camera3.position.set(...this.SIDEVIEW);

    this.camera1.lookAt(scene.position);
    this.camera2.lookAt(scene.position);
    this.camera3.lookAt(scene.position);



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
        console.log("REZISE");
        renderer.setSize(window.innerWidth, window.innerHeight);

        let aspectRatio=window.innerWidth/window.innerHeight;
        if(this.camera.type=="PerspectiveCamera"){
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
        }else {
            if (aspectRatio > 1) {
                this.camera.left = -aspectRatio * VIEW_SIZE / 2;
                this.camera.right = aspectRatio * VIEW_SIZE / 2;
                this.camera.top = VIEW_SIZE / 2;
                this.camera.bottom = -VIEW_SIZE / 2;
            } else {
                this.camera.left = -VIEW_SIZE / 2;
                this.camera.right = VIEW_SIZE / 2;
                this.camera.top = VIEW_SIZE / (2 * aspectRatio);
                this.camera.bottom = -VIEW_SIZE / (2 * aspectRatio);
            }
            this.camera.updateProjectionMatrix();
        }


        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    this.changeCamera = (camera) =>{
        TRACKBALL_CAMERA=false;
        this.camera = camera;
        this.onResize();
        renderer.render(scene, this.camera);
    };

    this.changeCamera(this.camera1);


    this.animate=()=>{


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


var vertexList = [];
var facesList = [];
function sceneSetup(scene) {
    plane = new Plane();
    scene.add(plane);
    scene.add(new THREE.AxesHelper(10));

    lights = new Lights();
    scene.add(lights);

}

// var g = new THREE.Geometry(); g.vertices.push( ...geometry2.vertices ); g.faces.push( ...geometry2.faces); g.computeBoundingSphere();
// var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
// var mesh = new THREE.Mesh( g, material );
