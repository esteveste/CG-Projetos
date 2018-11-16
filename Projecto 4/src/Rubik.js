'use strict';

let side=10;

var Rubik = function () {
    GraphicalEntity.call(this);

    let board_geo = new THREE.BoxGeometry(side,side,side);

    board_geo.computeFaceNormals();
    board_geo.computeVertexNormals();

    let rubik_texture = new THREE.TextureLoader().load('./src/utils/Textures/rubik.png');
    let rubik_bump = new THREE.ImageUtils.loadTexture('./src/utils/Textures/face1.jpg');
    // rubik_texture.wrapS = rubik_texture.wrapT = THREE.RepeatWrapping;
    // rubik_texture.repeat.set(1, 1);

    // this.rubik_mats = [new THREE.MeshLambertMaterial( {map: rubik_texture, emissive: 0x2a2a2a, emissiveIntensity: .5,}), new THREE.MeshBasicMaterial( {map: rubik_texture})]
    
    let material_basic=[];
    for ( var i = 1; i <= 6; i ++ ) {
        material_basic.push( new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( './src/utils/Textures/face' + i + '.jpg'), overdraw: true,bumpMap:rubik_bump,bumpScale:1 } ) );
    }
    let material_phong=[];
    for ( var i = 1; i <= 6; i ++ ) {
        material_phong.push( new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture( './src/utils/Textures/face' + i + '.jpg'), overdraw: true ,bumpMap:rubik_bump,bumpScale:1 } ) );
    }
    this.rubik_mats=[material_phong,material_basic];


    let board_mesh = new THREE.Mesh(board_geo, this.rubik_mats[0]);


    this.add(board_mesh);

    this.position.y=side/2+0.5;

}
Rubik.prototype = Object.create(GraphicalEntity.prototype);