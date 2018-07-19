function postprocess_blit_in_main_FBO(now, deltatime) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

	gl.useProgram(PostProcessBlitInMainProgram);
	gl.enableVertexAttribArray(PostProcessBlitInMainProgram.a1);
	gl.enableVertexAttribArray(PostProcessBlitInMainProgram.a2);
	gl.enableVertexAttribArray(PostProcessBlitInMainProgram.a3);

    gl.bindBuffer(gl.ARRAY_BUFFER, PostProcessBlitInMainProgram.buffer);
	gl.vertexAttribPointer(PostProcessBlitInMainProgram.a1, 2, gl.FLOAT, false, step * 5, 0);
	gl.vertexAttribPointer(PostProcessBlitInMainProgram.a2, 2, gl.FLOAT, false, step * 5, step * 2);
	gl.vertexAttribPointer(PostProcessBlitInMainProgram.a3, 1, gl.FLOAT, false, step * 5, step * 4);



    // Blit framebuffers, no Multisample texture 2d in WebGL 2
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, FBOsoffscreen[FRAMEBUFFER.RENDERBUFFER]);
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, FBOsoffscreen[FRAMEBUFFER.COLORBUFFER]);
    gl.clearBufferfv(gl.COLOR, 0, [0.0, 0.0, 0.0, 1.0]);
    gl.blitFramebuffer(
        0, 0, innerWidth, innerHeight,
        0, 0, innerWidth, innerHeight,
        gl.COLOR_BUFFER_BIT, gl.NEAREST
    );

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);






			gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, FBOsoffscreen.texture);
        gl.generateMipmap(gl.TEXTURE_2D);    
	gl.uniform1i(PostProcessBlitInMainProgram.uImage, 0);



    var mouseSpeed = mouseController.postProcessVelocity * 0.07;

    if(mouseSpeed < 0.3) mouseSpeed = 0;
    if(mouseSpeed > 0.3) mouseSpeed = mouseSpeed - 0.3;
    if(mouseSpeed > 3.0) mouseSpeed = 3.0;


    gl.uniform1f(PostProcessBlitInMainProgram.uTime, now);
    gl.uniform1f(PostProcessBlitInMainProgram.uMouseSpeed, mouseSpeed);






    // gl.blendFunc(gl.ONE, gl.ONE);
    // gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.disable(gl.BLEND);
	gl.drawArrays(gl.TRIANGLES, 0, 6);
    // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
}


function create_postprocess_blit_in_main_FBO_program() {
    var Program = getShader(postProcBlitv, postProcBlitf, false);
 	Program.a1 = gl.getAttribLocation(Program, "pos");
 	Program.a2 = gl.getAttribLocation(Program, "coord");
 	Program.a3 = gl.getAttribLocation(Program, "id");

 	Program.uTime  = gl.getUniformLocation(Program, "uTime");
 	Program.uImage = gl.getUniformLocation(Program, "uImage");
 	Program.uMouseSpeed = gl.getUniformLocation(Program, "uMouseSpeed");

 	var vertices = [
		-1.0, -1.0, 0.0, 0.0, 0,
		-1.0, +1.0, 0.0, 1.0, 0,
		+1.0, -1.0, 1.0, 0.0, 0,
 
		+1.0, -1.0, 1.0, 0.0, 0,
		-1.0, +1.0, 0.0, 1.0, 0,
		+1.0, +1.0, 1.0, 1.0, 0
	];

 	Program.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    //assegnalo così puoi usare il nome che vuoi quando serve
    window.PostProcessBlitInMainProgram = Program;
}

// function create_offscreen_FBOs() {
//     var FBO = gl.createFramebuffer();
//     gl.bindFramebuffer(gl.FRAMEBUFFER, FBO);

//     FBO.texture = gl.createTexture();

//     gl.bindTexture(gl.TEXTURE_2D, FBO.texture);
//     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
//     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
//     // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR_MIPMAP_LINEAR);
//     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
//     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
//     // gl.texParameteri(gl.TEXTURE_2D, gl.GENERATE_MIPMAP, gl.TRUE);
//     gl.generateMipmap(gl.TEXTURE_2D);

//     gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, innerWidth, innerHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

//     gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, FBO.texture, 0);
    
//     gl.bindTexture(gl.TEXTURE_2D, null);
//     gl.bindFramebuffer(gl.FRAMEBUFFER, null);

//     window.FBOoffscreen = FBO;
// }

function create_offscreen_multisampleFBOs() {
        window.FRAMEBUFFER_SIZE = {
            x: innerWidth,
            y: innerHeight
        };

        var texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, FRAMEBUFFER_SIZE.x, FRAMEBUFFER_SIZE.y, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        gl.bindTexture(gl.TEXTURE_2D, null);

        // -- Init Frame Buffers
        window.FRAMEBUFFER = {
            RENDERBUFFER: 0,
            COLORBUFFER: 1
        };

        var framebuffers = [
            gl.createFramebuffer(),
            gl.createFramebuffer()
        ];

        var colorRenderbuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, colorRenderbuffer);
        gl.renderbufferStorageMultisample(gl.RENDERBUFFER, 4, gl.RGBA8, FRAMEBUFFER_SIZE.x, FRAMEBUFFER_SIZE.y);


        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffers[FRAMEBUFFER.RENDERBUFFER]);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.RENDERBUFFER, colorRenderbuffer);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);


        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffers[FRAMEBUFFER.COLORBUFFER]);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    
        window.FBOsoffscreen = framebuffers;
        FBOsoffscreen.texture = texture;
        FBOsoffscreen.colorRenderBuffer = colorRenderbuffer;
}