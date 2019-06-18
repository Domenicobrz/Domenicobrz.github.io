window.addEventListener("load", webGLStart);

var gl;
var Program;
var buffer;
var cubeBuffer;

var camera;

var projection = mat4.create();
var model = mat4.create();
var view = mat4.create();



var trianglesContainer = new Float32Array(500*500*3*6*2);
var trianglesContainer200 = new Float32Array(200*200*3*6*2);
var trianglesContainer100 = new Float32Array(100*100*3*6*2);
var trianglesContainer40 = new Float32Array(40*40*3*6*2);



/*    Params    */
var cosxmultiplier = 1.0;
var coszmultiplier = 1.0;
var degmult = 1.0;
var ydegmult = 1.0;
var vcosmult = 1.0;
var vsinmult = 1.0;
var frsnratio = 0.0;
var brdfrsnratio = 1.0;

var faceNormals = false;
var refract = 1.0;
/*    Params - END    */









var cubeMapText;

var zoom = 45;
var tessellation = 30;
function webGLStart()
{
	var canvas = document.getElementById("canvas");
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;

    camera =  new createCamera();

    document.getElementsByName("fnc")[0].checked = false;
    var controls = document.getElementsByName("tessellation");

    for(var i = 0; i < controls.length; i++)
    {
        controls[i].value = 0;

        if(i == 0)
            controls[i].value = 200;
        if(i == 3)
            controls[i].value = 1;
        if(i == 9)
            controls[i].value = 1;
    }


	var names = ["webgl"];

	for(var i in names)	{
        try {

            gl = canvas.getContext(names[i], {stencil: true});
            if (gl && typeof gl.getParameter == "function") 
            {
                /* WebGL is enabled */
                break;
            }
        } catch(e) { }
    }

    if(gl == null)
    	alert("could not initialize webGL");


    Program = getShader("vertex", "fragment", false);
    Program.a1 = gl.getAttribLocation(Program, "pos");
    Program.a2 = gl.getAttribLocation(Program, "normal");
    Program.projection = gl.getUniformLocation(Program, "projection");
    Program.model = gl.getUniformLocation(Program, "model");
    Program.view = gl.getUniformLocation(Program, "view");
    Program.rotator = gl.getUniformLocation(Program, "rotator");
    Program.samplerCube = gl.getUniformLocation(Program, "samplerCube");
    Program.cameraPos = gl.getUniformLocation(Program, "cameraPos");
    Program.drawCube = gl.getUniformLocation(Program, "drawCube");
    Program.frsnratio = gl.getUniformLocation(Program, "frsnratio");
    Program.brdfrsnratio = gl.getUniformLocation(Program, "brdfrsnratio");
    Program.refractz = gl.getUniformLocation(Program, "refractz");






    cubevertices = [
        -1.0,  1.0, -1.0,  0,0,0,
        -1.0, -1.0, -1.0,  0,0,0,
         1.0, -1.0, -1.0,  0,0,0,
         1.0, -1.0, -1.0,  0,0,0,
         1.0,  1.0, -1.0,  0,0,0,
        -1.0,  1.0, -1.0,  0,0,0,

        -1.0, -1.0,  1.0,  0,0,0,
        -1.0, -1.0, -1.0,  0,0,0,
        -1.0,  1.0, -1.0,  0,0,0,
        -1.0,  1.0, -1.0,  0,0,0,
        -1.0,  1.0,  1.0,  0,0,0,
        -1.0, -1.0,  1.0,  0,0,0,

         1.0, -1.0, -1.0,  0,0,0,
         1.0, -1.0,  1.0,  0,0,0,
         1.0,  1.0,  1.0,  0,0,0,
         1.0,  1.0,  1.0,  0,0,0,
         1.0,  1.0, -1.0,  0,0,0,
         1.0, -1.0, -1.0,  0,0,0,

        -1.0, -1.0,  1.0,  0,0,0,
        -1.0,  1.0,  1.0,  0,0,0,
         1.0,  1.0,  1.0,  0,0,0,
         1.0,  1.0,  1.0,  0,0,0,
         1.0, -1.0,  1.0,  0,0,0,
        -1.0, -1.0,  1.0,  0,0,0,

        -1.0,  1.0, -1.0,  0,0,0,
         1.0,  1.0, -1.0,  0,0,0,
         1.0,  1.0,  1.0,  0,0,0,
         1.0,  1.0,  1.0,  0,0,0,
        -1.0,  1.0,  1.0,  0,0,0,
        -1.0,  1.0, -1.0,  0,0,0,

        -1.0, -1.0, -1.0,  0,0,0,
        -1.0, -1.0,  1.0,  0,0,0,
         1.0, -1.0, -1.0,  0,0,0,
         1.0, -1.0, -1.0,  0,0,0,
        -1.0, -1.0,  1.0,  0,0,0,
         1.0, -1.0,  1.0,  0,0,0
    ];

    cubeBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cubevertices), gl.STATIC_DRAW);



    buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, createsphere(1, tessellation), gl.STATIC_DRAW);


    var step = Float32Array.BYTES_PER_ELEMENT;
    gl.enableVertexAttribArray(Program.a1);
    gl.enableVertexAttribArray(Program.a2);
    gl.vertexAttribPointer(Program.a1, 3, gl.FLOAT, false, step * 6, 0);
    gl.vertexAttribPointer(Program.a2, 3, gl.FLOAT, false, step * 6, step * 3);



    cubeMapText = cubeMapTexture();
    camera.speed = 2.8;
    camera.autoCentered = true;
    camera.look = [0,0,-3];
    camera.radius = 5.0;
    requestAnimationFrame(draw);
}

