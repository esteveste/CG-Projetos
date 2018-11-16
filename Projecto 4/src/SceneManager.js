'use strict';

let camera, ball,board, lights, holofotes, cameratrackball, control, clock,TRACKBALL_CAMERA=true,scene;
let h_orig = window.innerHeight,w_orig=window.innerWidth,VIEW_SIZE=80;


var axes=false;
var aspectRatio=window.innerWidth/ window.innerHeight;


function SceneManager() {


    this.CAMERA_POS=[100,120,100];


    scene = new THREE.Scene();

    sceneSetup(scene);

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    

    //this.camera = new THREE.PerspectiveCamera( 45, aspectRatio, 1, 1000 );

    
    //this.camera.position.set(...this.CAMERA_POS);

    //this.camera.lookAt(scene.position);


    this.onResize=()=>{
        renderer.setSize(window.innerWidth, window.innerHeight);

        let aspectRatio=window.innerWidth/window.innerHeight;
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.camera.updateProjectionMatrix();


        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    this.changeCamera = (camera) =>{
        TRACKBALL_CAMERA=false;
        this.camera = camera;
        this.onResize();
        renderer.render(scene, this.camera.camera);
    };

    this.changeCamera(camera);



    this.animate=()=>{
        createEventAnimate();

        ball.animate();
        camera.animate();


        requestAnimationFrame(this.animate);

        renderer.render(scene, this.camera.camera);

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
    board = new Board();
    scene.add(board);

    ball = new Ball();
    scene.add(ball);

    lights = new Lights();
    scene.add(lights);

    camera = new Camera(aspectRatio);
    scene.add(camera);

}
