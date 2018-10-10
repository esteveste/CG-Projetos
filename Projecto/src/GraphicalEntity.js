// var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });


var GraphicalEntity = function () {
    THREE.Group.call(this);
    this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
};
GraphicalEntity.prototype = Object.create(THREE.Group.prototype);

GraphicalEntity.prototype.changeWireframe= function() {
    this.material.wireframe=!this.material.wireframe;
};

GraphicalEntity.prototype.test= function(a) {
    console.log("sup",a);
};