var then = 0;
function draw(now)
{
    requestAnimationFrame(draw);

    if(downloaded !== 6) return;

	now *= 0.001;
	var deltatime = now - then;
	then = now;

    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    mat4.identity(model);
    //mat4.identity(view);
    mat4.perspective(projection, zoom, window.innerWidth / window.innerHeight, 0.1, 100);



    gl.useProgram(Program);

    mat4.identity(model);
    gl.uniformMatrix4fv(Program.projection, false, projection);
    gl.uniformMatrix4fv(Program.model, false, model);
    gl.uniformMatrix4fv(Program.view, false, camera.getViewMatrix(deltatime, 0.15));
    gl.uniform1f(Program.rotator, now);
    gl.uniform1f(Program.drawCube, 15);
    gl.uniform3fv(Program.cameraPos, camera.pos);


    if(cubeMapText) {
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, cubeMapText);
        gl.uniform1i(Program.samplerCube, 0);
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, cubeBuffer);
    var step = Float32Array.BYTES_PER_ELEMENT;
    gl.enableVertexAttribArray(Program.a1);
    gl.enableVertexAttribArray(Program.a2);
    gl.vertexAttribPointer(Program.a1, 3, gl.FLOAT, false, step * 6, 0);
    gl.vertexAttribPointer(Program.a2, 3, gl.FLOAT, false, step * 6, step * 3);
    gl.drawArrays(gl.TRIANGLES, 0, 36);  





















    gl.enable(gl.DEPTH_TEST);
    //gl.enable(gl.CULL_FACE);
    //gl.cullFace(gl.BACK);

    mat4.identity(model);
    mat4.translate(model, model, [0.0, 0.0, -3.0]);
    gl.uniformMatrix4fv(Program.projection, false, projection);
    gl.uniformMatrix4fv(Program.model, false, model);
    gl.uniformMatrix4fv(Program.view, false, camera.getViewMatrix(deltatime, 0.15));
    gl.uniform1f(Program.rotator, now);
    gl.uniform1f(Program.drawCube, 0);
    gl.uniform3fv(Program.cameraPos, camera.pos);
    gl.uniform1f(Program.frsnratio, frsnratio);
    gl.uniform1f(Program.brdfrsnratio, brdfrsnratio);
    gl.uniform1f(Program.refractz, refract);


    if(cubeMapText) {
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, cubeMapText);
        gl.uniform1i(Program.samplerCube, 0);
    }
    var count = (tessellation * tessellation - (tessellation * 2)) * 6;// * 6;
   
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    var step = Float32Array.BYTES_PER_ELEMENT;
    gl.enableVertexAttribArray(Program.a1);
    gl.enableVertexAttribArray(Program.a2);
    gl.vertexAttribPointer(Program.a1, 3, gl.FLOAT, false, step * 6, 0);
    gl.vertexAttribPointer(Program.a2, 3, gl.FLOAT, false, step * 6, step * 3);
    

    gl.drawArrays(gl.TRIANGLES, 0, count);
}

