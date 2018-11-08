
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
             [new THREE.Vector3(0.25,10,0.5), new THREE.Vector3(0.25,10,-0.5), new THREE.Vector3(0.25,-10,0.5), new THREE.Vector3(0.25,-10,-0.5), new THREE.Vector3(-0.25,10,-0.5), new THREE.Vector3(-0.25,10,0.5), new THREE.Vector3(-0.25,-10,-0.5), new THREE.Vector3(-0.25,-10,0.5)],
             [new THREE.Vector3(3,0.5,10), new THREE.Vector3(3,0.5,-10), new THREE.Vector3(3,-0.5,10), new THREE.Vector3(3,-0.5,-10), new THREE.Vector3(-3,0.5,-10), new THREE.Vector3(-3,0.5,10), new THREE.Vector3(-3,-0.5,-10), new THREE.Vector3(-3,-0.5,10)],
             [new THREE.Vector3(3.75,0.5,25), new THREE.Vector3(3.75,0.5,-25), new THREE.Vector3(3.75,-0.5,25), new THREE.Vector3(3.75,-0.5,-25), new THREE.Vector3(-3.75,0.5,-25), new THREE.Vector3(-3.75,0.5,25), new THREE.Vector3(-3.75,-0.5,-25), new THREE.Vector3(-3.75,-0.5,25)]];


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
          [new THREE.Face3(0,2,1), new THREE.Face3(2,3,1), new THREE.Face3(4,6,5), new THREE.Face3(6,7,5), new THREE.Face3(4,5,1), new THREE.Face3(5,0,1), new THREE.Face3(7,6,2), new THREE.Face3(6,3,2), new THREE.Face3(5,7,0), new THREE.Face3(7,2,0), new THREE.Face3(1,3,4), new THREE.Face3(3,6,4)],
          [new THREE.Face3(0,2,1), new THREE.Face3(2,3,1), new THREE.Face3(4,6,5), new THREE.Face3(6,7,5), new THREE.Face3(4,5,1), new THREE.Face3(5,0,1), new THREE.Face3(7,6,2), new THREE.Face3(6,3,2), new THREE.Face3(5,7,0), new THREE.Face3(7,2,0), new THREE.Face3(1,3,4), new THREE.Face3(3,6,4)],
          [new THREE.Face3(0,2,1), new THREE.Face3(2,3,1), new THREE.Face3(4,6,5), new THREE.Face3(6,7,5), new THREE.Face3(4,5,1), new THREE.Face3(5,0,1), new THREE.Face3(7,6,2), new THREE.Face3(6,3,2), new THREE.Face3(5,7,0), new THREE.Face3(7,2,0), new THREE.Face3(1,3,4), new THREE.Face3(3,6,4)]];

let phongMaterials=[];

let isMaterialPhong=false;

let phongMaterial=[new THREE.MeshPhongMaterial( { color: 0xff0000,wireframe:false}),new THREE.MeshPhongMaterial( { color: 0x0000ff, wireframe: false} ),new THREE.MeshPhongMaterial( { color: 0xffffff ,  wireframe: false} )];
let lambertMaterial=[new THREE.MeshLambertMaterial( { color: 0xff0000,wireframe:false}),new THREE.MeshLambertMaterial( { color: 0x0000ff, wireframe: false} ),new THREE.MeshLambertMaterial( { color: 0xffffff ,  wireframe: false} )];
let basicMaterial=[new THREE.MeshBasicMaterial( { color: 0xff0000,wireframe:false}),new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: false} ),new THREE.MeshBasicMaterial( { color: 0xffffff ,  wireframe: false} )];

