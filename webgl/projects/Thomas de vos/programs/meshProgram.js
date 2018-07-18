function drawStencilMeshes(now) {
    gl.useProgram(meshesProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, meshesProgram.buffer);

    gl.enableVertexAttribArray(meshesProgram.aPosition);
    gl.enableVertexAttribArray(meshesProgram.aColor);
    gl.vertexAttribPointer(meshesProgram.aPosition, 4, gl.FLOAT, false, step * 8, 0);
    gl.vertexAttribPointer(meshesProgram.aColor,    4, gl.FLOAT, false, step * 8, step * 4);

    gl.uniformMatrix4fv(meshesProgram.uPerspective, false, perspective);
    gl.uniformMatrix4fv(meshesProgram.uModel, false,       model);
    gl.uniformMatrix4fv(meshesProgram.uView, false,        view);


    gl.enable(gl.STENCIL_TEST);
    gl.stencilFunc(gl.ALWAYS, 1, 0xFF);
    gl.stencilOp(gl.REPLACE, gl.REPLACE, gl.REPLACE);
    gl.drawArrays(gl.TRIANGLES, 0, meshesProgram.count);
}

function drawMeshes(now, deltatime) {

    checkMouseFocus();
    /* swapMeshes needs to be called AFTER checkMouseFocus, 
       check the function's definition for more info */
    if(swappingMeshes) swapMeshes();
    updateMeshProgramVertices(meshesProgram.meshes, deltatime);

    if(meshesProgram.count === 0) return; // no mesh to draw


    gl.useProgram(meshesProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, meshesProgram.buffer);

    gl.enableVertexAttribArray(meshesProgram.aPosition);
    gl.enableVertexAttribArray(meshesProgram.aColor);
    gl.vertexAttribPointer(meshesProgram.aPosition, 4, gl.FLOAT, false, step * 8, 0);
    gl.vertexAttribPointer(meshesProgram.aColor,    4, gl.FLOAT, false, step * 8, step * 4);

    gl.uniformMatrix4fv(meshesProgram.uPerspective, false, perspective);
    gl.uniformMatrix4fv(meshesProgram.uModel, false,       model);
    gl.uniformMatrix4fv(meshesProgram.uView, false,        view);

    // gl.enable(gl.DEPTH_TEST);
    gl.drawArrays(gl.TRIANGLES, 0, meshesProgram.count);
}

function drawMeshesPoints(now, deltatime) {

    if(meshPointsProgram.count === 0) return; // no points to draw

    gl.useProgram(meshPointsProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, meshPointsProgram.buffer);

    gl.enableVertexAttribArray(meshPointsProgram.aPosition);
    gl.vertexAttribPointer(meshPointsProgram.aPosition, 4, gl.FLOAT, false, 0, 0);

    gl.uniformMatrix4fv(meshPointsProgram.uPerspective, false, perspective);
    gl.uniformMatrix4fv(meshPointsProgram.uModel, false,       model);
    gl.uniformMatrix4fv(meshPointsProgram.uView, false,        view);

    gl.uniform1f(meshPointsProgram.uMaxSize, (2.0 / 1366.0) * screen.width);
    
    gl.drawArrays(gl.POINTS, 0, meshPointsProgram.count);
}

