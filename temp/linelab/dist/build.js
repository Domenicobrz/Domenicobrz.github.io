"use strict";

//expects gl-matrix-min to be defined before the current script
//^ potresti creare la tua lookAt function così elimini questa dipendenza
//expects a variable called zoom (perspective focal length) to be connected with the projection/orthogonal matrix
//you can't change the camera variable name (unless you'd like to find and replace)


//se lo zoom è alto aumentiamo lo smoothness? stile minecraft!


/*

		HOW TO USE:

		var camera = new createCamera();

		INSIDE DRAW:

		var view = camera.getViewMatrix(deltatime, 0.3);

*/

//namespacia tutte le variabili
//tutti i metodi devono essere interni a camera


//you should really namespace all those functions


function createCamera() {
	/*	functions	*/
	this.getViewMatrix = getViewMatrix;
	this.params = camera_params;
	this.camera_keydown = camera_keydown;
	this.camera_keyup = camera_keyup;
	this.camera_mousemove = camera_mousemove;
	this.camera_mousedown = camera_mousedown;
	this.camera_mouseup = camera_mouseup;
	this.camera_zoom = camera_zoom;

	this.camera_touchdown = camera_touchdown;
	this.camera_touchup = camera_touchup;
	this.camera_touchmove = camera_touchmove;

	this.pos = vec3.fromValues(0, 0, 0);
	this.up = vec3.fromValues(0, 1, 0);
	this.front = vec3.fromValues(0, 0, -1);
	this.frontCross = vec3.fromValues(0, 0, 0);
	this.dir = vec3.fromValues(0, 0, 0);

	/*	optional args	*/
	this.speed = 5.0;
	this.zoom_smoothness = 0.1;

	//to use the autocentered view specify
	//autocentered as true
	//where to look with 			this.look
	//and a radius distance with 	this.radius
	this.autoCentered = false;
	this.autoRotate = false;
	this.autoRotateSpeed = 3.0; //degree/sec
	this.radius = 3.0;
	this.look = [0, 0, 0];
	this.mousecontrols = true;
	this.depth_of_field_transform_count = 0;

	this.lookAt = mat4.create();
	this.yaw = -3.14 / 2; //-90 e sai perchè
	this.pitch = 0;
	this.deltaRot = [0.0, 0.0];
	this.lastPos = [null, null];
	this.deltazoom = 0;

	this.dragging = false;
	this.startingZoom = window.zoom;
	this.zoomdefined = false;
	//tries to make camera movement smoother by checking for frameskips
	this.smoothDeltaTimeCheck = true;
	this.rotationSensitivity = 0.002;

	this.pressedKeys = { w: false,
		s: false,
		a: false,
		d: false,
		space: false,
		shift: false,
		la: false,
		ua: false,
		ra: false,
		da: false };

	if (this.mousecontrols) {
		// window.addEventListener("keydown", this.camera_keydown.bind(this));
		// window.addEventListener("keyup", this.camera_keyup.bind(this));
		document.getElementById('mainCanvas').addEventListener("mousemove", this.camera_mousemove.bind(this));
		// document.getElementById('mainCanvas').addEventListener("mousedown", this.camera_mousedown.bind(this));
		// window.addEventListener("mouseup", this.camera_mouseup.bind(this));


		// document.getElementById('mainCanvas').addEventListener("touchstart", this.camera_touchdown.bind(this));
		// document.getElementById('mainCanvas').addEventListener("touchmove", this.camera_touchmove.bind(this));
		// window.addEventListener("touchend", this.camera_touchup.bind(this));
		//window.addEventListener('mousewheel', this.camera_zoom.bind(this));
		// For Firefox
		// window.addEventListener('DOMMouseScroll', this.camera_zoom.bind(this));
	}
}

function camera_params(zoom_smoothness, speed, _zoom, smoothDeltatime, rotationSensitivity) {
	if (zoom_smoothness !== undefined) this.zoom_smoothness = zoom_smoothness;

	if (speed !== undefined) this.speed = speed;

	if (_zoom !== undefined) this.startingZoom = _zoom;

	if (smoothDeltatime !== undefined) this.smoothDeltaTimeCheck = smoothDeltatime;

	if (rotationSensitivity !== undefined) this.rotationSensitivity = rotationSensitivity;
}

function getViewMatrix(deltatime, smoothness) {
	//smooths agains frameskipping
	if (this.smoothDeltaTimeCheck && deltatime <= 0.03333) {
		if (deltatime < 0.010) {} else deltatime = 0.016;
	}

	if (!this.zoomdefined) {
		this.startingZoom = zoom;
		this.zoomdefined = true;
	}

	if (this.autoCentered) {
		return camera_getAutocenteredViewMatrix.call(this, deltatime, smoothness, this.radius);
	}

	if (this.pressedKeys.w || this.pressedKeys.ua) {
		this.pos[0] += deltatime * this.speed * this.front[0];
		this.pos[1] += deltatime * this.speed * this.front[1];
		this.pos[2] += deltatime * this.speed * this.front[2];
	}
	if (this.pressedKeys.s || this.pressedKeys.da) {
		this.pos[0] -= deltatime * this.speed * this.front[0];
		this.pos[1] -= deltatime * this.speed * this.front[1];
		this.pos[2] -= deltatime * this.speed * this.front[2];
	}
	if (this.pressedKeys.d || this.pressedKeys.ra) {
		this.frontCross = vec3.cross(this.frontCross, this.front, this.up);
		vec3.normalize(this.frontCross, this.frontCross);
		this.pos[0] += deltatime * this.speed * this.frontCross[0];
		this.pos[1] += deltatime * this.speed * this.frontCross[1];
		this.pos[2] += deltatime * this.speed * this.frontCross[2];
	}
	if (this.pressedKeys.a || this.pressedKeys.la) {
		this.frontCross = vec3.cross(this.frontCross, this.front, this.up);
		vec3.normalize(this.frontCross, this.frontCross);
		this.pos[0] -= deltatime * this.speed * this.frontCross[0];
		this.pos[1] -= deltatime * this.speed * this.frontCross[1];
		this.pos[2] -= deltatime * this.speed * this.frontCross[2];
	}
	if (this.pressedKeys.space) {
		this.pos[0] += deltatime * this.speed * this.up[0];
		this.pos[1] += deltatime * this.speed * this.up[1];
		this.pos[2] += deltatime * this.speed * this.up[2];
	}
	if (this.pressedKeys.shift) {
		this.pos[0] -= deltatime * this.speed * this.up[0];
		this.pos[1] -= deltatime * this.speed * this.up[1];
		this.pos[2] -= deltatime * this.speed * this.up[2];
	}

	this.yaw += this.deltaRot[0] * smoothness;
	this.pitch -= this.deltaRot[1] * smoothness;

	this.deltaRot[0] -= this.deltaRot[0] * smoothness;
	this.deltaRot[1] -= this.deltaRot[1] * smoothness;

	if (this.pitch > 3.13 / 2) this.pitch = 3.13 / 2;
	if (this.pitch < -3.13 / 2) this.pitch = -3.13 / 2;

	this.front[0] = Math.cos(this.yaw) * Math.cos(this.pitch);
	this.front[1] = Math.sin(this.pitch);
	this.front[2] = Math.sin(this.yaw) * Math.cos(this.pitch);
	vec3.normalize(this.front, this.front);

	if (Math.abs(this.deltazoom) > 0) {
		var increment = this.deltazoom * this.zoom_smoothness;
		if (this.deltazoom < 0) this.deltazoom = this.deltazoom < -0.01 ? this.deltazoom - increment : 0;

		if (this.deltazoom > 0) this.deltazoom = this.deltazoom > +0.01 ? this.deltazoom - increment : 0;

		zoom += increment;
		if (zoom < 44.5) zoom = 44.5;
		if (zoom > this.startingZoom) zoom = this.startingZoom;
	}

	this.dir[0] = this.pos[0] + this.front[0];
	this.dir[1] = this.pos[1] + this.front[1];
	this.dir[2] = this.pos[2] + this.front[2];
	mat4.lookAt(this.lookAt, this.pos, this.dir, this.up);
	return this.lookAt;
}

function camera_keydown(e) {
	switch (e.keyCode) {
		case 87:
			this.pressedKeys.w = true;
			break;
		case 65:
			this.pressedKeys.a = true;
			break;
		case 83:
			this.pressedKeys.s = true;
			break;
		case 68:
			this.pressedKeys.d = true;
			break;
		case 32:
			this.pressedKeys.space = true;
			break;
		case 16:
			this.pressedKeys.shift = true;
			break;
		case 37:
			this.pressedKeys.la = true;
			break;
		case 38:
			this.pressedKeys.ua = true;
			break;
		case 39:
			this.pressedKeys.ra = true;
			break;
		case 40:
			this.pressedKeys.da = true;
			break;
	}
}

function camera_keyup(e) {
	switch (e.keyCode) {
		case 87:
			this.pressedKeys.w = false;
			break;
		case 65:
			this.pressedKeys.a = false;
			break;
		case 83:
			this.pressedKeys.s = false;
			break;
		case 68:
			this.pressedKeys.d = false;
			break;
		case 32:
			this.pressedKeys.space = false;
			break;
		case 16:
			this.pressedKeys.shift = false;
			break;
		case 37:
			this.pressedKeys.la = false;
			break;
		case 38:
			this.pressedKeys.ua = false;
			break;
		case 39:
			this.pressedKeys.ra = false;
			break;
		case 40:
			this.pressedKeys.da = false;
			break;
	}
}

function camera_mousemove(e) {
	if (!this.dragging) return;

	//sta telecamera va fatta col click, non è un fps
	this.deltaRot[0] += (e.clientX - this.lastPos[0]) * this.rotationSensitivity;
	this.deltaRot[1] += (e.clientY - this.lastPos[1]) * this.rotationSensitivity;

	this.lastPos[0] = e.clientX;
	this.lastPos[1] = e.clientY;
}

function camera_touchmove(e) {
	if (!this.dragging) return;

	//sta telecamera va fatta col click, non è un fps
	this.deltaRot[0] += (e.touches[0].clientX - this.lastPos[0]) * this.rotationSensitivity;
	this.deltaRot[1] += (e.touches[0].clientY - this.lastPos[1]) * this.rotationSensitivity;

	this.lastPos[0] = e.touches[0].clientX;
	this.lastPos[1] = e.touches[0].clientY;
}

function camera_mousedown(e) {
	if (e.which != 1) return;
	this.lastPos[0] = e.clientX;
	this.lastPos[1] = e.clientY;
	this.dragging = true;
}

function camera_mouseup(e) {
	this.dragging = false;
}

function camera_touchdown(e) {
	this.lastPos[0] = e.touches[0].clientX;
	this.lastPos[1] = e.touches[0].clientY;
	this.dragging = true;
}

function camera_touchup(e) {
	this.dragging = false;
}

function camera_zoom(e) {
	var delta = e.wheelDelta ? e.wheelDelta : -e.detail;

	if (delta > 0) this.deltazoom += -0.15;else this.deltazoom += +0.15;
}

