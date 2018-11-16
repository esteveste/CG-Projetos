'use strict';

var Board = function () {
    GraphicalEntity.call(this);

    let board_geo = new THREE.BoxGeometry(100, 1, 100);

    board_geo.computeFaceNormals();
    board_geo.computeVertexNormals();

    let board_texture = new THREE.TextureLoader().load('./src/utils/Textures/chessboard.png');
    board_texture.wrapS = board_texture.wrapT = THREE.RepeatWrapping;
    board_texture.repeat.set(1, 1);

    this.board_mats = [new THREE.MeshPhongMaterial( {map: board_texture,}), new THREE.MeshBasicMaterial( {map: board_texture})]
    let board_mesh = new THREE.Mesh(board_geo, this.board_mats[0]);


    this.add(board_mesh);

}
Board.prototype = Object.create(GraphicalEntity.prototype);