
let vertices=[[new THREE.Vector3(27.5,7.5,5), new THREE.Vector3(27.5,7.5,-5), new THREE.Vector3(27.5,-7.5,5), new THREE.Vector3(27.5,-7.5,-5), new THREE.Vector3(12.5,-7.5,-5), new THREE.Vector3(12.5,-7.5,5), new THREE.Vector3(12.5,-4,5), new THREE.Vector3(12.5,-4,-5), new THREE.Vector3(-27.5,7.5,-0.5), new THREE.Vector3(-27.5,7.5,0.5)], 
             [new THREE.Vector3(-3.75, 12, 0), new THREE.Vector3(2, -3.75, 0.5), new THREE.Vector3(2, -3.75, -0.5), new THREE.Vector3(13, -3.75, 1.45), new THREE.Vector3(13, -3.75, -1.45)], 
             [new THREE.Vector3(3.75,0.5,25), new THREE.Vector3(3.75,0.5,-25), new THREE.Vector3(3.75,-0.5,25), new THREE.Vector3(3.75,-0.5,-25), new THREE.Vector3(-3.75,0.5,-25), new THREE.Vector3(-3.75,0.5,25), new THREE.Vector3(-3.75,-0.5,-25), new THREE.Vector3(-3.75,-0.5,25)], 
             [new THREE.Vector3(2.5,2.5,0.5), new THREE.Vector3(2.5,2.5,-0.5), new THREE.Vector3(2.5,-2.5,0.5), new THREE.Vector3(2.5,-2.5,-0.5), new THREE.Vector3(-2.5,2.5,-0.5), new THREE.Vector3(-2.5,2.5,0.5), new THREE.Vector3(-2.5,-2.5,-0.5), new THREE.Vector3(-2.5,-2.5,0.5)], 
             [new THREE.Vector3(2.5,2.5,0.5), new THREE.Vector3(2.5,2.5,-0.5), new THREE.Vector3(2.5,-2.5,0.5), new THREE.Vector3(2.5,-2.5,-0.5), new THREE.Vector3(-2.5,2.5,-0.5), new THREE.Vector3(-2.5,2.5,0.5), new THREE.Vector3(-2.5,-2.5,-0.5), new THREE.Vector3(-2.5,-2.5,0.5)], 
             [new THREE.Vector3(2.5,7.5,5), new THREE.Vector3(2.5,7.5,-5), new THREE.Vector3(2.5,-7.5,5), new THREE.Vector3(2.5,-7.5,-5), new THREE.Vector3(-2.5,7.5,-5), new THREE.Vector3(-2.5,7.5,5), new THREE.Vector3(-2.5,-7.5,-5), new THREE.Vector3(-2.5,-7.5,5)], 
             [new THREE.Vector3(2.5,2.5,3.4), new THREE.Vector3(2.5,2.5,-3.4), new THREE.Vector3(2.5,-2.5,3.4), new THREE.Vector3(2.5,-2.5,-3.4), new THREE.Vector3(-2.5,-2.5,-3), new THREE.Vector3(-2.5,-2.5,3)], 
             [new THREE.Vector3(7.5,-0.5,5), new THREE.Vector3(7.5,-0.5,-5), new THREE.Vector3(7.5,-2.5,5), new THREE.Vector3(7.5,-2.5,-5), new THREE.Vector3(-7.5,2.5,-3.85), new THREE.Vector3(-7.5,2.5,3.85), new THREE.Vector3(-7.5,-2.5,-3.85), new THREE.Vector3(-7.5,-2.5,3.85)], 
             [new THREE.Vector3(1,5,3.5), new THREE.Vector3(1,5,-3.5), new THREE.Vector3(1,-5,3.5), new THREE.Vector3(1,-5,-3.5), new THREE.Vector3(-1,5,-3.5), new THREE.Vector3(-1,5,3.5), new THREE.Vector3(-1,-5,-3.5), new THREE.Vector3(-1,-5,3.5)], 
             [new THREE.Vector3(1,2.5,2), new THREE.Vector3(1,2.5,-2), new THREE.Vector3(1,-2.5,2), new THREE.Vector3(1,-2.5,-2), new THREE.Vector3(-1,2.5,-2), new THREE.Vector3(-1,2.5,2), new THREE.Vector3(-1,-2.5,-2), new THREE.Vector3(-1,-2.5,2)], 
             [new THREE.Vector3(0.5,0.5,0.5), new THREE.Vector3(0.5,0.5,-0.5), new THREE.Vector3(0.5,-0.5,0.5), new THREE.Vector3(0.5,-0.5,-0.5), new THREE.Vector3(-0.5,0.5,-0.5), new THREE.Vector3(-0.5,0.5,0.5), new THREE.Vector3(-0.5,-0.5,-0.5), new THREE.Vector3(-0.5,-0.5,0.5)], 
             [new THREE.Vector3(0.25,10,0.5), new THREE.Vector3(0.25,10,-0.5), new THREE.Vector3(0.25,-10,0.5), new THREE.Vector3(0.25,-10,-0.5), new THREE.Vector3(-0.25,10,-0.5), new THREE.Vector3(-0.25,10,0.5), new THREE.Vector3(-0.25,-10,-0.5), new THREE.Vector3(-0.25,-10,0.5)]];