function camera_getAutocenteredViewMatrix(deltatime, smoothness, radius) {
	this.yaw += this.deltaRot[0] * smoothness;
	this.pitch -= this.deltaRot[1] * smoothness;

	if (this.autoRotate) {
		this.yaw += this.autoRotateSpeed / 180 * Math.PI * deltatime;
	}

	this.deltaRot[0] -= this.deltaRot[0] * smoothness;
	this.deltaRot[1] -= this.deltaRot[1] * smoothness;

	if (this.pitch > 3.13 / 2) this.pitch = 3.13 / 2;
	if (this.pitch < -3.13 / 2) this.pitch = -3.13 / 2;

	if (Math.abs(this.deltazoom) > 0) {
		var increment = this.deltazoom * this.zoom_smoothness;
		if (this.deltazoom < 0) this.deltazoom = this.deltazoom < -0.01 ? this.deltazoom - increment : 0;

		if (this.deltazoom > 0) this.deltazoom = this.deltazoom > +0.01 ? this.deltazoom - increment : 0;

		zoom += increment;
		if (zoom < 44.5) zoom = 44.5;
		if (zoom > this.startingZoom) zoom = this.startingZoom;
	}

	var xpos = Math.cos(this.yaw) * Math.cos(this.pitch) * radius;
	var zpos = Math.sin(this.yaw) * Math.cos(this.pitch) * radius;
	var ypos = Math.sin(this.pitch) * radius;

	this.pos[0] = xpos + this.look[0];
	this.pos[1] = ypos + this.look[1];
	this.pos[2] = -zpos + this.look[2];

	mat4.lookAt(this.lookAt, this.pos, this.look, this.up);

	if (this.depth_of_field_transform_count != 0) {

		var degree = 6.28 * this.depth_of_field_transform_count / 10;

		var yaw = this.yaw + Math.cos(degree) / 150;
		var pitch = this.pitch + Math.sin(degree) / 150;

		/*var yaw = this.yaw// + 
  		  this.depth_of_field_transform_count / 1500 - 
  		  5 / 1500;
   	var pitch = this.pitch +
  			this.depth_of_field_transform_count / 1600 - 
  		    5 / 1600;*/

		var xpos = Math.cos(yaw) * Math.cos(pitch) * radius;
		var zpos = Math.sin(yaw) * Math.cos(pitch) * radius;
		var ypos = Math.sin(pitch) * radius;

		this.pos[0] = xpos + this.look[0];
		this.pos[1] = ypos + this.look[1];
		this.pos[2] = -zpos + this.look[2];

		mat4.lookAt(this.lookAt, this.pos, this.look, this.up);
	}

	return this.lookAt;
}

//v1.00     -   basic functions
//v1.02		-	autocentered Camera
//v1.03		-	basic autoRotate
//v1.04 	- 	getAutoCenteredViewMatrix has depth of field capabilities
//v1.05		-	works on cellphones
"use strict";

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

// function strhash( str ) {
//     if (str.length % 32 > 0) str += Array(33 - str.length % 32).join("z");
//     var hash = '', bytes = [], i = j = k = a = 0, dict = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','1','2','3','4','5','6','7','8','9'];
//     for (i = 0; i < str.length; i++ ) {
//         ch = str.charCodeAt(i);
//         bytes[j++] = (ch < 127) ? ch & 0xFF : 127;
//     }
//     var chunk_len = Math.ceil(bytes.length / 32);   
//     for (i=0; i<bytes.length; i++) {
//         j += bytes[i];
//         k++;
//         if ((k == chunk_len) || (i == bytes.length-1)) {
//             a = Math.floor( j / k );
//             if (a < 32)
//                 hash += '0';
//             else if (a > 126)
//                 hash += 'z';
//             else
//                 hash += dict[  Math.floor( (a-32) / 2.76) ];
//             j = k = 0;
//         }
//     }
//     return hash;
// }


var rndrndseed = Date.now() * 0.1;
function rnd() {
  rndrndseed += 63423;
  return Math.sin(rndrndseed * 345345.325) * 0.5 + 0.5; //Math.random();
}

var strhash = function strhash(str) {
  var hash = 0,
      i,
      chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};
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
        return null;
    }

    return shader;
}

function getTFShader(shader_str, type) {

    var shader = null;
    if (type == 'vert') shader = gl.createShader(gl.VERTEX_SHADER);else shader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(shader, shader_str);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader) + "  " + type);
        return null;
    }

    return shader;
}
'use strict';

function MouseController() {
        this.origin = [0, 0, 0];
        this.velocity = [0, 0, 0];
        this.postProcessVelocityVec = [0, 0];
        this.postProcessVelocity = 0;
        this.ww = undefined;
        this.wh = undefined;
        var toggleTitleVisibilityTimer = 0;
        var titleVisible = true;

        var screenRatio = innerWidth / innerHeight;
        var speedMultiplier = 800;

        this.update = function (deltatime) {
                this.velocity[0] *= 0.975; //(1.0 - (0.1 - deltatime));
                this.velocity[1] *= 0.975; //(1.0 - (0.1 - deltatime));
                this.velocity[2] *= 0.975; //(1.0 - (0.1 - deltatime));

                // this.postProcessVelocityVec[0] *= 0.9915;
                // this.postProcessVelocityVec[1] *= 0.9915;

                this.postProcessVelocity *= 0.907;

                /* if there's some velocity while the mouse is close to the sphere, hide the title */
                // if(Math.abs(this.velocity[0]) < 0.1 && Math.abs(this.velocity[1]) < 0.1 && Math.abs(this.velocity[2]) < 0.1) {
                //     // document.querySelector(".mhCentralSquare").style.background = "rgba(20, 20, 20, 0.2)";            
                //     document.querySelector(".mhCentralSquare").style.opacity = "1";            
                //     document.querySelector(".siteTitle").style.opacity = "1";            
                // } else if(Math.abs(this.origin[0]) < 0.3 && Math.abs(this.origin[1]) < 0.3) {
                //     // document.querySelector(".mhCentralSquare").style.background = "none";
                //     document.querySelector(".mhCentralSquare").style.opacity = "0";                        
                //     document.querySelector(".siteTitle").style.opacity = "0";               
                // }

                // toggleTitleVisibilityTimer += deltatime;
                // if((Math.abs(this.velocity[0]) > 0.1 || Math.abs(this.velocity[1]) > 0.1 || Math.abs(this.velocity[2]) > 0.1) &&
                //    Math.abs(this.origin[0]) < 0.3 && Math.abs(this.origin[1]) < 0.3) {
                //     /* if already hidden */
                //     if (!titleVisible) return;

                //     document.querySelector(".mhCentralSquare").style.opacity = "0";            
                //     document.querySelector(".siteTitle").style.opacity = "0";      
                //     toggleTitleVisibilityTimer = 0;    
                //     titleVisible = false;    
                // } else {
                //     if (toggleTitleVisibilityTimer < 1.5) return;
                //     toggleTitleVisibilityTimer = 0;
                //     document.querySelector(".mhCentralSquare").style.opacity = "1";                        
                //     document.querySelector(".siteTitle").style.opacity = "1"; 
                //     titleVisible = true;
                // }
        };

        var mousedown = false;
        window.addEventListener('mousedown', function (e) {
                mousedown = true;

                // IS IN NORMALIZED DEVICE COORDINATES --  -1...1
                var x = e.clientX / innerWidth;
                var y = (innerHeight - e.clientY) / innerHeight;

                this.origin = [x * 2 - 1, y * 2 - 1, 0];

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

                var x = e.clientX / innerWidth;
                var y = (innerHeight - e.clientY) / innerHeight;

                this.origin = [x * 2 - 1, y * 2 - 1, 0];
                // both needs to be divided by innerHeight, this is not a screenRatio scenario
                this.velocity = [deltax / innerHeight * speedMultiplier, -deltay / innerHeight * speedMultiplier, 0];

                this.velocity[0] *= 0.3;
                this.velocity[1] *= 0.3;

                this.postProcessVelocity += vec3.length(this.velocity) * 0.103;
                // this.postProcessVelocity += vec3.length(this.velocity) * 0.0053;

                lastx = e.clientX;
                lasty = e.clientY;
        }.bind(this));
        window.addEventListener('mouseup', function (e) {
                mousedown = false;
        }.bind(this));
}
"use strict";

window.addEventListener('load', mainCanvasInit);

var gl;

/*
TODO: Filter blur sulle lettere

inspiration:
http://alexandrerochet.com/
http://maxwellito.github.io/vivus/



music genre: lullaby 
instrument: Carillon
https://www.youtube.com/watch?v=b3BMp7yBqws
*/

var cameraDepth = 9;

function mainCanvasInit() {

    if (blockCanvasOnMobiles()) return;

    window.canvas = document.getElementById("mainCanvas");
    // window.gl;
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    var names = ["webgl2"];

    for (var i in names) {
        try {
            gl = canvas.getContext(names[i], {/* alpha: true, preserveDrawingBuffer: true */});

            if (gl && typeof gl.getParameter == "function") {
                // WebGL is enabled 
                break;
            }
        } catch (e) {}
    }

    if (gl === null) {
        console.error("could not initialize WebGL");
        // alert("could not initialize WebGL");
    }

    window.camera = new createCamera();
    window.cameraZ = cameraDepth;
    camera.pos = [0, 0, cameraZ];
    // camera.autoCentered = true;
    // camera.autoRotate = true;
    // camera.radius = 45;
    window.step = Float32Array.BYTES_PER_ELEMENT;
    window.zoom = cameraDepth;

    window.projection = mat4.create();
    window.model = mat4.create();
    window.view = mat4.create();
    window.screenRatio = innerWidth / innerHeight;
    mat4.perspective(projection, 45 * Math.PI / 180, screenRatio, 1, 1000);

    /* custom structures */
    window.mouseController = new MouseController();
    window.musicBox = new MusicBox('assets/music/test.mp3');

    window.radius = 10;
    window.Icosahedron = generate_icosahedron_wlines();

    create_offscreen_multisampleFBOs();

    create_postprocess_blit_in_main_FBO_program();

    create_background_program();

    create_offscreen_points_program();
    create_icosahedron_program();
    create_icosahedronTF_program();

    create_icosahedron_lines_program();
    create_icosahedronTF_lines_program();

    setTimeout(function () {
        musicBox.start();
        requestAnimationFrame(draw);
    }, 1000);
}

var then = 0;
function draw(now) {
    requestAnimationFrame(draw);
    now *= 0.001;
    var deltatime = now - then;
    then = now;

    mouseController.update(deltatime);
    musicBox.updateVisualizerTextureData(deltatime);

    // draw_background(now, deltatime);

    draw_static_background(now, deltatime);
    draw_icosahedron(now, deltatime);
    draw_icosahedron_lines(now, deltatime);
    draw_luminous_points(now, deltatime);

    postprocess_blit_in_main_FBO(now, deltatime);
}

