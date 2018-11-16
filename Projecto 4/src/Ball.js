'use strict';
//material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

var deltaTime, levelUpTime=0, collisionParameters=[];

let radius = 5;
let ball_geo = [radius, 10, 10];


var Ball = function () {
    GraphicalEntity.call(this);

    this.material = [new THREE.MeshLambertMaterial( {//map: board_texture,
        emissive: 0x2a2a2a,
        emissiveIntensity: .5,}), //new THREE.MeshBasicMaterial( {map: board_texture})
    ]

    let ballgeo = new THREE.SphereGeometry(ball_geo[0],ball_geo[1], ball_geo[2]);
    let ball = new THREE.Mesh(ballgeo, this.material);
    // this.ball=ball;

    this.x =0;
    this.z =0;
    this.y =0.5+radius/2;

    ball.position.z=20;

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

    this.showAxes=function(){
        ball.add(this.axes);
    }

    this.hideAxes=function(){
        ball.remove(this.axes);
    }
    this.animate=()=>{
        deltaTime=clock.getDelta();

        this.rotateY(1);
        // ball.applyMatrix(matrix);

    }


};


Ball.prototype = Object.create(GraphicalEntity.prototype);