'use strict';

var Lights = function () {
    GraphicalEntity.call(this);
    var slight;
    var dlight;

    dlight = new THREE.DirectionalLight(0xffffff, 0.5);
    dlight.position.set(-50, 50, -50);
    dlight.target.position.set(0,0,0);
    
    slight = new THREE.SpotlightLight(0xffffff,2,140,Math.PI/5,1 );
    slight.position.set(50, 50, 50);
    slight.target.position.set(0,0,0);
    slight.castShadow = true;
    slight.penumbra=.2;


    this.add(slight);
    this.add(dlight);
};
Lights.prototype = Object.create(GraphicalEntity.prototype);

Lights.prototype.changeDLightOnOff=function(){
    if (dlight.intensity == 0)
        dlight.intensity = 1;
    else
        dlight.intensity = 0;
};

Lights.prototype.changeSLightOnOff=function(){
    if (slight.intensity == 0)
        slight.intensity = 1;
    else
        slight.intensity = 0;
};
