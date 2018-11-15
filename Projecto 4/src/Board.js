var Board = function () {
    GraphicalEntity.call(this);

    let board_geo = new THREE.BoxGeometry(100, 1, 100);
    let board_texture = new THREE.TextureLoader().load('./src/utils/Textures/chessboard.png');
    let board_mat = new THREE.MeshLambertMaterial( {map: board_texture});
    let board_mesh = new THREE.Mesh(board_geo, board_mat);

    this.add(board_mesh);

}
Board.prototype = Object.create(GraphicalEntity.prototype);