function createMeshesProgram() {
    var Program = getShader(shader_meshv, getMeshf());
    Program.aPosition = gl.getAttribLocation(Program, "aPosition");
    Program.aColor    = gl.getAttribLocation(Program, "aColor"   );

    Program.uPerspective = gl.getUniformLocation(Program, "uPerspective");
    Program.uModel       = gl.getUniformLocation(Program, "uModel");
    Program.uView        = gl.getUniformLocation(Program, "uView");



    Program.count = 0;
    Program.buffer = gl.createBuffer();
    meshesProgram = Program;


    meshesProgram.currentlyBoundMeshId = 0;


    meshCenter = [ -hww * 0.3, 0.9];

    var planeMesh = addMesh(planeMeshJSON,  0), treeMesh = addMesh(treeMeshJSON, 1), glassesMesh = addMesh(glassesMeshJSON, 2),
        /* if you need more start arguments, just create an object which encapsulates options and feed it to the mesh constructor */
        playMesh  = addMesh(playMeshJSON,   0,    2.25), 
        headsetMesh = addMesh(headsetMeshJSON, 1, 2.25), 
        noteMesh  = addMesh(noteMeshJSON,   2,    2.25),
        euroMesh  = addMesh(euroMeshJSON,   0,    2.0), 
        cardMesh = addMesh(cardMeshJSON, 1,       2.0), 
        dollarMesh = addMesh(dollarMeshJSON, 2,   2.0);

    playMesh.opacityMult = 2.5;
    cardMesh.opacityMult = 2;


    /* inside cachedMeshes we load ALL the meshes of every video */
    meshesProgram.cachedMeshes = []; 
    meshesProgram.cachedMeshes.push(planeMesh);
    meshesProgram.cachedMeshes.push(treeMesh);
    meshesProgram.cachedMeshes.push(glassesMesh);

    meshesProgram.cachedMeshes.push(euroMesh);
    meshesProgram.cachedMeshes.push(cardMesh);
    meshesProgram.cachedMeshes.push(dollarMesh);

    meshesProgram.cachedMeshes.push(playMesh);
    meshesProgram.cachedMeshes.push(headsetMesh);
    meshesProgram.cachedMeshes.push(noteMesh);

    /* inside meshes we load only the active meshes (the ones associated with the video being played) */    
    meshesProgram.meshes = []; 
    meshesProgram.lastId = points.length;

    /* a random active video is picked at page load */
    meshesProgram.meshes.push(meshesProgram.cachedMeshes[activeVideo*3 + 0]);
    meshesProgram.meshes.push(meshesProgram.cachedMeshes[activeVideo*3 + 1]);
    meshesProgram.meshes.push(meshesProgram.cachedMeshes[activeVideo*3 + 2]);
    updateMeshProgramVertices(meshesProgram.meshes);

    meshesProgram.registeredMeshesCount = meshesProgram.meshes.length;
}

function createMeshPointsProgram() {
    var Program = getShader(shader_meshpointv, getMeshPointf());
    Program.aPosition = gl.getAttribLocation(Program, "aPosition");

    Program.uPerspective = gl.getUniformLocation(Program, "uPerspective");
    Program.uModel       = gl.getUniformLocation(Program, "uModel");
    Program.uView        = gl.getUniformLocation(Program, "uView");

    Program.uMaxSize        = gl.getUniformLocation(Program, "uMaxSize");
    
    Program.buffer = gl.createBuffer();
    Program.count = 0;

    meshPointsProgram = Program;
}

function addMesh(mesh_str, id, scale) {
    var mesh = JSON.parse(mesh_str);
    return new Mesh(mesh, id, scale);
}

/**
 * This class is comprised of three main buffers:
 * this.vertices              is the buffer of vertices straight from the JSON object
 * 
 * this.transformedVertices   is the buffer containing vertices which have been normalized (blender swaps axis) and translated.
 *                            it's only used in the pointProgram's routine which will move points around as a point of reference
 *                            which will attract the actual points on screen
 * 
 * this.verticesFromPoints    will be filled each frame. Every point in points[] which was assigned to this mesh, will 
 *                            be copied temporarily in this array. We will then create a triangulization out of it 
 */
function Mesh(jsonObj, id, scale) {
    var mesh = jsonObj.meshes[0];
    this.vertices = mesh.vertices;
    this.vertexCount = mesh.vertices.length / 3; 
    this.scale    = scale || 3;
    // this.translatex = window.meshCenter[0];
    // this.translatey = window.meshCenter[1];
    this.visible = true;
    this.verticesGrabbed = 0;
    this.id = id;

    // animation state ---    -1 means no animation
    this.t     = 0;
    this.notifyRelease = false;       // notify when grabbed vertices needs to be released
    this.grab  = false;               // set to true if this mesh should start gathering vertices

    /* flatten faces array */
    this.faces = [];
    for(var i = 0, l = mesh.faces.length; i < l; i++) {
        this.faces.push(mesh.faces[i][0], mesh.faces[i][1], mesh.faces[i][2]);
    }


    /* flatten colors array */
    // .ply format creates an array of array of colors, and there's only one array of colors in each mesh
    this.colors = mesh.colors[0];
    this.opacityMult = 1.25;


    // blender is swapping z with y
    // also the y direction needs to be flipped
    var lastId = meshesProgram.lastId;
    this.transformedVertices = [];
    for(var i = 0, l = mesh.vertices.length / 3; i < l; i++) {
        this.transformedVertices.push(new Point(
            +mesh.vertices[i * 3 + 0] * this.scale, // + this.translatex, 
            -mesh.vertices[i * 3 + 2] * this.scale, // + this.translatey, 
            false, 
            lastId + i
        ));
    }
    meshesProgram.lastId = lastId + i;







    // those vertices will be gathered from the array ->  points[]    when points[i].meshId equals this mesh index;
    this.verticesFromPoints = new Float32Array(this.vertexCount * 2);       
    /**
     * Iterate through all the points in -> points[]   
     * if all the vertices were grabbed for a given mesh, 
     * start populating mesh.verticesFromPoints with values directly taken from    points[]   
     */
    this.fillVerticesFromPoints = function() {
        // we didn't grab enough vertices yet, skip this mesh
        if(this.verticesGrabbed !== this.vertexCount) return;
        
        for(var i = 0; i < points.length; i++) {

            // this point is not associated with the selected mesh
            if(points[i].meshId !== this.id) continue;

            var vx = points[i].x;
            var vy = points[i].y;

            // if this mesh has 127 vertices, meshVertexId will be a number between 0 to 126
            var vid = points[i].meshVertexId;

            this.verticesFromPoints[vid * 2 + 0] = vx;
            this.verticesFromPoints[vid * 2 + 1] = vy;
        }
    };

    /**
     * fade-out animation completed, reset this mesh and release the grabbed vertices
     */
    this.reset = function() {
        this.verticesGrabbed = 0;

        // animation state ---    -1 means no animation
        this.t     = 0;
        this.notifyRelease = false;       // notify when grabbed vertices needs to be released

        // release grabbed vertices
        for(var i = 0; i < points.length; i++) {
            if(points[i].meshId === this.id) {
                points[i].meshId = -1;
                points[i].meshVertexId = -1;
            }
        }

        this.grab  = false;
    };
}

