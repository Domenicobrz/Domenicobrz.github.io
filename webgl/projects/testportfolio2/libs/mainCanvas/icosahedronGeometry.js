function generate_icosahedron_wlines() {    
    var t = 1.61803399;

    var vertices = [
        [-1,  t,  0],
        [ 1,  t,  0],
        [-1, -t,  0],
        [ 1, -t,  0],
        [ 0, -1,  t],
        [ 0,  1,  t],
        [ 0, -1, -t],
        [ 0,  1, -t],
        [ t,  0, -1],
        [ t,  0,  1],
        [-t,  0, -1],
        [-t,  0,  1]
    ];


    // the hash property will return the index of the vertex in vertices
    var verticeshashtable = {};
    for(var i = 0; i < vertices.length; i++) {
        var hash = strhash("x" + vertices[i][0] + "y" + vertices[i][1] + "z" + vertices[i][2]);
        verticeshashtable[hash] = i;
    }

    var triangles = [
        [0, 11, 5 ],
        [0, 5, 1  ],
        [0, 1, 7  ],
        [0, 7, 10 ],
        [0, 10, 11],

        [1, 5, 9  ],
        [5, 11, 4 ],
        [11, 10, 2],
        [10, 7, 6 ],
        [7, 1, 8  ],

        [3, 9, 4],
        [3, 4, 2],
        [3, 2, 6],
        [3, 6, 8],
        [3, 8, 9],

        [4, 9, 5 ],
        [2, 4, 11],
        [6, 2, 10],
        [8, 6, 7 ],
        [9, 8, 1 ]
    ];

    var newVertices = [];
    var newTriangles = [];
    var recursions   = 4;
    for(var i = 0; i < recursions; i++) {
        for(var j = 0; j < triangles.length; j++) {

            var v0 = vertices[triangles[j][0]];        
            var v1 = vertices[triangles[j][1]];        
            var v2 = vertices[triangles[j][2]];        
            var midpointv0v1 = [ (v0[0] + v1[0]) * 0.5, (v0[1] + v1[1]) * 0.5,  (v0[2] + v1[2]) * 0.5];
            var midpointv0v2 = [ (v0[0] + v2[0]) * 0.5, (v0[1] + v2[1]) * 0.5,  (v0[2] + v2[2]) * 0.5];
            var midpointv1v2 = [ (v1[0] + v2[0]) * 0.5, (v1[1] + v2[1]) * 0.5,  (v1[2] + v2[2]) * 0.5];


            // TODO: the hashing function is PAINFULLY slow. find something else 
            var hash1 = strhash("x" + midpointv0v1[0] + "y" + midpointv0v1[1] + "z" + midpointv0v1[2]);
            if(verticeshashtable[hash1] === undefined) {
                vertices.push(midpointv0v1);
                verticeshashtable[hash1] = vertices.length - 1;         
            }

            var hash2 = strhash("x" + midpointv0v2[0] + "y" + midpointv0v2[1] + "z" + midpointv0v2[2]);
            if(verticeshashtable[hash2] === undefined) {
                vertices.push(midpointv0v2);
                verticeshashtable[hash2] = vertices.length - 1;         
            }

            var hash3 = strhash("x" + midpointv1v2[0] + "y" + midpointv1v2[1] + "z" + midpointv1v2[2]);
            if(verticeshashtable[hash3] === undefined) {
                vertices.push(midpointv1v2);
                verticeshashtable[hash3] = vertices.length - 1;             
            }


            var mid01index = verticeshashtable[hash1];
            var mid02index = verticeshashtable[hash2];
            var mid12index = verticeshashtable[hash3];

            // newTriangles.push([    triangles[j][0], mid01index, mid02index    ]);
            // newTriangles.push([    triangles[j][1], mid01index, mid12index    ]);
            // newTriangles.push([    triangles[j][2], mid02index, mid12index    ]);
            // newTriangles.push([    mid02index, mid01index, mid12index         ]);

            newTriangles.push([    triangles[j][0], mid01index, mid02index    ]);
            newTriangles.push([    mid01index, triangles[j][1], mid12index    ]);
            newTriangles.push([    mid02index, mid12index, triangles[j][2]    ]);
            newTriangles.push([    mid01index, mid02index, mid12index         ]);
        }

        triangles = newTriangles;
        newTriangles = [];
    }



    pushVerticesOnSphereBoundaries(vertices);


    var hashAline = function(v0, v1) {
        // var hash  = "" + strhash("x"  + v0[0] + "y"  + v0[1] + "z"  + v0[2] +
        //                          "x1" + v1[0] + "y1" + v1[1] + "z1" + v1[2]);

        var hash  = "" + strhash("x"  + (v0[0] + v1[0]) + "y" + (v0[1] + v1[1]) + "z" + (v0[2] + v1[2]));

        if(linesHashTable[hash] === undefined) {
            linesBuffer.push(       v0[0], v0[1], v0[2], 0,     // v0
                                    v1[0], v1[1], v1[2], 0,     // v1
                                    v0[0], v0[1], v0[2], 0,     // v0displacement - initially set to original pos
                                    v1[0], v1[1], v1[2], 0,     // v0displacement - initially set to original pos
                                    0,0,0,0,   0,0,0,0,         // v0 & v1 musicDisplacement
                                    0, 0, 0, 0,                 // mouseVelocity
                                    0, 0, 0, 0,                 // fx       fx.x indicates if it's the first or second vertex
                                    1, 0, 0, 0,                 // color

            
                                    v1[0], v1[1], v1[2], 0,     
                                    v0[0], v0[1], v0[2], 0, 
                                    v1[0], v1[1], v1[2], 0,     
                                    v0[0], v0[1], v0[2], 0,     
                                    0,0,0,0,   0,0,0,0,         // v0 & v1 musicDisplacement                                    
                                    0, 0, 0, 0,                 // mouseVelocity                                    
                                    1, 0, 0, 0,                 // fx.x indicates this is the second vertex of the line
                                    1, 0, 0, 0);
            
            linesHashTable[hash] = 1;
        }
    };

    var linesBuffer = [];
    var linesHashTable = { };
    // for all triangles, compute lines
    for(var i = 0; i < triangles.length; i++) {
        var v0 = vertices[triangles[i][0]];
        var v1 = vertices[triangles[i][1]];
        var v2 = vertices[triangles[i][2]];

        // if(i % 5 !== 0) continue;

        hashAline(v0, v1);
        hashAline(v1, v2);
        hashAline(v2, v0);
    }

    var nLinesVerts = linesBuffer.length / 36;








    var verticesBuffer = [];
    var bloomVerticesBuffer = [];
    for(var i = 0; i < vertices.length; i++) {

        // if(i % 9 !== 0) continue;

        verticesBuffer.push(vertices[i][0], vertices[i][1], vertices[i][2], i,
                            vertices[i][0], vertices[i][1], vertices[i][2], i, 
                            0,0,0,0,    0,0,0,0,   0,0,0,0,   0,0,0,0 );




        /* enable points gone wild */
        if( i == vertices.length - 1) continue;
        for(var j = 0; j < 35; j++) {
            var t0 = j / 5 + 1 / 5;
            var t1 = 1 - t0;

            // t0 *= 0.6;
            // t1 *= 0.6;

            var x = (vertices[i][0] * t0 + vertices[i+1][0] * t1);
            var y = (vertices[i][1] * t0 + vertices[i+1][1] * t1);
            var z = (vertices[i][2] * t0 + vertices[i+1][2] * t1);

            verticesBuffer.push(x,y,z, i,
                                x,y,z, i, 
                                0,0,0,0,    0,0,0,0,   0,0,0,0,   
                                1,0,0,0 );  // fx2.x tells us if this is a hidden vertex

            if(j < 13) {
                bloomVerticesBuffer.push(x,y,z, i,
                                x,y,z, i, 
                                0,0,0,0,    0,0,0,0,   0,0,0,0,   
                                1,0,0,0 );  // fx2.x tells us if this is a hidden vertex
            }
                                
        }
        /* enable points gone wild - END*/        
    }

    return {
        vertices:  vertices,
        bloomVerticesBuffer: bloomVerticesBuffer,
        verticesBuffer: verticesBuffer,
        linesBuffer: linesBuffer,
        nVerts: verticesBuffer.length / 24,
        nBloomVerts: bloomVerticesBuffer.length / 24,
        nLinesVerts: nLinesVerts,
    };
}