let faces=[[new THREE.Face3(1, 2, 3), new THREE.Face3(1, 0, 2), new THREE.Face3(0, 9, 6), new THREE.Face3(5, 2, 6), new THREE.Face3(6, 2, 0), new THREE.Face3(4, 3, 5), new THREE.Face3(3, 2, 5), new THREE.Face3(6, 4, 5), new THREE.Face3(7, 4, 6), new THREE.Face3(6, 9, 7), new THREE.Face3(7, 9, 8), new THREE.Face3(9, 0, 8), new THREE.Face3(9, 1, 8), new THREE.Face3(0, 1, 9), new THREE.Face3(8, 1, 7), new THREE.Face3(7, 1, 3), new THREE.Face3(7, 3, 4)], 
          [new THREE.Face3(0, 2, 1), new THREE.Face3(4, 0, 3), new THREE.Face3(3, 0, 1), new THREE.Face3(0, 4, 2), new THREE.Face3(0, 2, 1)], 
          [new THREE.Face3(0,2,1), new THREE.Face3(2,3,1), new THREE.Face3(4,6,5), new THREE.Face3(6,7,5), new THREE.Face3(4,5,1), new THREE.Face3(5,0,1), new THREE.Face3(7,6,2), new THREE.Face3(6,3,2), new THREE.Face3(5,7,0), new THREE.Face3(7,2,0), new THREE.Face3(1,3,4), new THREE.Face3(3,6,4)], 
          [new THREE.Face3(0,2,1), new THREE.Face3(2,3,1), new THREE.Face3(4,6,5), new THREE.Face3(6,7,5), new THREE.Face3(4,5,1), new THREE.Face3(5,0,1), new THREE.Face3(7,6,2), new THREE.Face3(6,3,2), new THREE.Face3(5,7,0), new THREE.Face3(7,2,0), new THREE.Face3(1,3,4), new THREE.Face3(3,6,4)], 
          [new THREE.Face3(0,2,1), new THREE.Face3(2,3,1), new THREE.Face3(4,6,5), new THREE.Face3(6,7,5), new THREE.Face3(4,5,1), new THREE.Face3(5,0,1), new THREE.Face3(7,6,2), new THREE.Face3(6,3,2), new THREE.Face3(5,7,0), new THREE.Face3(7,2,0), new THREE.Face3(1,3,4), new THREE.Face3(3,6,4)], 
          [new THREE.Face3(0,2,1), new THREE.Face3(2,3,1), new THREE.Face3(4,6,5), new THREE.Face3(6,7,5), new THREE.Face3(4,5,1), new THREE.Face3(5,0,1), new THREE.Face3(7,6,2), new THREE.Face3(6,3,2), new THREE.Face3(5,7,0), new THREE.Face3(7,2,0), new THREE.Face3(1,3,4), new THREE.Face3(3,6,4)], 
          [new THREE.Face3(0,2,1), new THREE.Face3(2,3,1), new THREE.Face3(4,5,1), new THREE.Face3(5,0,1), new THREE.Face3(1,3,4), new THREE.Face3(2,0,5), new THREE.Face3(5,4,2), new THREE.Face3(3,2,4)], 
          [new THREE.Face3(0,2,1), new THREE.Face3(2,3,1), new THREE.Face3(4,6,5), new THREE.Face3(6,7,5), new THREE.Face3(4,5,1), new THREE.Face3(5,0,1), new THREE.Face3(7,6,2), new THREE.Face3(6,3,2), new THREE.Face3(5,7,0), new THREE.Face3(7,2,0), new THREE.Face3(1,3,4), new THREE.Face3(3,6,4)], 
          [new THREE.Face3(0,2,1), new THREE.Face3(2,3,1), new THREE.Face3(4,6,5), new THREE.Face3(6,7,5), new THREE.Face3(4,5,1), new THREE.Face3(5,0,1), new THREE.Face3(7,6,2), new THREE.Face3(6,3,2), new THREE.Face3(5,7,0), new THREE.Face3(7,2,0), new THREE.Face3(1,3,4), new THREE.Face3(3,6,4)], 
          [new THREE.Face3(0,2,1), new THREE.Face3(2,3,1), new THREE.Face3(4,6,5), new THREE.Face3(6,7,5), new THREE.Face3(4,5,1), new THREE.Face3(5,0,1), new THREE.Face3(7,6,2), new THREE.Face3(6,3,2), new THREE.Face3(5,7,0), new THREE.Face3(7,2,0), new THREE.Face3(1,3,4), new THREE.Face3(3,6,4)], 
          [new THREE.Face3(0,2,1), new THREE.Face3(2,3,1), new THREE.Face3(4,6,5), new THREE.Face3(6,7,5), new THREE.Face3(4,5,1), new THREE.Face3(5,0,1), new THREE.Face3(7,6,2), new THREE.Face3(6,3,2), new THREE.Face3(5,7,0), new THREE.Face3(7,2,0), new THREE.Face3(1,3,4), new THREE.Face3(3,6,4)], 
          [new THREE.Face3(0,2,1), new THREE.Face3(2,3,1), new THREE.Face3(4,6,5), new THREE.Face3(6,7,5), new THREE.Face3(4,5,1), new THREE.Face3(5,0,1), new THREE.Face3(7,6,2), new THREE.Face3(6,3,2), new THREE.Face3(5,7,0), new THREE.Face3(7,2,0), new THREE.Face3(1,3,4), new THREE.Face3(3,6,4)]]