function updateMeshProgramVertices(meshes, deltatime) {



    /**
     * Iterate through all the points in -> points[]   
     * if all the vertices were grabbed for a given mesh, 
     * start populating mesh.verticesFromPoints with values directly taken from    points[]   
     */

    // put a visibility check to skip non-visible meshes
    for(var m = 0; m < meshes.length; m++) {
        var mesh = meshesProgram.meshes[m];
        mesh.fillVerticesFromPoints();
    }




    /**
     * Construct a triangulation for each mesh from it's member mesh.faces - a flattened array of vertex indexes
     */
    var vertices = [];   
    var meshpointsvertices = []; 
    for(var i = 0; i < meshes.length; i++) {
        var scale = meshes[i].scale;
        var mesh = meshes[i];

        // skip if not ready
        if(mesh.verticesGrabbed !== mesh.vertexCount) continue;




            // safe to say we're ready to animate from here on




        // now check if mesh should fade out or release it's grabbed vertices
        if(mesh.notifyRelease) { 
            mesh.t = mesh.t > 1 ? 1 : mesh.t - deltatime;
            // if fade animation is done, reset this mesh and skip triangulation
            if(mesh.t <= 0.0) {
                mesh.reset();   // reset mesh
                continue;       // skip triangulation
            }   
        } else {
            // we're not fading out - then increase the opacity
            mesh.t += deltatime;
        }



        /* here we're pushing the meshes triangulation */

        // mesh.faces at this point is a flattened array of vertex indices
        for(var j = 0; j < mesh.faces.length; j++) {    
            // mesh.faces[j] just represents a vertex's ID - the array was flattened
            var vertexID = mesh.faces[j];

            var vx = mesh.verticesFromPoints[   vertexID * 2 + 0   ];
            var vy = mesh.verticesFromPoints[   vertexID * 2 + 1   ];


            // var floorIdx = Math.floor(j / 3);
            var floorIdx = j;

            vertices.push(vx, vy, mesh.t, floorIdx,  mesh.colors[vertexID * 4 + 0] * mesh.opacityMult,0,0,0);
        }


        /* here we're pushing the meshes variables width lines */

        // mesh.faces at this point is a flattened array of vertex indices
        for(var j = 0; j < mesh.faces.length / 3; j++) {    
            /* gather the vertices of this triangle */
                                                // mesh.faces[j] just represents a vertex's ID - the array was flattened
            var vx1 = mesh.verticesFromPoints[   mesh.faces[j*3 +0] * 2 + 0   ];
            var vy1 = mesh.verticesFromPoints[   mesh.faces[j*3 +0] * 2 + 1   ];

            var vx2 = mesh.verticesFromPoints[   mesh.faces[j*3 +1] * 2 + 0   ];
            var vy2 = mesh.verticesFromPoints[   mesh.faces[j*3 +1] * 2 + 1   ];

            var vx3 = mesh.verticesFromPoints[   mesh.faces[j*3 +2] * 2 + 0   ];
            var vy3 = mesh.verticesFromPoints[   mesh.faces[j*3 +2] * 2 + 1   ];

            /* ... and create a variable width line out of it */
            pushLine(vx1, vy1, vx2, vy2, vertices, j, mesh.t);
            pushLine(vx1, vy1, vx3, vy3, vertices, j, mesh.t);
            pushLine(vx2, vy2, vx3, vy3, vertices, j, mesh.t);
        }


        /* pushing custom mesh points to their buffer */
        for(var j = 0; j < mesh.faces.length; j++) {    
                                                // mesh.faces[j] just represents a vertex's ID - the array was flattened
            var vx1 = mesh.verticesFromPoints[   mesh.faces[j] * 2 + 0   ];
            var vy1 = mesh.verticesFromPoints[   mesh.faces[j] * 2 + 1   ];

            meshpointsvertices.push(vx1, vy1, -10, mesh.t);
        }
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, meshPointsProgram.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(meshpointsvertices), gl.STATIC_DRAW);
    meshPointsProgram.count = meshpointsvertices.length / 4;

    gl.bindBuffer(gl.ARRAY_BUFFER, meshesProgram.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    meshesProgram.count = vertices.length / 8;
}




/* constructs a variable width line from two vertices and pushes it in vertices[] */
function pushLine(vx1, vy1, vx2, vy2, vertices, j, z) {

    var vecx = vx2 - vx1;
    var vecy = vy2 - vy1;
    /* normalize */
    var d = Math.sqrt(vecx*vecx + vecy*vecy);
    vecx /= d;
    vecy /= d;
    // line normal     (y, -x)
    var lnx = vecy;
    var lny = -vecx;

    var length = 0.010;

    var v1x = vx1 - lnx * length; 
    var v1y = vy1 - lny * length; 
    var v2x = vx1 + lnx * length; 
    var v2y = vy1 + lny * length; 
    var v3x = vx2 + lnx * length; 
    var v3y = vy2 + lny * length; 

    var v4x = vx1 - lnx * length; 
    var v4y = vy1 - lny * length; 
    var v5x = vx2 + lnx * length; 
    var v5y = vy2 + lny * length; 
    var v6x = vx2 - lnx * length; 
    var v6y = vy2 - lny * length; 

    /*
    
   41_2
    | |
    | |
    | |
    | |
   6|_|35
    
    */

    var idx1 = Math.floor(((Math.sin(j + 254) * 0.5 + 0.5) * 4257));
    var idx2 = idx1 + 1.0;

    vertices.push(v1x, v1y, z, idx1,   1,0,0,0);
    vertices.push(v2x, v2y, z, idx1,   1,0,0,0);
    vertices.push(v3x, v3y, z, idx2,   1,0,0,0);

    vertices.push(v4x, v4y, z, idx1,   1,0,0,0);
    vertices.push(v5x, v5y, z, idx2,   1,0,0,0);
    vertices.push(v6x, v6y, z, idx2,   1,0,0,0);
}



/* called at every update */
function checkMouseFocus() {

    var boundMesh = meshesProgram.meshes[meshesProgram.currentlyBoundMeshId];

    if(mouseController.infocus) {
        // start grabbing vertices if we haven't already
        if(boundMesh.verticesGrabbed !== boundMesh.vertexCount) boundMesh.grab = true;
        // if we were in release state, but the   t   didn't reach 0, set notify to false and revert the opacity back
        if(boundMesh.notifyRelease) boundMesh.notifyRelease = false;
    } else {
        // we've lost focus, notify release for all meshes
        for(var i = 0; i < meshesProgram.registeredMeshesCount; i++) {
            meshesProgram.meshes[i].notifyRelease = true;
        }  

        // please note that even if we're setting true to every mesh, as soon as the bound mesh is in focus, this if statement
        // will set the notify release of the bound mesh to false
    }
}





/* swaps the active meshes */
function swapMeshes() {



    // why mouse controller needs not to take this function into account:
    // mouse controller only says if we're infocus or not, and which mesh is currently boundMesh
    // if we place swapMeshes just after checkMouseFocus we won't need any other change,
    // this function will eventually override the effects of checkMouseFocus
    
    
    
    //   -z forward
    //   y  up



    var ready = true;

    for(var i = 0; i < 3; i++) {
        var mesh = meshesProgram.meshes[i];
        /* if there's still some mesh not yet faded */
        if(mesh.t > 0) {
            if(mesh.notifyRelease === false) mesh.notifyRelease = true;
            ready = false;
        }
    }

    /* some mesh is still visible */
    if(!ready) return;





    /* now we can swap meshes */
    meshesProgram.meshes = [];


    // change also the first loop
    // change also the first loop
    // change also the first loop
    var startMeshIdx = currentVideo * 3;
    for(var i = startMeshIdx; i < startMeshIdx + 3; i++) {
        meshesProgram.meshes.push(meshesProgram.cachedMeshes[i]);
    }

    meshesProgram.currentlyBoundMeshId = 0;


    /* set global swappingMeshes to false - job is done */
    swappingMeshes = false;
}