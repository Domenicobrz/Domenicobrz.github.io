
var sfakjcounter = 0;
function drawLines(now) {
    updatePoints();
    updatePointsDataTexture();
    
    nodes.generateNodeStructure(points);
    nodes.generateLines();

    // if(!effectsController.intersectionSubset)
    //     updateLines();
    // else
    //     updateLinesSubset();

    // drawStencilMeshes(now);

    gl.useProgram(linesProgram);    
    gl.bindBuffer(gl.ARRAY_BUFFER, linesProgram.linesBuffer);

    gl.enableVertexAttribArray(linesProgram.aPosition);
    // gl.enableVertexAttribArray(linesProgram.aFx);
    gl.vertexAttribPointer(linesProgram.aPosition, 4, gl.FLOAT, false, 0,0);//step * 8, 0);
    // gl.vertexAttribPointer(linesProgram.aFx,       4, gl.FLOAT, false, step * 8, step * 4);

    gl.uniformMatrix4fv(linesProgram.uPerspective, false, perspective);
    gl.uniformMatrix4fv(linesProgram.uModel, false,       model);
    gl.uniformMatrix4fv(linesProgram.uView, false,        view);

    gl.uniform1f(linesProgram.uColorGradientDistance, effectsController.colorGradientDistance);
    gl.uniform1f(linesProgram.uNumPoints, pointsNum);

    gl.uniform1f(linesProgram.uHwwtsss, hww * streamstart_s);
    gl.uniform1f(linesProgram.uHwwtsst, hwh * streamstart_t);


    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, pointsProgram.pointsDataTexture);
    gl.uniform1i(linesProgram.uPointsData, 0);


    // gl.stencilFunc(gl.NOTEQUAL, 1, 0xFF);    
    gl.drawArrays(gl.LINES, 0, linesProgram.linesCount);
    // gl.disable(gl.STENCIL_TEST);
}

function createLinesProgram() {
    var Program = getShader(getLineVertexShader(), getLinef());
    Program.aId          = gl.getAttribLocation(Program, "aId");
    // Program.aFx          = gl.getAttribLocation(Program, "aFx");

    Program.uPerspective = gl.getUniformLocation(Program, "uPerspective");
    Program.uModel       = gl.getUniformLocation(Program, "uModel");
    Program.uView        = gl.getUniformLocation(Program, "uView");

    Program.uPointsData  = gl.getUniformLocation(Program, "uPointsData");
    Program.uColorGradientDistance  = gl.getUniformLocation(Program, "uColorGradientDistance");
    Program.uNumPoints  = gl.getUniformLocation(Program, "uNumPoints");
    
    Program.uHwwtsss    = gl.getUniformLocation(Program, "uHwwtsss");
    Program.uHwwtsst    = gl.getUniformLocation(Program, "uHwwtsst");


    Program.linesBuffer  = gl.createBuffer();
    linesProgram  = Program;



    var lineHashes = {};
    var verticesBuffer = [];

    for(var i = 0; i < pointsNum; i++)
    for(var j = 0; j < pointsNum; j++) {
        //var hash1 = "i" + i;
        //var hash2 = "i" + j;
        //var h1h2  = hash1 + hash2;
        //var h2h1  = hash2 + hash1;

        // if(j === i) continue;
        // if(i % 2 === 0) continue;
        // if(j % 2 === 0) continue;
        if(j > 3 ) continue;



        // i,j represents vertex indices to be taken from pointTexture



        //if(lineHashes[h1h2] === undefined && lineHashes[h2h1] === undefined) {
          //  lineHashes[h1h2] = 1;
            verticesBuffer.push(i,j,0,0, /*0,0,0,0,*/    j,i,0,0/*, 0,0,0,0*/);
        //}
    }
    linesProgram.linesCount = verticesBuffer.length / 4;
    linesProgram.verticesBuffer = new Float32Array(verticesBuffer);

    // window.linesFloatBuffer  = new Float32Array(pointsNum * pointsNum * 4 * 2);  // pn * pn lines, comprised of 2 vertices of 8 floats
    gl.bindBuffer(gl.ARRAY_BUFFER, linesProgram.linesBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, linesProgram.verticesBuffer, gl.STATIC_DRAW);    

    // updateLines();
}