function pushVerticesOnSphereBoundaries(vertices) {
    for(var i = 0, l = vertices.length; i < l; i++) {
        var vec = vec3.fromValues(vertices[i][0], vertices[i][1], vertices[i][2]);
        var length = vec3.len(vec);

        var ratio = radius / length; 

        vertices[i][0] *= ratio;
        vertices[i][1] *= ratio;
        vertices[i][2] *= ratio;
    }
}





















// deprecated
// deprecated
// deprecated
// deprecated
// function generate_icosahedron() {   
//     var t = 1.61803399;

//     var vertices = [
//         [-1,  t,  0],
//         [ 1,  t,  0],
//         [-1, -t,  0],
//         [ 1, -t,  0],
//         [ 0, -1,  t],
//         [ 0,  1,  t],
//         [ 0, -1, -t],
//         [ 0,  1, -t],
//         [ t,  0, -1],
//         [ t,  0,  1],
//         [-t,  0, -1],
//         [-t,  0,  1]
//     ];

//     var colors = [];
//     for(var i = 0; i < 12; i++) colors.push([1,1,1]);

//     // the hash property will return the index of the vertex in vertices
//     verticeshashtable = {};
//     for(var i = 0; i < vertices.length; i++) {
//         var hash = strhash("x" + vertices[i][0] + "y" + vertices[i][1] + "z" + vertices[i][2]);
//         verticeshashtable[hash] = i;
//     }

