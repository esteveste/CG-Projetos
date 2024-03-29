var INPUT_UP,INPUT_DOWN,INPUT_LEFT,INPUT_RIGHT,INPUT_1,INPUT_2,INPUT_3;

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
            case 87:
                //w
                if (sceneManager.freezeFlag)
                    sceneManager.changeWireframe();
                break;
            case 68:
                //d
                if (sceneManager.freezeFlag)
                    lights.changeDLightOnOff();
                break;
            case 80:
                //p
                if (sceneManager.freezeFlag)
                    lights.changeSLightOnOff();
                break;
            case 66:
                //b
                if (sceneManager.freezeFlag)
                    sceneManager.setBallRotation();
                break;
            case 76:
                //l
                if (sceneManager.freezeFlag){
                    board.setBasic();
                    rubik.setBasic();
                    ball.setBasic();
                }
                break;
            case  82:
                //r
                if (!sceneManager.freezeFlag)
                    sceneManager.freeze_time();
                sceneManager.reset();

                break;
            case  83:
                //s
                sceneManager.freeze_time();
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