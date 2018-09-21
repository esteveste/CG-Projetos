// var THREE = require('three');
var scene = new THREE.Scene();
scene.add(new THREE.AxesHelper(10));
var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.x = 50;
camera.position.y = 0;
camera.position.z = 50;
camera.lookAt(scene.position);

var renderer = new THREE.WebGLRenderer({ antialias: true });

var tableGroup = new THREE.Group();
var legPosArray = [[-26, -3, -8], [-26, -3, 8], 
                   [26, -3, 8], [26, -3, -8]];

var geometry = new THREE.BoxGeometry(60, 2, 20);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
var tableTop = new THREE.Mesh(geometry, material);

for(var i = 0; i<4; i++){
    geometry = new THREE.CylinderGeometry(2, 2, 6);
    var tableLeg = new THREE.Mesh(geometry, material);
    tableLeg.position.set(legPosArray[i][0], legPosArray[i][1], legPosArray[i][2]);
    tableGroup.add( tableLeg );
}

tableGroup.add( tableTop );

var chairGroup = new THREE.Group();
//var armRestPos = [];
var wheelPosArray = [[-8, -13.5, -8], [8, -13.5, 8], [8, -13.5, -8], [-8, -13.5, 8]];
var wheelSuppPosArray = [[8, -7.5, 8, Math.PI/4, Math.PI/2], [-8, -7.5, 8, -Math.PI/4, Math.PI/2]];

var chairUpperGroup = new THREE.Group();

geometry = new THREE.BoxGeometry(16, 2, 16);
var chairSeat = new THREE.Mesh(geometry, material);
chairUpperGroup.add(chairSeat);

geometry = new THREE.BoxGeometry(16, 25, 2);
var chairBack = new THREE.Mesh(geometry, material);
chairBack.position.set(0, 12.5, 8);
chairUpperGroup.add(chairBack);

chairGroup.add(chairUpperGroup);
//geometry = new THREE.BoxGeometry(16, 1, 2);
//var chairArmRest = new THREE.Mesh(geometry, material);

geometry = new THREE.CylinderGeometry(0.75, 0.75, 12);
var chairPole = new THREE.Mesh(geometry, material);
chairPole.position.set(0, -6, 0);
chairGroup.add(chairPole);

for(i=0; i<2; i++){
    geometry = new THREE.CylinderGeometry(0.75, 0.75, 22.7);
    var chairWheelSupp = new THREE.Mesh(geometry, material);
    chairWheelSupp.position.set(wheelSuppPosArray[i][0], wheelSuppPosArray[i][1], wheelSuppPosArray[i][2]);
    chairWheelSupp.rotateX(wheelSuppPosArray[i][4]);
    chairWheelSupp.rotateZ(wheelSuppPosArray[i][3]);
    chairWheelSupp.position.set(0, -12, 0);
    chairGroup.add(chairWheelSupp);
}

for(i=0; i<4; i++){
    geometry = new THREE.TorusGeometry(1.25, 0.75, 16, 100);
    var chairWheel = new THREE.Mesh(geometry, material);
    chairWheel.position.set(wheelPosArray[i][0], wheelPosArray[i][1], wheelPosArray[i][2]);
    chairGroup.add(chairWheel);
}

var officeLampGroup = new THREE.Group();

geometry = new THREE.CylinderGeometry(3, 7, 10, 32, 8, true);
var lampTop = new THREE.Mesh(geometry, material);
lampTop.position.set(0, 10, 0);
officeLampGroup.add(lampTop);

geometry = new THREE.CylinderGeometry(5, 5, 0.5, 32, 8);
var lampBase = new THREE.Mesh(geometry, material);
lampBase.position.set(0, -3, 0);
officeLampGroup.add(lampBase);

geometry = new THREE.CylinderGeometry(0.4, 0.4, 16.5);
var lampPole = new THREE.Mesh(geometry, material);
lampPole.position.set(0, 5.5, 0);
officeLampGroup.add(lampPole);


chairGroup.position.set(0, 0, 35);
officeLampGroup.position.set(50, 0, 0);

function init() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    scene.add(tableGroup);
    scene.add(chairGroup);
    scene.add(officeLampGroup);

    render();


}

function render() {
    renderer.render(scene, camera)
}