'use strict';
//material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

var deltaTime, levelUpTime=0, collisionParameters=[];

let radius = 5;
let ball_geo = [radius, 25, 25];


var Ball = function () {
    GraphicalEntity.call(this);


    let ball_texture = new THREE.TextureLoader().load('./src/utils/Textures/ball13.jpg');
    // ball_texture.wrapS = ball_texture.wrapT = THREE.RepeatWrapping;
    // ball_texture.repeat.set(1, 1);



    this.material = [new THREE.MeshLambertMaterial( {map: ball_texture,
        emissive: 0x2a2a2a,
        emissiveIntensity: .5,}), new THREE.MeshBasicMaterial( {map: ball_texture})]

    let ballgeo = new THREE.SphereGeometry(ball_geo[0],ball_geo[1], ball_geo[2]);
    let ball = new THREE.Mesh(ballgeo, this.material[1]);
    // this.ball=ball;
    //
    // var faceVertexUvs = ballgeo.faceVertexUvs[ 0 ];
    // for ( let i = 0; i < faceVertexUvs.length; i ++ ) {
    //
    //     var uvs = faceVertexUvs[ i ];
    //     var face = ballgeo.faces[ i ];
    //
    //     for ( var j = 0; j < 3; j ++ ) {
    //
    //         uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
    //         uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;
    //
    //     }
    //
    // }

    this.position.y =0.5+radius/2;

    ball.position.z=20;

    // this.axes = new THREE.AxesHelper(10);
    // this.position.set(this.x, this.y ,this.z);

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

        this.rotateY(deltaTime);
        ball.rotateZ(-(20/radius)*deltaTime);
        // ball.applyMatrix(matrix);

    }


};


Ball.prototype = Object.create(GraphicalEntity.prototype);