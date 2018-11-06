var INPUT_UP,INPUT_DOWN,INPUT_LEFT,INPUT_RIGHT,INPUT_A,INPUT_1,INPUT_2,INPUT_3;

function Input() {

    document.onkeydown = function(e){
        e = e || window.event;
        switch(e.which || e.keyCode){
            case 39:
                //left
                INPUT_LEFT=true;
                break;
            case 38:
                //up
                INPUT_UP=true;
                break;
            case 37:
                //right
                INPUT_RIGHT=true;
                break;
            case 40:
                //down
                INPUT_DOWN=true;
                break;
            case 65:
                //A
                INPUT_A = true;
                sceneManager.changeWireframe();
                break;
            case 49:
                //1
                lights.changeLightOnOff(0);
                break;
            case 50:
                //2
                lights.changeLightOnOff(1);
                break;
            case 51:
                //3
                lights.changeLightOnOff(2);
                break;
            case 52:
                //4
                lights.changeLightOnOff(3);
                break;
            case 69:
                //e
                break;
            case 71:
                //g
                plane.changeMaterial();
                break;
            case 76:
                //l
                plane.setBasic();
                break;
            case  78:
                //n
                lights.changeSun();
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
                INPUT_LEFT=false;
                break;
            case 38:
                //up
                INPUT_UP=false;
                break;
            case 37:
                //right
                INPUT_RIGHT=false;
                break;
            case 40:
                //down
                INPUT_DOWN=false;
                break;
            case 49:
                //1
                INPUT_1=false;
                break;
            case 50:
                //2
                INPUT_2=false;
                break;
            case 51:
                //3
                INPUT_3=false;
                break;
        }
        e.preventDefault();
    }
}