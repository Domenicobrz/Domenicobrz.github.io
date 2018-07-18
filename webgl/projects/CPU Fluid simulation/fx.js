window.onload = WGLStart;
var res = 160;
var N   = res;
var resp2 =  res+2;
var size  = (res+2)*(res+2);

var u   = new Float32Array(size);
var v   = new Float32Array(size);
var u_prev  = new Float32Array(size);
var v_prev  = new Float32Array(size);
var dens        = new Float32Array(size); 
var dens_prev   = new Float32Array(size);



var iteration = 30;
var projiteration = 20;

function WGLStart() {
	canvas = document.getElementById("canvas");
	canvas.width  = 600;
	canvas.height = 600;

	var names = ["webgl", "experimental-webgl", "webkit-3d", "mozwebgl"];

	for(var i in names)
	{
        try 
        {
            gl = canvas.getContext(names[i], {  });

            if (gl && typeof gl.getParameter == "function") 
            {
                /* WebGL is enabled */
                break;
            }
        } catch(e) { }
    }

    if(gl == null)
    	alert("could not initialize webGL");


    document.addEventListener("keydown", keyDown);
    canvas.addEventListener("mousedown", clickdown);
    canvas.addEventListener("mousemove", drag);
    document.addEventListener("mouseup",   clickup);

    textDisplayProgram();

    requestAnimationFrame(draw);
}

var then = 0;
var visc = 10;
var diff = 10;
function draw(now) {
    requestAnimationFrame(draw);

    now *= 0.001;
    var deltatime = now - then;
    then = now;

    //get_from_UI( dens_prev, u_prev, v_prev );
    vel_step(N, u, v, u_prev, v_prev,   0.5, deltatime );
    dens_step(N, dens, dens_prev, u, v, 0.1, deltatime );
    clear_step();

    for(var i = 0; i < resp2*resp2; i++) {
        var val = 0;
        if(Math.floor(dens[i]) > 255)
            val = 255;
        else
            val = Math.floor(dens[i]);

        array[i * 4 + 0] = val;
        array[i * 4 + 1] = val;
        array[i * 4 + 2] = val;
        array[i * 4 + 3] = 255;
    }

    gl.bindTexture(gl.TEXTURE_2D, textDisplay.texture);
    //gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, resp2, resp2, gl.RGBA, gl.UNSIGNED_BYTE, array);
    gl.bindTexture(gl.TEXTURE_2D, null);


    gl.useProgram(textDisplay);
    gl.bindBuffer(gl.ARRAY_BUFFER, textDisplay.buffer);
    gl.enableVertexAttribArray(textDisplay.a1);
    gl.vertexAttribPointer(textDisplay.a1, 2, gl.FLOAT, false, 0, 0);


            gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, textDisplay.texture);
    gl.uniform1i(textDisplay.utexture, 0);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
}

function textDisplayProgram() {
    var Program = getShader("dtvert", "dtfrag", false);
    Program.a1  = gl.getAttribLocation(Program, "pos");
    Program.utexture = gl.getUniformLocation(Program, "utexture");

    var vertices = [
        0.0, 0.0,
        0.0, 1.0,
        1.0, 0.0,
    
        1.0, 0.0,
        0.0, 1.0,
        1.0, 1.0
    ];

    Program.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


    array = new Uint8Array(resp2*resp2*4);
    for(var i = 0; i < resp2*resp2; i++) {
        array[i * 4 + 0] = 160;
        array[i * 4 + 1] = 0; //era 25
        array[i * 4 + 2] = 25;
        array[i * 4 + 3] = 255;
    }

    Program.texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, Program.texture);
    //gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, resp2, resp2, 0, gl.RGBA, gl.UNSIGNED_BYTE, array);

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    gl.bindTexture(gl.TEXTURE_2D, null);

    textDisplay = Program;
}


function keyDown(e) {
    if(e.keyCode == 75) { // K
        for(var i = 0; i < size; i++) {
            u[i] = v[i] = dens[i] = u_prev[i] = v_prev[i] = dens_prev[i] = 0;
        }
    }
}



