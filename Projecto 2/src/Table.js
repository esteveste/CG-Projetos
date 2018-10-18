//material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});

var depth = 30

var arenabase_geo = [depth*2, 1,depth];
var arenalat1_geo = [depth*2, 40, 1];
var arenalat2_geo = [1, 40, depth];

var arenaLat1PosArray = [[0, 0, 0],[0, 0, 0]]
var arenaLat2PosArray = [[0, 0, 0],[0, 0, 0]]


var Arena = function () {
    GraphicalEntity.call(this);

    let material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });

    let arenaBaseGeo = new THREE.BoxGeometry(arenabase_geo[0], arenabase_geo[1], arenabase_geo[2]);
    let arenaLat1Geo = new THREE.BoxGeometry(arenalat1_geo[0], arenalat1_geo[1], arenalat1_geo[2]);
    let arenaLat2Geo = new THREE.BoxGeometry(arenalat2_geo[0], arenalat2_geo[1], arenalat2_geo[2]);

    let arenaBase = new THREE.Mesh(arenaBaseGeo, material);

    this.add(arenaBase);


    for (let i = 0; i < 2; i++) {
        let arenaLat1 = new THREE.Mesh(arenaLat1Geo, material);
        arenaLat1.position.set(arenaLat1PosArray[i][0], arenaLat1PosArray[i][1], arenaLat1PosArray[i][2]);
        this.add(arenaLat1);
    }

    for (let i = 0; i < 2; i++) {
        let arenaLat2 = new THREE.Mesh(arenaLat2Geo, material);
        arenaLat2.position.set(arenaLat2PosArray[i][0], arenaLat2PosArray[i][1], arenaLat2PosArray[i][2]);
        this.add(arenaLat2);
    }

        



};
Table.prototype = Object.create(GraphicalEntity.prototype);