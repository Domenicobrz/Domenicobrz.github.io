function compute_icosahedronTF(now, deltatime, whichOne) {

    var tfBuffer;
    var pointsBuffer;
    var nverts;
    var temp;

    // swapping buffers
    if(whichOne === 0) {
        temp = IcosahedronTFProgram.buffer;
        IcosahedronTFProgram.buffer = IcosahedronProgram.buffer; 
        IcosahedronProgram.buffer = temp;

        tfBuffer = IcosahedronTFProgram.buffer; 
        pointsBuffer = IcosahedronProgram.buffer; 
        nverts = IcosahedronProgram.nverts;
    }

    // swapping bloom buffers
    if(whichOne === 1) {
        temp = IcosahedronTFProgram.bloombuffer;
        IcosahedronTFProgram.bloombuffer = OffscreenPointsProgram.bloombuffer; 
        OffscreenPointsProgram.bloombuffer = temp;

        tfBuffer = IcosahedronTFProgram.bloombuffer; 
        pointsBuffer = OffscreenPointsProgram.bloombuffer; 
        nverts = OffscreenPointsProgram.nBloomVerts;
    }



    gl.enable(gl.RASTERIZER_DISCARD);
    gl.useProgram(IcosahedronTFProgram);
    gl.enable(gl.DEPTH_TEST);

    gl.bindBuffer(gl.ARRAY_BUFFER, tfBuffer);
    gl.enableVertexAttribArray(IcosahedronTFProgram.a1);
    gl.enableVertexAttribArray(IcosahedronTFProgram.a2);
    gl.enableVertexAttribArray(IcosahedronTFProgram.a3);
    gl.enableVertexAttribArray(IcosahedronTFProgram.a4);
    gl.enableVertexAttribArray(IcosahedronTFProgram.a5);
    gl.enableVertexAttribArray(IcosahedronTFProgram.a6);
    gl.vertexAttribPointer(IcosahedronTFProgram.a1, 4, gl.FLOAT, false, step * 24, 0);
    gl.vertexAttribPointer(IcosahedronTFProgram.a2, 4, gl.FLOAT, false, step * 24, step * 4);
    gl.vertexAttribPointer(IcosahedronTFProgram.a3, 4, gl.FLOAT, false, step * 24, step * 8);
    gl.vertexAttribPointer(IcosahedronTFProgram.a4, 4, gl.FLOAT, false, step * 24, step * 12);
    gl.vertexAttribPointer(IcosahedronTFProgram.a5, 4, gl.FLOAT, false, step * 24, step * 16);
    gl.vertexAttribPointer(IcosahedronTFProgram.a6, 4, gl.FLOAT, false, step * 24, step * 20);


    gl.uniform1f(IcosahedronTFProgram.uTime, now);
    gl.uniform1f(IcosahedronTFProgram.uCameraZ, cameraZ);
    gl.uniform1f(IcosahedronTFProgram.uDeltaTime, deltatime);
    gl.uniform1f(IcosahedronTFProgram.uScreenRatio,   screenRatio);    
    gl.uniform3f(IcosahedronTFProgram.uMouseOrigin,   mouseController.origin[0], mouseController.origin[1], mouseController.origin[2]);
    gl.uniform3f(IcosahedronTFProgram.uMouseVelocity, mouseController.velocity[0], 
                                                      mouseController.velocity[1], 
                                                      mouseController.velocity[2]);


    /* music box texture data */
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, musicBox.getVisualizerTexture());
    gl.uniform1i(IcosahedronTFProgram.uMusicVisualizerData, 0);


    // Specify the target buffer:
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, IcosahedronTFProgram.transformFeedback);
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, pointsBuffer);
        gl.beginTransformFeedback(gl.POINTS);
        gl.drawArrays(gl.POINTS, 0, nverts);
        gl.endTransformFeedback();
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, null);
    

    gl.disable(gl.RASTERIZER_DISCARD);
}

