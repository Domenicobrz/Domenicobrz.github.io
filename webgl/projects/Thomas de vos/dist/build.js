'use strict';

//In order for the script to work, you need to declare the gl variable globally
function getShader(vshad_str, fshad_str) {
    var vs = shader(vshad_str, 'vert');
    var fs = shader(fshad_str, 'frag');

    var Program = gl.createProgram();

    gl.attachShader(Program, vs);
    gl.attachShader(Program, fs);
    gl.linkProgram(Program);

    if (!gl.getProgramParameter(Program, gl.LINK_STATUS)) {
        alert("Could not initialise shaders");
        return null;
    }

    return Program;
}

function shader(str, type) {

    var shader;
    if (type == "frag") {
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    } else if (type == "vert") {
        shader = gl.createShader(gl.VERTEX_SHADER);
    } else {
        return null;
    }

    gl.shaderSource(shader, str);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader) + "  " + type);
        console.log(str);
        return null;
    }

    return shader;
}
"use strict";

function get_texture(path, mipmap) {
    var image = new Image();
    var texture = gl.createTexture();
    image.onload = function (image, texture, mipmap) {

        return function () {

            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

            if (mipmap === true) {
                gl.generateMipmap(gl.TEXTURE_2D);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
            }

            gl.bindTexture(gl.TEXTURE_2D, null);
        };
    }(image, texture, mipmap);

    image.src = path;
    return texture;
}
"use strict";

function rnd(between) {
    return Math.random() * between * 2 - between;
}

// function srnd(between, seed) {
//     return Math.random(seed) * between * 2 - between;
// }


function srnd(between, seed) {
    var x = Math.sin(seed) * 10000;
    return (x - Math.floor(x)) * between * 2 - between;
}

// should be 0...1
function usrnd(seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x) + 0.3;
}

function smoothstep(t) {
    return t * t * (3 - 2 * t);
}
"use strict";

function generateQuadtree(vertices, x1, y1, x2, y2) {
    var stack = [];
    var rootNode = new Node(vertices, 0, x1, x2, y1, y2);

    stack.push(rootNode);

    while (stack.length > 0) {}
}

function Node(vertices, depth, x1, x2, y1, y2) {
    this.vertices = vertices;
    this.nChildren = vertices.length / 4;
    this.depth = 0;
    this.empty = vertices === undefined ? true : false;

    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
}
"use strict";

function Nodes() {

            function generateNodes() {
                        var vertices = [];
                        var z = -10;

                        for (var i = 0; i < dimx; i++) {
                                    for (var j = 0; j < dimy; j++) {

                                                var x1 = i;var y1 = j;
                                                var x2 = i;var y2 = j + 1;
                                                var x3 = i + 1;var y3 = j;
                                                var x4 = i + 1;var y4 = j + 1;

                                                x1 = x1 / dimx * gridExtentx * 2 - gridExtentx;
                                                x2 = x2 / dimx * gridExtentx * 2 - gridExtentx;
                                                x3 = x3 / dimx * gridExtentx * 2 - gridExtentx;
                                                x4 = x4 / dimx * gridExtentx * 2 - gridExtentx;

                                                y1 = y1 / dimy * gridExtenty * 2 - gridExtenty;
                                                y2 = y2 / dimy * gridExtenty * 2 - gridExtenty;
                                                y3 = y3 / dimy * gridExtenty * 2 - gridExtenty;
                                                y4 = y4 / dimy * gridExtenty * 2 - gridExtenty;

                                                vertices.push(x1, y1, z, 1, 1, 1, 1, 8, x3, y3, z, 1, 1, 1, 1, 8, x3, y3, z, 1, 1, 1, 1, 8, x4, y4, z, 1, 1, 1, 1, 8, x4, y4, z, 1, 1, 1, 1, 8, x2, y2, z, 1, 1, 1, 1, 8, x2, y2, z, 1, 1, 1, 1, 8, x1, y1, z, 1, 1, 1, 1, 8);
                                    }
                        }return vertices;
            }

            // needs to be odd
            var dimy = 15;
            var dimx = Math.floor(15 * screenRatio) + 1;
            var grid = []; // an array containing arrays of points
            // grid[0] is an array of points inside the block 0
            // grid[0][0] is the first point in the block 0 of the grid structure

            // var gridSideSize  = 1; // measured in world space
            var gridExtentx = hwh * dimx / dimy; // from -5 to 5
            var gridExtenty = hwh;
            var gridSizex = gridExtentx * 2;
            var gridSizey = gridExtenty * 2;

            function generateNodeStructure(points) {
                        grid = [];

                        for (var i = 0, l = points.length; i < l; i++) {

                                    var step1 = points[i].x + gridExtentx;
                                    var step2 = step1 / gridSizex;
                                    var step3 = step2 * dimx;
                                    var step4 = Math.floor(step3);

                                    var ix = Math.floor((points[i].x + gridExtentx) / gridSizex * dimx);
                                    // var ix = Math.floor(((points[i].x + gridExtentx) / gridSizex) * dimx); 
                                    var iy = Math.floor((points[i].y + gridExtenty) / gridSizey * dimy);

                                    // this assignment needs to be here otherwise bugs
                                    points[i].ix = ix;
                                    points[i].iy = iy;

                                    if (ix < 0 || iy < 0 || ix >= dimx || iy >= dimy) continue;

                                    var index = iy * dimx + ix;

                                    if (grid[index] === undefined) grid[index] = [];
                                    grid[index].push(points[i]);
                        }

                        return grid;
            }

            function generateLines() {
                        // console.time('start');

                        var lines = [];
                        var closestFourIndexes = [-1, -1, -1, -1];
                        var closestFourDistances = [999999, 999999, 999999, 999999];
                        // var linehashes = {};
                        // var lineIndex = 0;

                        for (var ln = 0; ln < points.length; ln++) {
                                    var point = points[ln];

                                    if (point.ix < 0 || point.iy < 0 || point.ix >= dimx || point.iy >= dimy) continue;

                                    // var howfar = Math.max(hww * 0.85 - point.x, point.y - hwh * 0.85) / ((hwh + hww) * 0.5);  
                                    // var dist =   Math.min(distance * howfar + 0.1, 0.6);

                                    // var luckyone = false;
                                    // if(Math.sin(point.id) > 0.999) { 
                                    //     dist = dist * 2;
                                    //     luckyone = true;                
                                    // }

                                    closestFourIndexes[0] = -1;
                                    closestFourIndexes[1] = -1;
                                    closestFourIndexes[2] = -1;
                                    closestFourIndexes[3] = -1;
                                    closestFourDistances[0] = 999999;
                                    closestFourDistances[1] = 999999;
                                    closestFourDistances[2] = 999999;
                                    closestFourDistances[3] = 999999;

                                    var px = point.x;
                                    var py = point.y;

                                    var c1y = py - hwh * 0.3;
                                    var c1x = px - hwh * 0.3;
                                    var c2y = py + hwh * 0.3;
                                    var c2x = px + hwh * 0.3;

                                    var ix1 = Math.floor((c1x + gridExtentx) / gridSizex * dimx);
                                    var iy1 = Math.floor((c1y + gridExtenty) / gridSizey * dimy);
                                    var ix2 = Math.floor((c2x + gridExtentx) / gridSizex * dimx);
                                    var iy2 = Math.floor((c2y + gridExtenty) / gridSizey * dimy);

                                    // var sqd = dist * dist;
                                    // var sqd = dist * dist;

                                    // variable size checkup
                                    for (var i = iy1; i <= iy2; i++) {
                                                for (var j = ix1; j <= ix2; j++) {

                                                            var idx = j;
                                                            var idy = i;

                                                            if (idy < 0 || idx < 0 || idx >= dimx || idy >= dimy) continue;

                                                            if (grid[idy * dimx + idx] === undefined) continue;

                                                            var blockPoints = grid[idy * dimx + idx];

                                                            for (var r = 0; r < blockPoints.length; r++) {
                                                                        var blockpoint = blockPoints[r];

                                                                        if (blockpoint === point) continue;

                                                                        if (effectsController.intersectionSubset) {
                                                                                    if (blockpoint.id % 2 === 0) continue;
                                                                        }

                                                                        var vx = point.x - blockpoint.x;
                                                                        var vy = point.y - blockpoint.y;
                                                                        var dst = vx * vx + vy * vy;

                                                                        // if(d <= sqd) {
                                                                        //         var doverdist = d / sqd;
                                                                        //         var opacity2  = luckyone ? 0.25 : 1;
                                                                        //                                                            // aFx attribute
                                                                        //         lines.push(point.x, point.y, -10, 1,              point.id,doverdist,opacity2,0,
                                                                        //                    blockpoint.x, blockpoint.y, -10, 1,    blockpoint.id,doverdist,opacity2,0);
                                                                        //     //}
                                                                        // }

                                                                        // if(j % 2 === 0) continue;


                                                                        if (dst < closestFourDistances[0]) {
                                                                                    closestFourDistances[3] = closestFourDistances[2];
                                                                                    closestFourDistances[2] = closestFourDistances[1];
                                                                                    closestFourDistances[1] = closestFourDistances[0];

                                                                                    closestFourIndexes[3] = closestFourIndexes[2];
                                                                                    closestFourIndexes[2] = closestFourIndexes[1];
                                                                                    closestFourIndexes[1] = closestFourIndexes[0];

                                                                                    closestFourDistances[0] = dst;
                                                                                    closestFourIndexes[0] = blockpoint.id;
                                                                                    continue;
                                                                        }

                                                                        if (dst < closestFourDistances[1]) {
                                                                                    closestFourDistances[3] = closestFourDistances[2];
                                                                                    closestFourDistances[2] = closestFourDistances[1];

                                                                                    closestFourIndexes[3] = closestFourIndexes[2];
                                                                                    closestFourIndexes[2] = closestFourIndexes[1];

                                                                                    closestFourDistances[1] = dst;
                                                                                    closestFourIndexes[1] = blockpoint.id;
                                                                                    continue;
                                                                        }

                                                                        if (dst < closestFourDistances[2]) {
                                                                                    closestFourDistances[3] = closestFourDistances[2];

                                                                                    closestFourIndexes[3] = closestFourIndexes[2];

                                                                                    closestFourDistances[2] = dst;
                                                                                    closestFourIndexes[2] = blockpoint.id;
                                                                                    continue;
                                                                        }

                                                                        if (dst < closestFourDistances[3]) {
                                                                                    closestFourDistances[3] = dst;
                                                                                    closestFourIndexes[3] = blockpoint.id;
                                                                        }
                                                            } // end block point for loop
                                                }
                                    }linesProgram.verticesBuffer[ln * 32 + 0] = ln;
                                    linesProgram.verticesBuffer[ln * 32 + 1] = closestFourIndexes[0];
                                    linesProgram.verticesBuffer[ln * 32 + 2] = 0;
                                    linesProgram.verticesBuffer[ln * 32 + 3] = 0;

                                    linesProgram.verticesBuffer[ln * 32 + 4] = closestFourIndexes[0];
                                    linesProgram.verticesBuffer[ln * 32 + 5] = ln;
                                    linesProgram.verticesBuffer[ln * 32 + 6] = 0;
                                    linesProgram.verticesBuffer[ln * 32 + 7] = 0;

                                    linesProgram.verticesBuffer[ln * 32 + 8] = ln;
                                    linesProgram.verticesBuffer[ln * 32 + 9] = closestFourIndexes[1];
                                    linesProgram.verticesBuffer[ln * 32 + 10] = 0;
                                    linesProgram.verticesBuffer[ln * 32 + 11] = 0;

                                    linesProgram.verticesBuffer[ln * 32 + 12] = closestFourIndexes[1];
                                    linesProgram.verticesBuffer[ln * 32 + 13] = ln;
                                    linesProgram.verticesBuffer[ln * 32 + 14] = 0;
                                    linesProgram.verticesBuffer[ln * 32 + 15] = 0;

                                    linesProgram.verticesBuffer[ln * 32 + 16] = ln;
                                    linesProgram.verticesBuffer[ln * 32 + 17] = closestFourIndexes[2];
                                    linesProgram.verticesBuffer[ln * 32 + 18] = 0;
                                    linesProgram.verticesBuffer[ln * 32 + 19] = 0;

                                    linesProgram.verticesBuffer[ln * 32 + 20] = closestFourIndexes[2];
                                    linesProgram.verticesBuffer[ln * 32 + 21] = ln;
                                    linesProgram.verticesBuffer[ln * 32 + 22] = 0;
                                    linesProgram.verticesBuffer[ln * 32 + 23] = 0;

                                    linesProgram.verticesBuffer[ln * 32 + 24] = ln;
                                    linesProgram.verticesBuffer[ln * 32 + 25] = closestFourIndexes[3];
                                    linesProgram.verticesBuffer[ln * 32 + 26] = 0;
                                    linesProgram.verticesBuffer[ln * 32 + 27] = 1;

                                    linesProgram.verticesBuffer[ln * 32 + 28] = closestFourIndexes[3];
                                    linesProgram.verticesBuffer[ln * 32 + 29] = ln;
                                    linesProgram.verticesBuffer[ln * 32 + 30] = 0;
                                    linesProgram.verticesBuffer[ln * 32 + 31] = 1;
                        } // end of lines for loop
                        // console.timeEnd('start');
                        gl.bindBuffer(gl.ARRAY_BUFFER, linesProgram.linesBuffer);
                        gl.bufferData(gl.ARRAY_BUFFER, linesProgram.verticesBuffer, gl.STATIC_DRAW);
            }

            /**
             *  Mesh lines are NOT registered with registerNodes();
             *  Therefore lines out of the screen will be judged either by mesh visibility or by points going over the grid extent instead of grid indices
             */
            function generateMeshLines(distance, meshes) {

                        var lines = [];
                        var linehashes = {};

                        for (var m = 0; m < meshes.length; m++) {
                                    for (var ln = 0; ln < meshes[m].points.length; ln++) {
                                                var point = meshes[m].points[ln];

                                                if (point.x < -gridExtentx || point.y < -gridExtenty || point.x > gridExtentx || point.y > gridExtenty) continue;

                                                var dist = distance;

                                                var px = point.x;
                                                var py = point.y;

                                                var c1y = py - dist;
                                                var c1x = px - dist;
                                                var c2y = py + dist;
                                                var c2x = px + dist;

                                                var ix1 = Math.floor((c1x + gridExtentx) / gridSizex * dimx);
                                                var iy1 = Math.floor((c1y + gridExtenty) / gridSizey * dimy);
                                                var ix2 = Math.floor((c2x + gridExtentx) / gridSizex * dimx);
                                                var iy2 = Math.floor((c2y + gridExtenty) / gridSizey * dimy);

                                                var sqd = dist * dist;

                                                // variable size checkup
                                                for (var i = iy1; i <= iy2; i++) {
                                                            for (var j = ix1; j <= ix2; j++) {

                                                                        var idx = j;
                                                                        var idy = i;

                                                                        if (idy < 0 || idx < 0 || idx >= dimx || idy >= dimy) continue;

                                                                        if (grid[idy * dimx + idx] === undefined) continue;

                                                                        var blockPoints = grid[idy * dimx + idx];

                                                                        for (var r = 0; r < blockPoints.length; r++) {
                                                                                    var blockpoint = blockPoints[r];

                                                                                    if (blockpoint === point) continue;

                                                                                    var vx = point.x - blockpoint.x;
                                                                                    var vy = point.y - blockpoint.y;
                                                                                    var d = vx * vx + vy * vy;

                                                                                    if (d <= sqd) {
                                                                                                //blockpoint.neighbor = true;

                                                                                                //var hashpart1 = "i" + point.id;
                                                                                                //var hashpart2 = "i" + blockpoint.id;
                                                                                                //if(linehashes[hashpart1 + hashpart2] === undefined && 
                                                                                                //   linehashes[hashpart2 + hashpart1] === undefined) {
                                                                                                //    linehashes[hashpart1 + hashpart2] = 1;

                                                                                                var doverdist = d / sqd;
                                                                                                var opacity2 = dist > distance ? 0.25 : 1;
                                                                                                // aFx attribute
                                                                                                lines.push(point.x, point.y, -10, 1, point.id, doverdist, opacity2, 0, blockpoint.x, blockpoint.y, -10, 1, blockpoint.id, doverdist, opacity2, 0);
                                                                                                //}
                                                                                    }
                                                                        }
                                                            }
                                                }
                                    }
                        } // end of lines for loop

                        return lines;
            }

            /* export */

            this.generateNodes = generateNodes;
            this.generateMeshLines = generateMeshLines;
            this.generateLines = generateLines;
            this.generateNodeStructure = generateNodeStructure;
}
"use strict";

/**
 * 
 * The pointProgram is responsible for moving the points on screen
 * 
 * If the mouse gets closer to a specific area, it will assign certain points on screen to belong to a specific meshId
 * e.g. with the expression      points[i].meshId = currentlyBoundMeshIndex
 * 
 * The points assigned to a specific mesh will then be used by meshProgram to create a triangulation out of them at each frame
 * 
 */

function drawPoints(now, deltatime) {
    movePoints(now, deltatime);

    gl.useProgram(pointsProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, pointsProgram.pointsBuffer);

    gl.enableVertexAttribArray(pointsProgram.aPosition);
    gl.vertexAttribPointer(pointsProgram.aPosition, 4, gl.FLOAT, false, 0, 0);

    gl.uniformMatrix4fv(pointsProgram.uPerspective, false, perspective);
    gl.uniformMatrix4fv(pointsProgram.uModel, false, model);
    gl.uniformMatrix4fv(pointsProgram.uView, false, view);

    gl.uniform1f(pointsProgram.uPointSize, effectsController.pointSize);

    gl.uniform1f(pointsProgram.uMaxSize, 3.0 / 1366.0 * screen.width);
    gl.uniform1f(pointsProgram.uMaxSize2, 5.0 / 1366.0 * screen.width);

    gl.drawArrays(gl.POINTS, 0, pointsProgram.pointsCount);
}

function createPointsProgram() {
    var Program = getShader(shader_pointv, getPointf());
    Program.aPosition = gl.getAttribLocation(Program, "aPosition");

    Program.uPerspective = gl.getUniformLocation(Program, "uPerspective");
    Program.uModel = gl.getUniformLocation(Program, "uModel");
    Program.uView = gl.getUniformLocation(Program, "uView");

    Program.uPointSize = gl.getUniformLocation(Program, "uPointSize");

    Program.uMaxSize = gl.getUniformLocation(Program, "uMaxSize");
    Program.uMaxSize2 = gl.getUniformLocation(Program, "uMaxSize2");

    /* points buffer creation */
    points = generateRandomPoints(pointsNum);

    Program.pointsDataTexture = createPointsDataTexture();

    nodes.generateNodeStructure(points);

    Program.pointsBuffer = gl.createBuffer();

    pointsProgram = Program;
}

function updatePoints() {
    var vertices = preparePointsVerticesLean(points, meshesProgram.meshes);
    pointsProgram.pointsCount = vertices.length / 4;

    gl.bindBuffer(gl.ARRAY_BUFFER, pointsProgram.pointsBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);
}

function generateRandomPoints(num) {
    points = [];

    var worldDiagonal = vec2.fromValues(-hww, hwh * 0.5);
    vec3.normalize(worldDiagonal, worldDiagonal);

    var normalx = -worldDiagonal[1];
    var normaly = +worldDiagonal[0];

    // var diagvecx = -hww * 2 * 1.15;
    // var diagvecy = +hwh * 1 * 1.15;

    var streamstart_x = streamstart_s * hww;
    var streamstart_y = streamstart_t * hwh;

    for (var i = 0; i < num; i++) {
        var xspeed = 0.007 * Math.random() * 1500;
        var yspeed = 0.007 * hwh / hww * Math.random() * 1500;

        var x = streamstart_x - hww * 2 * (i * 0.0015) + normalx * srnd(0.01, i) * i;
        var y = streamstart_y + hwh * 2 * (i * 0.0015) + normaly * srnd(0.002, i) * i;

        points.push(new Point(x, y, false, i));
    }

    return points;
}

function Point(x, y, green, id) {
    this.x = x;
    this.y = y;
    this.ix = undefined;
    this.iy = undefined;
    this.green = green;
    this.neighbor = false;
    this.id = id;
    this.velocity = [0, 0, 0];
    this.meshId = -1;
    this.meshVertexId = -1;
}

function preparePointsVertices(points) {
    var vertices = [];

    for (var i = 0, l = points.length; i < l; i++) {

        if (i < l - 1 && !points[i].neighbor) {
            vertices.push(points[i].x, points[i].y, -10, 1);
        } else if (i < l - 1 && points[i].neighbor) {
            vertices.push(points[i].x, points[i].y, -10, 3);
        } else vertices.push(points[i].x, points[i].y, -10, 2);
    }

    return vertices;
}

function preparePointsVerticesLean(points, meshes) {
    var vertices = [];

    for (var i = 0, l = points.length; i < l; i++) {
        vertices.push(points[i].x, points[i].y, -10, 1);
    }

    // deprecated. Now the points in the scene will be moved to display the shape of an icon

    // for(var i = 0, l = meshes.length; i < l; i++) 
    // for(var j = 0, t = meshes[i].points.length; j < t; j++) {
    //     var point = meshes[i].points[j];
    //     vertices.push(point.x, point.y, -10, 1);     
    // }

    return vertices;
}

