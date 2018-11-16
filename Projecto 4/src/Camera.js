'use strict';
//material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });



var Camera = function (aspectRatio, renderer, scene) {
    GraphicalEntity.call(this);


    this.camera = new THREE.PerspectiveCamera( 45, aspectRatio, 1, 1000 );
    this.CAMERA_POS=[100,120,100];
    
   

    this.camera.position.set(...this.CAMERA_POS);
    this.camera.lookAt(0,0,0);

    this.control = new THREE.TrackballControls(this.camera, renderer.domElement);
    this.control.rotateSpeed = 3.0;
    this.control.zoomSpeed = 3.0;
    this.control.panSpeed = 3.0;
    this.control.addEventListener('change', trackballRender);
    

    this.add(this.camera);
    this.trackballAnimate=()=> {
        requestAnimationFrame(this.trackballAnimate.bind(this));
        this.control.update();
    }
    this.trackballAnimate();

    this.animate=()=>{
        //requestAnimationFrame(trackballAnimate);
        //this.control.update();       


        deltaTime=clock.getDelta();

        this.rotateY(-0.005);
        //this.camera.lookAt(0,0,0);
        // ball.applyMatrix(matrix);

    }


    function trackballRender() {
        renderer.render(scene, this.camera);
    }


};


Camera.prototype = Object.create(GraphicalEntity.prototype);