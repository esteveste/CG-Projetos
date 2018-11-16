'use strict';

var Lights = function () {
    GraphicalEntity.call(this);
    var slight;
    var dlight;

    dlight = new THREE.DirectionalLight(0xffffff, 1);
    dlight.position.set(-50, 50, -50);
    dlight.target.position.set(0,0,0);
    
    slight = new THREE.SpotLight(0xffffff,2,140,Math.PI/5,1 );
    slight.position.set(50, 50, 50);
    slight.target.position.set(0,0,0);
    slight.castShadow = true;
    slight.penumbra=.2;

    this.add(slight);
    this.add(dlight);
};
Lights.prototype = Object.create(GraphicalEntity.prototype);

Lights.prototype.changeDLightOnOff=function(){
    if (this.children[1].intensity == 0)
        this.children[1].intensity = 1;
    else
        this.children[1].intensity = 0;
};

Lights.prototype.changeSLightOnOff=function(){
    if (this.children[0].intensity == 0)
        this.children[0].intensity = 1;
    else
        this.children[0].intensity = 0;
};
Lights.prototype.reset=function () {
    this.children[0].intensity = 1;
    this.children[1].intensity = 1;
}

