function draw_background(now, deltatime) {

    gl.useProgram(BackgroundProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, BackgroundProgram.buffer);
    gl.enableVertexAttribArray(BackgroundProgram.a1);
    gl.vertexAttribPointer(BackgroundProgram.a1, 4, gl.FLOAT, false, 0, 0);

    gl.uniform1f(BackgroundProgram.uTime, now);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
}

function draw_static_background(now, deltatime) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, FBOsoffscreen[FRAMEBUFFER.RENDERBUFFER]);
    
    gl.clearColor(0.115, 0.115, 0.115, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

function create_background_program() {

    var Program = getShader(backgroundv, backgroundf, false);
    Program.a1  = gl.getAttribLocation(Program, "pos");

    Program.uTime = gl.getUniformLocation(Program, "uTime");

    var vertices = [
        -1, -1, 0, 1,
        +1, -1, 0, 1,
        -1, +1, 0, 1,

        -1, +1, 0, 1,
        +1, -1, 0, 1,
        +1, +1, 0, 1
    ];

    Program.buffer  = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    window.BackgroundProgram = Program;
}


