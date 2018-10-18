'use strict';
//material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

var depth = 30;
var width = depth*2;
var height = 0.1*(Math.sqrt((width**2)+(depth**2)));
var radius = height/2;
var y = height/2 + 0.5;

let ball_geo = [radius, 32, 32];

var deltaTime, rotateRight = false, rotateLeft = false, moveForward = false, moveBackward = false,
    accelRotLeft = 0.05,accelRotRight = 0.05, accelPosZ = 0.15, accelNegZ = 0.15,
    vleft=0, vright=0, vforward=0, vbackward=0;


var Ball = function () {
    GraphicalEntity.call(this);

    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    let ballgeo = new THREE.SphereGeometry(ball_geo[0],ball_geo[1], ball_geo[2]);
    let ball = new THREE.Mesh(ballgeo, material);

    var x = Math.random() * ((width/2)-radius-0.5 - (-width/2 + radius+0.5)) + (-width/2 + radius+0.5);
    var z = Math.random() * ((depth/2)-radius-0.5 - (-depth/2 + radius+0.5)) + (-depth/2 + radius+0.5);

    //Math.random() * (max - min) + min;

    ball.position.set(x, y ,z);

    this.add(ball);


    this.getPosition=function (){
        return (x, y, z)
    }

    this.setPosition=function (x1, y1, z1){
        x = x1;
        y = y1;
        z = z1;
    }
  

};


Ball.prototype = Object.create(GraphicalEntity.prototype);
