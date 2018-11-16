var GraphicalEntity = function () {
    THREE.Group.call(this);

    this.materialWireframe=true;
    this.axes = false;
};
GraphicalEntity.prototype = Object.create(THREE.Group.prototype);


GraphicalEntity.prototype.changeWireframe= function() {
    this.traverse((child)=> {
        if (child instanceof THREE.Mesh){
            this.material[0].wireframe =this.materialWireframe;
            this.material[1].wireframe =this.materialWireframe;
            child.material.wireframe = this.materialWireframe;
        }
    });

    this.materialWireframe=!this.materialWireframe;
};