// will be called by main.js
function canvasResize() {
    if (!canvas) return;

    canvas.width = innerWidth;
    canvas.height = innerHeight;
    gl.viewport(0, 0, innerWidth, innerHeight);

    screenRatio = innerWidth / innerHeight;
    mat4.perspective(projection, 45 * Math.PI / 180, screenRatio, 0.1, 1000);

    gl.bindTexture(gl.TEXTURE_2D, FBOsoffscreen.texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, innerWidth, innerHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.bindTexture(gl.TEXTURE_2D, null);

    gl.bindRenderbuffer(gl.RENDERBUFFER, FBOsoffscreen.colorRenderBuffer);
    gl.renderbufferStorageMultisample(gl.RENDERBUFFER, 4, gl.RGBA8, innerWidth, innerHeight);

    if (screenRatio < 1.2 && innerWidth < 850) {
        window.cameraZ = cameraDepth;
        camera.pos = [0, 0, cameraZ];
    } else {
        window.cameraZ = cameraDepth;
        camera.pos = [0, 0, cameraZ];
    }
}

// we won't procede further if we're dealing with mobiles
function blockCanvasOnMobiles() {
    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

    if (isMobile) {
        var background = document.createElement("div");
        background.style.background = "red";

        document.body.insertAdjacentElement("afterbegin", background);
        document.querySelector(".mhMusicBars").style.display = "none";
    }

    return isMobile;
}

// a new hashing function is needed
// lines needs to be in a transform feedback, points (at least as of now, think about it again) do not.
// fix a bit the code and separate it, it already stinks
// separate program's creation from the icosahedron creation
// http://www.hxa.name/minilight/
// https://geometrian.com/programming/tutorials/radcol/index.php
"use strict";

function draw_background(now, deltatime) {

    gl.useProgram(BackgroundProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, BackgroundProgram.buffer);
    gl.enableVertexAttribArray(BackgroundProgram.a1);
    gl.vertexAttribPointer(BackgroundProgram.a1, 4, gl.FLOAT, false, 0, 0);

    gl.uniform1f(BackgroundProgram.uTime, now);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
}

function draw_static_background(now, deltatime) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, FBOsoffscreen[FRAMEBUFFER.RENDERBUFFER]);

    gl.clearColor(0.115, 0.115, 0.115, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

function create_background_program() {

    var Program = getShader(backgroundv, backgroundf, false);
    Program.a1 = gl.getAttribLocation(Program, "pos");

    Program.uTime = gl.getUniformLocation(Program, "uTime");

    var vertices = [-1, -1, 0, 1, +1, -1, 0, 1, -1, +1, 0, 1, -1, +1, 0, 1, +1, -1, 0, 1, +1, +1, 0, 1];

    Program.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    window.BackgroundProgram = Program;
}
"use strict";

function compute_icosahedronTF(now, deltatime, whichOne) {

    var tfBuffer;
    var pointsBuffer;
    var nverts;
    var temp;

    // swapping buffers
    if (whichOne === 0) {
        temp = IcosahedronTFProgram.buffer;
        IcosahedronTFProgram.buffer = IcosahedronProgram.buffer;
        IcosahedronProgram.buffer = temp;

        tfBuffer = IcosahedronTFProgram.buffer;
        pointsBuffer = IcosahedronProgram.buffer;
        nverts = IcosahedronProgram.nverts;
    }

    // swapping bloom buffers
    if (whichOne === 1) {
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
    gl.uniform1f(IcosahedronTFProgram.uScreenRatio, screenRatio);
    gl.uniform3f(IcosahedronTFProgram.uMouseOrigin, mouseController.origin[0], mouseController.origin[1], mouseController.origin[2]);
    gl.uniform3f(IcosahedronTFProgram.uMouseVelocity, mouseController.velocity[0], mouseController.velocity[1], mouseController.velocity[2]);

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
    gl.uniformMatrix4fv(IcosahedronProgram.model, false, model);
    gl.uniformMatrix4fv(IcosahedronProgram.view, false, camera.getViewMatrix(deltatime, 0.3));

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
    gl.uniformMatrix4fv(OffscreenPointsProgram.model, false, model);
    gl.uniformMatrix4fv(OffscreenPointsProgram.view, false, camera.getViewMatrix(deltatime, 0.3));

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE);
    gl.disable(gl.DEPTH_TEST);
    gl.drawArrays(gl.POINTS, 0, OffscreenPointsProgram.nBloomVerts);
    // gl.bindFramebuffer(gl.FRAMEBUFFER, null);
}

function create_icosahedron_program() {

    var Program = getShader(icov, icof, false);
    Program.a1 = gl.getAttribLocation(Program, "pos");
    Program.a2 = gl.getAttribLocation(Program, "displacedPos");
    Program.a3 = gl.getAttribLocation(Program, "musicDisplacedPos");
    Program.a4 = gl.getAttribLocation(Program, "mouseVelocity");
    Program.a5 = gl.getAttribLocation(Program, "fx");
    Program.a6 = gl.getAttribLocation(Program, "fx2");

    Program.uTime = gl.getUniformLocation(Program, "uTime");
    Program.uDeltaTime = gl.getUniformLocation(Program, "uDeltaTime");

    Program.projection = gl.getUniformLocation(Program, "projection");
    Program.model = gl.getUniformLocation(Program, "model");
    Program.view = gl.getUniformLocation(Program, "view");

    Program.nverts = Icosahedron.nVerts;
    // Program.elength = result.triangles.length;
    Program.buffer = gl.createBuffer();
    // Program.ebuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(Icosahedron.verticesBuffer), gl.STATIC_DRAW);

    window.IcosahedronProgram = Program;
}

function create_offscreen_points_program() {

    var Program = getShader(offpointv, offpointf, false);
    Program.a1 = gl.getAttribLocation(Program, "pos");
    Program.a2 = gl.getAttribLocation(Program, "displacedPos");
    Program.a3 = gl.getAttribLocation(Program, "musicDisplacedPos");
    Program.a4 = gl.getAttribLocation(Program, "mouseVelocity");
    Program.a5 = gl.getAttribLocation(Program, "fx");
    Program.a6 = gl.getAttribLocation(Program, "fx2");

    Program.uTime = gl.getUniformLocation(Program, "uTime");
    Program.uDeltaTime = gl.getUniformLocation(Program, "uDeltaTime");

    Program.projection = gl.getUniformLocation(Program, "projection");
    Program.model = gl.getUniformLocation(Program, "model");
    Program.view = gl.getUniformLocation(Program, "view");

    Program.bloombuffer = gl.createBuffer();
    Program.nBloomVerts = Icosahedron.nBloomVerts;
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
    gl.transformFeedbackVaryings(Program, ['tfPosition', 'tfDisplacedPos', 'tfMusicDisplacedPos', 'tfMouseVelocity', 'tfFX', 'tfFX2'], gl.INTERLEAVED_ATTRIBS);

    gl.linkProgram(Program);
    if (!gl.getProgramParameter(Program, gl.LINK_STATUS)) {
        alert("Could not initialise shaders");
        return null;
    }

    Program.a1 = gl.getAttribLocation(Program, "pos");
    Program.a2 = gl.getAttribLocation(Program, "displacedPos");
    Program.a3 = gl.getAttribLocation(Program, "musicDisplacedPos");
    Program.a4 = gl.getAttribLocation(Program, "mouseVelocity");
    Program.a5 = gl.getAttribLocation(Program, "fx");
    Program.a6 = gl.getAttribLocation(Program, "fx2");

    Program.uTime = gl.getUniformLocation(Program, "uTime");
    Program.uCameraZ = gl.getUniformLocation(Program, "uCameraZ");
    Program.uDeltaTime = gl.getUniformLocation(Program, "uDeltaTime");
    Program.uScreenRatio = gl.getUniformLocation(Program, "uScreenRatio");
    Program.uMouseOrigin = gl.getUniformLocation(Program, "uMouseOrigin");
    Program.uMouseVelocity = gl.getUniformLocation(Program, "uMouseVelocity");
    Program.uMusicVisualizerData = gl.getUniformLocation(Program, "uMusicVisualizerData");

    Program.nverts = Icosahedron.nVerts;
    Program.buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(Icosahedron.verticesBuffer), gl.STATIC_DRAW);

    Program.bloombuffer = gl.createBuffer();
    Program.nBloomVerts = Icosahedron.nBloomVerts;

    gl.bindBuffer(gl.ARRAY_BUFFER, Program.bloombuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(Icosahedron.bloomVerticesBuffer), gl.STATIC_DRAW);

    window.IcosahedronTFProgram = Program;
}
"use strict";

function compute_icosahedronTF_lines(now, deltatime) {

    var temp = IcosahedronLinesTFProgram.buffer;
    IcosahedronLinesTFProgram.buffer = IcosahedronLinesProgram.buffer;
    IcosahedronLinesProgram.buffer = temp;

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
    gl.uniform1f(IcosahedronLinesTFProgram.uCameraZ, cameraZ);
    gl.uniform1f(IcosahedronLinesTFProgram.uScreenRatio, screenRatio);
    gl.uniform3f(IcosahedronLinesTFProgram.uMouseOrigin, mouseController.origin[0], mouseController.origin[1], mouseController.origin[2]);
    gl.uniform3f(IcosahedronLinesTFProgram.uMouseVelocity, mouseController.velocity[0], mouseController.velocity[1], mouseController.velocity[2]);

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
    gl.uniformMatrix4fv(IcosahedronLinesProgram.model, false, model);
    gl.uniformMatrix4fv(IcosahedronLinesProgram.view, false, camera.getViewMatrix(deltatime, 0.3));

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.disable(gl.DEPTH_TEST);
    gl.drawArrays(gl.LINES, 0, IcosahedronLinesProgram.nverts);
}

function create_icosahedron_lines_program() {

    var Program = getShader(icolinesv, icolinesf, false);
    Program.a1 = gl.getAttribLocation(Program, "v0");
    Program.a2 = gl.getAttribLocation(Program, "v1");
    Program.a3 = gl.getAttribLocation(Program, "v0displaced");
    Program.a4 = gl.getAttribLocation(Program, "v1displaced");
    Program.a5 = gl.getAttribLocation(Program, "v0musicDisplaced");
    Program.a6 = gl.getAttribLocation(Program, "v1musicDisplaced");
    Program.a7 = gl.getAttribLocation(Program, "mouseVelocity");
    Program.a8 = gl.getAttribLocation(Program, "fx");
    Program.a9 = gl.getAttribLocation(Program, "color");

    Program.projection = gl.getUniformLocation(Program, "projection");
    Program.model = gl.getUniformLocation(Program, "model");
    Program.view = gl.getUniformLocation(Program, "view");

    Program.nverts = Icosahedron.nLinesVerts;
    Program.buffer = gl.createBuffer();

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
    gl.transformFeedbackVaryings(Program, ['tfV0', 'tfV1', 'tfV0displaced', 'tfV1displaced', 'tfV0musicDisplaced', 'tfV1musicDisplaced', 'tfMouseVelocity', 'tfFx', 'tfColor'], gl.INTERLEAVED_ATTRIBS);

    gl.linkProgram(Program);
    if (!gl.getProgramParameter(Program, gl.LINK_STATUS)) {
        alert("Could not initialise shaders");
        return null;
    }

    Program.a1 = gl.getAttribLocation(Program, "v0");
    Program.a2 = gl.getAttribLocation(Program, "v1");
    Program.a3 = gl.getAttribLocation(Program, "v0displaced");
    Program.a4 = gl.getAttribLocation(Program, "v1displaced");
    Program.a5 = gl.getAttribLocation(Program, "v0musicDisplaced");
    Program.a6 = gl.getAttribLocation(Program, "v1musicDisplaced");
    Program.a7 = gl.getAttribLocation(Program, "mouseVelocity");
    Program.a8 = gl.getAttribLocation(Program, "fx");
    Program.a9 = gl.getAttribLocation(Program, "color");

    Program.uTime = gl.getUniformLocation(Program, "uTime");
    Program.uDeltaTime = gl.getUniformLocation(Program, "uDeltaTime");
    Program.uCameraZ = gl.getUniformLocation(Program, "uCameraZ");
    Program.uScreenRatio = gl.getUniformLocation(Program, "uScreenRatio");
    Program.uMouseOrigin = gl.getUniformLocation(Program, "uMouseOrigin");
    Program.uMouseVelocity = gl.getUniformLocation(Program, "uMouseVelocity");
    Program.uMusicVisualizerData = gl.getUniformLocation(Program, "uMusicVisualizerData");

    Program.nverts = Icosahedron.nLinesVerts;
    Program.buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(Icosahedron.linesBuffer), gl.STATIC_DRAW);

    window.IcosahedronLinesTFProgram = Program;
}
"use strict";

