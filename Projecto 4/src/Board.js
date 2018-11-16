var Board = function () {
    GraphicalEntity.call(this);

    let board_geo = new THREE.BoxGeometry(100, 1, 100);

    board_geo.computeFaceNormals();
    board_geo.computeVertexNormals();

    let board_texture = new THREE.TextureLoader().load('./utils/Textures/chessboard.png');
    board_texture.wrapS = board_texture.wrapT = THREE.RepeatWrapping;
    board_texture.repeat.set(1, 1);

    let board_mats = [new THREE.MeshLambertMaterial( {map: board_texture, emissive: 0x2a2a2a, emissiveIntensity: .5,}), new THREE.MeshBasicMaterial( {map: board_texture})]
    let board_mesh = new THREE.Mesh(board_geo, board_mats[0]);

    this.add(board_mesh);

}
Board.prototype = Object.create(GraphicalEntity.prototype);