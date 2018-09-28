function Input() {

    this.LEFT=false;this.DOWN=false;this.UP=false;this.RIGHT=false;this.ONE=false;this.TWO=false;this.THREE=false;

    document.onkeydown = function(e){
        e = e || window.event;
        switch(e.which || e.keyCode){
            case 39:
                //left
                this.LEFT=true;
                break;
            case 38:
                //up
                this.UP=true;
                break;
            case 37:
                //right
                this.RIGHT=true;
                break;
            case 40:
                //down
                this.DOWN=true;
                break;
            case 65:
                //A
                this.A=true;
                // material.wireframe=! material.wireframe;
                // if(material){
                //     currentMaterial = material2;
                // }
                // else currentMaterial = material;
                // changeRepresentation();
                break;
            case 49:
                //1
                this.ONE=true;
                cameraSetup(...TOPVIEW);
                renderer.render(scene, camera);
                break;
            case 50:
                //2
                this.TWO=true;
                cameraSetup(...FRONTVIEW);
                renderer.render(scene, camera);
                break;
            case 51:
                //3
                this.THREE=true;
                cameraSetup(...SIDEVIEW);
                renderer.render(scene, camera);
                break;
            default: return;
        }
        e.preventDefault();
    };

    document.onkeyup = function(e){
        e = e || window.event;
        switch(e.which || e.keyCode){
            case 39:
                //left
                this.LEFT=false;
                break;
            case 38:
                //up
                this.UP=false;
                break;
            case 37:
                //right
                this.RIGHT=false;
                break;
            case 40:
                //down
                this.DOWN=false;
                break;
            case 49:
                //1
                this.ONE=false;
                break;
            case 50:
                //2
                this.TWO=false;
                break;
            case 51:
                //3
                this.THREE=false;
                break;
        }
        e.preventDefault();
    }
}