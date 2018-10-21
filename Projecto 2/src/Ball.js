'use strict';
//material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

var deltaTime, levelUpTime=0, collisionParameters=[];
var depth = 30;
var width = depth*2;
var height = 0.1*(Math.sqrt((width**2)+(depth**2)));
var radius = height/2;
var y = height/2 + 0.5;

let ball_geo = [radius, 32, 32];

/*var deltaTime, rotateRight = false, rotateLeft = false, moveForward = false, moveBackward = false,
    accelRotLeft = 0.05,accelRotRight = 0.05, accelPosZ = 0.15, accelNegZ = 0.15,
    vleft=0, vright=0, vforward=0, vbackward=0;*/


var Ball = function () {
    GraphicalEntity.call(this);

    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    let ballgeo = new THREE.SphereGeometry(ball_geo[0],ball_geo[1], ball_geo[2]);
    let ball = new THREE.Mesh(ballgeo, material);

    this.x = Math.random() * ((width/2)-radius-0.5 - (-width/2 + radius+0.5)) + (-width/2 + radius+0.5);
    this.z = Math.random() * ((depth/2)-radius-0.5 - (-depth/2 + radius+0.5)) + (-depth/2 + radius+0.5);
    this.y = y;

    //Math.random() * (max - min) + min;

    ball.position.set(this.x, this.y ,this.z);
    ball.rotation.y = Math.random()*360;
    let velocity = Math.random()*5;
    let accel = Math.random()*0.1;
    let vectorVelocity=new THREE.Vector3()
    ball.getWorldDirection(vectorVelocity);
    this.add(ball);


    this.getPosition=function (){
        return ball.position;
    }

    this.setPosition=function (x1, z1){
        ball.position.set(x1, this.y, z1);
    }

    this.getRadius=function(){
        return radius;
    }

    this.getVelocityVector=function(){
        return vectorVelocity;
    }

    this.setCollision=function(ballCollVel, ballCollPos){
        let v1minusv2 = vectorVelocity.add(ballCollVel.multiplyScalar(-1));
        let c1minusc2 = new THREE.Vector3(ball.position.x - ballCollPos.x,ball.position.y - ballCollPos.y,ball.position.z - ballCollPos.z);
        let c1c2norm = Math.sqrt((ball.position.x - ballCollPos.x)**2 + (ball.position.y - ballCollPos.y)**2 + (ball.position.z - ballCollPos.z)**2)**2;
        let calc1 = v1minusv2.dot(c1minusc2);
        vectorVelocity = c1minusc2.multiplyScalar((calc1/c1c2norm));
        console.log(c1minusc2);
    }
  
    this.animate=function(){
        deltaTime=clock.getDelta();
        levelUpTime+=deltaTime;
        if (levelUpTime >= 5)
            velocity+=levelUpTime*accel;
        if (ball.position.x >= 30 || ball.position.x <= -30 || ball.position.z >= 15 || ball.position.z <= -15)
            vectorVelocity.multiplyScalar(-1);
        ball.position.add(vectorVelocity);
        //console.log(ball.position);
    }

    window.addEventListener('animate', this.animate);
};


Ball.prototype = Object.create(GraphicalEntity.prototype);