var Plane = function () {
    GraphicalEntity.call(this);
    
    //init material
    this.redMaterial=phongMaterial[0];
    this.blueMaterial = phongMaterial[1];
    this.whiteMaterial = phongMaterial[2];

    var geometry, mesh;

    //corpo principal do aviao
    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[0]);
    geometry.faces.push(...faces[0]);
    geometry.computeVertexNormals();
    geometry.computeFaceNormals();

    // console.log(geometry.vertices);
    mesh = new THREE.Mesh( geometry, this.redMaterial );
    this.add(mesh);

    //triangulo da cauda
    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[1]);
    geometry.faces.push(...faces[1]);
    geometry.computeVertexNormals();
    geometry.computeFaceNormals();

    mesh = new THREE.Mesh( geometry, this.redMaterial );
    mesh.position.x = -29.5;
    mesh.position.y = 11.25;
    this.add(mesh);

    //asa grande no meio
    // material = new THREE.MeshPhongMaterial( { color: 0xff0000, wireframe: false} );
    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[2]);
    geometry.faces.push(...faces[2]);
    geometry.computeVertexNormals();
    geometry.computeFaceNormals();

    mesh = new THREE.Mesh( geometry, this.redMaterial );
    mesh.position.x = 10;
    this.add(mesh);

    //rodas
    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[3]);
    geometry.faces.push(...faces[3]);
    geometry.computeVertexNormals();
    geometry.computeFaceNormals();

    mesh = new THREE.Mesh( geometry, this.blueMaterial );
    mesh.position.x = 20;
    mesh.position.y = -10;
    mesh.position.z = 4;
    this.add(mesh);

    //rodas
    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[4]);
    geometry.faces.push(...faces[4]);
    geometry.computeVertexNormals();
    geometry.computeFaceNormals();

    mesh = new THREE.Mesh( geometry, this.blueMaterial );
    mesh.position.x = 20;
    mesh.position.y = -10;
    mesh.position.z = -4;
    this.add(mesh);

    //cubo na frente 1
    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[5]);
    geometry.faces.push(...faces[5]);
    geometry.computeVertexNormals();
    geometry.computeFaceNormals();

    mesh = new THREE.Mesh( geometry, this.whiteMaterial );
    mesh.position.x = 30;
    mesh.position.y = 2;
    this.add(mesh);

    //cockpit parte tras
    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[6]);
    geometry.faces.push(...faces[6]);
    geometry.computeVertexNormals();
    geometry.computeFaceNormals();

    mesh = new THREE.Mesh( geometry, this.whiteMaterial );
    mesh.position.y = 10;
    mesh.position.x = 5;
    this.add(mesh);

    //cockpit parte frente
    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[7]);
    geometry.faces.push(...faces[7]);
    geometry.computeVertexNormals();
    geometry.computeFaceNormals();

    mesh = new THREE.Mesh( geometry, this.whiteMaterial );
    mesh.position.y = 10;
    mesh.position.x = 20;
    this.add(mesh);

    //cubo na frente 2
    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[8]);
    geometry.faces.push(...faces[8]);
    geometry.computeVertexNormals();
    geometry.computeFaceNormals();

    mesh = new THREE.Mesh( geometry, this.whiteMaterial );
    mesh.position.x = 33.5;
    mesh.position.y = 2;
    this.add(mesh);

    //cubo na frente 3
    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[9]);
    geometry.faces.push(...faces[9]);
    geometry.computeVertexNormals();
    geometry.computeFaceNormals();

    mesh = new THREE.Mesh( geometry, this.whiteMaterial );
    mesh.position.x = 35.5;
    mesh.position.y = 2;
    this.add(mesh);

    //cubo na frente 4
    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[10]);
    geometry.faces.push(...faces[10]);
    geometry.computeVertexNormals();
    geometry.computeFaceNormals();

    mesh = new THREE.Mesh( geometry, this.whiteMaterial );
    mesh.position.x = 37;
    mesh.position.y = 2;
    this.add(mesh);

    //helice
    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[11]);
    geometry.faces.push(...faces[11]);
    geometry.computeVertexNormals();
    geometry.computeFaceNormals();

    mesh = new THREE.Mesh( geometry, this.whiteMaterial );
    mesh.position.x = 37.75;
    mesh.position.y = 2;
    this.add(mesh);

    //pau direita tras
    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[11]);
    geometry.faces.push(...faces[11]);
    geometry.computeVertexNormals();
    geometry.computeFaceNormals();

    mesh = new THREE.Mesh( geometry, this.whiteMaterial );
    mesh.position.z = 25 - 3;
    mesh.position.y = 10;
    mesh.position.x = 10 - 2.5;
    this.add(mesh);
    //pao direita frente
    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[11]);
    geometry.faces.push(...faces[11]);
    geometry.computeVertexNormals();
    geometry.computeFaceNormals();

    mesh = new THREE.Mesh( geometry, this.whiteMaterial );
    mesh.position.z = 25 - 3;
    mesh.position.y = 10;
    mesh.position.x = 10 + 2.5;
    this.add(mesh);
    //pao esquerda tras
    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[11]);
    geometry.faces.push(...faces[11]);
    geometry.computeVertexNormals();
    geometry.computeFaceNormals();

    mesh = new THREE.Mesh( geometry, this.whiteMaterial );
    mesh.position.z = -25 + 3 ;
    mesh.position.y = 10;
    mesh.position.x = 10 - 2.5;
    this.add(mesh);
    //pao direita tras
    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[11]);
    geometry.faces.push(...faces[11]);
    geometry.computeVertexNormals();
    geometry.computeFaceNormals();

    mesh = new THREE.Mesh( geometry, this.whiteMaterial );
    mesh.position.z = -25 + 3;
    mesh.position.y = 10;
    mesh.position.x = 10 + 2.5;
    this.add(mesh);

    //asa traseira
    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[12]);
    geometry.faces.push(...faces[12]);
    geometry.computeVertexNormals();
    geometry.computeFaceNormals();

    mesh = new THREE.Mesh( geometry, this.redMaterial );
    mesh.position.x = -24.5;
    mesh.position.y = 11.25;
    this.add(mesh);

    //asa grande em cima
    // material = new THREE.MeshPhongMaterial( { color: 0xff0000, wireframe: false} );
    geometry= new THREE.Geometry();
    geometry.vertices.push(...vertices[13]);
    geometry.faces.push(...faces[13]);
    geometry.computeVertexNormals();
    geometry.computeFaceNormals();

    mesh = new THREE.Mesh( geometry, this.redMaterial );
    mesh.position.x = 10;
    mesh.position.y = 20;
    this.add(mesh);


    window.addEventListener('animate', this.rotatePlane);

};
Plane.prototype = Object.create(GraphicalEntity.prototype);

