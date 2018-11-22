'use strict';

var Board = function () {
    GraphicalEntity.call(this);
    
    this.setBasicFlag = true;
    let board_geo = new THREE.BoxGeometry(100, 1, 100);

    //board_geo.computeFaceNormals();
    //board_geo.computeVertexNormals();

    let board_texture = new THREE.TextureLoader().load('./src/utils/Textures/chessboard.png');
    //board_texture.wrapS = board_texture.wrapT = THREE.RepeatWrapping;
    //board_texture.repeat.set(1, 1);

    this.material = [new THREE.MeshPhongMaterial( {map: board_texture,}), new THREE.MeshBasicMaterial( {map: board_texture})]
    let board_mesh = new THREE.Mesh(board_geo, this.material[0]);


    this.add(board_mesh);

}
Board.prototype = Object.create(GraphicalEntity.prototype);

Board.prototype.setBasic=function(){
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