var pointsResetDeltaTime = 0;
function movePoints(now, deltatime) {

    pointsResetDeltaTime += deltatime;

    var canGrab = false;
    var boundMesh = meshesProgram.meshes[meshesProgram.currentlyBoundMeshId];

    if (boundMesh.grab && boundMesh.verticesGrabbed < boundMesh.vertexCount) canGrab = true;

    var xspeed = effectsController.streamSpeed;
    var yspeed = effectsController.streamSpeed * hwh / hww;

    var speedRatio = yspeed / xspeed;

    // general purpose vector buffers
    var gpvb = [0, 0];
    var gpvb2 = [canvas.height, canvas.width];
    vec2.normalize(gpvb2, gpvb2);

    var papx = -xspeed;
    var papy = +yspeed;
    var panx = -papy;
    var pany = +papx;

    // var pointAngleMaxPositive = Math.atan2(-pany, -panx);
    // // changing domain from 0...PI && 0...-PI  to    0...2PI
    // if(pointAngleMaxPositive < 0) pointAngleMaxPositive = Math.PI * 2 - Math.abs(pointAngleMaxPositive);
    // pointAngleMaxPositive += Math.PI;

    // var pointAngleMaxNegative = Math.atan2(pany, panx);
    // if(pointAngleMaxNegative < 0) pointAngleMaxNegative = Math.PI * 2 - Math.abs(pointAngleMaxNegative);
    // pointAngleMaxNegative -= Math.PI / 2.5;


    var pointAngleStart = Math.atan2(-yspeed, +xspeed);
    var targetAngle = Math.atan2(+yspeed, -xspeed);

    var streamstart_x = streamstart_s * hww;
    var streamstart_y = streamstart_t * hwh;
    var streamMaxHeight = (hww * 2 - (streamstart_y + hww)) * speedRatio * 1.1;

    var fireRate = 0.2 - effectsController.fireRate * 0.02;

    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        // console.log(usrnd(points[i].id));

        var radius = effectsController.rotationOffset;
        // if this point is not bound to the current mesh, or is bound to a mesh with notifyRelease, move it along the rest of the stream
        if (point.meshId !== boundMesh.id || boundMesh.notifyRelease) {
            // if(point.meshId === -1 || boundMesh.notifyRelease) {

            // domain  +1...-1
            var cos = Math.cos((point.x + hww) / (hww + streamstart_x) * Math.PI);
            // domain  1...0  to ->  y world height             
            var y = (cos * 0.5 + 0.5) * streamMaxHeight + streamstart_y;

            var cos2 = Math.cos((point.x - xspeed + hww) / (hww + streamstart_x) * Math.PI);
            var y2 = (cos2 * 0.5 + 0.5) * streamMaxHeight + streamstart_y;

            // fix1.
            // y2 += 0.003;


            // ORIGINAL MULT - BEFORE FIX.1
            // cos * 0.5 + 0.5           1...0   <--
            // mult                      0...1   <--
            // var mult = Math.pow(1 - (cos * 0.5 + 0.5), 1.0);

            // fix1.
            var mult = Math.pow(1 - (cos * 0.5 + 0.5), 0.5);

            // suby                      0.45...-0.55   <--
            // var suby = 1 - mult - 0.55;
            // Fix1.
            var suby = 1 - mult - 0.75;
            // suby                      0.45...0       <--            
            if (suby < 0) suby = 0;

            /**
             *    0.005   is the aperture, or randomness of directions at the beginning of the stream
             *    mult is responsible to lower this random aperture and let the particles follow the cosing wave 
             *          it lowers the aperture depending on the x coordinate. Lower x-coordinates means a smaller aperture
             *          and points following the cosine wave more and more instead of random directions
             *    suby    at a certain x direction, points will additionally start to fall down a bit to make the stream look better
             */
            var vectorx = -xspeed + srnd(effectsController.waveAperture, point.id) * mult;
            var vectory = y2 - y + (srnd(effectsController.waveAperture, point.id + 3427) + 0.001) * mult - suby * 0.01;

            point.x += Math.sin(now * effectsController.rotationOffsetSpeed + point.id) * radius + vectorx;
            point.y += Math.cos(now * effectsController.rotationOffsetSpeed + point.id) * radius + vectory;
        } else {
            point.x += Math.sin(now * effectsController.rotationOffsetSpeed + point.id) * 0.0009;
            point.y += Math.cos(now * effectsController.rotationOffsetSpeed + point.id) * 0.0009;
        }

        // mouse input velocity
        // if(mouseController.velocity[0] > 0) {
        var pmmx = point.x - mouseController.origin[0];
        var pmmy = point.y - mouseController.origin[1];
        var distanceFromMouseOrigin = Math.abs(Math.sqrt(pmmx * pmmx + pmmy * pmmy));
        if (distanceFromMouseOrigin < 2) {
            distanceFromMouseOrigin = 1 - distanceFromMouseOrigin / 2;
            distanceFromMouseOrigin = Math.pow(distanceFromMouseOrigin, 6.0);
        } else distanceFromMouseOrigin = 0;

        // var t = 1 - Math.min(distanceFromMouseOrigin / 10.0, 1);
        var mouseVelMult = point.meshId === boundMesh.id ? 0.05 : effectsController.mouseStrenght;
        point.velocity[0] += mouseController.velocity[0] * distanceFromMouseOrigin * mouseVelMult;
        point.velocity[1] += mouseController.velocity[1] * distanceFromMouseOrigin * mouseVelMult;
        // }

        if (point.velocity[0] > 0.3) point.velocity[0] = +0.3;
        if (point.velocity[0] < -0.3) point.velocity[0] = -0.3;
        if (point.velocity[1] > 0.3) point.velocity[1] = +0.3;
        if (point.velocity[1] < -0.3) point.velocity[1] = -0.3;

        point.velocity[0] *= 0.985;
        point.velocity[1] *= 0.985;

        point.x += point.velocity[0] *= 0.99;
        point.y += point.velocity[1] *= 0.99;

        // all the points need not to go to the center, there has to be a circle where no point other than the grabbed ones are displayed
        if (boundMesh.grab && effectsController.toggleFocusCircle) {
            // all the other points not bound to any mesh will need to be pushed away from the center
            if (point.meshVertexId === -1) {

                /* first we calculate the distance from the focus point */
                var meshCenterx = mouseController.focusPointWorld[0] - hww * 0.03;
                var meshCentery = mouseController.focusPointWorld[1] - hwh * 0.03;

                // point.x minus focus.x
                var pxmfx = point.x - meshCenterx;
                var pymfy = point.y - meshCentery;
                var distanceFromFocus = pxmfx * pxmfx + pymfy * pymfy;

                /* if we're in the focus circle */
                if (distanceFromFocus < effectsController.focusCircleRadius) {
                    // will be used to differentiate between points that need to rotate CW to points that will rotate CCW
                    // var riseoverfall = Math.abs((pymfy - (-hwh)) / (pxmfx - (hww)));
                    // var rotateCW = speedRatio > riseoverfall ? true : false;

                    gpvb[0] = pxmfx;
                    gpvb[1] = pymfy;
                    var dot = vec2.dot(gpvb, gpvb2);
                    var rotateCW = dot < 0 ? true : false;

                    var angle = -0.01;
                    if (!rotateCW) angle = -angle;

                    /**
                     * THE REBOUNCE BUG is probably caused by vertices that have completed the rotation and whose
                     * circular velocity (which we add to every vertex to randomize it's position) is pushing them back in 
                     * an angle big enough to restart rotation 
                     */

                    // using the translated points to calculate their angle in respect to the focus circle
                    var pointAngle = Math.atan2(pymfy, pxmfx) - pointAngleStart; // point angle start is negative
                    // changing angle domain to 0...2PI
                    if (pointAngle < 0) pointAngle = Math.PI * 2 - Math.abs(pointAngle);

                    var deltaAngle = (targetAngle - pointAngle) * 0.005;
                    angle = deltaAngle;

                    //if(pointAngle < pointAngleMaxPositive || pointAngle > pointAngleMaxNegative) {

                    /*   "translate to center"   */
                    var translatedx = pxmfx;
                    var translatedy = pymfy;

                    /*   rotate   */
                    translatedx = translatedx * Math.cos(angle) - translatedy * Math.sin(angle);
                    translatedy = translatedy * Math.cos(angle) + translatedx * Math.sin(angle);

                    /*   put back in place   */
                    point.x = translatedx + meshCenterx;
                    point.y = translatedy + meshCentery;
                    //}

                    // create a force to push closer from the center
                    point.velocity[0] += -pxmfx * (0.0003 / (distanceFromFocus + 1));
                    point.velocity[1] += -pymfy * (0.0003 / (distanceFromFocus + 1));
                }
            }
        }

        if (canGrab) grabPoint(point, boundMesh);
        if (point.meshId === boundMesh.id) moveGrabbedPoint(point, boundMesh);

        if ((point.x < -hww * 1.05 || point.x > +hww * 1.05 || point.y < -hwh * 1.05 || point.y > +hwh * 1.05) && pointsResetDeltaTime > fireRate && point.meshId === -1) {

            point.x = streamstart_x;
            point.y = streamstart_y;

            pointsResetDeltaTime = 0;
        }
    }

    // nodes.generateNodeStructure(points);    
}

function createPointsDataTexture() {
    var texture = gl.createTexture();

    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, pointsNum, 0, gl.RGBA, gl.FLOAT, null);

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    gl.bindTexture(gl.TEXTURE_2D, null);

    return texture;
}

function updatePointsDataTexture() {
    var pointsTextureBuffer = [];
    for (var i = 0; i < points.length; i++) {

        var opacity = 1;

        /* pointsFromSelfIntersection routine */
        /* explanation: Two points of the same mesh (or of two meshes in general) won't generate a line.
           this prevents circular meshes to generate a gazillion lines between each vertex.
             E.g. inside the linev shader, two vertices are processed.
           If one of those vertices is bound to a mesh, it's opacity will be set to zero.
           If the other is not, it's opacity will be set to one.
             The shader will pick the highest opacity between the two, so this line will be rendered at full opacity.
           (this is the case for example for the lines generated between the vertices of a mesh and the surrounding points of the stream)
               If instead, one of those vertices is bound to a mesh, it's opacity will be set to zero.
           If the other is bound to a mesh too, it's opacity will be set to zero.
           Both vertices are part of a mesh, so the generated line is inside of a mesh, and it's opacity needs to be set to zero
             once we're notifying the release of a mesh, the opacity of those "hidden lines" will slowly be faded back to normal
         */

        //if this point is bound to a mesh
        if (points[i].meshVertexId !== -1) {

            opacity = 0;
            // to which mesh is this point bound ?          
            var mesh = meshesProgram.meshes[points[i].meshId];

            // this is related to -> opacityFromSelfIntersection
            if (mesh.notifyRelease) {
                opacity = 1 - Math.min(mesh.t);
            }
        }

        pointsTextureBuffer.push(points[i].x, points[i].y, opacity, 0);
    }

    gl.bindTexture(gl.TEXTURE_2D, pointsProgram.pointsDataTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, pointsNum, 1, 0, gl.RGBA, gl.FLOAT, new Float32Array(pointsTextureBuffer));
}

function grabPoint(point, boundMesh) {

    // in this iteration we've found enough vertices, stop looking for others
    if (boundMesh.verticesGrabbed >= boundMesh.vertexCount) return;
    // already assigned to something else, skip this vertex
    if (point.meshId !== -1) return;

    var distanceFromCenter = point.x * point.x + point.y * point.y;
    if (distanceFromCenter > 10) return;

    var vertexId = boundMesh.verticesGrabbed++;

    point.meshId = meshesProgram.currentlyBoundMeshId;
    point.meshVertexId = vertexId;
}

function moveGrabbedPoint(point, boundMesh) {

    // if mesh is fading out
    if (boundMesh.notifyRelease) {
        return; // we're not attracting this point anymore to it's transformed vertices
    }

    // var meshTransformedVertex = boundMesh.transformedVertices[point.meshVertexId];
    // var deltaX = meshTransformedVertex.x - point.x;
    // var deltaY = meshTransformedVertex.y - point.y;


    var meshTransformedVertex = boundMesh.transformedVertices[point.meshVertexId];

    // this solves a strange bug I can't seem to grasp..
    // it seems to happen as soon as you're grabbing a certain amount of vertices, then a swapmeshes event happens,
    // and a new mesh with less vertices is assigned, and somehow those points which were grabbed and assigned with a greater index 
    // than the maximum of the new assigned mesh remains assigned
    // EDIT :   updateMeshProgramVertices() DOESN'T RESET A MESH WHICH DIDN'T HAVE IT'S VERTICES FULLY GRABBED!!
    // so this pretty much solves that bug completely
    if (meshTransformedVertex == undefined) {
        point.meshVertexId = -1;
        return;
    }

    var deltaX = meshTransformedVertex.x + mouseController.focusPointWorld[0] - point.x;
    var deltaY = meshTransformedVertex.y + mouseController.focusPointWorld[1] - point.y;

    point.x += deltaX * 0.04;
    point.y += deltaY * 0.04;
}
"use strict";

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
    gl.vertexAttribPointer(linesProgram.aPosition, 4, gl.FLOAT, false, 0, 0); //step * 8, 0);
    // gl.vertexAttribPointer(linesProgram.aFx,       4, gl.FLOAT, false, step * 8, step * 4);

    gl.uniformMatrix4fv(linesProgram.uPerspective, false, perspective);
    gl.uniformMatrix4fv(linesProgram.uModel, false, model);
    gl.uniformMatrix4fv(linesProgram.uView, false, view);

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
    Program.aId = gl.getAttribLocation(Program, "aId");
    // Program.aFx          = gl.getAttribLocation(Program, "aFx");

    Program.uPerspective = gl.getUniformLocation(Program, "uPerspective");
    Program.uModel = gl.getUniformLocation(Program, "uModel");
    Program.uView = gl.getUniformLocation(Program, "uView");

    Program.uPointsData = gl.getUniformLocation(Program, "uPointsData");
    Program.uColorGradientDistance = gl.getUniformLocation(Program, "uColorGradientDistance");
    Program.uNumPoints = gl.getUniformLocation(Program, "uNumPoints");

    Program.uHwwtsss = gl.getUniformLocation(Program, "uHwwtsss");
    Program.uHwwtsst = gl.getUniformLocation(Program, "uHwwtsst");

    Program.linesBuffer = gl.createBuffer();
    linesProgram = Program;

    var lineHashes = {};
    var verticesBuffer = [];

    for (var i = 0; i < pointsNum; i++) {
        for (var j = 0; j < pointsNum; j++) {
            //var hash1 = "i" + i;
            //var hash2 = "i" + j;
            //var h1h2  = hash1 + hash2;
            //var h2h1  = hash2 + hash1;

            // if(j === i) continue;
            // if(i % 2 === 0) continue;
            // if(j % 2 === 0) continue;
            if (j > 3) continue;

            // i,j represents vertex indices to be taken from pointTexture


            //if(lineHashes[h1h2] === undefined && lineHashes[h2h1] === undefined) {
            //  lineHashes[h1h2] = 1;
            verticesBuffer.push(i, j, 0, 0, /*0,0,0,0,*/j, i, 0, 0 /*, 0,0,0,0*/);
            //}
        }
    }linesProgram.linesCount = verticesBuffer.length / 4;
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

    for (var i = 0; i < pointsNum; i++) {
        for (var j = 0; j < pointsNum; j++) {
            //var hash1 = "i" + i;
            //var hash2 = "i" + j;
            //var h1h2  = hash1 + hash2;
            //var h2h1  = hash2 + hash1;

            // if(j === i) continue;
            // if(i % 2 === 0) continue;
            // if(j % 2 === 0) continue;
            if (j > 3) continue;

            //if(lineHashes[h1h2] === undefined && lineHashes[h2h1] === undefined) {
            //  lineHashes[h1h2] = 1;
            verticesBuffer.push(i, j, 0, 0, /*0,0,0,0,*/j, i, 0, 0 /*, 0,0,0,0*/);
            //}
        }
    }linesProgram.linesCount = verticesBuffer.length / 4;
    linesProgram.verticesBuffer = new Float32Array(verticesBuffer);

    // window.linesFloatBuffer  = new Float32Array(pointsNum * pointsNum * 4 * 2);  // pn * pn lines, comprised of 2 vertices of 8 floats
    gl.bindBuffer(gl.ARRAY_BUFFER, linesProgram.linesBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, linesProgram.verticesBuffer, gl.STATIC_DRAW);
}