//     var triangles = [
//         [0, 11, 5 ],
//         [0, 5, 1  ],
//         [0, 1, 7  ],
//         [0, 7, 10 ],
//         [0, 10, 11],

//         [1, 5, 9  ],
//         [5, 11, 4 ],
//         [11, 10, 2],
//         [10, 7, 6 ],
//         [7, 1, 8  ],

//         [3, 9, 4],
//         [3, 4, 2],
//         [3, 2, 6],
//         [3, 6, 8],
//         [3, 8, 9],

//         [4, 9, 5 ],
//         [2, 4, 11],
//         [6, 2, 10],
//         [8, 6, 7 ],
//         [9, 8, 1 ]
//     ];

//     var newVertices = [];
//     var newTriangles = [];
//     var recursions   = 3;
//     for(var i = 0; i < recursions; i++) {
//         for(var j = 0; j < triangles.length; j++) {

//             var v0 = vertices[triangles[j][0]];        
//             var v1 = vertices[triangles[j][1]];        
//             var v2 = vertices[triangles[j][2]];        
//             var midpointv0v1 = [ (v0[0] + v1[0]) * 0.5, (v0[1] + v1[1]) * 0.5,  (v0[2] + v1[2]) * 0.5];
//             var midpointv0v2 = [ (v0[0] + v2[0]) * 0.5, (v0[1] + v2[1]) * 0.5,  (v0[2] + v2[2]) * 0.5];
//             var midpointv1v2 = [ (v1[0] + v2[0]) * 0.5, (v1[1] + v2[1]) * 0.5,  (v1[2] + v2[2]) * 0.5];



//             // TODO: the hashing function is PAINFULLY slow. find something else 
//             var hash1 = strhash("x" + midpointv0v1[0] + "y" + midpointv0v1[1] + "z" + midpointv0v1[2]);
//             if(verticeshashtable[hash1] === undefined) {
//                 vertices.push(midpointv0v1);
//                 verticeshashtable[hash1] = vertices.length - 1;
//                 colors.push([1,1,1]);
//                 if(i == 2    && j == 1) { colors[colors.length-1] = [0,1,0]; }          
//             }

//             var hash2 = strhash("x" + midpointv0v2[0] + "y" + midpointv0v2[1] + "z" + midpointv0v2[2]);
//             if(verticeshashtable[hash2] === undefined) {
//                 vertices.push(midpointv0v2);
//                 verticeshashtable[hash2] = vertices.length - 1;
//                 colors.push([1,1,1]);       
//                 if(i == 2    && j == 1) { colors[colors.length-1] = [0,0,1]; }         
//             }

//             var hash3 = strhash("x" + midpointv1v2[0] + "y" + midpointv1v2[1] + "z" + midpointv1v2[2]);
//             if(verticeshashtable[hash3] === undefined) {
//                 vertices.push(midpointv1v2);
//                 verticeshashtable[hash3] = vertices.length - 1;
//                 colors.push([1,1,1]);         
//                 if(i == 2    && j == 1) { colors[colors.length-1] = [1,0,0]; }               
//             }


//             var mid01index = verticeshashtable[hash1];
//             var mid02index = verticeshashtable[hash2];
//             var mid12index = verticeshashtable[hash3];

//             newTriangles.push([    triangles[j][0], mid01index, mid02index    ]);
//             newTriangles.push([    triangles[j][1], mid01index, mid12index    ]);
//             newTriangles.push([    triangles[j][2], mid02index, mid12index    ]);
//             newTriangles.push([    mid02index, mid01index, mid12index         ]);
//         }

//         triangles = newTriangles;
//         newTriangles = [];
//     }




//     var arr = [];
//     var earr = [];
//     for(var i = 0; i < vertices.length; i++) {
//         arr.push(vertices[i][0], vertices[i][1], vertices[i][2], colors[i][0], colors[i][1], colors[i][2]);
//     }
//     for(var i = 0; i < triangles.length; i++) {
//         earr.push(triangles[i][0], triangles[i][1], triangles[i][2]);
//     }


//     return {
//         vertices:  vertices,
//         triangles: triangles,
//         verticesBuffer: arr,
//         elementsBuffer: earr
//     };
// }

