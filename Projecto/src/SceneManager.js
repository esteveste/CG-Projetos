'use strict';


function SceneManager() {

    this.TOPVIEW=[0,100,0];
    this.FRONTVIEW=[0,25,70];
    this.SIDEVIEW=[80,25,0];

    var rotateRight=false, rotateLeft=false, moveForward=false, moveBackward=false, accelRotLeft=0.01, accelRotRight=0.01, accelPosZ=0.25, accelNegZ=0.25;

    var scene = new THREE.Scene();

    sceneSetup(scene)

    var renderer = new THREE.WebGLRenderer({ antialias: true });

    var camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );

    this.changeCamera=function(x,y,z){
        camera.position.x = x;
        camera.position.y = y;
        camera.position.z = z;
        camera.lookAt(scene.position);
    }

    this.changeCamera(...this.TOPVIEW);

    //quao util e isto
    renderer.render(scene, camera);

    render();

    animate();


    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    this.onResize=function (){
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

}



function animate(){
    createEventAnimate();

    // if (rotateLeft){
    //     chairGroup.rotation.y -= accelRotLeft;
    //     if (accelRotLeft < 0.15){
    //         accelRotLeft += 0.01;
    //     }
    // }
    //
    // if (accelRotLeft>0 && !rotateLeft)
    //     accelRotLeft -= 0.01;
    //
    // if (rotateRight){
    //     chairGroup.rotation.y += accelRotRight;
    //     if (accelRotRight < 0.15)
    //         accelRotRight += 0.01;
    // }
    //
    // if (accelRotRight>0 && !rotateRight)
    //     accelRotRight -= 0.01;
    //
    // if (moveForward){
    //     let direction = new THREE.Vector3();
    //     chairGroup.getWorldDirection(direction);
    //     chairGroup.position.add(direction.multiplyScalar(-accelPosZ));
    //     if (accelPosZ < 1.7)
    //         accelPosZ+= 0.05;
    // }
    //
    // if (accelPosZ > 0 && !moveForward)
    //     accelPosZ-= 0.05;
    //
    // if (moveBackward){
    //     let direction = new THREE.Vector3();
    //     chairGroup.getWorldDirection(direction);
    //     chairGroup.position.add(direction.multiplyScalar(accelNegZ));
    //     if (accelNegZ < 1.7)
    //         accelNegZ+= 0.05;
    // }
    //
    // if (accelNegZ > 0 && !moveBackward)
    //     accelNegZ-= 0.05;
    //

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function createEventAnimate() {
    var evt = new CustomEvent('animate', { });

    window.dispatchEvent(evt);
}


function sceneSetup(scene) {
    scene.add(new THREE.AxesHelper(10));

    var chair = new Chair();
    var table = new Table();
    var lamp = new Lamp();

    scene.add(chair);
    scene.add(table);
    scene.add(lamp);
}