function updateLines() {
    // console.time("fill");


    var closestFourIndexes = [-1, -1, -1, -1];
    var closestFourDistances = [999999, 999999, 999999, 999999];

    for (var i = 0; i < pointsNum; i++) {
        // if(i % 2 === 0) continue;


        closestFourIndexes[0] = -1;
        closestFourIndexes[1] = -1;
        closestFourIndexes[2] = -1;
        closestFourIndexes[3] = -1;
        closestFourDistances[0] = 999999;
        closestFourDistances[1] = 999999;
        closestFourDistances[2] = 999999;
        closestFourDistances[3] = 999999;

        for (var j = 0; j < pointsNum; j++) {

            // if(j === i) continue;
            // if(j % 2 === 0) continue;

            var vx = points[i].x - points[j].x;
            var vy = points[i].y - points[j].y;
            var dst = vx * vx + vy * vy;

            // self intersection
            if (dst === 0) continue;

            if (dst < closestFourDistances[0]) {
                closestFourDistances[3] = closestFourDistances[2];
                closestFourDistances[2] = closestFourDistances[1];
                closestFourDistances[1] = closestFourDistances[0];

                closestFourIndexes[3] = closestFourIndexes[2];
                closestFourIndexes[2] = closestFourIndexes[1];
                closestFourIndexes[1] = closestFourIndexes[0];

                closestFourDistances[0] = dst;
                closestFourIndexes[0] = j;
                continue;
            }

            if (dst < closestFourDistances[1]) {
                closestFourDistances[3] = closestFourDistances[2];
                closestFourDistances[2] = closestFourDistances[1];

                closestFourIndexes[3] = closestFourIndexes[2];
                closestFourIndexes[2] = closestFourIndexes[1];

                closestFourDistances[1] = dst;
                closestFourIndexes[1] = j;
                continue;
            }

            if (dst < closestFourDistances[2]) {
                closestFourDistances[3] = closestFourDistances[2];

                closestFourIndexes[3] = closestFourIndexes[2];

                closestFourDistances[2] = dst;
                closestFourIndexes[2] = j;
                continue;
            }

            if (dst < closestFourDistances[3]) {
                closestFourDistances[3] = dst;
                closestFourIndexes[3] = j;
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


    var closestFourIndexes = [-1, -1, -1, -1];
    var closestFourDistances = [999999, 999999, 999999, 999999];

    for (var i = 0; i < pointsNum; i++) {
        // if(i % 2 === 0) continue;


        closestFourIndexes[0] = -1;
        closestFourIndexes[1] = -1;
        closestFourIndexes[2] = -1;
        closestFourIndexes[3] = -1;
        closestFourDistances[0] = 999999;
        closestFourDistances[1] = 999999;
        closestFourDistances[2] = 999999;
        closestFourDistances[3] = 999999;

        for (var j = 0; j < pointsNum; j++) {

            // if(j === i) continue;
            if (j % 2 === 0) continue;

            var vx = points[i].x - points[j].x;
            var vy = points[i].y - points[j].y;
            var dst = vx * vx + vy * vy;

            if (dst < closestFourDistances[0]) {
                closestFourDistances[3] = closestFourDistances[2];
                closestFourDistances[2] = closestFourDistances[1];
                closestFourDistances[1] = closestFourDistances[0];

                closestFourIndexes[3] = closestFourIndexes[2];
                closestFourIndexes[2] = closestFourIndexes[1];
                closestFourIndexes[1] = closestFourIndexes[0];

                closestFourDistances[0] = dst;
                closestFourIndexes[0] = j;
                continue;
            }

            if (dst < closestFourDistances[1]) {
                closestFourDistances[3] = closestFourDistances[2];
                closestFourDistances[2] = closestFourDistances[1];

                closestFourIndexes[3] = closestFourIndexes[2];
                closestFourIndexes[2] = closestFourIndexes[1];

                closestFourDistances[1] = dst;
                closestFourIndexes[1] = j;
                continue;
            }

            if (dst < closestFourDistances[2]) {
                closestFourDistances[3] = closestFourDistances[2];

                closestFourIndexes[3] = closestFourIndexes[2];

                closestFourDistances[2] = dst;
                closestFourIndexes[2] = j;
                continue;
            }

            if (dst < closestFourDistances[3]) {
                closestFourDistances[3] = dst;
                closestFourIndexes[3] = j;
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


    var closestFourIndexes = [-1, -1, -1, -1];
    var closestFourDistances = [999999, 999999, 999999, 999999];

    for (var i = 0; i < pointsNum; i++) {
        // if(i % 2 === 0) continue;


        closestFourIndexes[0] = -1;
        closestFourIndexes[1] = -1;
        closestFourIndexes[2] = -1;
        closestFourIndexes[3] = -1;
        closestFourDistances[0] = 999999;
        closestFourDistances[1] = 999999;
        closestFourDistances[2] = 999999;
        closestFourDistances[3] = 999999;

        for (var j = 0; j < pointsNum; j++) {

            // if(j === i) continue;
            if (j % 2 === 0) continue;

            var vx = points[i].x - points[j].x;
            var vy = points[i].y - points[j].y;
            var dst = vx * vx + vy * vy;

            if (dst < closestFourDistances[0]) {
                closestFourDistances[3] = closestFourDistances[2];
                closestFourDistances[2] = closestFourDistances[1];
                closestFourDistances[1] = closestFourDistances[0];

                closestFourIndexes[3] = closestFourIndexes[2];
                closestFourIndexes[2] = closestFourIndexes[1];
                closestFourIndexes[1] = closestFourIndexes[0];

                closestFourDistances[0] = dst;
                closestFourIndexes[0] = j;
                continue;
            }

            if (dst < closestFourDistances[1]) {
                closestFourDistances[3] = closestFourDistances[2];
                closestFourDistances[2] = closestFourDistances[1];

                closestFourIndexes[3] = closestFourIndexes[2];
                closestFourIndexes[2] = closestFourIndexes[1];

                closestFourDistances[1] = dst;
                closestFourIndexes[1] = j;
                continue;
            }

            if (dst < closestFourDistances[2]) {
                closestFourDistances[3] = closestFourDistances[2];

                closestFourIndexes[3] = closestFourIndexes[2];

                closestFourDistances[2] = dst;
                closestFourIndexes[2] = j;
            }

            if (dst < closestFourDistances[3]) {
                closestFourDistances[3] = dst;
                closestFourIndexes[3] = j;
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
"use strict";

function drawBackground(now) {
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);

    gl.useProgram(backgroundProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, backgroundProgram.buffer);

    gl.enableVertexAttribArray(backgroundProgram.aPosition);
    gl.enableVertexAttribArray(backgroundProgram.aCoord);
    gl.vertexAttribPointer(backgroundProgram.aPosition, 4, gl.FLOAT, false, step * 8, 0);
    gl.vertexAttribPointer(backgroundProgram.aCoord, 4, gl.FLOAT, false, step * 8, step * 4);

    gl.uniformMatrix4fv(backgroundProgram.uPerspective, false, perspective);
    gl.uniformMatrix4fv(backgroundProgram.uModel, false, model);
    gl.uniformMatrix4fv(backgroundProgram.uView, false, view);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, backgroundProgram.texture);
    gl.uniform1i(backgroundProgram.uImage, 0);

    gl.drawArrays(gl.TRIANGLES, 0, backgroundProgram.count);
}

function createBackgroundProgram() {
    var Program = getShader(shader_backgroundv, getBackgroundf());
    Program.aPosition = gl.getAttribLocation(Program, "aPosition");
    Program.aCoord = gl.getAttribLocation(Program, "aCoord");

    Program.uPerspective = gl.getUniformLocation(Program, "uPerspective");
    Program.uModel = gl.getUniformLocation(Program, "uModel");
    Program.uView = gl.getUniformLocation(Program, "uView");

    Program.uImage = gl.getUniformLocation(Program, "uImage");

    var imageRatio = 1.50;
    var hr = 1,
        wr = 1;
    var mult = 0;

    if (imageRatio > screenRatio) {
        wr = imageRatio;
        mult = hwh;
    } else {
        hr = 1 / imageRatio;
        mult = hww;
    }

    var vertices = [-mult * wr, -mult * hr, -10, 1, 0, 0, 0, 0, +mult * wr, -mult * hr, -10, 1, 1, 0, 0, 0, -mult * wr, +mult * hr, -10, 1, 0, 1, 0, 0, -mult * wr, +mult * hr, -10, 1, 0, 1, 0, 0, +mult * wr, -mult * hr, -10, 1, 1, 0, 0, 0, +mult * wr, +mult * hr, -10, 1, 1, 1, 0, 0];

    Program.count = vertices.length / 8;

    Program.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    Program.texture = get_texture('assets/bgvideoposter.jpg');

    backgroundProgram = Program;
}
"use strict";

function drawStencilMeshes(now) {
    gl.useProgram(meshesProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, meshesProgram.buffer);

    gl.enableVertexAttribArray(meshesProgram.aPosition);
    gl.enableVertexAttribArray(meshesProgram.aColor);
    gl.vertexAttribPointer(meshesProgram.aPosition, 4, gl.FLOAT, false, step * 8, 0);
    gl.vertexAttribPointer(meshesProgram.aColor, 4, gl.FLOAT, false, step * 8, step * 4);

    gl.uniformMatrix4fv(meshesProgram.uPerspective, false, perspective);
    gl.uniformMatrix4fv(meshesProgram.uModel, false, model);
    gl.uniformMatrix4fv(meshesProgram.uView, false, view);

    gl.enable(gl.STENCIL_TEST);
    gl.stencilFunc(gl.ALWAYS, 1, 0xFF);
    gl.stencilOp(gl.REPLACE, gl.REPLACE, gl.REPLACE);
    gl.drawArrays(gl.TRIANGLES, 0, meshesProgram.count);
}

function drawMeshes(now, deltatime) {

    checkMouseFocus();
    /* swapMeshes needs to be called AFTER checkMouseFocus, 
       check the function's definition for more info */
    if (swappingMeshes) swapMeshes();
    updateMeshProgramVertices(meshesProgram.meshes, deltatime);

    if (meshesProgram.count === 0) return; // no mesh to draw


    gl.useProgram(meshesProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, meshesProgram.buffer);

    gl.enableVertexAttribArray(meshesProgram.aPosition);
    gl.enableVertexAttribArray(meshesProgram.aColor);
    gl.vertexAttribPointer(meshesProgram.aPosition, 4, gl.FLOAT, false, step * 8, 0);
    gl.vertexAttribPointer(meshesProgram.aColor, 4, gl.FLOAT, false, step * 8, step * 4);

    gl.uniformMatrix4fv(meshesProgram.uPerspective, false, perspective);
    gl.uniformMatrix4fv(meshesProgram.uModel, false, model);
    gl.uniformMatrix4fv(meshesProgram.uView, false, view);

    // gl.enable(gl.DEPTH_TEST);
    gl.drawArrays(gl.TRIANGLES, 0, meshesProgram.count);
}

function drawMeshesPoints(now, deltatime) {

    if (meshPointsProgram.count === 0) return; // no points to draw

    gl.useProgram(meshPointsProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, meshPointsProgram.buffer);

    gl.enableVertexAttribArray(meshPointsProgram.aPosition);
    gl.vertexAttribPointer(meshPointsProgram.aPosition, 4, gl.FLOAT, false, 0, 0);

    gl.uniformMatrix4fv(meshPointsProgram.uPerspective, false, perspective);
    gl.uniformMatrix4fv(meshPointsProgram.uModel, false, model);
    gl.uniformMatrix4fv(meshPointsProgram.uView, false, view);

    gl.uniform1f(meshPointsProgram.uMaxSize, 2.0 / 1366.0 * screen.width);

    gl.drawArrays(gl.POINTS, 0, meshPointsProgram.count);
}

function createMeshesProgram() {
    var Program = getShader(shader_meshv, getMeshf());
    Program.aPosition = gl.getAttribLocation(Program, "aPosition");
    Program.aColor = gl.getAttribLocation(Program, "aColor");

    Program.uPerspective = gl.getUniformLocation(Program, "uPerspective");
    Program.uModel = gl.getUniformLocation(Program, "uModel");
    Program.uView = gl.getUniformLocation(Program, "uView");

    Program.count = 0;
    Program.buffer = gl.createBuffer();
    meshesProgram = Program;

    meshesProgram.currentlyBoundMeshId = 0;

    meshCenter = [-hww * 0.3, 0.9];

    var planeMesh = addMesh(planeMeshJSON, 0),
        treeMesh = addMesh(treeMeshJSON, 1),
        glassesMesh = addMesh(glassesMeshJSON, 2),

    /* if you need more start arguments, just create an object which encapsulates options and feed it to the mesh constructor */
    playMesh = addMesh(playMeshJSON, 0, 2.25),
        headsetMesh = addMesh(headsetMeshJSON, 1, 2.25),
        noteMesh = addMesh(noteMeshJSON, 2, 2.25),
        euroMesh = addMesh(euroMeshJSON, 0, 2.0),
        cardMesh = addMesh(cardMeshJSON, 1, 2.0),
        dollarMesh = addMesh(dollarMeshJSON, 2, 2.0);

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
    meshesProgram.meshes.push(meshesProgram.cachedMeshes[activeVideo * 3 + 0]);
    meshesProgram.meshes.push(meshesProgram.cachedMeshes[activeVideo * 3 + 1]);
    meshesProgram.meshes.push(meshesProgram.cachedMeshes[activeVideo * 3 + 2]);
    updateMeshProgramVertices(meshesProgram.meshes);

    meshesProgram.registeredMeshesCount = meshesProgram.meshes.length;
}

function createMeshPointsProgram() {
    var Program = getShader(shader_meshpointv, getMeshPointf());
    Program.aPosition = gl.getAttribLocation(Program, "aPosition");

    Program.uPerspective = gl.getUniformLocation(Program, "uPerspective");
    Program.uModel = gl.getUniformLocation(Program, "uModel");
    Program.uView = gl.getUniformLocation(Program, "uView");

    Program.uMaxSize = gl.getUniformLocation(Program, "uMaxSize");

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
    this.scale = scale || 3;
    // this.translatex = window.meshCenter[0];
    // this.translatey = window.meshCenter[1];
    this.visible = true;
    this.verticesGrabbed = 0;
    this.id = id;

    // animation state ---    -1 means no animation
    this.t = 0;
    this.notifyRelease = false; // notify when grabbed vertices needs to be released
    this.grab = false; // set to true if this mesh should start gathering vertices

    /* flatten faces array */
    this.faces = [];
    for (var i = 0, l = mesh.faces.length; i < l; i++) {
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
    for (var i = 0, l = mesh.vertices.length / 3; i < l; i++) {
        this.transformedVertices.push(new Point(+mesh.vertices[i * 3 + 0] * this.scale, // + this.translatex, 
        -mesh.vertices[i * 3 + 2] * this.scale, // + this.translatey, 
        false, lastId + i));
    }
    meshesProgram.lastId = lastId + i;

    // those vertices will be gathered from the array ->  points[]    when points[i].meshId equals this mesh index;
    this.verticesFromPoints = new Float32Array(this.vertexCount * 2);
    /**
     * Iterate through all the points in -> points[]   
     * if all the vertices were grabbed for a given mesh, 
     * start populating mesh.verticesFromPoints with values directly taken from    points[]   
     */
    this.fillVerticesFromPoints = function () {
        // we didn't grab enough vertices yet, skip this mesh
        if (this.verticesGrabbed !== this.vertexCount) return;

        for (var i = 0; i < points.length; i++) {

            // this point is not associated with the selected mesh
            if (points[i].meshId !== this.id) continue;

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
    this.reset = function () {
        this.verticesGrabbed = 0;

        // animation state ---    -1 means no animation
        this.t = 0;
        this.notifyRelease = false; // notify when grabbed vertices needs to be released

        // release grabbed vertices
        for (var i = 0; i < points.length; i++) {
            if (points[i].meshId === this.id) {
                points[i].meshId = -1;
                points[i].meshVertexId = -1;
            }
        }

        this.grab = false;
    };
}

function updateMeshProgramVertices(meshes, deltatime) {

    /**
     * Iterate through all the points in -> points[]   
     * if all the vertices were grabbed for a given mesh, 
     * start populating mesh.verticesFromPoints with values directly taken from    points[]   
     */

    // put a visibility check to skip non-visible meshes
    for (var m = 0; m < meshes.length; m++) {
        var mesh = meshesProgram.meshes[m];
        mesh.fillVerticesFromPoints();
    }

    /**
     * Construct a triangulation for each mesh from it's member mesh.faces - a flattened array of vertex indexes
     */
    var vertices = [];
    var meshpointsvertices = [];
    for (var i = 0; i < meshes.length; i++) {
        var scale = meshes[i].scale;
        var mesh = meshes[i];

        // skip if not ready
        if (mesh.verticesGrabbed !== mesh.vertexCount) continue;

        // safe to say we're ready to animate from here on


        // now check if mesh should fade out or release it's grabbed vertices
        if (mesh.notifyRelease) {
            mesh.t = mesh.t > 1 ? 1 : mesh.t - deltatime;
            // if fade animation is done, reset this mesh and skip triangulation
            if (mesh.t <= 0.0) {
                mesh.reset(); // reset mesh
                continue; // skip triangulation
            }
        } else {
            // we're not fading out - then increase the opacity
            mesh.t += deltatime;
        }

        /* here we're pushing the meshes triangulation */

        // mesh.faces at this point is a flattened array of vertex indices
        for (var j = 0; j < mesh.faces.length; j++) {
            // mesh.faces[j] just represents a vertex's ID - the array was flattened
            var vertexID = mesh.faces[j];

            var vx = mesh.verticesFromPoints[vertexID * 2 + 0];
            var vy = mesh.verticesFromPoints[vertexID * 2 + 1];

            // var floorIdx = Math.floor(j / 3);
            var floorIdx = j;

            vertices.push(vx, vy, mesh.t, floorIdx, mesh.colors[vertexID * 4 + 0] * mesh.opacityMult, 0, 0, 0);
        }

        /* here we're pushing the meshes variables width lines */

        // mesh.faces at this point is a flattened array of vertex indices
        for (var j = 0; j < mesh.faces.length / 3; j++) {
            /* gather the vertices of this triangle */
            // mesh.faces[j] just represents a vertex's ID - the array was flattened
            var vx1 = mesh.verticesFromPoints[mesh.faces[j * 3 + 0] * 2 + 0];
            var vy1 = mesh.verticesFromPoints[mesh.faces[j * 3 + 0] * 2 + 1];

            var vx2 = mesh.verticesFromPoints[mesh.faces[j * 3 + 1] * 2 + 0];
            var vy2 = mesh.verticesFromPoints[mesh.faces[j * 3 + 1] * 2 + 1];

            var vx3 = mesh.verticesFromPoints[mesh.faces[j * 3 + 2] * 2 + 0];
            var vy3 = mesh.verticesFromPoints[mesh.faces[j * 3 + 2] * 2 + 1];

            /* ... and create a variable width line out of it */
            pushLine(vx1, vy1, vx2, vy2, vertices, j, mesh.t);
            pushLine(vx1, vy1, vx3, vy3, vertices, j, mesh.t);
            pushLine(vx2, vy2, vx3, vy3, vertices, j, mesh.t);
        }

        /* pushing custom mesh points to their buffer */
        for (var j = 0; j < mesh.faces.length; j++) {
            // mesh.faces[j] just represents a vertex's ID - the array was flattened
            var vx1 = mesh.verticesFromPoints[mesh.faces[j] * 2 + 0];
            var vy1 = mesh.verticesFromPoints[mesh.faces[j] * 2 + 1];

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
    var d = Math.sqrt(vecx * vecx + vecy * vecy);
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

    var idx1 = Math.floor((Math.sin(j + 254) * 0.5 + 0.5) * 4257);
    var idx2 = idx1 + 1.0;

    vertices.push(v1x, v1y, z, idx1, 1, 0, 0, 0);
    vertices.push(v2x, v2y, z, idx1, 1, 0, 0, 0);
    vertices.push(v3x, v3y, z, idx2, 1, 0, 0, 0);

    vertices.push(v4x, v4y, z, idx1, 1, 0, 0, 0);
    vertices.push(v5x, v5y, z, idx2, 1, 0, 0, 0);
    vertices.push(v6x, v6y, z, idx2, 1, 0, 0, 0);
}

/* called at every update */
function checkMouseFocus() {

    var boundMesh = meshesProgram.meshes[meshesProgram.currentlyBoundMeshId];

    if (mouseController.infocus) {
        // start grabbing vertices if we haven't already
        if (boundMesh.verticesGrabbed !== boundMesh.vertexCount) boundMesh.grab = true;
        // if we were in release state, but the   t   didn't reach 0, set notify to false and revert the opacity back
        if (boundMesh.notifyRelease) boundMesh.notifyRelease = false;
    } else {
        // we've lost focus, notify release for all meshes
        for (var i = 0; i < meshesProgram.registeredMeshesCount; i++) {
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

    for (var i = 0; i < 3; i++) {
        var mesh = meshesProgram.meshes[i];
        /* if there's still some mesh not yet faded */
        if (mesh.t > 0) {
            if (mesh.notifyRelease === false) mesh.notifyRelease = true;
            ready = false;
        }
    }

    /* some mesh is still visible */
    if (!ready) return;

    /* now we can swap meshes */
    meshesProgram.meshes = [];

    // change also the first loop
    // change also the first loop
    // change also the first loop
    var startMeshIdx = currentVideo * 3;
    for (var i = startMeshIdx; i < startMeshIdx + 3; i++) {
        meshesProgram.meshes.push(meshesProgram.cachedMeshes[i]);
    }

    meshesProgram.currentlyBoundMeshId = 0;

    /* set global swappingMeshes to false - job is done */
    swappingMeshes = false;
}
"use strict";

var shaderpart_rand = "\nfloat rand(vec2 co){\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}";

var shaderpart_colors = "\n// const vec3 Color1 = vec3(238.0 / 255.0, 158.0 / 255.0, 63.0 / 255.0);\nconst vec3 Color1 = vec3(247.0 / 255.0, 158.0 / 255.0, 35.0 / 255.0);\nconst vec3 Color2 = vec3(238.0 / 255.0, 63.0 / 255.0,  30.0 / 255.0);\n";

function getShaderPrecision() {
    if (highpSupport) return "precision highp float;";else return "precision mediump float;";
}
"use strict";

var shader_backgroundv = "\nattribute vec4 aPosition;\nattribute vec4 aCoord;\n\nuniform mat4 uPerspective;\nuniform mat4 uModel;\nuniform mat4 uView;\n\nvarying vec2 Coord;\n\nvoid main() {\n    gl_Position  = uPerspective * uView * uModel * aPosition; \n\n    Coord = aCoord.xy;\n}";
"use strict";

function getBackgroundf() {
    var shader_backgroundf = "\n    " + getShaderPrecision() + "\n\n    uniform sampler2D uImage;\n\n    varying vec2 Coord;\n\n    void main() {\n        gl_FragColor = texture2D(uImage, Coord); \n    }";

    return shader_backgroundf;
}
"use strict";

function getMeshPointf() {

    var shader_pointf = "\n" + getShaderPrecision() + "\n\n\nvarying vec4 Color;\n\n" + shaderpart_colors + "\n\nvoid main() {\n\n    vec4 finalColor = Color;\n\n\n    float distance = length(gl_PointCoord - vec2(0.5, 0.5));\n    float alpha    = 1.0;\n    if(distance > 0.4) alpha = 1.0 - (distance - 0.4) / 0.1; \n    if(distance > 0.5) discard;\t\t\n    \n    finalColor.xyz = mix(Color1, Color2, gl_PointCoord.y);\n\n    finalColor.a *= alpha;\n\n    \n\n    gl_FragColor = finalColor; \n}";

    return shader_pointf;
}
"use strict";

/**
 * 
 * Uses pointf  as the fragment shader
 * 
 */

var shader_meshpointv = "\nattribute vec4 aPosition;\n\nuniform mat4 uPerspective;\nuniform mat4 uModel;\nuniform mat4 uView;\n\nvarying vec4 Color;\n\n" + shaderpart_colors + "\n\n\nuniform float uMaxSize;      // = (3.0 / 1366.0) * " + screen.width + ".0; \n\n\nvoid main() {\n\n    gl_Position  = uPerspective * uView * uModel * vec4(aPosition.xyz, 1.0); \n    \n    gl_PointSize = uMaxSize;\n\n    Color = vec4(Color1, aPosition.w);\n}";
"use strict";

var shader_pointv = "\nattribute vec4 aPosition;\n\nuniform mat4 uPerspective;\nuniform mat4 uModel;\nuniform mat4 uView;\n\nuniform float uPointSize;\n\nvarying vec4 Color;\n\n" + shaderpart_colors + "\n\n\nuniform float uMaxSize;      // = (3.0 / 1366.0) * " + screen.width + ".0; \nuniform float uMaxSize2;     // = (7.0 / 1366.0) * " + screen.width + ".0; \n\n\nvoid main() {\n\n    gl_Position  = uPerspective * uView * uModel * vec4(aPosition.xyz, 1.0); \n    \n\n    // pointSize will grow depending on the x position\n    // inverse NDC position - we're mapping x values to   1...0   from right to left\n    float idncp = 1.0 - ((gl_Position.x / gl_Position.w) * 0.5 + 0.5);\n    gl_PointSize = max(idncp * uMaxSize2, uMaxSize) * uPointSize;\n\n\n\n    float gradientMix = ((gl_Position.x / gl_Position.w) * 0.5 + 0.5) * 4.0 - 1.5;\n    vec3  mixedColor  = mix(Color1, Color2, 1.0 - clamp(gradientMix, 0.0, 1.0));\n\n    Color = vec4(mixedColor * 1.2, 0.6);\n}";
"use strict";

function getPointf() {

    var shader_pointf = "\n" + getShaderPrecision() + "\n\n\nvarying vec4 Color;\n\nvoid main() {\n\n    vec4 finalColor = Color;\n\n\n    float distance = length(gl_PointCoord - vec2(0.5, 0.5));\n    float alpha    = 1.0;\n    if(distance > 0.4) alpha = 1.0 - (distance - 0.4) / 0.1; \n    if(distance > 0.5) discard;\t\t\n    \n    finalColor.a *= alpha;\n\n    \n\n    gl_FragColor = finalColor; \n}";

    return shader_pointf;
}
"use strict";

function getLineVertexShader() {

    var shader_linev = "\nattribute vec4 aId;\n// attribute vec4 aFx;\n\nuniform sampler2D uPointsData;\n\nuniform mat4 uPerspective;\nuniform mat4 uModel;\nuniform mat4 uView;\n\nuniform float uColorGradientDistance;\n\n\nvarying vec4 Color;\n\n\nuniform float uNumPoints;\nuniform float uHwwtsss;     // hww * streamstart_s\nuniform float uHwhtsst;     // hwh * streamstart_t\n" + shaderpart_colors + "\n\nvoid main() {\n\n\n    // float attributeBug = aFx.x; \n\n    /**\n     * \n     * v0.xy  -  world position\n     * v0.z   -  meshVertexId\n     * \n     */\n    vec4 v0 = texture2D(uPointsData, vec2(aId.x / uNumPoints + 0.5 / uNumPoints, 0.5));\n    vec4 v1 = texture2D(uPointsData, vec2(aId.y / uNumPoints + 0.5 / uNumPoints, 0.5));\n\n\n    vec2 startPos = vec2( uHwwtsss, uHwhtsst);\n\n    // dsf1 = distance From start of first vertex\n    float dfs1 = length(v0.xy - startPos) + 1.0;\n    float dfs2 = length(v1.xy - startPos) + 1.0;\n    \n    // old - used before connecting only the 4 closest points\n    // float maxDistance = min(max(dfs1, dfs2) * 0.085, 0.7); \n    float maxDistance = min(max(dfs1, dfs2) * 0.045 + 0.3, 0.7); \n    \n\n\n\n\n    /*  discard fragment check  */\n    \n    float distance = length(v0.xy - v1.xy);\n    if(distance > maxDistance) v0 = vec4(0.0, 0.0, 0.0, 0.0);\n    \n    /*  discard fragment check  - end */\n\n\n\n\n\n    gl_Position  = uPerspective * uView * uModel * vec4(v0.xy, -10.0, 1.0); \n\n    float gradientMix = (gl_Position.x / gl_Position.w) * 0.5 + 0.5;\n    gradientMix = max(gradientMix - 0.2, 0.0);\n    float delta       = gradientMix <= 0.5 ? pow(gradientMix, uColorGradientDistance) : pow(gradientMix, 1.0 / uColorGradientDistance);\n    vec3  mixedColor  = mix(Color1, Color2, clamp(delta, 0.0, 1.0));\n\n\n\n\n\n    float opacity = clamp((maxDistance - distance) / (maxDistance / 3.0), 0.0, 1.0); \n    // same for both vertex of the line, since their Id is summed\n    float opacityFromIds = fract(sin((aId.x + aId.y) * 35447.57)) * 0.65 + 0.35;\n    \n    \n    // avoids self intersections from points of a mesh\n    float opacityFromSelfIntersection = max(v0.z, v1.z);\n\n    Color = vec4(mixedColor, opacity * opacityFromIds * opacityFromSelfIntersection);\n\n\n    if(aId.w > 0.9) Color.a *= 0.4;\n\n\n\n    // if(distance < maxDistance) Color = vec4(0.0, 1.0, 0.0, 1.0);\n    // if(aFx.w > 7.0) Color = vec4(1.0, 1.0, 1.0, 0.1);\n}";

    return shader_linev;
}
"use strict";

function getLinef() {

    var shader_linef = "\n" + getShaderPrecision() + "\n\n\nvarying vec4 Color;\n\nvoid main() {\n    gl_FragColor = Color; \n}";

    return shader_linef;
}
"use strict";

var shader_meshv = "\nattribute vec4 aPosition;\nattribute vec4 aColor;\n\nuniform mat4 uPerspective;\nuniform mat4 uModel;\nuniform mat4 uView;\n\nvarying vec4 Color;\n\n\n" + shaderpart_rand + "\n" + shaderpart_colors + "\n\n\nvoid main() {\n    gl_Position  = uPerspective * uView * uModel * vec4(aPosition.xy, -10.0, 1.0); \n\n    // float t = rand(vec2(aPosition.w, aPosition.w));\n    // float t2 = rand(vec2(aPosition.w, aPosition.w * aPosition.w));\n    float t2 = mod(aPosition.w, 2.0);\n\n    vec3  mixedColor  = mix(Color1, Color2, t2);\n\n    float animOpacity = min(aPosition.z, 1.0);\n    // float mainOpacity = sin(aPosition.w * 35465.47) * 0.5 + 0.5;\n    float mainOpacity = rand(vec2(float(int(aPosition.w) / 3)    ));\n\n\n    // aColor.x  ->  vertex color opacity \n\n\n    Color = vec4(mixedColor, (mainOpacity * 0.4 + 0.2) * animOpacity * aColor.x );\n}";
"use strict";

function getMeshf() {

    var shader_meshf = "\n" + getShaderPrecision() + "\n\n\nvarying vec4 Color;\n\nvoid main() {\n    gl_FragColor = Color; \n}";

    return shader_meshf;
}
"use strict";

var headsetMeshJSON = "\n{\n\t \"rootnode\": {\n\t\t \"name\": \"\"\n\t\t,\"transformation\": [\n\t\t\t 1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t]\n\t\t,\"meshes\": [\n\t\t\t 0\n\t\t]\n\t}\n\t,\"flags\": 8\n\t,\"meshes\": [\n\t\t{\n\t\t\t \"name\": \"\"\n\t\t\t,\"materialindex\": 0\n\t\t\t,\"primitivetypes\": 4\n\t\t\t,\"vertices\": [\n\t\t\t\t -0.290413\n\t\t\t\t,-0\n\t\t\t\t,0.148177\n\t\t\t\t,-0.347407\n\t\t\t\t,-0\n\t\t\t\t,0.177494\n\t\t\t\t,-0.435138\n\t\t\t\t,0\n\t\t\t\t,0.086446\n\t\t\t\t,-0.269663\n\t\t\t\t,-0\n\t\t\t\t,0.120082\n\t\t\t\t,-0.435138\n\t\t\t\t,0\n\t\t\t\t,0.086446\n\t\t\t\t,-0.269663\n\t\t\t\t,-0\n\t\t\t\t,0.120082\n\t\t\t\t,-0.422046\n\t\t\t\t,0\n\t\t\t\t,-0.06829\n\t\t\t\t,-0.217296\n\t\t\t\t,-0\n\t\t\t\t,-0.143929\n\t\t\t\t,-0.374006\n\t\t\t\t,-0\n\t\t\t\t,-0.170573\n\t\t\t\t,-0.239533\n\t\t\t\t,-0\n\t\t\t\t,-0.173834\n\t\t\t\t,-0.272505\n\t\t\t\t,-0\n\t\t\t\t,-0.197604\n\t\t\t\t,-0.30561\n\t\t\t\t,-0\n\t\t\t\t,-0.216247\n\t\t\t\t,-0.265083\n\t\t\t\t,-0\n\t\t\t\t,-0.210457\n\t\t\t\t,-0.298534\n\t\t\t\t,-0\n\t\t\t\t,-0.231042\n\t\t\t\t,-0.384525\n\t\t\t\t,0\n\t\t\t\t,0.158495\n\t\t\t\t,-0.347407\n\t\t\t\t,-0\n\t\t\t\t,0.177494\n\t\t\t\t,-0.002701\n\t\t\t\t,-0\n\t\t\t\t,-0.373894\n\t\t\t\t,-0.020337\n\t\t\t\t,-0\n\t\t\t\t,-0.45364\n\t\t\t\t,-0.028005\n\t\t\t\t,0\n\t\t\t\t,-0.415301\n\t\t\t\t,-0.034906\n\t\t\t\t,0\n\t\t\t\t,-0.45134\n\t\t\t\t,-0.093949\n\t\t\t\t,0\n\t\t\t\t,-0.403032\n\t\t\t\t,-0.139956\n\t\t\t\t,0\n\t\t\t\t,-0.426803\n\t\t\t\t,-0.218935\n\t\t\t\t,0\n\t\t\t\t,-0.357792\n\t\t\t\t,-0.199766\n\t\t\t\t,0\n\t\t\t\t,-0.329421\n\t\t\t\t,-0.277211\n\t\t\t\t,-0\n\t\t\t\t,-0.268844\n\t\t\t\t,-0.245006\n\t\t\t\t,0\n\t\t\t\t,-0.246608\n\t\t\t\t,0.077608\n\t\t\t\t,-0\n\t\t\t\t,-0.45805\n\t\t\t\t,0.17499\n\t\t\t\t,-0\n\t\t\t\t,-0.427378\n\t\t\t\t,0.126119\n\t\t\t\t,-0\n\t\t\t\t,-0.352424\n\t\t\t\t,0.231732\n\t\t\t\t,-0\n\t\t\t\t,-0.287056\n\t\t\t\t,0.283874\n\t\t\t\t,-0\n\t\t\t\t,-0.303926\n\t\t\t\t,0.231732\n\t\t\t\t,-0\n\t\t\t\t,-0.287056\n\t\t\t\t,0.17499\n\t\t\t\t,-0\n\t\t\t\t,-0.427378\n\t\t\t\t,0.313012\n\t\t\t\t,-0\n\t\t\t\t,-0.323095\n\t\t\t\t,0.292794\n\t\t\t\t,-0\n\t\t\t\t,-0.292564\n\t\t\t\t,0.313012\n\t\t\t\t,-0\n\t\t\t\t,-0.323095\n\t\t\t\t,0.283874\n\t\t\t\t,-0\n\t\t\t\t,-0.303926\n\t\t\t\t,0.320398\n\t\t\t\t,0\n\t\t\t\t,-0.310967\n\t\t\t\t,0.354085\n\t\t\t\t,-0\n\t\t\t\t,-0.193397\n\t\t\t\t,0.377856\n\t\t\t\t,-0\n\t\t\t\t,-0.215634\n\t\t\t\t,0.386296\n\t\t\t\t,-0\n\t\t\t\t,-0.108284\n\t\t\t\t,0.34335\n\t\t\t\t,-0\n\t\t\t\t,-0.077612\n\t\t\t\t,0.356825\n\t\t\t\t,-0\n\t\t\t\t,-0.003434\n\t\t\t\t,0.323853\n\t\t\t\t,-0\n\t\t\t\t,-0.014936\n\t\t\t\t,0.29647\n\t\t\t\t,-0\n\t\t\t\t,0.048431\n\t\t\t\t,0.331742\n\t\t\t\t,-0\n\t\t\t\t,0.058399\n\t\t\t\t,0.291869\n\t\t\t\t,-0\n\t\t\t\t,0.059166\n\t\t\t\t,0.334043\n\t\t\t\t,-0\n\t\t\t\t,0.068367\n\t\t\t\t,0.284401\n\t\t\t\t,-0\n\t\t\t\t,0.072113\n\t\t\t\t,0.352446\n\t\t\t\t,-0\n\t\t\t\t,0.156548\n\t\t\t\t,0.284401\n\t\t\t\t,-0\n\t\t\t\t,0.072113\n\t\t\t\t,0.334043\n\t\t\t\t,-0\n\t\t\t\t,0.068367\n\t\t\t\t,0.242994\n\t\t\t\t,-0\n\t\t\t\t,0.04911\n\t\t\t\t,0.307287\n\t\t\t\t,-0\n\t\t\t\t,0.25111\n\t\t\t\t,0.193035\n\t\t\t\t,-0\n\t\t\t\t,0.367662\n\t\t\t\t,0.206955\n\t\t\t\t,-0\n\t\t\t\t,0.046042\n\t\t\t\t,0.24671\n\t\t\t\t,-0\n\t\t\t\t,0.318587\n\t\t\t\t,0.037377\n\t\t\t\t,-0\n\t\t\t\t,0.257244\n\t\t\t\t,0.193035\n\t\t\t\t,-0\n\t\t\t\t,0.367662\n\t\t\t\t,0.206955\n\t\t\t\t,-0\n\t\t\t\t,0.046042\n\t\t\t\t,0.038911\n\t\t\t\t,-0\n\t\t\t\t,0.294817\n\t\t\t\t,0.063448\n\t\t\t\t,-0\n\t\t\t\t,0.355393\n\t\t\t\t,0.105621\n\t\t\t\t,-0\n\t\t\t\t,0.37533\n\t\t\t\t,0.063448\n\t\t\t\t,-0\n\t\t\t\t,0.355393\n\t\t\t\t,-0.217296\n\t\t\t\t,-0\n\t\t\t\t,-0.143929\n\t\t\t\t,-0.384525\n\t\t\t\t,0\n\t\t\t\t,0.158495\n\t\t\t\t,-0.374006\n\t\t\t\t,-0\n\t\t\t\t,-0.170573\n\t\t\t\t,-0.002701\n\t\t\t\t,-0\n\t\t\t\t,-0.373894\n\t\t\t\t,-0.020337\n\t\t\t\t,-0\n\t\t\t\t,-0.45364\n\t\t\t\t,0.126119\n\t\t\t\t,-0\n\t\t\t\t,-0.352424\n\t\t\t\t,0.077608\n\t\t\t\t,-0\n\t\t\t\t,-0.45805\n\t\t\t\t,0.038911\n\t\t\t\t,-0\n\t\t\t\t,0.294817\n\t\t\t]\n\t\t\t,\"normals\": [\n\t\t\t\t -0\n\t\t\t\t,-1\n\t\t\t\t,-1e-06\n\t\t\t\t,-0\n\t\t\t\t,-1\n\t\t\t\t,-1e-06\n\t\t\t\t,-0\n\t\t\t\t,-1\n\t\t\t\t,-1e-06\n\t\t\t\t,-1e-06\n\t\t\t\t,-1\n\t\t\t\t,-0\n\t\t\t\t,1e-06\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,1e-06\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,1e-06\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,1e-06\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,1e-06\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,1e-06\n\t\t\t\t,1\n\t\t\t\t,-0\n\t\t\t\t,1e-06\n\t\t\t\t,1\n\t\t\t\t,-1e-06\n\t\t\t\t,2e-06\n\t\t\t\t,1\n\t\t\t\t,2e-06\n\t\t\t\t,-0\n\t\t\t\t,1\n\t\t\t\t,-0\n\t\t\t\t,-0\n\t\t\t\t,1\n\t\t\t\t,-0\n\t\t\t\t,7e-06\n\t\t\t\t,1\n\t\t\t\t,-5e-06\n\t\t\t\t,7e-06\n\t\t\t\t,1\n\t\t\t\t,-5e-06\n\t\t\t\t,3e-06\n\t\t\t\t,1\n\t\t\t\t,-1e-06\n\t\t\t\t,3e-06\n\t\t\t\t,1\n\t\t\t\t,-1e-06\n\t\t\t\t,3e-06\n\t\t\t\t,1\n\t\t\t\t,-1e-06\n\t\t\t\t,4e-06\n\t\t\t\t,1\n\t\t\t\t,-1e-06\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,-0\n\t\t\t\t,-0\n\t\t\t\t,1\n\t\t\t\t,-0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,1e-06\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,1e-06\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,1e-06\n\t\t\t\t,-0\n\t\t\t\t,1\n\t\t\t\t,-0\n\t\t\t\t,-0\n\t\t\t\t,1\n\t\t\t\t,-0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,-0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,-0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,-0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,-0\n\t\t\t\t,1\n\t\t\t\t,-1e-06\n\t\t\t\t,-0\n\t\t\t\t,1\n\t\t\t\t,-1e-06\n\t\t\t\t,-0\n\t\t\t\t,1\n\t\t\t\t,-1e-06\n\t\t\t\t,-2e-06\n\t\t\t\t,1\n\t\t\t\t,-2e-06\n\t\t\t\t,-0\n\t\t\t\t,1\n\t\t\t\t,1e-06\n\t\t\t\t,-0\n\t\t\t\t,1\n\t\t\t\t,1e-06\n\t\t\t\t,-0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,-0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,1e-06\n\t\t\t\t,1\n\t\t\t\t,-0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,-0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,-0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,-0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,-0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,-1e-06\n\t\t\t\t,-0\n\t\t\t\t,-1\n\t\t\t\t,-0\n\t\t\t\t,-0\n\t\t\t\t,-1\n\t\t\t\t,-0\n\t\t\t\t,-0\n\t\t\t\t,-1\n\t\t\t\t,-0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,-0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,-0\n\t\t\t\t,-0\n\t\t\t\t,-1\n\t\t\t\t,-0\n\t\t\t\t,-0\n\t\t\t\t,-1\n\t\t\t\t,-0\n\t\t\t\t,-0\n\t\t\t\t,-1\n\t\t\t\t,-0\n\t\t\t\t,-0\n\t\t\t\t,1\n\t\t\t\t,-0\n\t\t\t\t,-0\n\t\t\t\t,1\n\t\t\t\t,-0\n\t\t\t\t,-0\n\t\t\t\t,1\n\t\t\t\t,-0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,-0\n\t\t\t\t,-0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,1e-06\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,1e-06\n\t\t\t\t,-1e-06\n\t\t\t\t,-1\n\t\t\t\t,-0\n\t\t\t\t,-0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,-0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,-0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,-0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,-0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,-0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t]\n\t\t\t,\"colors\": [\n\t\t\t\t[\n\t\t\t\t\t 1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.886275\n\t\t\t\t\t,0.886275\n\t\t\t\t\t,0.886275\n\t\t\t\t\t,1\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,1\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,1\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,1\n\t\t\t\t\t,0.682353\n\t\t\t\t\t,0.682353\n\t\t\t\t\t,0.682353\n\t\t\t\t\t,1\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,1\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,1\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,1\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,1\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.992157\n\t\t\t\t\t,0.992157\n\t\t\t\t\t,0.992157\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.992157\n\t\t\t\t\t,0.992157\n\t\t\t\t\t,0.992157\n\t\t\t\t\t,1\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,1\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,1\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,1\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,1\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,1\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,1\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,0.701961\n\t\t\t\t\t,1\n\t\t\t\t\t,0.67451\n\t\t\t\t\t,0.67451\n\t\t\t\t\t,0.67451\n\t\t\t\t\t,1\n\t\t\t\t\t,0.698039\n\t\t\t\t\t,0.698039\n\t\t\t\t\t,0.698039\n\t\t\t\t\t,1\n\t\t\t\t\t,0.8\n\t\t\t\t\t,0.8\n\t\t\t\t\t,0.8\n\t\t\t\t\t,1\n\t\t\t\t\t,0.917647\n\t\t\t\t\t,0.917647\n\t\t\t\t\t,0.917647\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.917647\n\t\t\t\t\t,0.917647\n\t\t\t\t\t,0.917647\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t]\n\t\t\t]\n\t\t\t,\"faces\": [\n\t\t\t\t[\n\t\t\t\t\t 0\n\t\t\t\t\t,1\n\t\t\t\t\t,2\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 0\n\t\t\t\t\t,2\n\t\t\t\t\t,3\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 3\n\t\t\t\t\t,2\n\t\t\t\t\t,64\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 65\n\t\t\t\t\t,2\n\t\t\t\t\t,66\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 4\n\t\t\t\t\t,5\n\t\t\t\t\t,6\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 4\n\t\t\t\t\t,14\n\t\t\t\t\t,15\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 5\n\t\t\t\t\t,7\n\t\t\t\t\t,6\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 6\n\t\t\t\t\t,7\n\t\t\t\t\t,8\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 7\n\t\t\t\t\t,6\n\t\t\t\t\t,14\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 7\n\t\t\t\t\t,9\n\t\t\t\t\t,8\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 10\n\t\t\t\t\t,8\n\t\t\t\t\t,9\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 11\n\t\t\t\t\t,8\n\t\t\t\t\t,10\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 12\n\t\t\t\t\t,11\n\t\t\t\t\t,10\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 11\n\t\t\t\t\t,12\n\t\t\t\t\t,13\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 25\n\t\t\t\t\t,24\n\t\t\t\t\t,12\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 12\n\t\t\t\t\t,24\n\t\t\t\t\t,13\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 24\n\t\t\t\t\t,25\n\t\t\t\t\t,23\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 23\n\t\t\t\t\t,22\n\t\t\t\t\t,24\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 22\n\t\t\t\t\t,23\n\t\t\t\t\t,20\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 22\n\t\t\t\t\t,20\n\t\t\t\t\t,21\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 19\n\t\t\t\t\t,20\n\t\t\t\t\t,18\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 20\n\t\t\t\t\t,19\n\t\t\t\t\t,21\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 18\n\t\t\t\t\t,17\n\t\t\t\t\t,19\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 16\n\t\t\t\t\t,17\n\t\t\t\t\t,18\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 16\n\t\t\t\t\t,26\n\t\t\t\t\t,17\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 26\n\t\t\t\t\t,16\n\t\t\t\t\t,27\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 16\n\t\t\t\t\t,28\n\t\t\t\t\t,27\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 36\n\t\t\t\t\t,26\n\t\t\t\t\t,29\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 34\n\t\t\t\t\t,35\n\t\t\t\t\t,36\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 34\n\t\t\t\t\t,37\n\t\t\t\t\t,35\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 34\n\t\t\t\t\t,38\n\t\t\t\t\t,37\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 28\n\t\t\t\t\t,35\n\t\t\t\t\t,27\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 29\n\t\t\t\t\t,27\n\t\t\t\t\t,28\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 39\n\t\t\t\t\t,37\n\t\t\t\t\t,38\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 39\n\t\t\t\t\t,38\n\t\t\t\t\t,40\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 40\n\t\t\t\t\t,38\n\t\t\t\t\t,41\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 41\n\t\t\t\t\t,42\n\t\t\t\t\t,40\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 42\n\t\t\t\t\t,41\n\t\t\t\t\t,43\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 43\n\t\t\t\t\t,44\n\t\t\t\t\t,42\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 45\n\t\t\t\t\t,42\n\t\t\t\t\t,44\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 46\n\t\t\t\t\t,47\n\t\t\t\t\t,44\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 45\n\t\t\t\t\t,44\n\t\t\t\t\t,47\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 48\n\t\t\t\t\t,47\n\t\t\t\t\t,46\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 30\n\t\t\t\t\t,31\n\t\t\t\t\t,32\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 33\n\t\t\t\t\t,30\n\t\t\t\t\t,32\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 69\n\t\t\t\t\t,70\n\t\t\t\t\t,33\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 67\n\t\t\t\t\t,68\n\t\t\t\t\t,69\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 69\n\t\t\t\t\t,67\n\t\t\t\t\t,70\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 49\n\t\t\t\t\t,50\n\t\t\t\t\t,51\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 50\n\t\t\t\t\t,49\n\t\t\t\t\t,53\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 71\n\t\t\t\t\t,49\n\t\t\t\t\t,54\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 52\n\t\t\t\t\t,50\n\t\t\t\t\t,53\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 54\n\t\t\t\t\t,50\n\t\t\t\t\t,53\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 55\n\t\t\t\t\t,50\n\t\t\t\t\t,53\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 52\n\t\t\t\t\t,53\n\t\t\t\t\t,55\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 53\n\t\t\t\t\t,56\n\t\t\t\t\t,55\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 54\n\t\t\t\t\t,55\n\t\t\t\t\t,56\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 62\n\t\t\t\t\t,63\n\t\t\t\t\t,54\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 57\n\t\t\t\t\t,58\n\t\t\t\t\t,59\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 60\n\t\t\t\t\t,58\n\t\t\t\t\t,57\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 61\n\t\t\t\t\t,58\n\t\t\t\t\t,60\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 61\n\t\t\t\t\t,58\n\t\t\t\t\t,59\n\t\t\t\t]\n\t\t\t]\n\t\t}\n\t]\n\t,\"materials\": [\n\t\t{\n\t\t\t \"properties\": [\n\t\t\t\t{\n\t\t\t\t\t \"key\": \"$mat.shadingm\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 4\n\t\t\t\t\t,\"value\": 2\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.diffuse\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.specular\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.ambient\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0.05\n\t\t\t\t\t\t,0.05\n\t\t\t\t\t\t,0.05\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$mat.twosided\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 4\n\t\t\t\t\t,\"value\": 1\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}\n\n";
"use strict";

var cardMeshJSON = "\n{\n\t \"rootnode\": {\n\t\t \"name\": \"\"\n\t\t,\"transformation\": [\n\t\t\t 1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t]\n\t\t,\"meshes\": [\n\t\t\t 0\n\t\t]\n\t}\n\t,\"flags\": 8\n\t,\"meshes\": [\n\t\t{\n\t\t\t \"name\": \"\"\n\t\t\t,\"materialindex\": 0\n\t\t\t,\"primitivetypes\": 4\n\t\t\t,\"vertices\": [\n\t\t\t\t -0.477417\n\t\t\t\t,-0\n\t\t\t\t,0.158038\n\t\t\t\t,-0.476782\n\t\t\t\t,-0\n\t\t\t\t,0.023375\n\t\t\t\t,-0.288127\n\t\t\t\t,-0\n\t\t\t\t,-0.107202\n\t\t\t\t,-0.47945\n\t\t\t\t,-0\n\t\t\t\t,0.218763\n\t\t\t\t,-0.43445\n\t\t\t\t,0\n\t\t\t\t,0.253862\n\t\t\t\t,-0.368925\n\t\t\t\t,-0\n\t\t\t\t,0.255625\n\t\t\t\t,-0.477417\n\t\t\t\t,-0\n\t\t\t\t,0.158038\n\t\t\t\t,-0.368925\n\t\t\t\t,-0\n\t\t\t\t,0.255625\n\t\t\t\t,-0.099091\n\t\t\t\t,-0\n\t\t\t\t,-0.107202\n\t\t\t\t,0.021343\n\t\t\t\t,-0\n\t\t\t\t,-0.107202\n\t\t\t\t,0.034301\n\t\t\t\t,-0\n\t\t\t\t,0.256388\n\t\t\t\t,0.192085\n\t\t\t\t,-0\n\t\t\t\t,0.129093\n\t\t\t\t,0.203519\n\t\t\t\t,-0\n\t\t\t\t,0.169492\n\t\t\t\t,0.243155\n\t\t\t\t,-0\n\t\t\t\t,0.190073\n\t\t\t\t,0.221812\n\t\t\t\t,-0\n\t\t\t\t,0.254863\n\t\t\t\t,0.204281\n\t\t\t\t,-0\n\t\t\t\t,0.090982\n\t\t\t\t,0.194372\n\t\t\t\t,0\n\t\t\t\t,-0.107202\n\t\t\t\t,0.242393\n\t\t\t\t,-0\n\t\t\t\t,0.067352\n\t\t\t\t,0.359016\n\t\t\t\t,0\n\t\t\t\t,-0.108726\n\t\t\t\t,0.283554\n\t\t\t\t,-0\n\t\t\t\t,0.075736\n\t\t\t\t,0.323191\n\t\t\t\t,-0\n\t\t\t\t,0.070401\n\t\t\t\t,0.453534\n\t\t\t\t,-0\n\t\t\t\t,0.064303\n\t\t\t\t,0.355967\n\t\t\t\t,-0\n\t\t\t\t,0.090981\n\t\t\t\t,0.371212\n\t\t\t\t,-0\n\t\t\t\t,0.130618\n\t\t\t\t,0.449723\n\t\t\t\t,-0\n\t\t\t\t,0.216751\n\t\t\t\t,0.356729\n\t\t\t\t,-0\n\t\t\t\t,0.170254\n\t\t\t\t,0.413897\n\t\t\t\t,-0\n\t\t\t\t,0.251814\n\t\t\t\t,0.318617\n\t\t\t\t,-0\n\t\t\t\t,0.18931\n\t\t\t\t,0.289652\n\t\t\t\t,-0\n\t\t\t\t,0.180163\n\t\t\t\t,0.448198\n\t\t\t\t,-0\n\t\t\t\t,-0.028691\n\t\t\t\t,0.44896\n\t\t\t\t,-0\n\t\t\t\t,-0.107202\n\t\t\t\t,0.359016\n\t\t\t\t,0\n\t\t\t\t,-0.108726\n\t\t\t\t,0.448198\n\t\t\t\t,-0\n\t\t\t\t,-0.028691\n\t\t\t\t,-0.476675\n\t\t\t\t,-0\n\t\t\t\t,-0.105708\n\t\t\t\t,-0.477925\n\t\t\t\t,-0\n\t\t\t\t,-0.271084\n\t\t\t\t,-0.477925\n\t\t\t\t,-0\n\t\t\t\t,-0.197146\n\t\t\t\t,-0.348344\n\t\t\t\t,-0\n\t\t\t\t,-0.198671\n\t\t\t\t,-0.434478\n\t\t\t\t,-0\n\t\t\t\t,-0.306147\n\t\t\t\t,-0.278218\n\t\t\t\t,-0\n\t\t\t\t,-0.306147\n\t\t\t\t,-0.187511\n\t\t\t\t,-0\n\t\t\t\t,-0.200195\n\t\t\t\t,-0.117385\n\t\t\t\t,-0\n\t\t\t\t,-0.306147\n\t\t\t\t,-0.042685\n\t\t\t\t,-0\n\t\t\t\t,-0.20172\n\t\t\t\t,0.092231\n\t\t\t\t,-0\n\t\t\t\t,-0.309196\n\t\t\t\t,0.117385\n\t\t\t\t,-0\n\t\t\t\t,-0.20172\n\t\t\t\t,0.310233\n\t\t\t\t,-0\n\t\t\t\t,-0.307671\n\t\t\t\t,0.296512\n\t\t\t\t,-0\n\t\t\t\t,-0.200195\n\t\t\t\t,0.451247\n\t\t\t\t,-0\n\t\t\t\t,-0.199433\n\t\t\t\t,0.448198\n\t\t\t\t,-0\n\t\t\t\t,-0.272608\n\t\t\t\t,0.416184\n\t\t\t\t,-0\n\t\t\t\t,-0.306147\n\t\t\t\t,0.310233\n\t\t\t\t,-0\n\t\t\t\t,0.103177\n\t\t\t\t,0.311757\n\t\t\t\t,-0\n\t\t\t\t,0.148149\n\t\t\t\t,0.243155\n\t\t\t\t,-0\n\t\t\t\t,0.190073\n\t\t\t\t,0.311757\n\t\t\t\t,-0\n\t\t\t\t,0.148149\n\t\t\t\t,0.242393\n\t\t\t\t,-0\n\t\t\t\t,0.067352\n\t\t\t\t,0.203519\n\t\t\t\t,-0\n\t\t\t\t,0.169492\n\t\t\t\t,0.243155\n\t\t\t\t,-0\n\t\t\t\t,0.190073\n\t\t\t\t,0.283554\n\t\t\t\t,-0\n\t\t\t\t,0.075736\n\t\t\t\t,0.318617\n\t\t\t\t,-0\n\t\t\t\t,0.18931\n\t\t\t\t,0.356729\n\t\t\t\t,-0\n\t\t\t\t,0.170254\n\t\t\t\t,0.323191\n\t\t\t\t,-0\n\t\t\t\t,0.070401\n\t\t\t\t,0.371212\n\t\t\t\t,-0\n\t\t\t\t,0.130618\n\t\t\t\t,0.355967\n\t\t\t\t,-0\n\t\t\t\t,0.090981\n\t\t\t\t,0.323191\n\t\t\t\t,-0\n\t\t\t\t,0.070401\n\t\t\t\t,0.283554\n\t\t\t\t,-0\n\t\t\t\t,0.075736\n\t\t\t\t,-0.476675\n\t\t\t\t,-0\n\t\t\t\t,-0.105708\n\t\t\t\t,-0.476675\n\t\t\t\t,-0\n\t\t\t\t,-0.105708\n\t\t\t\t,-0.348344\n\t\t\t\t,-0\n\t\t\t\t,-0.198671\n\t\t\t\t,-0.288127\n\t\t\t\t,-0\n\t\t\t\t,-0.107202\n\t\t\t\t,-0.187511\n\t\t\t\t,-0\n\t\t\t\t,-0.200195\n\t\t\t\t,-0.099091\n\t\t\t\t,-0\n\t\t\t\t,-0.107202\n\t\t\t\t,-0.042685\n\t\t\t\t,-0\n\t\t\t\t,-0.20172\n\t\t\t\t,0.021343\n\t\t\t\t,-0\n\t\t\t\t,-0.107202\n\t\t\t\t,0.117385\n\t\t\t\t,-0\n\t\t\t\t,-0.20172\n\t\t\t\t,0.194372\n\t\t\t\t,0\n\t\t\t\t,-0.107202\n\t\t\t\t,0.296512\n\t\t\t\t,-0\n\t\t\t\t,-0.200195\n\t\t\t\t,0.451247\n\t\t\t\t,-0\n\t\t\t\t,-0.199433\n\t\t\t\t,0.44896\n\t\t\t\t,-0\n\t\t\t\t,-0.107202\n\t\t\t\t,0.194372\n\t\t\t\t,0\n\t\t\t\t,-0.107202\n\t\t\t\t,-0.348344\n\t\t\t\t,-0\n\t\t\t\t,-0.198671\n\t\t\t]\n\t\t\t,\"normals\": [\n\t\t\t\t 0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t]\n\t\t\t,\"colors\": [\n\t\t\t\t[\n\t\t\t\t\t 0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.662745\n\t\t\t\t\t,0.662745\n\t\t\t\t\t,0.662745\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.694118\n\t\t\t\t\t,0.694118\n\t\t\t\t\t,0.694118\n\t\t\t\t\t,1\n\t\t\t\t\t,0.654902\n\t\t\t\t\t,0.654902\n\t\t\t\t\t,0.654902\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.741176\n\t\t\t\t\t,0.741176\n\t\t\t\t\t,0.741176\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.654902\n\t\t\t\t\t,0.654902\n\t\t\t\t\t,0.654902\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,0.65098\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t]\n\t\t\t]\n\t\t\t,\"faces\": [\n\t\t\t\t[\n\t\t\t\t\t 0\n\t\t\t\t\t,1\n\t\t\t\t\t,2\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 0\n\t\t\t\t\t,2\n\t\t\t\t\t,7\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 33\n\t\t\t\t\t,2\n\t\t\t\t\t,1\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 2\n\t\t\t\t\t,8\n\t\t\t\t\t,7\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 2\n\t\t\t\t\t,65\n\t\t\t\t\t,66\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 2\n\t\t\t\t\t,68\n\t\t\t\t\t,8\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 8\n\t\t\t\t\t,9\n\t\t\t\t\t,7\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 7\n\t\t\t\t\t,9\n\t\t\t\t\t,10\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 9\n\t\t\t\t\t,11\n\t\t\t\t\t,10\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 11\n\t\t\t\t\t,9\n\t\t\t\t\t,15\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 9\n\t\t\t\t\t,16\n\t\t\t\t\t,15\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 8\n\t\t\t\t\t,70\n\t\t\t\t\t,9\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 9\n\t\t\t\t\t,72\n\t\t\t\t\t,16\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 11\n\t\t\t\t\t,12\n\t\t\t\t\t,10\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 10\n\t\t\t\t\t,12\n\t\t\t\t\t,14\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 12\n\t\t\t\t\t,13\n\t\t\t\t\t,14\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 12\n\t\t\t\t\t,11\n\t\t\t\t\t,49\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 12\n\t\t\t\t\t,49\n\t\t\t\t\t,13\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 26\n\t\t\t\t\t,14\n\t\t\t\t\t,27\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 28\n\t\t\t\t\t,27\n\t\t\t\t\t,14\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 13\n\t\t\t\t\t,28\n\t\t\t\t\t,14\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 13\n\t\t\t\t\t,49\n\t\t\t\t\t,28\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 49\n\t\t\t\t\t,50\n\t\t\t\t\t,28\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 50\n\t\t\t\t\t,27\n\t\t\t\t\t,28\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 25\n\t\t\t\t\t,26\n\t\t\t\t\t,27\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 27\n\t\t\t\t\t,50\n\t\t\t\t\t,25\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 24\n\t\t\t\t\t,26\n\t\t\t\t\t,25\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 23\n\t\t\t\t\t,24\n\t\t\t\t\t,25\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 25\n\t\t\t\t\t,50\n\t\t\t\t\t,23\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 23\n\t\t\t\t\t,25\n\t\t\t\t\t,49\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 49\n\t\t\t\t\t,22\n\t\t\t\t\t,50\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 22\n\t\t\t\t\t,23\n\t\t\t\t\t,50\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 11\n\t\t\t\t\t,17\n\t\t\t\t\t,50\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 23\n\t\t\t\t\t,22\n\t\t\t\t\t,21\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 21\n\t\t\t\t\t,24\n\t\t\t\t\t,23\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 20\n\t\t\t\t\t,21\n\t\t\t\t\t,22\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 20\n\t\t\t\t\t,22\n\t\t\t\t\t,49\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 21\n\t\t\t\t\t,20\n\t\t\t\t\t,18\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 32\n\t\t\t\t\t,21\n\t\t\t\t\t,18\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 20\n\t\t\t\t\t,19\n\t\t\t\t\t,18\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 49\n\t\t\t\t\t,19\n\t\t\t\t\t,20\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 49\n\t\t\t\t\t,11\n\t\t\t\t\t,17\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 17\n\t\t\t\t\t,19\n\t\t\t\t\t,49\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 15\n\t\t\t\t\t,17\n\t\t\t\t\t,11\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 17\n\t\t\t\t\t,15\n\t\t\t\t\t,16\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 19\n\t\t\t\t\t,17\n\t\t\t\t\t,16\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 16\n\t\t\t\t\t,18\n\t\t\t\t\t,19\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 16\n\t\t\t\t\t,74\n\t\t\t\t\t,18\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 16\n\t\t\t\t\t,72\n\t\t\t\t\t,75\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 72\n\t\t\t\t\t,16\n\t\t\t\t\t,70\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 8\n\t\t\t\t\t,70\n\t\t\t\t\t,16\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 75\n\t\t\t\t\t,76\n\t\t\t\t\t,77\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 70\n\t\t\t\t\t,8\n\t\t\t\t\t,78\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 65\n\t\t\t\t\t,66\n\t\t\t\t\t,8\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 3\n\t\t\t\t\t,4\n\t\t\t\t\t,5\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 3\n\t\t\t\t\t,5\n\t\t\t\t\t,6\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 29\n\t\t\t\t\t,30\n\t\t\t\t\t,31\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 30\n\t\t\t\t\t,46\n\t\t\t\t\t,31\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 45\n\t\t\t\t\t,31\n\t\t\t\t\t,46\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 44\n\t\t\t\t\t,45\n\t\t\t\t\t,46\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 47\n\t\t\t\t\t,48\n\t\t\t\t\t,46\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 44\n\t\t\t\t\t,46\n\t\t\t\t\t,48\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 43\n\t\t\t\t\t,45\n\t\t\t\t\t,44\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 43\n\t\t\t\t\t,73\n\t\t\t\t\t,45\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 42\n\t\t\t\t\t,43\n\t\t\t\t\t,44\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 41\n\t\t\t\t\t,43\n\t\t\t\t\t,42\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 41\n\t\t\t\t\t,71\n\t\t\t\t\t,43\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 40\n\t\t\t\t\t,41\n\t\t\t\t\t,42\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 39\n\t\t\t\t\t,41\n\t\t\t\t\t,40\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 39\n\t\t\t\t\t,69\n\t\t\t\t\t,41\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 38\n\t\t\t\t\t,39\n\t\t\t\t\t,40\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 36\n\t\t\t\t\t,39\n\t\t\t\t\t,38\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 36\n\t\t\t\t\t,67\n\t\t\t\t\t,39\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 38\n\t\t\t\t\t,37\n\t\t\t\t\t,36\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 34\n\t\t\t\t\t,35\n\t\t\t\t\t,36\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 34\n\t\t\t\t\t,36\n\t\t\t\t\t,37\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 35\n\t\t\t\t\t,64\n\t\t\t\t\t,36\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 67\n\t\t\t\t\t,36\n\t\t\t\t\t,35\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 51\n\t\t\t\t\t,52\n\t\t\t\t\t,53\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 54\n\t\t\t\t\t,55\n\t\t\t\t\t,56\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 57\n\t\t\t\t\t,58\n\t\t\t\t\t,59\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 58\n\t\t\t\t\t,60\n\t\t\t\t\t,59\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 61\n\t\t\t\t\t,62\n\t\t\t\t\t,63\n\t\t\t\t]\n\t\t\t]\n\t\t}\n\t]\n\t,\"materials\": [\n\t\t{\n\t\t\t \"properties\": [\n\t\t\t\t{\n\t\t\t\t\t \"key\": \"$mat.shadingm\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 4\n\t\t\t\t\t,\"value\": 2\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.diffuse\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.specular\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.ambient\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0.05\n\t\t\t\t\t\t,0.05\n\t\t\t\t\t\t,0.05\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$mat.twosided\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 4\n\t\t\t\t\t,\"value\": 1\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}\n\n";
"use strict";

var dollarMeshJSON = "\n{\n\t \"rootnode\": {\n\t\t \"name\": \"\"\n\t\t,\"transformation\": [\n\t\t\t 1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t]\n\t\t,\"meshes\": [\n\t\t\t 0\n\t\t]\n\t}\n\t,\"flags\": 8\n\t,\"meshes\": [\n\t\t{\n\t\t\t \"name\": \"\"\n\t\t\t,\"materialindex\": 0\n\t\t\t,\"primitivetypes\": 4\n\t\t\t,\"vertices\": [\n\t\t\t\t 0.053861\n\t\t\t\t,-0\n\t\t\t\t,-0.356071\n\t\t\t\t,-0.050992\n\t\t\t\t,-0\n\t\t\t\t,-0.358997\n\t\t\t\t,-0.048553\n\t\t\t\t,-0\n\t\t\t\t,-0.467752\n\t\t\t\t,0.051911\n\t\t\t\t,-0\n\t\t\t\t,-0.467752\n\t\t\t\t,-0.04709\n\t\t\t\t,-0\n\t\t\t\t,-0.241464\n\t\t\t\t,0.053861\n\t\t\t\t,-0\n\t\t\t\t,-0.236099\n\t\t\t\t,0.161641\n\t\t\t\t,-0\n\t\t\t\t,-0.317056\n\t\t\t\t,0.12165\n\t\t\t\t,-0\n\t\t\t\t,-0.205375\n\t\t\t\t,0.259179\n\t\t\t\t,-0\n\t\t\t\t,-0.24439\n\t\t\t\t,0.170907\n\t\t\t\t,-0\n\t\t\t\t,-0.14929\n\t\t\t\t,-0.139264\n\t\t\t\t,-0\n\t\t\t\t,-0.328272\n\t\t\t\t,-0.112441\n\t\t\t\t,-0\n\t\t\t\t,-0.214153\n\t\t\t\t,-0.22656\n\t\t\t\t,0\n\t\t\t\t,-0.26975\n\t\t\t\t,-0.140727\n\t\t\t\t,-0\n\t\t\t\t,-0.160995\n\t\t\t\t,-0.267038\n\t\t\t\t,0\n\t\t\t\t,-0.160995\n\t\t\t\t,-0.238752\n\t\t\t\t,-0\n\t\t\t\t,-0.046388\n\t\t\t\t,-0.112441\n\t\t\t\t,0\n\t\t\t\t,-0.094181\n\t\t\t\t,-0.151456\n\t\t\t\t,-0\n\t\t\t\t,0.03018\n\t\t\t\t,-0.050504\n\t\t\t\t,0\n\t\t\t\t,-0.066871\n\t\t\t\t,-0.049529\n\t\t\t\t,-0\n\t\t\t\t,0.069195\n\t\t\t\t,0.052398\n\t\t\t\t,-0\n\t\t\t\t,0.079924\n\t\t\t\t,0.053374\n\t\t\t\t,-0\n\t\t\t\t,-0.045412\n\t\t\t\t,0.139695\n\t\t\t\t,-0\n\t\t\t\t,-0.020052\n\t\t\t\t,0.122138\n\t\t\t\t,-0\n\t\t\t\t,0.108698\n\t\t\t\t,0.158715\n\t\t\t\t,-0\n\t\t\t\t,0.178925\n\t\t\t\t,0.232356\n\t\t\t\t,-0\n\t\t\t\t,0.039446\n\t\t\t\t,0.139695\n\t\t\t\t,-0\n\t\t\t\t,-0.020052\n\t\t\t\t,0.158715\n\t\t\t\t,-0\n\t\t\t\t,0.178925\n\t\t\t\t,0.232356\n\t\t\t\t,-0\n\t\t\t\t,0.039446\n\t\t\t\t,0.284051\n\t\t\t\t,-0\n\t\t\t\t,0.150639\n\t\t\t\t,0.266006\n\t\t\t\t,-0\n\t\t\t\t,0.261345\n\t\t\t\t,0.128966\n\t\t\t\t,-0\n\t\t\t\t,0.248177\n\t\t\t\t,0.179685\n\t\t\t\t,-0\n\t\t\t\t,0.356444\n\t\t\t\t,0.054837\n\t\t\t\t,0\n\t\t\t\t,0.281827\n\t\t\t\t,0.051872\n\t\t\t\t,-0\n\t\t\t\t,0.390372\n\t\t\t\t,-0.050504\n\t\t\t\t,-0\n\t\t\t\t,0.270123\n\t\t\t\t,0.052398\n\t\t\t\t,-0\n\t\t\t\t,0.079924\n\t\t\t\t,-0.049529\n\t\t\t\t,-0\n\t\t\t\t,0.069195\n\t\t\t\t,0.053861\n\t\t\t\t,-0\n\t\t\t\t,-0.236099\n\t\t\t\t,-0.04709\n\t\t\t\t,-0\n\t\t\t\t,-0.241464\n\t\t\t\t,0.053374\n\t\t\t\t,-0\n\t\t\t\t,-0.045412\n\t\t\t\t,-0.131948\n\t\t\t\t,-0\n\t\t\t\t,0.235009\n\t\t\t\t,-0.176328\n\t\t\t\t,-0\n\t\t\t\t,0.347666\n\t\t\t\t,-0.198762\n\t\t\t\t,-0\n\t\t\t\t,0.169171\n\t\t\t\t,-0.279231\n\t\t\t\t,-0\n\t\t\t\t,0.251103\n\t\t\t\t,-0.049256\n\t\t\t\t,-0\n\t\t\t\t,0.391214\n\t\t\t\t,0.052714\n\t\t\t\t,0\n\t\t\t\t,0.499926\n\t\t\t\t,-0.048\n\t\t\t\t,0\n\t\t\t\t,0.499432\n\t\t\t]\n\t\t\t,\"normals\": [\n\t\t\t\t 0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t]\n\t\t\t,\"colors\": [\n\t\t\t\t[\n\t\t\t\t\t 1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t]\n\t\t\t]\n\t\t\t,\"faces\": [\n\t\t\t\t[\n\t\t\t\t\t 0\n\t\t\t\t\t,1\n\t\t\t\t\t,2\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 0\n\t\t\t\t\t,2\n\t\t\t\t\t,3\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 1\n\t\t\t\t\t,0\n\t\t\t\t\t,4\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 5\n\t\t\t\t\t,4\n\t\t\t\t\t,0\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 0\n\t\t\t\t\t,6\n\t\t\t\t\t,5\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 10\n\t\t\t\t\t,1\n\t\t\t\t\t,4\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 4\n\t\t\t\t\t,11\n\t\t\t\t\t,10\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 5\n\t\t\t\t\t,18\n\t\t\t\t\t,4\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 5\n\t\t\t\t\t,6\n\t\t\t\t\t,7\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 21\n\t\t\t\t\t,18\n\t\t\t\t\t,5\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 6\n\t\t\t\t\t,8\n\t\t\t\t\t,7\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 7\n\t\t\t\t\t,8\n\t\t\t\t\t,9\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 16\n\t\t\t\t\t,18\n\t\t\t\t\t,17\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 17\n\t\t\t\t\t,18\n\t\t\t\t\t,19\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 20\n\t\t\t\t\t,19\n\t\t\t\t\t,18\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 18\n\t\t\t\t\t,21\n\t\t\t\t\t,20\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 21\n\t\t\t\t\t,22\n\t\t\t\t\t,20\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 20\n\t\t\t\t\t,22\n\t\t\t\t\t,23\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 25\n\t\t\t\t\t,23\n\t\t\t\t\t,22\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 24\n\t\t\t\t\t,23\n\t\t\t\t\t,25\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 15\n\t\t\t\t\t,16\n\t\t\t\t\t,17\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 13\n\t\t\t\t\t,16\n\t\t\t\t\t,15\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 15\n\t\t\t\t\t,14\n\t\t\t\t\t,13\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 11\n\t\t\t\t\t,13\n\t\t\t\t\t,12\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 12\n\t\t\t\t\t,13\n\t\t\t\t\t,14\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 10\n\t\t\t\t\t,11\n\t\t\t\t\t,12\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 26\n\t\t\t\t\t,27\n\t\t\t\t\t,28\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 29\n\t\t\t\t\t,28\n\t\t\t\t\t,27\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 29\n\t\t\t\t\t,27\n\t\t\t\t\t,30\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 27\n\t\t\t\t\t,31\n\t\t\t\t\t,30\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 30\n\t\t\t\t\t,31\n\t\t\t\t\t,32\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 31\n\t\t\t\t\t,33\n\t\t\t\t\t,32\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 32\n\t\t\t\t\t,33\n\t\t\t\t\t,34\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 33\n\t\t\t\t\t,35\n\t\t\t\t\t,34\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 35\n\t\t\t\t\t,33\n\t\t\t\t\t,36\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 45\n\t\t\t\t\t,46\n\t\t\t\t\t,34\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 45\n\t\t\t\t\t,34\n\t\t\t\t\t,35\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 37\n\t\t\t\t\t,35\n\t\t\t\t\t,36\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 35\n\t\t\t\t\t,41\n\t\t\t\t\t,42\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 45\n\t\t\t\t\t,35\n\t\t\t\t\t,42\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 47\n\t\t\t\t\t,46\n\t\t\t\t\t,45\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 43\n\t\t\t\t\t,42\n\t\t\t\t\t,41\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 43\n\t\t\t\t\t,44\n\t\t\t\t\t,42\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 38\n\t\t\t\t\t,39\n\t\t\t\t\t,40\n\t\t\t\t]\n\t\t\t]\n\t\t}\n\t]\n\t,\"materials\": [\n\t\t{\n\t\t\t \"properties\": [\n\t\t\t\t{\n\t\t\t\t\t \"key\": \"$mat.shadingm\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 4\n\t\t\t\t\t,\"value\": 2\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.diffuse\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.specular\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.ambient\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0.05\n\t\t\t\t\t\t,0.05\n\t\t\t\t\t\t,0.05\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$mat.twosided\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 4\n\t\t\t\t\t,\"value\": 1\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}\n\n";
"use strict";

var euroMeshJSON = "\n{\n\t \"rootnode\": {\n\t\t \"name\": \"\"\n\t\t,\"transformation\": [\n\t\t\t 1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t]\n\t\t,\"meshes\": [\n\t\t\t 0\n\t\t]\n\t}\n\t,\"flags\": 8\n\t,\"meshes\": [\n\t\t{\n\t\t\t \"name\": \"\"\n\t\t\t,\"materialindex\": 0\n\t\t\t,\"primitivetypes\": 4\n\t\t\t,\"vertices\": [\n\t\t\t\t -0.249167\n\t\t\t\t,0\n\t\t\t\t,0.249167\n\t\t\t\t,-0.294112\n\t\t\t\t,-0\n\t\t\t\t,0.131887\n\t\t\t\t,-0.149444\n\t\t\t\t,0\n\t\t\t\t,0.133994\n\t\t\t\t,-0.082025\n\t\t\t\t,0\n\t\t\t\t,0.228801\n\t\t\t\t,-0.131185\n\t\t\t\t,0\n\t\t\t\t,0.360828\n\t\t\t\t,0.025422\n\t\t\t\t,0\n\t\t\t\t,0.270937\n\t\t\t\t,0.023315\n\t\t\t\t,0\n\t\t\t\t,0.398048\n\t\t\t\t,0.181327\n\t\t\t\t,0\n\t\t\t\t,0.372064\n\t\t\t\t,0.133572\n\t\t\t\t,0\n\t\t\t\t,0.247762\n\t\t\t\t,0.217143\n\t\t\t\t,-0\n\t\t\t\t,0.184557\n\t\t\t\t,0.305813\n\t\t\t\t,0\n\t\t\t\t,0.282553\n\t\t\t\t,0.133572\n\t\t\t\t,0\n\t\t\t\t,0.247762\n\t\t\t\t,0.025422\n\t\t\t\t,0\n\t\t\t\t,0.270937\n\t\t\t\t,0.305813\n\t\t\t\t,0\n\t\t\t\t,0.282553\n\t\t\t\t,-0.393835\n\t\t\t\t,-0\n\t\t\t\t,0.133291\n\t\t\t\t,-0.393133\n\t\t\t\t,-0\n\t\t\t\t,0.014607\n\t\t\t\t,-0.31518\n\t\t\t\t,0\n\t\t\t\t,0.013905\n\t\t\t\t,-0.16981\n\t\t\t\t,0\n\t\t\t\t,0.017416\n\t\t\t\t,0.099161\n\t\t\t\t,0\n\t\t\t\t,0.135398\n\t\t\t\t,0.097054\n\t\t\t\t,0\n\t\t\t\t,0.015309\n\t\t\t\t,0.099161\n\t\t\t\t,0\n\t\t\t\t,0.135398\n\t\t\t\t,0.097054\n\t\t\t\t,0\n\t\t\t\t,0.015309\n\t\t\t\t,-0.149444\n\t\t\t\t,0\n\t\t\t\t,0.133994\n\t\t\t\t,-0.313073\n\t\t\t\t,-0\n\t\t\t\t,-0.064047\n\t\t\t\t,-0.169107\n\t\t\t\t,0\n\t\t\t\t,-0.066856\n\t\t\t\t,-0.393835\n\t\t\t\t,-0\n\t\t\t\t,-0.066154\n\t\t\t\t,-0.313073\n\t\t\t\t,-0\n\t\t\t\t,-0.064047\n\t\t\t\t,-0.295517\n\t\t\t\t,-0\n\t\t\t\t,-0.183434\n\t\t\t\t,-0.39243\n\t\t\t\t,-0\n\t\t\t\t,-0.182029\n\t\t\t\t,-0.295517\n\t\t\t\t,-0\n\t\t\t\t,-0.183434\n\t\t\t\t,-0.149444\n\t\t\t\t,-0\n\t\t\t\t,-0.180625\n\t\t\t\t,0.097756\n\t\t\t\t,0\n\t\t\t\t,-0.182029\n\t\t\t\t,0.098459\n\t\t\t\t,-0\n\t\t\t\t,-0.06475\n\t\t\t\t,-0.23793\n\t\t\t\t,-0\n\t\t\t\t,-0.307736\n\t\t\t\t,-0.071491\n\t\t\t\t,0\n\t\t\t\t,-0.285264\n\t\t\t\t,-0.12346\n\t\t\t\t,-0\n\t\t\t\t,-0.411673\n\t\t\t\t,0.026827\n\t\t\t\t,-0\n\t\t\t\t,-0.325293\n\t\t\t\t,0.0493\n\t\t\t\t,-0\n\t\t\t\t,-0.451\n\t\t\t\t,0.026827\n\t\t\t\t,-0\n\t\t\t\t,-0.325293\n\t\t\t\t,0.0493\n\t\t\t\t,-0\n\t\t\t\t,-0.451\n\t\t\t\t,-0.071491\n\t\t\t\t,0\n\t\t\t\t,-0.285264\n\t\t\t\t,0.12655\n\t\t\t\t,0\n\t\t\t\t,-0.301416\n\t\t\t\t,0.197479\n\t\t\t\t,-0\n\t\t\t\t,-0.410268\n\t\t\t\t,0.206609\n\t\t\t\t,-0\n\t\t\t\t,-0.229784\n\t\t\t\t,0.295797\n\t\t\t\t,-0\n\t\t\t\t,-0.32108\n\t\t\t]\n\t\t\t,\"normals\": [\n\t\t\t\t 0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t]\n\t\t\t,\"colors\": [\n\t\t\t\t[\n\t\t\t\t\t 1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t]\n\t\t\t]\n\t\t\t,\"faces\": [\n\t\t\t\t[\n\t\t\t\t\t 0\n\t\t\t\t\t,1\n\t\t\t\t\t,2\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 2\n\t\t\t\t\t,3\n\t\t\t\t\t,0\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 3\n\t\t\t\t\t,4\n\t\t\t\t\t,0\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 14\n\t\t\t\t\t,15\n\t\t\t\t\t,1\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 15\n\t\t\t\t\t,16\n\t\t\t\t\t,1\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 1\n\t\t\t\t\t,16\n\t\t\t\t\t,17\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 1\n\t\t\t\t\t,17\n\t\t\t\t\t,2\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 18\n\t\t\t\t\t,2\n\t\t\t\t\t,17\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 19\n\t\t\t\t\t,18\n\t\t\t\t\t,17\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 16\n\t\t\t\t\t,23\n\t\t\t\t\t,17\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 17\n\t\t\t\t\t,23\n\t\t\t\t\t,24\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 23\n\t\t\t\t\t,29\n\t\t\t\t\t,24\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 30\n\t\t\t\t\t,24\n\t\t\t\t\t,29\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 30\n\t\t\t\t\t,31\n\t\t\t\t\t,24\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 24\n\t\t\t\t\t,31\n\t\t\t\t\t,32\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 29\n\t\t\t\t\t,33\n\t\t\t\t\t,30\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 30\n\t\t\t\t\t,33\n\t\t\t\t\t,34\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 33\n\t\t\t\t\t,35\n\t\t\t\t\t,34\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 34\n\t\t\t\t\t,35\n\t\t\t\t\t,36\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 35\n\t\t\t\t\t,37\n\t\t\t\t\t,36\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 5\n\t\t\t\t\t,6\n\t\t\t\t\t,4\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 5\n\t\t\t\t\t,4\n\t\t\t\t\t,3\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 6\n\t\t\t\t\t,5\n\t\t\t\t\t,7\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 7\n\t\t\t\t\t,5\n\t\t\t\t\t,8\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 9\n\t\t\t\t\t,10\n\t\t\t\t\t,7\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 9\n\t\t\t\t\t,7\n\t\t\t\t\t,8\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 11\n\t\t\t\t\t,12\n\t\t\t\t\t,13\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 20\n\t\t\t\t\t,21\n\t\t\t\t\t,22\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 25\n\t\t\t\t\t,26\n\t\t\t\t\t,27\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 28\n\t\t\t\t\t,25\n\t\t\t\t\t,27\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 38\n\t\t\t\t\t,39\n\t\t\t\t\t,40\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 38\n\t\t\t\t\t,41\n\t\t\t\t\t,39\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 39\n\t\t\t\t\t,41\n\t\t\t\t\t,42\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 41\n\t\t\t\t\t,43\n\t\t\t\t\t,42\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 44\n\t\t\t\t\t,42\n\t\t\t\t\t,43\n\t\t\t\t]\n\t\t\t]\n\t\t}\n\t]\n\t,\"materials\": [\n\t\t{\n\t\t\t \"properties\": [\n\t\t\t\t{\n\t\t\t\t\t \"key\": \"$mat.shadingm\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 4\n\t\t\t\t\t,\"value\": 2\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.diffuse\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.specular\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.ambient\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0.05\n\t\t\t\t\t\t,0.05\n\t\t\t\t\t\t,0.05\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$mat.twosided\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 4\n\t\t\t\t\t,\"value\": 1\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}\n\n";
"use strict";

var noteMeshJSON = "\n{\n\t \"rootnode\": {\n\t\t \"name\": \"\"\n\t\t,\"transformation\": [\n\t\t\t 1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t]\n\t\t,\"meshes\": [\n\t\t\t 0\n\t\t]\n\t}\n\t,\"flags\": 8\n\t,\"meshes\": [\n\t\t{\n\t\t\t \"name\": \"\"\n\t\t\t,\"materialindex\": 0\n\t\t\t,\"primitivetypes\": 4\n\t\t\t,\"vertices\": [\n\t\t\t\t -0.249783\n\t\t\t\t,4e-06\n\t\t\t\t,0.310966\n\t\t\t\t,-0.302032\n\t\t\t\t,4e-06\n\t\t\t\t,0.371642\n\t\t\t\t,-0.388499\n\t\t\t\t,4e-06\n\t\t\t\t,0.397032\n\t\t\t\t,-0.247273\n\t\t\t\t,4e-06\n\t\t\t\t,0.267993\n\t\t\t\t,-0.468891\n\t\t\t\t,4e-06\n\t\t\t\t,0.369956\n\t\t\t\t,-0.247273\n\t\t\t\t,4e-06\n\t\t\t\t,0.267993\n\t\t\t\t,-0.5026\n\t\t\t\t,4e-06\n\t\t\t\t,0.306752\n\t\t\t\t,-0.476475\n\t\t\t\t,4e-06\n\t\t\t\t,0.229222\n\t\t\t\t,-0.255683\n\t\t\t\t,4e-06\n\t\t\t\t,0.233435\n\t\t\t\t,-0.476475\n\t\t\t\t,4e-06\n\t\t\t\t,0.229222\n\t\t\t\t,-0.312987\n\t\t\t\t,4e-06\n\t\t\t\t,0.187086\n\t\t\t\t,-0.403159\n\t\t\t\t,4e-06\n\t\t\t\t,0.184558\n\t\t\t\t,-0.184894\n\t\t\t\t,4e-06\n\t\t\t\t,-0.219108\n\t\t\t\t,-0.163692\n\t\t\t\t,4e-06\n\t\t\t\t,-0.370466\n\t\t\t\t,0.336636\n\t\t\t\t,4e-06\n\t\t\t\t,-0.324359\n\t\t\t\t,0.353733\n\t\t\t\t,4e-06\n\t\t\t\t,-0.474976\n\t\t\t\t,0.262987\n\t\t\t\t,4e-06\n\t\t\t\t,0.25805\n\t\t\t\t,0.263556\n\t\t\t\t,4e-06\n\t\t\t\t,0.230226\n\t\t\t\t,0.207979\n\t\t\t\t,4e-06\n\t\t\t\t,0.325951\n\t\t\t\t,0.122001\n\t\t\t\t,4e-06\n\t\t\t\t,0.349358\n\t\t\t\t,0.256915\n\t\t\t\t,4e-06\n\t\t\t\t,0.186889\n\t\t\t\t,0.045026\n\t\t\t\t,4e-06\n\t\t\t\t,0.320999\n\t\t\t\t,0.036045\n\t\t\t\t,4e-06\n\t\t\t\t,0.184419\n\t\t\t\t,0.256915\n\t\t\t\t,4e-06\n\t\t\t\t,0.186889\n\t\t\t\t,0.198609\n\t\t\t\t,4e-06\n\t\t\t\t,0.141431\n\t\t\t\t,0.036045\n\t\t\t\t,4e-06\n\t\t\t\t,0.184419\n\t\t\t\t,0.108186\n\t\t\t\t,4e-06\n\t\t\t\t,0.138466\n\t\t\t\t,0.122001\n\t\t\t\t,4e-06\n\t\t\t\t,0.349358\n\t\t\t\t,0.008114\n\t\t\t\t,4e-06\n\t\t\t\t,0.256628\n\t\t\t\t,-0.163692\n\t\t\t\t,4e-06\n\t\t\t\t,-0.370466\n\t\t\t\t,-0.184894\n\t\t\t\t,4e-06\n\t\t\t\t,-0.219108\n\t\t\t\t,0.353733\n\t\t\t\t,4e-06\n\t\t\t\t,-0.474976\n\t\t\t\t,-0.5026\n\t\t\t\t,4e-06\n\t\t\t\t,0.306752\n\t\t\t\t,-0.388499\n\t\t\t\t,4e-06\n\t\t\t\t,0.397032\n\t\t\t\t,-0.247273\n\t\t\t\t,4e-06\n\t\t\t\t,0.267993\n\t\t\t\t,-0.302032\n\t\t\t\t,4e-06\n\t\t\t\t,0.371642\n\t\t\t\t,-0.476475\n\t\t\t\t,4e-06\n\t\t\t\t,0.229222\n\t\t\t\t,-0.468891\n\t\t\t\t,4e-06\n\t\t\t\t,0.369956\n\t\t\t\t,-0.403159\n\t\t\t\t,4e-06\n\t\t\t\t,0.184558\n\t\t\t\t,-0.249783\n\t\t\t\t,4e-06\n\t\t\t\t,0.310966\n\t\t\t\t,-0.312987\n\t\t\t\t,4e-06\n\t\t\t\t,0.187086\n\t\t\t\t,0.008114\n\t\t\t\t,4e-06\n\t\t\t\t,0.256628\n\t\t\t\t,0.122001\n\t\t\t\t,4e-06\n\t\t\t\t,0.349358\n\t\t\t\t,0.108186\n\t\t\t\t,4e-06\n\t\t\t\t,0.138466\n\t\t\t\t,0.045026\n\t\t\t\t,4e-06\n\t\t\t\t,0.320999\n\t\t\t\t,0.262987\n\t\t\t\t,4e-06\n\t\t\t\t,0.25805\n\t\t\t\t,0.198609\n\t\t\t\t,4e-06\n\t\t\t\t,0.141431\n\t\t\t]\n\t\t\t,\"normals\": [\n\t\t\t\t 0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,-1\n\t\t\t\t,0\n\t\t\t]\n\t\t\t,\"colors\": [\n\t\t\t\t[\n\t\t\t\t\t 0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.592157\n\t\t\t\t\t,0.592157\n\t\t\t\t\t,0.592157\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.615686\n\t\t\t\t\t,0.615686\n\t\t\t\t\t,0.615686\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.592157\n\t\t\t\t\t,0.592157\n\t\t\t\t\t,0.592157\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.670588\n\t\t\t\t\t,0.670588\n\t\t\t\t\t,0.670588\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.670588\n\t\t\t\t\t,0.670588\n\t\t\t\t\t,0.670588\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.592157\n\t\t\t\t\t,0.592157\n\t\t\t\t\t,0.592157\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.592157\n\t\t\t\t\t,0.592157\n\t\t\t\t\t,0.592157\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,0.588235\n\t\t\t\t\t,1\n\t\t\t\t]\n\t\t\t]\n\t\t\t,\"faces\": [\n\t\t\t\t[\n\t\t\t\t\t 0\n\t\t\t\t\t,1\n\t\t\t\t\t,2\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 3\n\t\t\t\t\t,0\n\t\t\t\t\t,2\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 0\n\t\t\t\t\t,3\n\t\t\t\t\t,12\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 2\n\t\t\t\t\t,4\n\t\t\t\t\t,5\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 4\n\t\t\t\t\t,6\n\t\t\t\t\t,5\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 6\n\t\t\t\t\t,7\n\t\t\t\t\t,3\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 8\n\t\t\t\t\t,3\n\t\t\t\t\t,9\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 10\n\t\t\t\t\t,8\n\t\t\t\t\t,9\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 11\n\t\t\t\t\t,10\n\t\t\t\t\t,7\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 12\n\t\t\t\t\t,13\n\t\t\t\t\t,14\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 15\n\t\t\t\t\t,14\n\t\t\t\t\t,13\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 16\n\t\t\t\t\t,17\n\t\t\t\t\t,14\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 17\n\t\t\t\t\t,16\n\t\t\t\t\t,18\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 46\n\t\t\t\t\t,16\n\t\t\t\t\t,21\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 18\n\t\t\t\t\t,19\n\t\t\t\t\t,17\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 17\n\t\t\t\t\t,19\n\t\t\t\t\t,20\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 18\n\t\t\t\t\t,21\n\t\t\t\t\t,43\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 19\n\t\t\t\t\t,21\n\t\t\t\t\t,22\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 22\n\t\t\t\t\t,21\n\t\t\t\t\t,28\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 20\n\t\t\t\t\t,27\n\t\t\t\t\t,22\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 23\n\t\t\t\t\t,24\n\t\t\t\t\t,25\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 44\n\t\t\t\t\t,42\n\t\t\t\t\t,23\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 26\n\t\t\t\t\t,25\n\t\t\t\t\t,24\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 41\n\t\t\t\t\t,42\n\t\t\t\t\t,24\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 25\n\t\t\t\t\t,41\n\t\t\t\t\t,45\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 29\n\t\t\t\t\t,30\n\t\t\t\t\t,31\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 32\n\t\t\t\t\t,33\n\t\t\t\t\t,34\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 33\n\t\t\t\t\t,35\n\t\t\t\t\t,36\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 37\n\t\t\t\t\t,33\n\t\t\t\t\t,38\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 35\n\t\t\t\t\t,39\n\t\t\t\t\t,38\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 34\n\t\t\t\t\t,40\n\t\t\t\t\t,36\n\t\t\t\t]\n\t\t\t]\n\t\t}\n\t]\n\t,\"materials\": [\n\t\t{\n\t\t\t \"properties\": [\n\t\t\t\t{\n\t\t\t\t\t \"key\": \"$mat.shadingm\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 4\n\t\t\t\t\t,\"value\": 2\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.diffuse\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.specular\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.ambient\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0.05\n\t\t\t\t\t\t,0.05\n\t\t\t\t\t\t,0.05\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$mat.twosided\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 4\n\t\t\t\t\t,\"value\": 1\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}\n\n";
"use strict";

var playMeshJSON = "\n{\n\t \"rootnode\": {\n\t\t \"name\": \"\"\n\t\t,\"transformation\": [\n\t\t\t 1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t]\n\t\t,\"meshes\": [\n\t\t\t 0\n\t\t]\n\t}\n\t,\"flags\": 8\n\t,\"meshes\": [\n\t\t{\n\t\t\t \"name\": \"\"\n\t\t\t,\"materialindex\": 0\n\t\t\t,\"primitivetypes\": 4\n\t\t\t,\"vertices\": [\n\t\t\t\t -0.282957\n\t\t\t\t,0\n\t\t\t\t,-0.309781\n\t\t\t\t,-0.275582\n\t\t\t\t,0\n\t\t\t\t,-0.302913\n\t\t\t\t,0.029259\n\t\t\t\t,0\n\t\t\t\t,-0.308306\n\t\t\t\t,0.029544\n\t\t\t\t,0\n\t\t\t\t,-0.302923\n\t\t\t\t,0.029259\n\t\t\t\t,0\n\t\t\t\t,-0.308306\n\t\t\t\t,0.283778\n\t\t\t\t,0\n\t\t\t\t,-0.310243\n\t\t\t\t,0.277851\n\t\t\t\t,-0\n\t\t\t\t,-0.302688\n\t\t\t\t,0.276204\n\t\t\t\t,0\n\t\t\t\t,-0.182058\n\t\t\t\t,0.282002\n\t\t\t\t,0\n\t\t\t\t,-0.182119\n\t\t\t\t,0.276204\n\t\t\t\t,-0\n\t\t\t\t,0.017778\n\t\t\t\t,0.276204\n\t\t\t\t,-0\n\t\t\t\t,0.017778\n\t\t\t\t,0.282707\n\t\t\t\t,0\n\t\t\t\t,0.017638\n\t\t\t\t,0.276904\n\t\t\t\t,-0\n\t\t\t\t,0.286643\n\t\t\t\t,0.276904\n\t\t\t\t,-0\n\t\t\t\t,0.286643\n\t\t\t\t,0.283411\n\t\t\t\t,-0\n\t\t\t\t,0.294854\n\t\t\t\t,0.282707\n\t\t\t\t,0\n\t\t\t\t,0.017638\n\t\t\t\t,0.106841\n\t\t\t\t,0\n\t\t\t\t,0.288303\n\t\t\t\t,0.107957\n\t\t\t\t,0\n\t\t\t\t,0.294809\n\t\t\t\t,0.283411\n\t\t\t\t,-0\n\t\t\t\t,0.294854\n\t\t\t\t,-0.110384\n\t\t\t\t,0\n\t\t\t\t,0.287244\n\t\t\t\t,-0.110384\n\t\t\t\t,0\n\t\t\t\t,0.287244\n\t\t\t\t,-0.110507\n\t\t\t\t,0\n\t\t\t\t,0.294809\n\t\t\t\t,-0.283165\n\t\t\t\t,0\n\t\t\t\t,0.295513\n\t\t\t\t,-0.279169\n\t\t\t\t,0\n\t\t\t\t,0.288016\n\t\t\t\t,-0.279169\n\t\t\t\t,0\n\t\t\t\t,0.288016\n\t\t\t\t,-0.284315\n\t\t\t\t,-0\n\t\t\t\t,0.175755\n\t\t\t\t,-0.277972\n\t\t\t\t,0\n\t\t\t\t,0.17626\n\t\t\t\t,-0.284315\n\t\t\t\t,-0\n\t\t\t\t,0.175755\n\t\t\t\t,-0.284315\n\t\t\t\t,0\n\t\t\t\t,-0.115493\n\t\t\t\t,-0.277972\n\t\t\t\t,0\n\t\t\t\t,0.17626\n\t\t\t\t,-0.277262\n\t\t\t\t,0\n\t\t\t\t,-0.115449\n\t\t\t\t,-0.284315\n\t\t\t\t,0\n\t\t\t\t,-0.115493\n\t\t\t\t,-0.077407\n\t\t\t\t,0\n\t\t\t\t,-0.160399\n\t\t\t\t,0.117801\n\t\t\t\t,0\n\t\t\t\t,-0.009587\n\t\t\t\t,-0.080226\n\t\t\t\t,0\n\t\t\t\t,0.144747\n\t\t\t\t,-0.456184\n\t\t\t\t,0\n\t\t\t\t,-0.312122\n\t\t\t\t,-0.475497\n\t\t\t\t,0\n\t\t\t\t,-0.291054\n\t\t\t\t,-0.439636\n\t\t\t\t,-0\n\t\t\t\t,-0.271745\n\t\t\t\t,-0.318423\n\t\t\t\t,-0\n\t\t\t\t,-0.267516\n\t\t\t\t,-0.319833\n\t\t\t\t,-0\n\t\t\t\t,-0.154056\n\t\t\t\t,-0.437522\n\t\t\t\t,-0\n\t\t\t\t,-0.154056\n\t\t\t\t,-0.477838\n\t\t\t\t,0\n\t\t\t\t,-0.193906\n\t\t\t\t,-0.436817\n\t\t\t\t,0\n\t\t\t\t,-0.064556\n\t\t\t\t,-0.319833\n\t\t\t\t,0\n\t\t\t\t,-0.063186\n\t\t\t\t,-0.319833\n\t\t\t\t,-0\n\t\t\t\t,0.048905\n\t\t\t\t,-0.321242\n\t\t\t\t,0\n\t\t\t\t,0.135586\n\t\t\t\t,-0.319128\n\t\t\t\t,0\n\t\t\t\t,0.251866\n\t\t\t\t,-0.457155\n\t\t\t\t,0\n\t\t\t\t,0.296945\n\t\t\t\t,-0.437522\n\t\t\t\t,-0\n\t\t\t\t,0.25398\n\t\t\t\t,-0.47538\n\t\t\t\t,0\n\t\t\t\t,0.273457\n\t\t\t\t,-0.43389\n\t\t\t\t,-0\n\t\t\t\t,0.136996\n\t\t\t\t,-0.435408\n\t\t\t\t,-0\n\t\t\t\t,0.04961\n\t\t\t\t,-0.475145\n\t\t\t\t,0\n\t\t\t\t,0.080214\n\t\t\t\t,0.317238\n\t\t\t\t,0\n\t\t\t\t,-0.268926\n\t\t\t\t,0.447407\n\t\t\t\t,0\n\t\t\t\t,-0.311648\n\t\t\t\t,0.432813\n\t\t\t\t,0\n\t\t\t\t,-0.268926\n\t\t\t\t,0.467071\n\t\t\t\t,0\n\t\t\t\t,-0.287771\n\t\t\t\t,0.433774\n\t\t\t\t,0\n\t\t\t\t,-0.153351\n\t\t\t\t,0.465667\n\t\t\t\t,0\n\t\t\t\t,-0.105882\n\t\t\t\t,0.316534\n\t\t\t\t,0\n\t\t\t\t,-0.153351\n\t\t\t\t,0.316533\n\t\t\t\t,0\n\t\t\t\t,-0.06667\n\t\t\t\t,0.431404\n\t\t\t\t,0\n\t\t\t\t,-0.068079\n\t\t\t\t,0.432108\n\t\t\t\t,0\n\t\t\t\t,0.050314\n\t\t\t\t,0.467071\n\t\t\t\t,0\n\t\t\t\t,0.1048\n\t\t\t\t,0.317943\n\t\t\t\t,0\n\t\t\t\t,0.04961\n\t\t\t\t,0.317239\n\t\t\t\t,0\n\t\t\t\t,0.135586\n\t\t\t\t,0.432109\n\t\t\t\t,0\n\t\t\t\t,0.136996\n\t\t\t\t,0.434927\n\t\t\t\t,0\n\t\t\t\t,0.252571\n\t\t\t\t,0.449022\n\t\t\t\t,-0\n\t\t\t\t,0.294149\n\t\t\t\t,0.467344\n\t\t\t\t,0\n\t\t\t\t,0.270893\n\t\t\t\t,0.318144\n\t\t\t\t,0\n\t\t\t\t,0.252123\n\t\t\t\t,-0.076292\n\t\t\t\t,0\n\t\t\t\t,0.137721\n\t\t\t\t,0.117801\n\t\t\t\t,0\n\t\t\t\t,-0.009587\n\t\t\t\t,0.11041\n\t\t\t\t,0\n\t\t\t\t,-0.009437\n\t\t\t\t,-0.077407\n\t\t\t\t,0\n\t\t\t\t,-0.160399\n\t\t\t\t,-0.074807\n\t\t\t\t,0\n\t\t\t\t,-0.153774\n\t\t\t]\n\t\t\t,\"normals\": [\n\t\t\t\t 0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t,0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t]\n\t\t\t,\"colors\": [\n\t\t\t\t[\n\t\t\t\t\t 1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.501961\n\t\t\t\t\t,0.501961\n\t\t\t\t\t,0.501961\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.286275\n\t\t\t\t\t,0.286275\n\t\t\t\t\t,0.286275\n\t\t\t\t\t,1\n\t\t\t\t\t,0.956863\n\t\t\t\t\t,0.956863\n\t\t\t\t\t,0.956863\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.470588\n\t\t\t\t\t,0.470588\n\t\t\t\t\t,0.470588\n\t\t\t\t\t,1\n\t\t\t\t\t,0.172549\n\t\t\t\t\t,0.172549\n\t\t\t\t\t,0.172549\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.470588\n\t\t\t\t\t,0.470588\n\t\t\t\t\t,0.470588\n\t\t\t\t\t,1\n\t\t\t\t\t,0.25098\n\t\t\t\t\t,0.25098\n\t\t\t\t\t,0.25098\n\t\t\t\t\t,1\n\t\t\t\t\t,0.996078\n\t\t\t\t\t,0.996078\n\t\t\t\t\t,0.996078\n\t\t\t\t\t,1\n\t\t\t\t\t,0.443137\n\t\t\t\t\t,0.443137\n\t\t\t\t\t,0.443137\n\t\t\t\t\t,1\n\t\t\t\t\t,0.470588\n\t\t\t\t\t,0.470588\n\t\t\t\t\t,0.470588\n\t\t\t\t\t,1\n\t\t\t\t\t,0.972549\n\t\t\t\t\t,0.972549\n\t\t\t\t\t,0.972549\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.14902\n\t\t\t\t\t,0.14902\n\t\t\t\t\t,0.14902\n\t\t\t\t\t,1\n\t\t\t\t\t,0.811765\n\t\t\t\t\t,0.811765\n\t\t\t\t\t,0.811765\n\t\t\t\t\t,1\n\t\t\t\t\t,0.996078\n\t\t\t\t\t,0.996078\n\t\t\t\t\t,0.996078\n\t\t\t\t\t,1\n\t\t\t\t\t,0.470588\n\t\t\t\t\t,0.470588\n\t\t\t\t\t,0.470588\n\t\t\t\t\t,1\n\t\t\t\t\t,0.2\n\t\t\t\t\t,0.2\n\t\t\t\t\t,0.2\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.278431\n\t\t\t\t\t,0.278431\n\t\t\t\t\t,0.278431\n\t\t\t\t\t,1\n\t\t\t\t\t,0.470588\n\t\t\t\t\t,0.470588\n\t\t\t\t\t,0.470588\n\t\t\t\t\t,1\n\t\t\t\t\t,0.764706\n\t\t\t\t\t,0.764706\n\t\t\t\t\t,0.764706\n\t\t\t\t\t,1\n\t\t\t\t\t,0.2\n\t\t\t\t\t,0.2\n\t\t\t\t\t,0.2\n\t\t\t\t\t,1\n\t\t\t\t\t,0.984314\n\t\t\t\t\t,0.984314\n\t\t\t\t\t,0.984314\n\t\t\t\t\t,1\n\t\t\t\t\t,0.87451\n\t\t\t\t\t,0.87451\n\t\t\t\t\t,0.87451\n\t\t\t\t\t,1\n\t\t\t\t\t,0.470588\n\t\t\t\t\t,0.470588\n\t\t\t\t\t,0.470588\n\t\t\t\t\t,1\n\t\t\t\t\t,0.254902\n\t\t\t\t\t,0.254902\n\t\t\t\t\t,0.254902\n\t\t\t\t\t,1\n\t\t\t\t\t,0.882353\n\t\t\t\t\t,0.882353\n\t\t\t\t\t,0.882353\n\t\t\t\t\t,1\n\t\t\t\t\t,0.176471\n\t\t\t\t\t,0.176471\n\t\t\t\t\t,0.176471\n\t\t\t\t\t,1\n\t\t\t\t\t,0.152941\n\t\t\t\t\t,0.152941\n\t\t\t\t\t,0.152941\n\t\t\t\t\t,1\n\t\t\t\t\t,0.14902\n\t\t\t\t\t,0.14902\n\t\t\t\t\t,0.14902\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.14902\n\t\t\t\t\t,0.14902\n\t\t\t\t\t,0.14902\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,1\n\t\t\t\t\t,0.188235\n\t\t\t\t\t,0.188235\n\t\t\t\t\t,0.188235\n\t\t\t\t\t,1\n\t\t\t\t\t,0.984314\n\t\t\t\t\t,0.984314\n\t\t\t\t\t,0.984314\n\t\t\t\t\t,1\n\t\t\t\t]\n\t\t\t]\n\t\t\t,\"faces\": [\n\t\t\t\t[\n\t\t\t\t\t 0\n\t\t\t\t\t,1\n\t\t\t\t\t,2\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 30\n\t\t\t\t\t,0\n\t\t\t\t\t,31\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 30\n\t\t\t\t\t,1\n\t\t\t\t\t,0\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 35\n\t\t\t\t\t,37\n\t\t\t\t\t,0\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 38\n\t\t\t\t\t,0\n\t\t\t\t\t,37\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 31\n\t\t\t\t\t,0\n\t\t\t\t\t,38\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 29\n\t\t\t\t\t,30\n\t\t\t\t\t,31\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 31\n\t\t\t\t\t,38\n\t\t\t\t\t,39\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 39\n\t\t\t\t\t,43\n\t\t\t\t\t,31\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 27\n\t\t\t\t\t,31\n\t\t\t\t\t,43\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 40\n\t\t\t\t\t,43\n\t\t\t\t\t,39\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 42\n\t\t\t\t\t,43\n\t\t\t\t\t,40\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 43\n\t\t\t\t\t,44\n\t\t\t\t\t,27\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 40\n\t\t\t\t\t,37\n\t\t\t\t\t,41\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 41\n\t\t\t\t\t,42\n\t\t\t\t\t,40\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 52\n\t\t\t\t\t,51\n\t\t\t\t\t,42\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 52\n\t\t\t\t\t,42\n\t\t\t\t\t,41\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 36\n\t\t\t\t\t,41\n\t\t\t\t\t,37\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 35\n\t\t\t\t\t,36\n\t\t\t\t\t,37\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 51\n\t\t\t\t\t,52\n\t\t\t\t\t,50\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 49\n\t\t\t\t\t,50\n\t\t\t\t\t,52\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 51\n\t\t\t\t\t,50\n\t\t\t\t\t,44\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 48\n\t\t\t\t\t,50\n\t\t\t\t\t,49\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 45\n\t\t\t\t\t,44\n\t\t\t\t\t,50\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 47\n\t\t\t\t\t,48\n\t\t\t\t\t,49\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 48\n\t\t\t\t\t,47\n\t\t\t\t\t,46\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 46\n\t\t\t\t\t,47\n\t\t\t\t\t,22\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 45\n\t\t\t\t\t,46\n\t\t\t\t\t,27\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 27\n\t\t\t\t\t,46\n\t\t\t\t\t,22\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 45\n\t\t\t\t\t,27\n\t\t\t\t\t,44\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 26\n\t\t\t\t\t,27\n\t\t\t\t\t,23\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 27\n\t\t\t\t\t,26\n\t\t\t\t\t,28\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 20\n\t\t\t\t\t,34\n\t\t\t\t\t,26\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 23\n\t\t\t\t\t,20\n\t\t\t\t\t,26\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 26\n\t\t\t\t\t,34\n\t\t\t\t\t,30\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 22\n\t\t\t\t\t,21\n\t\t\t\t\t,23\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 23\n\t\t\t\t\t,25\n\t\t\t\t\t,22\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 17\n\t\t\t\t\t,20\n\t\t\t\t\t,21\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 21\n\t\t\t\t\t,20\n\t\t\t\t\t,24\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 16\n\t\t\t\t\t,34\n\t\t\t\t\t,20\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 16\n\t\t\t\t\t,17\n\t\t\t\t\t,18\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 13\n\t\t\t\t\t,16\n\t\t\t\t\t,14\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 16\n\t\t\t\t\t,19\n\t\t\t\t\t,17\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 10\n\t\t\t\t\t,33\n\t\t\t\t\t,16\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 10\n\t\t\t\t\t,16\n\t\t\t\t\t,13\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 33\n\t\t\t\t\t,34\n\t\t\t\t\t,16\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 13\n\t\t\t\t\t,14\n\t\t\t\t\t,15\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 68\n\t\t\t\t\t,67\n\t\t\t\t\t,14\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 67\n\t\t\t\t\t,70\n\t\t\t\t\t,14\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 14\n\t\t\t\t\t,70\n\t\t\t\t\t,65\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 11\n\t\t\t\t\t,14\n\t\t\t\t\t,65\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 68\n\t\t\t\t\t,69\n\t\t\t\t\t,67\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 66\n\t\t\t\t\t,67\n\t\t\t\t\t,63\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 63\n\t\t\t\t\t,67\n\t\t\t\t\t,69\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 65\n\t\t\t\t\t,66\n\t\t\t\t\t,62\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 62\n\t\t\t\t\t,66\n\t\t\t\t\t,63\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 64\n\t\t\t\t\t,11\n\t\t\t\t\t,65\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 62\n\t\t\t\t\t,64\n\t\t\t\t\t,65\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 61\n\t\t\t\t\t,62\n\t\t\t\t\t,58\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 58\n\t\t\t\t\t,62\n\t\t\t\t\t,63\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 60\n\t\t\t\t\t,61\n\t\t\t\t\t,59\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 59\n\t\t\t\t\t,61\n\t\t\t\t\t,57\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 57\n\t\t\t\t\t,61\n\t\t\t\t\t,58\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 56\n\t\t\t\t\t,57\n\t\t\t\t\t,58\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 55\n\t\t\t\t\t,57\n\t\t\t\t\t,56\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 54\n\t\t\t\t\t,55\n\t\t\t\t\t,56\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 53\n\t\t\t\t\t,55\n\t\t\t\t\t,54\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 54\n\t\t\t\t\t,5\n\t\t\t\t\t,53\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 53\n\t\t\t\t\t,5\n\t\t\t\t\t,8\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 8\n\t\t\t\t\t,59\n\t\t\t\t\t,53\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 59\n\t\t\t\t\t,8\n\t\t\t\t\t,60\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 7\n\t\t\t\t\t,8\n\t\t\t\t\t,5\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 9\n\t\t\t\t\t,8\n\t\t\t\t\t,7\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 8\n\t\t\t\t\t,10\n\t\t\t\t\t,11\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 8\n\t\t\t\t\t,11\n\t\t\t\t\t,60\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 10\n\t\t\t\t\t,12\n\t\t\t\t\t,11\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 10\n\t\t\t\t\t,7\n\t\t\t\t\t,33\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 11\n\t\t\t\t\t,64\n\t\t\t\t\t,60\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 33\n\t\t\t\t\t,73\n\t\t\t\t\t,71\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 74\n\t\t\t\t\t,73\n\t\t\t\t\t,33\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 32\n\t\t\t\t\t,75\n\t\t\t\t\t,73\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 73\n\t\t\t\t\t,75\n\t\t\t\t\t,71\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 71\n\t\t\t\t\t,34\n\t\t\t\t\t,72\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 71\n\t\t\t\t\t,75\n\t\t\t\t\t,34\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 34\n\t\t\t\t\t,75\n\t\t\t\t\t,32\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 32\n\t\t\t\t\t,3\n\t\t\t\t\t,1\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 1\n\t\t\t\t\t,30\n\t\t\t\t\t,32\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 32\n\t\t\t\t\t,7\n\t\t\t\t\t,3\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 32\n\t\t\t\t\t,30\n\t\t\t\t\t,34\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 3\n\t\t\t\t\t,4\n\t\t\t\t\t,1\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 5\n\t\t\t\t\t,3\n\t\t\t\t\t,6\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 4\n\t\t\t\t\t,3\n\t\t\t\t\t,5\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 6\n\t\t\t\t\t,3\n\t\t\t\t\t,7\n\t\t\t\t]\n\t\t\t\t,[\n\t\t\t\t\t 6\n\t\t\t\t\t,7\n\t\t\t\t\t,5\n\t\t\t\t]\n\t\t\t]\n\t\t}\n\t]\n\t,\"materials\": [\n\t\t{\n\t\t\t \"properties\": [\n\t\t\t\t{\n\t\t\t\t\t \"key\": \"$mat.shadingm\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 4\n\t\t\t\t\t,\"value\": 2\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.diffuse\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.specular\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.ambient\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0.05\n\t\t\t\t\t\t,0.05\n\t\t\t\t\t\t,0.05\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$mat.twosided\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 4\n\t\t\t\t\t,\"value\": 1\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}\n\n";
"use strict";

var rocketMeshJSON = "{\n  \"rootnode\": {\n    \"name\": \"untitled2.obj\",\n    \"transformation\": [\n      1,\n      0,\n      0,\n      0,\n      0,\n      1,\n      0,\n      0,\n      0,\n      0,\n      1,\n      0,\n      0,\n      0,\n      0,\n      1\n    ],\n    \"children\": [\n      {\n        \"name\": \"Curve_Mesh.001\",\n        \"transformation\": [\n          1,\n          0,\n          0,\n          0,\n          0,\n          1,\n          0,\n          0,\n          0,\n          0,\n          1,\n          0,\n          0,\n          0,\n          0,\n          1\n        ],\n        \"meshes\": [\n          0\n        ]\n      }\n    ]\n  },\n  \"flags\": 8,\n  \"meshes\": [\n    {\n      \"name\": \"\",\n      \"materialindex\": 0,\n      \"primitivetypes\": 4,\n      \"vertices\": [\n        -0.059068,\n        0,\n        -0.444557,\n        0.05824,\n        0,\n        -0.438834,\n        -0.003264,\n        0,\n        -0.492069,\n        -0.140618,\n        0,\n        -0.326852,\n        0.144816,\n        0,\n        -0.303296,\n        -0.001915,\n        0,\n        -0.262052,\n        -0.04516,\n        0,\n        -0.251875,\n        0.039796,\n        0,\n        -0.251107,\n        -0.193303,\n        0,\n        -0.179972,\n        0.19179,\n        0,\n        -0.159179,\n        0.071307,\n        0,\n        -0.220014,\n        -0.082414,\n        0,\n        -0.213081,\n        0.084007,\n        0,\n        -0.177069,\n        -0.089208,\n        0,\n        -0.164735,\n        0.070477,\n        0,\n        -0.128431,\n        -0.072835,\n        0,\n        -0.122619,\n        -0.203845,\n        0,\n        -0.039609,\n        0.034137,\n        0,\n        -0.096583,\n        -0.022907,\n        0,\n        -0.089519,\n        0.197516,\n        0,\n        -0.040207,\n        -0.286088,\n        0,\n        0.029227,\n        0.27606,\n        0,\n        0.025778,\n        0.302851,\n        0,\n        0.099566,\n        -0.306408,\n        0,\n        0.108854,\n        0.103075,\n        0,\n        0.210988,\n        -0.109584,\n        0,\n        0.213838,\n        0.074374,\n        0,\n        0.234309,\n        -0.26436,\n        0,\n        0.291607,\n        0.266062,\n        0,\n        0.285328,\n        -0.21633,\n        0,\n        0.305326,\n        -0.035001,\n        0,\n        0.253239,\n        0.023745,\n        0,\n        0.253383,\n        0.213896,\n        0,\n        0.305263,\n        0.245753,\n        0,\n        0.303398\n      ],\n      \"normals\": [\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0,\n        0,\n        1,\n        0\n      ],\n      \"faces\": [\n        [\n          0,\n          1,\n          2\n        ],\n        [\n          3,\n          1,\n          0\n        ],\n        [\n          3,\n          4,\n          1\n        ],\n        [\n          3,\n          5,\n          4\n        ],\n        [\n          3,\n          6,\n          5\n        ],\n        [\n          8,\n          6,\n          3\n        ],\n        [\n          7,\n          4,\n          5\n        ],\n        [\n          7,\n          9,\n          4\n        ],\n        [\n          10,\n          9,\n          7\n        ],\n        [\n          12,\n          9,\n          10\n        ],\n        [\n          14,\n          9,\n          12\n        ],\n        [\n          17,\n          9,\n          14\n        ],\n        [\n          17,\n          19,\n          9\n        ],\n        [\n          18,\n          19,\n          17\n        ],\n        [\n          16,\n          19,\n          18\n        ],\n        [\n          20,\n          19,\n          16\n        ],\n        [\n          20,\n          21,\n          19\n        ],\n        [\n          16,\n          18,\n          15\n        ],\n        [\n          16,\n          15,\n          8\n        ],\n        [\n          8,\n          15,\n          13\n        ],\n        [\n          8,\n          11,\n          6\n        ],\n        [\n          8,\n          13,\n          11\n        ],\n        [\n          20,\n          22,\n          21\n        ],\n        [\n          23,\n          22,\n          20\n        ],\n        [\n          23,\n          24,\n          22\n        ],\n        [\n          24,\n          28,\n          22\n        ],\n        [\n          23,\n          25,\n          24\n        ],\n        [\n          27,\n          25,\n          23\n        ],\n        [\n          25,\n          26,\n          24\n        ],\n        [\n          32,\n          28,\n          24\n        ],\n        [\n          32,\n          33,\n          28\n        ],\n        [\n          30,\n          26,\n          25\n        ],\n        [\n          30,\n          31,\n          26\n        ],\n        [\n          27,\n          29,\n          25\n        ]\n      ]\n    }\n  ],\n  \"materials\": [\n    {\n      \"properties\": [\n        {\n          \"key\": \"?mat.name\",\n          \"semantic\": 0,\n          \"index\": 0,\n          \"type\": 3,\n          \"value\": \"DefaultMaterial\"\n        },\n        {\n          \"key\": \"$mat.shadingm\",\n          \"semantic\": 0,\n          \"index\": 0,\n          \"type\": 4,\n          \"value\": 2\n        },\n        {\n          \"key\": \"$clr.ambient\",\n          \"semantic\": 0,\n          \"index\": 0,\n          \"type\": 1,\n          \"value\": [\n            0,\n            0,\n            0\n          ]\n        },\n        {\n          \"key\": \"$clr.diffuse\",\n          \"semantic\": 0,\n          \"index\": 0,\n          \"type\": 1,\n          \"value\": [\n            0.6,\n            0.6,\n            0.6\n          ]\n        },\n        {\n          \"key\": \"$clr.specular\",\n          \"semantic\": 0,\n          \"index\": 0,\n          \"type\": 1,\n          \"value\": [\n            0,\n            0,\n            0\n          ]\n        },\n        {\n          \"key\": \"$clr.emissive\",\n          \"semantic\": 0,\n          \"index\": 0,\n          \"type\": 1,\n          \"value\": [\n            0,\n            0,\n            0\n          ]\n        },\n        {\n          \"key\": \"$mat.shininess\",\n          \"semantic\": 0,\n          \"index\": 0,\n          \"type\": 1,\n          \"value\": 0\n        },\n        {\n          \"key\": \"$mat.opacity\",\n          \"semantic\": 0,\n          \"index\": 0,\n          \"type\": 1,\n          \"value\": 1\n        },\n        {\n          \"key\": \"$mat.refracti\",\n          \"semantic\": 0,\n          \"index\": 0,\n          \"type\": 1,\n          \"value\": 1\n        }\n      ]\n    }\n  ]\n}";
"use strict";

var twitterMeshJSON = "\n{\n\t \"rootnode\": {\n\t\t \"name\": \"note.obj\"\n\t\t,\"transformation\": [\n\t\t\t 1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t]\n\t\t,\"children\": [\n\t\t\t{\n\t\t\t\t \"name\": \"Curve_Mesh\"\n\t\t\t\t,\"transformation\": [\n\t\t\t\t\t 1\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,1\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,1\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,1\n\t\t\t\t]\n\t\t\t\t,\"meshes\": [\n\t\t\t\t\t 0\n\t\t\t\t]\n\t\t\t}\n\t\t]\n\t}\n\t,\"flags\": 8\n\t,\"meshes\": [\n\t\t{\n\t\t\t \"name\": \"\"\n\t\t\t,\"materialindex\": 0\n\t\t\t,\"primitivetypes\": 4\n\t\t\t,\"vertices\": [\n\t\t\t\t\n0.443468, 0.000000, -0.309905,\n0.338753, 0.000000, -0.279369,\n0.390277, 0.000000, -0.324692,\n0.419040, 0.000000, -0.380699,\n0.308625, 0.000000, -0.337901,\n0.237195, 0.000000, -0.385181,\n0.167599, 0.000000, -0.399332,\n0.096964, 0.000000, -0.384183,\n0.020592, 0.000000, -0.327718,\n-0.014922, 0.000000, -0.237497,\n-0.011830, 0.000000, -0.170353,\n-0.210307, 0.000000, -0.214694,\n-0.393012, 0.000000, -0.361208,\n-0.415662, 0.000000, -0.302481,\n-0.407020, 0.000000, -0.211720,\n-0.348366, 0.000000, -0.123897,\n-0.372119, 0.000000, -0.121162,\n-0.417442, 0.000000, -0.141883,\n-0.416165, 0.000000, -0.141454,\n-0.416165, 0.000000, -0.141454,\n-0.416165, 0.000000, -0.141454,\n-0.416165, 0.000000, -0.141454,\n-0.416165, 0.000000, -0.141454,\n-0.416165, 0.000000, -0.141454,\n-0.416165, 0.000000, -0.141454,\n-0.416165, 0.000000, -0.141454,\n-0.416165, 0.000000, -0.141454,\n-0.385170, 0.000000, -0.029195,\n-0.271895, 0.000000, 0.040065,\n-0.348891, 0.000000, 0.041643,\n-0.299096, 0.000000, 0.117013,\n-0.180284, 0.000000, 0.173943,\n-0.310492, 0.000000, 0.235060,\n-0.436299, 0.000000, 0.244957,\n-0.324603, 0.000000, 0.300566,\n-0.178235, 0.000000, 0.322957,\n0.031885, 0.000000, 0.295548,\n0.230570, 0.000000, 0.155338,\n0.347065, 0.000000, -0.047266,\n0.366758, 0.000000, -0.227591,\n0.415612, 0.000000, -0.270332\n\n\t\t\t]\n\t\t\t,\"normals\": [\n\t\t\t\t 0\n\t\t\t\t,1\n\t\t\t\t,0\n\t\t\t\t\n\t\t\t]\n\t\t\t,\"faces\": [\n\t\t\t\t[8, 6, 7],\n[9, 6, 8],\n[9, 5, 6],\n[5, 3, 4],\n[9, 3, 5],\n[14, 12, 13],\n[2, 41, 1],\n[9, 2, 3],\n[10, 2, 9],\n[10, 41, 2],\n[15, 12, 14],\n[10, 40, 41],\n[10, 39, 40],\n[11, 39, 10],\n[16, 12, 15],\n[16, 11, 12],\n[16, 39, 11],\n[28, 17, 18],\n[28, 16, 17],\n[28, 39, 16],\n[29, 39, 28],\n[29, 38, 39],\n[30, 38, 29],\n[31, 38, 30],\n[32, 38, 31],\n[32, 37, 38],\n[33, 37, 32],\n[34, 37, 33],\n[35, 37, 34],\n[35, 36, 37]\n\t\t\t]\n\t\t}\n\t]\n\t,\"materials\": [\n\t\t{\n\t\t\t \"properties\": [\n\t\t\t\t{\n\t\t\t\t\t \"key\": \"?mat.name\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 3\n\t\t\t\t\t,\"value\": \"DefaultMaterial\"\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$mat.shadingm\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 4\n\t\t\t\t\t,\"value\": 2\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.ambient\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0\n\t\t\t\t\t\t,0\n\t\t\t\t\t\t,0\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.diffuse\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.specular\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0\n\t\t\t\t\t\t,0\n\t\t\t\t\t\t,0\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.emissive\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0\n\t\t\t\t\t\t,0\n\t\t\t\t\t\t,0\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$mat.shininess\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": 0\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$mat.opacity\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": 1\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$mat.refracti\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": 1\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}";
"use strict";

var glassesMeshJSON = "\n{\n\t \"rootnode\": {\n\t\t \"name\": \"tree2.obj\"\n\t\t,\"transformation\": [\n\t\t\t 1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t]\n\t\t,\"children\": [\n\t\t\t{\n\t\t\t\t \"name\": \"Plane\"\n\t\t\t\t,\"transformation\": [\n\t\t\t\t\t 1\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,1\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,1\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,1\n\t\t\t\t]\n\t\t\t\t,\"meshes\": [\n\t\t\t\t\t 0\n\t\t\t\t]\n\t\t\t}\n\t\t]\n\t}\n\t,\"flags\": 8\n\t,\"meshes\": [\n\t\t{\n\t\t\t \"name\": \"\"\n\t\t\t,\"materialindex\": 0\n\t\t\t,\"primitivetypes\": 4\n\t\t\t,\"vertices\": [\n                0,0,0,\n-0.320407, -0.000084, 0.157642,\n-0.319471, -0.000084, -0.103496,\n-0.380990, -0.000084, 0.122355,\n-0.248682, -0.000084, 0.158592,\n-0.250368, -0.000084, -0.104339,\n-0.382676, -0.000084, -0.066416,\n-0.415542, -0.000084, -0.002369,\n-0.415542, -0.000084, 0.061678,\n-0.192219, -0.000084, 0.122355,\n-0.217501, -0.000084, -0.084956,\n-0.188006, -0.000084, -0.067259,\n-0.171151, -0.000084, -0.036078,\n-0.157667, -0.000084, 0.059993,\n-0.155139, -0.000084, -0.009111,\n-0.085214, -0.007967, -0.016451,\n-0.068735, -0.007967, -0.045237,\n-0.126769, -0.007967, -0.053118,\n-0.124161, -0.007967, -0.019651,\n-0.040075, -0.007967, 0.023545,\n-0.025373, -0.007967, -0.005460,\n-0.001577, -0.007967, 0.155411,\n-0.042596, -0.007967, 0.095933,\n0.060978,  -0.007967,  0.192329,\n-0.002602, -0.007967, -0.039430,\n0.223004, -0.007967, 0.093882,\n0.189163, -0.007967, -0.037379,\n0.057901, -0.007967, -0.073271,\n0.125583, -0.007967, -0.074296,\n0.190188, -0.007967, 0.155411,\n0.131736, -0.007967, 0.191303,\n0.206596, -0.007967, -0.010717,\n0.225055, -0.007967, 0.024150,\n0.028822, -0.007967, -0.224606,\n0.033950, -0.007967, -0.190765,\n0.085224, -0.007967, -0.223581,\n0.080096, -0.007967, -0.194867,\n0.129319, -0.007967, -0.205122,\n0.105733, -0.007967, -0.180511,\n0.169313, -0.007967, -0.147695,\n0.148804, -0.007967, -0.121033,\n0.625214, -0.007967, -0.041858,\n0.563765, -0.007967, -0.088257,\n0.598804, -0.007967, -0.015354,\n0.585820, -0.007967, -0.119369,\n0.535051, -0.007967, -0.106716,\n0.544880, -0.007967, -0.141077,\n0.496177, -0.007967, -0.105344,\n0.488905, -0.007967, -0.140806\n\n\t\t\t]\n\t\t\t,\"normals\": [\n\t\t\t\t\n\t\t\t]\n\t\t\t,\"colors\": [\n        [\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n\t\t  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1\n\n        ]\n      ]\n\t\t\t,\"faces\": [\n\n\n[28, 31, 30],\n[1, 2, 3],\n[4, 2, 1],\n[2, 4, 5],\n[2, 6, 3],\n[7, 3, 6],\n[8, 3, 7],\n[4, 9, 5],\n[5, 9, 10],\n[10, 9, 11],\n[11, 9, 12],\n[12, 13, 14],\n[9, 13, 12],\n[15, 16, 17],\n[18, 15, 17],\n[17, 12, 18],\n[12, 14, 18],\n[19, 20, 16],\n[16, 15, 19],\n[21, 19, 22],\n[19, 21, 20],\n[23, 24, 21],\n[21, 24, 20],\n[25, 26, 24],\n[27, 24, 26],\n[26, 28, 27],\n[29, 24, 30],\n[29, 25, 24],\n[24, 23, 30],\n[26, 25, 31],\n[31, 25, 32],\n[33, 10, 34],\n[5, 10, 33],\n[34, 35, 33],\n[35, 34, 36],\n[36, 37, 35],\n[38, 39, 37],\n[37, 36, 38],\n[39, 38, 40],\n[41, 42, 43],\n[42, 41, 44],\n[45, 44, 46],\n[42, 44, 45],\n[47, 46, 48],\n[46, 47, 45],\n[31, 32, 48],\n[47, 48, 32],\n[4, 1, 11],\n[7, 3, 11],\n[13, 9, 5],\n[15, 16, 14],\n[20, 19, 15],\n[33, 34, 5],\n[36, 37, 33],\n[39, 40, 37],\n[26, 27, 29],\n[32, 25, 23],\n[21, 22, 27],\n[28, 26, 24],\n[30, 21, 24],\n[47, 46, 31],\n[43, 44, 41],\n[44, 42, 46]\n\n\t\t\t]\n\t\t}\n\t]\n\t,\"materials\": [\n\t\t{\n\t\t\t \"properties\": [\n\t\t\t\t{\n\t\t\t\t\t \"key\": \"?mat.name\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 3\n\t\t\t\t\t,\"value\": \"DefaultMaterial\"\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$mat.shadingm\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 4\n\t\t\t\t\t,\"value\": 2\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.ambient\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0\n\t\t\t\t\t\t,0\n\t\t\t\t\t\t,0\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.diffuse\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.specular\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0\n\t\t\t\t\t\t,0\n\t\t\t\t\t\t,0\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.emissive\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0\n\t\t\t\t\t\t,0\n\t\t\t\t\t\t,0\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$mat.shininess\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": 0\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$mat.opacity\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": 1\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$mat.refracti\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": 1\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}\n";
"use strict";

var planeMeshJSON = "\n{\n\t \"rootnode\": {\n\t\t \"name\": \"tree2.obj\"\n\t\t,\"transformation\": [\n\t\t\t 1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t]\n\t\t,\"children\": [\n\t\t\t{\n\t\t\t\t \"name\": \"Plane\"\n\t\t\t\t,\"transformation\": [\n\t\t\t\t\t 1\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,1\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,1\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,1\n\t\t\t\t]\n\t\t\t\t,\"meshes\": [\n\t\t\t\t\t 0\n\t\t\t\t]\n\t\t\t}\n\t\t]\n\t}\n\t,\"flags\": 8\n\t,\"meshes\": [\n\t\t{\n\t\t\t \"name\": \"\"\n\t\t\t,\"materialindex\": 0\n\t\t\t,\"primitivetypes\": 4\n\t\t\t,\"vertices\": [\n                0,0,0,\n\n-0.378510, -0.000000, 0.033717,\n-0.414916, -0.000000, 0.062032,\n-0.256146, -0.000000, 0.103494,\n-0.295585, -0.000000, 0.191475,\n-0.199514, -0.000000, 0.194509,\n-0.239160, -0.000000, 0.356881,\n-0.204571, -0.000000, 0.333053,\n0.006785 , -0.000000, 0.099449,\n-0.072094, 0.000000 , -0.033027,\n0.314332 , -0.007634, -0.223022,\n0.270258 , -0.007634, -0.210722,\n0.179034 , -0.007634, -0.009825,\n0.360456 , -0.007634, -0.199447,\n0.326632 , -0.007634, -0.115399,\n0.358406 , -0.007634, -0.152298,\n0.113435 , -0.007634, -0.128723,\n-0.234035, -0.007634, -0.354220,\n-0.283235, -0.007634, -0.326545,\n0.225357 , -0.007634, 0.385659,\n0.158733 , -0.007634, 0.406159\n\t\t\t]\n\t\t\t,\"normals\": [\n\t\t\t\t\n\t\t\t]\n\t\t,\"colors\": [\n        [\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n\t\t  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1\n\n        ]\n      ]\n\n\t\t\t,\"faces\": [\n\n[1, 2, 3],\n[3, 2, 4],\n[4, 5, 3],\n[4, 6, 5],\n[5, 6, 7],\n[8, 9, 5],\n[3, 5, 9],\n[10, 11, 12],\n[10, 12, 13],\n[13, 14, 15],\n[12, 14, 13],\n[16, 12, 11],\n[17, 18, 16],\n[16, 18, 9],\n[9, 8, 16],\n[16, 8, 12],\n[19, 8, 20],\n[8, 19, 12],\n[5, 8,  16],\n[8, 12, 11],\n[11, 10, 14],\n[18, 17, 9],\n[19, 20, 12],\n[5, 3, 8],\n[4, 5, 1],\n[7, 6, 3],\n[16, 12, 19],\n[10, 11, 15],\n[5,  4,  2]\n\n\t\t\t]\n\t\t}\n\t]\n\t,\"materials\": [\n\t\t{\n\t\t\t \"properties\": [\n\t\t\t\t{\n\t\t\t\t\t \"key\": \"?mat.name\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 3\n\t\t\t\t\t,\"value\": \"DefaultMaterial\"\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$mat.shadingm\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 4\n\t\t\t\t\t,\"value\": 2\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.ambient\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0\n\t\t\t\t\t\t,0\n\t\t\t\t\t\t,0\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.diffuse\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.specular\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0\n\t\t\t\t\t\t,0\n\t\t\t\t\t\t,0\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.emissive\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0\n\t\t\t\t\t\t,0\n\t\t\t\t\t\t,0\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$mat.shininess\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": 0\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$mat.opacity\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": 1\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$mat.refracti\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": 1\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}\n";
"use strict";

var treeMeshJSON = "\n{\n\t \"rootnode\": {\n\t\t \"name\": \"tree2.obj\"\n\t\t,\"transformation\": [\n\t\t\t 1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,0\n\t\t\t,1\n\t\t]\n\t\t,\"children\": [\n\t\t\t{\n\t\t\t\t \"name\": \"Plane\"\n\t\t\t\t,\"transformation\": [\n\t\t\t\t\t 1\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,1\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,1\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,0\n\t\t\t\t\t,1\n\t\t\t\t]\n\t\t\t\t,\"meshes\": [\n\t\t\t\t\t 0\n\t\t\t\t]\n\t\t\t}\n\t\t]\n\t}\n\t,\"flags\": 8\n\t,\"meshes\": [\n\t\t{\n\t\t\t \"name\": \"\"\n\t\t\t,\"materialindex\": 0\n\t\t\t,\"primitivetypes\": 4\n\t\t\t,\"vertices\": [\n                0,0,0,\n0.000768 , -0.000001, 0.407387,\n-0.041481, -0.000001, 0.139371,\n-0.099333, -0.000001, 0.390063,\n0.041668 , -0.000000, 0.051702,\n-0.024341, -0.012344, -0.135543,\n0.038752 , -0.012344, -0.140668,\n0.106608 , -0.012344, -0.056252,\n0.237557 , -0.012343, -0.095897,\n0.294021 , -0.012344, -0.009399,\n0.225543 , -0.012344, 0.053072,\n0.315646 , -0.012344, 0.091516,\n0.137843 , -0.012344, -0.184799,\n0.069365 , -0.012344, -0.206423,\n0.310841 , -0.012344, -0.258082,\n0.179891 , -0.012344, -0.249673,\n0.229148 , -0.012344, -0.357796,\n0.104205 , -0.012344, -0.354192,\n0.018908 , -0.012344, -0.237659,\n-0.044765, -0.012344, -0.224444,\n0.000887 , -0.012344, -0.385427,\n-0.089215, -0.012344, -0.422670,\n-0.124055, -0.012344, -0.318150,\n-0.198540, -0.012344, -0.396240,\n-0.123072, -0.012344, -0.166612,\n-0.175714, -0.012344, -0.280908,\n-0.321079, -0.012344, -0.260485,\n-0.244192, -0.012344, -0.158369,\n-0.429203, -0.012344, -0.186000,\n-0.101229, -0.012344, -0.011802,\n-0.178117, -0.012344, 0.065086,\n-0.271823, -0.012344, -0.020211,\n-0.305462, -0.012344, 0.128759\n\t\t\t]\n\t\t\t,\"normals\": [\n\t\t\t\t\n\t\t\t]\n\t\t\t,\"colors\": [\n        [\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n\t\t  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,\n          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1\n\n        ]\n      ]\n\t\t\t,\"faces\": [\n\n\n[1, 2, 3],\n[1, 2, 4],\n[4, 2, 5],\n[5, 6, 4],\n[6, 7, 8],\n[9, 10, 7],\n[11, 10, 9],\n[8, 9, 7],\n[8, 12, 6],\n[12, 13, 6],\n[14, 15, 16],\n[16, 15, 17],\n[15, 13, 17],\n[17, 13, 18],\n[13, 18, 6],\n[6, 5, 18],\n[19, 18, 5],\n[18, 19, 20],\n[21, 22, 19],\n[21, 20, 19],\n[22, 21, 23],\n[19, 5, 24],\n[19, 24, 25],\n[25, 24, 26],\n[24, 27, 26],\n[28, 26, 27],\n[29, 24, 5],\n[29, 30, 24],\n[24, 30, 31],\n[30, 32, 31],\n[4, 3, 1],\n[5, 4, 1],\n[2, 4, 6],\n[29, 24, 31],\n[29, 5, 31],\n[26, 28, 25],\n[19, 25, 26],\n[24, 19, 27],\n[19, 6, 4],\n[9, 10, 12],\n[10, 11, 8],\n[16, 17, 14],\n[16, 17, 18],\n[20, 21, 18],\n[6, 18, 22],\n[13, 6, 7]\n\n\n\t\t\t]\n\t\t}\n\t]\n\t,\"materials\": [\n\t\t{\n\t\t\t \"properties\": [\n\t\t\t\t{\n\t\t\t\t\t \"key\": \"?mat.name\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 3\n\t\t\t\t\t,\"value\": \"DefaultMaterial\"\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$mat.shadingm\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 4\n\t\t\t\t\t,\"value\": 2\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.ambient\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0\n\t\t\t\t\t\t,0\n\t\t\t\t\t\t,0\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.diffuse\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t\t,0.6\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.specular\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0\n\t\t\t\t\t\t,0\n\t\t\t\t\t\t,0\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$clr.emissive\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": [\n\t\t\t\t\t\t 0\n\t\t\t\t\t\t,0\n\t\t\t\t\t\t,0\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$mat.shininess\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": 0\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$mat.opacity\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": 1\n\t\t\t\t}\n\t\t\t\t,{\n\t\t\t\t\t \"key\": \"$mat.refracti\"\n\t\t\t\t\t,\"semantic\": 0\n\t\t\t\t\t,\"index\": 0\n\t\t\t\t\t,\"type\": 1\n\t\t\t\t\t,\"value\": 1\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}\n";
'use strict';

function MouseController() {
        this.origin = [0, 0, 0];
        this.velocity = [0, 0, 0];
        this.ww = undefined;
        this.wh = undefined;

        this.infocus = false;
        this.focustime = 0;

        // needs to be in sNDC  -1...+1 in the y    and  (-1...+1) * screenRatio for the x coordinate
        var meshCenterNDCx = ((meshCenter[0] + hww) / (hww * 2) * 2 - 1) * screenRatio;
        var meshCenterNDCy = (meshCenter[1] + hwh) / (hwh * 2) * 2 - 1;
        this.focusPoint = [meshCenterNDCx, meshCenterNDCy];
        this.focusPointWorld = [0, 0];

        this.update = function (deltatime) {
                this.velocity[0] *= 1.0 - (0.1 - deltatime);
                this.velocity[1] *= 1.0 - (0.1 - deltatime);
                this.velocity[2] *= 1.0 - (0.1 - deltatime);

                if (lastx === undefined || lasty === undefined) return;

                var x = lastx / canvas.width;
                var y = (canvas.height - lasty) / canvas.height;

                this.checkFocusPoint(x, y);
        };

        var mousedown = false;
        window.addEventListener('mousedown', function (e) {
                mousedown = true;

                var x = e.clientX / canvas.width;
                var y = (canvas.height - e.clientY) / canvas.height;

                this.origin = [hww * 2 * x - hww, hwh * 2 * y - hwh, 0];

                lastx = e.clientX;
                lasty = e.clientY;
        }.bind(this));

        var lastx, lasty;
        window.addEventListener('mousemove', function (e) {
                // if(!mousedown) return;
                if (lastx === undefined) lastx = e.clientX;
                if (lasty === undefined) lasty = e.clientY;

                var deltax = e.clientX - lastx;
                var deltay = e.clientY - lasty;

                var x = e.clientX / canvas.width;
                var y = (canvas.height - e.clientY) / canvas.height;

                this.origin = [hww * 2 * x - hww, hwh * 2 * y - hwh, 0];
                this.velocity = [deltax * hww * 0.001, -deltay * hww * 0.001, 0];

                lastx = e.clientX;
                lasty = e.clientY;

                this.checkFocusPoint(x, y);
        }.bind(this));
        window.addEventListener('mouseup', function (e) {
                mousedown = false;
        }.bind(this));

        /**
         * @param {Number} x    0...1  screen coordinates
         * @param {Number} y    0...1  screen coordinates
         */
        this.checkFocusPoint = function (x, y) {

                var dist = 0;
                var maxDist = 0;

                var streamstart_x = streamstart_s * hww;
                var streamstart_y = streamstart_t * hwh;
                // var streamMaxHeight = (hww * 2 - (streamstart_y + hww)) * 0.8;
                var streamEndY = hwh * 0.9;
                var streamMaxHeight = streamEndY - streamstart_y;

                // if in focus, check distance from focus point
                if (this.infocus) {
                        var dx = this.origin[0] - this.focusPointWorld[0];
                        var dy = this.origin[1] - this.focusPointWorld[1];
                        dist = dx * dx + dy * dy;
                        maxDist = (hwh + hww) * 0.15;
                }

                if (!this.infocus) {
                        // if not in focus, check distance from curve
                        // domain  +1...-1
                        var cos = Math.cos((this.origin[0] + hww) / (hww + streamstart_x) * Math.PI);
                        // domain  1...0  
                        cos = cos * 0.5 + 0.5;
                        // to ->  y world height             
                        var y1 = cos * streamMaxHeight + streamstart_y;

                        var cos2 = Math.cos((this.origin[0] - 0.001 + hww) / (hww + streamstart_x) * Math.PI);
                        var y2 = (cos2 * 0.5 + 0.5) * streamMaxHeight + streamstart_y;

                        // cos * 0.5 + 0.5           1...0   <--
                        // mult                      0...1   <--
                        var mult = Math.pow(1 - (cos * 0.5 + 0.5), 1.5);
                        // suby                      0.45...-0.55   <--
                        var suby = 1 - mult - 0.75;
                        // suby                      0.45...0       <--            
                        if (suby < 0) suby = 0;

                        /**
                         *    0.005   is the aperture, or randomness of directions at the beginning of the stream
                         *    mult is responsible to lower this random aperture and let the particles follow the cosing wave 
                         *          it lowers the aperture depending on the x coordinate. Lower x-coordinates means a smaller aperture
                         *          and points following the cosine wave more and more instead of random directions
                         *    suby    at a certain x direction, points will additionally start to fall down a bit to make the stream look better
                         */
                        var vectorx = -0.001;
                        var vectory = y2 - y1 - suby * 0.01;

                        var pointOnCurve_x = this.origin[0];
                        var pointOnCurve_y = y1;

                        var distanceFromPointCurve = Math.abs(this.origin[1] - pointOnCurve_y);
                        dist = distanceFromPointCurve;
                        maxDist = hwh * 0.05 + cos * hwh * 0.9;

                        // if we're not enough away from the start of the stream, we can't be in focus 
                        if (cos < 0.04) maxDist = 0;
                        // if we're on the opposite side of the start of the stream, we can't be in focus 
                        if (this.origin[0] > streamstart_x) maxDist = 0;
                }

                // fade-in requested
                if (dist < maxDist && !this.infocus) {
                        if (then - this.focustime < effectsController.timeBeforeFocus) return;else {
                                // set last requested fade-in
                                this.focustime = then;
                                this.infocus = true;

                                this.focusPointWorld[0] = this.origin[0];
                                this.focusPointWorld[1] = this.origin[1];
                        }
                }

                // fade-out requested
                if (dist > maxDist && this.infocus) {
                        this.infocus = false;
                        meshesProgram.currentlyBoundMeshId = ++meshesProgram.currentlyBoundMeshId % meshesProgram.registeredMeshesCount;
                }

                /* As soon as a fade-in is request, a timer starts, calculated by  
                            if(then - this.focustime < effectsController.timeBeforeFocus) return;
                   Here we make sure that if we're out of the maxDist from the focus point focustime and then are the same,
                   so that if a fade-in is requested, effectsController.timeBeforeFocus time will need to pass to retrigger a new fade-in
                */
                if (dist > maxDist) {
                        this.focustime = then;
                }

                // another way of animating fade-in & fade-out
                // if(then - this.focustime < 0.3) return;     // too little time has passed since the last switch in focus
                // this.focustime = then;

                // if(dist < 0.75) {
                //     this.infocus = true;
                // } else {
                //     this.infocus = false;
                // }   
        };
}
"use strict";

function EffectsController() {
    // this.streamSpeed = 0.015;
    // this.mouseStrenght = 0.2;
    // this.waveAperture  = 0.005;
    // this.rotationOffset  = 0.0045;
    // this.rotationOffsetSpeed = 1;
    // this.focusCircleRadius = 5;
    // this.colorGradientDistance = 4;
    // this.pointsCount = 850;
    // this.fireRate = 10;
    // this.timeBeforeFocus = 0.5;
    // this.toggleFocusCircle = true;
    // this.intersectionSubset = false;
    // this.pointSize = 1;

    this.streamSpeed = 0.015;
    this.mouseStrenght = 0.1;
    this.waveAperture = 0.0079;
    this.rotationOffset = 0.0051;
    this.rotationOffsetSpeed = 1.5;
    this.focusCircleRadius = 1;
    this.colorGradientDistance = 0.5;
    this.pointsCount = 750;
    this.fireRate = 8.7;
    this.timeBeforeFocus = 0.5;
    this.toggleFocusCircle = true;
    this.intersectionSubset = false;
    this.pointSize = 0.4;

    this.reset = function () {
        this.streamSpeed = 0.015;
        this.mouseStrenght = 0.1;
        this.waveAperture = 0.0079;
        this.rotationOffset = 0.0051;
        this.rotationOffsetSpeed = 1.5;
        this.focusCircleRadius = 1;
        this.colorGradientDistance = 0.5;
        this.pointsCount = 850;
        this.fireRate = 8.7;
        this.timeBeforeFocus = 0.5;
        this.toggleFocusCircle = true;
        this.intersectionSubset = false;
        this.pointSize = 0.4;
    };
}

var effectsController = new EffectsController();

function initGUI() {

    // don't create controls
    // return;


    // var gui  = new dat.GUI();
    // var f1 = gui.addFolder('Stream Options');

    // // gui.add(effectsController, 'message');
    // f1.add(effectsController, 'streamSpeed', 0.005, 0.03).listen();
    // f1.add(effectsController, 'waveAperture', 0.001, 0.01).listen();
    // f1.add(effectsController, 'rotationOffset', 0.001, 0.025).listen();
    // f1.add(effectsController, 'rotationOffsetSpeed', 0.1, 3).listen();
    // f1.add(effectsController, 'fireRate', 0, 10).listen();

    // f1.open();


    // var f2 = gui.addFolder('Mouse Options');
    // f2.add(effectsController, 'focusCircleRadius', 1, 10).listen();
    // f2.add(effectsController, 'timeBeforeFocus', 0, 3).listen();
    // f2.add(effectsController, 'toggleFocusCircle').listen();
    // f2.add(effectsController, 'mouseStrenght', 0.005, 0.7).listen();

    // f2.open();

    // var f3 = gui.addFolder('Rendering Options');
    // f3.add(effectsController, 'colorGradientDistance', 0, 5).listen();
    // f3.add(effectsController, 'pointsCount', 100, 1000).step(1).onChange(function(value) {
    //     pointsNum = value;
    //     generateRandomPoints(value);
    //     updateLinesBuffer();
    // });    
    // f3.add(effectsController, 'pointSize', 0.2, 3).listen();
    // f3.add(effectsController, 'intersectionSubset').listen();
    // f3.open();

    // gui.add(effectsController, 'reset');
    // gui.close();
}
"use strict";

function initVideo() {
    var videoFunc = function videoFunc(e) {
        bgvids[0].play();

        /* mobile phones */
        if (screenRatio < 0.9 || innerWidth < 400) {
            return;
        }

        videoLoaded = true;
        block = false;
    };

    /* roll a random video at start */
    var rd = Math.random() * 90;
    var r = Math.floor(rd % 3);
    var sourceElement = document.createElement("source");
    sourceElement.setAttribute("type", "video/mp4");
    var srcpath = "assets/Screen_" + r + ".mp4";
    sourceElement.setAttribute("src", srcpath);
    // bgvids[0].setAttribute("poster", "assets/bgvidposter" + r + ".jpg");
    bgvids[0].appendChild(sourceElement);
    bgvids[0].addEventListener("loadeddata", videoFunc);
    activeVideo = r;currentVideo = r;
    streamstart_s = streamstart_array[r * 2 + 0];
    streamstart_t = streamstart_array[r * 2 + 1];
    orig_streamstart_s = streamstart_array[r * 2 + 0];
    orig_streamstart_t = streamstart_array[r * 2 + 1];
    onResizeVideo();
    /* roll a random video at start - END */
}

function onResizeVideo() {
    /* 1920 x 1080 */
    var ratio = 1.77777777;

    var bgvidwidth = innerWidth;
    var bgvidheight = innerWidth * (1 / ratio);

    if (bgvidheight < innerHeight) {
        bgvidheight = innerHeight;
        bgvidwidth = bgvidheight * ratio;
    }

    /*  background cover to center 
    bgvid.style.width  = bgvidwidth + "px";
    bgvid.style.left   = ((innerWidth - bgvidwidth) / 2) + "px";
    bgvid.style.left   = (innerWidth - bgvidwidth) + "px";
    bgvid.style.top    = ((innerHeight - bgvidheight) / 2) + "px";
      var widthratio = bgvidwidth / innerWidth;
    var heightratio = bgvidheight / innerHeight;
      streamstart_s = orig_streamstart_s * widthratio;
    streamstart_t = orig_streamstart_t * heightratio;
    */

    /*  background cover to left */
    bgvids[0].style.width = bgvidwidth + "px";
    bgvids[0].style.height = bgvidheight + "px";
    bgvids[0].style.left = innerWidth - bgvidwidth + "px";
    bgvids[0].style.top = (innerHeight - bgvidheight) / 2 + "px";

    /* mobile phones correction */
    if (screenRatio < 0.9 || innerWidth < 400) {
        bgvids[0].style.left = innerWidth - bgvidwidth + 55 + "px";
    }

    var widthratio = bgvidwidth / innerWidth;
    var heightratio = bgvidheight / innerHeight;

    /* 1 ... 0 */
    var os10 = 1 - (orig_streamstart_s * 0.5 + 0.5);
    /* 0.7 ... 0 */
    var vx = 1 / widthratio;
    /* 1 ... 0 */
    var indcx = os10 / vx;
    /* 0 ... 1 */
    var ndcx = 1 - indcx;
    /* -1 ... +1 */
    var ss = ndcx * 2 - 1;

    streamstart_s = ss;
    streamstart_t = orig_streamstart_t * heightratio;
    /**/
}
'use strict';

window.addEventListener('load', pageInit);

var gl;
var points;
var step = Float32Array.BYTES_PER_ELEMENT;

var hwh;
var hww;

var nodes;
var mouseController;
var pointsNum = 950;

var perspective;
var model;
var view;

var screenRatio;

var block = true;
var videoLoaded = false;

var meshCenter = [0, 0];

// NDC domain  +1...-1
var streamstart_array = [+0.26, -0.045, +0.26, -0.095, +0.405, -0.285];
var streamstart_s = +0.26;
var streamstart_t = -0.045;
var orig_streamstart_s = +0.26;
var orig_streamstart_t = -0.045;
var canvas;
var bgvids;
var activeVideo;
var meshCenter;

var backgroundProgram;
var linesProgram;
var meshesProgram;
var meshPointsProgram;

var pointsProgram;
var points;

var currentVideo = 0;
var swappingMeshes = false;

function pageInit() {
    canvas = document.getElementById('canvas');
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    var supported = initWebGL(canvas);

    bgvids = document.getElementsByClassName("bgvid");
    activeVideo = 0;
    initVideo();

    screenRatio = canvas.width / canvas.height;

    perspective = mat4.create();
    model = mat4.create();
    view = mat4.create();

    mat4.perspective(perspective, 45 * (Math.PI / 180), screenRatio, 1, 100);

    /* half world width/height */
    hwh = Math.tan(45 * Math.PI / 180 / 2) * 10;
    hww = Math.tan(45 * Math.PI / 180 / 2) * 10 * screenRatio;

    // createBackgroundProgram();
    nodes = new Nodes();
    createPointsProgram();
    createMeshPointsProgram();
    createMeshesProgram();
    createLinesProgram();

    // needs meshesProgram to run first
    mouseController = new MouseController();

    window.addEventListener('resize', onResize);
    onResize();

    initGUI();

    window.addEventListener('keydown', function (e) {
        if (e.key == 'k') {}
    });

    gl.enable(gl.BLEND);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    render(0);
}

var then = 0;
function render(now) {
    requestAnimationFrame(render);
    now *= 0.001;
    var deltatime = now - then;
    then = now;

    if (block) return;

    /* check page scroll */
    var scrollY = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
    if (scrollY > innerHeight) return;

    // console.time("frame");
    mouseController.update(deltatime);
    // drawBackground(now);
    drawLines(now);
    drawPoints(now, deltatime);
    drawMeshes(now, deltatime);
    drawMeshesPoints(now, deltatime);
    // console.timeEnd("frame");
}

var highpSupport = false;
function initWebGL(canvas) {
    var supported = true;
    gl = null;

    // Try to grab the standard context. If it fails, fallback to experimental.
    gl = canvas.getContext('webgl', { stencil: true, alpha: true }) || canvas.getContext('experimental-webgl', { stencil: true, alpha: true });

    // If we don't have a GL context, give up now
    if (!gl) supported = false;

    if (!gl.getExtension('OES_texture_float')) supported = false;

    if (gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).precision != 0) highpSupport = true;

    return supported;
}

function onResize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    screenRatio = canvas.width / canvas.height;

    /* preventing mobile phones from seeing the animation */
    if (screenRatio < 0.9 || innerWidth < 400) {
        block = true;
        gl.clearColor(0.0, 0.0, 0.0, 0.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    } else if (videoLoaded) {
        block = false;
    }

    hww = hwh * screenRatio;

    gl.viewport(0, 0, canvas.width, canvas.height);

    mat4.perspective(perspective, 45 * (Math.PI / 180), screenRatio, 1, 100);

    nodes = new Nodes(hwh);
    /* change background vertices etc if needed - else moveit to CSS */

    for (var i = 0; i < bgvids.length; i++) {
        onResizeVideo(i);
    }
}