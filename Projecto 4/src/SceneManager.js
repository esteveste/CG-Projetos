'use strict';

let camera, ball,board, lights,rubik, holofotes, cameratrackball, control, clock,TRACKBALL_CAMERA=true,id;
let h_orig = window.innerHeight,w_orig=window.innerWidth,VIEW_SIZE=80;


var axes=false;
var aspectRatio=window.innerWidth/ window.innerHeight;
var renderer = new THREE.WebGLRenderer({ antialias: true });
var scene = new THREE.Scene();

let freezeFlag=true;
let pauseVisibleFlag=true;

function SceneManager() {


    this.CAMERA_POS=[100,120,100];


    //scene = new THREE.Scene();

    sceneSetup(scene);


    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    this.controls = new THREE.OrbitControls(camera.camera);
    this.controls.update();


    this.onResize=()=>{
        renderer.setSize(window.innerWidth, window.innerHeight);

        let aspectRatio=window.innerWidth/window.innerHeight;
        camera.camera.aspect = window.innerWidth / window.innerHeight;
        camera.camera.updateProjectionMatrix();


        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    this.onResize();
    // this.changeCamera = (camera) =>{
    //     TRACKBALL_CAMERA=false;
    //     this.camera = camera;
    //     this.onResize();
    //     renderer.render(scene, this.camera.camera);
    // };
    //
    // this.changeCamera(camera);
    //this.camera = camera;

this.controls.enabled=false;
    this.animate=()=>{
        // createEventAnimate();
        deltaTime=clock.getDelta();

        camera.animate(deltaTime);
        ball.animate(deltaTime);
        renderer.render(scene, camera.camera);
        // this.controls.update();

        requestAnimationFrame(this.animate);
    };


    clock = new THREE.Clock();
    clock.start();

    this.animate();



    //
    // this.setupTrackball = function () {
    //     cameratrackball = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    //     cameratrackball.position.set(100, 100, 100);
    //     cameratrackball.lookAt(scene.position);
    //
    //     control = new THREE.TrackballControls(cameratrackball, renderer.domElement);
    //     control.rotateSpeed = 3.0;
    //     control.zoomSpeed = 3.0;
    //     control.panSpeed = 3.0;
    //     control.addEventListener('change', trackballRender);
    //
    //     trackballAnimate();
    // };

    this.changeWireframe=()=>{
        ball.changeWireframe();
        board.changeWireframe();
        rubik.changeWireframe();
    };
    this.setBallRotation=()=>{
      ball.velocity_flag=!ball.velocity_flag;
    };

    //
    // function trackballAnimate() {
    //     requestAnimationFrame(trackballAnimate);
    //     control.update();
    // }
    //
    // function trackballRender() {
    //     if(TRACKBALL_CAMERA) {
    //         renderer.render(scene, cameratrackball);
    //     }
    // }

    // this.setupTrackball();

    this.reset=()=>{
        ball.reset();
        camera.reset();
        lights.reset();
    }
    this.freeze_time=()=>{
        if(freezeFlag){
            // cancelAnimationFrame( id );
            clock.stop();
            scene.children[4].children[1].visible = !scene.children[4].children[1].visible;
            renderer.render(scene, camera.camera);
            this.controls.enabled=false;
        }else {
            clock.start();
            scene.children[4].children[1].visible = !scene.children[4].children[1].visible;
            this.controls.enabled=true;
        }
        freezeFlag=!freezeFlag;

    }



    this.controls.enabled=true;
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

    rubik = new Rubik();
    scene.add(rubik);

    lights = new Lights();
    scene.add(lights);

    camera = new Camera();
    scene.add(camera);


}
