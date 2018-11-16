'use strict';
//material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });



var Camera = function (aspectRatio, renderer, scene) {
    GraphicalEntity.call(this);


    this.camera = new THREE.PerspectiveCamera( 45, aspectRatio, 1, 1000 );
    this.CAMERA_POS=[100,120,100];



    this.camera.position.set(...this.CAMERA_POS);
    this.camera.lookAt(0,0,0);



    this.add(this.camera);
  


    this.animate=()=>{
        //requestAnimationFrame(trackballAnimate);
        //this.control.update();       


        deltaTime=clock.getDelta();

        this.rotation.y -= 0.5*deltaTime;
        //this.camera.lookAt(0,0,0);
        // ball.applyMatrix(matrix);

    }

    this.reset=()=>{
        this.rotation.y=0;
    }

};


Camera.prototype = Object.create(GraphicalEntity.prototype);