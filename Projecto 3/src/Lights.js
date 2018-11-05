let isLightLit = false;

var Lights = function () {
    GraphicalEntity.call(this);



    global_light = new THREE.DirectionalLight(0xffffff,0.6);
    global_light.position.set(1,1,1).normalize();
    global_light.shadowCameraVisible = true;
    global_light.shadowCameraNear = 1;
    global_light.shadowCameraFar = 150;
    global_light.castshadow = true;
    global_light.castShadow=true;
    // global_light.position.set( 0, 1, 1 ).normalize();
    this.add(global_light);

    var slight = new THREE.SpotLight( 0xffffff,1,90,Math.PI/5,10 );
    slight.position.set(0,50,0);
    slight.target.position.set(0,0,0);
    slight.castShadow = true;
    slight.penumbra=.2;
    this.add(slight);
    this.add(slight.target);
    let spotter = new THREE.SpotLightHelper(slight);
    this.add(spotter);

};
Lights.prototype = Object.create(GraphicalEntity.prototype);

Lights.prototype.changeLightCalc=function(){

};