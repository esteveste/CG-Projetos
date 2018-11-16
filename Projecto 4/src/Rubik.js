'use strict';

let side=10;

var Rubik = function () {
    GraphicalEntity.call(this);

    this.setBasicFlag=true;

    let rubik_geo = new THREE.BoxGeometry(side,side,side);

    rubik_geo.computeFaceNormals();
    rubik_geo.computeVertexNormals();

    let rubik_texture = new THREE.TextureLoader().load('./src/utils/Textures/rubik.png');
    let rubik_bump = new THREE.ImageUtils.loadTexture('./src/utils/Textures/face1.jpg');
    // rubik_texture.wrapS = rubik_texture.wrapT = THREE.RepeatWrapping;
    // rubik_texture.repeat.set(1, 1);

    // this.rubik_mats = [new THREE.MeshLambertMaterial( {map: rubik_texture, emissive: 0x2a2a2a, emissiveIntensity: .5,}), new THREE.MeshBasicMaterial( {map: rubik_texture})]
    
    let material_basic=[];
    for ( var i = 1; i <= 6; i ++ ) {
        material_basic.push( new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( './src/utils/Textures/face' + i + '.jpg'), overdraw: true, bumpMap:rubik_bump,bumpScale:1 } ) );
    }
    let material_phong=[];
    for ( var i = 1; i <= 6; i ++ ) {
        material_phong.push( new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture( './src/utils/Textures/face' + i + '.jpg'), overdraw: true , bumpMap:rubik_bump,bumpScale:1 } ) );
    }
    this.material=[material_phong,material_basic];


    let rubik_mesh = new THREE.Mesh(rubik_geo, this.material[0]);


    this.add(rubik_mesh);

    this.position.y=side/2+0.5;

}
Rubik.prototype = Object.create(GraphicalEntity.prototype);

Rubik.prototype.changeWireframe=function(){
    for (let i=0; i<this.children[0].material.length; i++ ){
        for (let j=0; j< 6; j++){
            this.material[0][j].wireframe = this.materialWireframe;
            this.material[1][j].wireframe = this.materialWireframe;
        }
        this.children[0].material[i].wireframe = this.materialWireframe;
    }
    this.materialWireframe = !this.materialWireframe;
}


Rubik.prototype.setBasic=function(){
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