//material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});


var legPosArray = [[-26, -9, -8], [-26, -9, 8],
    [26, -9, 8], [26, -9, -8]];

var tableTop_geo = [60, 2, 20];
var tableLeg_geo = [2, 2, 16];


var Table = function () {
    GraphicalEntity.call(this);
    let ttgeo = new THREE.BoxGeometry(tableTop_geo[0], tableTop_geo[1], tableTop_geo[2]);
    let tableTop = new THREE.Mesh(ttgeo, material);


    for (let i = 0; i < 4; i++) {
        let tlgeo = new THREE.CylinderGeometry(tableLeg_geo[0], tableLeg_geo[1], tableLeg_geo[2]);
        let tableLeg = new THREE.Mesh(tlgeo, material);
        tableLeg.position.set(legPosArray[i][0], legPosArray[i][1], legPosArray[i][2]);
        this.add(tableLeg);
    }

    this.add(tableTop);

};
Table.prototype = Object.create(GraphicalEntity.prototype);