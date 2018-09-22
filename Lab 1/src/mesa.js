'use strict';
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

var scene = new THREE.Scene();
var currentMaterial, rotateRight=false, rotateLeft=false, moveForward=false, moveBackward=false, accelRotLeft=0.01, accelRotRight=0.01, accelPosZ=0.25, accelNegZ=0.25;
scene.add(new THREE.AxesHelper(10));

//Camera setup
var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.x = 0;
camera.position.y = 100;
camera.position.z = 0;
camera.lookAt(scene.position);
var currentCamera = camera;

var camera2 = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
camera2.position.x = 0;
camera2.position.y = 25;
camera2.position.z = 70;
camera2.lookAt(scene.position);

var camera3 = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
camera3.position.x = 80;
camera3.position.y = 25;
camera3.position.z = 0;
camera3.lookAt(scene.position);

//render setup
var renderer = new THREE.WebGLRenderer({ antialias: true });
var material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
var material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });

//table build
var tableGroup = new THREE.Group();
var legPosArray = [[-26, -3, -8], [-26, -3, 8], 
                   [26, -3, 8], [26, -3, -8]];

var geometry = new THREE.BoxGeometry(60, 2, 20);
var tableTop = new THREE.Mesh(geometry, material1);

for(let i = 0; i<4; i++){
    geometry = new THREE.CylinderGeometry(2, 2, 6);
    let tableLeg = new THREE.Mesh(geometry, material1);
    tableLeg.position.set(legPosArray[i][0], legPosArray[i][1], legPosArray[i][2]);
    tableGroup.add( tableLeg );
}

tableGroup.add( tableTop );

// chair build
var chairGroup = new THREE.Group();
//var armRestPos = [];
var wheelPosArray = [[-8, -13.5, -8], [8, -13.5, 8], [8, -13.5, -8], [-8, -13.5, 8]];
var wheelSuppPosArray = [[8, -7.5, 8, Math.PI/4, Math.PI/2], [-8, -7.5, 8, -Math.PI/4, Math.PI/2]];

geometry = new THREE.BoxGeometry(16, 2, 16);
var chairSeat = new THREE.Mesh(geometry, material1);
chairGroup.add(chairSeat);

geometry = new THREE.BoxGeometry(16, 25, 2);
var chairBack = new THREE.Mesh(geometry, material1);
chairBack.position.set(0, 12, 7);
chairGroup.add(chairBack);

//geometry = new THREE.BoxGeometry(16, 1, 2);
//var chairArmRest = new THREE.Mesh(geometry, material1);

geometry = new THREE.CylinderGeometry(0.75, 0.75, 12);
var chairPole = new THREE.Mesh(geometry, material1);
chairPole.position.set(0, -6, 0);
chairGroup.add(chairPole);

for(let i=0; i<2; i++){
    geometry = new THREE.CylinderGeometry(0.75, 0.75, 22.7);
    var chairWheelSupp = new THREE.Mesh(geometry, material1);
    chairWheelSupp.position.set(wheelSuppPosArray[i][0], wheelSuppPosArray[i][1], wheelSuppPosArray[i][2]);
    chairWheelSupp.rotateX(wheelSuppPosArray[i][4]);
    chairWheelSupp.rotateZ(wheelSuppPosArray[i][3]);
    chairWheelSupp.position.set(0, -12, 0);
    chairGroup.add(chairWheelSupp);
}

for(let i=0; i<4; i++){
    geometry = new THREE.TorusGeometry(1.25, 0.75, 16, 100);
    var chairWheel = new THREE.Mesh(geometry, material1);
    chairWheel.position.set(wheelPosArray[i][0], wheelPosArray[i][1], wheelPosArray[i][2]);
    chairWheel.rotateY(Math.PI/2);
    chairGroup.add(chairWheel);
}

//lamp build
var officeLampGroup = new THREE.Group();

geometry = new THREE.CylinderGeometry(3, 7, 10, 32, 8, true);
var lampTop = new THREE.Mesh(geometry, material1);
lampTop.position.set(0, 10, 0);
officeLampGroup.add(lampTop);

geometry = new THREE.CylinderGeometry(5, 5, 0.5, 32, 8);
var lampBase = new THREE.Mesh(geometry, material1);
lampBase.position.set(0, -3, 0);
officeLampGroup.add(lampBase);

geometry = new THREE.CylinderGeometry(0.4, 0.4, 16.5);
var lampPole = new THREE.Mesh(geometry, material1);
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

    window.addEventListener("resize", onResize);
    animate();

    document.onkeydown = function(e){
        console.log(e);
        e = e || window.event;
        switch(e.which || e.keyCode){
            case 39:
            //left
            rotateLeft=true;
            break;
            case 38:
            //up
            moveForward=true;
            break;
            case 37:
            //right
            rotateRight=true;
            break;
            case 40:
            //down
            moveBackward=true;
            break;
            case 65:
            //A
            if(currentMaterial==material1){
                currentMaterial = material2;
            }
            else currentMaterial = material1;
            changeRepresentation();
            break;
            case 49:
            //1
            renderer.render(scene, camera);
            currentCamera = camera;
            break;
            case 50:
            //2
            renderer.render(scene, camera2);
            currentCamera = camera2;
            break;
            case 51:
            //3
            renderer.render(scene, camera3);
            currentCamera = camera3;
            break;
            default: return;
        }
        e.preventDefault();
    };

    document.onkeyup = function(e){
        e = e || window.event;
        switch(e.which || e.keyCode){
            case 39:
            //left
            rotateLeft=false;
            break;
            case 38:
            //up
            moveForward=false;
            break;
            case 37:
            //right
            rotateRight=false;
            break;
            case 40:
            //down
            moveBackward=false;
            break;
        }
        e.preventDefault();
    }

}

function render() {
    renderer.render(scene, camera);
}

function changeRepresentation(){
    for(var i=1; i< scene.children.length; i++){
        for(var j=0; j< scene.children[i].children.length; j++){
            if (scene.children[i].children[j].material == material1){
                scene.children[i].children[j].material = material2;
            }
            else{
                scene.children[i].children[j].material = material1;
            }
        }
    }
    renderer.render(scene, currentCamera);
}

function animate(){
    if (rotateLeft){
        chairGroup.rotation.y -= accelRotLeft;
        if (accelRotLeft < 0.15){
            accelRotLeft += 0.01;
        }
    }

    if (accelRotLeft>0 && !rotateLeft)
        accelRotLeft -= 0.01;

    if (rotateRight){
        chairGroup.rotation.y += accelRotRight;
        if (accelRotRight < 0.15)
            accelRotRight += 0.01;
    }

    if (accelRotRight>0 && !rotateRight)
        accelRotRight -= 0.01;

    if (moveForward){
        let direction = new THREE.Vector3();
        chairGroup.getWorldDirection(direction);
        chairGroup.position.add(direction.multiplyScalar(-accelPosZ));
        if (accelPosZ < 1.7)
            accelPosZ+= 0.05;
    }

    if (accelPosZ > 0 && !moveForward)
        accelPosZ-= 0.05;

    if (moveBackward){
        let direction = new THREE.Vector3();
        chairGroup.getWorldDirection(direction);
        chairGroup.position.add(direction.multiplyScalar(accelNegZ));
        if (accelNegZ < 1.7)
            accelNegZ+= 0.05;
    }
    
    if (accelNegZ > 0 && !moveBackward)
        accelNegZ-= 0.05;


    requestAnimationFrame(animate);
    renderer.render(scene, currentCamera);
}

function onResize(){
    renderer.setSize(window.innerWidth, window.innerHeight);
}