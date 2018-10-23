'use strict';
//material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

var deltaTime, levelUpTime=0, collisionParameters=[];
var depth = 30;
var width = depth*2;
var height = 0.1*(Math.sqrt((width**2)+(depth**2)));
var radius = height/2;
var y = height/2 + 0.5;

let ball_geo = [radius, 10, 5];

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

    this.position.set(this.x, this.y ,this.z);
    this.old_position = this.position;

    ball.rotateY(Math.random()*360);
    let velocity = Math.random()*2;
    let accel = Math.random()*0.1;
    let vectorVelocity=new THREE.Vector3();

    ball.getWorldDirection(vectorVelocity);
    vectorVelocity.multiplyScalar(0.1);
    this.add(ball);
    ball.add(new THREE.AxesHelper(10))


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
        return vectorVelocity;
    }

    this.saveOldPosition=function(){
        this.old_position = this.position;
    }

    this.setCollision=(ballCollVel, ballCollPos)=>{

        // let direction =new THREE.Vector3(ball.position.x - ballCollPos.x,ball.position.y - ballCollPos.y,ball.position.z - ballCollPos.z);
        // let vel=ballCollVel.clone().add(vectorVelocity.clone().multiplyScalar(-1));
        // // let dotProd = vel.clone();
        // let d=vel.dot(direction);
        // // console.log(d);
        // if(d<=0){
        //     console.log("sai");
        //     return;
        // }

        //ball.position.set(this.old_position.x, this.old_position.y, this.old_position.z);

        let vectorVelocityTemp = vectorVelocity.clone();
        let v1minusv2 = vectorVelocityTemp.add(ballCollVel.multiplyScalar(-1));
        let c1minusc2 = new THREE.Vector3(ball.position.x - ballCollPos.x,ball.position.y - ballCollPos.y,ball.position.z - ballCollPos.z);
        let c1c2norm = (c1minusc2.length())**2;
        let calc1 = v1minusv2.dot(c1minusc2);
        let calcfinal = c1minusc2.multiplyScalar((calc1/c1c2norm));
        vectorVelocity=vectorVelocity.add(calcfinal.multiplyScalar(-1));
        vectorVelocity.y=0;
        console.log("vel",vectorVelocity);
        // var ang = Math.atan2(-ballCollPos.x + ball.position.x,-ballCollPos.z + ball.position.z);
        //
        // let d1 = Math.atan2(vectorVelocity.z, vectorVelocity.x); //ball 1 direction in angles
        // let d2 = Math.atan2(ballCollVel.z, ballCollVel.x); //ball 2 direction in angles
        //
        // var v1 = vectorVelocity.length();
        // var v2 = ballCollVel.clone().length();
        //
        // let v1_lx=v2*Math.cos(d2-ang)*Math.cos(ang) + v1*Math.sin(d1-ang)*Math.sin(ang);
        // let v1_lz=v2*Math.cos(d2-ang)*Math.sin(ang) + v1*Math.sin(d1-ang)*Math.cos(ang);
        // vectorVelocity=new THREE.Vector3(-v1_lx,0,-v1_lz);

        //  direction =new THREE.Vector3(ball.position.x - ballCollPos.x,ball.position.y - ballCollPos.y,ball.position.z - ballCollPos.z);
        // vel=ballCollVel.clone().add(vectorVelocity.multiplyScalar(-1));
        // // let dotProd = vel.clone();
        //  d=vel.dot(direction);
        // // console.log(d);
        // if(d<=0){
        //     console.log("A velocidade esta mal")
        // }


        // vectorVelocity=new THREE.Vector3(ball.position.x - ballCollPos.x,ball.position.y - ballCollPos.y,ball.position.z - ballCollPos.z);
        // vectorVelocity=calcfinal.multiplyScalar(1);
        // console.log("old:"+this.old_position.x)
        //
        //
        //

        this.position.set(this.old_position.x, this.old_position.y, this.old_position.z);
        // this.position.add(vectorVelocity);
        // ball.position.add(vectorVelocity);
    }
  
    this.animate=()=>{
        deltaTime=clock.getDelta();
        levelUpTime+=deltaTime;
        if (levelUpTime >= 5)
            velocity+=levelUpTime*accel;
        if ((this.position.x >= 30 - radius - 0.5 && vectorVelocity.x>0) || ( this.position.x <= -30 + radius + 0.5 && vectorVelocity.x<0))
            vectorVelocity.x *= -1;
        if ((this.position.z >= 15 - radius - 0.5 && vectorVelocity.z>0)|| (this.position.z <= -15 + radius + 0.5 && vectorVelocity.z<0))
            vectorVelocity.z *= -1;
        //console.log("ball: ",ball.position);
        this.old_position = this.position.clone();
        //console.log("old: ",old_position);
        //console.log("");
        this.position.add(vectorVelocity);
        let rotate_axis=vectorVelocity.clone().cross(new THREE.Vector3(0,1,0));
        let matrix = new THREE.Matrix4();
        matrix.makeRotationAxis(rotate_axis.normalize(),vectorVelocity.length()/ball_geo[0])
        // console.log(rotate_axis.normalize());
        // console.log(matrix);
        ball.applyMatrix(matrix);
        // ball.rotateOnWorldAxis(rotate_axis.normalize(),0.05)
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