function postprocess_blit_in_main_FBO(now, deltatime) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    gl.useProgram(PostProcessBlitInMainProgram);
    gl.enableVertexAttribArray(PostProcessBlitInMainProgram.a1);
    gl.enableVertexAttribArray(PostProcessBlitInMainProgram.a2);
    gl.enableVertexAttribArray(PostProcessBlitInMainProgram.a3);

    gl.bindBuffer(gl.ARRAY_BUFFER, PostProcessBlitInMainProgram.buffer);
    gl.vertexAttribPointer(PostProcessBlitInMainProgram.a1, 2, gl.FLOAT, false, step * 5, 0);
    gl.vertexAttribPointer(PostProcessBlitInMainProgram.a2, 2, gl.FLOAT, false, step * 5, step * 2);
    gl.vertexAttribPointer(PostProcessBlitInMainProgram.a3, 1, gl.FLOAT, false, step * 5, step * 4);

    // Blit framebuffers, no Multisample texture 2d in WebGL 2
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, FBOsoffscreen[FRAMEBUFFER.RENDERBUFFER]);
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, FBOsoffscreen[FRAMEBUFFER.COLORBUFFER]);
    gl.clearBufferfv(gl.COLOR, 0, [0.0, 0.0, 0.0, 1.0]);
    gl.blitFramebuffer(0, 0, innerWidth, innerHeight, 0, 0, innerWidth, innerHeight, gl.COLOR_BUFFER_BIT, gl.NEAREST);

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, FBOsoffscreen.texture);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.uniform1i(PostProcessBlitInMainProgram.uImage, 0);

    var mouseSpeed = mouseController.postProcessVelocity * 0.07;

    if (mouseSpeed < 0.3) mouseSpeed = 0;
    if (mouseSpeed > 0.3) mouseSpeed = mouseSpeed - 0.3;
    if (mouseSpeed > 3.0) mouseSpeed = 3.0;

    gl.uniform1f(PostProcessBlitInMainProgram.uTime, now);
    gl.uniform1f(PostProcessBlitInMainProgram.uMouseSpeed, mouseSpeed);

    // gl.blendFunc(gl.ONE, gl.ONE);
    // gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.disable(gl.BLEND);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
}

function create_postprocess_blit_in_main_FBO_program() {
    var Program = getShader(postProcBlitv, postProcBlitf, false);
    Program.a1 = gl.getAttribLocation(Program, "pos");
    Program.a2 = gl.getAttribLocation(Program, "coord");
    Program.a3 = gl.getAttribLocation(Program, "id");

    Program.uTime = gl.getUniformLocation(Program, "uTime");
    Program.uImage = gl.getUniformLocation(Program, "uImage");
    Program.uMouseSpeed = gl.getUniformLocation(Program, "uMouseSpeed");

    var vertices = [-1.0, -1.0, 0.0, 0.0, 0, -1.0, +1.0, 0.0, 1.0, 0, +1.0, -1.0, 1.0, 0.0, 0, +1.0, -1.0, 1.0, 0.0, 0, -1.0, +1.0, 0.0, 1.0, 0, +1.0, +1.0, 1.0, 1.0, 0];

    Program.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    //assegnalo così puoi usare il nome che vuoi quando serve
    window.PostProcessBlitInMainProgram = Program;
}

// function create_offscreen_FBOs() {
//     var FBO = gl.createFramebuffer();
//     gl.bindFramebuffer(gl.FRAMEBUFFER, FBO);

//     FBO.texture = gl.createTexture();

//     gl.bindTexture(gl.TEXTURE_2D, FBO.texture);
//     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
//     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
//     // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR_MIPMAP_LINEAR);
//     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
//     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
//     // gl.texParameteri(gl.TEXTURE_2D, gl.GENERATE_MIPMAP, gl.TRUE);
//     gl.generateMipmap(gl.TEXTURE_2D);

//     gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, innerWidth, innerHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

//     gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, FBO.texture, 0);

//     gl.bindTexture(gl.TEXTURE_2D, null);
//     gl.bindFramebuffer(gl.FRAMEBUFFER, null);

//     window.FBOoffscreen = FBO;
// }

function create_offscreen_multisampleFBOs() {
    window.FRAMEBUFFER_SIZE = {
        x: innerWidth,
        y: innerHeight
    };

    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, FRAMEBUFFER_SIZE.x, FRAMEBUFFER_SIZE.y, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.bindTexture(gl.TEXTURE_2D, null);

    // -- Init Frame Buffers
    window.FRAMEBUFFER = {
        RENDERBUFFER: 0,
        COLORBUFFER: 1
    };

    var framebuffers = [gl.createFramebuffer(), gl.createFramebuffer()];

    var colorRenderbuffer = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, colorRenderbuffer);
    gl.renderbufferStorageMultisample(gl.RENDERBUFFER, 4, gl.RGBA8, FRAMEBUFFER_SIZE.x, FRAMEBUFFER_SIZE.y);

    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffers[FRAMEBUFFER.RENDERBUFFER]);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.RENDERBUFFER, colorRenderbuffer);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffers[FRAMEBUFFER.COLORBUFFER]);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    window.FBOsoffscreen = framebuffers;
    FBOsoffscreen.texture = texture;
    FBOsoffscreen.colorRenderBuffer = colorRenderbuffer;
}
'use strict';

var shaderPart_maxDistance = '\n    const float maxDistance = 4.0;\n';

var shaderPart_colors = '\n    #define RED;\n';

var shaderPart_screenRatio = '\n    // const float uScreenRatio = ' + innerWidth / innerHeight + ';\n    uniform float uScreenRatio;\n';

var shaderPart_canvasHeight = '\n    const float canvasHeight = ' + innerHeight + '.0;\n';

var shaderPart_FOV = '\n    const int FOV = ' + 45 * Math.PI / 180 + ';\n';

var shaderPart_tan225 = '\n    const float tan225 = 0.4142135623730950488016887242097;\n';

var shaderPart_cameraZ = '\n    // const float cameraZ = 45.0;\n    uniform float uCameraZ;\n';

var shaderPart_sphereRadius = '\n    const float sphereRadius = 10.0;\n    const float halfSphereRadius = 5.0;\n    const float sphereCircleLength = 62.83185307179586476925286766559; // sphereRadius * 2 * PI;\n';

var shaderPart_mouseConstants = '\n    const float   powerStrenght   = 0.02;\n    const float   reboundStrenght = 0.975;\n';

/** COLORS -  original */
// var shaderPart_colors_TFlineAttractor = `
//     vec4(redComp * colorMult * 1.5, 0.1 * colorMult, 0.1 * colorMult * 2.0, 0);
// `;
// var shaderPart_colors_TFlineShatter = `
//     vec4(0, 0, 1, 0);
// `;
// var shaderPart_colors_offpointsCol1 = `
//     vec3(0.9, 0.6, 0.3);
// `;
// var shaderPart_colors_offpointsCol2 = `
//     vec3(1.0, 0.2, 0.2);
// `;
// var shaderPart_pointsMouseSpeedColor = `
//     Color.xyz = vec3(1,   max(1.0 - mouseSpeed, 0.1),   max(1.0 - mouseSpeed, 0.1));
// `;


/** COLORS - random */
// var shaderPart_colors_TFlineAttractor = "" +
// "    vec4(" + rnd() + ", " + rnd() + ", " + rnd() + ", 0) * colorMult;";

// var shaderPart_colors_TFlineShatter = "" +
// "    vec4(" + rnd() + ", " + rnd() + ", " + rnd() + ", 0);";

// var shaderPart_colors_offpointsCol1 = "" +
// "    vec3(" + rnd() + ", " + rnd() + ", " + rnd() + ");";

// var shaderPart_colors_offpointsCol2 = "" +
// "    vec3(" + rnd() + ", " + rnd() + ", " + rnd() + ");";

// var shaderPart_pointsMouseSpeedColor = "" +
// "    Color.xyz = mix(vec3(" + rnd() + ", " + rnd() + ", " + rnd() + "), vec3(" + rnd() + ", " + rnd() + ", " + rnd() + "), max(1.0 - mouseSpeed * 2.0, 0.0));";


/* WITHEISH */
var shaderPart_colors_TFlineAttractor = '    vec4(0.38914890463251887, 0.3817349169527625274, 0.38217114972887741, 0) * colorMult;';
var shaderPart_colors_TFlineShatter = '    vec4(0.983629832789459, 0.3219759252018275, 0.3940256881549994, 0);';
var shaderPart_colors_offpointsCol1 = '    vec3(0.5376075549191675, 0.9749653113259806, 0.9577071140151332);';
var shaderPart_colors_offpointsCol2 = '    vec3(0.49472422263778955, 0.35799897323872586, 0.22805524678906958);';
var shaderPart_pointsMouseSpeedColor = '    Color.xyz = mix(vec3(0.7726033988519405, 0.7861298760738663, 0.49679731181152237), vec3(0.4486490118661614, 0.449526516430272487, 0.448020577528358366), max(1.0 - mouseSpeed * 2.0, 0.0));';
// var shaderPart_pointsOutsideSpeedColor = '    Color.xyz = mix(vec3(0.9726033988519405, 0.0861298760738663, 0.09679731181152237), vec3(0.4486490118661614, 0.029526516430272487, 0.048020577528358366), max(1.0 - mouseSpeed * 2.0, 0.0));';


function getColors() {
    var str = '\n            var shaderPart_colors_TFlineAttractor = \'' + shaderPart_colors_TFlineAttractor + '\';\n            var shaderPart_colors_TFlineShatter = \'' + shaderPart_colors_TFlineShatter + '\';\n            var shaderPart_colors_offpointsCol1 = \'' + shaderPart_colors_offpointsCol1 + '\';\n            var shaderPart_colors_offpointsCol2 = \'' + shaderPart_colors_offpointsCol2 + '\';\n            var shaderPart_pointsMouseSpeedColor = \'' + shaderPart_pointsMouseSpeedColor + '\';\n        ';

    something = window.open("data:text/json," + encodeURIComponent(JSON.stringify({ str: str })), "_blank");
    something.focus();
}
"use strict";

var shaderPart_general = "\n#define PI 3.1415926535897932384626433832795\n#define RS 0.4142135623730950488016887242097\n";

var shaderPart_simpleRand = "\nfloat rand(vec2 c){\n\treturn fract(sin(dot(c.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}";