function createsphere(size, tessellation)
{
    if(faceNormals) {
        return createspherefn(size, tessellation);
    }


    var degratio = 360 / tessellation * degmult;
    
    var quad = [];
    var container = new Float32Array(tessellation * tessellation * 6);

    //si parte dal basso, y = 0 significa bottom sphere
    for(var y = 0; y < tessellation; y++)
    {
        for(var x = 0; x < tessellation; x++)
        {
            //start from degree 0
            //give normal position in x and z for degree
            //then multiply by cos(y)

            //cos vuole gradi o radians?
            var delta = y % 2 == 0 ? 0 : degratio / 2 ;
            var vx = Math.cos(Math.radians(x * degratio * vcosmult + delta)) * size;
            var vz = Math.sin(Math.radians(x * degratio /** vsinmult*/ + delta)) * size;

            var ydegree = (y / (tessellation - 1)) * 180 - 90;
            var vy = Math.sin(Math.radians(ydegree * ydegmult)) * size;




            //questo fa forme geometriche particolari
            //vy = (y / tessellation) * size * 2 - (size);
            /*vx *= Math.pow(Math.cos(Math.radians(ydegree)), 3.0 );
              vz *= Math.pow(Math.cos(Math.radians(ydegree)), 3.0 );*/

            vx *= Math.pow(Math.cos(Math.radians(ydegree * vsinmult)), cosxmultiplier);
            vz *= Math.pow(Math.cos(Math.radians(ydegree * vsinmult)), coszmultiplier);

            vz -= 0.0;

            var nx = 1.0;
            var ny = 1.0;
            var nz = 1.0;

            container[y * tessellation * 6 + x * 6 + 0] = vx;
            container[y * tessellation * 6 + x * 6 + 1] = vy;
            container[y * tessellation * 6 + x * 6 + 2] = vz;
            container[y * tessellation * 6 + x * 6 + 3] = nx;
            container[y * tessellation * 6 + x * 6 + 4] = ny;
            container[y * tessellation * 6 + x * 6 + 5] = nz;

            /*quad.push(vx);
            quad.push(vy);
            quad.push(vz);
            quad.push(nx);
            quad.push(ny);
            quad.push(nz);*/

            quad.push([vx, vy, vz, nx, ny, nz]);
        }
    }   

    //si usa la tecnica del "sotto e sopra"
    var triangles = [];
    //quad.length / 6 == number of vertices
    //they start from the bottom
    for(var i = tessellation; i < quad.length; i++)
    {
        //skip the first 6 vertices and the last 6 vertices
        if(i >= quad.length - tessellation)
            break;

        //this vertex will be unified with:
        //the next vertex in the same xz plane
        //both vertices from upper and lower y plane




        if(((i - i % tessellation) / tessellation) % 2 == 0)  { 
            //identify 1st vertex
            var vertex = quad[i];
            //identify next vertex in the same plane
            var nextvert = (i + 1) % tessellation == 0 ? quad[i - tessellation + 1] :  quad[i + 1];
            //identify upper(right ?) vertex
            //var upvert = (i - 1) % tessellation == (tessellation - 1) ?
            //                quad[i + tessellation + tessellation - 1] : 
            //                quad[i + tessellation - 1];
            var upvert = quad[i + tessellation];

            var downvert = quad[i - tessellation];

            //not - needed      identify upper(left ?) vertex
            //var upvertl = (i - 1) % tessellation == (tessellation - 1) ? 
            //                    quad[i + tessellation * 2 - 1 ];
    
    
            calcnormal(triangles, nextvert, vertex, upvert);
            calcnormal(triangles, vertex, nextvert, downvert);
        }
        else
        {
            //identify 1st vertex
            var vertex = quad[i];
            //identify next vertex in the same plane
            var nextvert = (i + 1) % tessellation == 0 ? quad[i - tessellation + 1] :   quad[i + 1];
            //identify upper(right ?) vertex
            var upvert = (i + 1) % tessellation == 0 ? 
                        quad[i + 1] : quad[i + tessellation + 1];

            var downvert = (i + 1) % tessellation == 0 ? quad[i - tessellation * 2 + 1] :  quad[i - tessellation + 1];


            //si usa il 6 perchè parliamo di float per vertex

            calcnormal(triangles, nextvert, vertex, upvert);
            calcnormal(triangles, vertex, nextvert, downvert);
        }
    }



    if(tessellation <= 200)
    {
        for(var i = 0; i < triangles.length; i++)
        trianglesContainer200[i] = triangles[i];

        return trianglesContainer200;
    }

    if(tessellation <= 100)
    {
        for(var i = 0; i < triangles.length; i++)
        trianglesContainer100[i] = triangles[i];

        return trianglesContainer100;
    }

    if(tessellation <= 40)
    {
        for(var i = 0; i < triangles.length; i++)
        trianglesContainer40[i] = triangles[i];

        return trianglesContainer40;
    }


    for(var i = 0; i < triangles.length; i++)
        trianglesContainer[i] = triangles[i];

    //var trianglecont = new Float32Array(triangles);

    return trianglesContainer;//trianglecont;//container;
}



