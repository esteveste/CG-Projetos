


var Plane = function () {
    GraphicalEntity.call(this);

    var geometry, mesh;
    var material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
    
    //le go do some boxes
    geometry = new THREE.BoxGeometry(15, 15, 10);
    console.log(geometry.vertices);
    mesh = new THREE.Mesh( geometry, material );
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true} );
    geometry = new THREE.BoxGeometry(40, 15, 10);
    geometry.vertices[3] = new THREE.Vector3(20, -4, -5);
    geometry.vertices[2] = new THREE.Vector3(20, -4, 5);
    geometry.vertices[4] = new THREE.Vector3(-20, 7.5, -0.5);
    geometry.vertices[5] = new THREE.Vector3(-20, 7.5, 0.5);
    geometry.vertices[6] = new THREE.Vector3(-20, 7.5, -0.5);
    geometry.vertices[7] = new THREE.Vector3(-20, 7.5, 0.5);
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.x = -27.5;
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true} );
    geometry = new THREE.BoxGeometry(7.5, 7.5, 2);
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.x = -47.5;
    mesh.position.y = 7.5;
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true} );
    geometry = new THREE.BoxGeometry(7.5, 1, 50);
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.x = -10;
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true} );
    geometry = new THREE.BoxGeometry(5, 5, 1);
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.y = -10;
    mesh.position.z = 4;
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true} );
    geometry = new THREE.BoxGeometry(5, 5, 1);
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.y = -10;
    mesh.position.z = -4;
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0xffffff ,  wireframe: true} );
    geometry = new THREE.BoxGeometry(5, 15, 10);
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.x = 10;
    mesh.position.y = 2;
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0xffffff ,  wireframe: true} );
    geometry = new THREE.BoxGeometry(3, 5, 10);
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.y = 10;
    mesh.position.x = -9;
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0xffffff ,  wireframe: true} );
    geometry = new THREE.BoxGeometry(5, 5, 10);
    geometry.vertices[4] = new THREE.Vector3(-2.5, -2.5, -5);
    geometry.vertices[5] = new THREE.Vector3(-2.5, -2.5, 5);
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.y = 10;
    mesh.position.x = -13;
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0xffffff ,  wireframe: true} );
    geometry = new THREE.BoxGeometry(15, 5, 10);
    geometry.vertices[0] = new THREE.Vector3(7.5, -0.5, 5);
    geometry.vertices[1] = new THREE.Vector3(7.5, -0.5, -5);
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.y = 10;
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0xffffff ,  wireframe: true} );
    geometry = new THREE.BoxGeometry(2, 10, 7);
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.x = 13.5;
    mesh.position.y = 2;
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0xffffff ,  wireframe: true} );
    geometry = new THREE.BoxGeometry(2, 5, 4);
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.x = 15.5;
    mesh.position.y = 2;
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0xffffff ,  wireframe: true} );
    geometry = new THREE.BoxGeometry(1, 1, 1);
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.x = 17;
    mesh.position.y = 2;
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0xffffff ,  wireframe: true} );
    geometry = new THREE.BoxGeometry(0.5, 20, 1);
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.x = 17.75;
    mesh.position.y = 2;
    this.add(mesh);

    
};
Plane.prototype = Object.create(GraphicalEntity.prototype);


// var g = new THREE.Geometry(); g.vertices.push( ...geometry2.vertices ); g.faces.push( ...geometry2.faces); g.computeBoundingSphere();
// var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
// var mesh = new THREE.Mesh( g, material );