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
    
    this.velocity=0;
    this.velocity_flag=true;


    this.material = [new THREE.MeshPhongMaterial( {map: ball_texture,specular:0x999999,shininess:100
    }), new THREE.MeshBasicMaterial( {map: ball_texture})]

    let ballgeo = new THREE.SphereGeometry(ball_geo[0],ball_geo[1], ball_geo[2]);
    let ball = new THREE.Mesh(ballgeo, this.material[0]);
    this.ball=ball;
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

    // let accel = Math.random()*0.0001;
    // let vectorVelocity=new THREE.Vector3(Math.random(),0,Math.random());
    //
    // vectorVelocity.multiplyScalar(0.2);

    // ball.add(this.axes);
    this.add(ball);

    this.animate=()=>{
        deltaTime=clock.getDelta();
        
        if(this.velocity_flag && this.velocity<1){
            this.velocity+=deltaTime;
        }else if(this.velocity_flag) this.velocity=1;
        if(!this.velocity_flag & this.velocity>0){
            this.velocity-=deltaTime;
        }else if(!this.velocity_flag) this.velocity=0;
        
        let ball_velocity=deltaTime*this.velocity;
        this.rotateY(ball_velocity);
        ball.rotateZ(-(20/radius)*ball_velocity);
        // ball.applyMatrix(matrix);

    }


};


Ball.prototype = Object.create(GraphicalEntity.prototype);
Ball.prototype.reset=function () {
    this.velocity_flag=true;
    this.velocity=0;
    this.rotation.y=0;
    this.ball.rotation.z=0;

}