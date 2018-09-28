//material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });


const lampTop_geo = [3, 7, 10, 32, 8, true];
const lampBase_geo = [5, 5, 0.5, 32, 8];
const lampPole_geo = [0.5, 0.5, 10.5];
const lampBulbDown_geo = [1, 0.5, 2];
const lampBulbUpper_geo = [1, 10, 10,0,2*Math.PI,0,Math.PI/2];



class Lamp extends GraphicalEntity{

	constructor(){
        super();
        var lampTop = new THREE.Mesh(lampTop_geo, material);
		var lampBase = new THREE.Mesh(lampBase_geo, material);
		var lampPole = new THREE.Mesh(lampPole_geo, material);
		var lampBulbDown = new THREE.Mesh(lampBulbDown_geo, material);
		var lampBulbUpper = new THREE.Mesh(lampBulbUpper_geo, material);

		lampTop.position.set(0, 10, 0);
		lampBase.position.set(0, -3, 0);
		lampPole.position.set(0, 2.5, 0);
		lampBulbDown.position.set(0, 8.75, 0);
		lampBulbUpper.position.set(0, 9.75, 0);

		this.add(lampTop);
		this.add(lampBase);
		this.add(lampPole);
		this.add(lampBulbDown);
		this.add(lampBulbUpper);

		this.position.set(50, 0, 0);

	}
}