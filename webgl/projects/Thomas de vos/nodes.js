function Nodes() {

    function generateNodes() {
        var vertices = [];
        var z = -10;

        for(var i = 0; i < dimx; i++)
        for(var j = 0; j < dimy; j++) {

            var x1 = i; var y1 = j;
            var x2 = i; var y2 = j + 1;
            var x3 = i + 1; var y3 = j;
            var x4 = i + 1; var y4 = j + 1;

            x1 = (x1 / dimx) * gridExtentx * 2 - gridExtentx;
            x2 = (x2 / dimx) * gridExtentx * 2 - gridExtentx;
            x3 = (x3 / dimx) * gridExtentx * 2 - gridExtentx;
            x4 = (x4 / dimx) * gridExtentx * 2 - gridExtentx;

            y1 = (y1 / dimy) * gridExtenty * 2 - gridExtenty;
            y2 = (y2 / dimy) * gridExtenty * 2 - gridExtenty;
            y3 = (y3 / dimy) * gridExtenty * 2 - gridExtenty;
            y4 = (y4 / dimy) * gridExtenty * 2 - gridExtenty;


            vertices.push(
                x1, y1, z, 1,   1,1,1,8,          x3, y3, z, 1,   1,1,1,8,
                x3, y3, z, 1,   1,1,1,8,          x4, y4, z, 1,   1,1,1,8,
                x4, y4, z, 1,   1,1,1,8,          x2, y2, z, 1,   1,1,1,8,
                x2, y2, z, 1,   1,1,1,8,          x1, y1, z, 1,   1,1,1,8
            );
        }

        return vertices;
    }




    // needs to be odd
    var dimy = 15;               
    var dimx = Math.floor(15 * screenRatio) + 1;               
    var grid = [];            // an array containing arrays of points
                              // grid[0] is an array of points inside the block 0
                              // grid[0][0] is the first point in the block 0 of the grid structure

    // var gridSideSize  = 1; // measured in world space
    var gridExtentx   = hwh * dimx / dimy; // from -5 to 5
    var gridExtenty   = hwh; 
    var gridSizex     = gridExtentx * 2;
    var gridSizey     = gridExtenty * 2;

    function generateNodeStructure(points) {
        grid = [];

        for(var i = 0, l = points.length; i < l; i++) {

            var step1 = (points[i].x + gridExtentx);
            var step2 = step1 / gridSizex;
            var step3 = step2 * dimx;
            var step4 = Math.floor(step3);

            var ix = Math.floor(((points[i].x + gridExtentx) / gridSizex) * dimx); 
            // var ix = Math.floor(((points[i].x + gridExtentx) / gridSizex) * dimx); 
            var iy = Math.floor(((points[i].y + gridExtenty) / gridSizey) * dimy);

            // this assignment needs to be here otherwise bugs
            points[i].ix = ix; 
            points[i].iy = iy;

            if(ix < 0 || iy < 0 || ix >= dimx || iy >= dimy) continue;

            var index = iy * dimx + ix;

            if(grid[index] === undefined) grid[index] = [];
            grid[index].push( points[i] );
        }   

        return grid;
    }

    function generateLines() {
    // console.time('start');

        var lines = [];
        var closestFourIndexes   = [ -1,  -1,  -1,  -1  ];
        var closestFourDistances = [ 999999, 999999, 999999, 999999 ];
        // var linehashes = {};
        // var lineIndex = 0;

        for(var ln = 0; ln < points.length; ln++) {
            var point = points[ln];

            if(point.ix < 0 || point.iy < 0 || point.ix >= dimx || point.iy >= dimy) continue;


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

            var ix1 = Math.floor(((c1x + gridExtentx) / gridSizex) * dimx); 
            var iy1 = Math.floor(((c1y + gridExtenty) / gridSizey) * dimy);
            var ix2 = Math.floor(((c2x + gridExtentx) / gridSizex) * dimx); 
            var iy2 = Math.floor(((c2y + gridExtenty) / gridSizey) * dimy);


            // var sqd = dist * dist;
            // var sqd = dist * dist;

            // variable size checkup
            for(var i = iy1; i <= iy2; i++)
            for(var j = ix1; j <= ix2; j++) {

                var idx = j;
                var idy = i;

                if(idy < 0 || idx < 0 || idx >= dimx || idy >= dimy) continue;

                if(grid[idy * dimx + idx] === undefined) continue;
            
                var blockPoints = grid[idy * dimx + idx];

                for(var r = 0; r < blockPoints.length; r++) {
                    var blockpoint = blockPoints[r];

                    if(blockpoint === point) continue;

                    if(effectsController.intersectionSubset) {
                        if(blockpoint.id % 2 === 0) continue;
                    }

                    var vx = point.x - blockpoint.x;
                    var vy = point.y - blockpoint.y;
                    var dst  = vx * vx + vy * vy;

                    // if(d <= sqd) {
                    //         var doverdist = d / sqd;
                    //         var opacity2  = luckyone ? 0.25 : 1;
                    //                                                            // aFx attribute
                    //         lines.push(point.x, point.y, -10, 1,              point.id,doverdist,opacity2,0,
                    //                    blockpoint.x, blockpoint.y, -10, 1,    blockpoint.id,doverdist,opacity2,0);
                    //     //}
                    // }

                    // if(j % 2 === 0) continue;


                    if(dst < closestFourDistances[0]) {
                        closestFourDistances[3] = closestFourDistances[2];
                        closestFourDistances[2] = closestFourDistances[1];
                        closestFourDistances[1] = closestFourDistances[0];

                        closestFourIndexes[3] = closestFourIndexes[2];
                        closestFourIndexes[2] = closestFourIndexes[1];
                        closestFourIndexes[1] = closestFourIndexes[0];

                        closestFourDistances[0] = dst;
                        closestFourIndexes[0]   = blockpoint.id;
                        continue;
                    }


                    if(dst < closestFourDistances[1]) {
                        closestFourDistances[3] = closestFourDistances[2];
                        closestFourDistances[2] = closestFourDistances[1];

                        closestFourIndexes[3] = closestFourIndexes[2];
                        closestFourIndexes[2] = closestFourIndexes[1];

                        closestFourDistances[1] = dst;
                        closestFourIndexes[1]   = blockpoint.id;
                        continue;
                    }

                    if(dst < closestFourDistances[2]) {
                        closestFourDistances[3] = closestFourDistances[2];
                    
                        closestFourIndexes[3] = closestFourIndexes[2];

                        closestFourDistances[2] = dst;
                        closestFourIndexes[2]   = blockpoint.id;
                        continue;
                    }

                    if(dst < closestFourDistances[3]) {
                        closestFourDistances[3] = dst;
                        closestFourIndexes[3]   = blockpoint.id;
                    }
                } // end block point for loop
            }


            linesProgram.verticesBuffer[ln * 32 + 0] = ln;
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

        for(var m = 0; m < meshes.length; m++)
        for(var ln = 0; ln < meshes[m].points.length; ln++) {
            var point = meshes[m].points[ln];

            if(point.x < -gridExtentx || point.y < -gridExtenty || point.x > gridExtentx || point.y > gridExtenty) continue;

            var dist = distance;

            var px = point.x;
            var py = point.y;

            var c1y = py - dist;
            var c1x = px - dist;
            var c2y = py + dist;
            var c2x = px + dist;

            var ix1 = Math.floor(((c1x + gridExtentx) / gridSizex) * dimx); 
            var iy1 = Math.floor(((c1y + gridExtenty) / gridSizey) * dimy);
            var ix2 = Math.floor(((c2x + gridExtentx) / gridSizex) * dimx); 
            var iy2 = Math.floor(((c2y + gridExtenty) / gridSizey) * dimy);


            var sqd = dist * dist;

            // variable size checkup
            for(var i = iy1; i <= iy2; i++)
            for(var j = ix1; j <= ix2; j++) {

                var idx = j;
                var idy = i;

                if(idy < 0 || idx < 0 || idx >= dimx || idy >= dimy) continue;

                if(grid[idy * dimx + idx] === undefined) continue;
            
                var blockPoints = grid[idy * dimx + idx];

                for(var r = 0; r < blockPoints.length; r++) {
                    var blockpoint = blockPoints[r];

                    if(blockpoint === point) continue;

                    var vx = point.x - blockpoint.x;
                    var vy = point.y - blockpoint.y;
                    var d  = vx * vx + vy * vy;

                    if(d <= sqd) {
                        //blockpoint.neighbor = true;

                        //var hashpart1 = "i" + point.id;
                        //var hashpart2 = "i" + blockpoint.id;
                        //if(linehashes[hashpart1 + hashpart2] === undefined && 
                        //   linehashes[hashpart2 + hashpart1] === undefined) {
                        //    linehashes[hashpart1 + hashpart2] = 1;

                            var doverdist = d / sqd;
                            var opacity2  = dist > distance ? 0.25 : 1;
                                                                                // aFx attribute
                            lines.push(point.x, point.y, -10, 1,                point.id,doverdist,opacity2,0,
                                       blockpoint.x, blockpoint.y, -10, 1,      blockpoint.id,doverdist,opacity2,0);
                        //}
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