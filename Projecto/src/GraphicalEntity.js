var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });


var GraphicalEntity = function () {
    THREE.Group.call(this);
};
GraphicalEntity.prototype = Object.create(THREE.Group.prototype);

GraphicalEntity.prototype.test= function(a) {
    console.log("sup",a);
};