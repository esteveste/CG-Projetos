'use strict';

let global_light,isLightLit = true,SUN_INTENSITY=0.6;

var Lights = function () {
    GraphicalEntity.call(this);
    var slight;

    global_light = new THREE.DirectionalLight(0xffffff,SUN_INTENSITY);
    global_light.position.set(1,1,1);
    this.add(global_light);

};
Lights.prototype = Object.create(GraphicalEntity.prototype);