var shaderPart_perlinNoise = "\nfloat rand(vec2 c){\n\treturn fract(sin(dot(c.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nfloat noise(vec2 p, float freq ){\n\tfloat unit = " + 1 + ".0 / freq;\n\tvec2 ij = floor(p/unit);\n\tvec2 xy = mod(p,unit)/unit;\n\t//xy = 3.*xy*xy-2.*xy*xy*xy;\n\txy = .5*(1.-cos(PI*xy));\n\tfloat a = rand((ij+vec2(0.,0.)));\n\tfloat b = rand((ij+vec2(1.,0.)));\n\tfloat c = rand((ij+vec2(0.,1.)));\n\tfloat d = rand((ij+vec2(1.,1.)));\n\tfloat x1 = mix(a, b, xy.x);\n\tfloat x2 = mix(c, d, xy.x);\n\treturn mix(x1, x2, xy.y);\n}\n\nfloat pNoise(vec2 p, int res){\n\tfloat persistance = .5;\n\tfloat n = 0.;\n\tfloat normK = 0.;\n\tfloat f = 4.;\n\tfloat amp = 1.;\n\tint iCount = 0;\n\tfor (int i = 0; i<50; i++){\n\t\tn+=amp*noise(p, f);\n\t\tf*=2.;\n\t\tnormK+=amp;\n\t\tamp*=persistance;\n\t\tif (iCount == res) break;\n\t\tiCount++;\n\t}\n\tfloat nf = n/normK;\n\treturn nf*nf*nf*nf;\n}";

var shaderPart_classicPerlinNoise = "\n//\tClassic Perlin 2D Noise \n//\tby Stefan Gustavson\n//\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\nvec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\n\nfloat cnoise(vec2 P){\n  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);\n  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);\n  Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation\n  vec4 ix = Pi.xzxz;\n  vec4 iy = Pi.yyww;\n  vec4 fx = Pf.xzxz;\n  vec4 fy = Pf.yyww;\n  vec4 i = permute(permute(ix) + iy);\n  vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...\n  vec4 gy = abs(gx) - 0.5;\n  vec4 tx = floor(gx + 0.5);\n  gx = gx - tx;\n  vec2 g00 = vec2(gx.x,gy.x);\n  vec2 g10 = vec2(gx.y,gy.y);\n  vec2 g01 = vec2(gx.z,gy.z);\n  vec2 g11 = vec2(gx.w,gy.w);\n  vec4 norm = 1.79284291400159 - 0.85373472095314 * \n    vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));\n  g00 *= norm.x;\n  g01 *= norm.y;\n  g10 *= norm.z;\n  g11 *= norm.w;\n  float n00 = dot(g00, vec2(fx.x, fy.x));\n  float n10 = dot(g10, vec2(fx.y, fy.y));\n  float n01 = dot(g01, vec2(fx.z, fy.z));\n  float n11 = dot(g11, vec2(fx.w, fy.w));\n  vec2 fade_xy = fade(Pf.xy);\n  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);\n  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);\n  return 2.3 * n_xy;\n}";

var shaderPart_hash3 = "\nvec3 hash3( vec2 p ){\n    vec3 q = vec3( dot(p,vec2(127.1,311.7)), \n\t\t\t\t   dot(p,vec2(269.5,183.3)), \n\t\t\t\t   dot(p,vec2(419.2,371.9)) );\n\treturn fract(sin(q)*43758.5453);\n}";

var shaderPart_atan2 = "\nfloat atan2(in float y, in float x)\n{\n    bool s = (abs(x) > abs(y));\n    return mix(PI/2.0 - atan(x,y), atan(y,x), s);\n}";

var shaderPart_rotMatrix = "\nmat4 rotationMatrix(vec3 axis, float angle)\n{\n    axis = normalize(axis);\n    float s = sin(angle);\n    float c = cos(angle);\n    float oc = 1.0 - c;\n    \n    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n                0.0,                                0.0,                                0.0,                                1.0);\n}";

var shaderPart_sphericalDistance = "\nfloat sphericalDistance(vec3 p0, vec3 p1)\n{\n\t// 2*PI  *r   for a circle    \n\t// angle *r   for an arc\n\n\tfloat angle = acos(dot(p0, p1));\n\treturn angle * sphereRadius;\n}";

var shaderPart_attractVertex = "\nvec4 attractVertex(vec4 attractor, vec4 vertex, out float distanceFromAttractor)\n{\n\t vec3 normAttr = normalize(attractor.xyz);\n\t vec3 normVert = normalize(vertex.xyz);\n\n     float angle = acos(dot(normAttr, normVert));\n\n     float sphereDist = sphericalDistance(normAttr, normVert);\n\t distanceFromAttractor = sphereDist;\n\n\t /**\n\t  *  **Lower** values for compressionStrenght will make compression stronger\n\t  *  Should be moved to the CPU\n\t  */\n\t float compressionStrenght = clamp(pow(cnoise(vec2(uTime * 0.1, 45.0)) * 0.5 + 0.5, 2.0) * 7.0, 0.2, 7.0);\n\t float attractorPower = pow(clamp(1.0 - sphereDist / (sphereCircleLength * 0.5), 0.0, 1.0),   compressionStrenght);\n\t \n\t vec3 rotAxis = cross(normAttr, normVert);\n\n     return rotationMatrix(normalize(rotAxis), angle * attractorPower) * vertex;\n}";

var shaderPart_offsetVertexMouse = "\nvoid offsetVertexMouseVelocity(vec4 vertex, int whichVertex, float powerMult) {\n    float z = abs(vertex.z - uCameraZ);\n    float hwh = z * tan225;\n    float hww = z * tan225 * uScreenRatio;\n\n    vec4 worldSpaceMouseOrigin = vec4(0.0);\n\n    // uMouseOrigin is in NDC   -1...1\n    worldSpaceMouseOrigin.x = hww * uMouseOrigin.x;\n    worldSpaceMouseOrigin.y = hwh * uMouseOrigin.y;\n    worldSpaceMouseOrigin.z = -z;\n\n    vec3 fakevertex = vertex.xyz;\n    fakevertex.z -= uCameraZ;\n\n    float distance = length(fakevertex - worldSpaceMouseOrigin.xyz);\n\n\n    /**\n     * \n     *  Points have a stronger powerStrenght ------------------ v\n     *                                                          v\n     */\n    float power = powerStrenght / (pow(distance, 3.0) + 1.0) * powerMult;\n    \n\n    // mouse velocities are different for both vertices\n    // v0 will have a different mouseVelocity than v1, and we'll store both of them in   xy & zw of mouseVelocity\n    if(whichVertex == 0) {\n        tfMouseVelocity.xy += uMouseVelocity.xy * power;\n    } else {\n        tfMouseVelocity.zw += uMouseVelocity.xy * power;\n    }\n}";

var shaderPart_offsetVertexMusic = "\nvec4 offsetVertexMusic(vec4 vertex, vec4 startVertex) {\n\t\n\t// at this point tfMouseVelocity is already defined by offsetVertexMouseVelocity();\n\t// so we can just increment it with the incrementor += operator\n\n    float coord_s = 1.0 - abs(atan2(startVertex.y, startVertex.x) / PI);\n\tfloat value = texture(uMusicVisualizerData, vec2(coord_s                 * 0.7, 0.5)).x;\n\n    value = ((value == 0.0 ? -140.0 : value) + 140.0) * 0.075; \n    value = max(value, 0.0);\n\n    float mult  = 0.0;    \n    vec3 displace = normalize(vertex.xyz) * value;\n\n    mult = clamp(1.0 - abs(vertex.z) / 5.0, 0.0, 1.0);\n    mult *= clamp((vertex.y + sphereRadius) * 0.2, 0.0, 1.0);\n\n    vertex.xyz += displace * mult;\n\n    return vertex;\n}";

var shaderPart_applyVelocityToVertex = "\nvoid applyVelocityToVertex(inout vec4 vertex, int whichVertex) {\n\tif(whichVertex == 0) {\n        vertex.xy += tfMouseVelocity.xy;\n    } else {  \n        vertex.xy += tfMouseVelocity.zw;\n    }\n}";
"use strict";

var postProcBlitv = "#version 300 es\nlayout(location = 0) in vec2  pos;\nlayout(location = 1) in vec2  coord;\nlayout(location = 2) in float id;\n\nout vec2  Coord;\nout float ID;\n\nvoid main() {\t\t\n    gl_Position = vec4(pos.xy, 0.0, 1.0);\t\t\n    Coord = coord;\t\t\n    ID    = id;\n}";

var postProcBlitf = "#version 300 es\nprecision highp float;\n\nin vec2  Coord;\nin float ID;\n\nuniform sampler2D uImage;\nuniform float uTime;\nuniform float uMouseSpeed;\n\nout vec4 FragColor;\n\n\n/* CONSTANTS */\n" + shaderPart_general + "\n\n\n/* FUNCTIONS */\n" + shaderPart_atan2 + "\n\n\nvoid main() {\t\t\t\t\n\n    vec2 blurVector = Coord - vec2(0.5);\n    float distance = length(blurVector);\n\n\n    vec2 NDCCoord = Coord * 2.0 - 1.0;\n\n    float angle = atan2(NDCCoord.y, NDCCoord.x);\n    float angleMultiplier = pow(sin(angle * 6.0 + uTime * 6.0) * .5 + .7, 2.0) * 4.67 * distance;\n    // if(distance < 0.4) angleMultiplier *= distance / 0.4 * 0.5;\n    \n\n\n\n    vec4 col1 = texture(uImage, Coord + 0.00135 * uMouseSpeed * angleMultiplier);\n    vec4 col2 = texture(uImage, Coord - 0.00135 * uMouseSpeed * angleMultiplier);\n    vec4 col = texture(uImage, Coord);\n    col.x = col1.x;\n    col.y = col2.y;\n    \n    \n    vec4 blurcol;\n    float activeDistance = max(0.25 - uMouseSpeed * 0.05, 0.15);\n\n\n\n    if(distance > activeDistance) {\n\n        float redistance = (distance - activeDistance) * 0.175 * uMouseSpeed;\n\n        vec4 sample1 = texture(uImage, Coord + blurVector * 0.025 * redistance);\n        vec4 sample2 = texture(uImage, Coord + blurVector * 0.05 * redistance);\n        vec4 sample3 = texture(uImage, Coord + blurVector * 0.1 * redistance);\n        vec4 sample4 = texture(uImage, Coord + blurVector * 0.125 * redistance);\n        vec4 sample5 = texture(uImage, Coord + blurVector * 0.15 * redistance);\n        vec4 sample6 = texture(uImage, Coord + blurVector * 0.2 * redistance);\n        vec4 sample7 = texture(uImage, Coord + blurVector * 0.225 * redistance);\n        vec4 sample8 = texture(uImage, Coord + blurVector * 0.25 * redistance);\n\n        blurcol = sample1 + sample2 + sample3 + sample4 + sample5 + sample6 + sample7 + sample8;\n        blurcol *= 0.125;\n        col = mix(blurcol, col, 0.5);\n    } \n\n    // float blackness = 1.0 - distance / 0.5;\n    // FragColor.xyz = col.xyz * 0.6 + col.xyz * blackness * 0.4;\n    // FragColor.a = 1.0;\n\n\n\n    FragColor = col;\n    // FragColor = vec4(1.0 - col.xyz, 1.0);\n}";
"use strict";

