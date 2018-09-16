function compute_icosahedronTF_lines(now, deltatime) {

    var temp  = IcosahedronLinesTFProgram.buffer;
    IcosahedronLinesTFProgram.buffer = IcosahedronLinesProgram.buffer;
    IcosahedronLinesProgram.buffer   = temp;


    gl.enable(gl.RASTERIZER_DISCARD);
    gl.useProgram(IcosahedronLinesTFProgram);
    gl.enable(gl.DEPTH_TEST);

    gl.bindBuffer(gl.ARRAY_BUFFER, IcosahedronLinesTFProgram.buffer);
    gl.enableVertexAttribArray(IcosahedronLinesTFProgram.a1);
    gl.enableVertexAttribArray(IcosahedronLinesTFProgram.a2);
    gl.enableVertexAttribArray(IcosahedronLinesTFProgram.a3);
    gl.enableVertexAttribArray(IcosahedronLinesTFProgram.a4);
    gl.enableVertexAttribArray(IcosahedronLinesTFProgram.a5);
    gl.enableVertexAttribArray(IcosahedronLinesTFProgram.a6);
    gl.enableVertexAttribArray(IcosahedronLinesTFProgram.a7);
    gl.enableVertexAttribArray(IcosahedronLinesTFProgram.a8);
    gl.enableVertexAttribArray(IcosahedronLinesTFProgram.a9);
    gl.vertexAttribPointer(IcosahedronLinesTFProgram.a1, 4, gl.FLOAT, false, step * 36, 0);
    gl.vertexAttribPointer(IcosahedronLinesTFProgram.a2, 4, gl.FLOAT, false, step * 36, step * 4);
    gl.vertexAttribPointer(IcosahedronLinesTFProgram.a3, 4, gl.FLOAT, false, step * 36, step * 8);
    gl.vertexAttribPointer(IcosahedronLinesTFProgram.a4, 4, gl.FLOAT, false, step * 36, step * 12);
    gl.vertexAttribPointer(IcosahedronLinesTFProgram.a5, 4, gl.FLOAT, false, step * 36, step * 16);
    gl.vertexAttribPointer(IcosahedronLinesTFProgram.a6, 4, gl.FLOAT, false, step * 36, step * 20);
    gl.vertexAttribPointer(IcosahedronLinesTFProgram.a7, 4, gl.FLOAT, false, step * 36, step * 24);
    gl.vertexAttribPointer(IcosahedronLinesTFProgram.a8, 4, gl.FLOAT, false, step * 36, step * 28);
    gl.vertexAttribPointer(IcosahedronLinesTFProgram.a9, 4, gl.FLOAT, false, step * 36, step * 32);



    gl.uniform1f(IcosahedronLinesTFProgram.uTime, now);
    gl.uniform1f(IcosahedronLinesTFProgram.uDeltaTime, deltatime);
    gl.uniform1f(IcosahedronLinesTFProgram.uCameraZ,   cameraZ);    
    gl.uniform1f(IcosahedronLinesTFProgram.uScreenRatio,   screenRatio);    
    gl.uniform3f(IcosahedronLinesTFProgram.uMouseOrigin,   mouseController.origin[0], mouseController.origin[1], mouseController.origin[2]);
    gl.uniform3f(IcosahedronLinesTFProgram.uMouseVelocity, mouseController.velocity[0], 
                                                           mouseController.velocity[1], 
                                                           mouseController.velocity[2]);


    /* music box texture data */
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, musicBox.getVisualizerTexture());
    gl.uniform1i(IcosahedronLinesTFProgram.uMusicVisualizerData, 0);


    // Specify the target buffer:
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, IcosahedronLinesTFProgram.transformFeedback);
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, IcosahedronLinesProgram.buffer);
        gl.beginTransformFeedback(gl.LINES);
        gl.drawArrays(gl.LINES, 0, IcosahedronLinesTFProgram.nverts);
        gl.endTransformFeedback();
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, null);
    

    gl.disable(gl.RASTERIZER_DISCARD);
}


