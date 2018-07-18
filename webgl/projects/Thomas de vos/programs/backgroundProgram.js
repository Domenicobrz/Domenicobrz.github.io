function drawBackground(now) {
    gl.clearColor(0,0,0,1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);

    gl.useProgram(backgroundProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, backgroundProgram.buffer);

    gl.enableVertexAttribArray(backgroundProgram.aPosition);
    gl.enableVertexAttribArray(backgroundProgram.aCoord);
    gl.vertexAttribPointer(backgroundProgram.aPosition, 4, gl.FLOAT, false, step * 8, 0);
    gl.vertexAttribPointer(backgroundProgram.aCoord,    4, gl.FLOAT, false, step * 8, step * 4);

    gl.uniformMatrix4fv(backgroundProgram.uPerspective, false, perspective);
    gl.uniformMatrix4fv(backgroundProgram.uModel, false,       model);
    gl.uniformMatrix4fv(backgroundProgram.uView, false,        view);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, backgroundProgram.texture);
    gl.uniform1i(backgroundProgram.uImage, 0);

    gl.drawArrays(gl.TRIANGLES, 0, backgroundProgram.count);
}


function createBackgroundProgram() {
    var Program = getShader(shader_backgroundv, getBackgroundf());
    Program.aPosition = gl.getAttribLocation(Program, "aPosition");
    Program.aCoord    = gl.getAttribLocation(Program, "aCoord"   );

    Program.uPerspective = gl.getUniformLocation(Program, "uPerspective");
    Program.uModel       = gl.getUniformLocation(Program, "uModel");
    Program.uView        = gl.getUniformLocation(Program, "uView");

    Program.uImage       = gl.getUniformLocation(Program, "uImage");

    var imageRatio = 1.50;
    var hr = 1, wr = 1;
    var mult = 0;

    if(imageRatio > screenRatio) {
        wr = imageRatio;
        mult = hwh;
    } else {
        hr = 1 / imageRatio;
        mult = hww;
    }

    var vertices = [
        -mult * wr, -mult * hr, -10, 1,    0, 0, 0, 0,
        +mult * wr, -mult * hr, -10, 1,    1, 0, 0, 0,
        -mult * wr, +mult * hr, -10, 1,    0, 1, 0, 0,

        -mult * wr, +mult * hr, -10, 1,    0, 1, 0, 0,
        +mult * wr, -mult * hr, -10, 1,    1, 0, 0, 0,
        +mult * wr, +mult * hr, -10, 1,    1, 1, 0, 0
    ];
    
    Program.count = vertices.length / 8;

    Program.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    Program.texture = get_texture('assets/bgvideoposter.jpg');

    backgroundProgram = Program;
}