var offpointv = "#version 300 es\nlayout(location = 0) in vec4 pos;\nlayout(location = 1) in vec4 displacedPos;\nlayout(location = 2) in vec4 musicDisplacedPos;\nlayout(location = 3) in vec4 mouseVelocity;\nlayout(location = 4) in vec4 fx;\nlayout(location = 5) in vec4 fx2;\n\nuniform mat4 projection;\nuniform mat4 model;\nuniform mat4 view;  \n\n#define PI 3.1415926535897932384626433832795\n#define RS 0.4142135623730950488016887242097\n\n\n\nuniform float uTime;\nuniform float uDeltaTime;\n\n\n\nout vec4 Color;\n\n\n/*  defines  */\n" + shaderPart_colors + "\n\n/*  constants declarations  */\n" + shaderPart_sphereRadius + "   \n" + shaderPart_canvasHeight + "   \n\nvoid main() {\t\t\n\n    float saveTheAttributes = pos.x + fx.x + mouseVelocity.x + displacedPos.x;\n\n\n    vec4 transformedPos = musicDisplacedPos;\n\n    \n    gl_Position = projection * view * model * vec4(transformedPos.xyz,   1.0);\n    \n    float world_point_size = 0.15;\n    float distance_from_view = -(view * model * vec4(transformedPos.xyz, 1.0)).z;\n    float r = RS; //tan(22.5 * (PI / 180.0));\n    float whsize = distance_from_view * r * 2.0;\n    float size   = (world_point_size / whsize) * canvasHeight;\n\n    // points closer to the attractor will be smaller in size, the distance was measured (inside pointsTF) as the \n    // Arc length between the two points\n    float attractorArcDistance = fx.x;\n    float attrSizeMult         = min(fx.x / (sphereCircleLength * 0.15) + 0.1, 1.0);\n\n\n\n    float sizeSinWave = ((sin(uTime * 3.0 + pos.w * 0.05) * 0.5 + 0.5) * 1.5 + 0.6);\n\n\n    gl_PointSize = size * attrSizeMult * sizeSinWave;\n\n    Color = vec4(1,1,1,1);\n\n\n    float mouseSpeed = length(mouseVelocity.xy);\n    //if(mod(pos.w, 2.0) == 0.0) {\n    //    Color.x = max(1.0 - mouseSpeed, 0.1);\n    //    Color.y = max(1.0 - mouseSpeed, 0.1);\n    //}\n\n    //if(mod(pos.w, 2.0) == 1.0) {\n    //    Color.y = max(1.0 - mouseSpeed, 0.1);\n    //    Color.z = max(1.0 - mouseSpeed, 0.1);\n    //}\n\n\n\n\n    gl_PointSize *= length(mouseVelocity.xy) * 0.3 + 1.0;\n\n\n\n\n    // if this is a hidden point let it's opacity grow only if its moving\n    if(fx2.x > 0.9) {\n        // Color.xyz = vec3(0,1,0);\n\n        float distanceFromOriginalPos = clamp(length(musicDisplacedPos.xyz) / 10.5, 1.0, 3.0);\n        distanceFromOriginalPos = (distanceFromOriginalPos - 1.0) * 0.5;\n\n        vec3 col1 = " + shaderPart_colors_offpointsCol1 + " \n        vec3 col2 = " + shaderPart_colors_offpointsCol2 + " \n\n        Color.xyz = mix(col1, col2, clamp((pos.x + 15.0 / 30.0), 0.0, 1.0));\n        \n        Color.a = clamp(distanceFromOriginalPos * mouseSpeed * 1.5, 0.0, 1.0);\n        gl_PointSize *= (1.5 + abs(sin(pos.w) * 2.0));\n    }\n}";

var offpointf = "#version 300 es\nprecision mediump float;\n\nin vec4 Color;\n\nout vec4 FragColor;\n\nvoid main() {\n    float distance = length(gl_PointCoord - vec2(0.5, 0.5));\n    float alpha    = 1.0;\n    if(distance > 0.15) alpha = 1.0 - (distance - 0.15) / 0.35; \n    if(distance > 0.5) discard;\t\t\n    \n    FragColor = vec4(Color.xyz * pow(alpha, 3.0) * Color.a, 0.0);\n}";
"use strict";

var backgroundv = "#version 300 es\nlayout(location = 0) in vec4 pos;\n\nvoid main() {\t\n    gl_Position = pos;\n}";

var backgroundf = "#version 300 es\nprecision mediump float;\n\nuniform float uTime;\n\nout vec4 FragColor;\n\n" + shaderPart_simpleRand + "\n" + shaderPart_general + "\n\n\nvoid main() {\n    float random = rand(gl_FragCoord.xy);\n    float gray = random * 0.055 + 0.08;     // + sin(uTime * 3.0 + random * 575474.0) * 0.015;\n\t\n    // if(random > 0.998) {\n    // float t = mod((random * random * 7759.0 + uTime), 500.0);\n    // if( t < 1.0 ) {\n    //     gray += sin(t * PI * 2.0) * 0.5;\n    // }\n    // }\n\n\n    FragColor = vec4(gray,gray,gray,1);\n}";
"use strict";

var icoTFv = "#version 300 es\nlayout(location = 0) in vec4 pos;\nlayout(location = 1) in vec4 displacedPos;\nlayout(location = 2) in vec4 musicDisplacedPos;\nlayout(location = 3) in vec4 mouseVelocity;\nlayout(location = 4) in vec4 fx;\nlayout(location = 5) in vec4 fx2;\n\n\nout vec4 tfPosition;\nout vec4 tfDisplacedPos;\nout vec4 tfMusicDisplacedPos;\nout vec4 tfMouseVelocity;\nout vec4 tfFX;\nout vec4 tfFX2;\n\n\nuniform float uTime;\nuniform float uDeltaTime;\nuniform vec3  uMouseOrigin;\nuniform vec3  uMouseVelocity;\n\nuniform sampler2D uMusicVisualizerData;\n\n\nout vec3 Color;\n\n\n\n/*  constants declarations  */\n" + shaderPart_maxDistance + "\n" + shaderPart_screenRatio + "\n" + shaderPart_tan225 + "\n" + shaderPart_cameraZ + "\n" + shaderPart_mouseConstants + "\n" + shaderPart_sphereRadius + "   \n" + shaderPart_general + "\n\n/*  functions declarations  */\n" + shaderPart_classicPerlinNoise + "\n" + shaderPart_atan2 + "\n" + shaderPart_rotMatrix + "\n" + shaderPart_sphericalDistance + "\n" + shaderPart_attractVertex + "\n" + shaderPart_offsetVertexMouse + "\n" + shaderPart_offsetVertexMusic + "\n" + shaderPart_applyVelocityToVertex + "\n\n\nvoid main() {\t\t\n\n\n    float saveTheAttributes = musicDisplacedPos.x;\n\n\n    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO LINESTF.JS */\n    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO LINESTF.JS */\n    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO LINESTF.JS */\n\n\n\n/* noise deflater - will make noise less apparent if the point is close to the deflaterPoint */\n   \n    /*  CAN BE OFFLOADED TO THE CPU */\n    /*  CAN BE OFFLOADED TO THE CPU */\n    vec2 phitheta = vec2(sin(uTime * 0.2) * PI, sin(uTime * 0.1) * PI);\n    vec3 pointOnSphere = vec3(cos(phitheta.x) * cos(phitheta.y),  cos(phitheta.y), sin(phitheta.x) * cos(phitheta.y));\n    pointOnSphere *= sphereRadius;\n    /*  CAN BE OFFLOADED TO THE CPU */\n    /*  CAN BE OFFLOADED TO THE CPU */\n\n    float distanceFromDeflater = length(pos.xyz - pointOnSphere);\n    /** just a linear interpolation -   eg.   distanceFromDeflater is  12, deflaterRadius is 10,   from 10 to 15 we linearly\n     *  interpolate the strenght of the deflater so we have     (12 - 10) / (15 - 10)  and we clamp the result */\n    float deflaterRadius = sphereRadius;\n    float deflaterInterp = deflaterRadius * 0.5;\n    float noiseDeflaterStrenght = clamp((distanceFromDeflater - deflaterRadius) / (deflaterInterp), 0.0, 1.0);\n\n\n\n\n\n    \n\n    /** \n     *      ATTRACTORS - will be calculated against non-displaced vertices, v0 & v1\n     */\n\n     // attractVertex will normalize the attractor\n     vec4 attractorExample = vec4(sin(uTime * 0.2 + 345.0), sin(uTime * 0.37 + 10.0), 1, 1);\n     float distanceFromAttractor = 0.0;\n     vec4 attractedPos = attractVertex(attractorExample, pos, distanceFromAttractor);\n\n\n\n\n\n\n\n    vec4 toCenter = pos * 1.0;\n    float noise = cnoise(vec2(uTime * 0.03 + pos.x * 0.1, uTime * 0.03 + pos.y * 0.1));\n    float noise2 = cnoise(vec2(uTime * 0.3 + pos.x * 0.5, uTime * 0.3 + pos.y * 0.3));\n    vec4 whereShouldPosBe = attractedPos + (toCenter * noise * 0.5 + toCenter * noise2 * 0.15) * noiseDeflaterStrenght;\n    \n\n    vec4 wherePosIs = displacedPos;\n\n\n\n\n\n    /** VELOCITIES ROUTINE  */\n\n    tfMouseVelocity.xy = mouseVelocity.xy;\n\n    offsetVertexMouseVelocity(wherePosIs, 0, 1.3);\n    applyVelocityToVertex(wherePosIs, 0);\n    \n    tfMouseVelocity.xy *= reboundStrenght;\n\n    /** VELOCITIES ROUTINE - END  */\n\n\n\n\n\n\n    // put it back where it should be\n    tfPosition = pos;\n\n    tfDisplacedPos = wherePosIs * 0.965 + whereShouldPosBe * 0.035;\n\n    tfMusicDisplacedPos = offsetVertexMusic(tfDisplacedPos, pos);\n\n    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO LINESTF.JS */\n    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO LINESTF.JS */\n    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO LINESTF.JS */\n\n\n\n\n    tfFX           = fx;     // fx.x    distance from attractor\n    tfFX.x         = distanceFromAttractor; // points closer to the attractor \n                                            // will be smaller in size\n\n    tfFX2          = fx2;   \n\n    // tfMouseVelocity = mouseVelocity;\n}";

var icoTFf = "#version 300 es\nprecision mediump float;\n\nvoid main() {\n\n}";
"use strict";

