//material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });


const lampTop_geo = [3, 7, 10, 32, 8, true];
const lampBase_geo = [5, 5, 0.5, 32, 8];
const lampPole_geo = [0.5, 0.5, 35];
const lampBulbDown_geo = [1, 0.5, 2];
const lampBulbUpper_geo = [0.6, 1, 2];


var Lamp = function () {
    GraphicalEntity.call(this);

    let material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });

    let ltgeo = new THREE.CylinderGeometry(...lampTop_geo);
    var lampTop = new THREE.Mesh(ltgeo, material);

    let lbgeo = new THREE.CylinderGeometry(...lampBase_geo);
    var lampBase = new THREE.Mesh(lbgeo, material);

    let lpgeo = new THREE.CylinderGeometry(...lampPole_geo);
    var lampPole = new THREE.Mesh(lpgeo, material);

    let lbdgeo = new THREE.CylinderGeometry(...lampBulbDown_geo);
    var lampBulbDown = new THREE.Mesh(lbdgeo, material);

    let lbugeo = new THREE.CylinderGeometry(...lampBulbUpper_geo);
    var lampBulbUpper = new THREE.Mesh(lbugeo, material);


    lampTop.position.set(0, 35, 0);
    lampBase.position.set(0, -3, 0);
    lampPole.position.set(0, 14.5, 0);
    lampBulbDown.position.set(0, 33, 0);
    lampBulbUpper.position.set(0, 35, 0);

    this.add(lampTop);
    this.add(lampBase);
    this.add(lampPole);
    this.add(lampBulbDown);
    this.add(lampBulbUpper);

    this.position.set(50, -14, 0);

};
Lamp.prototype = Object.create(GraphicalEntity.prototype);