function createspherefn(size, tessellation)
{
    var degratio = 360 / tessellation * degmult;
    
    var quad = [];
    var container = new Float32Array(tessellation * tessellation * 6);

    //si parte dal basso, y = 0 significa bottom sphere
    for(var y = 0; y < tessellation; y++)
    {
        for(var x = 0; x < tessellation; x++)
        {
            var delta = y % 2 == 0 ? 0 : degratio / 2 ;
            var vx = Math.cos(Math.radians(x * degratio * vcosmult + delta)) * size;
            var vz = Math.sin(Math.radians(x * degratio /** vsinmult*/ + delta)) * size;

            var ydegree = (y / (tessellation - 1)) * 180 - 90;
            var vy = Math.sin(Math.radians(ydegree * ydegmult)) * size;

            vx *= Math.pow(Math.cos(Math.radians(ydegree * vsinmult)), cosxmultiplier);
            vz *= Math.pow(Math.cos(Math.radians(ydegree * vsinmult)), coszmultiplier);

            vz -= 0.0;

            var nx = 1.0;
            var ny = 1.0;
            var nz = 1.0;

            quad.push([vx, vy, vz, 0, 0, 0]);
        }
    }   

    var triangles = [];
    var normalsForEachVertex = [];
    for(var i = 0; i < tessellation * tessellation; i++)
        normalsForEachVertex[i] = [];

    for(var i = tessellation; i < quad.length; i++)
    {
        //skip the first 6 vertices and the last 6 vertices
        if(i >= quad.length - tessellation)
            break;

        if(((i - i % tessellation) / tessellation) % 2 == 0)  { 
            //identify 1st vertex
            var vertex = quad[i];
            //identify next vertex in the same plane
            var nextindex = (i + 1) % tessellation == 0 ? i - tessellation + 1 : i + 1;
            var nextvert = quad[nextindex];
            var upvert = quad[i + tessellation];

            var downvert = quad[i - tessellation];


            var upnorm = calcnormalfn(triangles, nextvert, vertex, upvert);
            normalsForEachVertex[i].push(upnorm);
            normalsForEachVertex[nextindex].push(upnorm);
            normalsForEachVertex[i + tessellation].push(upnorm);
            
            var downnorm = calcnormalfn(triangles, vertex, nextvert, downvert);
            normalsForEachVertex[i].push(downnorm);
            normalsForEachVertex[nextindex].push(downnorm);
            normalsForEachVertex[i - tessellation].push(downnorm);
        }
        else
        {
            //identify 1st vertex
            var vertex = quad[i];
            //identify next vertex in the same plane
            var nextindex = (i + 1) % tessellation == 0 ? i - tessellation + 1 :   i + 1;
            var upindex = (i + 1) % tessellation == 0 ? i + 1 : i + tessellation + 1;
            var downindex = (i + 1) % tessellation == 0 ? i - tessellation * 2 + 1 : i - tessellation + 1;


            var nextvert = quad[nextindex];
            var upvert = quad[upindex];
            var downvert = quad[downindex];


            //si usa il 6 perchè parliamo di float per vertex

            var upnorm = calcnormalfn(triangles, nextvert, vertex, upvert);
            normalsForEachVertex[i].push(upnorm);
            normalsForEachVertex[nextindex].push(upnorm);
            normalsForEachVertex[upindex].push(upnorm);

            var downnorm = calcnormalfn(triangles, vertex, nextvert, downvert);
            normalsForEachVertex[i].push(downnorm);
            normalsForEachVertex[nextindex].push(downnorm);
            normalsForEachVertex[downindex].push(downnorm);
        }
    }


    for(var i = 0; i < normalsForEachVertex.length; i++)
    {
        var total = [0,0,0];
        var count = normalsForEachVertex[i].length;
        for(var j = 0; j < count; j++)
        {
            total[0] += normalsForEachVertex[i][j][0];
            total[1] += normalsForEachVertex[i][j][1];
            total[2] += normalsForEachVertex[i][j][2];
        }

        total[0] /= count;
        total[1] /= count;
        total[2] /= count;

        quad[i][3] = total[0]; 
        quad[i][4] = total[1]; 
        quad[i][5] = total[2]; 
    }



    for(var i = tessellation; i < quad.length; i++)
    {
        //skip the first 6 vertices and the last 6 vertices
        if(i >= quad.length - tessellation)
            break;

        if(((i - i % tessellation) / tessellation) % 2 == 0)  { 
            //identify 1st vertex
            var vertex = quad[i];
            //identify next vertex in the same plane
            var nextindex = (i + 1) % tessellation == 0 ? i - tessellation + 1 : i + 1;
            var nextvert = quad[nextindex];
            var upvert = quad[i + tessellation];

            var downvert = quad[i - tessellation];

            for(var j = 0; j < 6; j++)
                triangles.push(vertex[j]);
            for(var j = 0; j < 6; j++)
                triangles.push(nextvert[j]);
            for(var j = 0; j < 6; j++)
                triangles.push(upvert[j]);

            for(var j = 0; j < 6; j++)
                triangles.push(nextvert[j]);
            for(var j = 0; j < 6; j++)
                triangles.push(vertex[j]);
            for(var j = 0; j < 6; j++)
                triangles.push(downvert[j]);
        }
        else
        {
            //identify 1st vertex
            var vertex = quad[i];
            //identify next vertex in the same plane
            var nextindex = (i + 1) % tessellation == 0 ? i - tessellation + 1 :   i + 1;
            var upindex = (i + 1) % tessellation == 0 ? i + 1 : i + tessellation + 1;
            var downindex = (i + 1) % tessellation == 0 ? i - tessellation * 2 + 1 : i - tessellation + 1;

            var nextvert = quad[nextindex];
            var upvert = quad[upindex];
            var downvert = quad[downindex];

            for(var j = 0; j < 6; j++)
                triangles.push(vertex[j]);
            for(var j = 0; j < 6; j++)
                triangles.push(nextvert[j]);
            for(var j = 0; j < 6; j++)
                triangles.push(upvert[j]);

            for(var j = 0; j < 6; j++)
                triangles.push(nextvert[j]);
            for(var j = 0; j < 6; j++)
                triangles.push(vertex[j]);
            for(var j = 0; j < 6; j++)
                triangles.push(downvert[j]);
            //si usa il 6 perchè parliamo di float per vertex
        }
    }























    if(tessellation <= 200)
    {
        for(var i = 0; i < triangles.length; i++)
        trianglesContainer200[i] = triangles[i];

        return trianglesContainer200;
    }

    if(tessellation <= 100)
    {
        for(var i = 0; i < triangles.length; i++)
        trianglesContainer100[i] = triangles[i];

        return trianglesContainer100;
    }

    if(tessellation <= 40)
    {
        for(var i = 0; i < triangles.length; i++)
        trianglesContainer40[i] = triangles[i];

        return trianglesContainer40;
    }


    for(var i = 0; i < triangles.length; i++)
        trianglesContainer[i] = triangles[i];

    return trianglesContainer;
}




Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};