/**
 * This function is used only when updating the number of points through the console
 */
function updateLinesBuffer() {
    var verticesBuffer = [];

    for(var i = 0; i < pointsNum; i++)
    for(var j = 0; j < pointsNum; j++) {
        //var hash1 = "i" + i;
        //var hash2 = "i" + j;
        //var h1h2  = hash1 + hash2;
        //var h2h1  = hash2 + hash1;

        // if(j === i) continue;
        // if(i % 2 === 0) continue;
        // if(j % 2 === 0) continue;
        if(j > 3 ) continue;

        //if(lineHashes[h1h2] === undefined && lineHashes[h2h1] === undefined) {
          //  lineHashes[h1h2] = 1;
            verticesBuffer.push(i,j,0,0, /*0,0,0,0,*/    j,i,0,0/*, 0,0,0,0*/);
        //}
    }
    linesProgram.linesCount = verticesBuffer.length / 4;
    linesProgram.verticesBuffer = new Float32Array(verticesBuffer);

    // window.linesFloatBuffer  = new Float32Array(pointsNum * pointsNum * 4 * 2);  // pn * pn lines, comprised of 2 vertices of 8 floats
    gl.bindBuffer(gl.ARRAY_BUFFER, linesProgram.linesBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, linesProgram.verticesBuffer, gl.STATIC_DRAW);    
}