var dragging = false;
var winding  = false;
function clickdown(e) {
    if(e.buttons == 1)      dragging = true;
    else if(e.buttons == 2) winding  = true;
    else return;

    lastDelta.x = e.clientX;
    lastDelta.y = e.clientY;

    var x = e.clientX - document.getElementById("canvas").offsetLeft;
    var y = canvas.height - (e.clientY - document.getElementById("canvas").offsetTop);

    x = Math.floor((x / canvas.width)  * res);
    y = Math.floor((y / canvas.height) * res);

    if(dragging) {
        dens_prev[IX(x,y)]     = 30000;
        dens_prev[IX(x+1,y)]   = 30000;
        dens_prev[IX(x,y+1)]   = 30000;
        dens_prev[IX(x+1,y+1)] = 30000;
    }
}

var lastDelta = {x: 0, y:0};
function drag(e) {
    if(!dragging && !winding) return;

    var diffx =   e.clientX - lastDelta.x;
    var diffy = -(e.clientY - lastDelta.y);


    console.log(diffx);

    var x = e.clientX - document.getElementById("canvas").offsetLeft;
    var y = canvas.height - (e.clientY - document.getElementById("canvas").offsetTop);

    x = Math.floor((x / canvas.width)  * res);
    y = Math.floor((y / canvas.height) * res);


    if(Math.abs(diffx) > 9 || Math.abs(diffy) > 9) {

        if(dragging) {
            dens_prev[IX(x,y)]     = 30000;
            dens_prev[IX(x+1,y)]   = 30000;
            dens_prev[IX(x,y+1)]   = 30000;
            dens_prev[IX(x+1,y+1)] = 30000;
        }

        var velx = diffx;
        var vely = diffy;

        var speed = winding ? 50 : 10;
        u_prev[IX(x,y)] = velx * speed;
        v_prev[IX(x,y)] = vely * speed;
    }


    lastDelta.x = e.clientX;
    lastDelta.y = e.clientY;
}

function clickup(e) {
    dragging = false;
    winding  = false;
}


function add_source ( N, x, s, dt ) {
    var i, size=(N+2)*(N+2);
    for ( i=0 ; i<size ; i++ ) x[i] += dt*s[i];
}

function SWAP(x0, x) {
    var temp = x0; x0 = x; x = temp;
}

function dens_step(N, x, x0, u, v, diff, dt) {
    /*add_source(N, x, x0, dt);
    SWAP(x0, x); 
    diffuse( N, 0, x, x0, diff, dt);
    SWAP(x0, x); 
    advect(N, 0, x, x0, u, v, dt);*/

    add_source(N, x, x0, dt);
    diffuse( N, 0, x0, x, diff, dt);
    advect(N, 0, x, x0, u, v, dt);
}

function vel_step(N, u, v, u0, v0, visc, dt) {
    /*add_source( N, u, u0, dt ); 
    add_source ( N, v, v0, dt );
    SWAP( u0, u ); 

    diffuse ( N, 1, u, u0, visc, dt );
    SWAP( v0, v ); 
    diffuse ( N, 2, v, v0, visc, dt );
    project( N, u, v, u0, v0 );
    SWAP( u0, u ); 
    SWAP ( v0, v );

    advect( N, 1, u, u0, u0, v0, dt ); 
    advect( N, 2, v, v0, u0, v0, dt );
    project( N, u, v, u0, v0 );*/

    add_source( N, u, u0, dt ); 
    add_source( N, v, v0, dt );

    var temp = u0; u0 = u; u = temp;
    diffuse ( N, 1, u, u0, visc, dt );
    var temp = v0; v0 = v; v = temp;
    diffuse ( N, 2, v, v0, visc, dt );

    project( N, u, v, u0, v0 );

    var temp = u0; u0 = u; u = temp;
    var temp = v0; v0 = v; v = temp;

    advect( N, 1, u, u0, u0, v0, dt ); 
    advect( N, 2, v, v0, u0, v0, dt );
    project( N, u, v, u0, v0 );
}

function clear_step() {
    for(var i = 0; i < size; i++) {
        u_prev[i] = v_prev[i] = dens_prev[i] = 0;
    }
}