function calcnormal(triangles, vert, vert2, vert3)
{
     //vector 1
            v1x = vert2[0] - vert[0]; //p1x - p0x;
            v1y = vert2[1] - vert[1]; //p1y - p0y;
            v1z = vert2[2] - vert[2]; //p1z - p0z;
         
            //vector 2      //
            v2x = vert3[0] - vert[0]; //p2x - p0x;
            v2y = vert3[1] - vert[1]; //p2y - p0y;
            v2z = vert3[2] - vert[2]; //p2z - p0z;


            upnormalx = v1y * v2z - v1z * v2y;
            upnormaly = v1z * v2x - v1x * v2z;
            upnormalz = v1x * v2y - v1y * v2x;

            vert[3] = upnormalx;
            vert[4] = upnormaly;
            vert[5] = upnormalz;

            vert2[3] = upnormalx;
            vert2[4] = upnormaly;
            vert2[5] = upnormalz;

            vert3[3] = upnormalx;
            vert3[4] = upnormaly;
            vert3[5] = upnormalz;


            for(var j = 0; j < 6; j++)
                triangles.push(vert[j]);
            for(var j = 0; j < 6; j++)
                triangles.push(vert2[j]);
            for(var j = 0; j < 6; j++)
                triangles.push(vert3[j]);
}

