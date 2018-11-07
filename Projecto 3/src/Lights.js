'use strict';

let global_light,isLightLit = true,SUN_INTENSITY=0.6;

var Lights = function () {
    GraphicalEntity.call(this);
    var slight;
    var slight_positions = [[-50, 50, 50], [-50, 50, -50], [50, 50, 50], [50, 50, -50]];


    global_light = new THREE.DirectionalLight(0xffffff,SUN_INTENSITY);
    global_light.position.set(1,1,1).normalize();
    global_light.shadowCameraVisible = true;
    global_light.shadowCameraNear = 1;
    global_light.shadowCameraFar = 150;
    global_light.castshadow = true;
    global_light.castShadow=true;
    // global_light.position.set( 0, 1, 1 ).normalize();
    this.add(global_light);

    for (let i=0; i<4; i++){
        slight = new THREE.SpotLight( 0xffffff,1,90,Math.PI/5,10 );
        slight.position.set(...slight_positions[i]);
        slight.target.position.set(0,0,0);
        slight.castShadow = true;
        slight.penumbra=.2;
        this.add(slight);
        this.add(slight.target);
        //let spotter = new THREE.SpotLightHelper(slight);
        //this.add(spotter);
    }

};
Lights.prototype = Object.create(GraphicalEntity.prototype);

Lights.prototype.changeSun=function(){
    if(isLightLit){
        global_light.intensity=0;
    }else{
        global_light.intensity=SUN_INTENSITY;
    }
    isLightLit=!isLightLit;
};

Lights.prototype.changeLightOnOff=function(lightN){
    if(this.children[lightN*2 + 1].intensity == 0)
        this.children[lightN*2 + 1].intensity = 1;
    else
        this.children[lightN*2 + 1].intensity = 0;
};