var icov = "#version 300 es\nlayout(location = 0) in vec4 pos;\nlayout(location = 1) in vec4 displacedPos;\nlayout(location = 2) in vec4 musicDisplacedPos;\nlayout(location = 3) in vec4 mouseVelocity;\nlayout(location = 4) in vec4 fx;\nlayout(location = 5) in vec4 fx2;\n\nuniform mat4 projection;\nuniform mat4 model;\nuniform mat4 view;  \n\n#define PI 3.1415926535897932384626433832795\n#define RS 0.4142135623730950488016887242097\n\n\n\nuniform float uTime;\nuniform float uDeltaTime;\n\n\nout vec4 Color;\nout float vSize;\n\nvec3 hsl2rgb( in vec3 c ) {\n    vec3 rgb = clamp( abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0 );\n    return c.z + c.y * (rgb-0.5)*(1.0-abs(2.0*c.z-1.0));\n}\n\n/*  defines  */\n" + shaderPart_colors + "\n\n/*  constants declarations  */\n" + shaderPart_sphereRadius + "   \n" + shaderPart_canvasHeight + "   \n\nvoid main() {\t\t\n\n    float saveTheAttributes = pos.x + fx.x + fx2.x + mouseVelocity.x + displacedPos.x;\n\n\n    vec4 transformedPos = musicDisplacedPos;\n\n    \n    gl_Position = projection * view * model * vec4(transformedPos.xyz,   1.0);\n    \n    float world_point_size = 0.15;\n    float distance_from_view = -(view * model * vec4(transformedPos.xyz, 1.0)).z;\n    float r = RS; //tan(22.5 * (PI / 180.0));\n    float whsize = distance_from_view * r * 2.0;\n    float size   = (world_point_size / whsize) * canvasHeight;\n\n    // points closer to the attractor will be smaller in size, the distance was measured (inside pointsTF) as the \n    // Arc length between the two points\n    float attractorArcDistance = fx.x;\n    float attrSizeMult         = min(fx.x / (sphereCircleLength * 0.15) + 0.1, 1.0);\n\n\n\n    float sizeSinWave = ((sin(uTime * 3.0 + pos.w * 0.05) * 0.5 + 0.5) * 1.5 + 0.6);\n\n\n    gl_PointSize = size * attrSizeMult * sizeSinWave;\n\n    Color = vec4(1,1,1,1);\n\n\n    float mouseSpeed = length(mouseVelocity.xy);\n\n   \n    Color.xyz = " + shaderPart_pointsMouseSpeedColor + " \n   \n    // if(pos.x < 0.0) Color.xyz = + shaderPart_pointsOutsideSpeedColor +   \n\n    Color.xyz *= hsl2rgb(\n        vec3(\n            sizeSinWave * (transformedPos.x + transformedPos.y + sin(transformedPos.z)) * 0.026 + uTime * 0.1,\n            sin(uTime) * 0.3 + 1.7 + mouseSpeed,\n            0.5\n        )\n    ) * vec3(1.0, 0.3, 1.0);\n\n    // if this is a hidden point let it's opacity grow only if its moving\n    if(fx2.x > 0.9) {\n        Color.a = clamp(mouseSpeed, 0.0, 1.0);\n    }\n    \n    gl_PointSize *= length(mouseVelocity.xy) * 0.3 + 1.0;\n\n    // DOF effect - once every 3 points    \n    vSize = mod(pos.w, 3.0) == 0.0 ? 70.0 * (gl_PointSize / canvasHeight) : 0.0;\n}";

var icof = "#version 300 es\nprecision mediump float;\n\nin vec4 Color;\nin float vSize;\n\nout vec4 FragColor;\n\nvoid main() {\n    float distance = length(gl_PointCoord - vec2(0.5, 0.5));\n    float alpha    = 1.0;\n    if(distance > 0.4) alpha = 1.0 - (distance - 0.4) / 0.1; \n    if(distance > 0.5) discard;\t\t\n\n    // DOF effect\n    // if(vSize > 0.0 && distance < 0.4) alpha = mix(1.0, pow((distance / 0.4), 1.5), min(vSize, 2.0));\n    \n    FragColor = vec4(Color.xyz, alpha * 0.6 * Color.a);\n}";
"use strict";

var icolinesTFv = "#version 300 es\nlayout(location = 0) in vec4 v0;\nlayout(location = 1) in vec4 v1;\nlayout(location = 2) in vec4 v0displaced;\nlayout(location = 3) in vec4 v1displaced;\nlayout(location = 4) in vec4 v0musicDisplaced;\nlayout(location = 5) in vec4 v1musicDisplaced;\nlayout(location = 6) in vec4 mouseVelocity;\nlayout(location = 7) in vec4 fx;\nlayout(location = 8) in vec4 color;\n\nout vec4 tfV0;\nout vec4 tfV1;\nout vec4 tfV0displaced;\nout vec4 tfV1displaced;\nout vec4 tfV0musicDisplaced;\nout vec4 tfV1musicDisplaced;\nout vec4 tfMouseVelocity;\nout vec4 tfFx;              // tfFx.x  should dictate wheter this is the 'left' or 'right' vertex\n                            // tfFx.y  is the angle of the rotation\n                            // tfFx.z  is the angular accelleration\n                            // tfFx.w  is the opacity - could be collapsed in tfColor.a\nout vec4 tfColor;\n\n\n\nuniform float uTime;\nuniform float uDeltaTime;\n\nuniform vec3  uMouseOrigin;\nuniform vec3  uMouseVelocity;\n\nuniform sampler2D uMusicVisualizerData;\n\n\n/*  defines  */\n" + shaderPart_colors + "\n\n/*  constants declarations  */\n" + shaderPart_general + "\n" + shaderPart_maxDistance + "\n" + shaderPart_screenRatio + "\n" + shaderPart_tan225 + "\n" + shaderPart_cameraZ + "\n" + shaderPart_mouseConstants + "   \n" + shaderPart_sphereRadius + "   \n\n/*  functions declarations  */\n" + shaderPart_classicPerlinNoise + "\n" + shaderPart_atan2 + "\n" + shaderPart_rotMatrix + "\n" + shaderPart_sphericalDistance + "\n" + shaderPart_attractVertex + "\n" + shaderPart_offsetVertexMouse + "\n" + shaderPart_offsetVertexMusic + "\n" + shaderPart_applyVelocityToVertex + "\n\nvoid main() {\n    float saveTheAttributes = color.x + fx.x;\n\n\n    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO POINTSTF.JS */\n    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO POINTSTF.JS */\n    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO POINTSTF.JS */\n\n   \n    /* noise deflater - will make noise less apparent if the point is close to the deflaterPoint */\n   \n    /*  CAN BE OFFLOADED TO THE CPU */\n    /*  CAN BE OFFLOADED TO THE CPU */\n    vec2 phitheta = vec2(sin(uTime * 0.2) * PI, sin(uTime * 0.1) * PI);\n    vec3 pointOnSphere = vec3(cos(phitheta.x) * cos(phitheta.y),  cos(phitheta.y), sin(phitheta.x) * cos(phitheta.y));\n    pointOnSphere *= sphereRadius;\n    /*  CAN BE OFFLOADED TO THE CPU */\n    /*  CAN BE OFFLOADED TO THE CPU */\n\n\n    /** just a linear interpolation -   eg.   distanceFromDeflater is  12, deflaterRadius is 10,   from 10 to 15 we linearly\n     *  interpolate the strenght of the deflater so we have     (12 - 10) / (15 - 10)  and we clamp the result */\n    float deflaterRadius = sphereRadius;\n    float deflaterInterp = deflaterRadius * 0.5;\n\n    float distanceFromDeflaterV0 = length(v0.xyz - pointOnSphere);\n    float noiseDeflaterStrenghtV0 = clamp((distanceFromDeflaterV0 - deflaterRadius) / (deflaterInterp), 0.0, 1.0);\n    float distanceFromDeflaterV1 = length(v1.xyz - pointOnSphere);\n    float noiseDeflaterStrenghtV1 = clamp((distanceFromDeflaterV1 - deflaterRadius) / (deflaterInterp), 0.0, 1.0);\n\n\n\n\n\n    \n\n    /** \n     *      ATTRACTORS - will be calculated against non-displaced vertices, v0 & v1\n     */\n\n     // attractVertex will normalize the attractor\n     vec4 attractorExample = vec4(sin(uTime * 0.2 + 345.0), sin(uTime * 0.37 + 10.0), 1, 1);\n\n     float unusedAttractDistanceV0;   // will be used in pointsTF \n     vec4 attractedV0 = attractVertex(attractorExample, v0, unusedAttractDistanceV0);\n     vec4 attractedV1 = attractVertex(attractorExample, v1, unusedAttractDistanceV0);\n\n\n\n\n\n\n    /* noise displacement */\n    vec4 toCenter = v0 * 1.0;\n    float noise = cnoise(vec2(uTime * 0.03 + v0.x * 0.1, uTime * 0.03 + v0.y * 0.1));\n    float noise2 = cnoise(vec2(uTime * 0.3 + v0.x * 0.5, uTime * 0.3 + v0.y * 0.3));\n    /* noise displacement */\n    vec4 whereShouldv0Be = attractedV0 + (toCenter * noise * 0.5 + toCenter * noise2 * 0.15) * noiseDeflaterStrenghtV0;\n\n    toCenter = v1 * 1.0;\n    noise = cnoise(vec2(uTime * 0.03 + v1.x * 0.1, uTime * 0.03 + v1.y * 0.1));\n    noise2 = cnoise(vec2(uTime * 0.3 + v1.x * 0.5, uTime * 0.3 + v1.y * 0.3));    \n    vec4 whereShouldv1Be = attractedV1 + (toCenter * noise * 0.5 + toCenter * noise2 * 0.15) * noiseDeflaterStrenghtV1;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    vec4 wherev0is = v0displaced;\n    vec4 wherev1is = v1displaced;\n\n    /** VELOCITIES ROUTINE  */\n\n    tfMouseVelocity.xy = mouseVelocity.xy;\n    tfMouseVelocity.zw = mouseVelocity.zw;\n\n    offsetVertexMouseVelocity(wherev0is, 0, 1.0);\n    offsetVertexMouseVelocity(wherev1is, 1, 1.0);\n    \n    applyVelocityToVertex(wherev0is, 0);\n    applyVelocityToVertex(wherev1is, 1);\n\n    // decreasing velocities\n    tfMouseVelocity.xy *= 0.99; //reboundStrenght;\n    tfMouseVelocity.zw *= 0.99; //reboundStrenght;\n\n\n    /** VELOCITIES ROUTINE - END  */\n\n\n\n\n\n\n\n\n    // put it back where it should be\n    tfV0 = v0;\t\t\n    tfV1 = v1;\n\n    tfV0displaced = wherev0is * 0.965 + whereShouldv0Be * 0.035;\n    tfV1displaced = wherev1is * 0.965 + whereShouldv1Be * 0.035;\n\n\n    // final deformation step\n    tfV0musicDisplaced = offsetVertexMusic(tfV0displaced, v0);\n    tfV1musicDisplaced = offsetVertexMusic(tfV1displaced, v1);\n\n    \n    \n\n    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO POINTSTF.JS */\n    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO POINTSTF.JS */\n    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO POINTSTF.JS */\n\n    tfFx = fx;\t\n\n\n\n\n\n\n\n\n\n\n\n    /**\n     * lines closer to the attractor will be more reddish\n     */\n    float colorMult = (length(mouseVelocity.xy) * 10.0 + 1.0);\n    float redComp   = 0.1 + \n    \n    pow(                                                         //  vvv radius which shows the effect \n        clamp(1.0 - (unusedAttractDistanceV0 / (sphereCircleLength * 0.4)), 0.0, 1.0)\n    , 0.9) * 0.85;\n\n\n\n\n    // tfColor = vec4(redComp * colorMult * 1.5, 0.1 * colorMult, 0.1 * colorMult * 2.0, 0);\n    tfColor = " + shaderPart_colors_TFlineAttractor + "    \n\n\n\n\n\n\n\n    /**\n     * \n     * animate line shatter \n     * \n     */\n\n    // the transform feedback will be responsible for color changes, opacity, angle of rotation and angular velocity\n\n    float distancev0v1 = length(v0musicDisplaced.xyz - v1musicDisplaced.xyz);\n    \n    if(distancev0v1 > maxDistance) {\n    \n        tfColor = " + shaderPart_colors_TFlineShatter + "    \n\n\n        float angularVelocity = tfFx.z;\n        float angleRotation   = tfFx.y;\n\n\n        if(angularVelocity == 0.0) { \n            angularVelocity = 0.06;\n            tfFx.y = 0.0; \n            tfFx.w = 1.0; \n        }\n\n\n        tfFx.z  = angularVelocity * 0.995; \n        tfFx.y  = angleRotation + tfFx.z; \n        tfFx.w  = tfFx.w * 0.99;\n\n        return;\n    } \n\n\n    // put lines back togheter if we got there, since they're close togheter    \n    \n    tfFx.z  = 0.0;     // reset angular velocity \n    tfFx.y  *= 0.93;   // slowly rerotate the lines back into place\n    tfFx.w  = min(tfFx.w + uDeltaTime, 1.0);\n}";