function draw_icosahedron(now, deltatime) {

    compute_icosahedronTF(now, deltatime, 0);

    // gl.clearColor(0.115, 0.115, 0.115, 1.0);
    // gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.useProgram(IcosahedronProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, IcosahedronProgram.buffer);
    // gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, IcosahedronProgram.ebuffer);
    gl.enableVertexAttribArray(IcosahedronProgram.a1);
    gl.enableVertexAttribArray(IcosahedronProgram.a2);
    gl.enableVertexAttribArray(IcosahedronProgram.a3);
    gl.enableVertexAttribArray(IcosahedronProgram.a4);
    gl.enableVertexAttribArray(IcosahedronProgram.a5);
    gl.enableVertexAttribArray(IcosahedronProgram.a6);
    gl.vertexAttribPointer(IcosahedronProgram.a1, 4, gl.FLOAT, false, step * 24, 0);
    gl.vertexAttribPointer(IcosahedronProgram.a2, 4, gl.FLOAT, false, step * 24, step * 4);
    gl.vertexAttribPointer(IcosahedronProgram.a3, 4, gl.FLOAT, false, step * 24, step * 8);
    gl.vertexAttribPointer(IcosahedronProgram.a4, 4, gl.FLOAT, false, step * 24, step * 12);
    gl.vertexAttribPointer(IcosahedronProgram.a5, 4, gl.FLOAT, false, step * 24, step * 16);
    gl.vertexAttribPointer(IcosahedronProgram.a6, 4, gl.FLOAT, false, step * 24, step * 20);

    mat4.identity(model);

    gl.uniform1f(IcosahedronProgram.uTime, now);
    gl.uniform1f(IcosahedronProgram.uDeltaTime, deltatime);

    gl.uniformMatrix4fv(IcosahedronProgram.projection, false, projection);
    gl.uniformMatrix4fv(IcosahedronProgram.model,      false, model);
    gl.uniformMatrix4fv(IcosahedronProgram.view,       false, camera.getViewMatrix(deltatime, 0.3));


    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.disable(gl.DEPTH_TEST);
    gl.drawArrays(gl.POINTS, 0, IcosahedronProgram.nverts);
    // gl.drawElements(gl.TRIANGLES, IcosahedronProgram.elength * 3, gl.UNSIGNED_SHORT, 0);
}

function draw_luminous_points(now, deltatime) {

    compute_icosahedronTF(now, deltatime, 1);

    // gl.bindFramebuffer(gl.FRAMEBUFFER, FBOoffscreen);
    // gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(OffscreenPointsProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, OffscreenPointsProgram.bloombuffer);
    gl.enableVertexAttribArray(OffscreenPointsProgram.a1);
    gl.enableVertexAttribArray(OffscreenPointsProgram.a2);
    gl.enableVertexAttribArray(OffscreenPointsProgram.a3);
    gl.enableVertexAttribArray(OffscreenPointsProgram.a4);
    gl.enableVertexAttribArray(OffscreenPointsProgram.a5);
    gl.enableVertexAttribArray(OffscreenPointsProgram.a6);
    gl.vertexAttribPointer(OffscreenPointsProgram.a1, 4, gl.FLOAT, false, step * 24, 0);
    gl.vertexAttribPointer(OffscreenPointsProgram.a2, 4, gl.FLOAT, false, step * 24, step * 4);
    gl.vertexAttribPointer(OffscreenPointsProgram.a3, 4, gl.FLOAT, false, step * 24, step * 8);
    gl.vertexAttribPointer(OffscreenPointsProgram.a4, 4, gl.FLOAT, false, step * 24, step * 12);
    gl.vertexAttribPointer(OffscreenPointsProgram.a5, 4, gl.FLOAT, false, step * 24, step * 16);
    gl.vertexAttribPointer(OffscreenPointsProgram.a6, 4, gl.FLOAT, false, step * 24, step * 20);

    mat4.identity(model);

    gl.uniform1f(OffscreenPointsProgram.uTime, now);
    gl.uniform1f(OffscreenPointsProgram.uDeltaTime, deltatime);

    gl.uniformMatrix4fv(OffscreenPointsProgram.projection, false, projection);
    gl.uniformMatrix4fv(OffscreenPointsProgram.model,      false, model);
    gl.uniformMatrix4fv(OffscreenPointsProgram.view,       false, camera.getViewMatrix(deltatime, 0.3));

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE);
    gl.disable(gl.DEPTH_TEST);
    gl.drawArrays(gl.POINTS, 0, OffscreenPointsProgram.nBloomVerts);
    // gl.bindFramebuffer(gl.FRAMEBUFFER, null);
}