function calcnormalfn(triangles, vert, vert2, vert3)
{
     //vector 1
            v1x = vert2[0] - vert[0]; //p1x - p0x;
            v1y = vert2[1] - vert[1]; //p1y - p0y;
            v1z = vert2[2] - vert[2]; //p1z - p0z;
         
            //vector 2      //
            v2x = vert3[0] - vert[0]; //p2x - p0x;
            v2y = vert3[1] - vert[1]; //p2y - p0y;
            v2z = vert3[2] - vert[2]; //p2z - p0z;


            upnormalx = v1y * v2z - v1z * v2y;
            upnormaly = v1z * v2x - v1x * v2z;
            upnormalz = v1x * v2y - v1y * v2x;

            return [upnormalx, upnormaly, upnormalz];
}



let downloaded = 0;
function cubeMapTexture()
{
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    var faces = [["posx.jpg", gl.TEXTURE_CUBE_MAP_POSITIVE_X],
                 ["negx.jpg", gl.TEXTURE_CUBE_MAP_NEGATIVE_X],
                 ["posy.jpg", gl.TEXTURE_CUBE_MAP_POSITIVE_Y],
                 ["negy.jpg", gl.TEXTURE_CUBE_MAP_NEGATIVE_Y],
                 ["posz.jpg", gl.TEXTURE_CUBE_MAP_POSITIVE_Z],
                 ["negz.jpg", gl.TEXTURE_CUBE_MAP_NEGATIVE_Z]];

    for (let i = 0; i < faces.length; i++) {
        var face = faces[i][1];
        var image = new Image();
        image.onload = function(texture, face, image) {
            return function() {
                gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
                gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
                gl.texImage2D(face, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
                downloaded++;
            }
        } (texture, face, image);
        image.src = faces[i][0];
    }
    return texture;
}


function tessellate(value)
{
    var val = parseInt(value);
    val /= 500;
    val = Math.pow(val, 3.0);
    val *= 500;
    val = Math.floor(val);

    if(val < 3) val = 3;

    if(val > 200) val = 500;
    if(val == 500 && tessellation == 500) return;

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, createsphere(1, val), gl.STATIC_DRAW);
    tessellation = Math.floor(val);
}

function params(value, identifier)
{
    switch(identifier)
    {
        case "cosx":
            cosxmultiplier = parseFloat(value);
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, createsphere(1, tessellation), gl.STATIC_DRAW);
            break;
        case "cosz":
            coszmultiplier = parseFloat(value);
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, createsphere(1, tessellation), gl.STATIC_DRAW);
            break;

        case "degratio":
            degmult = parseFloat(value);
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, createsphere(1, tessellation), gl.STATIC_DRAW);
            break;
        case "ydegratio":
            ydegmult = parseFloat(value);
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, createsphere(1, tessellation), gl.STATIC_DRAW);
            break;

        case "vcos":
            vcosmult = parseFloat(value);
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, createsphere(1, tessellation), gl.STATIC_DRAW);
            break;
        case "vsin":
            vsinmult = parseFloat(value);
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, createsphere(1, tessellation), gl.STATIC_DRAW);
            break;
        case "fresnel":
            frsnratio = parseFloat(value);
            break;
        case "borderfresnel":
            brdfrsnratio = parseFloat(value);
            break;

        case "refrtorefl":
            refract = parseFloat(value);
            break;
    }
}


function refractt(value)
{
    if(value)
        refract = 2.0;
    if(!value)
        refract = 0.0;
}

function faceNorm(value)
{
    if(value) {
        faceNormals = true;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, createsphere(1, tessellation), gl.STATIC_DRAW);
    }
    if(!value) {
        faceNormals = false;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, createsphere(1, tessellation), gl.STATIC_DRAW);
    }
}