'use strict';
//material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

var deltaTime, levelUpTime=0, collisionParameters=[];

let radius = 5;
let ball_geo = [radius, 25, 25];

var Ball = function () {
    GraphicalEntity.call(this);

    let ball_texture = new THREE.TextureLoader().load('./src/utils/Textures/ball13.jpg');
    
    this.setBasicFlag = true;
    this.velocity=0;
    this.velocity_flag=true;


    this.material = [new THREE.MeshPhongMaterial( {map: ball_texture,specular:0x999999,shininess:100
    }), new THREE.MeshBasicMaterial( {map: ball_texture})]

    let ballgeo = new THREE.SphereGeometry(ball_geo[0],ball_geo[1], ball_geo[2]);
    let ball = new THREE.Mesh(ballgeo, this.material[0]);
    this.ball=ball;

    this.position.y =0.5+radius;

    ball.position.z=20;

    this.add(ball);

    this.animate=(deltaTime)=>{

        
        if(this.velocity_flag && this.velocity<1){
            this.velocity+=deltaTime;
        }else if(this.velocity_flag) this.velocity=1;
        if(!this.velocity_flag && this.velocity>0){
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

Ball.prototype.setBasic=function(){
    if (this.setBasicFlag) {
        this.traverse((child)=> {
            if (child instanceof THREE.Mesh){
                    child.material = this.material[1]}
        });

        this.setBasicFlag=!this.setBasicFlag;
    }else {
        //set to previous material
        this.traverse((child)=> {
            if (child instanceof THREE.Mesh){
                    child.material = this.material[0]}
        });
        this.setBasicFlag=true;
    }
};