function create_icosahedron_program() {

    var Program = getShader(icov, icof, false);
    Program.a1  = gl.getAttribLocation(Program, "pos");
    Program.a2  = gl.getAttribLocation(Program, "displacedPos");
    Program.a3  = gl.getAttribLocation(Program, "musicDisplacedPos");
    Program.a4  = gl.getAttribLocation(Program, "mouseVelocity");
    Program.a5  = gl.getAttribLocation(Program, "fx");
    Program.a6  = gl.getAttribLocation(Program, "fx2");


    Program.uTime      = gl.getUniformLocation(Program, "uTime");      
    Program.uDeltaTime = gl.getUniformLocation(Program, "uDeltaTime");

    Program.projection = gl.getUniformLocation(Program, "projection");
    Program.model      = gl.getUniformLocation(Program, "model");
    Program.view       = gl.getUniformLocation(Program, "view");


    Program.nverts  = Icosahedron.nVerts;
    // Program.elength = result.triangles.length;
    Program.buffer  = gl.createBuffer();
    // Program.ebuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(Icosahedron.verticesBuffer), gl.STATIC_DRAW);

    window.IcosahedronProgram = Program;
}


function create_offscreen_points_program() {

    var Program = getShader(offpointv, offpointf, false);
    Program.a1  = gl.getAttribLocation(Program, "pos");
    Program.a2  = gl.getAttribLocation(Program, "displacedPos");
    Program.a3  = gl.getAttribLocation(Program, "musicDisplacedPos");
    Program.a4  = gl.getAttribLocation(Program, "mouseVelocity");
    Program.a5  = gl.getAttribLocation(Program, "fx");
    Program.a6  = gl.getAttribLocation(Program, "fx2");


    Program.uTime      = gl.getUniformLocation(Program, "uTime");      
    Program.uDeltaTime = gl.getUniformLocation(Program, "uDeltaTime");

    Program.projection = gl.getUniformLocation(Program, "projection");
    Program.model      = gl.getUniformLocation(Program, "model");
    Program.view       = gl.getUniformLocation(Program, "view");



    Program.bloombuffer  = gl.createBuffer();
    Program.nBloomVerts  = Icosahedron.nBloomVerts;
    gl.bindBuffer(gl.ARRAY_BUFFER, Program.bloombuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(Icosahedron.bloomVerticesBuffer), gl.STATIC_DRAW);

    window.OffscreenPointsProgram = Program;
}



function create_icosahedronTF_program() {

    var Program = gl.createProgram();
    gl.attachShader(Program, getTFShader(icoTFv, 'vert'));
    gl.attachShader(Program, getTFShader(icoTFf, 'frag'));


    // initializing transform feedback's varyings for this program, BEFORE LINKING IT
    Program.transformFeedback = gl.createTransformFeedback();
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, Program.transformFeedback);   
    gl.transformFeedbackVaryings(Program, 
                                ['tfPosition', 'tfDisplacedPos', 'tfMusicDisplacedPos', 'tfMouseVelocity', 'tfFX', 'tfFX2'], 
                                gl.INTERLEAVED_ATTRIBS);
    

    gl.linkProgram(Program);
    if (!gl.getProgramParameter(Program, gl.LINK_STATUS)) {
        alert("Could not initialise shaders");
        return null;
    }

    Program.a1  = gl.getAttribLocation(Program, "pos");
    Program.a2  = gl.getAttribLocation(Program, "displacedPos");
    Program.a3  = gl.getAttribLocation(Program, "musicDisplacedPos");    
    Program.a4  = gl.getAttribLocation(Program, "mouseVelocity");
    Program.a5  = gl.getAttribLocation(Program, "fx");
    Program.a6  = gl.getAttribLocation(Program, "fx2");

    Program.uTime      = gl.getUniformLocation(Program, "uTime");      
    Program.uCameraZ   = gl.getUniformLocation(Program, "uCameraZ");      
    Program.uDeltaTime = gl.getUniformLocation(Program, "uDeltaTime");
    Program.uScreenRatio = gl.getUniformLocation(Program, "uScreenRatio");
    Program.uMouseOrigin = gl.getUniformLocation(Program, "uMouseOrigin");
    Program.uMouseVelocity = gl.getUniformLocation(Program, "uMouseVelocity");
    Program.uMusicVisualizerData = gl.getUniformLocation(Program, "uMusicVisualizerData");

    Program.nverts  = Icosahedron.nVerts;
    Program.buffer  = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(Icosahedron.verticesBuffer), gl.STATIC_DRAW);


    Program.bloombuffer  = gl.createBuffer();
    Program.nBloomVerts  = Icosahedron.nBloomVerts;

    gl.bindBuffer(gl.ARRAY_BUFFER, Program.bloombuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(Icosahedron.bloomVerticesBuffer), gl.STATIC_DRAW);

    window.IcosahedronTFProgram = Program;
}
