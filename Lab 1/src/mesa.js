// var THREE = require('three');
var scene = new THREE.Scene();
scene.add(new THREE.AxesHelper(10));
var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.x = 50;
camera.position.y = 50;
camera.position.z = 50;
camera.lookAt(scene.position);

var renderer = new THREE.WebGLRenderer({ antialias: true });

var geometry = new THREE.BoxGeometry(50, 50, 50);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
var cube = new THREE.Mesh(geometry, material);

function init() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    scene.add(cube);


    render();


}

function render() {
    renderer.render(scene, camera)
}