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
    gl.uniformMatrix4fv(pointsProgram.uModel, false,       model);
    gl.uniformMatrix4fv(pointsProgram.uView, false,        view);

    gl.uniform1f(pointsProgram.uPointSize, effectsController.pointSize);

    gl.uniform1f(pointsProgram.uMaxSize, (3.0 / 1366.0) * screen.width);
    gl.uniform1f(pointsProgram.uMaxSize2, (5.0 / 1366.0) * screen.width);
    

    gl.drawArrays(gl.POINTS, 0, pointsProgram.pointsCount);
}


function createPointsProgram() {
    var Program = getShader(shader_pointv, getPointf());
    Program.aPosition = gl.getAttribLocation(Program, "aPosition");

    Program.uPerspective = gl.getUniformLocation(Program, "uPerspective");
    Program.uModel       = gl.getUniformLocation(Program, "uModel");
    Program.uView        = gl.getUniformLocation(Program, "uView");

    Program.uPointSize        = gl.getUniformLocation(Program, "uPointSize");

    Program.uMaxSize        = gl.getUniformLocation(Program, "uMaxSize");
    Program.uMaxSize2        = gl.getUniformLocation(Program, "uMaxSize2");
    
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

    for(var i = 0; i < num; i++) {
        var xspeed = 0.007 * Math.random() * 1500;
        var yspeed = 0.007 * hwh / hww * Math.random() * 1500;
     
        var x = streamstart_x - (hww * 2 * (i * 0.0015)) + normalx * srnd(0.01, i) * i;
        var y = streamstart_y + (hwh * 2 * (i * 0.0015)) + normaly * srnd(0.002, i) * i;

     
        points.push( new Point (x, y, false, i) );
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
    this.velocity = [0,0,0];
    this.meshId = -1;
    this.meshVertexId = -1;
}

function preparePointsVertices(points) {
    var vertices = [];

    for(var i = 0, l = points.length; i < l; i++) {

        if ((i < l - 1)        && !points[i].neighbor) {
            vertices.push(points[i].x, points[i].y, -10, 1);
        } else if ((i < l - 1) && points[i].neighbor) {
            vertices.push(points[i].x, points[i].y, -10, 3);            
        }
        else
            vertices.push(points[i].x, points[i].y, -10, 2);        
    }

    return vertices;
}

function preparePointsVerticesLean(points, meshes) {
    var vertices = [];

    for(var i = 0, l = points.length; i < l; i++) {
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

    if(boundMesh.grab && boundMesh.verticesGrabbed < boundMesh.vertexCount) 
        canGrab = true;


    var xspeed = effectsController.streamSpeed;
    var yspeed = effectsController.streamSpeed * hwh / hww;

    var speedRatio = yspeed / xspeed;

    // general purpose vector buffers
    var gpvb  = [0,0];
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
    var targetAngle     = Math.atan2(+yspeed, -xspeed);


    var streamstart_x = streamstart_s * hww;
    var streamstart_y = streamstart_t * hwh;
    var streamMaxHeight = (hww * 2 - (streamstart_y + hww)) * speedRatio * 1.1;


    var fireRate = 0.2 - effectsController.fireRate * 0.02;


    for(var i = 0; i < points.length; i++) {
        var point = points[i];
        // console.log(usrnd(points[i].id));

        var radius = effectsController.rotationOffset;
        // if this point is not bound to the current mesh, or is bound to a mesh with notifyRelease, move it along the rest of the stream
        if(point.meshId !== boundMesh.id || boundMesh.notifyRelease) {
        // if(point.meshId === -1 || boundMesh.notifyRelease) {

            // domain  +1...-1
            var cos = Math.cos((point.x + hww) / (hww + streamstart_x) * Math.PI);
            // domain  1...0  to ->  y world height             
            var y   =  (cos * 0.5 + 0.5) * (streamMaxHeight) + streamstart_y;
            
            var cos2 = Math.cos((point.x - xspeed + hww) / (hww + streamstart_x) * Math.PI);
            var y2   =  (cos2 * 0.5 + 0.5) * (streamMaxHeight) + streamstart_y;
            
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
            if(suby < 0) suby = 0;


            /**
             *    0.005   is the aperture, or randomness of directions at the beginning of the stream
             *    mult is responsible to lower this random aperture and let the particles follow the cosing wave 
             *          it lowers the aperture depending on the x coordinate. Lower x-coordinates means a smaller aperture
             *          and points following the cosine wave more and more instead of random directions
             *    suby    at a certain x direction, points will additionally start to fall down a bit to make the stream look better
             */
            var vectorx = -xspeed +  srnd(effectsController.waveAperture, point.id) * mult;
            var vectory = y2 - y  + (srnd(effectsController.waveAperture, point.id + 3427) + 0.001) * mult - (suby * 0.01);


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
        if(distanceFromMouseOrigin < 2) {
            distanceFromMouseOrigin = 1 - distanceFromMouseOrigin / 2;
            distanceFromMouseOrigin = Math.pow(distanceFromMouseOrigin, 6.0);
        } else distanceFromMouseOrigin = 0;


        // var t = 1 - Math.min(distanceFromMouseOrigin / 10.0, 1);
        var mouseVelMult = point.meshId === boundMesh.id ? 0.05 : effectsController.mouseStrenght;
        point.velocity[0] += mouseController.velocity[0] * distanceFromMouseOrigin * mouseVelMult;
        point.velocity[1] += mouseController.velocity[1] * distanceFromMouseOrigin * mouseVelMult;
        // }

        if(point.velocity[0] > 0.3)  point.velocity[0] = +0.3;
        if(point.velocity[0] < -0.3) point.velocity[0] = -0.3;
        if(point.velocity[1] > 0.3)  point.velocity[1] = +0.3;
        if(point.velocity[1] < -0.3) point.velocity[1] = -0.3;
        

        point.velocity[0] *= 0.985;
        point.velocity[1] *= 0.985;


        point.x += point.velocity[0] *= 0.99;
        point.y += point.velocity[1] *= 0.99;



        // all the points need not to go to the center, there has to be a circle where no point other than the grabbed ones are displayed
        if(boundMesh.grab && effectsController.toggleFocusCircle) {
            // all the other points not bound to any mesh will need to be pushed away from the center
            if(point.meshVertexId === -1) {
                
                
                /* first we calculate the distance from the focus point */
                var meshCenterx = mouseController.focusPointWorld[0] - hww * 0.03;
                var meshCentery = mouseController.focusPointWorld[1] - hwh * 0.03;

                // point.x minus focus.x
                var pxmfx = point.x - meshCenterx;
                var pymfy = point.y - meshCentery;
                var distanceFromFocus = pxmfx * pxmfx + pymfy * pymfy;

                /* if we're in the focus circle */
                if(distanceFromFocus < effectsController.focusCircleRadius) {
                    // will be used to differentiate between points that need to rotate CW to points that will rotate CCW
                    // var riseoverfall = Math.abs((pymfy - (-hwh)) / (pxmfx - (hww)));
                    // var rotateCW = speedRatio > riseoverfall ? true : false;

                    gpvb[0] = pxmfx;
                    gpvb[1] = pymfy;
                    var dot = vec2.dot(gpvb, gpvb2);
                    var rotateCW = dot < 0 ? true : false;

                    var angle = -0.01;
                    if(!rotateCW) angle = -angle;



                    /**
                     * THE REBOUNCE BUG is probably caused by vertices that have completed the rotation and whose
                     * circular velocity (which we add to every vertex to randomize it's position) is pushing them back in 
                     * an angle big enough to restart rotation 
                     */




                    // using the translated points to calculate their angle in respect to the focus circle
                    var pointAngle = Math.atan2(pymfy, pxmfx) - pointAngleStart; // point angle start is negative
                    // changing angle domain to 0...2PI
                    if(pointAngle < 0) pointAngle = Math.PI * 2 - Math.abs(pointAngle);

                    var deltaAngle  = (targetAngle - pointAngle) * 0.005;
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
        

        if(canGrab) grabPoint(point, boundMesh);
        if(point.meshId === boundMesh.id) moveGrabbedPoint(point, boundMesh);





        if((point.x < -hww * 1.05 || 
            point.x > +hww * 1.05 || 
            point.y < -hwh * 1.05 || 
            point.y > +hwh * 1.05) && pointsResetDeltaTime > fireRate && point.meshId === -1) {
            
            point.x =  streamstart_x;
            point.y =  streamstart_y;

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
    for(var i = 0; i < points.length; i++) {

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
        if(points[i].meshVertexId !== -1) {

            opacity = 0;
            // to which mesh is this point bound ?          
            var mesh = meshesProgram.meshes[points[i].meshId];
  
            // this is related to -> opacityFromSelfIntersection
            if(mesh.notifyRelease) {
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
    if(boundMesh.verticesGrabbed >= boundMesh.vertexCount) return;
    // already assigned to something else, skip this vertex
    if(point.meshId !== -1) return;


    var distanceFromCenter = point.x * point.x + point.y * point.y;
    if(distanceFromCenter > 10) return;


    var vertexId = boundMesh.verticesGrabbed++;

    point.meshId = meshesProgram.currentlyBoundMeshId;
    point.meshVertexId = vertexId;
}

function moveGrabbedPoint(point, boundMesh) {

    // if mesh is fading out
    if(boundMesh.notifyRelease) {
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
    if(meshTransformedVertex == undefined) {
        point.meshVertexId = -1;
        return;
    }


    var deltaX = (meshTransformedVertex.x + mouseController.focusPointWorld[0]) - point.x;
    var deltaY = (meshTransformedVertex.y + mouseController.focusPointWorld[1]) - point.y;


    point.x += deltaX * 0.04;
    point.y += deltaY * 0.04;
}