function updateLines() {
    // console.time("fill");


    var closestFourIndexes   = [ -1,  -1,  -1,  -1  ];
    var closestFourDistances = [ 999999, 999999, 999999, 999999 ];

    for(var i = 0; i < pointsNum; i++) {
        // if(i % 2 === 0) continue;


        closestFourIndexes[0] = -1;
        closestFourIndexes[1] = -1;
        closestFourIndexes[2] = -1;
        closestFourIndexes[3] = -1;
        closestFourDistances[0] = 999999;
        closestFourDistances[1] = 999999;
        closestFourDistances[2] = 999999;
        closestFourDistances[3] = 999999;


        for(var j = 0; j < pointsNum; j++) {

            // if(j === i) continue;
            // if(j % 2 === 0) continue;

            var vx = points[i].x - points[j].x;
            var vy = points[i].y - points[j].y;
            var dst = vx * vx + vy * vy;
            
            // self intersection
            if(dst === 0) continue;

            if(dst < closestFourDistances[0]) {
                closestFourDistances[3] = closestFourDistances[2];
                closestFourDistances[2] = closestFourDistances[1];
                closestFourDistances[1] = closestFourDistances[0];
                
                closestFourIndexes[3] = closestFourIndexes[2];
                closestFourIndexes[2] = closestFourIndexes[1];
                closestFourIndexes[1] = closestFourIndexes[0];

                closestFourDistances[0] = dst;
                closestFourIndexes[0]   = j;
                continue;
            }


            if(dst < closestFourDistances[1]) {
                closestFourDistances[3] = closestFourDistances[2];
                closestFourDistances[2] = closestFourDistances[1];
                
                closestFourIndexes[3] = closestFourIndexes[2];
                closestFourIndexes[2] = closestFourIndexes[1];

                closestFourDistances[1] = dst;
                closestFourIndexes[1]   = j;
                continue;
            }

            if(dst < closestFourDistances[2]) {
                closestFourDistances[3] = closestFourDistances[2];
            
                closestFourIndexes[3] = closestFourIndexes[2];

                closestFourDistances[2] = dst;
                closestFourIndexes[2]   = j;
                continue;
            }

            if(dst < closestFourDistances[3]) {
                closestFourDistances[3] = dst;
                closestFourIndexes[3]   = j;
            }
        }

        // verticesBuffer.push(i,closestFourIndexes[0],0,0, /*0,0,0,0,*/    closestFourIndexes[0],i,0,0/*, 0,0,0,0*/);
        // verticesBuffer.push(i,closestFourIndexes[1],0,0, /*0,0,0,0,*/    closestFourIndexes[1],i,0,0/*, 0,0,0,0*/);
        // verticesBuffer.push(i,closestFourIndexes[2],0,0, /*0,0,0,0,*/    closestFourIndexes[2],i,0,0/*, 0,0,0,0*/);
        // verticesBuffer.push(i,closestFourIndexes[3],0,1, /*1,0,0,0,*/    closestFourIndexes[3],i,0,1/*, 1,0,0,0*/);


        // pushing the first vertex of the line ...
        linesProgram.verticesBuffer[i * 32 + 0] = i;
        linesProgram.verticesBuffer[i * 32 + 1] = closestFourIndexes[0];
        linesProgram.verticesBuffer[i * 32 + 2] = 0;
        linesProgram.verticesBuffer[i * 32 + 3] = 0;
        // ... and the other one
        linesProgram.verticesBuffer[i * 32 + 4] = closestFourIndexes[0];
        linesProgram.verticesBuffer[i * 32 + 5] = i;
        linesProgram.verticesBuffer[i * 32 + 6] = 0;
        linesProgram.verticesBuffer[i * 32 + 7] = 0;



        linesProgram.verticesBuffer[i * 32 + 8] = i;
        linesProgram.verticesBuffer[i * 32 + 9] = closestFourIndexes[1];
        linesProgram.verticesBuffer[i * 32 + 10] = 0;
        linesProgram.verticesBuffer[i * 32 + 11] = 0;

        linesProgram.verticesBuffer[i * 32 + 12] = closestFourIndexes[1];
        linesProgram.verticesBuffer[i * 32 + 13] = i;
        linesProgram.verticesBuffer[i * 32 + 14] = 0;
        linesProgram.verticesBuffer[i * 32 + 15] = 0;



        linesProgram.verticesBuffer[i * 32 + 16] = i;
        linesProgram.verticesBuffer[i * 32 + 17] = closestFourIndexes[2];
        linesProgram.verticesBuffer[i * 32 + 18] = 0;
        linesProgram.verticesBuffer[i * 32 + 19] = 0;

        linesProgram.verticesBuffer[i * 32 + 20] = closestFourIndexes[2];
        linesProgram.verticesBuffer[i * 32 + 21] = i;
        linesProgram.verticesBuffer[i * 32 + 22] = 0;
        linesProgram.verticesBuffer[i * 32 + 23] = 0;


        
        linesProgram.verticesBuffer[i * 32 + 24] = i;
        linesProgram.verticesBuffer[i * 32 + 25] = closestFourIndexes[3];
        linesProgram.verticesBuffer[i * 32 + 26] = 0;
        linesProgram.verticesBuffer[i * 32 + 27] = 1;

        linesProgram.verticesBuffer[i * 32 + 28] = closestFourIndexes[3];
        linesProgram.verticesBuffer[i * 32 + 29] = i;
        linesProgram.verticesBuffer[i * 32 + 30] = 0;
        linesProgram.verticesBuffer[i * 32 + 31] = 1;
    }
    // console.timeEnd("fill");


    // console.time("upload");
    // window.linesFloatBuffer  = new Float32Array(pointsNum * pointsNum * 4 * 2);  // pn * pn lines, comprised of 2 vertices of 8 floats
    gl.bindBuffer(gl.ARRAY_BUFFER, linesProgram.linesBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, linesProgram.verticesBuffer, gl.STATIC_DRAW);    
    // console.timeEnd("upload");
}


