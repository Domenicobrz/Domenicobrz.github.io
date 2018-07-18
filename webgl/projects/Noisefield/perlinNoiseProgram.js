function drawNoise(now) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, PerlinNoiseFBO);

    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(PerlinNoiseProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, PerlinNoiseProgram.buffer);
    gl.enableVertexAttribArray(PerlinNoiseProgram.a1);
    gl.enableVertexAttribArray(PerlinNoiseProgram.a2);
    gl.vertexAttribPointer(PerlinNoiseProgram.a1, 3, gl.FLOAT, false, step * 6, 0);
    gl.vertexAttribPointer(PerlinNoiseProgram.a2, 3, gl.FLOAT, false, step * 6, step * 3);

    gl.uniform1f(PerlinNoiseProgram.time, now);
    gl.uniform1f(PerlinNoiseProgram.screenRatio, innerWidth / innerHeight);

    gl.uniform1f(PerlinNoiseProgram.scaleMult, effectController.scaleMult);
    gl.uniform1f(PerlinNoiseProgram.scaleAdd, effectController.scaleAdd);
    gl.uniform2f(PerlinNoiseProgram.finalOffset, effectController.finalOffsetX, effectController.finalOffsetY);
    gl.uniform1f(PerlinNoiseProgram.antiSinMult, effectController.antiSinMult);
    gl.uniform1f(PerlinNoiseProgram.antiSinAmp, effectController.antiSinAmp);
    gl.uniform1f(PerlinNoiseProgram.powMult, effectController.powMult);
    gl.uniform1f(PerlinNoiseProgram.basicAmplitude, effectController.basicAmplitude);
    gl.uniform1f(PerlinNoiseProgram.ampMult, effectController.ampMult);
    gl.uniform1f(PerlinNoiseProgram.timeCrack, effectController.timeCrack);
    gl.uniform1f(PerlinNoiseProgram.sineShifter, effectController.sineShifter);
    gl.uniform1f(PerlinNoiseProgram.finalSinMult, effectController.finalSinMult);
    

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, PerlinNoiseProgram.noiseTexture);
    gl.uniform1i(PerlinNoiseProgram.randNoise, 0);

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, PerlinNoiseProgram.secondNoiseTexture);
    gl.uniform1i(PerlinNoiseProgram.secondRandNoise, 1);

    gl.drawArrays(gl.TRIANGLES, 0, PerlinNoiseProgram.nverts);
}



function createPerlinNoiseProgram() {

    //this query should run before running the getShader utility
    var highp = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);
    window.highpSupported = highp.precision != 0;

    var Program = getShader("mainv", "mainf", false);
    Program.a1  = gl.getAttribLocation(Program, "pos");
    Program.a2  = gl.getAttribLocation(Program, "color");

    Program.time       = gl.getUniformLocation(Program, "time");
    Program.randNoise  = gl.getUniformLocation(Program, "randNoise");
    Program.secondRandNoise  = gl.getUniformLocation(Program, "secondRandNoise");
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

    window.PerlinNoiseProgram = Program;

    createNoiseTexture();
    createSecondNoiseTexture();
}


var PerlinNoiseFBO;
//this renderbuffer provides DEPTH ONLY - change to include stencilBuffer
function createPerlinNoiseFBO() {
	var FBO = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, FBO);

    FBO.texture = gl.createTexture();

    gl.bindTexture(gl.TEXTURE_2D, FBO.texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    //gl.generateMipmap(gl.TEXTURE_2D);

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, canvas.width, canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, FBO.texture, 0);
    
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    PerlinNoiseFBO = FBO;
}