function advect(N, b, d, d0, u, v, dt) {
    var i, j, i0, j0, i1, j1;
    var x, y, s0, t0, s1, t1, dt0;
    dt0 = dt*N;
    for( i=1 ; i<=N ; i++ ) {
        for( j=1 ; j<=N ; j++ ) {
            x = i-dt0*u[IX(i,j)]; y = j-dt0*v[IX(i,j)];
            if (x<0.5) x=0.5; if (x>N+0.5) x=N+0.5; i0=Math.floor(x); i1=i0+1;
            if (y<0.5) y=0.5; if (y>N+0.5) y=N+0.5; j0=Math.floor(y); j1=j0+1;
            s1 = x-i0; s0 = 1-s1; t1 = y-j0; t0 = 1-t1;
            d[IX(i,j)] = s0*(t0*d0[IX(i0,j0)]+t1*d0[IX(i0,j1)])+
            s1*(t0*d0[IX(i1,j0)]+t1*d0[IX(i1,j1)]);
        }
    }
    set_bnd( N, b, d );
}

function diffuse(N, b, x, x0, diff, dt) {
    var i, j, k;
    var a = dt*diff;//*N*N;
    for( k=0 ; k < iteration ; k++ ) {
        for( i=1 ; i<=N ; i++ ) {
            for( j=1 ; j<=N ; j++ ) {
                x[IX(i,j)] = 
                (x0[IX(i,j)]+a*(x[IX(i-1,j)]+x[IX(i+1,j)]+
                x[IX(i,j-1)]+x[IX(i,j+1)]))/(1+4*a);
            }
        }
        set_bnd( N, b, x );
    }
}

function project( N, u, v, p, div ) {
    var i, j, k;
    var h;
    h = 1.0/N;

    for( i=1 ; i<=N ; i++ ) {
        for( j=1 ; j<=N ; j++ ) {
            div[IX(i,j)] = -0.5*h*(u[IX(i+1,j)]-u[IX(i-1,j)]+
            v[IX(i,j+1)]-v[IX(i,j-1)]);

            p[IX(i,j)] = 0;
        }
    }

    set_bnd( N, 0, div ); set_bnd( N, 0, p );

    for( k=0 ; k<projiteration ; k++ ) {
        for( i=1 ; i<=N ; i++ ) {
            for( j=1 ; j<=N ; j++ ) {
                p[IX(i,j)] = (div[IX(i,j)]+p[IX(i-1,j)]+p[IX(i+1,j)]+
                p[IX(i,j-1)]+p[IX(i,j+1)])/4;
            }
        }
        set_bnd( N, 0, p );
    }

    for( i=1 ; i<=N ; i++ ) {
        for ( j=1 ; j<=N ; j++ ) {
            u[IX(i,j)] -= 0.5*(p[IX(i+1,j)]-p[IX(i-1,j)])/h;
            v[IX(i,j)] -= 0.5*(p[IX(i,j+1)]-p[IX(i,j-1)])/h;
        }
    }
    set_bnd( N, 1, u ); 
    set_bnd( N, 2, v );
}


function set_bnd( N, b, x ) {
    for(var i=1 ; i<=N ; i++ ) {
        x[IX(0,i)]   = b==1 ? -x[IX(1,i)] : x[IX(1,i)];
        x[IX(N+1,i)] = b==1 ? -x[IX(N,i)] : x[IX(N,i)];
        x[IX(i,0)]   = b==2 ? -x[IX(i,1)] : x[IX(i,1)];
        x[IX(i,N+1)] = b==2 ? -x[IX(i,N)] : x[IX(i,N)];
    }

    x[IX(0 ,0 )] = 0.5*(x[IX(1,0 )]+x[IX(0 ,1)]);
    x[IX(0 ,N+1)] = 0.5*(x[IX(1,N+1)]+x[IX(0 ,N )]);
    x[IX(N+1,0 )] = 0.5*(x[IX(N,0 )]+x[IX(N+1,1)]);
    x[IX(N+1,N+1)] = 0.5*(x[IX(N,N+1)]+x[IX(N+1,N )]);
}

function IX(i,j) {
    return (i)+(N+2)*(j)
}