// iterates only on a subset of the vertices,   i from 0 to pointsNum   and    j from 0 to pointsNum but only if j is even
function updateLinesSubset() {
    // console.time("fill");


    var closestFourIndexes   = [ -1,  -1,  -1,  -1  ];
    var closestFourDistances = [ 999999, 999999, 999999, 999999 ];

    for(var i = 0; i < pointsNum; i++) {
        // if(i % 2 === 0) continue;


        closestFourIndexes[0] = -1;
        closestFourIndexes[1] = -1;
        closestFourIndexes[2] = -1;
        closestFourIndexes[3] = -1;
        closestFourDistances[0] = 999999;
        closestFourDistances[1] = 999999;
        closestFourDistances[2] = 999999;
        closestFourDistances[3] = 999999;


        for(var j = 0; j < pointsNum; j++) {

            // if(j === i) continue;
            if(j % 2 === 0) continue;

            var vx = points[i].x - points[j].x;
            var vy = points[i].y - points[j].y;
            var dst = vx * vx + vy * vy;

            if(dst < closestFourDistances[0]) {
                closestFourDistances[3] = closestFourDistances[2];
                closestFourDistances[2] = closestFourDistances[1];
                closestFourDistances[1] = closestFourDistances[0];
                
                closestFourIndexes[3] = closestFourIndexes[2];
                closestFourIndexes[2] = closestFourIndexes[1];
                closestFourIndexes[1] = closestFourIndexes[0];

                closestFourDistances[0] = dst;
                closestFourIndexes[0]   = j;
                continue;
            }


            if(dst < closestFourDistances[1]) {
                closestFourDistances[3] = closestFourDistances[2];
                closestFourDistances[2] = closestFourDistances[1];
                
                closestFourIndexes[3] = closestFourIndexes[2];
                closestFourIndexes[2] = closestFourIndexes[1];

                closestFourDistances[1] = dst;
                closestFourIndexes[1]   = j;
                continue;
            }

            if(dst < closestFourDistances[2]) {
                closestFourDistances[3] = closestFourDistances[2];
            
                closestFourIndexes[3] = closestFourIndexes[2];

                closestFourDistances[2] = dst;
                closestFourIndexes[2]   = j;
                continue;
            }

            if(dst < closestFourDistances[3]) {
                closestFourDistances[3] = dst;
                closestFourIndexes[3]   = j;
            }
        }

        // verticesBuffer.push(i,closestFourIndexes[0],0,0, /*0,0,0,0,*/    closestFourIndexes[0],i,0,0/*, 0,0,0,0*/);
        // verticesBuffer.push(i,closestFourIndexes[1],0,0, /*0,0,0,0,*/    closestFourIndexes[1],i,0,0/*, 0,0,0,0*/);
        // verticesBuffer.push(i,closestFourIndexes[2],0,0, /*0,0,0,0,*/    closestFourIndexes[2],i,0,0/*, 0,0,0,0*/);
        // verticesBuffer.push(i,closestFourIndexes[3],0,1, /*1,0,0,0,*/    closestFourIndexes[3],i,0,1/*, 1,0,0,0*/);

        linesProgram.verticesBuffer[i * 32 + 0] = i;
        linesProgram.verticesBuffer[i * 32 + 1] = closestFourIndexes[0];
        linesProgram.verticesBuffer[i * 32 + 2] = 0;
        linesProgram.verticesBuffer[i * 32 + 3] = 0;

        linesProgram.verticesBuffer[i * 32 + 4] = closestFourIndexes[0];
        linesProgram.verticesBuffer[i * 32 + 5] = i;
        linesProgram.verticesBuffer[i * 32 + 6] = 0;
        linesProgram.verticesBuffer[i * 32 + 7] = 0;



        linesProgram.verticesBuffer[i * 32 + 8] = i;
        linesProgram.verticesBuffer[i * 32 + 9] = closestFourIndexes[1];
        linesProgram.verticesBuffer[i * 32 + 10] = 0;
        linesProgram.verticesBuffer[i * 32 + 11] = 0;

        linesProgram.verticesBuffer[i * 32 + 12] = closestFourIndexes[1];
        linesProgram.verticesBuffer[i * 32 + 13] = i;
        linesProgram.verticesBuffer[i * 32 + 14] = 0;
        linesProgram.verticesBuffer[i * 32 + 15] = 0;



        linesProgram.verticesBuffer[i * 32 + 16] = i;
        linesProgram.verticesBuffer[i * 32 + 17] = closestFourIndexes[2];
        linesProgram.verticesBuffer[i * 32 + 18] = 0;
        linesProgram.verticesBuffer[i * 32 + 19] = 0;

        linesProgram.verticesBuffer[i * 32 + 20] = closestFourIndexes[2];
        linesProgram.verticesBuffer[i * 32 + 21] = i;
        linesProgram.verticesBuffer[i * 32 + 22] = 0;
        linesProgram.verticesBuffer[i * 32 + 23] = 0;


        
        linesProgram.verticesBuffer[i * 32 + 24] = i;
        linesProgram.verticesBuffer[i * 32 + 25] = closestFourIndexes[3];
        linesProgram.verticesBuffer[i * 32 + 26] = 0;
        linesProgram.verticesBuffer[i * 32 + 27] = 1;

        linesProgram.verticesBuffer[i * 32 + 28] = closestFourIndexes[3];
        linesProgram.verticesBuffer[i * 32 + 29] = i;
        linesProgram.verticesBuffer[i * 32 + 30] = 0;
        linesProgram.verticesBuffer[i * 32 + 31] = 1;
    }
    // console.timeEnd("fill");


    // console.time("upload");
    // window.linesFloatBuffer  = new Float32Array(pointsNum * pointsNum * 4 * 2);  // pn * pn lines, comprised of 2 vertices of 8 floats
    gl.bindBuffer(gl.ARRAY_BUFFER, linesProgram.linesBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, linesProgram.verticesBuffer, gl.STATIC_DRAW);    
    // console.timeEnd("upload");
}