var icolinesTFf = "#version 300 es\nprecision mediump float;\n\nout vec4 FragColor;\n\nvoid main() {\n    FragColor = vec4(0);\n}";
"use strict";

var icolinesv = "#version 300 es\nlayout(location = 0) in vec4 v0;\nlayout(location = 1) in vec4 v1;\nlayout(location = 2) in vec4 v0displaced;\nlayout(location = 3) in vec4 v1displaced;\nlayout(location = 4) in vec4 v0musicDisplaced;\nlayout(location = 5) in vec4 v1musicDisplaced;\nlayout(location = 6) in vec4 mouseVelocity;\nlayout(location = 7) in vec4 fx;\nlayout(location = 8) in vec4 color;\n\nuniform mat4 projection;\nuniform mat4 model;\nuniform mat4 view;  \n\nout vec4 Color;\n\n\n" + shaderPart_maxDistance + "\n\n\n" + shaderPart_general + "\n" + shaderPart_hash3 + "\n" + shaderPart_rotMatrix + "\n\n\n\nvec4 rotateVertex(float distancev0v1, float maxDistance) {\n    float isTheRightVertex = fx.x;\n\n    vec4 v0subv1 = v0musicDisplaced - v1musicDisplaced;\n    vec4 v0midv1 = (v0musicDisplaced + v1musicDisplaced) / 2.0;\n\n\n    float angularRotation = fx.y;\n\n     \n    vec4 centered = (v0subv1) * 0.5;\n    centered = rotationMatrix(normalize(hash3(v0.xy + v1.xy * 0.376 + angularRotation * 0.000000001)), angularRotation) * centered;\n    centered *= 1.0 / (distancev0v1 / maxDistance);\n    centered += v0midv1;\n\n    return centered;\n}\n\n\nvoid main() {\t\n    vec4 finalPos = v0musicDisplaced;\t\n\n\n\n    float globalLineAlpha = 0.15 + length(mouseVelocity.xy) * 0.001;\n\n\n\n    Color.xyz = color.xyz;\n    Color.a   = fx.w * 0.5 * globalLineAlpha;\n\n    float saveTheAttributes = mouseVelocity.x + v0displaced.x + v1displaced.x;\n\n\n    float distancev0v1 = length(v0musicDisplaced.xyz - v1musicDisplaced.xyz);\n\n    // animate line shatter\n    if(distancev0v1 > maxDistance) {\n        finalPos = rotateVertex(distancev0v1, maxDistance);\n        Color.a   = fx.w * 0.65 * globalLineAlpha;\n    } else {\n        finalPos = rotateVertex(distancev0v1, distancev0v1);        \n    }\n\n    gl_Position = projection * view * model * vec4(finalPos.xyz, 1.0);\n}";

var icolinesf = "#version 300 es\nprecision mediump float;\n\nin vec4 Color;\n\nout vec4 FragColor;\n\nvoid main() {\n\tFragColor = Color;\n}";
"use strict";

function generate_icosahedron_wlines() {
    var t = 1.61803399;

    var vertices = [[-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0], [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t], [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]];

    // the hash property will return the index of the vertex in vertices
    var verticeshashtable = {};
    for (var i = 0; i < vertices.length; i++) {
        var hash = strhash("x" + vertices[i][0] + "y" + vertices[i][1] + "z" + vertices[i][2]);
        verticeshashtable[hash] = i;
    }

    var triangles = [[0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11], [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8], [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9], [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]];

    var newVertices = [];
    var newTriangles = [];
    var recursions = 5;
    for (var i = 0; i < recursions; i++) {
        for (var j = 0; j < triangles.length; j++) {

            var v0 = vertices[triangles[j][0]];
            var v1 = vertices[triangles[j][1]];
            var v2 = vertices[triangles[j][2]];

            if (v0[2] > 0.5) continue;

            // v0[2] = -1;
            // v1[2] = -1;
            // v2[2] = -1;

            // v0[0] *= 2;            
            // v0[1] *= 2;
            // v1[0] *= 2;            
            // v1[1] *= 2;
            // v2[0] *= 2;            
            // v2[1] *= 2;

            var midpointv0v1 = [(v0[0] + v1[0]) * 0.5, (v0[1] + v1[1]) * 0.5, (v0[2] + v1[2]) * 0.5];
            var midpointv0v2 = [(v0[0] + v2[0]) * 0.5, (v0[1] + v2[1]) * 0.5, (v0[2] + v2[2]) * 0.5];
            var midpointv1v2 = [(v1[0] + v2[0]) * 0.5, (v1[1] + v2[1]) * 0.5, (v1[2] + v2[2]) * 0.5];

            // TODO: the hashing function is slow. find something else 
            var hash1 = strhash("x" + midpointv0v1[0] + "y" + midpointv0v1[1] + "z" + midpointv0v1[2]);
            if (verticeshashtable[hash1] === undefined) {
                vertices.push(midpointv0v1);
                verticeshashtable[hash1] = vertices.length - 1;
            }

            var hash2 = strhash("x" + midpointv0v2[0] + "y" + midpointv0v2[1] + "z" + midpointv0v2[2]);
            if (verticeshashtable[hash2] === undefined) {
                vertices.push(midpointv0v2);
                verticeshashtable[hash2] = vertices.length - 1;
            }

            var hash3 = strhash("x" + midpointv1v2[0] + "y" + midpointv1v2[1] + "z" + midpointv1v2[2]);
            if (verticeshashtable[hash3] === undefined) {
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

            newTriangles.push([triangles[j][0], mid01index, mid02index]);
            newTriangles.push([mid01index, triangles[j][1], mid12index]);
            newTriangles.push([mid02index, mid12index, triangles[j][2]]);
            newTriangles.push([mid01index, mid02index, mid12index]);
        }

        triangles = newTriangles;
        newTriangles = [];
    }

    pushVerticesOnSphereBoundaries(vertices);

    var hashAline = function hashAline(v0, v1) {
        // var hash  = "" + strhash("x"  + v0[0] + "y"  + v0[1] + "z"  + v0[2] +
        //                          "x1" + v1[0] + "y1" + v1[1] + "z1" + v1[2]);

        var hash = "" + strhash("x" + (v0[0] + v1[0]) + "y" + (v0[1] + v1[1]) + "z" + (v0[2] + v1[2]));

        if (linesHashTable[hash] === undefined) {
            linesBuffer.push(v0[0], v0[1], v0[2], 0, // v0
            v1[0], v1[1], v1[2], 0, // v1
            v0[0], v0[1], v0[2], 0, // v0displacement - initially set to original pos
            v1[0], v1[1], v1[2], 0, // v0displacement - initially set to original pos
            0, 0, 0, 0, 0, 0, 0, 0, // v0 & v1 musicDisplacement
            0, 0, 0, 0, // mouseVelocity
            0, 0, 0, 0, // fx       fx.x indicates if it's the first or second vertex
            1, 0, 0, 0, // color


            v1[0], v1[1], v1[2], 0, v0[0], v0[1], v0[2], 0, v1[0], v1[1], v1[2], 0, v0[0], v0[1], v0[2], 0, 0, 0, 0, 0, 0, 0, 0, 0, // v0 & v1 musicDisplacement                                    
            0, 0, 0, 0, // mouseVelocity                                    
            1, 0, 0, 0, // fx.x indicates this is the second vertex of the line
            1, 0, 0, 0);

            linesHashTable[hash] = 1;
        }
    };

    var linesBuffer = [];
    var linesHashTable = {};
    // for all triangles, compute lines
    for (var i = 0; i < triangles.length; i++) {
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
    for (var i = 0; i < vertices.length; i++) {

        // if(i % 9 !== 0) continue;

        verticesBuffer.push(vertices[i][0], vertices[i][1], vertices[i][2], i, vertices[i][0], vertices[i][1], vertices[i][2], i, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

        /* enable points gone wild */
        if (i == vertices.length - 1) continue;
        for (var j = 0; j < 35; j++) {
            var t0 = j / 5 + 1 / 5;
            var t1 = 1 - t0;

            // t0 *= 0.6;
            // t1 *= 0.6;

            var x = vertices[i][0] * t0 + vertices[i + 1][0] * t1;
            var y = vertices[i][1] * t0 + vertices[i + 1][1] * t1;
            var z = vertices[i][2] * t0 + vertices[i + 1][2] * t1;

            verticesBuffer.push(x, y, z, i, x, y, z, i, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0); // fx2.x tells us if this is a hidden vertex

            if (j < 13) {
                bloomVerticesBuffer.push(x, y, z, i, x, y, z, i, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0); // fx2.x tells us if this is a hidden vertex
            }
        }
        /* enable points gone wild - END*/
    }

    return {
        vertices: vertices,
        bloomVerticesBuffer: bloomVerticesBuffer,
        verticesBuffer: verticesBuffer,
        linesBuffer: linesBuffer,
        nVerts: verticesBuffer.length / 24,
        nBloomVerts: bloomVerticesBuffer.length / 24,
        nLinesVerts: nLinesVerts
    };
}

function pushVerticesOnSphereBoundaries(vertices) {
    for (var i = 0, l = vertices.length; i < l; i++) {
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
"use strict";

function MusicBox(filepath) {

    var floatTimeDomainDataArray = void 0;
    var musicBoxReady = void 0;
    function initBackgroundMusic(buffer) {

        var bufferLength = 128;
        floatTimeDomainDataArray = new Float32Array(bufferLength);
        for (var i = 0; i < bufferLength; i++) {
            floatTimeDomainDataArray[i] = -140;
        }createVisualizerTextureData();

        musicBoxReady = true;
    }
    initBackgroundMusic();

    var visualizerTexture;
    function createVisualizerTextureData() {
        visualizerTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, visualizerTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.R32F, floatTimeDomainDataArray.length, 1, 0, gl.RED, gl.FLOAT, floatTimeDomainDataArray);

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.bindTexture(gl.TEXTURE_2D, null);
    }

    /*   public members   */
    this.updateVisualizerTextureData = function (deltatime) {
        if (!musicBoxReady) return;

        // // musicAnalyser.getFloatTimeDomainData(floatTimeDomainDataArray); 
        // musicAnalyser.getFloatFrequencyData(floatTimeDomainDataArray); 

        // gl.bindTexture(gl.TEXTURE_2D, visualizerTexture);
        // gl.texImage2D(gl.TEXTURE_2D, 0, gl.R32F, floatTimeDomainDataArray.length, 1, 0, gl.RED, gl.FLOAT, floatTimeDomainDataArray);
        // gl.bindTexture(gl.TEXTURE_2D, null);
    };

    this.getVisualizerTexture = function () {
        return visualizerTexture;
    };

    this.start = function () {};
}
"use strict";

window.addEventListener("load", init);
window.addEventListener("resize", onResize);

function init() {
    // initTypography();
    // initRateStars();
    // initMenu();

    // lazyloadImages();

    onResize();
}

function onResize() {
    canvasResize();
    // footerResize();
}