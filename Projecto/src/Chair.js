material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });


const wheelPosArray = [[-8, -13.5, -8], [8, -13.5, 8], [8, -13.5, -8], [-8, -13.5, 8]];
const wheelSuppPosArray = [[8, -7.5, 8, Math.PI/4, Math.PI/2], [-8, -7.5, 8, -Math.PI/4, Math.PI/2]];

chairSeat_g = [16, 2, 16];
chairBack_g = [16, 25, 2];
chairPole_g = [0.75, 0.75, 12];
chairWheelSupp_g = [0.75, 0.75, 22.7];
chairWheel_g = [1.25, 0.75, 16, 10];

chair_position = [0, 0, 35];


class Chair extends GraphicalEntity{

	constructor(){


		csgeo = new THREE.BoxGeometry(chairSeat_g[0],chairSeat_g[1],chairSeat_g[2]);
		chairSeat = new THREE.Mesh(csgeo, material);

		cbgeo = new THREE.BoxGeometry(chairBack_g[0],chairBack_g[1],chairBack_g[2]);
		chairBack = new THREE.Mesh(cbgeo, material);

		cpgeo = new THREE.BoxGeometry(chairPole_g[0],chairPole_g[1],chairPole_g[2]);
		chairPole = new THREE.Mesh(cpgeo, material);

		for(let i=0; i<2; i++){
    		cwsgeo = new THREE.CylinderGeometry(chairWheelSupp_g[0],chairWheelSupp_g[1],chairWheelSupp_g[2]);
    		chairWheelSupp = new THREE.Mesh(cwsgeo, material);
    		chairWheelSupp.position.set(wheelSuppPosArray[i][0], wheelSuppPosArray[i][1], wheelSuppPosArray[i][2]);
    		chairWheelSupp.rotateX(wheelSuppPosArray[i][4]);
    		chairWheelSupp.rotateZ(wheelSuppPosArray[i][3]);
    		chairWheelSupp.position.set(0, -12, 0);
    		
    	}
    	for(let i=0; i<4; i++){
    		cwgeo = new THREE.TorusGeometry(chairWheel_g[0], chairWheel_g[1], chairWheel_g[2], chairWheel_g[3]);
    		chairWheel = new THREE.Mesh(cwgeo, material);
    		chairWheel.position.set(wheelPosArray[i][0], wheelPosArray[i][1], wheelPosArray[i][2]);
    		chairWheel.rotateY(Math.PI/2);
    	}

    	chairBack.position.set(0, 12, 7);
    	chairPole.position.set(0, -6, 0);

    	this.add(chairSeat);
    	this.add(chairBack);
    	this.add(chairPole);
    	this.add(chairWheelSupp);
    	this.add(chairWheel);

    	this.position.set(0, 0, 35);

	}
}


