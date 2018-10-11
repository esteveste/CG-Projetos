var GraphicalEntity = function () {
    THREE.Group.call(this);

    this.materialWireframe=false;
};
GraphicalEntity.prototype = Object.create(THREE.Group.prototype);


GraphicalEntity.prototype.changeWireframe= function() {
    this.traverse((child)=> {
        if (child instanceof THREE.Mesh){
            child.material.wireframe = this.materialWireframe;
        }
    });

    this.materialWireframe=!this.materialWireframe;
};