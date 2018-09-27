var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });



class GraphicalEntity extends Group{
	constructor(){
		this.material = material;
	}
}