window.addEventListener("load", init);

var gl;
var canvas;

var matrices = [];
var perspective;
var model;
var view;

var outputProgram;
var computeProgram;
var computeFramebuffer;

var mousePos = { x: 0, y: 0 };

function init() {
    canvas = document.getElementById("canvas");
	canvas.width  = canvas.clientWidth;
	canvas.height = canvas.clientHeight;

    gl = canvas.getContext("webgl", { preserveDrawingBuffer: true, alpha: true });

    if(gl === null)
        alert("could not initialize WebGL");

    if (!gl.getExtension("OES_texture_float")) {
        console.error("No OES_texture_float support");
    }

    // if (!gl.getExtension("EXT_color_buffer_float")) {
    //     console.error("FLOAT color buffer not available");
    //     document.body.innerHTML = "This example requires EXT_color_buffer_float which is unavailable on this system.";
    // }
    // if (!gl.getExtension("OES_texture_float_linear")) {
    //     console.error("FLOAT color buffer not available");
    //     document.body.innerHTML = "This example requires EXT_color_buffer_float which is unavailable on this system.";
    // }

    createComputeFramebuffer();

    createComputeProgram();
    createOutputProgram();

    render();

    window.addEventListener("mousemove", function(e) {
        let cbr = canvas.getBoundingClientRect();
        
        mousePos.x = e.clientX - cbr.left;
        if(mousePos.x < 0) mousePos.x = 0;
        if(mousePos.x > canvas.width) mousePos.x = canvas.width;

        mousePos.y = (innerHeight - e.clientY) - (innerHeight - cbr.bottom);
        if(mousePos.y < 0) mousePos.y = 0;
        if(mousePos.y > canvas.height) mousePos.y = canvas.height;        
    });
}

var then = 0;
function render(now) {
    requestAnimationFrame(render);
    
    now *= 0.001;
    var deltatime = now - then;
    then = now;

    drawClouds(now + 6);
    drawOutput();
}

function drawClouds(now) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, computeFramebuffer);

    gl.useProgram(computeProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, computeProgram.buffer);
    
    gl.enableVertexAttribArray(computeProgram.aPosition);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, computeProgram.noiseTexture);
    gl.uniform1i(computeProgram.uNoiseTexture, 0);

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, computeProgram.pebblesTexture);
    gl.uniform1i(computeProgram.uPebbles, 1);

    gl.uniform1f(computeProgram.uTime, now);
    gl.uniform2f(computeProgram.uResolution, canvas.width, canvas.height);
    gl.uniform2f(computeProgram.uMouse, mousePos.x, mousePos.y);

    gl.enable(gl.BLEND);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
}

function createComputeFramebuffer() {
    var framebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    gl.activeTexture(gl.TEXTURE0);

    framebuffer.texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, framebuffer.texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, canvas.width, canvas.height, 0, gl.RGBA, gl.FLOAT, null);

    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, framebuffer.texture, 0);

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    computeFramebuffer = framebuffer;
}

function createComputeProgram() {
    var Program = getShader(computeVert, computeFrag);

    Program.aPosition    = gl.getAttribLocation(Program, "aPosition");

    Program.uPrevBuffer  = gl.getUniformLocation(Program, "uPrevBuffer");
    Program.uPebbles     = gl.getUniformLocation(Program, "uPebbles");
    Program.uNoise       = gl.getUniformLocation(Program, "uNoise");
    Program.uTime        = gl.getUniformLocation(Program, "uTime");
    Program.uResolution  = gl.getUniformLocation(Program, "uResolution");
    Program.uMouse       = gl.getUniformLocation(Program, "uMouse");

    Program.pebblesTexture = getTexture("assets/textures/pebbles.jpg");

    Program.buffer = gl.createBuffer();

    var vertices = [
        -1, -1,
        -1, +1,
        +1, -1,
        
        +1, -1,
        -1, +1,
        +1, +1
    ];

    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


    let size = 256;
    let noiseTextureBuffer = new Uint8Array(size * size * 4);
    for (let i = 0; i < size * size * 4; i++) {
        // noiseTextureBuffer[i] = Math.sin(i * 0.01) * 75 + 75 + Math.random() * 125; //Math.floor(Math.random() * 255);
        noiseTextureBuffer[i] = Math.random() * 255; //Math.floor(Math.random() * 255);
    }
    Program.noiseTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, Program.noiseTexture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, size, size, 0, gl.RGBA, gl.UNSIGNED_BYTE, noiseTextureBuffer);


    computeProgram = Program;
}

function createOutputProgram() {
    var Program = getShader(outputVert, outputFrag);

    Program.aPosition = gl.getAttribLocation(Program, "aPosition");
    Program.uComputedImage = gl.getUniformLocation(Program, "uComputedImage");

    Program.buffer = gl.createBuffer();

    var vertices = [
        -1, -1,
        -1, +1,
        +1, -1,
        
        +1, -1,
        -1, +1,
        +1, +1
    ];

    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    outputProgram = Program;
}

function drawOutput() {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.useProgram(outputProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, outputProgram.buffer);
    
    gl.enableVertexAttribArray(outputProgram.aPosition);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, computeFramebuffer.texture);
    gl.uniform1i(outputProgram.uComputedImage, 0);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
}