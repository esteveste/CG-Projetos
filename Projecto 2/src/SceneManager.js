'use strict';

let chair, ball, arena, cameratrackball, control, clock,TRACKBALL_CAMERA=true;
let h_orig = window.innerHeight,w_orig=window.innerWidth,VIEW_SIZE=80;

function SceneManager() {

    this.TOPVIEW=[0,100,0];
    this.FRONTVIEW=[0,50,100];
    this.SIDEVIEW=[100,0,0];


    var scene = new THREE.Scene();

    sceneSetup(scene);

    var renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // this.canvas = document.getElementsByTagName( 'canvas' );
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


    this.changeCamera = function (camera) {
        TRACKBALL_CAMERA=false;
        this.camera = camera;

        renderer.render(scene, this.camera);
    };

    this.changeCamera(this.camera1);

    this.animate=()=>{
        createEventAnimate();

        requestAnimationFrame(this.animate);

        if(TRACKBALL_CAMERA){
            renderer.render(scene, cameratrackball);
        }else {
            renderer.render(scene, this.camera);
        }

    };

    clock = new THREE.Clock();
    clock.start();
    this.animate();

    this.onResize=function (){
        renderer.setSize(window.innerWidth, window.innerHeight);

        let aspectRatio=window.innerWidth/window.innerHeight;
        if(aspectRatio>1){
            camera.left =-aspectRatio*VIEW_SIZE / 2;
            camera.right = aspectRatio*VIEW_SIZE / 2;
            camera.top = VIEW_SIZE / 2;
            camera.bottom = -VIEW_SIZE / 2;
        }else {
            camera.left =-VIEW_SIZE / 2;
            camera.right =VIEW_SIZE / 2;
            camera.top = VIEW_SIZE / (2*aspectRatio);
            camera.bottom = -VIEW_SIZE / (2*aspectRatio);
        }
        camera.updateProjectionMatrix();

        //trackball update
        cameratrackball.aspect = window.innerWidth / window.innerHeight;
        cameratrackball.updateProjectionMatrix();


        renderer.setSize(window.innerWidth, window.innerHeight);
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

    this.changeWireframe=()=>{
        table.changeWireframe();
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
    arena = new Arena();

    for (let i=0; i<10; i++){
        ball = new Ball();
        scene.add(ball);
    }

    scene.add(arena);
    
}