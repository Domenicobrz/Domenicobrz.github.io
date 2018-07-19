window.addEventListener('load', pageInit);




function pageInit() {
	window.canvas = document.getElementById("canvas");
    canvas.width  = innerWidth;
    canvas.height = innerHeight;



    window.gl = canvas.getContext("webgl2", { });
    if (gl && typeof gl.getParameter == "function") {
        /* WebGL is enabled */
    }
    if(gl === null) alert("could not initialize webGL");

    var ext = gl.getExtension('EXT_color_buffer_float');




    initVue();



    buildScene();
    buildRenderer();
    createRenderFBO();

    createRenderProgram();
    createBlitProgram();
    requestAnimationFrame(render);
}


function render(now) {
    requestAnimationFrame(render);


    renderScene(now);
    blitToScreen(now);
}






function renderScene(now) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, renderFBO);


    gl.useProgram(renderProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, renderProgram.buffer);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);


    gl.uniform1f(renderProgram.uTime, now * 0.001);
    gl.uniform2f(renderProgram.uRand, Math.random(), Math.random());
    gl.uniform1f(renderProgram.uScreenRatio, innerWidth / innerHeight);
    gl.uniform1f(renderProgram.uScreenWidth, innerWidth);
    camera.setUniforms();
    

    gl.enable(gl.BLEND);
    gl.blendFuncSeparate(gl.ONE, gl.ONE, gl.ONE, gl.ONE);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    gl.disable(gl.BLEND);

    app.samples++;
}

function blitToScreen() {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    
    gl.clearColor(0,0,0,1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(blitProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, blitProgram.buffer);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);



    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, renderFBO.texture);
    gl.uniform1i(blitProgram.uResult, 0);

    gl.uniform1f(blitProgram.uSamples, app.samples);
    
    gl.drawArrays(gl.TRIANGLES, 0, 6);
}





function createRenderProgram() {
    var Program = getShader(rendervertex, Renderer);
    
    Program.uTime           = gl.getUniformLocation(Program, 'uTime');
    Program.uRand           = gl.getUniformLocation(Program, 'uRand');
    Program.uScreenRatio    = gl.getUniformLocation(Program, 'uScreenRatio');
    Program.uScreenWidth    = gl.getUniformLocation(Program, 'uScreenWidth');
    Program.uCameraEye      = gl.getUniformLocation(Program, 'uCameraEye');
    Program.uCameraLookAt   = gl.getUniformLocation(Program, 'uCameraLookAt');
    Program.uPrimitives     = gl.getUniformLocation(Program, 'uPrimitives');

    var vertices = [
        -1, -1,
        -1, +1,
        +1, -1,
        +1, -1,
        -1, +1,
        +1, +1
   ];

   Program.buffer = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

   window.renderProgram = Program;
}

function createBlitProgram() {
    var Program = getShader(blitvertex, blitfragment);
    
    var vertices = [
        -1, -1,
        -1, +1,
        +1, -1,
        +1, -1,
        -1, +1,
        +1, +1
   ];

   Program.uResult  = gl.getUniformLocation(Program, 'uResult');
   Program.uSamples = gl.getUniformLocation(Program, 'uSamples');

   Program.buffer = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

   window.blitProgram = Program;
}




function createRenderFBO() {
	var FBO = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, FBO);

    FBO.texture = gl.createTexture();

    gl.bindTexture(gl.TEXTURE_2D, FBO.texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    // gl.generateMipmap(gl.TEXTURE_2D);

    // rgba32f needs the EXT_color_buffer_float extension to be "color-renderable"
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, canvas.width, canvas.height, 0, gl.RGBA, gl.FLOAT, null);

    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, FBO.texture, 0);
    
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    window.renderFBO = FBO;
}














function initVue() {
    window.app = new Vue({
        el: '#statCounter',
        data: {
            samples: 0
        }
    });
}