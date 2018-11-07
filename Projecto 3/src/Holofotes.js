'use strict';


var Holofotes = function () {
    GraphicalEntity.call(this);
    //var slight;
    var slight_positions = [[-50, 50, 50], [-50, 50, -50], [50, 50, 50], [50, 50, -50]];
    var look_at = [[-100, 0, 100], [-100, 0, -100], [100, 0, 100], [100, 0, -100]];


    /*global_light = new THREE.DirectionalLight(0xffffff,SUN_INTENSITY);
    global_light.position.set(1,1,1).normalize();
    global_light.shadowCameraVisible = true;
    global_light.shadowCameraNear = 1;
    global_light.shadowCameraFar = 150;
    global_light.castshadow = true;
    global_light.castShadow=true;
    // global_light.position.set( 0, 1, 1 ).normalize();
    this.add(global_light);*/

    for (let i=0; i<4; i++){
        var geometry = new THREE.CylinderGeometry( 0, 4, 10, 32 );
        var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
        var cylinder = new THREE.Mesh( geometry, material );
        var geometry = new THREE.SphereGeometry( 4, 4, 32);
        var material = new THREE.MeshBasicMaterial( {color: 0x166456} );
        var sphere = new THREE.Mesh( geometry, material );
        cylinder.position.set(...slight_positions[i]);
        cylinder.lookAt(...look_at[i]);
        //cylinder.lookAt(new THREE.Vector3(0,0,0));
        sphere.position.set(slight_positions[i][0]-5,slight_positions[i][1]-7,slight_positions[i][2]-5,);
        this.add( cylinder );
        this.add(sphere);
    }

};
Holofotes.prototype = Object.create(GraphicalEntity.prototype);

