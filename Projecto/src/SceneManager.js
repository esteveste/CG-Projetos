'use strict';

var chair, lamp, table;

function SceneManager() {

    this.TOPVIEW=[0,100,0];
    this.FRONTVIEW=[0,0,100];
    this.SIDEVIEW=[100,0,0];


    var scene = new THREE.Scene();

    sceneSetup(scene)

    var renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var camera = new THREE.OrthographicCamera( window.innerWidth / - 8, window.innerWidth / 8, window.innerHeight / 8, window.innerHeight / - 8, 1, 1000 );

    this.changeCamera = function (x, y, z) {
        camera.position.x = x;
        camera.position.y = y;
        camera.position.z = z;
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
    };

    this.changeCamera(...this.TOPVIEW);

    function animate(){
        createEventAnimate();

        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();

    this.onResize=function (){
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.left = window.innerWidth / - 8;
        camera.right = window.innerWidth / 8;
        camera.top = window.innerHeight / 8;
        camera.bottom = window.innerHeight / - 8;
        camera.updateProjectionMatrix();
    }

}





function createEventAnimate() {
    var evt = new CustomEvent('animate', { });

    window.dispatchEvent(evt);
}


function sceneSetup(scene) {
    scene.add(new THREE.AxesHelper(10));

    chair = new Chair();
    table = new Table();
    lamp = new Lamp();

    scene.add(chair);
    scene.add(table);
    // scene.add(lamp);
}