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
            gl = canvas.getContext(names[i], { });

            if (gl && typeof gl.getParameter == "function") 
            {
                // WebGL is enabled 
                break;
            }
        } catch(e) { }
    }

    if(gl === null)
        alert("could not initialize WebGL");


    //alert("high precision supported: " + highpSupported);

    createMainProgram();
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
}

function drawNoise(now) {
    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(MainProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, MainProgram.buffer);
    gl.enableVertexAttribArray(MainProgram.a1);
    gl.enableVertexAttribArray(MainProgram.a2);
    gl.vertexAttribPointer(MainProgram.a1, 3, gl.FLOAT, false, step * 6, 0);
    gl.vertexAttribPointer(MainProgram.a2, 3, gl.FLOAT, false, step * 6, step * 3);

    gl.uniform1f(MainProgram.time, Math.sin(time) * 0.5 + 0.5);
    gl.uniform1f(MainProgram.screenRatio, innerWidth / innerHeight);

    gl.uniform1f(MainProgram.scaleMult, effectController.scaleMult);
    gl.uniform1f(MainProgram.scaleAdd, effectController.scaleAdd);
    gl.uniform2f(MainProgram.finalOffset, effectController.finalOffsetX, effectController.finalOffsetY);
    gl.uniform1f(MainProgram.antiSinMult, effectController.antiSinMult);
    gl.uniform1f(MainProgram.antiSinAmp, effectController.antiSinAmp);
    gl.uniform1f(MainProgram.powMult, effectController.powMult);
    gl.uniform1f(MainProgram.basicAmplitude, effectController.basicAmplitude);
    gl.uniform1f(MainProgram.ampMult, effectController.ampMult);
    gl.uniform1f(MainProgram.timeCrack, effectController.timeCrack);
    gl.uniform1f(MainProgram.sineShifter, effectController.sineShifter);
    gl.uniform1f(MainProgram.finalSinMult, effectController.finalSinMult);
    

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, MainProgram.noiseTexture);
    gl.uniform1i(MainProgram.randNoise, 0);

    gl.drawArrays(gl.TRIANGLES, 0, MainProgram.nverts);
}







function createMainProgram() {

    //this query should run before running the getShader utility
    var highp = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);
    window.highpSupported = highp.precision != 0;

    var Program = getShader("mainv", "mainf", false);
    Program.a1  = gl.getAttribLocation(Program, "pos");
    Program.a2  = gl.getAttribLocation(Program, "color");

    Program.time       = gl.getUniformLocation(Program, "time");
    Program.randNoise  = gl.getUniformLocation(Program, "randNoise");
    Program.screenRatio = gl.getUniformLocation(Program, "screenRatio");

    Program.scaleMult = gl.getUniformLocation(Program, "scaleMult");
    Program.scaleAdd = gl.getUniformLocation(Program, "scaleAdd");
    Program.finalOffset = gl.getUniformLocation(Program, "finalOffset");
    Program.antiSinMult = gl.getUniformLocation(Program, "antiSinMult");
    Program.antiSinAmp = gl.getUniformLocation(Program, "antiSinAmp");
    Program.powMult = gl.getUniformLocation(Program, "powMult");
    Program.basicAmplitude = gl.getUniformLocation(Program, "basicAmplitude");
    Program.ampMult = gl.getUniformLocation(Program, "ampMult");
    Program.timeCrack = gl.getUniformLocation(Program, "timeCrack");
    Program.sineShifter = gl.getUniformLocation(Program, "sineShifter");
    Program.finalSinMult = gl.getUniformLocation(Program, "finalSinMult");

    vertices = [
        -1.0, -1.0, 0.0,        1,1,1,
        -1.0, +1.0, 0.0,        1,1,1,
        +1.0, -1.0, 0.0,        1,1,1,

        +1.0, -1.0, 0.0,        1,1,1,
        -1.0, +1.0, 0.0,        1,1,1,
        +1.0, +1.0, 0.0,        1,1,1
    ];

    Program.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    Program.nverts = 6;

    window.MainProgram = Program;

    createNoiseTexture();
}

function createNoiseTexture() {
    var texture = gl.createTexture();

	var array = new Uint8Array(256 * 256 * 4);

	for(var i = 0; i < 256*256; i++) {
		array[i * 4 + 0] = Math.floor( (i * i * i * i * i * i * i + i * i * 214134)   % 255);
		array[i * 4 + 1] = Math.floor( Math.random() * 255.0);
		array[i * 4 + 2] = Math.floor( Math.random() * 255.0);
        // array[i * 4 + 0] = Math.random();
		// array[i * 4 + 1] = Math.random();
		// array[i * 4 + 2] = Math.random();
		array[i * 4 + 3] = 255;
	}

	//erano valori di tipo 225 25 25 225


	gl.bindTexture(gl.TEXTURE_2D, texture);
	//gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 256, 256, 0, gl.RGBA, gl.UNSIGNED_BYTE, array);

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);

	gl.bindTexture(gl.TEXTURE_2D, null);

	MainProgram.noiseTexture = texture;
}




function initControls() {
    var gui = new dat.GUI();
    var params  = gui.addFolder('Params');
    var animations = gui.addFolder('Animation');


    // window.effectController = {
    //     scaleMult: 1.5,
    //     scaleAdd: 2,
    //     finalOffset: 0.5,
    //     antiSinMult: 0.025,
    //     antiSinAmp: 1,
    //     powMult: 0.2,           // this will be used internally, don't attach to dat.gui
    //     powMultInt: 0.3,
    //     basicAmplitude: 0.4,
    //     ampMult: 1.0,
    //     timeCrack: 1,
    //     sineShifter: 0,
    //     finalSinMult: 0.03
    // };


    // single ray preset
    window.effectController = {
        scaleMult: 1.5,
        scaleAdd: 2,
        finalOffsetX: 0.5,
        finalOffsetY: 0.5,
        finalSinMult: 0.016,
        antiSinMult: 0.025,
        antiSinAmp: 0.2,
        basicAmplitude: 0.03,
        ampMult: 1,
        timeCrack: 1,
        sineShifter: 0,
        powMultInt: 0.3,
        powMult: 0.2,           // this will be used internally, don't attach to dat.gui
    };

    window.animController = {
        animScaleMult: false,
        animScaleAdd: true,
        animFinalOffsetX: true,
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
    params.add(effectController, "basicAmplitude", 0.01, 1);
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