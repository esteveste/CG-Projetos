'use strict';
//material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

var deltaTime, levelUpTime=0, collisionParameters=[];
var depth = 30;
var width = depth*2;
var height = 0.1*(Math.sqrt((width**2)+(depth**2)));
var radius = height/2;
var y = height/2 + 0.5;

let ball_geo = [radius, 10, 5];

//var axes = new THREE.AxesHelper(10);

/*var deltaTime, rotateRight = false, rotateLeft = false, moveForward = false, moveBackward = false,
    accelRotLeft = 0.05,accelRotRight = 0.05, accelPosZ = 0.15, accelNegZ = 0.15,
    vleft=0, vright=0, vforward=0, vbackward=0;*/


var Ball = function () {
    GraphicalEntity.call(this);

    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    let ballgeo = new THREE.SphereGeometry(ball_geo[0],ball_geo[1], ball_geo[2]);
    let ball = new THREE.Mesh(ballgeo, material);
    this.ball=ball;

    this.x = Math.random() * ((width/2)-radius-0.5 - (-width/2 + radius+0.5)) + (-width/2 + radius+0.5);
    this.z = Math.random() * ((depth/2)-radius-0.5 - (-depth/2 + radius+0.5)) + (-depth/2 + radius+0.5);
    this.y = y;

    this.axes = new THREE.AxesHelper(10);    

    //Math.random() * (max - min) + min;

    this.position.set(this.x, this.y ,this.z);
    this.old_position = this.position;

    // ball.rotateY(Math.random()*360);
    // ball.rotateX(Math.random()*360);
    let velocity = Math.random()*2;
    let accel = Math.random()*0.0001;
    let vectorVelocity=new THREE.Vector3(Math.random(),0,Math.random());

    // ball.getWorldDirection(vectorVelocity);
    vectorVelocity.multiplyScalar(0.2);

    ball.add(this.axes);
    this.add(ball);
    



    this.getPosition=function (){
        return this.position;
    }

    this.setPosition=function (x1, z1){
        this.position.set(x1, this.y, z1);
    }

    this.getRadius=function(){
        return radius;
    }

    this.getVelocityVector=function(){
        return vectorVelocity.clone();
    }

    this.saveOldPosition=function(){
        this.old_position = this.position;
    }

    this.showAxes=function(){
        ball.add(this.axes);
    }

    this.hideAxes=function(){
        ball.remove(this.axes);
    }




    this.setCollision=(ballCollVel, ballCollPos)=>{


        /*//let l  = vectorVelocity.length();
        vectorVelocity=ballCollVel.clone();
        this.position.set(this.old_position.x, this.old_position.y, this.old_position.z);
        //vectorVelocity.normalize();
        //vectorVelocity.multiplyScalar(l);*/


        let l = vectorVelocity.length();
        let vv = new THREE.Vector3(this.position.x - ballCollPos.x, this.position.y - ballCollPos.y, this.position.z - ballCollPos.z);
        vv.add(ballCollVel);
        vv.normalize();
        vv.multiplyScalar(l);
        vectorVelocity = vv.clone();

    }
  
    this.animate=()=>{
        deltaTime=clock.getDelta();
        levelUpTime+=deltaTime;
        if (levelUpTime >= 0.5){
            let norm = vectorVelocity.clone().length();
            vectorVelocity.normalize();
            norm += accel;
            vectorVelocity.multiplyScalar(norm);
        }

        if ((this.position.x >= 30 - radius - 0.5 && vectorVelocity.x>0) || ( this.position.x <= -30 + radius + 0.5 && vectorVelocity.x<0))
            vectorVelocity.x *= -1;
        if ((this.position.z >= 15 - radius - 0.5 && vectorVelocity.z>0)|| (this.position.z <= -15 + radius + 0.5 && vectorVelocity.z<0))
            vectorVelocity.z *= -1;
        //console.log("ball: ",ball.position);
        this.old_position = this.position.clone();
        //console.log("old: ",old_position);
        //console.log("");
        // console.log(vectorVelocity);
        this.position.add(vectorVelocity);
        let rotate_axis=vectorVelocity.clone().cross(new THREE.Vector3(0,1,0));
        let matrix = new THREE.Matrix4();
        matrix.makeRotationAxis(rotate_axis.normalize(),vectorVelocity.length()/ball_geo[0])
        // console.log(rotate_axis.normalize());
        ball.applyMatrix(matrix);
        // ball.rot2ateOnWorldAxis(rotate_axis.normalize(),0.05)
        // let rot=vectorVelocity.clone().divideScalar(ball_geo[0]);
        // console.log(ball.rotation)
        // console.log(rot)
        // ball.rotateOnAxis(rot);
        // ball.rotation.x-=rot.x;
        // ball.rotateZ((vectorVelocity.z)/ball_geo[0]);
        // ball.rotateX((vectorVelocity.x)/ball_geo[0]);
        // ball.rotation.z-=rot.z;
        // ball.rotateAround()

        // console.log("new"+ball.position.x);
    }

    //window.addEventListener('animate', this.animate);
};


Ball.prototype = Object.create(GraphicalEntity.prototype);
