'use strict';
//material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });



var Camera = function (aspectRatio, renderer, scene) {
    GraphicalEntity.call(this);


    this.camera = new THREE.PerspectiveCamera( 45, aspectRatio, 1, 1000 );
    this.CAMERA_POS=[100,120,100];

    this.camera.position.set(...this.CAMERA_POS);
    this.camera.lookAt(0,0,0);

    this.add(this.camera);
  
    let pause_geo = new THREE.PlaneGeometry(25, 25, 1, 1);

    pause_geo.computeFaceNormals();
    pause_geo.computeVertexNormals();

    let pause_texture = new THREE.TextureLoader().load('./src/utils/Textures/pausa.png');
    pause_texture.wrapS = pause_texture.wrapT = THREE.RepeatWrapping;
    pause_texture.repeat.set(1, 1);

    this.pause_mat = new THREE.MeshBasicMaterial( {map: pause_texture, side: THREE.BackSide})
    let pause_mesh = new THREE.Mesh(pause_geo, this.pause_mat);

    pause_mesh.visible = false;
    pause_mesh.lookAt(0, 0, 0);
    pause_mesh.position.set(0, 0, 25);

    this.camera.add(pause_mesh);

    this.animate=(deltaTime)=>{
        this.rotation.y -= 0.5*deltaTime;
    }

    this.reset=()=>{
        this.rotation.y=0;
    }

};


Camera.prototype = Object.create(GraphicalEntity.prototype);