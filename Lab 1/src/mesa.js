'use strict';
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

const TOPVIEW=[0,100,0];
const FRONTVIEW=[0,25,70];
const SIDEVIEW=[80,25,0];


var scene = new THREE.Scene();
var camera, rotateRight=false, rotateLeft=false, moveForward=false, moveBackward=false, accelRotLeft=0.01, accelRotRight=0.01, accelPosZ=0.25, accelNegZ=0.25;
scene.add(new THREE.AxesHelper(10));

//Camera setup
function cameraSetup(x,y,z){
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.x = x;
    camera.position.y = y;
    camera.position.z = z;
    camera.lookAt(scene.position);
}

//render setup
var renderer = new THREE.WebGLRenderer({ antialias: true });
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
// var material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });

//table build
var tableGroup = new THREE.Group();
var legPosArray = [[-26, -3, -8], [-26, -3, 8],
                   [26, -3, 8], [26, -3, -8]];

var geometry = new THREE.BoxGeometry(60, 2, 20);
var tableTop = new THREE.Mesh(geometry, material);

for(let i = 0; i<4; i++){
    geometry = new THREE.CylinderGeometry(2, 2, 6);
    let tableLeg = new THREE.Mesh(geometry, material);
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
var chairSeat = new THREE.Mesh(geometry, material);
chairGroup.add(chairSeat);

geometry = new THREE.BoxGeometry(16, 25, 2);
var chairBack = new THREE.Mesh(geometry, material);
chairBack.position.set(0, 12, 7);
chairGroup.add(chairBack);

//geometry = new THREE.BoxGeometry(16, 1, 2);
//var chairArmRest = new THREE.Mesh(geometry, material);

geometry = new THREE.CylinderGeometry(0.75, 0.75, 12);
var chairPole = new THREE.Mesh(geometry, material);
chairPole.position.set(0, -6, 0);
chairGroup.add(chairPole);

for(let i=0; i<2; i++){
    geometry = new THREE.CylinderGeometry(0.75, 0.75, 22.7);
    var chairWheelSupp = new THREE.Mesh(geometry, material);
    chairWheelSupp.position.set(wheelSuppPosArray[i][0], wheelSuppPosArray[i][1], wheelSuppPosArray[i][2]);
    chairWheelSupp.rotateX(wheelSuppPosArray[i][4]);
    chairWheelSupp.rotateZ(wheelSuppPosArray[i][3]);
    chairWheelSupp.position.set(0, -12, 0);
    chairGroup.add(chairWheelSupp);
}

for(let i=0; i<4; i++){
    geometry = new THREE.TorusGeometry(1.25, 0.75, 16, 10);
    var chairWheel = new THREE.Mesh(geometry, material);
    chairWheel.position.set(wheelPosArray[i][0], wheelPosArray[i][1], wheelPosArray[i][2]);
    chairWheel.rotateY(Math.PI/2);
    chairGroup.add(chairWheel);
}

//lamp build
var officeLampGroup = new THREE.Group();

geometry = new THREE.CylinderGeometry(3, 7, 10, 32, 8, true);
var lampTop = new THREE.Mesh(geometry, material);
lampTop.position.set(0, 10, 0);
officeLampGroup.add(lampTop);

geometry = new THREE.CylinderGeometry(5, 5, 0.5, 32, 8);
var lampBase = new THREE.Mesh(geometry, material);
lampBase.position.set(0, -3, 0);
officeLampGroup.add(lampBase);

geometry = new THREE.CylinderGeometry(0.5, 0.5, 10.5);
var lampPole = new THREE.Mesh(geometry, material);
lampPole.position.set(0, 2.5, 0);
officeLampGroup.add(lampPole);

//lightbulb
geometry = new THREE.CylinderGeometry(1, 0.5, 2);
var lampBulbDown = new THREE.Mesh(geometry, material);
lampBulbDown.position.set(0, 8.75, 0);
officeLampGroup.add(lampBulbDown);

geometry = new THREE.SphereGeometry(1, 10, 10,0,2*Math.PI,0,Math.PI/2);
var lampBulbUpper = new THREE.Mesh(geometry, material);
lampBulbUpper.position.set(0, 9.75, 0);
officeLampGroup.add(lampBulbUpper);

chairGroup.position.set(0, 0, 35);
officeLampGroup.position.set(50, 0, 0);

function init() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    cameraSetup(...TOPVIEW); //... ->spread operator, passa o tuplo para argumentos

    scene.add(tableGroup);
    scene.add(chairGroup);
    scene.add(officeLampGroup);

    render();

    window.addEventListener("resize", onResize);
    animate();

    document.onkeydown = function(e){
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
                material.wireframe=! material.wireframe;
            // if(material){
            //     currentMaterial = material2;
            // }
            // else currentMaterial = material;
            // changeRepresentation();
            break;
            case 49:
                //1
                cameraSetup(...TOPVIEW);
                renderer.render(scene, camera);
                break;
            case 50:
                //2
                cameraSetup(...FRONTVIEW);
                renderer.render(scene, camera);
                break;
            case 51:
                //3
                cameraSetup(...SIDEVIEW);
                renderer.render(scene, camera);
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
    renderer.render(scene, camera);
}

function onResize(){
    renderer.setSize(window.innerWidth, window.innerHeight);
}