var Plane = function () {
    GraphicalEntity.call(this);

    var geometry, mesh;
    var material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

    //le go do some boxes
    // geometry = new THREE.BoxGeometry(15, 15, 10);
    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[0]);
    geometry.faces.push(...faces[0]);
    console.log(geometry.vertices);
    mesh = new THREE.Mesh( geometry, material );
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true} );

    // geometry = new THREE.BoxGeometry(7.5, 7.5, 2);
    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[1]);
    geometry.faces.push(...faces[1]);

    mesh = new THREE.Mesh( geometry, material );
    mesh.position.x = -29.5;
    mesh.position.y = 11.25;
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true} );
    // geometry = new THREE.BoxGeometry(7.5, 1, 50);

    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[2]);
    geometry.faces.push(...faces[2]);

    mesh = new THREE.Mesh( geometry, material );
    mesh.position.x = 10;
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true} );
    // geometry = new THREE.BoxGeometry(5, 5, 1);

    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[3]);
    geometry.faces.push(...faces[3]);

    mesh = new THREE.Mesh( geometry, material );
    mesh.position.x = 20;
    mesh.position.y = -10;
    mesh.position.z = 4;
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true} );
    // geometry = new THREE.BoxGeometry(5, 5, 1);

    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[4]);
    geometry.faces.push(...faces[4]);

    mesh = new THREE.Mesh( geometry, material );
    mesh.position.x = 20;
    mesh.position.y = -10;
    mesh.position.z = -4;
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0xffffff ,  wireframe: true} );
    // geometry = new THREE.BoxGeometry(5, 15, 10);

    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[5]);
    geometry.faces.push(...faces[5]);

    mesh = new THREE.Mesh( geometry, material );
    mesh.position.x = 30;
    mesh.position.y = 2;
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0xffffff ,  wireframe: true} );
    // geometry = new THREE.BoxGeometry(5, 5, 10);
    // geometry.vertices[4] = new THREE.Vector3(-2.5, -2.5, -5);
    // geometry.vertices[5] = new THREE.Vector3(-2.5, -2.5, 5);

    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[6]);
    geometry.faces.push(...faces[6]);

    mesh = new THREE.Mesh( geometry, material );
    mesh.position.y = 10;
    mesh.position.x = 5;
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0xffffff ,  wireframe: true} );
    // geometry = new THREE.BoxGeometry(15, 5, 10);
    // geometry.vertices[0] = new THREE.Vector3(7.5, -0.5, 5);
    // geometry.vertices[1] = new THREE.Vector3(7.5, -0.5, -5);

    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[7]);
    geometry.faces.push(...faces[7]);

    mesh = new THREE.Mesh( geometry, material );
    mesh.position.y = 10;
    mesh.position.x = 20;
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0xffffff ,  wireframe: true} );
    // geometry = new THREE.BoxGeometry(2, 10, 7);

    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[8]);
    geometry.faces.push(...faces[8]);

    mesh = new THREE.Mesh( geometry, material );
    mesh.position.x = 33.5;
    mesh.position.y = 2;
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0xffffff ,  wireframe: true} );
    // geometry = new THREE.BoxGeometry(2, 5, 4);

    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[9]);
    geometry.faces.push(...faces[9]);

    mesh = new THREE.Mesh( geometry, material );
    mesh.position.x = 35.5;
    mesh.position.y = 2;
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0xffffff ,  wireframe: true} );
    // geometry = new THREE.BoxGeometry(1, 1, 1);

    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[10]);
    geometry.faces.push(...faces[10]);

    mesh = new THREE.Mesh( geometry, material );
    mesh.position.x = 37;
    mesh.position.y = 2;
    this.add(mesh);

    material = new THREE.MeshBasicMaterial( { color: 0xffffff ,  wireframe: true} );
    // geometry = new THREE.BoxGeometry(0.5, 20, 1);

    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[11]);
    geometry.faces.push(...faces[11]);

    mesh = new THREE.Mesh( geometry, material );
    mesh.position.x = 37.75;
    mesh.position.y = 2;
    this.add(mesh);


};
Plane.prototype = Object.create(GraphicalEntity.prototype);


// var g = new THREE.Geometry(); g.vertices.push( ...geometry2.vertices ); g.faces.push( ...geometry2.faces); g.computeBoundingSphere();
// var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
// var mesh = new THREE.Mesh( g, material );