function updateLinesSubsetNodes() {
    // console.time("fill");


    var closestFourIndexes   = [ -1,  -1,  -1,  -1  ];
    var closestFourDistances = [ 999999, 999999, 999999, 999999 ];

    for(var i = 0; i < pointsNum; i++) {
        // if(i % 2 === 0) continue;


        closestFourIndexes[0] = -1;
        closestFourIndexes[1] = -1;
        closestFourIndexes[2] = -1;
        closestFourIndexes[3] = -1;
        closestFourDistances[0] = 999999;
        closestFourDistances[1] = 999999;
        closestFourDistances[2] = 999999;
        closestFourDistances[3] = 999999;


        for(var j = 0; j < pointsNum; j++) {

            // if(j === i) continue;
            if(j % 2 === 0) continue;

            var vx = points[i].x - points[j].x;
            var vy = points[i].y - points[j].y;
            var dst = vx * vx + vy * vy;

            if(dst < closestFourDistances[0]) {
                closestFourDistances[3] = closestFourDistances[2];
                closestFourDistances[2] = closestFourDistances[1];
                closestFourDistances[1] = closestFourDistances[0];
                
                closestFourIndexes[3] = closestFourIndexes[2];
                closestFourIndexes[2] = closestFourIndexes[1];
                closestFourIndexes[1] = closestFourIndexes[0];

                closestFourDistances[0] = dst;
                closestFourIndexes[0]   = j;
                continue;
            }


            if(dst < closestFourDistances[1]) {
                closestFourDistances[3] = closestFourDistances[2];
                closestFourDistances[2] = closestFourDistances[1];
                
                closestFourIndexes[3] = closestFourIndexes[2];
                closestFourIndexes[2] = closestFourIndexes[1];

                closestFourDistances[1] = dst;
                closestFourIndexes[1]   = j;
                continue;
            }

            if(dst < closestFourDistances[2]) {
                closestFourDistances[3] = closestFourDistances[2];
            
                closestFourIndexes[3] = closestFourIndexes[2];

                closestFourDistances[2] = dst;
                closestFourIndexes[2]   = j;
            }

            if(dst < closestFourDistances[3]) {
                closestFourDistances[3] = dst;
                closestFourIndexes[3]   = j;
            }
        }

        // verticesBuffer.push(i,closestFourIndexes[0],0,0, /*0,0,0,0,*/    closestFourIndexes[0],i,0,0/*, 0,0,0,0*/);
        // verticesBuffer.push(i,closestFourIndexes[1],0,0, /*0,0,0,0,*/    closestFourIndexes[1],i,0,0/*, 0,0,0,0*/);
        // verticesBuffer.push(i,closestFourIndexes[2],0,0, /*0,0,0,0,*/    closestFourIndexes[2],i,0,0/*, 0,0,0,0*/);
        // verticesBuffer.push(i,closestFourIndexes[3],0,1, /*1,0,0,0,*/    closestFourIndexes[3],i,0,1/*, 1,0,0,0*/);

        linesProgram.verticesBuffer[i * 32 + 0] = i;
        linesProgram.verticesBuffer[i * 32 + 1] = closestFourIndexes[0];
        linesProgram.verticesBuffer[i * 32 + 2] = 0;
        linesProgram.verticesBuffer[i * 32 + 3] = 0;

        linesProgram.verticesBuffer[i * 32 + 4] = closestFourIndexes[0];
        linesProgram.verticesBuffer[i * 32 + 5] = i;
        linesProgram.verticesBuffer[i * 32 + 6] = 0;
        linesProgram.verticesBuffer[i * 32 + 7] = 0;



        linesProgram.verticesBuffer[i * 32 + 8] = i;
        linesProgram.verticesBuffer[i * 32 + 9] = closestFourIndexes[1];
        linesProgram.verticesBuffer[i * 32 + 10] = 0;
        linesProgram.verticesBuffer[i * 32 + 11] = 0;

        linesProgram.verticesBuffer[i * 32 + 12] = closestFourIndexes[1];
        linesProgram.verticesBuffer[i * 32 + 13] = i;
        linesProgram.verticesBuffer[i * 32 + 14] = 0;
        linesProgram.verticesBuffer[i * 32 + 15] = 0;



        linesProgram.verticesBuffer[i * 32 + 16] = i;
        linesProgram.verticesBuffer[i * 32 + 17] = closestFourIndexes[2];
        linesProgram.verticesBuffer[i * 32 + 18] = 0;
        linesProgram.verticesBuffer[i * 32 + 19] = 0;

        linesProgram.verticesBuffer[i * 32 + 20] = closestFourIndexes[2];
        linesProgram.verticesBuffer[i * 32 + 21] = i;
        linesProgram.verticesBuffer[i * 32 + 22] = 0;
        linesProgram.verticesBuffer[i * 32 + 23] = 0;


        
        linesProgram.verticesBuffer[i * 32 + 24] = i;
        linesProgram.verticesBuffer[i * 32 + 25] = closestFourIndexes[3];
        linesProgram.verticesBuffer[i * 32 + 26] = 0;
        linesProgram.verticesBuffer[i * 32 + 27] = 1;

        linesProgram.verticesBuffer[i * 32 + 28] = closestFourIndexes[3];
        linesProgram.verticesBuffer[i * 32 + 29] = i;
        linesProgram.verticesBuffer[i * 32 + 30] = 0;
        linesProgram.verticesBuffer[i * 32 + 31] = 1;
    }
    // console.timeEnd("fill");


    // console.time("upload");
    // window.linesFloatBuffer  = new Float32Array(pointsNum * pointsNum * 4 * 2);  // pn * pn lines, comprised of 2 vertices of 8 floats
    gl.bindBuffer(gl.ARRAY_BUFFER, linesProgram.linesBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, linesProgram.verticesBuffer, gl.STATIC_DRAW);    
    // console.timeEnd("upload");
}
