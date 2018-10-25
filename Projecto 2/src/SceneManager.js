'use strict';

let chair, ball, arena, cameratrackball, control, clock,TRACKBALL_CAMERA=true;
let h_orig = window.innerHeight,w_orig=window.innerWidth,VIEW_SIZE=80;

var balls_positions = [];
var balls = [];

var colidiu =false;

var num_balls = 2;

var axes=false;



function SceneManager() {

    this.TOPVIEW=[0,100,0];
    this.FRONTVIEW=[0,50,100];
    this.SIDEVIEW=[100,0,0];
    this.CAMERA_POS = new THREE.Vector3(0, 40, 0);

    

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
        //createEventAnimate();
        balls.forEach(el=>{
            el.animate();
        })


        this.collisionAnimate();

        let ball_pos = balls[0].position.clone();
        let vv = balls[0].getVelocityVector();
        vv.normalize().multiplyScalar(-10);
        //console.log(vv);
        ball_pos.add(this.CAMERA_POS);
        ball_pos.add(vv);

        // console.log(ball_pos);
        //console.log(camerapos);
        this.camera3.position.set(ball_pos.x , ball_pos.y, ball_pos.z);
        this.camera3.lookAt(balls[0].position);
 


        requestAnimationFrame(this.animate);

        renderer.render(scene, this.camera);



    };

    this.collisionAnimate=()=>{
        for(let i=0; i<balls.length; i++){
            for(let j=i+1; j<balls.length; j++){
                if(checkBallCollision(balls[i].getPosition(), balls[j].getPosition(), balls[i].getRadius())){
                    //console.log("A");
                    //balls[i].saveOldPosition();
                    //balls[j].saveOldPosition();
                    console.log("sup")
                    let vel=balls[i].getVelocityVector().clone();
                    let pos=balls[i].getPosition().clone();
                    balls[i].setCollision(balls[j].getVelocityVector(), balls[j].getPosition());
                    balls[j].setCollision(vel, pos);
                }
            }
        }
    }

    clock = new THREE.Clock();
    clock.start();

    this.animate();
    // this.collisionAnimate();



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
        arena.changeWireframe();
        balls.forEach(el=>{
            el.changeWireframe();
        });

    };

    this.changeAxes=()=>{
        if(!axes){
            balls.forEach(el=>{
                el.showAxes();
            });
        }
        else{
            balls.forEach(el=>{
                el.hideAxes();
            });
        }
        axes = !axes;
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

function checkBallCollision(pos1, pos2, radius) {
    let dist = Math.sqrt(((pos1.z - pos2.z)**2) + ((pos1.x - pos2.x)**2));
    return radius*2 > dist;

}

/*function getBallIntersection(pos1, pos2, radius) {
    let dist = Math.sqrt(((pos1.z - pos2.z)**2) + ((pos1.x - pos2.x)**2));
    return ((radius*2) - dist)/2;
}*/


function sceneSetup(scene) {
    scene.add(new THREE.AxesHelper(10));
    arena = new Arena();
    scene.add(arena);

    var ball = new Ball();
    //var pos = ball.getPosition();
    balls.push(ball);
    //balls_positions.push(pos);  
    scene.add(ball);

    while(balls.length<num_balls){

        ball = new Ball();
        let pos = ball.getPosition();

        let tamanho = balls.length;

        let colidiu=false;

        for(let j = 0; j<tamanho; j++){

            if (checkBallCollision(pos, balls[j].getPosition(), ball.getRadius())){
                colidiu = true;
                break;
            }
        }
        if(!colidiu){
            balls.push(ball);
            //balls_positions.push(pos);
            scene.add(ball);
        }
    }    
}
