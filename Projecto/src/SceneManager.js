'use strict';



function SceneManager() {

    this.TOPVIEW=[0,100,0];
    this.FRONTVIEW=[0,25,70];
    this.SIDEVIEW=[80,25,0];


    var scene = new THREE.Scene();

    sceneSetup(scene)

    var renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );

    this.changeCamera=function(x,y,z){
        camera.position.x = x;
        camera.position.y = y;
        camera.position.z = z;
        camera.lookAt(scene.position);
    };

    this.changeCamera(...this.TOPVIEW);



    renderer.render(scene, camera);

    function animate(){
        createEventAnimate();


        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();



    this.onResize=function (){
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

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
    // scene.add(lamp);
}