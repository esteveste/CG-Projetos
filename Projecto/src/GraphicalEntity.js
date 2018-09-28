var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });



class GraphicalEntity extends THREE.Group{
	constructor(){
        super();
        this.material = material;
	}
}