function draw_icosahedron_lines(now, deltatime) {

    compute_icosahedronTF_lines(now, deltatime);

    gl.useProgram(IcosahedronLinesProgram);
    // gl.enable(gl.DEPTH_TEST);
    // gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.bindBuffer(gl.ARRAY_BUFFER, IcosahedronLinesProgram.buffer);
    gl.enableVertexAttribArray(IcosahedronLinesProgram.a1);
    gl.enableVertexAttribArray(IcosahedronLinesProgram.a2);
    gl.enableVertexAttribArray(IcosahedronLinesProgram.a3);
    gl.enableVertexAttribArray(IcosahedronLinesProgram.a4);
    gl.enableVertexAttribArray(IcosahedronLinesProgram.a5);
    gl.enableVertexAttribArray(IcosahedronLinesProgram.a6);
    gl.enableVertexAttribArray(IcosahedronLinesProgram.a7);
    gl.enableVertexAttribArray(IcosahedronLinesProgram.a8);
    gl.enableVertexAttribArray(IcosahedronLinesProgram.a9);
    gl.vertexAttribPointer(IcosahedronLinesProgram.a1, 4, gl.FLOAT, false, step * 36, 0);
    gl.vertexAttribPointer(IcosahedronLinesProgram.a2, 4, gl.FLOAT, false, step * 36, step * 4);
    gl.vertexAttribPointer(IcosahedronLinesProgram.a3, 4, gl.FLOAT, false, step * 36, step * 8);
    gl.vertexAttribPointer(IcosahedronLinesProgram.a4, 4, gl.FLOAT, false, step * 36, step * 12);
    gl.vertexAttribPointer(IcosahedronLinesProgram.a5, 4, gl.FLOAT, false, step * 36, step * 16);
    gl.vertexAttribPointer(IcosahedronLinesProgram.a6, 4, gl.FLOAT, false, step * 36, step * 20);
    gl.vertexAttribPointer(IcosahedronLinesProgram.a7, 4, gl.FLOAT, false, step * 36, step * 24);
    gl.vertexAttribPointer(IcosahedronLinesProgram.a8, 4, gl.FLOAT, false, step * 36, step * 28);
    gl.vertexAttribPointer(IcosahedronLinesProgram.a9, 4, gl.FLOAT, false, step * 36, step * 32);

    mat4.identity(model);

    gl.uniformMatrix4fv(IcosahedronLinesProgram.projection, false, projection);
    gl.uniformMatrix4fv(IcosahedronLinesProgram.model,      false, model);
    gl.uniformMatrix4fv(IcosahedronLinesProgram.view,       false, camera.getViewMatrix(deltatime, 0.3));


    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.disable(gl.DEPTH_TEST);
    gl.drawArrays(gl.LINES, 0, IcosahedronLinesProgram.nverts);
}


function create_icosahedron_lines_program() {

    var Program = getShader(icolinesv, icolinesf, false);
    Program.a1  = gl.getAttribLocation(Program, "v0");
    Program.a2  = gl.getAttribLocation(Program, "v1");
    Program.a3  = gl.getAttribLocation(Program, "v0displaced");
    Program.a4  = gl.getAttribLocation(Program, "v1displaced");
    Program.a5  = gl.getAttribLocation(Program, "v0musicDisplaced");
    Program.a6  = gl.getAttribLocation(Program, "v1musicDisplaced");
    Program.a7  = gl.getAttribLocation(Program, "mouseVelocity");
    Program.a8  = gl.getAttribLocation(Program, "fx");
    Program.a9  = gl.getAttribLocation(Program, "color");

    Program.projection = gl.getUniformLocation(Program, "projection");
    Program.model      = gl.getUniformLocation(Program, "model");
    Program.view       = gl.getUniformLocation(Program, "view");

    Program.nverts  = Icosahedron.nLinesVerts;
    Program.buffer  = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(Icosahedron.linesBuffer), gl.STATIC_DRAW);

    window.IcosahedronLinesProgram = Program;
}

function create_icosahedronTF_lines_program() {

    var Program = gl.createProgram();
    gl.attachShader(Program, getTFShader(icolinesTFv, 'vert'));
    gl.attachShader(Program, getTFShader(icolinesTFf, 'frag'));


    // initializing transform feedback's varyings for this program, BEFORE LINKING IT
    Program.transformFeedback = gl.createTransformFeedback();
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, Program.transformFeedback);   
    gl.transformFeedbackVaryings(Program, 
                                ['tfV0', 'tfV1', 'tfV0displaced', 'tfV1displaced', 'tfV0musicDisplaced', 'tfV1musicDisplaced', 'tfMouseVelocity', 'tfFx', 'tfColor'], 
                                gl.INTERLEAVED_ATTRIBS);
    

    gl.linkProgram(Program);
    if (!gl.getProgramParameter(Program, gl.LINK_STATUS)) {
        alert("Could not initialise shaders");
        return null;
    }

    Program.a1  = gl.getAttribLocation(Program, "v0");
    Program.a2  = gl.getAttribLocation(Program, "v1");
    Program.a3  = gl.getAttribLocation(Program, "v0displaced");
    Program.a4  = gl.getAttribLocation(Program, "v1displaced");
    Program.a5  = gl.getAttribLocation(Program, "v0musicDisplaced");
    Program.a6  = gl.getAttribLocation(Program, "v1musicDisplaced");
    Program.a7  = gl.getAttribLocation(Program, "mouseVelocity");
    Program.a8  = gl.getAttribLocation(Program, "fx");
    Program.a9  = gl.getAttribLocation(Program, "color");

    Program.uTime      = gl.getUniformLocation(Program, "uTime");      
    Program.uDeltaTime = gl.getUniformLocation(Program, "uDeltaTime");
    Program.uCameraZ   = gl.getUniformLocation(Program, "uCameraZ");
    Program.uScreenRatio = gl.getUniformLocation(Program, "uScreenRatio");
    Program.uMouseOrigin = gl.getUniformLocation(Program, "uMouseOrigin");
    Program.uMouseVelocity = gl.getUniformLocation(Program, "uMouseVelocity");
    Program.uMusicVisualizerData = gl.getUniformLocation(Program, "uMusicVisualizerData");

    Program.nverts  = Icosahedron.nLinesVerts;
    Program.buffer  = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(Icosahedron.linesBuffer), gl.STATIC_DRAW);

    window.IcosahedronLinesTFProgram = Program;
}
