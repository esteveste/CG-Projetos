'use strict';
//material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

var deltaTime, levelUpTime=0, collisionParameters=[];
var depth = 30;
var width = depth*2;
var height = 0.1*(Math.sqrt((width**2)+(depth**2)));
var radius = height/2;
var y = height/2 + 0.5;

let ball_geo = [radius, 10, 10];


var Ball = function () {
    GraphicalEntity.call(this);

    let material = new THREE.MeshBasicMaterial({ color: Math.random()*0xFFFFFF<<0, wireframe: true });

    let ballgeo = new THREE.SphereGeometry(ball_geo[0],ball_geo[1], ball_geo[2]);
    let ball = new THREE.Mesh(ballgeo, material);
    this.ball=ball;

    this.x = Math.random() * ((width/2)-radius-0.5 - (-width/2 + radius+0.5)) + (-width/2 + radius+0.5);
    this.z = Math.random() * ((depth/2)-radius-0.5 - (-depth/2 + radius+0.5)) + (-depth/2 + radius+0.5);
    this.y = y;

    this.axes = new THREE.AxesHelper(10);
    this.position.set(this.x, this.y ,this.z);

    let velocity = Math.random()*2;
    let accel = Math.random()*0.0001;
    let vectorVelocity=new THREE.Vector3(Math.random(),0,Math.random());

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

        let vv = new THREE.Vector3(this.position.x - ballCollPos.x, this.position.y - ballCollPos.y, this.position.z - ballCollPos.z);

        let norm =vv.length()**2;
        let v1v2 = vectorVelocity.clone().sub(ballCollVel);
        let dot=v1v2.clone().dot(vv);
        let fraq=dot/norm;
        let mul=vv.clone().multiplyScalar(fraq);
        vectorVelocity.sub(mul);

        let diff_vect=vv.clone().setLength(2*ball_geo[0]-vv.length());
        this.position.add(diff_vect);

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

        if ((this.position.x >= arenaLat2PosArray[1][0] - radius - arenalat2_geo[0]/2 && vectorVelocity.x>0) || ( this.position.x <= arenaLat2PosArray[0][0] + radius + arenalat2_geo[0]/2 && vectorVelocity.x<0))
            vectorVelocity.x *= -1;
        if ((this.position.z >= arenaLat1PosArray[0][2] - radius - arenalat1_geo[2]/2 && vectorVelocity.z>0)|| (this.position.z <= arenaLat1PosArray[1][2] + radius + arenalat1_geo[2]/2 && vectorVelocity.z<0))
            vectorVelocity.z *= -1;


        this.position.add(vectorVelocity);
        let rotate_axis=vectorVelocity.clone().cross(new THREE.Vector3(0,1,0));
        let matrix = new THREE.Matrix4();
        matrix.makeRotationAxis(rotate_axis.normalize(),vectorVelocity.length()/ball_geo[0])

        ball.applyMatrix(matrix);

    }


};


Ball.prototype = Object.create(GraphicalEntity.prototype);
