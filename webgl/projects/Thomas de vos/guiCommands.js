function EffectsController() {
    // this.streamSpeed = 0.015;
    // this.mouseStrenght = 0.2;
    // this.waveAperture  = 0.005;
    // this.rotationOffset  = 0.0045;
    // this.rotationOffsetSpeed = 1;
    // this.focusCircleRadius = 5;
    // this.colorGradientDistance = 4;
    // this.pointsCount = 850;
    // this.fireRate = 10;
    // this.timeBeforeFocus = 0.5;
    // this.toggleFocusCircle = true;
    // this.intersectionSubset = false;
    // this.pointSize = 1;

    this.streamSpeed = 0.015;
    this.mouseStrenght = 0.1;
    this.waveAperture  = 0.0079;
    this.rotationOffset  = 0.0051;
    this.rotationOffsetSpeed = 1.5;
    this.focusCircleRadius = 1;
    this.colorGradientDistance = 0.5;
    this.pointsCount = 750;
    this.fireRate = 8.7;
    this.timeBeforeFocus = 0.5;
    this.toggleFocusCircle = true;
    this.intersectionSubset = false;
    this.pointSize = 0.4;


    this.reset = function() {
        this.streamSpeed = 0.015;
        this.mouseStrenght = 0.1;
        this.waveAperture  = 0.0079;
        this.rotationOffset  = 0.0051;
        this.rotationOffsetSpeed = 1.5;
        this.focusCircleRadius = 1;
        this.colorGradientDistance = 0.5;
        this.pointsCount = 850;
        this.fireRate = 8.7;
        this.timeBeforeFocus = 0.5;
        this.toggleFocusCircle = true;
        this.intersectionSubset = false;
        this.pointSize = 0.4;  
    };
}

var effectsController = new EffectsController();


function initGUI() {

    // don't create controls
    // return;


    // var gui  = new dat.GUI();
    // var f1 = gui.addFolder('Stream Options');

    // // gui.add(effectsController, 'message');
    // f1.add(effectsController, 'streamSpeed', 0.005, 0.03).listen();
    // f1.add(effectsController, 'waveAperture', 0.001, 0.01).listen();
    // f1.add(effectsController, 'rotationOffset', 0.001, 0.025).listen();
    // f1.add(effectsController, 'rotationOffsetSpeed', 0.1, 3).listen();
    // f1.add(effectsController, 'fireRate', 0, 10).listen();

    // f1.open();


    // var f2 = gui.addFolder('Mouse Options');
    // f2.add(effectsController, 'focusCircleRadius', 1, 10).listen();
    // f2.add(effectsController, 'timeBeforeFocus', 0, 3).listen();
    // f2.add(effectsController, 'toggleFocusCircle').listen();
    // f2.add(effectsController, 'mouseStrenght', 0.005, 0.7).listen();

    // f2.open();

    // var f3 = gui.addFolder('Rendering Options');
    // f3.add(effectsController, 'colorGradientDistance', 0, 5).listen();
    // f3.add(effectsController, 'pointsCount', 100, 1000).step(1).onChange(function(value) {
    //     pointsNum = value;
    //     generateRandomPoints(value);
    //     updateLinesBuffer();
    // });    
    // f3.add(effectsController, 'pointSize', 0.2, 3).listen();
    // f3.add(effectsController, 'intersectionSubset').listen();
    // f3.open();

    // gui.add(effectsController, 'reset');
    // gui.close();
}