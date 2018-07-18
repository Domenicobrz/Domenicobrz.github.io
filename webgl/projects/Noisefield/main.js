window.addEventListener('load', pageInit);


var step = Float32Array.BYTES_PER_ELEMENT;
var time = 1;

function pageInit() {
    var canvas = document.getElementById("canvas");
	canvas.width  = innerWidth;
	canvas.height = innerHeight;

	var names = ["webgl", "experimental-webgl"];

	for(var i in names)
    {
        try 
        {
            gl = canvas.getContext(names[i], { alpha: false, preserveDrawingBuffer: true });

            if (gl && typeof gl.getParameter == "function") 
            {
                // WebGL is enabled 
                break;
            }
        } catch(e) { }
    }

    if(gl === null)
        alert("could not initialize WebGL");

    var ext = gl.getExtension('OES_texture_float');


    //alert("high precision supported: " + highpSupported);

    createPerlinNoiseFBO();
    createParticlesFBOs();
    
    createPerlinNoiseProgram();
    createParticlePositionProgram();
    createDrawParticlesProgram();

    createDrawToScreenProgram();

    initControls();


    window.addEventListener('keydown', function(e) {
        if(e.key == 'k') {
            time += 0.1;
        }
    });



    animate(0);
}

var then = 0;
function animate(now) {
    requestAnimationFrame(animate);

    now *= 0.001;
    var deltatime = now - then;
    then = now;

    animateEffectController(now, deltatime);
    drawNoise(now);
    computeParticlesPositions();
    DrawParticles();
    // drawNoiseToScreen();
}

function initControls() {
    var gui = new dat.GUI();
    var params  = gui.addFolder('Params');
    var animations = gui.addFolder('Animation');


    // // single ray preset
    // window.effectController = {
    //     scaleMult: 1.8,
    //     scaleAdd: 0,
    //     finalOffsetX: 0.5,
    //     finalOffsetY: 0.5,
    //     finalSinMult: 0.016,
    //     antiSinMult: 0.025,
    //     antiSinAmp: 0.2,
    //     basicAmplitude: 0.265,
    //     ampMult: 1,
    //     timeCrack: 1,
    //     sineShifter: 0,
    //     powMultInt: 0.3,
    //     powMult: 0.2,           // this will be used internally, don't attach to dat.gui
    // };
    
    // single ray preset
    window.effectController = {
        scaleMult: 1.8 + brand(1.16),
        scaleAdd: 0 + brand(0.6),
        finalOffsetX: 0.5,
        finalOffsetY: 0.5,
        finalSinMult: 0.016 + brand(0.016),
        antiSinMult: 0.025 + brand(0.016),
        antiSinAmp: 0.2 + brand(0.16),
        basicAmplitude: 0.265 + brand(0.16),
        ampMult: 1,
        timeCrack: 1,
        sineShifter: 0 + brand(10.6),
        powMultInt: 0.3 + brand(0.6),
        powMult: 0.2,           // this will be used internally, don't attach to dat.gui
    };

    window.animController = {
        animScaleMult: false,
        animScaleAdd: false,
        animFinalOffsetX: false,
        animBasicAmplitude: false,
        animPowMultInt: false
    };


    params.add(effectController, "scaleMult", 0, 10);
    params.add(effectController, "scaleAdd", 0, 10);
    params.add(effectController, "finalOffsetX", 0, 20.0);
    params.add(effectController, "finalOffsetY", 0, 20.0);
    params.add(effectController, "finalSinMult", 0.001, 0.1);
    params.add(effectController, "antiSinMult", 0, 0.05);
    params.add(effectController, "antiSinAmp", 0, 10);
    params.add(effectController, "basicAmplitude", 0.01, 3);
    params.add(effectController, "ampMult", 0.01, 3);
    params.add(effectController, "timeCrack", 0.7, 1.3);
    params.add(effectController, "sineShifter", 0, 5);
    params.add(effectController, "powMultInt", 0, 1).onChange(function(value) {
        effectController.powMult = Math.pow(Math.E, (value * 2.0 - 1.0) * 4); 
    });


    for(var animation in window.animController) {
        animations.add(animController, animation);
    }

    gui.close();
}



function animateEffectController(now, deltatime) {

    if(animController.animScaleMult) 
        effectController.scaleMult += Math.sin(now) * 0.01;
    if(animController.animScaleAdd) 
        effectController.scaleAdd += Math.sin(now + 1) * 0.01;
    if(animController.animFinalOffsetX) 
        effectController.finalOffsetX += deltatime * 0.5;
    if(animController.animBasicAmplitude) 
        effectController.basicAmplitude += Math.sin(now) * 0.003;
    if(animController.animPowMultInt) 
        effectController.powMult = Math.pow(Math.E, (effectController.powMultInt * 2.0 - 1.0) * 4 + Math.sin(now));
    
}


window.addEventListener('wheel', function() {
    effectController.finalOffsetY -= 0.25;
});

var lastClientX = undefined;
var lastClientY = undefined;
window.addEventListener('mousemove', function(e) {
    if(lastClientX === undefined) lastClientX = e.clientX;
    if(lastClientY === undefined) lastClientY = e.clientY;
    var deltaX = e.clientX - lastClientX;
    var deltaY = lastClientY - e.clientY ;
    lastClientX = e.clientX;
    lastClientY = e.clientY;

    effectController.finalOffsetX += deltaX * 0.0015;
    effectController.finalOffsetY += deltaY * 0.0015;
});






function brand(val) {
    return Math.random() * val * 2 - val
}