Plane.prototype.changeMaterial=function(){

    if(setBasic){
        this.traverse((child)=> {
            if (child instanceof THREE.Mesh){
                if(isMaterialPhong) {
                    child.material = this.getMaterial(phongMaterial,child.material.color);
                }else {
                    child.material = this.getMaterial(lambertMaterial,child.material.color);
                }
            }
    });

        isMaterialPhong=!isMaterialPhong;
        console.log(isMaterialPhong);
    }
};

let setBasic=true;

Plane.prototype.setBasic=function () {
    if (setBasic) {
        this.traverse((child)=> {
            if (child instanceof THREE.Mesh){
                    child.material = this.getMaterial(basicMaterial,child.material.color);}
        });

        setBasic=!setBasic;
    }else {
        //set to previous material
        isMaterialPhong=!isMaterialPhong;
        setBasic=true;
        this.changeMaterial();
    }
}

Plane.prototype.rotatePlane=function(){
    var axisToRotate;
    let speed = 0.05;
    if (INPUT_UP){
        axisToRotate = new THREE.Vector3(0, 0, 1);
        plane.rotateOnAxis(axisToRotate, speed);
    }
    
    if (INPUT_DOWN){
        axisToRotate = new THREE.Vector3(0, 0, -1);
        plane.rotateOnAxis(axisToRotate, speed);
    }

    if (INPUT_LEFT){
        axisToRotate = new THREE.Vector3(0, 1, 0);
        plane.rotateOnAxis(axisToRotate, speed);
    }

    if (INPUT_RIGHT){
        axisToRotate = new THREE.Vector3(0, -1, 0);
        plane.rotateOnAxis(axisToRotate, speed);
    }

    axisToRotate = new THREE.Vector3(-1, 0, 0);
    plane.children[11].rotateOnAxis(axisToRotate, speed*5);
};

Plane.prototype.getMaterial=function (matArray,color) {
    let material = matArray[colorToMaterialIndext(color)];
    material.wireframe = !this.materialWireframe;
    return material;
};

function colorToMaterialIndext(color) {
    switch (color.getHex()) {
        case 0xff0000:
            return 0;
        case 0x0000ff:
            return 1;
        case 0xffffff:
            return 2;
        default:
            return 0;
    }

}

// var g = new THREE.Geometry(); g.vertices.push( ...geometry2.vertices ); g.faces.push( ...geometry2.faces); g.computeBoundingSphere();
// var material = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
// var mesh = new THREE.Mesh( g, material );