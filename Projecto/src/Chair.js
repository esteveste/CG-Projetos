'use strict';
//material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });


const wheelPosArray = [[-8, -13.5, -8], [8, -13.5, 8], [8, -13.5, -8], [-8, -13.5, 8]];
const wheelSuppPosArray = [[8, -7.5, 8, Math.PI / 4, Math.PI / 2], [-8, -7.5, 8, -Math.PI / 4, Math.PI / 2]];

let chairSeat_g = [16, 2, 16];
let chairBack_g = [16, 25, 2];
let chairPole_g = [0.75, 0.75, 12];
let chairWheelSupp_g = [0.75, 0.75, 22.7];
let chairWheel_g = [1.25, 0.75, 16, 10];

let chair_position = [0, 0, 35];

var rotateRight = false, rotateLeft = false, moveForward = false, moveBackward = false, accelRotLeft = 0.01,
    accelRotRight = 0.01, accelPosZ = 0.25, accelNegZ = 0.25;


var Chair = function () {
    GraphicalEntity.call(this);
    let csgeo = new THREE.BoxGeometry(chairSeat_g[0], chairSeat_g[1], chairSeat_g[2]);
    let chairSeat = new THREE.Mesh(csgeo, material);

    let cbgeo = new THREE.BoxGeometry(chairBack_g[0], chairBack_g[1], chairBack_g[2]);
    let chairBack = new THREE.Mesh(cbgeo, material);

    let cpgeo = new THREE.BoxGeometry(chairPole_g[0], chairPole_g[1], chairPole_g[2]);
    let chairPole = new THREE.Mesh(cpgeo, material);
    chairPole.rotateX(Math.PI / 2);

    this.chairBottomGroup = new THREE.Group();

    for (let i = 0; i < 2; i++) {
        let cwsgeo = new THREE.CylinderGeometry(chairWheelSupp_g[0], chairWheelSupp_g[1], chairWheelSupp_g[2]);
        var chairWheelSupp = new THREE.Mesh(cwsgeo, material);
        chairWheelSupp.position.set(wheelSuppPosArray[i][0], wheelSuppPosArray[i][1], wheelSuppPosArray[i][2]);
        chairWheelSupp.rotateX(wheelSuppPosArray[i][4]);
        chairWheelSupp.rotateZ(wheelSuppPosArray[i][3]);
        chairWheelSupp.position.set(0, -12, 0);
        this.chairBottomGroup.add(chairWheelSupp);

    }

    this.chairWheelArray=[];

    for (let i = 0; i < 4; i++) {
        let cwgeo = new THREE.TorusGeometry(chairWheel_g[0], chairWheel_g[1], chairWheel_g[2], chairWheel_g[3]);
        var chairWheel = new THREE.Mesh(cwgeo, material);
        chairWheel.position.set(wheelPosArray[i][0], wheelPosArray[i][1], wheelPosArray[i][2]);
        chairWheel.rotateY(Math.PI / 2);
        this.chairBottomGroup.add(chairWheel);
        this.chairWheelArray.push(chairWheel);
    }

    chairBack.position.set(0, 12, 7);
    chairPole.position.set(0, -6, 0);

    this.chairSitGroup = new THREE.Group();
    this.chairSitGroup.add(chairSeat);
    this.chairSitGroup.add(chairBack);

    this.add(this.chairSitGroup);
    this.chairBottomGroup.add(chairPole);
    this.add(this.chairBottomGroup);

    this.position.set(0, -2, 35);

    this.animate = () => {

        if (INPUT_LEFT) {
            this.chairSitGroup.rotation.y -= accelRotLeft;
            if (accelRotLeft < 0.10) {
                accelRotLeft += 0.01;
            }
        }

        if (accelRotLeft > 0 && !INPUT_LEFT) {
            accelRotLeft -= 0.01;
            this.chairSitGroup.rotation.y -= accelRotLeft;
        }

        if (INPUT_RIGHT) {
            this.chairSitGroup.rotation.y += accelRotRight;
            if (accelRotRight < 0.10)
                accelRotRight += 0.01;
        }

        if (accelRotRight > 0 && !INPUT_RIGHT) {
            accelRotRight -= 0.01;
            this.chairSitGroup.rotation.y += accelRotRight;
        }

        if (INPUT_UP) {
            console.log("up");
            let direction = new THREE.Vector3();
            this.chairSitGroup.getWorldDirection(direction);
            this.position.add(direction.multiplyScalar(-accelPosZ));
            if (accelPosZ < 1.7)
                accelPosZ += 0.05;
        }

        if (accelPosZ > 0 && !INPUT_UP) {
            console.log("!up");
            let direction = new THREE.Vector3();
            this.chairSitGroup.getWorldDirection(direction);
            this.position.add(direction.multiplyScalar(-accelPosZ));
            accelPosZ -= 0.05;
        }

        if (INPUT_DOWN) {
            console.log("down");
            let direction = new THREE.Vector3();
            this.chairSitGroup.getWorldDirection(direction);
            this.position.add(direction.multiplyScalar(accelNegZ));
            if (accelNegZ < 1.7)
                accelNegZ += 0.05;
        }

        if (accelNegZ > 0 && !INPUT_DOWN) {
            console.log("!down");
            accelNegZ -= 0.05;
            let direction = new THREE.Vector3();
            this.chairSitGroup.getWorldDirection(direction);
            this.position.add(direction.multiplyScalar(accelNegZ));
        }

        //wheel rotation
        if(accelPosZ > 0 || accelNegZ > 0){
            this.chairWheelArray.forEach((el)=>{
               el.rotation.y = 0.9*(el.rotation.y )+ 0.1* ((this.chairSitGroup.rotation.y+Math.PI/2) - this.chairBottomGroup.rotation.y );
            });
        }

        //metal bar rotation
        if(accelPosZ > 0 || accelNegZ > 0){
            this.chairBottomGroup.rotation.y = 0.97*this.chairBottomGroup.rotation.y + 0.03* (this.chairSitGroup.rotation.y%(Math.PI/2));
        }
    };

    window.addEventListener('animate', this.animate);


};


Chair.prototype = Object.create(GraphicalEntity.prototype);
