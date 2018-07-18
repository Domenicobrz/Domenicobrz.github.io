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


function createCamera()
{
    /*	functions	*/
    this.getViewMatrix = getViewMatrix;
    this.camera_keydown = camera_keydown;
    this.camera_keyup = camera_keyup;
    this.camera_mousemove = camera_mousemove;
    this.camera_mousedown = camera_mousedown;
    this.camera_mouseup = camera_mouseup;

    this.camera_touchdown = camera_touchdown;
    this.camera_touchup   = camera_touchup;
    this.camera_touchmove = camera_touchmove;



	this.pos = vec3.fromValues(0, 0, 0);
	this.up = vec3.fromValues(0, 1, 0);
	this.front = vec3.fromValues(0, 0, -1);
	this.frontCross = vec3.fromValues(0, 0, 0);
	this.dir = vec3.fromValues(0, 0, 0);


	/*	optional args	*/
	this.speed = 5.0;



	//to use the autocentered view specify
	//autocentered as true
	//where to look with 			this.look
	//and a radius distance with 	this.radius
	this.autoCentered = false;
	this.autoRotate = false;
	this.autoRotateSpeed = 3.0; //degree/sec
	this.radius = 3.0;			
	this.look = [0,0,0];
	this.mousecontrols = true;	
	this.depth_of_field_transform_count = 0;	








	this.lookAt = mat4.create();
	this.yaw = -3.14/2;	//-90 e sai perchè
	this.pitch = 0;
	this.deltaRot = [0.0, 0.0];
	this.lastPos = [null, null];

	this.dragging = false;
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




	if(this.mousecontrols)	{
		// window.addEventListener("keydown", this.camera_keydown.bind(this));
		// window.addEventListener("keyup", this.camera_keyup.bind(this));
		// document.getElementById('canvas').addEventListener("mousemove", this.camera_mousemove.bind(this));
		// document.getElementById('canvas').addEventListener("mousedown", this.camera_mousedown.bind(this));
		// window.addEventListener("mouseup", this.camera_mouseup.bind(this));


		// document.getElementById('canvas').addEventListener("touchstart", this.camera_touchdown.bind(this));
		// document.getElementById('canvas').addEventListener("touchmove", this.camera_touchmove.bind(this));
		// window.addEventListener("touchend", this.camera_touchup.bind(this));
		// //window.addEventListener('mousewheel', this.camera_zoom.bind(this));
    	// // For Firefox
    	// window.addEventListener('DOMMouseScroll', this.camera_zoom.bind(this));
	}
}

function getViewMatrix(deltatime, smoothness)
{
	//smooths agains frameskipping
	if(this.smoothDeltaTimeCheck && deltatime <= 0.03333)
	{
		if(deltatime < 0.010)
		{ }
		else
			deltatime = 0.016;
	}


	if(this.autoCentered)
	{
		return camera_getAutocenteredViewMatrix.call(this, deltatime, smoothness, this.radius);
	}

	
	
	if(this.pressedKeys.w || this.pressedKeys.ua) {
		this.pos[0] += deltatime * this.speed * this.front[0];
		this.pos[1] += deltatime * this.speed * this.front[1];
		this.pos[2] += deltatime * this.speed * this.front[2];
	}
	if(this.pressedKeys.s || this.pressedKeys.da) {
		this.pos[0] -= deltatime * this.speed * this.front[0];
		this.pos[1] -= deltatime * this.speed * this.front[1];
		this.pos[2] -= deltatime * this.speed * this.front[2];
	}
	if(this.pressedKeys.d || this.pressedKeys.ra) {
		this.frontCross = vec3.cross(this.frontCross, this.front, this.up);
		vec3.normalize(this.frontCross, this.frontCross);
		this.pos[0] += deltatime * this.speed * this.frontCross[0];
		this.pos[1] += deltatime * this.speed * this.frontCross[1];
		this.pos[2] += deltatime * this.speed * this.frontCross[2];
	}
	if(this.pressedKeys.a || this.pressedKeys.la) {
		this.frontCross = vec3.cross(this.frontCross, this.front, this.up);
		vec3.normalize(this.frontCross, this.frontCross);
		this.pos[0] -= deltatime * this.speed * this.frontCross[0];
		this.pos[1] -= deltatime * this.speed * this.frontCross[1];
		this.pos[2] -= deltatime * this.speed * this.frontCross[2];
	}
	if(this.pressedKeys.space) {
		this.pos[0] += deltatime * this.speed * this.up[0];
		this.pos[1] += deltatime * this.speed * this.up[1];
		this.pos[2] += deltatime * this.speed * this.up[2];
	}
	if(this.pressedKeys.shift) {
		this.pos[0] -= deltatime * this.speed * this.up[0];
		this.pos[1] -= deltatime * this.speed * this.up[1];
		this.pos[2] -= deltatime * this.speed * this.up[2];
	}





	this.yaw   += this.deltaRot[0] * smoothness;
    this.pitch -= this.deltaRot[1] * smoothness;

    this.deltaRot[0] -= this.deltaRot[0] * smoothness;
    this.deltaRot[1] -= this.deltaRot[1] * smoothness;

    if(this.pitch > 3.13/2)  this.pitch = 3.13/2;
    if(this.pitch < -3.13/2) this.pitch = -3.13/2;

    this.front[0] = Math.cos(this.yaw) * Math.cos(this.pitch);
    this.front[1] = Math.sin(this.pitch);
    this.front[2] = Math.sin(this.yaw) * Math.cos(this.pitch);
    vec3.normalize(this.front, this.front);








    this.dir[0] = this.pos[0] + this.front[0];
	this.dir[1] = this.pos[1] + this.front[1];
	this.dir[2] = this.pos[2] + this.front[2];
    mat4.lookAt(this.lookAt, this.pos, this.dir, this.up);
	return this.lookAt;
}

function camera_keydown(e)
{
	switch(e.keyCode)	{
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

function camera_keyup(e)
{
	switch(e.keyCode)	{
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

function camera_mousemove(e)
{
	if(!this.dragging) return;

	//sta telecamera va fatta col click, non è un fps
	this.deltaRot[0] += (e.clientX - this.lastPos[0]) * this.rotationSensitivity;
	this.deltaRot[1] += (e.clientY - this.lastPos[1]) * this.rotationSensitivity;


	this.lastPos[0] = e.clientX;
	this.lastPos[1] = e.clientY;
}

function camera_touchmove(e)
{
	if(!this.dragging) return;

	//sta telecamera va fatta col click, non è un fps
	this.deltaRot[0] += (e.touches[0].clientX - this.lastPos[0]) * this.rotationSensitivity;
	this.deltaRot[1] += (e.touches[0].clientY - this.lastPos[1]) * this.rotationSensitivity;


	this.lastPos[0] = e.touches[0].clientX;
	this.lastPos[1] = e.touches[0].clientY;
}


function camera_mousedown(e)
{
	if(e.which != 1) return;
	this.lastPos[0] = e.clientX;
	this.lastPos[1] = e.clientY;
	this.dragging = true;
}

function camera_mouseup(e)
{
	this.dragging = false;
}

function camera_touchdown(e)
{
	this.lastPos[0] = e.touches[0].clientX;
	this.lastPos[1] = e.touches[0].clientY;
	this.dragging = true;
}

function camera_touchup(e)
{
	this.dragging = false;
}








//v1.00     -   basic functions
//v1.02		-	autocentered Camera
//v1.03		-	basic autoRotate
//v1.04 	- 	getAutoCenteredViewMatrix has depth of field capabilities
//v1.05		-	works on cellphones
/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.3.2
 */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

!function(t,a){if("object"==typeof exports&&"object"==typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define(a);else{var n=a();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(this,function(){return function(t){function a(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}var n={};return a.m=t,a.c=n,a.p="",a(0)}([function(t,a,n){a.glMatrix=n(1),a.mat2=n(2),a.mat2d=n(3),a.mat3=n(4),a.mat4=n(5),a.quat=n(6),a.vec2=n(9),a.vec3=n(7),a.vec4=n(8)},function(t,a){var n={};n.EPSILON=1e-6,n.ARRAY_TYPE="undefined"!=typeof Float32Array?Float32Array:Array,n.RANDOM=Math.random,n.ENABLE_SIMD=!1,n.SIMD_AVAILABLE=n.ARRAY_TYPE===Float32Array&&"SIMD"in this,n.USE_SIMD=n.ENABLE_SIMD&&n.SIMD_AVAILABLE,n.setMatrixArrayType=function(t){n.ARRAY_TYPE=t};var r=Math.PI/180;n.toRadian=function(t){return t*r},t.exports=n},function(t,a,n){var r=n(1),o={};o.create=function(){var t=new r.ARRAY_TYPE(4);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},o.clone=function(t){var a=new r.ARRAY_TYPE(4);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a},o.copy=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t},o.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},o.transpose=function(t,a){if(t===a){var n=a[1];t[1]=a[2],t[2]=n}else t[0]=a[0],t[1]=a[2],t[2]=a[1],t[3]=a[3];return t},o.invert=function(t,a){var n=a[0],r=a[1],o=a[2],l=a[3],u=n*l-o*r;return u?(u=1/u,t[0]=l*u,t[1]=-r*u,t[2]=-o*u,t[3]=n*u,t):null},o.adjoint=function(t,a){var n=a[0];return t[0]=a[3],t[1]=-a[1],t[2]=-a[2],t[3]=n,t},o.determinant=function(t){return t[0]*t[3]-t[2]*t[1]},o.multiply=function(t,a,n){var r=a[0],o=a[1],l=a[2],u=a[3],e=n[0],M=n[1],i=n[2],s=n[3];return t[0]=r*e+l*M,t[1]=o*e+u*M,t[2]=r*i+l*s,t[3]=o*i+u*s,t},o.mul=o.multiply,o.rotate=function(t,a,n){var r=a[0],o=a[1],l=a[2],u=a[3],e=Math.sin(n),M=Math.cos(n);return t[0]=r*M+l*e,t[1]=o*M+u*e,t[2]=r*-e+l*M,t[3]=o*-e+u*M,t},o.scale=function(t,a,n){var r=a[0],o=a[1],l=a[2],u=a[3],e=n[0],M=n[1];return t[0]=r*e,t[1]=o*e,t[2]=l*M,t[3]=u*M,t},o.fromRotation=function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=n,t[2]=-n,t[3]=r,t},o.fromScaling=function(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=a[1],t},o.str=function(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},o.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2))},o.LDU=function(t,a,n,r){return t[2]=r[2]/r[0],n[0]=r[0],n[1]=r[1],n[3]=r[3]-t[2]*n[1],[t,a,n]},t.exports=o},function(t,a,n){var r=n(1),o={};o.create=function(){var t=new r.ARRAY_TYPE(6);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},o.clone=function(t){var a=new r.ARRAY_TYPE(6);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a},o.copy=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t},o.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},o.invert=function(t,a){var n=a[0],r=a[1],o=a[2],l=a[3],u=a[4],e=a[5],M=n*l-r*o;return M?(M=1/M,t[0]=l*M,t[1]=-r*M,t[2]=-o*M,t[3]=n*M,t[4]=(o*e-l*u)*M,t[5]=(r*u-n*e)*M,t):null},o.determinant=function(t){return t[0]*t[3]-t[1]*t[2]},o.multiply=function(t,a,n){var r=a[0],o=a[1],l=a[2],u=a[3],e=a[4],M=a[5],i=n[0],s=n[1],c=n[2],D=n[3],S=n[4],I=n[5];return t[0]=r*i+l*s,t[1]=o*i+u*s,t[2]=r*c+l*D,t[3]=o*c+u*D,t[4]=r*S+l*I+e,t[5]=o*S+u*I+M,t},o.mul=o.multiply,o.rotate=function(t,a,n){var r=a[0],o=a[1],l=a[2],u=a[3],e=a[4],M=a[5],i=Math.sin(n),s=Math.cos(n);return t[0]=r*s+l*i,t[1]=o*s+u*i,t[2]=r*-i+l*s,t[3]=o*-i+u*s,t[4]=e,t[5]=M,t},o.scale=function(t,a,n){var r=a[0],o=a[1],l=a[2],u=a[3],e=a[4],M=a[5],i=n[0],s=n[1];return t[0]=r*i,t[1]=o*i,t[2]=l*s,t[3]=u*s,t[4]=e,t[5]=M,t},o.translate=function(t,a,n){var r=a[0],o=a[1],l=a[2],u=a[3],e=a[4],M=a[5],i=n[0],s=n[1];return t[0]=r,t[1]=o,t[2]=l,t[3]=u,t[4]=r*i+l*s+e,t[5]=o*i+u*s+M,t},o.fromRotation=function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=n,t[2]=-n,t[3]=r,t[4]=0,t[5]=0,t},o.fromScaling=function(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=a[1],t[4]=0,t[5]=0,t},o.fromTranslation=function(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=a[0],t[5]=a[1],t},o.str=function(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"},o.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+1)},t.exports=o},function(t,a,n){var r=n(1),o={};o.create=function(){var t=new r.ARRAY_TYPE(9);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},o.fromMat4=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[4],t[4]=a[5],t[5]=a[6],t[6]=a[8],t[7]=a[9],t[8]=a[10],t},o.clone=function(t){var a=new r.ARRAY_TYPE(9);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a},o.copy=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t},o.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},o.transpose=function(t,a){if(t===a){var n=a[1],r=a[2],o=a[5];t[1]=a[3],t[2]=a[6],t[3]=n,t[5]=a[7],t[6]=r,t[7]=o}else t[0]=a[0],t[1]=a[3],t[2]=a[6],t[3]=a[1],t[4]=a[4],t[5]=a[7],t[6]=a[2],t[7]=a[5],t[8]=a[8];return t},o.invert=function(t,a){var n=a[0],r=a[1],o=a[2],l=a[3],u=a[4],e=a[5],M=a[6],i=a[7],s=a[8],c=s*u-e*i,D=-s*l+e*M,S=i*l-u*M,I=n*c+r*D+o*S;return I?(I=1/I,t[0]=c*I,t[1]=(-s*r+o*i)*I,t[2]=(e*r-o*u)*I,t[3]=D*I,t[4]=(s*n-o*M)*I,t[5]=(-e*n+o*l)*I,t[6]=S*I,t[7]=(-i*n+r*M)*I,t[8]=(u*n-r*l)*I,t):null},o.adjoint=function(t,a){var n=a[0],r=a[1],o=a[2],l=a[3],u=a[4],e=a[5],M=a[6],i=a[7],s=a[8];return t[0]=u*s-e*i,t[1]=o*i-r*s,t[2]=r*e-o*u,t[3]=e*M-l*s,t[4]=n*s-o*M,t[5]=o*l-n*e,t[6]=l*i-u*M,t[7]=r*M-n*i,t[8]=n*u-r*l,t},o.determinant=function(t){var a=t[0],n=t[1],r=t[2],o=t[3],l=t[4],u=t[5],e=t[6],M=t[7],i=t[8];return a*(i*l-u*M)+n*(-i*o+u*e)+r*(M*o-l*e)},o.multiply=function(t,a,n){var r=a[0],o=a[1],l=a[2],u=a[3],e=a[4],M=a[5],i=a[6],s=a[7],c=a[8],D=n[0],S=n[1],I=n[2],x=n[3],f=n[4],F=n[5],m=n[6],h=n[7],d=n[8];return t[0]=D*r+S*u+I*i,t[1]=D*o+S*e+I*s,t[2]=D*l+S*M+I*c,t[3]=x*r+f*u+F*i,t[4]=x*o+f*e+F*s,t[5]=x*l+f*M+F*c,t[6]=m*r+h*u+d*i,t[7]=m*o+h*e+d*s,t[8]=m*l+h*M+d*c,t},o.mul=o.multiply,o.translate=function(t,a,n){var r=a[0],o=a[1],l=a[2],u=a[3],e=a[4],M=a[5],i=a[6],s=a[7],c=a[8],D=n[0],S=n[1];return t[0]=r,t[1]=o,t[2]=l,t[3]=u,t[4]=e,t[5]=M,t[6]=D*r+S*u+i,t[7]=D*o+S*e+s,t[8]=D*l+S*M+c,t},o.rotate=function(t,a,n){var r=a[0],o=a[1],l=a[2],u=a[3],e=a[4],M=a[5],i=a[6],s=a[7],c=a[8],D=Math.sin(n),S=Math.cos(n);return t[0]=S*r+D*u,t[1]=S*o+D*e,t[2]=S*l+D*M,t[3]=S*u-D*r,t[4]=S*e-D*o,t[5]=S*M-D*l,t[6]=i,t[7]=s,t[8]=c,t},o.scale=function(t,a,n){var r=n[0],o=n[1];return t[0]=r*a[0],t[1]=r*a[1],t[2]=r*a[2],t[3]=o*a[3],t[4]=o*a[4],t[5]=o*a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t},o.fromTranslation=function(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=a[0],t[7]=a[1],t[8]=1,t},o.fromRotation=function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=n,t[2]=0,t[3]=-n,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},o.fromScaling=function(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=0,t[4]=a[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},o.fromMat2d=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=0,t[3]=a[2],t[4]=a[3],t[5]=0,t[6]=a[4],t[7]=a[5],t[8]=1,t},o.fromQuat=function(t,a){var n=a[0],r=a[1],o=a[2],l=a[3],u=n+n,e=r+r,M=o+o,i=n*u,s=r*u,c=r*e,D=o*u,S=o*e,I=o*M,x=l*u,f=l*e,F=l*M;return t[0]=1-c-I,t[3]=s-F,t[6]=D+f,t[1]=s+F,t[4]=1-i-I,t[7]=S-x,t[2]=D-f,t[5]=S+x,t[8]=1-i-c,t},o.normalFromMat4=function(t,a){var n=a[0],r=a[1],o=a[2],l=a[3],u=a[4],e=a[5],M=a[6],i=a[7],s=a[8],c=a[9],D=a[10],S=a[11],I=a[12],x=a[13],f=a[14],F=a[15],m=n*e-r*u,h=n*M-o*u,d=n*i-l*u,v=r*M-o*e,z=r*i-l*e,p=o*i-l*M,w=s*x-c*I,A=s*f-D*I,R=s*F-S*I,b=c*f-D*x,Y=c*F-S*x,q=D*F-S*f,y=m*q-h*Y+d*b+v*R-z*A+p*w;return y?(y=1/y,t[0]=(e*q-M*Y+i*b)*y,t[1]=(M*R-u*q-i*A)*y,t[2]=(u*Y-e*R+i*w)*y,t[3]=(o*Y-r*q-l*b)*y,t[4]=(n*q-o*R+l*A)*y,t[5]=(r*R-n*Y-l*w)*y,t[6]=(x*p-f*z+F*v)*y,t[7]=(f*d-I*p-F*h)*y,t[8]=(I*z-x*d+F*m)*y,t):null},o.str=function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"},o.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2))},t.exports=o},function(t,a,n){var r=n(1),o={scalar:{},SIMD:{}};o.create=function(){var t=new r.ARRAY_TYPE(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},o.clone=function(t){var a=new r.ARRAY_TYPE(16);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=t[11],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a},o.copy=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t},o.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},o.scalar.transpose=function(t,a){if(t===a){var n=a[1],r=a[2],o=a[3],l=a[6],u=a[7],e=a[11];t[1]=a[4],t[2]=a[8],t[3]=a[12],t[4]=n,t[6]=a[9],t[7]=a[13],t[8]=r,t[9]=l,t[11]=a[14],t[12]=o,t[13]=u,t[14]=e}else t[0]=a[0],t[1]=a[4],t[2]=a[8],t[3]=a[12],t[4]=a[1],t[5]=a[5],t[6]=a[9],t[7]=a[13],t[8]=a[2],t[9]=a[6],t[10]=a[10],t[11]=a[14],t[12]=a[3],t[13]=a[7],t[14]=a[11],t[15]=a[15];return t},o.SIMD.transpose=function(t,a){var n,r,o,l,u,e,M,i,s,c;return n=SIMD.Float32x4.load(a,0),r=SIMD.Float32x4.load(a,4),o=SIMD.Float32x4.load(a,8),l=SIMD.Float32x4.load(a,12),u=SIMD.Float32x4.shuffle(n,r,0,1,4,5),e=SIMD.Float32x4.shuffle(o,l,0,1,4,5),M=SIMD.Float32x4.shuffle(u,e,0,2,4,6),i=SIMD.Float32x4.shuffle(u,e,1,3,5,7),SIMD.Float32x4.store(t,0,M),SIMD.Float32x4.store(t,4,i),u=SIMD.Float32x4.shuffle(n,r,2,3,6,7),e=SIMD.Float32x4.shuffle(o,l,2,3,6,7),s=SIMD.Float32x4.shuffle(u,e,0,2,4,6),c=SIMD.Float32x4.shuffle(u,e,1,3,5,7),SIMD.Float32x4.store(t,8,s),SIMD.Float32x4.store(t,12,c),t},o.transpose=r.USE_SIMD?o.SIMD.transpose:o.scalar.transpose,o.scalar.invert=function(t,a){var n=a[0],r=a[1],o=a[2],l=a[3],u=a[4],e=a[5],M=a[6],i=a[7],s=a[8],c=a[9],D=a[10],S=a[11],I=a[12],x=a[13],f=a[14],F=a[15],m=n*e-r*u,h=n*M-o*u,d=n*i-l*u,v=r*M-o*e,z=r*i-l*e,p=o*i-l*M,w=s*x-c*I,A=s*f-D*I,R=s*F-S*I,b=c*f-D*x,Y=c*F-S*x,q=D*F-S*f,y=m*q-h*Y+d*b+v*R-z*A+p*w;return y?(y=1/y,t[0]=(e*q-M*Y+i*b)*y,t[1]=(o*Y-r*q-l*b)*y,t[2]=(x*p-f*z+F*v)*y,t[3]=(D*z-c*p-S*v)*y,t[4]=(M*R-u*q-i*A)*y,t[5]=(n*q-o*R+l*A)*y,t[6]=(f*d-I*p-F*h)*y,t[7]=(s*p-D*d+S*h)*y,t[8]=(u*Y-e*R+i*w)*y,t[9]=(r*R-n*Y-l*w)*y,t[10]=(I*z-x*d+F*m)*y,t[11]=(c*d-s*z-S*m)*y,t[12]=(e*A-u*b-M*w)*y,t[13]=(n*b-r*A+o*w)*y,t[14]=(x*h-I*v-f*m)*y,t[15]=(s*v-c*h+D*m)*y,t):null},o.SIMD.invert=function(t,a){var n,r,o,l,u,e,M,i,s,c,D=SIMD.Float32x4.load(a,0),S=SIMD.Float32x4.load(a,4),I=SIMD.Float32x4.load(a,8),x=SIMD.Float32x4.load(a,12);return u=SIMD.Float32x4.shuffle(D,S,0,1,4,5),r=SIMD.Float32x4.shuffle(I,x,0,1,4,5),n=SIMD.Float32x4.shuffle(u,r,0,2,4,6),r=SIMD.Float32x4.shuffle(r,u,1,3,5,7),u=SIMD.Float32x4.shuffle(D,S,2,3,6,7),l=SIMD.Float32x4.shuffle(I,x,2,3,6,7),o=SIMD.Float32x4.shuffle(u,l,0,2,4,6),l=SIMD.Float32x4.shuffle(l,u,1,3,5,7),u=SIMD.Float32x4.mul(o,l),u=SIMD.Float32x4.swizzle(u,1,0,3,2),e=SIMD.Float32x4.mul(r,u),M=SIMD.Float32x4.mul(n,u),u=SIMD.Float32x4.swizzle(u,2,3,0,1),e=SIMD.Float32x4.sub(SIMD.Float32x4.mul(r,u),e),M=SIMD.Float32x4.sub(SIMD.Float32x4.mul(n,u),M),M=SIMD.Float32x4.swizzle(M,2,3,0,1),u=SIMD.Float32x4.mul(r,o),u=SIMD.Float32x4.swizzle(u,1,0,3,2),e=SIMD.Float32x4.add(SIMD.Float32x4.mul(l,u),e),s=SIMD.Float32x4.mul(n,u),u=SIMD.Float32x4.swizzle(u,2,3,0,1),e=SIMD.Float32x4.sub(e,SIMD.Float32x4.mul(l,u)),s=SIMD.Float32x4.sub(SIMD.Float32x4.mul(n,u),s),s=SIMD.Float32x4.swizzle(s,2,3,0,1),u=SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(r,2,3,0,1),l),u=SIMD.Float32x4.swizzle(u,1,0,3,2),o=SIMD.Float32x4.swizzle(o,2,3,0,1),e=SIMD.Float32x4.add(SIMD.Float32x4.mul(o,u),e),i=SIMD.Float32x4.mul(n,u),u=SIMD.Float32x4.swizzle(u,2,3,0,1),e=SIMD.Float32x4.sub(e,SIMD.Float32x4.mul(o,u)),i=SIMD.Float32x4.sub(SIMD.Float32x4.mul(n,u),i),i=SIMD.Float32x4.swizzle(i,2,3,0,1),u=SIMD.Float32x4.mul(n,r),u=SIMD.Float32x4.swizzle(u,1,0,3,2),i=SIMD.Float32x4.add(SIMD.Float32x4.mul(l,u),i),s=SIMD.Float32x4.sub(SIMD.Float32x4.mul(o,u),s),u=SIMD.Float32x4.swizzle(u,2,3,0,1),i=SIMD.Float32x4.sub(SIMD.Float32x4.mul(l,u),i),s=SIMD.Float32x4.sub(s,SIMD.Float32x4.mul(o,u)),u=SIMD.Float32x4.mul(n,l),u=SIMD.Float32x4.swizzle(u,1,0,3,2),M=SIMD.Float32x4.sub(M,SIMD.Float32x4.mul(o,u)),i=SIMD.Float32x4.add(SIMD.Float32x4.mul(r,u),i),u=SIMD.Float32x4.swizzle(u,2,3,0,1),M=SIMD.Float32x4.add(SIMD.Float32x4.mul(o,u),M),i=SIMD.Float32x4.sub(i,SIMD.Float32x4.mul(r,u)),u=SIMD.Float32x4.mul(n,o),u=SIMD.Float32x4.swizzle(u,1,0,3,2),M=SIMD.Float32x4.add(SIMD.Float32x4.mul(l,u),M),s=SIMD.Float32x4.sub(s,SIMD.Float32x4.mul(r,u)),u=SIMD.Float32x4.swizzle(u,2,3,0,1),M=SIMD.Float32x4.sub(M,SIMD.Float32x4.mul(l,u)),s=SIMD.Float32x4.add(SIMD.Float32x4.mul(r,u),s),c=SIMD.Float32x4.mul(n,e),c=SIMD.Float32x4.add(SIMD.Float32x4.swizzle(c,2,3,0,1),c),c=SIMD.Float32x4.add(SIMD.Float32x4.swizzle(c,1,0,3,2),c),u=SIMD.Float32x4.reciprocalApproximation(c),c=SIMD.Float32x4.sub(SIMD.Float32x4.add(u,u),SIMD.Float32x4.mul(c,SIMD.Float32x4.mul(u,u))),(c=SIMD.Float32x4.swizzle(c,0,0,0,0))?(SIMD.Float32x4.store(t,0,SIMD.Float32x4.mul(c,e)),SIMD.Float32x4.store(t,4,SIMD.Float32x4.mul(c,M)),SIMD.Float32x4.store(t,8,SIMD.Float32x4.mul(c,i)),SIMD.Float32x4.store(t,12,SIMD.Float32x4.mul(c,s)),t):null},o.invert=r.USE_SIMD?o.SIMD.invert:o.scalar.invert,o.scalar.adjoint=function(t,a){var n=a[0],r=a[1],o=a[2],l=a[3],u=a[4],e=a[5],M=a[6],i=a[7],s=a[8],c=a[9],D=a[10],S=a[11],I=a[12],x=a[13],f=a[14],F=a[15];return t[0]=e*(D*F-S*f)-c*(M*F-i*f)+x*(M*S-i*D),t[1]=-(r*(D*F-S*f)-c*(o*F-l*f)+x*(o*S-l*D)),t[2]=r*(M*F-i*f)-e*(o*F-l*f)+x*(o*i-l*M),t[3]=-(r*(M*S-i*D)-e*(o*S-l*D)+c*(o*i-l*M)),t[4]=-(u*(D*F-S*f)-s*(M*F-i*f)+I*(M*S-i*D)),t[5]=n*(D*F-S*f)-s*(o*F-l*f)+I*(o*S-l*D),t[6]=-(n*(M*F-i*f)-u*(o*F-l*f)+I*(o*i-l*M)),t[7]=n*(M*S-i*D)-u*(o*S-l*D)+s*(o*i-l*M),t[8]=u*(c*F-S*x)-s*(e*F-i*x)+I*(e*S-i*c),t[9]=-(n*(c*F-S*x)-s*(r*F-l*x)+I*(r*S-l*c)),t[10]=n*(e*F-i*x)-u*(r*F-l*x)+I*(r*i-l*e),t[11]=-(n*(e*S-i*c)-u*(r*S-l*c)+s*(r*i-l*e)),t[12]=-(u*(c*f-D*x)-s*(e*f-M*x)+I*(e*D-M*c)),t[13]=n*(c*f-D*x)-s*(r*f-o*x)+I*(r*D-o*c),t[14]=-(n*(e*f-M*x)-u*(r*f-o*x)+I*(r*M-o*e)),t[15]=n*(e*D-M*c)-u*(r*D-o*c)+s*(r*M-o*e),t},o.SIMD.adjoint=function(t,a){var n,r,o,l,u,e,M,i,s,c,D,S,I,n=SIMD.Float32x4.load(a,0),r=SIMD.Float32x4.load(a,4),o=SIMD.Float32x4.load(a,8),l=SIMD.Float32x4.load(a,12);return s=SIMD.Float32x4.shuffle(n,r,0,1,4,5),e=SIMD.Float32x4.shuffle(o,l,0,1,4,5),u=SIMD.Float32x4.shuffle(s,e,0,2,4,6),e=SIMD.Float32x4.shuffle(e,s,1,3,5,7),s=SIMD.Float32x4.shuffle(n,r,2,3,6,7),i=SIMD.Float32x4.shuffle(o,l,2,3,6,7),M=SIMD.Float32x4.shuffle(s,i,0,2,4,6),i=SIMD.Float32x4.shuffle(i,s,1,3,5,7),s=SIMD.Float32x4.mul(M,i),s=SIMD.Float32x4.swizzle(s,1,0,3,2),c=SIMD.Float32x4.mul(e,s),D=SIMD.Float32x4.mul(u,s),s=SIMD.Float32x4.swizzle(s,2,3,0,1),c=SIMD.Float32x4.sub(SIMD.Float32x4.mul(e,s),c),D=SIMD.Float32x4.sub(SIMD.Float32x4.mul(u,s),D),D=SIMD.Float32x4.swizzle(D,2,3,0,1),s=SIMD.Float32x4.mul(e,M),s=SIMD.Float32x4.swizzle(s,1,0,3,2),c=SIMD.Float32x4.add(SIMD.Float32x4.mul(i,s),c),I=SIMD.Float32x4.mul(u,s),s=SIMD.Float32x4.swizzle(s,2,3,0,1),c=SIMD.Float32x4.sub(c,SIMD.Float32x4.mul(i,s)),I=SIMD.Float32x4.sub(SIMD.Float32x4.mul(u,s),I),I=SIMD.Float32x4.swizzle(I,2,3,0,1),s=SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,2,3,0,1),i),s=SIMD.Float32x4.swizzle(s,1,0,3,2),M=SIMD.Float32x4.swizzle(M,2,3,0,1),c=SIMD.Float32x4.add(SIMD.Float32x4.mul(M,s),c),S=SIMD.Float32x4.mul(u,s),s=SIMD.Float32x4.swizzle(s,2,3,0,1),c=SIMD.Float32x4.sub(c,SIMD.Float32x4.mul(M,s)),S=SIMD.Float32x4.sub(SIMD.Float32x4.mul(u,s),S),S=SIMD.Float32x4.swizzle(S,2,3,0,1),s=SIMD.Float32x4.mul(u,e),s=SIMD.Float32x4.swizzle(s,1,0,3,2),S=SIMD.Float32x4.add(SIMD.Float32x4.mul(i,s),S),I=SIMD.Float32x4.sub(SIMD.Float32x4.mul(M,s),I),s=SIMD.Float32x4.swizzle(s,2,3,0,1),S=SIMD.Float32x4.sub(SIMD.Float32x4.mul(i,s),S),I=SIMD.Float32x4.sub(I,SIMD.Float32x4.mul(M,s)),s=SIMD.Float32x4.mul(u,i),s=SIMD.Float32x4.swizzle(s,1,0,3,2),D=SIMD.Float32x4.sub(D,SIMD.Float32x4.mul(M,s)),S=SIMD.Float32x4.add(SIMD.Float32x4.mul(e,s),S),s=SIMD.Float32x4.swizzle(s,2,3,0,1),D=SIMD.Float32x4.add(SIMD.Float32x4.mul(M,s),D),S=SIMD.Float32x4.sub(S,SIMD.Float32x4.mul(e,s)),s=SIMD.Float32x4.mul(u,M),s=SIMD.Float32x4.swizzle(s,1,0,3,2),D=SIMD.Float32x4.add(SIMD.Float32x4.mul(i,s),D),I=SIMD.Float32x4.sub(I,SIMD.Float32x4.mul(e,s)),s=SIMD.Float32x4.swizzle(s,2,3,0,1),D=SIMD.Float32x4.sub(D,SIMD.Float32x4.mul(i,s)),I=SIMD.Float32x4.add(SIMD.Float32x4.mul(e,s),I),SIMD.Float32x4.store(t,0,c),SIMD.Float32x4.store(t,4,D),SIMD.Float32x4.store(t,8,S),SIMD.Float32x4.store(t,12,I),t},o.adjoint=r.USE_SIMD?o.SIMD.adjoint:o.scalar.adjoint,o.determinant=function(t){var a=t[0],n=t[1],r=t[2],o=t[3],l=t[4],u=t[5],e=t[6],M=t[7],i=t[8],s=t[9],c=t[10],D=t[11],S=t[12],I=t[13],x=t[14],f=t[15],F=a*u-n*l,m=a*e-r*l,h=a*M-o*l,d=n*e-r*u,v=n*M-o*u,z=r*M-o*e,p=i*I-s*S,w=i*x-c*S,A=i*f-D*S,R=s*x-c*I,b=s*f-D*I,Y=c*f-D*x;return F*Y-m*b+h*R+d*A-v*w+z*p},o.SIMD.multiply=function(t,a,n){var r=SIMD.Float32x4.load(a,0),o=SIMD.Float32x4.load(a,4),l=SIMD.Float32x4.load(a,8),u=SIMD.Float32x4.load(a,12),e=SIMD.Float32x4.load(n,0),M=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,0,0,0,0),r),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,1,1,1,1),o),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,2,2,2,2),l),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,3,3,3,3),u))));SIMD.Float32x4.store(t,0,M);var i=SIMD.Float32x4.load(n,4),s=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i,0,0,0,0),r),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i,1,1,1,1),o),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i,2,2,2,2),l),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i,3,3,3,3),u))));SIMD.Float32x4.store(t,4,s);var c=SIMD.Float32x4.load(n,8),D=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c,0,0,0,0),r),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c,1,1,1,1),o),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c,2,2,2,2),l),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c,3,3,3,3),u))));SIMD.Float32x4.store(t,8,D);var S=SIMD.Float32x4.load(n,12),I=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(S,0,0,0,0),r),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(S,1,1,1,1),o),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(S,2,2,2,2),l),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(S,3,3,3,3),u))));return SIMD.Float32x4.store(t,12,I),t},o.scalar.multiply=function(t,a,n){var r=a[0],o=a[1],l=a[2],u=a[3],e=a[4],M=a[5],i=a[6],s=a[7],c=a[8],D=a[9],S=a[10],I=a[11],x=a[12],f=a[13],F=a[14],m=a[15],h=n[0],d=n[1],v=n[2],z=n[3];return t[0]=h*r+d*e+v*c+z*x,t[1]=h*o+d*M+v*D+z*f,t[2]=h*l+d*i+v*S+z*F,t[3]=h*u+d*s+v*I+z*m,h=n[4],d=n[5],v=n[6],z=n[7],t[4]=h*r+d*e+v*c+z*x,t[5]=h*o+d*M+v*D+z*f,t[6]=h*l+d*i+v*S+z*F,t[7]=h*u+d*s+v*I+z*m,h=n[8],d=n[9],v=n[10],z=n[11],t[8]=h*r+d*e+v*c+z*x,t[9]=h*o+d*M+v*D+z*f,t[10]=h*l+d*i+v*S+z*F,t[11]=h*u+d*s+v*I+z*m,h=n[12],d=n[13],v=n[14],z=n[15],t[12]=h*r+d*e+v*c+z*x,t[13]=h*o+d*M+v*D+z*f,t[14]=h*l+d*i+v*S+z*F,t[15]=h*u+d*s+v*I+z*m,t},o.multiply=r.USE_SIMD?o.SIMD.multiply:o.scalar.multiply,o.mul=o.multiply,o.scalar.translate=function(t,a,n){var r,o,l,u,e,M,i,s,c,D,S,I,x=n[0],f=n[1],F=n[2];return a===t?(t[12]=a[0]*x+a[4]*f+a[8]*F+a[12],t[13]=a[1]*x+a[5]*f+a[9]*F+a[13],t[14]=a[2]*x+a[6]*f+a[10]*F+a[14],t[15]=a[3]*x+a[7]*f+a[11]*F+a[15]):(r=a[0],o=a[1],l=a[2],u=a[3],e=a[4],M=a[5],i=a[6],s=a[7],c=a[8],D=a[9],S=a[10],I=a[11],t[0]=r,t[1]=o,t[2]=l,t[3]=u,t[4]=e,t[5]=M,t[6]=i,t[7]=s,t[8]=c,t[9]=D,t[10]=S,t[11]=I,t[12]=r*x+e*f+c*F+a[12],t[13]=o*x+M*f+D*F+a[13],t[14]=l*x+i*f+S*F+a[14],t[15]=u*x+s*f+I*F+a[15]),t},o.SIMD.translate=function(t,a,n){var r=SIMD.Float32x4.load(a,0),o=SIMD.Float32x4.load(a,4),l=SIMD.Float32x4.load(a,8),u=SIMD.Float32x4.load(a,12),e=SIMD.Float32x4(n[0],n[1],n[2],0);a!==t&&(t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11]),r=SIMD.Float32x4.mul(r,SIMD.Float32x4.swizzle(e,0,0,0,0)),o=SIMD.Float32x4.mul(o,SIMD.Float32x4.swizzle(e,1,1,1,1)),l=SIMD.Float32x4.mul(l,SIMD.Float32x4.swizzle(e,2,2,2,2));var M=SIMD.Float32x4.add(r,SIMD.Float32x4.add(o,SIMD.Float32x4.add(l,u)));return SIMD.Float32x4.store(t,12,M),t},o.translate=r.USE_SIMD?o.SIMD.translate:o.scalar.translate,o.scalar.scale=function(t,a,n){var r=n[0],o=n[1],l=n[2];return t[0]=a[0]*r,t[1]=a[1]*r,t[2]=a[2]*r,t[3]=a[3]*r,t[4]=a[4]*o,t[5]=a[5]*o,t[6]=a[6]*o,t[7]=a[7]*o,t[8]=a[8]*l,t[9]=a[9]*l,t[10]=a[10]*l,t[11]=a[11]*l,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t},o.SIMD.scale=function(t,a,n){var r,o,l,u=SIMD.Float32x4(n[0],n[1],n[2],0);return r=SIMD.Float32x4.load(a,0),SIMD.Float32x4.store(t,0,SIMD.Float32x4.mul(r,SIMD.Float32x4.swizzle(u,0,0,0,0))),o=SIMD.Float32x4.load(a,4),SIMD.Float32x4.store(t,4,SIMD.Float32x4.mul(o,SIMD.Float32x4.swizzle(u,1,1,1,1))),l=SIMD.Float32x4.load(a,8),SIMD.Float32x4.store(t,8,SIMD.Float32x4.mul(l,SIMD.Float32x4.swizzle(u,2,2,2,2))),t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t},o.scale=r.USE_SIMD?o.SIMD.scale:o.scalar.scale,o.rotate=function(t,a,n,o){var l,u,e,M,i,s,c,D,S,I,x,f,F,m,h,d,v,z,p,w,A,R,b,Y,q=o[0],y=o[1],E=o[2],g=Math.sqrt(q*q+y*y+E*E);return Math.abs(g)<r.EPSILON?null:(g=1/g,q*=g,y*=g,E*=g,l=Math.sin(n),u=Math.cos(n),e=1-u,M=a[0],i=a[1],s=a[2],c=a[3],D=a[4],S=a[5],I=a[6],x=a[7],f=a[8],F=a[9],m=a[10],h=a[11],d=q*q*e+u,v=y*q*e+E*l,z=E*q*e-y*l,p=q*y*e-E*l,w=y*y*e+u,A=E*y*e+q*l,R=q*E*e+y*l,b=y*E*e-q*l,Y=E*E*e+u,t[0]=M*d+D*v+f*z,t[1]=i*d+S*v+F*z,t[2]=s*d+I*v+m*z,t[3]=c*d+x*v+h*z,t[4]=M*p+D*w+f*A,t[5]=i*p+S*w+F*A,t[6]=s*p+I*w+m*A,t[7]=c*p+x*w+h*A,t[8]=M*R+D*b+f*Y,t[9]=i*R+S*b+F*Y,t[10]=s*R+I*b+m*Y,t[11]=c*R+x*b+h*Y,a!==t&&(t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t)},o.scalar.rotateX=function(t,a,n){var r=Math.sin(n),o=Math.cos(n),l=a[4],u=a[5],e=a[6],M=a[7],i=a[8],s=a[9],c=a[10],D=a[11];return a!==t&&(t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[4]=l*o+i*r,t[5]=u*o+s*r,t[6]=e*o+c*r,t[7]=M*o+D*r,t[8]=i*o-l*r,t[9]=s*o-u*r,t[10]=c*o-e*r,t[11]=D*o-M*r,t},o.SIMD.rotateX=function(t,a,n){var r=SIMD.Float32x4.splat(Math.sin(n)),o=SIMD.Float32x4.splat(Math.cos(n));a!==t&&(t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]);var l=SIMD.Float32x4.load(a,4),u=SIMD.Float32x4.load(a,8);return SIMD.Float32x4.store(t,4,SIMD.Float32x4.add(SIMD.Float32x4.mul(l,o),SIMD.Float32x4.mul(u,r))),SIMD.Float32x4.store(t,8,SIMD.Float32x4.sub(SIMD.Float32x4.mul(u,o),SIMD.Float32x4.mul(l,r))),t},o.rotateX=r.USE_SIMD?o.SIMD.rotateX:o.scalar.rotateX,o.scalar.rotateY=function(t,a,n){var r=Math.sin(n),o=Math.cos(n),l=a[0],u=a[1],e=a[2],M=a[3],i=a[8],s=a[9],c=a[10],D=a[11];return a!==t&&(t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[0]=l*o-i*r,t[1]=u*o-s*r,t[2]=e*o-c*r,t[3]=M*o-D*r,t[8]=l*r+i*o,t[9]=u*r+s*o,t[10]=e*r+c*o,t[11]=M*r+D*o,t},o.SIMD.rotateY=function(t,a,n){var r=SIMD.Float32x4.splat(Math.sin(n)),o=SIMD.Float32x4.splat(Math.cos(n));a!==t&&(t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]);var l=SIMD.Float32x4.load(a,0),u=SIMD.Float32x4.load(a,8);return SIMD.Float32x4.store(t,0,SIMD.Float32x4.sub(SIMD.Float32x4.mul(l,o),SIMD.Float32x4.mul(u,r))),SIMD.Float32x4.store(t,8,SIMD.Float32x4.add(SIMD.Float32x4.mul(l,r),SIMD.Float32x4.mul(u,o))),t},o.rotateY=r.USE_SIMD?o.SIMD.rotateY:o.scalar.rotateY,o.scalar.rotateZ=function(t,a,n){var r=Math.sin(n),o=Math.cos(n),l=a[0],u=a[1],e=a[2],M=a[3],i=a[4],s=a[5],c=a[6],D=a[7];return a!==t&&(t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[0]=l*o+i*r,t[1]=u*o+s*r,t[2]=e*o+c*r,t[3]=M*o+D*r,t[4]=i*o-l*r,t[5]=s*o-u*r,t[6]=c*o-e*r,t[7]=D*o-M*r,t},o.SIMD.rotateZ=function(t,a,n){var r=SIMD.Float32x4.splat(Math.sin(n)),o=SIMD.Float32x4.splat(Math.cos(n));a!==t&&(t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]);var l=SIMD.Float32x4.load(a,0),u=SIMD.Float32x4.load(a,4);return SIMD.Float32x4.store(t,0,SIMD.Float32x4.add(SIMD.Float32x4.mul(l,o),SIMD.Float32x4.mul(u,r))),SIMD.Float32x4.store(t,4,SIMD.Float32x4.sub(SIMD.Float32x4.mul(u,o),SIMD.Float32x4.mul(l,r))),t},o.rotateZ=r.USE_SIMD?o.SIMD.rotateZ:o.scalar.rotateZ,o.fromTranslation=function(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t},o.fromScaling=function(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=a[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},o.fromRotation=function(t,a,n){var o,l,u,e=n[0],M=n[1],i=n[2],s=Math.sqrt(e*e+M*M+i*i);return Math.abs(s)<r.EPSILON?null:(s=1/s,e*=s,M*=s,i*=s,o=Math.sin(a),l=Math.cos(a),u=1-l,t[0]=e*e*u+l,t[1]=M*e*u+i*o,t[2]=i*e*u-M*o,t[3]=0,t[4]=e*M*u-i*o,t[5]=M*M*u+l,t[6]=i*M*u+e*o,t[7]=0,t[8]=e*i*u+M*o,t[9]=M*i*u-e*o,t[10]=i*i*u+l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)},o.fromXRotation=function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},o.fromYRotation=function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},o.fromZRotation=function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},o.fromRotationTranslation=function(t,a,n){var r=a[0],o=a[1],l=a[2],u=a[3],e=r+r,M=o+o,i=l+l,s=r*e,c=r*M,D=r*i,S=o*M,I=o*i,x=l*i,f=u*e,F=u*M,m=u*i;return t[0]=1-(S+x),t[1]=c+m,t[2]=D-F,t[3]=0,t[4]=c-m,t[5]=1-(s+x),t[6]=I+f,t[7]=0,t[8]=D+F,t[9]=I-f,t[10]=1-(s+S),t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t},o.fromRotationTranslationScale=function(t,a,n,r){var o=a[0],l=a[1],u=a[2],e=a[3],M=o+o,i=l+l,s=u+u,c=o*M,D=o*i,S=o*s,I=l*i,x=l*s,f=u*s,F=e*M,m=e*i,h=e*s,d=r[0],v=r[1],z=r[2];return t[0]=(1-(I+f))*d,t[1]=(D+h)*d,t[2]=(S-m)*d,t[3]=0,t[4]=(D-h)*v,t[5]=(1-(c+f))*v,t[6]=(x+F)*v,t[7]=0,t[8]=(S+m)*z,t[9]=(x-F)*z,t[10]=(1-(c+I))*z,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t},o.fromRotationTranslationScaleOrigin=function(t,a,n,r,o){var l=a[0],u=a[1],e=a[2],M=a[3],i=l+l,s=u+u,c=e+e,D=l*i,S=l*s,I=l*c,x=u*s,f=u*c,F=e*c,m=M*i,h=M*s,d=M*c,v=r[0],z=r[1],p=r[2],w=o[0],A=o[1],R=o[2];return t[0]=(1-(x+F))*v,t[1]=(S+d)*v,t[2]=(I-h)*v,t[3]=0,t[4]=(S-d)*z,t[5]=(1-(D+F))*z,t[6]=(f+m)*z,t[7]=0,t[8]=(I+h)*p,t[9]=(f-m)*p,t[10]=(1-(D+x))*p,t[11]=0,t[12]=n[0]+w-(t[0]*w+t[4]*A+t[8]*R),t[13]=n[1]+A-(t[1]*w+t[5]*A+t[9]*R),t[14]=n[2]+R-(t[2]*w+t[6]*A+t[10]*R),t[15]=1,t},o.fromQuat=function(t,a){var n=a[0],r=a[1],o=a[2],l=a[3],u=n+n,e=r+r,M=o+o,i=n*u,s=r*u,c=r*e,D=o*u,S=o*e,I=o*M,x=l*u,f=l*e,F=l*M;return t[0]=1-c-I,t[1]=s+F,t[2]=D-f,t[3]=0,t[4]=s-F,t[5]=1-i-I,t[6]=S+x,t[7]=0,t[8]=D+f,t[9]=S-x,t[10]=1-i-c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},o.frustum=function(t,a,n,r,o,l,u){var e=1/(n-a),M=1/(o-r),i=1/(l-u);return t[0]=2*l*e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*l*M,t[6]=0,t[7]=0,t[8]=(n+a)*e,t[9]=(o+r)*M,t[10]=(u+l)*i,t[11]=-1,t[12]=0,t[13]=0,t[14]=u*l*2*i,t[15]=0,t},o.perspective=function(t,a,n,r,o){var l=1/Math.tan(a/2),u=1/(r-o);return t[0]=l/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(o+r)*u,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*o*r*u,t[15]=0,t},o.perspectiveFromFieldOfView=function(t,a,n,r){var o=Math.tan(a.upDegrees*Math.PI/180),l=Math.tan(a.downDegrees*Math.PI/180),u=Math.tan(a.leftDegrees*Math.PI/180),e=Math.tan(a.rightDegrees*Math.PI/180),M=2/(u+e),i=2/(o+l);return t[0]=M,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=0,t[7]=0,t[8]=-((u-e)*M*.5),t[9]=(o-l)*i*.5,t[10]=r/(n-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*n/(n-r),t[15]=0,t},o.ortho=function(t,a,n,r,o,l,u){var e=1/(a-n),M=1/(r-o),i=1/(l-u);return t[0]=-2*e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*M,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*i,t[11]=0,t[12]=(a+n)*e,t[13]=(o+r)*M,t[14]=(u+l)*i,t[15]=1,t},o.lookAt=function(t,a,n,l){var u,e,M,i,s,c,D,S,I,x,f=a[0],F=a[1],m=a[2],h=l[0],d=l[1],v=l[2],z=n[0],p=n[1],w=n[2];return Math.abs(f-z)<r.EPSILON&&Math.abs(F-p)<r.EPSILON&&Math.abs(m-w)<r.EPSILON?o.identity(t):(D=f-z,S=F-p,I=m-w,x=1/Math.sqrt(D*D+S*S+I*I),D*=x,S*=x,I*=x,u=d*I-v*S,e=v*D-h*I,M=h*S-d*D,x=Math.sqrt(u*u+e*e+M*M),x?(x=1/x,u*=x,e*=x,M*=x):(u=0,e=0,M=0),i=S*M-I*e,s=I*u-D*M,c=D*e-S*u,x=Math.sqrt(i*i+s*s+c*c),x?(x=1/x,i*=x,s*=x,c*=x):(i=0,s=0,c=0),t[0]=u,t[1]=i,t[2]=D,t[3]=0,t[4]=e,t[5]=s,t[6]=S,t[7]=0,t[8]=M,t[9]=c,t[10]=I,t[11]=0,t[12]=-(u*f+e*F+M*m),t[13]=-(i*f+s*F+c*m),t[14]=-(D*f+S*F+I*m),t[15]=1,t)},o.str=function(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"},o.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2)+Math.pow(t[9],2)+Math.pow(t[10],2)+Math.pow(t[11],2)+Math.pow(t[12],2)+Math.pow(t[13],2)+Math.pow(t[14],2)+Math.pow(t[15],2))},t.exports=o},function(t,a,n){var r=n(1),o=n(4),l=n(7),u=n(8),e={};e.create=function(){var t=new r.ARRAY_TYPE(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},e.rotationTo=function(){var t=l.create(),a=l.fromValues(1,0,0),n=l.fromValues(0,1,0);return function(r,o,u){var M=l.dot(o,u);return-.999999>M?(l.cross(t,a,o),l.length(t)<1e-6&&l.cross(t,n,o),l.normalize(t,t),e.setAxisAngle(r,t,Math.PI),r):M>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(l.cross(t,o,u),r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=1+M,e.normalize(r,r))}}(),e.setAxes=function(){var t=o.create();return function(a,n,r,o){return t[0]=r[0],t[3]=r[1],t[6]=r[2],t[1]=o[0],t[4]=o[1],t[7]=o[2],t[2]=-n[0],t[5]=-n[1],t[8]=-n[2],e.normalize(a,e.fromMat3(a,t))}}(),e.clone=u.clone,e.fromValues=u.fromValues,e.copy=u.copy,e.set=u.set,e.identity=function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},e.setAxisAngle=function(t,a,n){n=.5*n;var r=Math.sin(n);return t[0]=r*a[0],t[1]=r*a[1],t[2]=r*a[2],t[3]=Math.cos(n),t},e.add=u.add,e.multiply=function(t,a,n){var r=a[0],o=a[1],l=a[2],u=a[3],e=n[0],M=n[1],i=n[2],s=n[3];return t[0]=r*s+u*e+o*i-l*M,t[1]=o*s+u*M+l*e-r*i,t[2]=l*s+u*i+r*M-o*e,t[3]=u*s-r*e-o*M-l*i,t},e.mul=e.multiply,e.scale=u.scale,e.rotateX=function(t,a,n){n*=.5;var r=a[0],o=a[1],l=a[2],u=a[3],e=Math.sin(n),M=Math.cos(n);return t[0]=r*M+u*e,t[1]=o*M+l*e,t[2]=l*M-o*e,t[3]=u*M-r*e,t},e.rotateY=function(t,a,n){n*=.5;var r=a[0],o=a[1],l=a[2],u=a[3],e=Math.sin(n),M=Math.cos(n);return t[0]=r*M-l*e,t[1]=o*M+u*e,t[2]=l*M+r*e,t[3]=u*M-o*e,t},e.rotateZ=function(t,a,n){n*=.5;var r=a[0],o=a[1],l=a[2],u=a[3],e=Math.sin(n),M=Math.cos(n);return t[0]=r*M+o*e,t[1]=o*M-r*e,t[2]=l*M+u*e,t[3]=u*M-l*e,t},e.calculateW=function(t,a){var n=a[0],r=a[1],o=a[2];return t[0]=n,t[1]=r,t[2]=o,t[3]=Math.sqrt(Math.abs(1-n*n-r*r-o*o)),t},e.dot=u.dot,e.lerp=u.lerp,e.slerp=function(t,a,n,r){var o,l,u,e,M,i=a[0],s=a[1],c=a[2],D=a[3],S=n[0],I=n[1],x=n[2],f=n[3];return l=i*S+s*I+c*x+D*f,0>l&&(l=-l,S=-S,I=-I,x=-x,f=-f),1-l>1e-6?(o=Math.acos(l),u=Math.sin(o),e=Math.sin((1-r)*o)/u,M=Math.sin(r*o)/u):(e=1-r,M=r),t[0]=e*i+M*S,t[1]=e*s+M*I,t[2]=e*c+M*x,t[3]=e*D+M*f,t},e.sqlerp=function(){var t=e.create(),a=e.create();return function(n,r,o,l,u,M){return e.slerp(t,r,u,M),e.slerp(a,o,l,M),e.slerp(n,t,a,2*M*(1-M)),n}}(),e.invert=function(t,a){var n=a[0],r=a[1],o=a[2],l=a[3],u=n*n+r*r+o*o+l*l,e=u?1/u:0;
return t[0]=-n*e,t[1]=-r*e,t[2]=-o*e,t[3]=l*e,t},e.conjugate=function(t,a){return t[0]=-a[0],t[1]=-a[1],t[2]=-a[2],t[3]=a[3],t},e.length=u.length,e.len=e.length,e.squaredLength=u.squaredLength,e.sqrLen=e.squaredLength,e.normalize=u.normalize,e.fromMat3=function(t,a){var n,r=a[0]+a[4]+a[8];if(r>0)n=Math.sqrt(r+1),t[3]=.5*n,n=.5/n,t[0]=(a[5]-a[7])*n,t[1]=(a[6]-a[2])*n,t[2]=(a[1]-a[3])*n;else{var o=0;a[4]>a[0]&&(o=1),a[8]>a[3*o+o]&&(o=2);var l=(o+1)%3,u=(o+2)%3;n=Math.sqrt(a[3*o+o]-a[3*l+l]-a[3*u+u]+1),t[o]=.5*n,n=.5/n,t[3]=(a[3*l+u]-a[3*u+l])*n,t[l]=(a[3*l+o]+a[3*o+l])*n,t[u]=(a[3*u+o]+a[3*o+u])*n}return t},e.str=function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},t.exports=e},function(t,a,n){var r=n(1),o={};o.create=function(){var t=new r.ARRAY_TYPE(3);return t[0]=0,t[1]=0,t[2]=0,t},o.clone=function(t){var a=new r.ARRAY_TYPE(3);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a},o.fromValues=function(t,a,n){var o=new r.ARRAY_TYPE(3);return o[0]=t,o[1]=a,o[2]=n,o},o.copy=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t},o.set=function(t,a,n,r){return t[0]=a,t[1]=n,t[2]=r,t},o.add=function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t},o.subtract=function(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t},o.sub=o.subtract,o.multiply=function(t,a,n){return t[0]=a[0]*n[0],t[1]=a[1]*n[1],t[2]=a[2]*n[2],t},o.mul=o.multiply,o.divide=function(t,a,n){return t[0]=a[0]/n[0],t[1]=a[1]/n[1],t[2]=a[2]/n[2],t},o.div=o.divide,o.min=function(t,a,n){return t[0]=Math.min(a[0],n[0]),t[1]=Math.min(a[1],n[1]),t[2]=Math.min(a[2],n[2]),t},o.max=function(t,a,n){return t[0]=Math.max(a[0],n[0]),t[1]=Math.max(a[1],n[1]),t[2]=Math.max(a[2],n[2]),t},o.scale=function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t},o.scaleAndAdd=function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t},o.distance=function(t,a){var n=a[0]-t[0],r=a[1]-t[1],o=a[2]-t[2];return Math.sqrt(n*n+r*r+o*o)},o.dist=o.distance,o.squaredDistance=function(t,a){var n=a[0]-t[0],r=a[1]-t[1],o=a[2]-t[2];return n*n+r*r+o*o},o.sqrDist=o.squaredDistance,o.length=function(t){var a=t[0],n=t[1],r=t[2];return Math.sqrt(a*a+n*n+r*r)},o.len=o.length,o.squaredLength=function(t){var a=t[0],n=t[1],r=t[2];return a*a+n*n+r*r},o.sqrLen=o.squaredLength,o.negate=function(t,a){return t[0]=-a[0],t[1]=-a[1],t[2]=-a[2],t},o.inverse=function(t,a){return t[0]=1/a[0],t[1]=1/a[1],t[2]=1/a[2],t},o.normalize=function(t,a){var n=a[0],r=a[1],o=a[2],l=n*n+r*r+o*o;return l>0&&(l=1/Math.sqrt(l),t[0]=a[0]*l,t[1]=a[1]*l,t[2]=a[2]*l),t},o.dot=function(t,a){return t[0]*a[0]+t[1]*a[1]+t[2]*a[2]},o.cross=function(t,a,n){var r=a[0],o=a[1],l=a[2],u=n[0],e=n[1],M=n[2];return t[0]=o*M-l*e,t[1]=l*u-r*M,t[2]=r*e-o*u,t},o.lerp=function(t,a,n,r){var o=a[0],l=a[1],u=a[2];return t[0]=o+r*(n[0]-o),t[1]=l+r*(n[1]-l),t[2]=u+r*(n[2]-u),t},o.hermite=function(t,a,n,r,o,l){var u=l*l,e=u*(2*l-3)+1,M=u*(l-2)+l,i=u*(l-1),s=u*(3-2*l);return t[0]=a[0]*e+n[0]*M+r[0]*i+o[0]*s,t[1]=a[1]*e+n[1]*M+r[1]*i+o[1]*s,t[2]=a[2]*e+n[2]*M+r[2]*i+o[2]*s,t},o.bezier=function(t,a,n,r,o,l){var u=1-l,e=u*u,M=l*l,i=e*u,s=3*l*e,c=3*M*u,D=M*l;return t[0]=a[0]*i+n[0]*s+r[0]*c+o[0]*D,t[1]=a[1]*i+n[1]*s+r[1]*c+o[1]*D,t[2]=a[2]*i+n[2]*s+r[2]*c+o[2]*D,t},o.random=function(t,a){a=a||1;var n=2*r.RANDOM()*Math.PI,o=2*r.RANDOM()-1,l=Math.sqrt(1-o*o)*a;return t[0]=Math.cos(n)*l,t[1]=Math.sin(n)*l,t[2]=o*a,t},o.transformMat4=function(t,a,n){var r=a[0],o=a[1],l=a[2],u=n[3]*r+n[7]*o+n[11]*l+n[15];return u=u||1,t[0]=(n[0]*r+n[4]*o+n[8]*l+n[12])/u,t[1]=(n[1]*r+n[5]*o+n[9]*l+n[13])/u,t[2]=(n[2]*r+n[6]*o+n[10]*l+n[14])/u,t},o.transformMat3=function(t,a,n){var r=a[0],o=a[1],l=a[2];return t[0]=r*n[0]+o*n[3]+l*n[6],t[1]=r*n[1]+o*n[4]+l*n[7],t[2]=r*n[2]+o*n[5]+l*n[8],t},o.transformQuat=function(t,a,n){var r=a[0],o=a[1],l=a[2],u=n[0],e=n[1],M=n[2],i=n[3],s=i*r+e*l-M*o,c=i*o+M*r-u*l,D=i*l+u*o-e*r,S=-u*r-e*o-M*l;return t[0]=s*i+S*-u+c*-M-D*-e,t[1]=c*i+S*-e+D*-u-s*-M,t[2]=D*i+S*-M+s*-e-c*-u,t},o.rotateX=function(t,a,n,r){var o=[],l=[];return o[0]=a[0]-n[0],o[1]=a[1]-n[1],o[2]=a[2]-n[2],l[0]=o[0],l[1]=o[1]*Math.cos(r)-o[2]*Math.sin(r),l[2]=o[1]*Math.sin(r)+o[2]*Math.cos(r),t[0]=l[0]+n[0],t[1]=l[1]+n[1],t[2]=l[2]+n[2],t},o.rotateY=function(t,a,n,r){var o=[],l=[];return o[0]=a[0]-n[0],o[1]=a[1]-n[1],o[2]=a[2]-n[2],l[0]=o[2]*Math.sin(r)+o[0]*Math.cos(r),l[1]=o[1],l[2]=o[2]*Math.cos(r)-o[0]*Math.sin(r),t[0]=l[0]+n[0],t[1]=l[1]+n[1],t[2]=l[2]+n[2],t},o.rotateZ=function(t,a,n,r){var o=[],l=[];return o[0]=a[0]-n[0],o[1]=a[1]-n[1],o[2]=a[2]-n[2],l[0]=o[0]*Math.cos(r)-o[1]*Math.sin(r),l[1]=o[0]*Math.sin(r)+o[1]*Math.cos(r),l[2]=o[2],t[0]=l[0]+n[0],t[1]=l[1]+n[1],t[2]=l[2]+n[2],t},o.forEach=function(){var t=o.create();return function(a,n,r,o,l,u){var e,M;for(n||(n=3),r||(r=0),M=o?Math.min(o*n+r,a.length):a.length,e=r;M>e;e+=n)t[0]=a[e],t[1]=a[e+1],t[2]=a[e+2],l(t,t,u),a[e]=t[0],a[e+1]=t[1],a[e+2]=t[2];return a}}(),o.angle=function(t,a){var n=o.fromValues(t[0],t[1],t[2]),r=o.fromValues(a[0],a[1],a[2]);o.normalize(n,n),o.normalize(r,r);var l=o.dot(n,r);return l>1?0:Math.acos(l)},o.str=function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},t.exports=o},function(t,a,n){var r=n(1),o={};o.create=function(){var t=new r.ARRAY_TYPE(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t},o.clone=function(t){var a=new r.ARRAY_TYPE(4);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a},o.fromValues=function(t,a,n,o){var l=new r.ARRAY_TYPE(4);return l[0]=t,l[1]=a,l[2]=n,l[3]=o,l},o.copy=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t},o.set=function(t,a,n,r,o){return t[0]=a,t[1]=n,t[2]=r,t[3]=o,t},o.add=function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t},o.subtract=function(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t},o.sub=o.subtract,o.multiply=function(t,a,n){return t[0]=a[0]*n[0],t[1]=a[1]*n[1],t[2]=a[2]*n[2],t[3]=a[3]*n[3],t},o.mul=o.multiply,o.divide=function(t,a,n){return t[0]=a[0]/n[0],t[1]=a[1]/n[1],t[2]=a[2]/n[2],t[3]=a[3]/n[3],t},o.div=o.divide,o.min=function(t,a,n){return t[0]=Math.min(a[0],n[0]),t[1]=Math.min(a[1],n[1]),t[2]=Math.min(a[2],n[2]),t[3]=Math.min(a[3],n[3]),t},o.max=function(t,a,n){return t[0]=Math.max(a[0],n[0]),t[1]=Math.max(a[1],n[1]),t[2]=Math.max(a[2],n[2]),t[3]=Math.max(a[3],n[3]),t},o.scale=function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t},o.scaleAndAdd=function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t[3]=a[3]+n[3]*r,t},o.distance=function(t,a){var n=a[0]-t[0],r=a[1]-t[1],o=a[2]-t[2],l=a[3]-t[3];return Math.sqrt(n*n+r*r+o*o+l*l)},o.dist=o.distance,o.squaredDistance=function(t,a){var n=a[0]-t[0],r=a[1]-t[1],o=a[2]-t[2],l=a[3]-t[3];return n*n+r*r+o*o+l*l},o.sqrDist=o.squaredDistance,o.length=function(t){var a=t[0],n=t[1],r=t[2],o=t[3];return Math.sqrt(a*a+n*n+r*r+o*o)},o.len=o.length,o.squaredLength=function(t){var a=t[0],n=t[1],r=t[2],o=t[3];return a*a+n*n+r*r+o*o},o.sqrLen=o.squaredLength,o.negate=function(t,a){return t[0]=-a[0],t[1]=-a[1],t[2]=-a[2],t[3]=-a[3],t},o.inverse=function(t,a){return t[0]=1/a[0],t[1]=1/a[1],t[2]=1/a[2],t[3]=1/a[3],t},o.normalize=function(t,a){var n=a[0],r=a[1],o=a[2],l=a[3],u=n*n+r*r+o*o+l*l;return u>0&&(u=1/Math.sqrt(u),t[0]=n*u,t[1]=r*u,t[2]=o*u,t[3]=l*u),t},o.dot=function(t,a){return t[0]*a[0]+t[1]*a[1]+t[2]*a[2]+t[3]*a[3]},o.lerp=function(t,a,n,r){var o=a[0],l=a[1],u=a[2],e=a[3];return t[0]=o+r*(n[0]-o),t[1]=l+r*(n[1]-l),t[2]=u+r*(n[2]-u),t[3]=e+r*(n[3]-e),t},o.random=function(t,a){return a=a||1,t[0]=r.RANDOM(),t[1]=r.RANDOM(),t[2]=r.RANDOM(),t[3]=r.RANDOM(),o.normalize(t,t),o.scale(t,t,a),t},o.transformMat4=function(t,a,n){var r=a[0],o=a[1],l=a[2],u=a[3];return t[0]=n[0]*r+n[4]*o+n[8]*l+n[12]*u,t[1]=n[1]*r+n[5]*o+n[9]*l+n[13]*u,t[2]=n[2]*r+n[6]*o+n[10]*l+n[14]*u,t[3]=n[3]*r+n[7]*o+n[11]*l+n[15]*u,t},o.transformQuat=function(t,a,n){var r=a[0],o=a[1],l=a[2],u=n[0],e=n[1],M=n[2],i=n[3],s=i*r+e*l-M*o,c=i*o+M*r-u*l,D=i*l+u*o-e*r,S=-u*r-e*o-M*l;return t[0]=s*i+S*-u+c*-M-D*-e,t[1]=c*i+S*-e+D*-u-s*-M,t[2]=D*i+S*-M+s*-e-c*-u,t[3]=a[3],t},o.forEach=function(){var t=o.create();return function(a,n,r,o,l,u){var e,M;for(n||(n=4),r||(r=0),M=o?Math.min(o*n+r,a.length):a.length,e=r;M>e;e+=n)t[0]=a[e],t[1]=a[e+1],t[2]=a[e+2],t[3]=a[e+3],l(t,t,u),a[e]=t[0],a[e+1]=t[1],a[e+2]=t[2],a[e+3]=t[3];return a}}(),o.str=function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},t.exports=o},function(t,a,n){var r=n(1),o={};o.create=function(){var t=new r.ARRAY_TYPE(2);return t[0]=0,t[1]=0,t},o.clone=function(t){var a=new r.ARRAY_TYPE(2);return a[0]=t[0],a[1]=t[1],a},o.fromValues=function(t,a){var n=new r.ARRAY_TYPE(2);return n[0]=t,n[1]=a,n},o.copy=function(t,a){return t[0]=a[0],t[1]=a[1],t},o.set=function(t,a,n){return t[0]=a,t[1]=n,t},o.add=function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t},o.subtract=function(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t},o.sub=o.subtract,o.multiply=function(t,a,n){return t[0]=a[0]*n[0],t[1]=a[1]*n[1],t},o.mul=o.multiply,o.divide=function(t,a,n){return t[0]=a[0]/n[0],t[1]=a[1]/n[1],t},o.div=o.divide,o.min=function(t,a,n){return t[0]=Math.min(a[0],n[0]),t[1]=Math.min(a[1],n[1]),t},o.max=function(t,a,n){return t[0]=Math.max(a[0],n[0]),t[1]=Math.max(a[1],n[1]),t},o.scale=function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t},o.scaleAndAdd=function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t},o.distance=function(t,a){var n=a[0]-t[0],r=a[1]-t[1];return Math.sqrt(n*n+r*r)},o.dist=o.distance,o.squaredDistance=function(t,a){var n=a[0]-t[0],r=a[1]-t[1];return n*n+r*r},o.sqrDist=o.squaredDistance,o.length=function(t){var a=t[0],n=t[1];return Math.sqrt(a*a+n*n)},o.len=o.length,o.squaredLength=function(t){var a=t[0],n=t[1];return a*a+n*n},o.sqrLen=o.squaredLength,o.negate=function(t,a){return t[0]=-a[0],t[1]=-a[1],t},o.inverse=function(t,a){return t[0]=1/a[0],t[1]=1/a[1],t},o.normalize=function(t,a){var n=a[0],r=a[1],o=n*n+r*r;return o>0&&(o=1/Math.sqrt(o),t[0]=a[0]*o,t[1]=a[1]*o),t},o.dot=function(t,a){return t[0]*a[0]+t[1]*a[1]},o.cross=function(t,a,n){var r=a[0]*n[1]-a[1]*n[0];return t[0]=t[1]=0,t[2]=r,t},o.lerp=function(t,a,n,r){var o=a[0],l=a[1];return t[0]=o+r*(n[0]-o),t[1]=l+r*(n[1]-l),t},o.random=function(t,a){a=a||1;var n=2*r.RANDOM()*Math.PI;return t[0]=Math.cos(n)*a,t[1]=Math.sin(n)*a,t},o.transformMat2=function(t,a,n){var r=a[0],o=a[1];return t[0]=n[0]*r+n[2]*o,t[1]=n[1]*r+n[3]*o,t},o.transformMat2d=function(t,a,n){var r=a[0],o=a[1];return t[0]=n[0]*r+n[2]*o+n[4],t[1]=n[1]*r+n[3]*o+n[5],t},o.transformMat3=function(t,a,n){var r=a[0],o=a[1];return t[0]=n[0]*r+n[3]*o+n[6],t[1]=n[1]*r+n[4]*o+n[7],t},o.transformMat4=function(t,a,n){var r=a[0],o=a[1];return t[0]=n[0]*r+n[4]*o+n[12],t[1]=n[1]*r+n[5]*o+n[13],t},o.forEach=function(){var t=o.create();return function(a,n,r,o,l,u){var e,M;for(n||(n=2),r||(r=0),M=o?Math.min(o*n+r,a.length):a.length,e=r;M>e;e+=n)t[0]=a[e],t[1]=a[e+1],l(t,t,u),a[e]=t[0],a[e+1]=t[1];return a}}(),o.str=function(t){return"vec2("+t[0]+", "+t[1]+")"},t.exports=o}])});
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (type, value) {
  switch (type) {
    case 6:
      // Linetype name (present if not BYLAYER).
      // The special name BYBLOCK indicates a
      // floating linetype. (optional)
      return {
        lineTypeName: value
      };
    case 8:
      return {
        layer: value
      };
    case 48:
      // Linetype scale (optional)
      return {
        lineTypeScale: value
      };
    case 60:
      // Object visibility (optional): 0 = visible, 1 = invisible.
      return {
        visible: value === 0
      };
    case 62:
      // Color number (present if not BYLAYER).
      // Zero indicates the BYBLOCK (floating) color.
      // 256 indicates BYLAYER.
      // A negative value indicates that the layer is turned off. (optional)
      return {
        colorNumber: value
      };
    case 210:
      return {
        extrusionX: value
      };
    case 220:
      return {
        extrusionY: value
      };
    case 230:
      return {
        extrusionZ: value
      };
    default:
      return {};
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var config = __webpack_require__(3);

function info() {
  if (config.verbose) {
    console.info.apply(undefined, arguments);
  }
}

function warn() {
  if (config.verbose) {
    console.warn.apply(undefined, arguments);
  }
}

function error() {
  console.error.apply(undefined, arguments);
}

module.exports.config = config;
module.exports.info = info;
module.exports.warn = warn;
module.exports.error = error;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var V2 = function () {
  function V2(x, y) {
    _classCallCheck(this, V2);

    if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object') {
      this.x = x.x;
      this.y = x.y;
    } else {
      this.x = x;
      this.y = y;
    }
  }

  _createClass(V2, [{
    key: 'equals',
    value: function equals(other) {
      return this.x === other.x && this.y === other.y;
    }
  }, {
    key: 'length',
    value: function length() {
      return Math.sqrt(this.dot(this));
    }
  }, {
    key: 'neg',
    value: function neg() {
      return new V2(-this.x, -this.y);
    }
  }, {
    key: 'add',
    value: function add(b) {
      return new V2(this.x + b.x, this.y + b.y);
    }
  }, {
    key: 'sub',
    value: function sub(b) {
      return new V2(this.x - b.x, this.y - b.y);
    }
  }, {
    key: 'multiply',
    value: function multiply(w) {
      return new V2(this.x * w, this.y * w);
    }
  }, {
    key: 'norm',
    value: function norm() {
      return this.multiply(1 / this.length());
    }
  }, {
    key: 'dot',
    value: function dot(b) {
      return this.x * b.x + this.y * b.y;
    }
  }]);

  return V2;
}();

exports.default = V2;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  verbose: false
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

var _point = __webpack_require__(17);

var _point2 = _interopRequireDefault(_point);

var _line = __webpack_require__(18);

var _line2 = _interopRequireDefault(_line);

var _lwpolyline = __webpack_require__(19);

var _lwpolyline2 = _interopRequireDefault(_lwpolyline);

var _polyline = __webpack_require__(20);

var _polyline2 = _interopRequireDefault(_polyline);

var _vertex = __webpack_require__(21);

var _vertex2 = _interopRequireDefault(_vertex);

var _circle = __webpack_require__(22);

var _circle2 = _interopRequireDefault(_circle);

var _arc = __webpack_require__(23);

var _arc2 = _interopRequireDefault(_arc);

var _ellipse = __webpack_require__(24);

var _ellipse2 = _interopRequireDefault(_ellipse);

var _spline = __webpack_require__(25);

var _spline2 = _interopRequireDefault(_spline);

var _solid = __webpack_require__(26);

var _solid2 = _interopRequireDefault(_solid);

var _mtext = __webpack_require__(27);

var _mtext2 = _interopRequireDefault(_mtext);

var _insert = __webpack_require__(28);

var _insert2 = _interopRequireDefault(_insert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = [_point2.default, _line2.default, _lwpolyline2.default, _polyline2.default, _vertex2.default, _circle2.default, _arc2.default, _ellipse2.default, _spline2.default, _solid2.default, _mtext2.default, _insert2.default].reduce(function (acc, mod) {
  acc[mod.TYPE] = mod;
  return acc;
}, {});

exports.default = function (tuples) {
  var entities = [];
  var entityGroups = [];
  var currentEntityTuples = void 0;

  // First group them together for easy processing
  tuples.forEach(function (tuple) {
    var type = tuple[0];
    if (type === 0) {
      currentEntityTuples = [];
      entityGroups.push(currentEntityTuples);
    }
    currentEntityTuples.push(tuple);
  });

  var currentPolyline = void 0;
  entityGroups.forEach(function (tuples) {
    var entityType = tuples[0][1];
    var contentTuples = tuples.slice(1);

    if (handlers.hasOwnProperty(entityType)) {
      var e = handlers[entityType].process(contentTuples);
      // "POLYLINE" cannot be parsed in isolation, it is followed by
      // N "VERTEX" entities and ended with a "SEQEND" entity.
      // Essentially we convert POLYLINE to LWPOLYLINE - the extra
      // vertex flags are not supported
      if (entityType === 'POLYLINE') {
        currentPolyline = e;
        entities.push(e);
      } else if (entityType === 'VERTEX') {
        if (currentPolyline) {
          currentPolyline.vertices.push(e);
        } else {
          _logger2.default.error('ignoring invalid VERTEX entity');
        }
      } else if (entityType === 'SEQEND') {
        currentPolyline = undefined;
      } else {
        // All other entities
        entities.push(e);
      }
    } else {
      _logger2.default.warn('unsupported type in ENTITIES section:', entityType);
    }
  });

  return entities;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BoundingBox = function () {
  function BoundingBox() {
    _classCallCheck(this, BoundingBox);

    var minX = Infinity;
    var maxX = -Infinity;
    var maxY = -Infinity;
    var minY = Infinity;

    Object.defineProperty(this, 'minX', {
      get: function get() {
        return minX;
      }
    });

    Object.defineProperty(this, 'maxX', {
      get: function get() {
        return maxX;
      }
    });

    Object.defineProperty(this, 'maxY', {
      get: function get() {
        return maxY;
      }
    });

    Object.defineProperty(this, 'minY', {
      get: function get() {
        return minY;
      }
    });

    Object.defineProperty(this, 'width', {
      get: function get() {
        return maxX - minX;
      }
    });

    Object.defineProperty(this, 'height', {
      get: function get() {
        return maxY - minY;
      }
    });

    this.expandByPoint = function (x, y) {
      if (x < minX) {
        minX = x;
      }
      if (x > maxX) {
        maxX = x;
      }
      if (y < minY) {
        minY = y;
      }
      if (y > maxY) {
        maxY = y;
      }
    };
  }

  _createClass(BoundingBox, [{
    key: 'toString',
    value: function toString() {
      return 'min: ' + this.minX + ',' + this.minY + ' max: ' + this.maxX + ',' + this.maxY;
    }
  }, {
    key: 'expandByTranslatedBox',
    value: function expandByTranslatedBox(box, x, y) {
      this.expandByPoint(box.minX + x, box.maxY + y);
      this.expandByPoint(box.maxX + x, box.minY + y);
    }
  }, {
    key: 'expandByBox',
    value: function expandByBox(box) {
      this.expandByPoint(box.minX, box.maxY);
      this.expandByPoint(box.maxX, box.minY);
    }
  }]);

  return BoundingBox;
}();

exports.default = BoundingBox;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cloneDeep = __webpack_require__(29);

var logger = __webpack_require__(1);

module.exports = function (parseResult) {
  var blocksByName = parseResult.blocks.reduce(function (acc, b) {
    acc[b.name] = b;
    return acc;
  }, {});

  var gatherEntities = function gatherEntities(entities, transforms) {
    var current = [];
    entities.forEach(function (e) {
      if (e.type === 'INSERT') {
        var insert = e;
        var block = blocksByName[insert.block];
        if (!block) {
          logger.error('no block found for insert. block:', insert.block);
          return;
        }
        var t = {
          x: insert.x + block.x,
          y: insert.y + block.y,
          xScale: insert.xscale,
          yScale: insert.yscale,
          rotation: insert.rotation
          // Add the insert transform and recursively add entities
        };var transforms2 = transforms.slice(0);
        transforms2.push(t);

        // Use the insert layer
        var blockEntities = block.entities.map(function (be) {
          var be2 = cloneDeep(be);
          be2.layer = insert.layer;
          return be2;
        });
        current = current.concat(gatherEntities(blockEntities, transforms2));
      } else {
        // Top-level entity. Clone and add the transforms
        // The transforms are reversed so they occur in
        // order of application - i.e. the transform of the
        // top-level insert is applied last
        var e2 = cloneDeep(e);
        e2.transforms = transforms.slice().reverse();
        current.push(e2);
      }
    });
    return current;
  };

  return gatherEntities(parseResult.entities, []);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var getNative = __webpack_require__(36),
    isArguments = __webpack_require__(37),
    isArray = __webpack_require__(8);

/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeKeys = getNative(Object, 'keys');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * A fallback implementation of `Object.keys` which creates an array of the
 * own enumerable property names of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function shimKeys(object) {
  var props = keysIn(object),
      propsLength = props.length,
      length = propsLength && object.length;

  var allowIndexes = !!length && isLength(length) &&
    (isArray(object) || isArguments(object));

  var index = -1,
      result = [];

  while (++index < propsLength) {
    var key = props[index];
    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  var Ctor = object == null ? undefined : object.constructor;
  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
      (typeof object != 'function' && isArrayLike(object))) {
    return shimKeys(object);
  }
  return isObject(object) ? nativeKeys(object) : [];
};

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  if (object == null) {
    return [];
  }
  if (!isObject(object)) {
    object = Object(object);
  }
  var length = object.length;
  length = (length && isLength(length) &&
    (isArray(object) || isArguments(object)) && length) || 0;

  var Ctor = object.constructor,
      index = -1,
      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
      result = Array(length),
      skipIndexes = length > 0;

  while (++index < length) {
    result[index] = (index + '');
  }
  for (var key in object) {
    if (!(skipIndexes && isIndex(key, length)) &&
        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = keys;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var arrayTag = '[object Array]',
    funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/* Native method references for those with the same name as other `lodash` methods. */
var nativeIsArray = getNative(Array, 'isArray');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(function() { return arguments; }());
 * // => false
 */
var isArray = nativeIsArray || function(value) {
  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
};

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = isArray;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bspline = __webpack_require__(43);

var logger = __webpack_require__(1);

var createArcForLWPolyine = __webpack_require__(44);

/**
 * Rotate a set of points
 * @param points the points
 * @param angle the rotation angle
 */
var rotate = function rotate(points, angle) {
  return points.map(function (p) {
    return [p[0] * Math.cos(angle) - p[1] * Math.sin(angle), p[1] * Math.cos(angle) + p[0] * Math.sin(angle)];
  });
};

/**
 * @param cx center X
 * @param cy center Y
 * @param rx radius X
 * @param ry radius Y
 * @param start start angle in radians
 * @param start end angle in radians
 */
var interpolateElliptic = function interpolateElliptic(cx, cy, rx, ry, start, end, rotationAngle) {
  if (end < start) {
    end += Math.PI * 2;
  }

  // ----- Relative points -----

  // Start point
  var points = [];
  var dTheta = Math.PI * 2 / 72;
  var EPS = 1e-6;
  for (var theta = start; theta < end - EPS; theta += dTheta) {
    points.push([Math.cos(theta) * rx, Math.sin(theta) * ry]);
  }
  points.push([Math.cos(end) * rx, Math.sin(end) * ry]);

  // ----- Rotate -----
  if (rotationAngle) {
    points = rotate(points, rotationAngle);
  }

  // ----- Offset center -----
  points = points.map(function (p) {
    return [cx + p[0], cy + p[1]];
  });

  return points;
};

var applyTransforms = function applyTransforms(polyline, transforms) {
  transforms.forEach(function (transform) {
    polyline = polyline.map(function (p) {
      // Use a copy to avoid side effects
      var p2 = [p[0], p[1]];
      if (transform.xScale) {
        p2[0] = p2[0] * transform.xScale;
      }
      if (transform.yScale) {
        p2[1] = p2[1] * transform.yScale;
      }
      if (transform.rotation) {
        var angle = transform.rotation / 180 * Math.PI;
        p2 = [p2[0] * Math.cos(angle) - p2[1] * Math.sin(angle), p2[1] * Math.cos(angle) + p2[0] * Math.sin(angle)];
      }
      if (transform.x) {
        p2[0] = p2[0] + transform.x;
      }
      if (transform.y) {
        p2[1] = p2[1] + transform.y;
      }
      return p2;
    });
  });
  return polyline;
};

/**
 * Convert a parsed DXF entity to a polyline. These can be used to render the
 * the DXF in SVG, Canvas, WebGL etc., without depending on native support
 * of primitive objects (ellispe, spline etc.)
 */
module.exports = function (entity) {
  var polyline = void 0;

  if (entity.type === 'LINE') {
    polyline = [[entity.start.x, entity.start.y], [entity.end.x, entity.end.y]];
  }

  if (entity.type === 'LWPOLYLINE' || entity.type === 'POLYLINE') {
    polyline = [];
    for (var i = 0, il = entity.vertices.length; i < il - 1; ++i) {
      var from = [entity.vertices[i].x, entity.vertices[i].y];
      var to = [entity.vertices[i + 1].x, entity.vertices[i + 1].y];
      polyline.push(from);
      if (entity.vertices[i].bulge) {
        polyline = polyline.concat(createArcForLWPolyine(from, to, entity.vertices[i].bulge));
      }
      if (i === il - 2) {
        polyline.push(to);
      }
    }
    if (entity.closed) {
      polyline.push([polyline[0][0], polyline[0][1]]);
    }
  }

  if (entity.type === 'CIRCLE') {
    polyline = interpolateElliptic(entity.x, entity.y, entity.r, entity.r, 0, Math.PI * 2);
  }

  if (entity.type === 'ELLIPSE') {
    var rx = Math.sqrt(entity.majorX * entity.majorX + entity.majorY * entity.majorY);
    var ry = entity.axisRatio * rx;
    var majorAxisRotation = -Math.atan2(-entity.majorY, entity.majorX);
    polyline = interpolateElliptic(entity.x, entity.y, rx, ry, entity.startAngle, entity.endAngle, majorAxisRotation);
    var flipY = entity.extrusionZ === -1;
    if (flipY) {
      polyline = polyline.map(function (p) {
        return [-(p[0] - entity.x) + entity.x, p[1]];
      });
    }
  }

  if (entity.type === 'ARC') {
    // Why on earth DXF has degree start & end angles for arc,
    // and radian start & end angles for ellipses is a mystery
    polyline = interpolateElliptic(entity.x, entity.y, entity.r, entity.r, entity.startAngle, entity.endAngle, undefined, false);

    // I kid you not, ARCs and ELLIPSEs handle this differently,
    // as evidenced by how AutoCAD actually renders these entities
    var _flipY = entity.extrusionZ === -1;
    if (_flipY) {
      polyline = polyline.map(function (p) {
        return [-p[0], p[1]];
      });
    }
  }

  if (entity.type === 'SPLINE') {
    var controlPoints = entity.controlPoints.map(function (p) {
      return [p.x, p.y];
    });
    var order = entity.degree + 1;
    var knots = entity.knots;
    polyline = [];
    for (var t = 0; t <= 100; t += 1) {
      var p = bspline(t / 100, order, controlPoints, knots);
      polyline.push(p);
    }
  }

  if (!polyline) {
    logger.warn('unsupported entity for converting to polyline:', entity.type);
    return [];
  }
  return applyTransforms(polyline, entity.transforms);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var V3 = function () {
  function V3(x, y, z) {
    _classCallCheck(this, V3);

    if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object') {
      this.x = x.x;
      this.y = x.y;
      this.z = x.z;
    } else {
      this.x = x;
      this.y = y;
      this.z = z;
    }
  }

  _createClass(V3, [{
    key: 'equals',
    value: function equals(other) {
      return this.x === other.x && this.y === other.y && this.z === other.z;
    }
  }, {
    key: 'length',
    value: function length() {
      return Math.sqrt(this.dot(this));
    }
  }, {
    key: 'neg',
    value: function neg() {
      return new V3(-this.x, -this.y, -this.z);
    }
  }, {
    key: 'add',
    value: function add(b) {
      return new V3(this.x + b.x, this.y + b.y, this.z + b.z);
    }
  }, {
    key: 'sub',
    value: function sub(b) {
      return new V3(this.x - b.x, this.y - b.y, this.z - b.z);
    }
  }, {
    key: 'multiply',
    value: function multiply(w) {
      return new V3(this.x * w, this.y * w, this.z * w);
    }
  }, {
    key: 'norm',
    value: function norm() {
      return this.multiply(1 / this.length());
    }
  }, {
    key: 'dot',
    value: function dot(b) {
      return this.x * b.x + this.y * b.y + this.z * b.z;
    }
  }, {
    key: 'cross',
    value: function cross(b) {
      return new V3(this.y * b.z - this.z * b.y, this.z * b.x - this.x * b.z, this.x * b.y - this.y * b.x);
    }
  }]);

  return V3;
}();

exports.default = V3;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [[0, 0, 0], [255, 0, 0], [255, 255, 0], [0, 255, 0], [0, 255, 255], [0, 0, 255], [255, 0, 255], [255, 255, 255], [65, 65, 65], [128, 128, 128], [255, 0, 0], [255, 170, 170], [189, 0, 0], [189, 126, 126], [129, 0, 0], [129, 86, 86], [104, 0, 0], [104, 69, 69], [79, 0, 0], [79, 53, 53], [255, 63, 0], [255, 191, 170], [189, 46, 0], [189, 141, 126], [129, 31, 0], [129, 96, 86], [104, 25, 0], [104, 78, 69], [79, 19, 0], [79, 59, 53], [255, 127, 0], [255, 212, 170], [189, 94, 0], [189, 157, 126], [129, 64, 0], [129, 107, 86], [104, 52, 0], [104, 86, 69], [79, 39, 0], [79, 66, 53], [255, 191, 0], [255, 234, 170], [189, 141, 0], [189, 173, 126], [129, 96, 0], [129, 118, 86], [104, 78, 0], [104, 95, 69], [79, 59, 0], [79, 73, 53], [255, 255, 0], [255, 255, 170], [189, 189, 0], [189, 189, 126], [129, 129, 0], [129, 129, 86], [104, 104, 0], [104, 104, 69], [79, 79, 0], [79, 79, 53], [191, 255, 0], [234, 255, 170], [141, 189, 0], [173, 189, 126], [96, 129, 0], [118, 129, 86], [78, 104, 0], [95, 104, 69], [59, 79, 0], [73, 79, 53], [127, 255, 0], [212, 255, 170], [94, 189, 0], [157, 189, 126], [64, 129, 0], [107, 129, 86], [52, 104, 0], [86, 104, 69], [39, 79, 0], [66, 79, 53], [63, 255, 0], [191, 255, 170], [46, 189, 0], [141, 189, 126], [31, 129, 0], [96, 129, 86], [25, 104, 0], [78, 104, 69], [19, 79, 0], [59, 79, 53], [0, 255, 0], [170, 255, 170], [0, 189, 0], [126, 189, 126], [0, 129, 0], [86, 129, 86], [0, 104, 0], [69, 104, 69], [0, 79, 0], [53, 79, 53], [0, 255, 63], [170, 255, 191], [0, 189, 46], [126, 189, 141], [0, 129, 31], [86, 129, 96], [0, 104, 25], [69, 104, 78], [0, 79, 19], [53, 79, 59], [0, 255, 127], [170, 255, 212], [0, 189, 94], [126, 189, 157], [0, 129, 64], [86, 129, 107], [0, 104, 52], [69, 104, 86], [0, 79, 39], [53, 79, 66], [0, 255, 191], [170, 255, 234], [0, 189, 141], [126, 189, 173], [0, 129, 96], [86, 129, 118], [0, 104, 78], [69, 104, 95], [0, 79, 59], [53, 79, 73], [0, 255, 255], [170, 255, 255], [0, 189, 189], [126, 189, 189], [0, 129, 129], [86, 129, 129], [0, 104, 104], [69, 104, 104], [0, 79, 79], [53, 79, 79], [0, 191, 255], [170, 234, 255], [0, 141, 189], [126, 173, 189], [0, 96, 129], [86, 118, 129], [0, 78, 104], [69, 95, 104], [0, 59, 79], [53, 73, 79], [0, 127, 255], [170, 212, 255], [0, 94, 189], [126, 157, 189], [0, 64, 129], [86, 107, 129], [0, 52, 104], [69, 86, 104], [0, 39, 79], [53, 66, 79], [0, 63, 255], [170, 191, 255], [0, 46, 189], [126, 141, 189], [0, 31, 129], [86, 96, 129], [0, 25, 104], [69, 78, 104], [0, 19, 79], [53, 59, 79], [0, 0, 255], [170, 170, 255], [0, 0, 189], [126, 126, 189], [0, 0, 129], [86, 86, 129], [0, 0, 104], [69, 69, 104], [0, 0, 79], [53, 53, 79], [63, 0, 255], [191, 170, 255], [46, 0, 189], [141, 126, 189], [31, 0, 129], [96, 86, 129], [25, 0, 104], [78, 69, 104], [19, 0, 79], [59, 53, 79], [127, 0, 255], [212, 170, 255], [94, 0, 189], [157, 126, 189], [64, 0, 129], [107, 86, 129], [52, 0, 104], [86, 69, 104], [39, 0, 79], [66, 53, 79], [191, 0, 255], [234, 170, 255], [141, 0, 189], [173, 126, 189], [96, 0, 129], [118, 86, 129], [78, 0, 104], [95, 69, 104], [59, 0, 79], [73, 53, 79], [255, 0, 255], [255, 170, 255], [189, 0, 189], [189, 126, 189], [129, 0, 129], [129, 86, 129], [104, 0, 104], [104, 69, 104], [79, 0, 79], [79, 53, 79], [255, 0, 191], [255, 170, 234], [189, 0, 141], [189, 126, 173], [129, 0, 96], [129, 86, 118], [104, 0, 78], [104, 69, 95], [79, 0, 59], [79, 53, 73], [255, 0, 127], [255, 170, 212], [189, 0, 94], [189, 126, 157], [129, 0, 64], [129, 86, 107], [104, 0, 52], [104, 69, 86], [79, 0, 39], [79, 53, 66], [255, 0, 63], [255, 170, 191], [189, 0, 46], [189, 126, 141], [129, 0, 31], [129, 86, 96], [104, 0, 25], [104, 69, 78], [79, 0, 19], [79, 53, 59], [51, 51, 51], [80, 80, 80], [105, 105, 105], [130, 130, 130], [190, 190, 190], [255, 255, 255]];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

window.dxf = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.entityToPolyline = exports.toSVG = exports.groupEntitiesByLayer = exports.denormalise = exports.BoundingBox = exports.colors = exports.config = exports.parseString = undefined;

var _header = __webpack_require__(14);

var _header2 = _interopRequireDefault(_header);

var _tables = __webpack_require__(15);

var _tables2 = _interopRequireDefault(_tables);

var _blocks = __webpack_require__(16);

var _blocks2 = _interopRequireDefault(_blocks);

var _entities = __webpack_require__(4);

var _entities2 = _interopRequireDefault(_entities);

var _config = __webpack_require__(3);

var _config2 = _interopRequireDefault(_config);

var _BoundingBox = __webpack_require__(5);

var _BoundingBox2 = _interopRequireDefault(_BoundingBox);

var _denormalise = __webpack_require__(6);

var _denormalise2 = _interopRequireDefault(_denormalise);

var _groupEntitiesByLayer = __webpack_require__(40);

var _groupEntitiesByLayer2 = _interopRequireDefault(_groupEntitiesByLayer);

var _toSVG = __webpack_require__(41);

var _toSVG2 = _interopRequireDefault(_toSVG);

var _colors = __webpack_require__(11);

var _colors2 = _interopRequireDefault(_colors);

var _entityToPolyline = __webpack_require__(9);

var _entityToPolyline2 = _interopRequireDefault(_entityToPolyline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toLines = function toLines(string) {
  var lines = string.split(/\r\n|\r|\n/g);
  var contentLines = lines.filter(function (l) {
    return l.trim !== 'EOF';
  });
  return contentLines;
};

// Parse the value into the native representation
var parseValue = function parseValue(type, value) {
  if (type >= 10 && type < 60) {
    return parseFloat(value, 10);
  } else if (type >= 210 && type < 240) {
    return parseFloat(value, 10);
  } else if (type >= 60 && type < 100) {
    return parseInt(value, 10);
  } else {
    return value;
  }
};

// Content lines are alternate lines of type and value
var convertToTypesAndValues = function convertToTypesAndValues(contentLines) {
  var state = 'type';
  var type = void 0;
  var typesAndValues = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = contentLines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var line = _step.value;

      if (state === 'type') {
        type = parseInt(line, 10);
        state = 'value';
      } else {
        typesAndValues.push([type, parseValue(type, line)]);
        state = 'type';
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return typesAndValues;
};

var separateSections = function separateSections(tuples) {
  var sectionTuples = void 0;
  return tuples.reduce(function (sections, tuple) {
    if (tuple[0] === 0 && tuple[1] === 'SECTION') {
      sectionTuples = [];
    } else if (tuple[0] === 0 && tuple[1] === 'ENDSEC') {
      sections.push(sectionTuples);
      sectionTuples = undefined;
    } else if (sectionTuples !== undefined) {
      sectionTuples.push(tuple);
    }
    return sections;
  }, []);
};

// Each section start with the type tuple, then proceeds
// with the contents of the section
var reduceSection = function reduceSection(acc, section) {
  var sectionType = section[0][1];
  var contentTuples = section.slice(1);
  switch (sectionType) {
    case 'HEADER':
      acc.header = (0, _header2.default)(contentTuples);
      break;
    case 'TABLES':
      acc.tables = (0, _tables2.default)(contentTuples);
      break;
    case 'BLOCKS':
      acc.blocks = (0, _blocks2.default)(contentTuples);
      break;
    case 'ENTITIES':
      acc.entities = (0, _entities2.default)(contentTuples);
      break;
    default:
  }
  return acc;
};

var parseString = exports.parseString = function parseString(string) {
  var lines = toLines(string);
  var tuples = convertToTypesAndValues(lines);
  var sections = separateSections(tuples);
  var result = sections.reduce(reduceSection, {
    // In the event of empty sections
    header: {},
    blocks: [],
    entities: []
  });
  return result;
};

exports.config = _config2.default;
exports.colors = _colors2.default;
exports.BoundingBox = _BoundingBox2.default;
exports.denormalise = _denormalise2.default;
exports.groupEntitiesByLayer = _groupEntitiesByLayer2.default;
exports.toSVG = _toSVG2.default;
exports.entityToPolyline = _entityToPolyline2.default;
exports.toOnlyLines = _toSVG2.toOnlyLines;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (tuples) {
  var state = void 0;
  var header = {};

  tuples.forEach(function (tuple) {
    var type = tuple[0];
    var value = tuple[1];

    switch (value) {
      case '$EXTMIN':
        header.extMin = {};
        state = 'extMin';
        return;
      case '$EXTMAX':
        header.extMax = {};
        state = 'extMax';
        return;
      default:
        if (state === 'extMin') {
          switch (type) {
            case 10:
              header.extMin.x = value;
              break;
            case 20:
              header.extMin.y = value;
              break;
            case 30:
              header.extMin.z = value;
              state = undefined;
              break;
          }
        }
        if (state === 'extMax') {
          switch (type) {
            case 10:
              header.extMax.x = value;
              break;
            case 20:
              header.extMax.y = value;
              break;
            case 30:
              header.extMax.z = value;
              state = undefined;
              break;
          }
        }
    }
  });

  return header;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var layerHandler = function layerHandler(tuples) {
  return tuples.reduce(function (layer, tuple) {
    var type = tuple[0];
    var value = tuple[1];
    // https://www.autodesk.com/techpubs/autocad/acad2000/dxf/layer_dxf_04.htm
    switch (type) {
      case 2:
        layer.name = value;
        break;
      case 6:
        layer.lineTypeName = value;
        break;
      case 62:
        layer.colorNumber = value;
        break;
      case 70:
        layer.flags = value;
        break;
      case 290:
        layer.plot = parseInt(value) !== 0;
        break;
      case 370:
        layer.lineWeightEnum = value;
        break;
      default:
    }
    return layer;
  }, { type: 'LAYER' });
};

var styleHandler = function styleHandler(tuples) {
  return tuples.reduce(function (style, tuple) {
    var type = tuple[0];
    var value = tuple[1];
    switch (type) {
      case 2:
        style.name = value;
        break;
      case 6:
        style.lineTypeName = value;
        break;
      case 40:
        style.fixedTextHeight = value;
        break;
      case 41:
        style.widthFactor = value;
        break;
      case 50:
        style.obliqueAngle = value;
        break;
      case 71:
        style.flags = value;
        break;
      case 42:
        style.lastHeightUsed = value;
        break;
      case 3:
        style.primaryFontFileName = value;
        break;
      case 4:
        style.bigFontFileName = value;
        break;
      default:
    }
    return style;
  }, { type: 'STYLE' });
};

var tableHandler = function tableHandler(tuples, tableType, handler) {
  var tableRowsTuples = [];

  var tableRowTuples = void 0;
  tuples.forEach(function (tuple) {
    var type = tuple[0];
    var value = tuple[1];
    if ((type === 0 || type === 2) && value === tableType) {
      tableRowTuples = [];
      tableRowsTuples.push(tableRowTuples);
    } else {
      tableRowTuples.push(tuple);
    }
  });

  return tableRowsTuples.reduce(function (acc, rowTuples) {
    var tableRow = handler(rowTuples);
    if (tableRow.name) {
      acc[tableRow.name] = tableRow;
    } else {
      _logger2.default.warn('table row without name:', tableRow);
    }
    return acc;
  }, {});
};

exports.default = function (tuples) {
  var tableGroups = [];
  var tableTuples = void 0;
  tuples.forEach(function (tuple) {
    // const type = tuple[0];
    var value = tuple[1];
    if (value === 'TABLE') {
      tableTuples = [];
      tableGroups.push(tableTuples);
    } else if (value === 'ENDTAB') {
      tableGroups.push(tableTuples);
    } else {
      tableTuples.push(tuple);
    }
  });

  var stylesTuples = [];
  var layersTuples = [];
  tableGroups.forEach(function (group) {
    if (group[0][1] === 'STYLE') {
      stylesTuples = group;
    } else if (group[0][1] === 'LTYPE') {
      _logger2.default.warn('LTYPE in tables not supported');
    } else if (group[0][1] === 'LAYER') {
      layersTuples = group;
    }
  });

  return {
    layers: tableHandler(layersTuples, 'LAYER', layerHandler),
    styles: tableHandler(stylesTuples, 'STYLE', styleHandler)
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _entities = __webpack_require__(4);

var _entities2 = _interopRequireDefault(_entities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (tuples) {
  var state = void 0;
  var blocks = [];
  var block = void 0;
  var entitiesTuples = [];

  tuples.forEach(function (tuple) {
    var type = tuple[0];
    var value = tuple[1];

    if (value === 'BLOCK') {
      state = 'block';
      block = {};
      entitiesTuples = [];
      blocks.push(block);
    } else if (value === 'ENDBLK') {
      if (state === 'entities') {
        block.entities = (0, _entities2.default)(entitiesTuples);
      } else {
        block.entities = [];
      }
      entitiesTuples = undefined;
      state = undefined;
    } else if (state === 'block' && type !== 0) {
      switch (type) {
        case 1:
          block.xref = value;
          break;
        case 2:
          block.name = value;
          break;
        case 10:
          block.x = value;
          break;
        case 20:
          block.y = value;
          break;
        case 30:
          block.z = value;
          break;
        default:
          break;
      }
    } else if (state === 'block' && type === 0) {
      state = 'entities';
      entitiesTuples.push(tuple);
    } else if (state === 'entities') {
      entitiesTuples.push(tuple);
    }
  });

  return blocks;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process = exports.TYPE = undefined;

var _common = __webpack_require__(0);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = exports.TYPE = 'POINT';

var process = exports.process = function process(tuples) {
  return tuples.reduce(function (entity, tuple) {
    var type = tuple[0];
    var value = tuple[1];
    switch (type) {
      case 10:
        entity.x = value;
        break;
      case 20:
        entity.y = value;
        break;
      case 30:
        entity.z = value;
        break;
      case 39:
        entity.thickness = value;
        break;
      default:
        Object.assign(entity, (0, _common2.default)(type, value));
        break;
    }
    return entity;
  }, {
    type: TYPE
  });
};

exports.default = { TYPE: TYPE, process: process };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process = exports.TYPE = undefined;

var _common = __webpack_require__(0);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = exports.TYPE = 'LINE';

var process = exports.process = function process(tuples) {
  return tuples.reduce(function (entity, tuple) {
    var type = tuple[0];
    var value = tuple[1];
    switch (type) {
      case 10:
        entity.start.x = value;
        break;
      case 20:
        entity.start.y = value;
        break;
      case 30:
        entity.start.z = value;
        break;
      case 39:
        entity.thickness = value;
        break;
      case 11:
        entity.end.x = value;
        break;
      case 21:
        entity.end.y = value;
        break;
      case 31:
        entity.end.z = value;
        break;
      default:
        Object.assign(entity, (0, _common2.default)(type, value));
        break;
    }
    return entity;
  }, {
    type: TYPE,
    start: {},
    end: {}
  });
};

exports.default = { TYPE: TYPE, process: process };

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process = exports.TYPE = undefined;

var _common = __webpack_require__(0);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = exports.TYPE = 'LWPOLYLINE';

var process = exports.process = function process(tuples) {
  var vertex = void 0;
  return tuples.reduce(function (entity, tuple) {
    var type = tuple[0];
    var value = tuple[1];
    switch (type) {
      case 70:
        entity.closed = (value & 1) === 1;
        break;
      case 10:
        vertex = {
          x: value,
          y: 0
        };
        entity.vertices.push(vertex);
        break;
      case 20:
        vertex.y = value;
        break;
      case 39:
        entity.thickness = value;
        break;
      case 42:
        // Bulge (multiple entries; one entry for each vertex)  (optional; default = 0).
        vertex.bulge = value;
        break;
      default:
        Object.assign(entity, (0, _common2.default)(type, value));
        break;
    }
    return entity;
  }, {
    type: TYPE,
    vertices: []
  });
};

exports.default = { TYPE: TYPE, process: process };

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process = exports.TYPE = undefined;

var _common = __webpack_require__(0);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = exports.TYPE = 'POLYLINE';

var process = exports.process = function process(tuples) {
  return tuples.reduce(function (entity, tuple) {
    var type = tuple[0];
    var value = tuple[1];
    switch (type) {
      case 70:
        entity.closed = (value & 1) === 1;
        break;
      case 39:
        entity.thickness = value;
        break;
      default:
        Object.assign(entity, (0, _common2.default)(type, value));
        break;
    }
    return entity;
  }, {
    type: TYPE,
    vertices: []
  });
};

exports.default = { TYPE: TYPE, process: process };

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TYPE = exports.TYPE = 'VERTEX';

var process = exports.process = function process(tuples) {
  return tuples.reduce(function (entity, tuple) {
    var type = tuple[0];
    var value = tuple[1];
    switch (type) {
      case 10:
        entity.x = value;
        break;
      case 20:
        entity.y = value;
        break;
      case 30:
        entity.z = value;
        break;
      case 42:
        entity.bulge = value;
        break;
      default:
        break;
    }
    return entity;
  }, {});
};

exports.default = { TYPE: TYPE, process: process };

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process = exports.TYPE = undefined;

var _common = __webpack_require__(0);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = exports.TYPE = 'CIRCLE';

var process = exports.process = function process(tuples) {
  return tuples.reduce(function (entity, tuple) {
    var type = tuple[0];
    var value = tuple[1];
    switch (type) {
      case 10:
        entity.x = value;
        break;
      case 20:
        entity.y = value;
        break;
      case 30:
        entity.z = value;
        break;
      case 40:
        entity.r = value;
        break;
      default:
        Object.assign(entity, (0, _common2.default)(type, value));
        break;
    }
    return entity;
  }, {
    type: TYPE
  });
};

exports.default = { TYPE: TYPE, process: process };

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process = exports.TYPE = undefined;

var _common = __webpack_require__(0);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = exports.TYPE = 'ARC';

var process = exports.process = function process(tuples) {
  return tuples.reduce(function (entity, tuple) {
    var type = tuple[0];
    var value = tuple[1];
    switch (type) {
      case 10:
        entity.x = value;
        break;
      case 20:
        entity.y = value;
        break;
      case 30:
        entity.z = value;
        break;
      case 39:
        entity.thickness = value;
        break;
      case 40:
        entity.r = value;
        break;
      case 50:
        // Some idiot decided that ELLIPSE angles are in radians but
        // ARC angles are in degrees
        entity.startAngle = value / 180 * Math.PI;
        break;
      case 51:
        entity.endAngle = value / 180 * Math.PI;
        break;
      default:
        Object.assign(entity, (0, _common2.default)(type, value));
        break;
    }
    return entity;
  }, {
    type: TYPE
  });
};

exports.default = { TYPE: TYPE, process: process };

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process = exports.TYPE = undefined;

var _common = __webpack_require__(0);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = exports.TYPE = 'ELLIPSE';

var process = exports.process = function process(tuples) {
  return tuples.reduce(function (entity, tuple) {
    var type = tuple[0];
    var value = tuple[1];
    switch (type) {
      case 10:
        entity.x = value;
        break;
      case 11:
        entity.majorX = value;
        break;
      case 20:
        entity.y = value;
        break;
      case 21:
        entity.majorY = value;
        break;
      case 30:
        entity.z = value;
        break;
      case 31:
        entity.majorZ = value;
        break;
      case 40:
        entity.axisRatio = value;
        break;
      case 41:
        entity.startAngle = value;
        break;
      case 42:
        entity.endAngle = value;
        break;
      default:
        Object.assign(entity, (0, _common2.default)(type, value));
        break;
    }
    return entity;
  }, {
    type: TYPE
  });
};

exports.default = { TYPE: TYPE, process: process };

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process = exports.TYPE = undefined;

var _common = __webpack_require__(0);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = exports.TYPE = 'SPLINE';

var process = exports.process = function process(tuples) {
  var controlPoint = void 0;
  return tuples.reduce(function (entity, tuple) {
    var type = tuple[0];
    var value = tuple[1];
    switch (type) {
      case 10:
        controlPoint = {
          x: value,
          y: 0
        };
        entity.controlPoints.push(controlPoint);
        break;
      case 20:
        controlPoint.y = value;
        break;
      case 30:
        controlPoint.z = value;
        break;
      case 40:
        entity.knots.push(value);
        break;
      case 42:
        entity.knotTolerance = value;
        break;
      case 43:
        entity.controlPointTolerance = value;
        break;
      case 44:
        entity.fitTolerance = value;
        break;
      case 70:
        // Spline flag (bit coded):
        // 1 = Closed spline
        // 2 = Periodic spline
        // 4 = Rational spline
        // 8 = Planar
        // 16 = Linear (planar bit is also set)
        entity.flag = value;
        entity.closed = (value & 1) === 1;
        break;
      case 71:
        entity.degree = value;
        break;
      case 72:
        entity.numberOfKnots = value;
        break;
      case 73:
        entity.numberOfControlPoints = value;
        break;
      case 74:
        entity.numberOfFitPoints = value;
        break;
      default:
        Object.assign(entity, (0, _common2.default)(type, value));
        break;
    }
    return entity;
  }, {
    type: TYPE,
    controlPoints: [],
    knots: []
  });
};

exports.default = { TYPE: TYPE, process: process };

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process = exports.TYPE = undefined;

var _common = __webpack_require__(0);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = exports.TYPE = 'SOLID';

var process = exports.process = function process(tuples) {
  return tuples.reduce(function (entity, tuple) {
    var type = tuple[0];
    var value = tuple[1];
    switch (type) {
      case 10:
        entity.corners[0].x = value;
        break;
      case 20:
        entity.corners[0].y = value;
        break;
      case 30:
        entity.corners[0].z = value;
        break;
      case 11:
        entity.corners[1].x = value;
        break;
      case 21:
        entity.corners[1].y = value;
        break;
      case 31:
        entity.corners[1].z = value;
        break;
      case 12:
        entity.corners[2].x = value;
        break;
      case 22:
        entity.corners[2].y = value;
        break;
      case 32:
        entity.corners[2].z = value;
        break;
      case 13:
        entity.corners[3].x = value;
        break;
      case 23:
        entity.corners[3].y = value;
        break;
      case 33:
        entity.corners[3].z = value;
        break;
      case 39:
        entity.thickness = value;
        break;
      default:
        Object.assign(entity, (0, _common2.default)(type, value));
        break;
    }
    return entity;
  }, {
    type: TYPE,
    corners: [{}, {}, {}, {}]
  });
};

exports.default = { TYPE: TYPE, process: process };

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process = exports.TYPE = undefined;

var _common = __webpack_require__(0);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = exports.TYPE = 'MTEXT';

var simpleCodes = {
  10: 'x',
  20: 'y',
  30: 'z',
  40: 'nominalTextHeight',
  41: 'refRectangleWidth',
  71: 'attachmentPoint',
  72: 'drawingDirection',
  7: 'styleName',
  11: 'xAxisX',
  21: 'xAxisY',
  31: 'xAxisZ',
  42: 'horizontalWidth',
  43: 'verticalHeight',
  73: 'lineSpacingStyle',
  44: 'lineSpacingFactor',
  90: 'backgroundFill',
  420: 'bgColorRGB0',
  421: 'bgColorRGB1',
  422: 'bgColorRGB2',
  423: 'bgColorRGB3',
  424: 'bgColorRGB4',
  425: 'bgColorRGB5',
  426: 'bgColorRGB6',
  427: 'bgColorRGB7',
  428: 'bgColorRGB8',
  429: 'bgColorRGB9',
  430: 'bgColorName0',
  431: 'bgColorName1',
  432: 'bgColorName2',
  433: 'bgColorName3',
  434: 'bgColorName4',
  435: 'bgColorName5',
  436: 'bgColorName6',
  437: 'bgColorName7',
  438: 'bgColorName8',
  439: 'bgColorName9',
  45: 'fillBoxStyle',
  63: 'bgFillColor',
  441: 'bgFillTransparency',
  75: 'columnType',
  76: 'columnCount',
  78: 'columnFlowReversed',
  79: 'columnAutoheight',
  48: 'columnWidth',
  49: 'columnGutter',
  50: 'columnHeights'
};

var process = exports.process = function process(tuples) {
  return tuples.reduce(function (entity, tuple) {
    var type = tuple[0];
    var value = tuple[1];

    if (simpleCodes.hasOwnProperty(type)) {
      entity[simpleCodes[type]] = value;
    } else if (type === 1 || type === 3) {
      entity.string += value;
    } else if (type === 50) {
      // Rotation angle in radians
      entity.xAxisX = Math.cos(value);
      entity.xAxisY = Math.sin(value);
    } else {
      Object.assign(entity, (0, _common2.default)(type, value));
    }

    return entity;
  }, {
    type: TYPE,
    string: ''
  });
};

exports.default = { TYPE: TYPE, process: process };

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process = exports.TYPE = undefined;

var _common = __webpack_require__(0);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = exports.TYPE = 'INSERT';

var process = exports.process = function process(tuples) {
  return tuples.reduce(function (entity, tuple) {
    var type = tuple[0];
    var value = tuple[1];
    switch (type) {
      case 2:
        entity.block = value;
        break;
      case 10:
        entity.x = value;
        break;
      case 20:
        entity.y = value;
        break;
      case 30:
        entity.z = value;
        break;
      case 41:
        entity.xscale = value;
        break;
      case 42:
        entity.yscale = value;
        break;
      case 43:
        entity.zscale = value;
        break;
      case 44:
        entity.columnSpacing = value;
        break;
      case 45:
        entity.rowSpacing = value;
        break;
      case 50:
        entity.rotation = value;
        break;
      case 70:
        entity.columnCount = value;
        break;
      case 71:
        entity.rowCount = value;
        break;
      case 210:
        entity.xExtrusion = value;
        break;
      case 220:
        entity.yExtrusion = value;
        break;
      case 230:
        entity.zExtrusion = value;
        break;
      default:
        Object.assign(entity, (0, _common2.default)(type, value));
        break;
    }
    return entity;
  }, {
    type: TYPE
  });
};

exports.default = { TYPE: TYPE, process: process };

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseClone = __webpack_require__(30),
    bindCallback = __webpack_require__(39);

/**
 * Creates a deep clone of `value`. If `customizer` is provided it's invoked
 * to produce the cloned values. If `customizer` returns `undefined` cloning
 * is handled by the method instead. The `customizer` is bound to `thisArg`
 * and invoked with up to three argument; (value [, index|key, object]).
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
 * The enumerable properties of `arguments` objects and objects created by
 * constructors other than `Object` are cloned to plain `Object` objects. An
 * empty object is returned for uncloneable values such as functions, DOM nodes,
 * Maps, Sets, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to deep clone.
 * @param {Function} [customizer] The function to customize cloning values.
 * @param {*} [thisArg] The `this` binding of `customizer`.
 * @returns {*} Returns the deep cloned value.
 * @example
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * var deep = _.cloneDeep(users);
 * deep[0] === users[0];
 * // => false
 *
 * // using a customizer callback
 * var el = _.cloneDeep(document.body, function(value) {
 *   if (_.isElement(value)) {
 *     return value.cloneNode(true);
 *   }
 * });
 *
 * el === document.body
 * // => false
 * el.nodeName
 * // => BODY
 * el.childNodes.length;
 * // => 20
 */
function cloneDeep(value, customizer, thisArg) {
  return typeof customizer == 'function'
    ? baseClone(value, true, bindCallback(customizer, thisArg, 3))
    : baseClone(value, true);
}

module.exports = cloneDeep;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash 3.3.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var arrayCopy = __webpack_require__(32),
    arrayEach = __webpack_require__(33),
    baseAssign = __webpack_require__(34),
    baseFor = __webpack_require__(38),
    isArray = __webpack_require__(8),
    keys = __webpack_require__(7);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
cloneableTags[dateTag] = cloneableTags[float32Tag] =
cloneableTags[float64Tag] = cloneableTags[int8Tag] =
cloneableTags[int16Tag] = cloneableTags[int32Tag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[stringTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[mapTag] = cloneableTags[setTag] =
cloneableTags[weakMapTag] = false;

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Native method references. */
var ArrayBuffer = global.ArrayBuffer,
    Uint8Array = global.Uint8Array;

/**
 * The base implementation of `_.clone` without support for argument juggling
 * and `this` binding `customizer` functions.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {Function} [customizer] The function to customize cloning values.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The object `value` belongs to.
 * @param {Array} [stackA=[]] Tracks traversed source objects.
 * @param {Array} [stackB=[]] Associates clones with source counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return arrayCopy(value, result);
    }
  } else {
    var tag = objToString.call(value),
        isFunc = tag == funcTag;

    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return baseAssign(result, value);
      }
    } else {
      return cloneableTags[tag]
        ? initCloneByTag(value, tag, isDeep)
        : (object ? value : {});
    }
  }
  // Check for circular references and return its corresponding clone.
  stackA || (stackA = []);
  stackB || (stackB = []);

  var length = stackA.length;
  while (length--) {
    if (stackA[length] == value) {
      return stackB[length];
    }
  }
  // Add the source value to the stack of traversed objects and associate it with its clone.
  stackA.push(value);
  stackB.push(result);

  // Recursively populate clone (susceptible to call stack limits).
  (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
    result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
  });
  return result;
}

/**
 * The base implementation of `_.forOwn` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return baseFor(object, iteratee, keys);
}

/**
 * Creates a clone of the given array buffer.
 *
 * @private
 * @param {ArrayBuffer} buffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function bufferClone(buffer) {
  var result = new ArrayBuffer(buffer.byteLength),
      view = new Uint8Array(result);

  view.set(new Uint8Array(buffer));
  return result;
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add array properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  var Ctor = object.constructor;
  if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
    Ctor = Object;
  }
  return new Ctor;
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return bufferClone(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      var buffer = object.buffer;
      return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      var result = new Ctor(object.source, reFlags.exec(object));
      result.lastIndex = object.lastIndex;
  }
  return result;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = baseClone;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function arrayCopy(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = arrayCopy;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * A specialized version of `_.forEach` for arrays without support for callback
 * shorthands or `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseCopy = __webpack_require__(35),
    keys = __webpack_require__(7);

/**
 * The base implementation of `_.assign` without support for argument juggling,
 * multiple sources, and `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return source == null
    ? object
    : baseCopy(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property names to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @returns {Object} Returns `object`.
 */
function baseCopy(source, props, object) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    object[key] = source[key];
  }
  return object;
}

module.exports = baseCopy;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

/**
 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = getNative;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isArguments;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * The base implementation of `baseForIn` and `baseForOwn` which iterates
 * over `object` properties returned by `keysFunc` invoking `iteratee` for
 * each property. Iteratee functions may exit iteration early by explicitly
 * returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * Creates a base function for methods like `_.forIn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = baseFor;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * A specialized version of `baseCallback` which only supports `this` binding
 * and specifying the number of arguments to provide to `func`.
 *
 * @private
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {number} [argCount] The number of arguments to provide to `func`.
 * @returns {Function} Returns the callback.
 */
function bindCallback(func, thisArg, argCount) {
  if (typeof func != 'function') {
    return identity;
  }
  if (thisArg === undefined) {
    return func;
  }
  switch (argCount) {
    case 1: return function(value) {
      return func.call(thisArg, value);
    };
    case 3: return function(value, index, collection) {
      return func.call(thisArg, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(thisArg, accumulator, value, index, collection);
    };
    case 5: return function(value, other, key, object, source) {
      return func.call(thisArg, value, other, key, object, source);
    };
  }
  return function() {
    return func.apply(thisArg, arguments);
  };
}

/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'user': 'fred' };
 *
 * _.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = bindCallback;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (entities) {
  return entities.reduce(function (acc, entity) {
    var layer = entity.layer;
    if (!acc[layer]) {
      acc[layer] = [];
    }
    acc[layer].push(entity);
    return acc;
  }, {});
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prettyData = __webpack_require__(42);

var _BoundingBox = __webpack_require__(5);

var _BoundingBox2 = _interopRequireDefault(_BoundingBox);

var _denormalise = __webpack_require__(6);

var _denormalise2 = _interopRequireDefault(_denormalise);

var _entityToPolyline = __webpack_require__(9);

var _entityToPolyline2 = _interopRequireDefault(_entityToPolyline);

var _colors = __webpack_require__(11);

var _colors2 = _interopRequireDefault(_colors);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var polylineToPath = function polylineToPath(rgb, polyline) {
  var color24bit = rgb[2] | rgb[1] << 8 | rgb[0] << 16;
  var prepad = color24bit.toString(16);
  for (var i = 0, il = 6 - prepad.length; i < il; ++i) {
    prepad = '0' + prepad;
  }
  var hex = '#' + prepad;

  // SVG is white by default, so make white lines black
  if (hex === '#ffffff') {
    hex = '#000000';
  }

  var d = polyline.reduce(function (acc, point, i) {
    acc += i === 0 ? 'M' : 'L';
    acc += point[0] + ',' + point[1];
    return acc;
  }, '');
  return '<path fill="none" stroke="' + hex + '" stroke-width="0.1%" d="' + d + '"/>';
};

/**
 * Convert the interpolate polylines to SVG
 */

exports.default = function (parsed) {
  var entities = (0, _denormalise2.default)(parsed);
  var polylines = entities.map(function (e) {
    return (0, _entityToPolyline2.default)(e);
  });

  var bbox = new _BoundingBox2.default();
  polylines.forEach(function (polyline) {
    polyline.forEach(function (point) {
      bbox.expandByPoint(point[0], point[1]);
    });
  });

  var paths = [];
  polylines.forEach(function (polyline, i) {
    var entity = entities[i];
    var layerTable = parsed.tables.layers[entity.layer];
    if (!layerTable) {
      throw new Error('no layer table for layer:' + entity.layer);
    }

    // TODO: not sure if this prioritization is good (entity color first, layer color as fallback)
    var colorNumber = 'colorNumber' in entity ? entity.colorNumber : layerTable.colorNumber;
    var rgb = _colors2.default[colorNumber];
    if (rgb === undefined) {
      _logger2.default.warn('Color index', colorNumber, 'invalid, defaulting to black');
      rgb = [0, 0, 0];
    }

    var p2 = polyline.map(function (p) {
      return [p[0], bbox.maxY - p[1]];
    });
    paths.push(polylineToPath(rgb, p2));
  });

  var svgString = '<?xml version="1.0"?>';
  svgString += '<svg xmlns="http://www.w3.org/2000/svg"';
  svgString += ' xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"';
  svgString += ' preserveAspectRatio="xMinYMin meet"';
  svgString += ' viewBox="' + (-1 + bbox.minX) + ' ' + -1 + ' ' + (bbox.width + 2) + ' ' + (bbox.height + 2) + '"';
  svgString += ' width="100%" height="100%">' + paths + '</svg>';
  return _prettyData.pd.xml(svgString);
};



exports.toOnlyLines = function (parsed) {
  var entities = (0, _denormalise2.default)(parsed);
  var polylines = entities.map(function (e) {
    return (0, _entityToPolyline2.default)(e);
  });

  var bbox = new _BoundingBox2.default();
  polylines.forEach(function (polyline) {
    polyline.forEach(function (point) {
      bbox.expandByPoint(point[0], point[1]);
    });
  });

  return polylines;
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

/**
* pretty-data - nodejs plugin to pretty-print or minify data in XML, JSON and CSS formats.
*  
* Version - 0.40.0
* Copyright (c) 2012 Vadim Kiryukhin
* vkiryukhin @ gmail.com
* http://www.eslinstructor.net/pretty-data/
* 
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*
*	pd.xml(data ) - pretty print XML;
*	pd.json(data) - pretty print JSON;
*	pd.css(data ) - pretty print CSS;
*	pd.sql(data)  - pretty print SQL;
*
*	pd.xmlmin(data [, preserveComments] ) - minify XML; 
*	pd.jsonmin(data)                      - minify JSON; 
*	pd.cssmin(data [, preserveComments] ) - minify CSS; 
*	pd.sqlmin(data)                       - minify SQL; 
*
* PARAMETERS:
*
*	@data  			- String; XML, JSON, CSS or SQL text to beautify;
* 	@preserveComments	- Bool (optional, used in minxml and mincss only); 
*				  Set this flag to true to prevent removing comments from @text; 
*	@Return 		- String;
*	
* USAGE:
*	
*	var pd  = require('pretty-data').pd;
*
*	var xml_pp   = pd.xml(xml_text);
*	var xml_min  = pd.xmlmin(xml_text [,true]);
*	var json_pp  = pd.json(json_text);
*	var json_min = pd.jsonmin(json_text);
*	var css_pp   = pd.css(css_text);
*	var css_min  = pd.cssmin(css_text [, true]);
*	var sql_pp   = pd.sql(sql_text);
*	var sql_min  = pd.sqlmin(sql_text);
*
* TEST:
*	comp-name:pretty-data$ node ./test/test_xml
*	comp-name:pretty-data$ node ./test/test_json
*	comp-name:pretty-data$ node ./test/test_css
*	comp-name:pretty-data$ node ./test/test_sql
*/


function pp() {
	this.shift = ['\n']; // array of shifts
	this.step = '  ', // 2 spaces
		maxdeep = 100, // nesting level
		ix = 0;

	// initialize array with shifts //
	for(ix=0;ix<maxdeep;ix++){
		this.shift.push(this.shift[ix]+this.step); 
	}

};	
	
// ----------------------- XML section ----------------------------------------------------

pp.prototype.xml = function(text) {

	var ar = text.replace(/>\s{0,}</g,"><")
				 .replace(/</g,"~::~<")
				 .replace(/xmlns\:/g,"~::~xmlns:")
				 .replace(/xmlns\=/g,"~::~xmlns=")
				 .split('~::~'),
		len = ar.length,
		inComment = false,
		deep = 0,
		str = '',
		ix = 0;

		for(ix=0;ix<len;ix++) {
			// start comment or <![CDATA[...]]> or <!DOCTYPE //
			if(ar[ix].search(/<!/) > -1) { 
				str += this.shift[deep]+ar[ix];
				inComment = true; 
				// end comment  or <![CDATA[...]]> //
				if(ar[ix].search(/-->/) > -1 || ar[ix].search(/\]>/) > -1 || ar[ix].search(/!DOCTYPE/) > -1 ) { 
					inComment = false; 
				}
			} else 
			// end comment  or <![CDATA[...]]> //
			if(ar[ix].search(/-->/) > -1 || ar[ix].search(/\]>/) > -1) { 
				str += ar[ix];
				inComment = false; 
			} else 
			// <elm></elm> //
			if( /^<\w/.exec(ar[ix-1]) && /^<\/\w/.exec(ar[ix]) &&
				/^<[\w:\-\.\,]+/.exec(ar[ix-1]) == /^<\/[\w:\-\.\,]+/.exec(ar[ix])[0].replace('/','')) { 
				str += ar[ix];
				if(!inComment) deep--;
			} else
			 // <elm> //
			if(ar[ix].search(/<\w/) > -1 && ar[ix].search(/<\//) == -1 && ar[ix].search(/\/>/) == -1 ) {
				str = !inComment ? str += this.shift[deep++]+ar[ix] : str += ar[ix];
			} else 
			 // <elm>...</elm> //
			if(ar[ix].search(/<\w/) > -1 && ar[ix].search(/<\//) > -1) {
				str = !inComment ? str += this.shift[deep]+ar[ix] : str += ar[ix];
			} else 
			// </elm> //
			if(ar[ix].search(/<\//) > -1) { 
				str = !inComment ? str += this.shift[--deep]+ar[ix] : str += ar[ix];
			} else 
			// <elm/> //
			if(ar[ix].search(/\/>/) > -1 ) { 
				str = !inComment ? str += this.shift[deep]+ar[ix] : str += ar[ix];
			} else 
			// <? xml ... ?> //
			if(ar[ix].search(/<\?/) > -1) { 
				str += this.shift[deep]+ar[ix];
			} else 
			// xmlns //
			if( ar[ix].search(/xmlns\:/) > -1  || ar[ix].search(/xmlns\=/) > -1) { 
				str += this.shift[deep]+ar[ix];
			} 
			
			else {
				str += ar[ix];
			}
		}
		
	return  (str[0] == '\n') ? str.slice(1) : str;
}

// ----------------------- JSON section ----------------------------------------------------

pp.prototype.json = function(text) {

	if ( typeof text === "string" ) {
		return JSON.stringify(JSON.parse(text), null, this.step);
	}
	if ( typeof text === "object" ) {
		return JSON.stringify(text, null, this.step);
	}
	return null;
}

// ----------------------- CSS section ----------------------------------------------------

pp.prototype.css = function(text) {

	var ar = text.replace(/\s{1,}/g,' ')
				.replace(/\{/g,"{~::~")
				.replace(/\}/g,"~::~}~::~")
				.replace(/\;/g,";~::~")
				.replace(/\/\*/g,"~::~/*")
				.replace(/\*\//g,"*/~::~")
				.replace(/~::~\s{0,}~::~/g,"~::~")
				.split('~::~'),
		len = ar.length,
		deep = 0,
		str = '',
		ix = 0;
		
		for(ix=0;ix<len;ix++) {

			if( /\{/.exec(ar[ix]))  { 
				str += this.shift[deep++]+ar[ix];
			} else 
			if( /\}/.exec(ar[ix]))  { 
				str += this.shift[--deep]+ar[ix];
			} else
			if( /\*\\/.exec(ar[ix]))  { 
				str += this.shift[deep]+ar[ix];
			}
			else {
				str += this.shift[deep]+ar[ix];
			}
		}
		return str.replace(/^\n{1,}/,'');
}

// ----------------------- SQL section ----------------------------------------------------

function isSubquery(str, parenthesisLevel) {
  return  parenthesisLevel - (str.replace(/\(/g,'').length - str.replace(/\)/g,'').length )
}

function split_sql(str, tab) {

    return str.replace(/\s{1,}/g," ")

        .replace(/ AND /ig,"~::~"+tab+tab+"AND ")
        .replace(/ BETWEEN /ig,"~::~"+tab+"BETWEEN ")
        .replace(/ CASE /ig,"~::~"+tab+"CASE ")
        .replace(/ ELSE /ig,"~::~"+tab+"ELSE ")
        .replace(/ END /ig,"~::~"+tab+"END ")
        .replace(/ FROM /ig,"~::~FROM ")
        .replace(/ GROUP\s{1,}BY/ig,"~::~GROUP BY ")
        .replace(/ HAVING /ig,"~::~HAVING ")
        //.replace(/ IN /ig,"~::~"+tab+"IN ")
        .replace(/ IN /ig," IN ")
        .replace(/ JOIN /ig,"~::~JOIN ")
        .replace(/ CROSS~::~{1,}JOIN /ig,"~::~CROSS JOIN ")
        .replace(/ INNER~::~{1,}JOIN /ig,"~::~INNER JOIN ")
        .replace(/ LEFT~::~{1,}JOIN /ig,"~::~LEFT JOIN ")
        .replace(/ RIGHT~::~{1,}JOIN /ig,"~::~RIGHT JOIN ")
        .replace(/ ON /ig,"~::~"+tab+"ON ")
        .replace(/ OR /ig,"~::~"+tab+tab+"OR ")
        .replace(/ ORDER\s{1,}BY/ig,"~::~ORDER BY ")
        .replace(/ OVER /ig,"~::~"+tab+"OVER ")
        .replace(/\(\s{0,}SELECT /ig,"~::~(SELECT ")
        .replace(/\)\s{0,}SELECT /ig,")~::~SELECT ")
        .replace(/ THEN /ig," THEN~::~"+tab+"")
        .replace(/ UNION /ig,"~::~UNION~::~")
        .replace(/ USING /ig,"~::~USING ")
        .replace(/ WHEN /ig,"~::~"+tab+"WHEN ")
        .replace(/ WHERE /ig,"~::~WHERE ")
        .replace(/ WITH /ig,"~::~WITH ")
        //.replace(/\,\s{0,}\(/ig,",~::~( ")
        //.replace(/\,/ig,",~::~"+tab+tab+"")
        .replace(/ ALL /ig," ALL ")
        .replace(/ AS /ig," AS ")
        .replace(/ ASC /ig," ASC ") 
        .replace(/ DESC /ig," DESC ") 
        .replace(/ DISTINCT /ig," DISTINCT ")
        .replace(/ EXISTS /ig," EXISTS ")
        .replace(/ NOT /ig," NOT ")
        .replace(/ NULL /ig," NULL ")
        .replace(/ LIKE /ig," LIKE ")
        .replace(/\s{0,}SELECT /ig,"SELECT ")
        .replace(/~::~{1,}/g,"~::~")
        .split('~::~');
}

pp.prototype.sql = function(text) {

    var ar_by_quote = text.replace(/\s{1,}/g," ")
                        .replace(/\'/ig,"~::~\'")
                        .split('~::~'),
        len = ar_by_quote.length,
        ar = [],
        deep = 0,
        tab = this.step,//+this.step,
        inComment = true,
        inQuote = false,
        parenthesisLevel = 0,
        str = '',
        ix = 0;

    for(ix=0;ix<len;ix++) {

        if(ix%2) {
            ar = ar.concat(ar_by_quote[ix]);
        } else {
            ar = ar.concat(split_sql(ar_by_quote[ix], tab) );
        }
    }

    len = ar.length;
    for(ix=0;ix<len;ix++) {

        parenthesisLevel = isSubquery(ar[ix], parenthesisLevel);

        if( /\s{0,}\s{0,}SELECT\s{0,}/.exec(ar[ix]))  { 
            ar[ix] = ar[ix].replace(/\,/g,",\n"+tab+tab+"")
        } 

        if( /\s{0,}\(\s{0,}SELECT\s{0,}/.exec(ar[ix]))  { 
            deep++;
            str += this.shift[deep]+ar[ix];
        } else 
        if( /\'/.exec(ar[ix]) )  { 
            if(parenthesisLevel<1 && deep) {
                deep--;
            }
            str += ar[ix];
        }
        else  { 
            str += this.shift[deep]+ar[ix];
            if(parenthesisLevel<1 && deep) {
                deep--;
            }
        } 
    }

    str = str.replace(/^\n{1,}/,'').replace(/\n{1,}/g,"\n");
    return str;
}

// ----------------------- min section ----------------------------------------------------

pp.prototype.xmlmin = function(text, preserveComments) {

	var str = preserveComments ? text
				   : text.replace(/\<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\>/g,"");
	return  str.replace(/>\s{0,}</g,"><"); 
}

pp.prototype.jsonmin = function(text) {
								  
    return  text.replace(/\s{0,}\{\s{0,}/g,"{")
                .replace(/\s{0,}\[$/g,"[")
                .replace(/\[\s{0,}/g,"[")
                .replace(/:\s{0,}\[/g,':[')
                .replace(/\s{0,}\}\s{0,}/g,"}")
                .replace(/\s{0,}\]\s{0,}/g,"]")
                .replace(/\"\s{0,}\,/g,'",')
                .replace(/\,\s{0,}\"/g,',"')
                .replace(/\"\s{0,}:/g,'":')
                .replace(/:\s{0,}\"/g,':"')
                .replace(/:\s{0,}\[/g,':[')
                .replace(/\,\s{0,}\[/g,',[')
                .replace(/\,\s{2,}/g,', ')
                .replace(/\]\s{0,},\s{0,}\[/g,'],[');   
}

pp.prototype.cssmin = function(text, preserveComments) {
	
	var str = preserveComments ? text
				   : text.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g,"") ;
	return str.replace(/\s{1,}/g,' ')
			  .replace(/\{\s{1,}/g,"{")
			  .replace(/\}\s{1,}/g,"}")
			  .replace(/\;\s{1,}/g,";")
			  .replace(/\/\*\s{1,}/g,"/*")
			  .replace(/\*\/\s{1,}/g,"*/");
}	

pp.prototype.sqlmin = function(text) {
    return text.replace(/\s{1,}/g," ").replace(/\s{1,}\(/,"(").replace(/\s{1,}\)/,")");
}

// --------------------------------------------------------------------------------------------

exports.pd= new pp;	












/***/ }),
/* 43 */
/***/ (function(module, exports) {



function interpolate(t, order, points, knots, weights, result) {

  var i,j,s,l;              // function-scoped iteration variables
  var n = points.length;    // points count
  var d = points[0].length; // point dimensionality

  if(order < 2) throw new Error('order must be at least 2 (linear)');
  if(order > n) throw new Error('order must be less than point count');

  if(!weights) {
    // build weight vector of length [n]
    weights = [];
    for(i=0; i<n; i++) {
      weights[i] = 1;
    }
  }

  if(!knots) {
    // build knot vector of length [n + order]
    var knots = [];
    for(i=0; i<n+order; i++) {
      knots[i] = i;
    }
  } else {
    if(knots.length !== n+order) throw new Error('bad knot vector length');
  }

  var domain = [
    order-1,
    knots.length-1 - (order-1)
  ];

  // remap t to the domain where the spline is defined
  var low  = knots[domain[0]];
  var high = knots[domain[1]];
  t = t * (high - low) + low;

  if(t < low || t > high) throw new Error('out of bounds');

  // find s (the spline segment) for the [t] value provided
  for(s=domain[0]; s<domain[1]; s++) {
    if(t >= knots[s] && t <= knots[s+1]) {
      break;
    }
  }

  // convert points to homogeneous coordinates
  var v = [];
  for(i=0; i<n; i++) {
    v[i] = [];
    for(j=0; j<d; j++) {
      v[i][j] = points[i][j] * weights[i];
    }
    v[i][d] = weights[i];
  }

  // l (level) goes from 1 to the curve order
  var alpha;
  for(l=1; l<=order; l++) {
    // build level l of the pyramid
    for(i=s; i>s-order+l; i--) {
      alpha = (t - knots[i]) / (knots[i+order-l] - knots[i]);

      // interpolate each component
      for(j=0; j<d+1; j++) {
        v[i][j] = (1 - alpha) * v[i-1][j] + alpha * v[i][j];
      }
    }
  }

  // convert back to cartesian and return
  var result = result || [];
  for(i=0; i<d; i++) {
    result[i] = v[s][i] / v[s][d];
  }

  return result;
}


module.exports = interpolate;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vecks = __webpack_require__(45);

/**
 * Create the arcs point for a LWPOLYLINE. The start and end are excluded
 *
 * See diagram.png in this directory for description of points and angles used.
 */
module.exports = function (from, to, bulge, resolution) {
  // Resolution in degrees
  if (!resolution) {
    resolution = 5;
  }

  // If the bulge is < 0, the arc goes clockwise. So we simply
  // reverse a and b and invert sign
  // Bulge = tan(theta/4)
  var theta = void 0;
  var a = void 0;
  var b = void 0;

  if (bulge < 0) {
    theta = Math.atan(-bulge) * 4;
    a = new _vecks.V2(from[0], from[1]);
    b = new _vecks.V2(to[0], to[1]);
  } else {
    // Default is counter-clockwise
    theta = Math.atan(bulge) * 4;
    a = new _vecks.V2(to[0], to[1]);
    b = new _vecks.V2(from[0], from[1]);
  }

  var ab = b.sub(a);
  var lengthAB = ab.length();
  var c = a.add(ab.multiply(0.5));

  // Distance from center of arc to line between form and to points
  var lengthCD = Math.abs(lengthAB / 2 / Math.tan(theta / 2));
  var normAB = ab.norm();

  var d = void 0;
  if (theta < Math.PI) {
    var normDC = new _vecks.V2(normAB.x * Math.cos(Math.PI / 2) - normAB.y * Math.sin(Math.PI / 2), normAB.y * Math.cos(Math.PI / 2) + normAB.x * Math.sin(Math.PI / 2));
    // D is the center of the arc
    d = c.add(normDC.multiply(-lengthCD));
  } else {
    var normCD = new _vecks.V2(normAB.x * Math.cos(Math.PI / 2) - normAB.y * Math.sin(Math.PI / 2), normAB.y * Math.cos(Math.PI / 2) + normAB.x * Math.sin(Math.PI / 2));
    // D is the center of the arc
    d = c.add(normCD.multiply(lengthCD));
  }

  // Add points between start start and eng angle relative
  // to the center point
  var startAngle = Math.atan2(b.y - d.y, b.x - d.x) / Math.PI * 180;
  var endAngle = Math.atan2(a.y - d.y, a.x - d.x) / Math.PI * 180;
  if (endAngle < startAngle) {
    endAngle += 360;
  }
  var r = b.sub(d).length();

  var startInter = Math.floor(startAngle / resolution) * resolution + resolution;
  var endInter = Math.ceil(endAngle / resolution) * resolution - resolution;

  var points = [];
  for (var i = startInter; i <= endInter; i += resolution) {
    points.push(d.add(new _vecks.V2(Math.cos(i / 180 * Math.PI) * r, Math.sin(i / 180 * Math.PI) * r)));
  }
  // Maintain the right ordering to join the from and to points
  if (bulge < 0) {
    points.reverse();
  }
  return points.map(function (p) {
    return [p.x, p.y];
  });
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Line2 = exports.Quaternion = exports.Plane3 = exports.Box3 = exports.Box2 = exports.V3 = exports.V2 = undefined;

var _V = __webpack_require__(2);

var _V2 = _interopRequireDefault(_V);

var _V3 = __webpack_require__(10);

var _V4 = _interopRequireDefault(_V3);

var _Box = __webpack_require__(46);

var _Box2 = _interopRequireDefault(_Box);

var _Box3 = __webpack_require__(47);

var _Box4 = _interopRequireDefault(_Box3);

var _Plane = __webpack_require__(48);

var _Plane2 = _interopRequireDefault(_Plane);

var _Quaternion = __webpack_require__(49);

var _Quaternion2 = _interopRequireDefault(_Quaternion);

var _Line = __webpack_require__(50);

var _Line2 = _interopRequireDefault(_Line);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.V2 = _V2.default;
exports.V3 = _V4.default;
exports.Box2 = _Box2.default;
exports.Box3 = _Box4.default;
exports.Plane3 = _Plane2.default;
exports.Quaternion = _Quaternion2.default;
exports.Line2 = _Line2.default;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _V = __webpack_require__(2);

var _V2 = _interopRequireDefault(_V);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Box2 = function () {
  function Box2(min, max) {
    _classCallCheck(this, Box2);

    this.min = min || new _V2.default(Infinity, Infinity);
    this.max = max || new _V2.default(-Infinity, -Infinity);
  }

  _createClass(Box2, [{
    key: 'expandByPoint',
    value: function expandByPoint(p) {
      this.min = new _V2.default(Math.min(this.min.x, p.x), Math.min(this.min.y, p.y));
      this.max = new _V2.default(Math.max(this.max.x, p.x), Math.max(this.max.y, p.y));
      return this;
    }
  }, {
    key: 'expandByPoints',
    value: function expandByPoints(points) {
      var _this = this;

      points.forEach(function (point) {
        _this.expandByPoint(point);
      }, this);
      return this;
    }
  }, {
    key: 'isPointInside',
    value: function isPointInside(p) {
      return p.x >= this.min.x && p.y >= this.min.y && p.x <= this.max.x && p.y <= this.max.y;
    }
  }]);

  return Box2;
}();

Box2.fromPoints = function (points) {
  return new Box2().expandByPoints(points);
};

exports.default = Box2;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Box3 = function () {
  function Box3(min, max) {
    _classCallCheck(this, Box3);

    this.min = min || {
      x: Infinity,
      y: Infinity,
      z: Infinity
    };
    this.max = max || {
      x: -Infinity,
      y: -Infinity,
      z: -Infinity
    };
  }

  _createClass(Box3, [{
    key: "expandByPoint",
    value: function expandByPoint(p) {
      this.min = {
        x: Math.min(this.min.x, p.x),
        y: Math.min(this.min.y, p.y),
        z: Math.min(this.min.z, p.z)
      };
      this.max = {
        x: Math.max(this.max.x, p.x),
        y: Math.max(this.max.y, p.y),
        z: Math.max(this.max.z, p.z)
      };
      return this;
    }
  }, {
    key: "expandByPoints",
    value: function expandByPoints(points) {
      var _this = this;

      points.forEach(function (point) {
        _this.expandByPoint(point);
      }, this);
      return this;
    }
  }, {
    key: "isPointInside",
    value: function isPointInside(p) {
      return p.x >= this.min.x && p.y >= this.min.y && p.z >= this.min.z && p.x <= this.max.x && p.y <= this.max.y && p.z <= this.max.z;
    }
  }]);

  return Box3;
}();

Box3.fromPoints = function (points) {
  return new Box3().expandByPoints(points);
};

exports.default = Box3;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plane3 = function () {
  function Plane3(a, b, c, d) {
    _classCallCheck(this, Plane3);

    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }

  // Distance to a point
  // http://mathworld.wolfram.com/Point-PlaneDistance.html eq 10


  _createClass(Plane3, [{
    key: 'distanceToPoint',
    value: function distanceToPoint(p0) {
      var dd = (this.a * p0.x + this.b * p0.y + this.c * p0.z + this.d) / Math.sqrt(this.a * this.a + this.b * this.b + this.c * this.c);
      return dd;
    }
  }, {
    key: 'equals',
    value: function equals(other) {
      return this.a === other.a && this.b === other.b && this.c === other.c && this.d === other.d;
    }
  }, {
    key: 'coPlanar',
    value: function coPlanar(other) {
      var coPlanarAndSameNormal = this.a === other.a && this.b === other.b && this.c === other.c && this.d === other.d;
      var coPlanarAndReversedNormal = this.a === -other.a && this.b === -other.b && this.c === -other.c && this.d === -other.d;
      return coPlanarAndSameNormal || coPlanarAndReversedNormal;
    }
  }]);

  return Plane3;
}();

// From point and normal


Plane3.fromPointAndNormal = function (p, n) {
  var a = n.x;
  var b = n.y;
  var c = n.z;
  var d = -(p.x * a + p.y * b + p.z * c);
  return new Plane3(n.x, n.y, n.z, d);
};

Plane3.fromPoints = function (points) {
  var validCross = void 0;
  for (var i = 0, il = points.length; i < il; ++i) {
    var ab = points[(i + 1) % il].sub(points[i]);
    var bc = points[(i + 2) % il].sub(points[(i + 1) % il]);
    var cross = ab.cross(bc);
    if (!(isNaN(cross.length()) || cross.length() === 0)) {
      if (!validCross) {
        validCross = cross.norm();
      } else {
        var same = cross.norm().equals(validCross);
        var opposite = cross.neg().norm().equals(validCross);
        if (!(same || opposite)) {
          throw Error('points not on a plane');
        }
      }
    }
  }
  if (!validCross) {
    throw Error('points not on a plane');
  }
  return Plane3.fromPointAndNormal(points[0], validCross.norm());
};

exports.default = Plane3;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _V = __webpack_require__(10);

var _V2 = _interopRequireDefault(_V);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Quaternion implementation heavily adapted from the Quaternion implementation in THREE.js
// https://github.com/mrdoob/three.js/blob/master/src/math/Quaternion.js

var Quaternion = function () {
  function Quaternion(x, y, z, w) {
    _classCallCheck(this, Quaternion);

    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

  _createClass(Quaternion, [{
    key: 'applyToVec3',
    value: function applyToVec3(v3) {
      var x = v3.x;
      var y = v3.y;
      var z = v3.z;

      var qx = this.x;
      var qy = this.y;
      var qz = this.z;
      var qw = this.w;

      // calculate quat * vector
      var ix = qw * x + qy * z - qz * y;
      var iy = qw * y + qz * x - qx * z;
      var iz = qw * z + qx * y - qy * x;
      var iw = -qx * x - qy * y - qz * z;

      // calculate result * inverse quat
      return new _V2.default(ix * qw + iw * -qx + iy * -qz - iz * -qy, iy * qw + iw * -qy + iz * -qx - ix * -qz, iz * qw + iw * -qz + ix * -qy - iy * -qx);
    }
  }]);

  return Quaternion;
}();

Quaternion.fromAxisAngle = function (axis, angle) {
  // http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm
  var axisNorm = axis.norm();
  var halfAngle = angle / 2;
  var s = Math.sin(halfAngle);
  return new Quaternion(axisNorm.x * s, axisNorm.y * s, axisNorm.z * s, Math.cos(halfAngle));
};

exports.default = Quaternion;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _V = __webpack_require__(2);

var _V2 = _interopRequireDefault(_V);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var turn = function turn(p1, p2, p3) {
  var a = p1.x;
  var b = p1.y;
  var c = p2.x;
  var d = p2.y;
  var e = p3.x;
  var f = p3.y;
  var m = (f - b) * (c - a);
  var n = (d - b) * (e - a);
  return m > n + Number.EPSILON ? 1 : m + Number.EPSILON < n ? -1 : 0;
};

// http://stackoverflow.com/a/16725715/35448
var isIntersect = function isIntersect(e1, e2) {
  var p1 = e1.a;
  var p2 = e1.b;
  var p3 = e2.a;
  var p4 = e2.b;
  return turn(p1, p3, p4) !== turn(p2, p3, p4) && turn(p1, p2, p3) !== turn(p1, p2, p4);
};

var _getIntersection = function _getIntersection(m, n) {
  // https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection
  var x1 = m.a.x;
  var x2 = m.b.x;
  var y1 = m.a.y;
  var y2 = m.b.y;

  var x3 = n.a.x;
  var x4 = n.b.x;
  var y3 = n.a.y;
  var y4 = n.b.y;

  var x12 = x1 - x2;
  var x34 = x3 - x4;
  var y12 = y1 - y2;
  var y34 = y3 - y4;
  var c = x12 * y34 - y12 * x34;

  var px = ((x1 * y2 - y1 * x2) * x34 - x12 * (x3 * y4 - y3 * x4)) / c;
  var py = ((x1 * y2 - y1 * x2) * y34 - y12 * (x3 * y4 - y3 * x4)) / c;

  if (isNaN(px) || isNaN(py)) {
    return null;
  } else {
    return new _V2.default(px, py);
  }
};

var dist = function dist(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
};

var Line2 = function () {
  function Line2(a, b) {
    _classCallCheck(this, Line2);

    if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== 'object' || a.x === undefined || a.y === undefined) {
      throw Error('expected first argument to have x and y properties');
    }
    if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) !== 'object' || b.x === undefined || b.y === undefined) {
      throw Error('expected second argument to have x and y properties');
    }
    this.a = new _V2.default(a);
    this.b = new _V2.default(b);
  }

  _createClass(Line2, [{
    key: 'length',
    value: function length() {
      return this.a.sub(this.b).length();
    }
  }, {
    key: 'intersects',
    value: function intersects(other) {
      if (!(other instanceof Line2)) {
        throw new Error('expected argument to be an instance of vecks.Line2');
      }
      return isIntersect(this, other);
    }
  }, {
    key: 'getIntersection',
    value: function getIntersection(other) {
      if (this.intersects(other)) {
        return _getIntersection(this, other);
      } else {
        return null;
      }
    }
  }, {
    key: 'containsPoint',
    value: function containsPoint(point) {
      var eps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e-12;

      return Math.abs(dist(this.a, this.b) - dist(point, this.a) - dist(point, this.b)) < eps;
    }
  }]);

  return Line2;
}();

exports.default = Line2;

/***/ })
/******/ ]);
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
var shader_geometryv = `
attribute vec4 aPosition;
attribute vec4 aFX;

uniform mat4 uPerspective;
uniform mat4 uModel;
uniform mat4 uView;


uniform float uAspect;

varying vec4 Color;


// aPosition.zw   has the other line-point position
// a.FX distinguishes the type of vertex
/*

1------------4
|            |
2------------3

*/


void main() {


    vec4 NDCv0 = vec4(0.0);
    vec4 NDCv1 = vec4(0.0);
    float type = aFX.x;

    // if type is 3 or 4 we need to invert aPosition coordinates
    if(type < 2.0) {
        NDCv0 = uPerspective * uView * uModel * vec4(aPosition.xy, 0.0, 1.0);
        NDCv1 = uPerspective * uView * uModel * vec4(aPosition.zw, 0.0, 1.0);
    } else {
        NDCv0 = uPerspective * uView * uModel * vec4(aPosition.zw, 0.0, 1.0);
        NDCv1 = uPerspective * uView * uModel * vec4(aPosition.xy, 0.0, 1.0);    
    }

    NDCv0 /= NDCv0.w;
    NDCv0.x *= uAspect;

    NDCv1 /= NDCv1.w;
    NDCv1.x *= uAspect;

    // from now on, ndcv.x should be between e.g. [-1.7 .... +1.7]
    vec4 finalPos = vec4(0.0);


    // dir is calculated from V0 to V1
    vec2 dir = vec2(NDCv1 - NDCv0);
    vec2 normal = normalize(vec2(-dir.y, dir.x));      // should point up


    if(type < 1.0) {    // vertex 1
        // displace v0 by 0.05;
        finalPos = NDCv0 + vec4(normal, 0.0, 0.0) * 0.002;
    } else if(type < 2.0) {    // vertex 2
        // displace v0 by 0.05;
        finalPos = NDCv0 - vec4(normal, 0.0, 0.0) * 0.002;
    } else if(type < 3.0) {    // vertex 3
        // displace v1 by 0.05;
        finalPos = NDCv1 - vec4(normal, 0.0, 0.0) * 0.002;
    } else if(type < 4.0) {    // vertex 4
        // displace v1 by 0.05;
        finalPos = NDCv1 + vec4(normal, 0.0, 0.0) * 0.002;
    }




    // renormalize to [-1...+1]
    // NDCv0.x /= uAspect;
    // NDCv0.x /= uAspect;

    finalPos.x /= uAspect;
    gl_Position  = finalPos; 




    // gl_Position = uPerspective * uView * uModel * vec4(aPosition.xy, 0.0, 1.0);
    Color = vec4(vec3(1.0), 1.0);
}`;

var shader_geometryf = `
precision highp float;

varying vec4 Color;

void main() {
    gl_FragColor = Color; 
}`;
var shaderpart_color_x = `

`;
var shader_gridv = `
attribute vec4 aPosition;
attribute vec4 aFX;

uniform mat4 uPerspective;
uniform mat4 uModel;
uniform mat4 uView;

varying vec4 Color;

void main() {
    gl_Position  = uPerspective * uView * uModel * vec4(aPosition.xyz, 1.0); 

    Color = vec4(vec3(0.0, 0.5, 1.0), aFX.x);
}`;

var shader_gridf = `
precision highp float;

varying vec4 Color;

void main() {
    gl_FragColor = Color; 
}`;

var shader_guiv = `
attribute vec4 aPosition;
attribute vec4 aFX;

uniform mat4 uPerspective;
uniform mat4 uModel;
uniform mat4 uView;

varying vec4 vColor;
varying vec4 vType;

void main() {
    gl_Position  = uPerspective * uView * uModel * vec4(aPosition.xyz, 1.0);

    vType = aFX;
    vColor = vec4(vec3(1.0), aFX.x);
}`;

var shader_guif = `
precision highp float;

varying vec4 vColor;
varying vec4 vType;

void main() {
    vec4 fcol = vColor;

    if(vType.y < 1.0) {             // horizontal line
        if( fract(gl_FragCoord.x / 10.0) > 0.5 ) fcol.a = 0.0;
    } else if (vType.y < 2.0) {     // vertical line
        if( fract(gl_FragCoord.y / 10.0) > 0.5 ) fcol.a = 0.0;
    } else if (vType.y < 3.0) {     // non-dashed line
        // nothing, render as normal
    }

    gl_FragColor = fcol; 
}`;
function renderGrid() {

    gl.useProgram(window.GridProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, GridProgram.vbuffer);

    gl.enableVertexAttribArray(GridProgram.aPosition);
    gl.enableVertexAttribArray(GridProgram.aFX);
    gl.vertexAttribPointer(GridProgram.aPosition, 4, gl.FLOAT, false, step * 8, 0);
    gl.vertexAttribPointer(GridProgram.aFX,       4, gl.FLOAT, false, step * 8, step * 4);

    gl.uniformMatrix4fv(GridProgram.uPerspective, false, perspective);
    gl.uniformMatrix4fv(GridProgram.uModel, false,       model);
    gl.uniformMatrix4fv(GridProgram.uView, false,        view);

    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.drawArrays(gl.LINES, 0, GridProgram.vertexCount);
}


function createGridProgram() {
    var Program = getShader(shader_gridv, shader_gridf);

    Program.aPosition  = gl.getAttribLocation(Program, "aPosition");
    Program.aFX        = gl.getAttribLocation(Program, "aFX");

    Program.uPerspective = gl.getUniformLocation(Program, "uPerspective");    
    Program.uModel       = gl.getUniformLocation(Program, "uModel");    
    Program.uView        = gl.getUniformLocation(Program, "uView");    

    Program.vbuffer = gl.createBuffer();

    var vertices = getGridVertices(cameraZ);

    Program.vertexCount = vertices.length / (4 /* aPosition */ + 4 /* aFX */);

    gl.bindBuffer(gl.ARRAY_BUFFER, Program.vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    window.GridProgram = Program;
}

function recalcGridVertices() {
    var vertices = getGridVertices(cameraZ);  
    window.GridProgram.vertexCount = vertices.length / (4 /* aPosition */ + 4 /* aFX */);

    gl.bindBuffer(gl.ARRAY_BUFFER, window.GridProgram.vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);  
}

/* remember: by zooming we move the camera closer to the canvas, every gui element will be fixed at z: 0 */
function getGridVertices(depth) {
    var vertices = [];
    var extent = worldExtentAtDepth(depth);
    var optimalNumberOfQuads = 10;

    depth = -depth;

    // get the closest logaritm of 5 matching the optimal amount of quads we want
    // full equation:  width / 5^x  =  10     
    // remember: 5^-1 = 0.2     5^0 = 1     5^1 = 5     5^2 = 25     5^3 = 125

    // 10 = optimal number of quads
    // 5^x  internal grid subdivision, 5 here means a quad can be internally divided in 25 cells
    // width = world width

    // read as: to which number I need to elevate 5 to have   (width / number = 10) ?

    // after solving algebrically for x we get    x = log5(w/10) 

    // javascript doesn't have log with base 5, so we're using this trick:
    // https://stackoverflow.com/questions/3019278/how-can-i-specify-the-base-for-math-log-in-javascript
    var logarithm = Math.log(extent.w / optimalNumberOfQuads) / Math.log(5);
    // console.log("floor: " + Math.floor(logarithm));
    // console.log("ceil: " + Math.ceil(logarithm));
    // console.log("correctness: " + (extent.w / Math.pow(5, logarithm)));
    // console.log("resfloor: " + (extent.w / Math.pow(5, Math.floor(logarithm))));
    // console.log("resceil: "  + (extent.w / Math.pow(5, Math.ceil(logarithm))));
    var roundlog = Math.round(logarithm);
    window.quadSize = Math.pow(5, roundlog);


    // world origin (top left) of the grid quads we will render
    var leftBound = -(extent.w / 2) + worldPosition.x;
    var topBound  = +(extent.h / 2) + worldPosition.y;

    var leftBoundQuadMultiple = 0;
    if (leftBound > 0) leftBoundQuadMultiple = Math.floor(Math.abs(leftBound) / quadSize) * quadSize;
    if (leftBound < 0) leftBoundQuadMultiple = -Math.ceil(Math.abs(leftBound) / quadSize) * quadSize;

    var topBoundQuadMultiple = 0;
    if (topBound > 0) topBoundQuadMultiple = Math.ceil(Math.abs(topBound) / quadSize) * quadSize;
    if (topBound < 0) topBoundQuadMultiple = -Math.floor(Math.abs(topBound) / quadSize) * quadSize;
    

    var howManyQuadsInX = Math.ceil(extent.w / quadSize) +1;
    var howManyQuadsInY = Math.ceil(extent.h / quadSize) +1;






    var mainGridAlpha = 0.25;
    var secondaryGridAlpha = 0.05;


    // row lines
    for(var i = 0; i < howManyQuadsInY; i++) {
        vertices.push(leftBoundQuadMultiple,                              topBoundQuadMultiple - quadSize * i, 0, 1,
                      mainGridAlpha,1,1,1);
        vertices.push(leftBoundQuadMultiple + quadSize * howManyQuadsInX, topBoundQuadMultiple - quadSize * i, 0, 1,
                      mainGridAlpha,1,1,1);
        
        for(var j = 1; j < 5; j++) {
            vertices.push(leftBoundQuadMultiple, 
            topBoundQuadMultiple - quadSize * i - (quadSize / 5) * j, 0, 1,
                      secondaryGridAlpha,1,1,1);
            vertices.push(leftBoundQuadMultiple + quadSize * howManyQuadsInX, 
            topBoundQuadMultiple - quadSize * i - (quadSize / 5) * j, 0, 1,
                      secondaryGridAlpha,1,1,1);
        }
    }

    // column lines
    for(var i = 0; i < howManyQuadsInX; i++) {
        vertices.push(leftBoundQuadMultiple + quadSize * i, topBoundQuadMultiple, 0, 1,
                      mainGridAlpha,1,1,1);
        vertices.push(leftBoundQuadMultiple + quadSize * i, topBoundQuadMultiple - quadSize * howManyQuadsInY, 0, 1,
                      mainGridAlpha,1,1,1);

        for(var j = 1; j < 5; j++) {
            vertices.push(leftBoundQuadMultiple + quadSize * i + (quadSize / 5) * j, 
                        topBoundQuadMultiple, 0, 1,
                        secondaryGridAlpha,1,1,1);
            vertices.push(leftBoundQuadMultiple + quadSize * i + (quadSize / 5) * j, 
                        topBoundQuadMultiple - quadSize * howManyQuadsInY, 0, 1,
                        secondaryGridAlpha,1,1,1);
        }
    }


    return vertices;
}

function renderBackground() {
    gl.clearColor(49/255, 119/255, 198/255, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}
function renderGeometry() {

    gl.useProgram(window.GeometryProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, GeometryProgram.vbuffer);

    gl.enableVertexAttribArray(GeometryProgram.aPosition);
    gl.enableVertexAttribArray(GeometryProgram.aFX);
    gl.vertexAttribPointer(GeometryProgram.aPosition, 4, gl.FLOAT, false, step * 8, 0);
    gl.vertexAttribPointer(GeometryProgram.aFX,       4, gl.FLOAT, false, step * 8, step * 4);

    gl.uniformMatrix4fv(GeometryProgram.uPerspective, false, perspective);
    gl.uniformMatrix4fv(GeometryProgram.uModel, false,       model);
    gl.uniformMatrix4fv(GeometryProgram.uView, false,        view);

    gl.uniform1f(GeometryProgram.uAspect, innerWidth / innerHeight);

    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.drawArrays(gl.TRIANGLES, 0, GeometryProgram.vertexCount);
}


function createGeometryProgram() {
    var Program = getShader(shader_geometryv, shader_geometryf);

    Program.aPosition  = gl.getAttribLocation(Program, "aPosition");
    Program.aFX        = gl.getAttribLocation(Program, "aFX");

    Program.uPerspective = gl.getUniformLocation(Program, "uPerspective");    
    Program.uModel       = gl.getUniformLocation(Program, "uModel");    
    Program.uView        = gl.getUniformLocation(Program, "uView");    

    Program.uAspect        = gl.getUniformLocation(Program, "uAspect");    

    Program.vbuffer = gl.createBuffer();

    var vertices = [];

    Program.vertexCount = vertices.length / (4 /* aPosition */ + 4 /* aFX */);

    gl.bindBuffer(gl.ARRAY_BUFFER, Program.vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    window.GeometryProgram = Program;
}


// inside buffer there's an array of polylines, each containing one of more vertices in it
function updateGeometryBuffer(buffer) {
    var vertices = [];

    // undefined is necessary to correctly calculate the object's center
    var maxx = undefined;
    var minx = undefined;
    var maxy = undefined;
    var miny = undefined;
    var centerx = 0;
    var centery = 0;

    // calculate extent first
    for(var i = 0; i < buffer.length; i++) {
        if(buffer[i] === undefined) continue;
        var verts = buffer[i];

        for(var j = 0; j < verts.length; j++) {
            var v0 = new Vertex3(verts[j][0], verts[j][1], 0);

            if(maxx === undefined) {
                maxx = v0.x;
                minx = v0.x;
                maxy = v0.y;
                miny = v0.y;
            }

            if(v0.x > maxx) maxx = v0.x;
            if(v0.x < minx) minx = v0.x;
            
            if(v0.y > maxy) maxy = v0.y;
            if(v0.y < miny) miny = v0.y;
        }
    }

    var extentx = maxx - minx;
    var extenty = maxy - miny;
    // what it means:   "I want to have double the extent of this draw -> visible on 100 units"
    var divisor = Math.max(extentx * 2, extenty * 2) / 100;
    cameraZ = Math.max(extentx * 1.5 / divisor, extenty * 1.5 / divisor);

    centerx  = minx + (maxx - minx) / 2;
    centery  = miny + (maxy - miny) / 2;

    console.log(centerx / divisor + " " + centery / divisor);


    // worldPosition.x = averagex;
    // worldPosition.y = averagey;
    worldPosition.x = centerx / divisor;
    worldPosition.y = centery / divisor;
    recalcGridVertices();
    recalcGuiDOM();
    camera.pos[0] = worldPosition.x;
    camera.pos[1] = worldPosition.y;


    for(var i = 0; i < buffer.length; i++) {
        if(buffer[i] === undefined) continue;
        var verts = buffer[i];
        
        if(verts.length <= 1) continue;

        for(var j = 0; j < verts.length - 1; j++) {
            var v0 = new Vertex3(verts[j][0],   verts[j][1], 0);
            var v1 = new Vertex3(verts[j+1][0], verts[j+1][1], 0);

            v0.x = v0.x / divisor;
            v0.y = v0.y / divisor;
            v0.z = v0.z / divisor;

            v1.x = v1.x / divisor;
            v1.y = v1.y / divisor;
            v1.z = v1.z / divisor;

            // construct triangles from two vertices
            // t1   1-2-3
            vertices.push(v0.x, v0.y, v1.x, v1.y,     0.5, 0.5, 0.5, 0.5);
            vertices.push(v0.x, v0.y, v1.x, v1.y,     1.5, 1.5, 1.5, 1.5);
            vertices.push(v1.x, v1.y, v0.x, v0.y,     2.5, 2.5, 2.5, 2.5);
            
            // t2   1-3-4
            vertices.push(v0.x, v0.y, v1.x, v1.y,     0.5, 1.5, 1.5, 1.5);
            vertices.push(v1.x, v1.y, v0.x, v0.y,     2.5, 2.5, 2.5, 2.5);
            vertices.push(v1.x, v1.y, v0.x, v0.y,     3.5, 3.5, 3.5, 3.5);
        }
    }


    GeometryProgram.vertexCount = vertices.length / (4 /* aPosition */ + 4 /* aFX */);
    gl.bindBuffer(gl.ARRAY_BUFFER, GeometryProgram.vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
}
function renderGui() {

    gl.useProgram(window.GuiProgram);
    recalcGuiVertices();
    gl.bindBuffer(gl.ARRAY_BUFFER, GuiProgram.vbuffer);

    gl.enableVertexAttribArray(GuiProgram.aPosition);
    gl.enableVertexAttribArray(GuiProgram.aFX);
    gl.vertexAttribPointer(GuiProgram.aPosition, 4, gl.FLOAT, false, step * 8, 0);
    gl.vertexAttribPointer(GuiProgram.aFX,       4, gl.FLOAT, false, step * 8, step * 4);

    gl.uniformMatrix4fv(GuiProgram.uPerspective, false, perspective);
    gl.uniformMatrix4fv(GuiProgram.uModel, false,       model);
    gl.uniformMatrix4fv(GuiProgram.uView, false,        view);

    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.drawArrays(gl.LINES, 0, GuiProgram.vertexCount);
}


function createGuiProgram() {
    var Program = getShader(shader_guiv, shader_guif);

    Program.aPosition  = gl.getAttribLocation(Program, "aPosition");
    Program.aFX        = gl.getAttribLocation(Program, "aFX");

    Program.uPerspective = gl.getUniformLocation(Program, "uPerspective");    
    Program.uModel       = gl.getUniformLocation(Program, "uModel");    
    Program.uView        = gl.getUniformLocation(Program, "uView");    

    Program.vbuffer = gl.createBuffer();
    window.GuiProgram = Program;

    recalcGuiVertices();
    recalcGuiDOM();
}

function recalcGuiVertices() {
    var vertices = getGuiVertices(cameraZ);
    window.GuiProgram.vertexCount = vertices.length / (4 /* aPosition */ + 4 /* aFX */);
    gl.bindBuffer(gl.ARRAY_BUFFER, window.GuiProgram.vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
}

function recalcGuiDOM() {
    var postFix = quadSize < 1.0 ? " cm" : ".0 cm";
    domCache.quadDimension.innerText = quadSize + postFix;
    var extent = worldExtentAtDepth(cameraZ);
    // GUI span needs to be display: block;  in order to get their dimensions after a change in javascript
    var spanSizeInVW = (domCache.quadDimension.offsetWidth / innerWidth) * 100;

    // alert("e: " + extent.w + " ss: " + spanSizeInVW + " qd: " + quadSize + " it: " + domCache.quadDimension.innerText);

    // y = -extent.h / 2.3; starting from zero
    // 50 + 100/2.3

    domCache.quadDimension.style.top = "94.27vh";
    domCache.quadDimension.style.right  = ((quadSize / extent.w * 50) + 2 - spanSizeInVW / 2) + "vw";
}

/* remember: by zooming we move the camera closer to the canvas, every gui element will be fixed at z: 0 */
function getGuiVertices(depth) {
    var vertices = [];
    var extent = worldExtentAtDepth(depth);

    depth = -depth;

    var x_offset = worldPosition.x;
    var y_offset = worldPosition.y;

    var mouse_offset_x = mousePosition.ndcx * extent.w / 2;
    var mouse_offset_y = mousePosition.ndcy * extent.h / 2;

    // vertical line
    vertices.push(x_offset + mouse_offset_x, y_offset - extent.h + mouse_offset_y, 0, 1,     1,1.1,1,1);
    vertices.push(x_offset + mouse_offset_x, y_offset + extent.h + mouse_offset_y, 0, 1,     1,1.1,1,1);

    // horizontal line
    vertices.push(x_offset - extent.w + mouse_offset_x, y_offset + mouse_offset_y, 0, 1,     1,0.1,1,1);
    vertices.push(x_offset + extent.w + mouse_offset_x, y_offset + mouse_offset_y, 0, 1,     1,0.1,1,1);



    // quad dimension
    vertices.push(x_offset - quadSize/2 + extent.w/2.1 - quadSize/2, y_offset - extent.h/2.3, 0, 1,     1,2.1,1,1);
    vertices.push(x_offset + quadSize/2 + extent.w/2.1 - quadSize/2, y_offset - extent.h/2.3, 0, 1,     1,2.1,1,1);

    vertices.push(x_offset - quadSize/2 + extent.w/2.1 - quadSize/2, y_offset - extent.h/2.3 - extent.h/60, 0, 1,     1,2.1,1,1);
    vertices.push(x_offset - quadSize/2 + extent.w/2.1 - quadSize/2, y_offset - extent.h/2.3 + extent.h/60, 0, 1,     1,2.1,1,1);

    vertices.push(x_offset + quadSize/2 + extent.w/2.1 - quadSize/2, y_offset - extent.h/2.3 - extent.h/60, 0, 1,     1,2.1,1,1);
    vertices.push(x_offset + quadSize/2 + extent.w/2.1 - quadSize/2, y_offset - extent.h/2.3 + extent.h/60, 0, 1,     1,2.1,1,1);

    return vertices;
}
function worldExtentAtDepth(depth) {
    // assuming 45 degree FOV
    var halfAngle = (45 / 2) * (PI / 180);

    var height = Math.tan(halfAngle) * depth * 2;
    var width  = height * (innerWidth / innerHeight);

    return { h: height, w: width };
}
//based on Hermite's curve
function smoothstep(t) {
  return t * t * (3 - 2 * t);
}



function Vertex3(a1, a2, a3) {
    this.x = a1 || 0;
    this.y = a2 || 0;
    this.z = a3 || 0;
}
function MouseController() {
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMove);


    var mousedown = false;
    var origin = [0, 0];
    var previousWorldPos = [0, 0];

    function onMouseDown(e) {
        mousedown = true;
        origin[0] = e.clientX;
        origin[1] = innerHeight - e.clientY;

        previousWorldPos[0] = worldPosition.x;
        previousWorldPos[1] = worldPosition.y;


        // current worldpos
        var dim = worldExtentAtDepth(cameraZ);
        var cwpx = worldPosition.x  + ((e.clientX / innerWidth) * 2 - 1) * (dim.w / 2);
        var cwpy = worldPosition.y  + (((innerHeight - e.clientY) / innerHeight) * 2 - 1) * (dim.h / 2);

        console.log(cwpx + " " + cwpy);

        document.getElementById("canvas").style.cursor = "move"; 
    }
    function onMouseUp() {
        mousedown = false;
        document.getElementById("canvas").style.cursor = "";         
    }

    function onMove(e) {
        mousePosition.ndcx = (e.clientX / innerWidth) * 2 - 1;
        mousePosition.ndcy = ((innerHeight - e.clientY) / innerHeight) * 2 - 1;

        if(!mousedown) return;

        var width = worldExtentAtDepth(cameraZ).w;

        var deltax = origin[0] - e.clientX;
        var deltay = origin[1] - (innerHeight - e.clientY);

        worldPosition.x = previousWorldPos[0] + deltax * (width / innerWidth);
        worldPosition.y = previousWorldPos[1] + deltay * (width / innerWidth);

        camera.pos[0] = worldPosition.x;
        camera.pos[1] = worldPosition.y;

        recalcGridVertices();
    }
}
function worldUpdate(deltatime) {
    if(zoom) {
        worldUpdate.prototype.t += deltatime * 4;

        var percentage = 0.57;

        var tt = smoothstep(worldUpdate.prototype.t);

        if(zoomDirection > 0) {
            // decrease / increase view by 20% 
            cameraZ = worldUpdate.prototype.targetDepth * (1 - percentage * tt);
            if (cameraZ < 0.5) cameraZ = 0.5;
        }
        if(zoomDirection < 0) {
            // decrease / increase view by 20% 
            cameraZ = worldUpdate.prototype.targetDepth * (1 + percentage * tt * 2.5);
            if (cameraZ > 990) cameraZ = 990;
        }

        recalcGridVertices();
        if(frameCount % 2 === 0) recalcGuiDOM();

        if(worldUpdate.prototype.t > 1) {
            worldUpdate.prototype.t = 0;
            
            if(zoomDirection > 0) { 
                cameraZ = worldUpdate.prototype.targetDepth * (1 - percentage);
                if (cameraZ < 0.5) cameraZ = 0.5;
            }
            if(zoomDirection < 0) {
                cameraZ = worldUpdate.prototype.targetDepth * (1 + percentage * 2.5);
                if (cameraZ > 990) cameraZ = 990;
            }
            recalcGridVertices();
            recalcGuiDOM();


            zoom = false;
        }        
    }

    // update camera position
    camera.pos[2] = cameraZ;
    view = camera.getViewMatrix(deltatime, 0.3);

    frameCount = frameCount < 1000 ? ++frameCount : 0;
}
worldUpdate.prototype.t = 0;
worldUpdate.prototype.targetDepth = 0;


function initWorld() {
    camera = new createCamera();
}

function onZoom(e) {
    zoom = true;
    var delta;

    if (e.wheelDelta){
        delta = e.wheelDelta;
    } else {
        delta = -1 * e.deltaY;
    }

    // this prevents interference while we're scrolling
    if(worldUpdate.prototype.t === 0) {
        if(delta > 0) zoomDirection = 1;
        if(delta < 0) zoomDirection = -1;
        worldUpdate.prototype.targetDepth = cameraZ;
    }
}
function initFileLoader() {
    document.getElementById('dxf').addEventListener('change', onFileSelected, false);
}

function onFileSelected(evt) {

    var file = evt.target.files[0];
    // var output = [];
    // output.push('<li><strong>', encodeURI(file.name), '</strong> (', file.type || 'n/a', ') - ',
    //     file.size, ' bytes, last modified: ',
    //     file.lastModifiedDate ? file.lastModifiedDate.toLocaleDateString() : 'n/a',
    //     '</li>');

    // document.getElementById('file-description').innerHTML = '<ul>' + output.join('') + '</ul>';

    // $progress.addClass('loading');

    var reader = new FileReader();
    // reader.onprogress = updateProgress;
    reader.onloadend = onSuccess;
    // reader.onabort = abortUpload;
    reader.onerror = errorHandler;
    reader.readAsText(file);
}

function abortUpload() {
    console.log('Aborted read!')
}

function errorHandler(evt) {
    switch(evt.target.error.code) {
    case evt.target.error.NOT_FOUND_ERR:
        alert('File Not Found!');
        break;
    case evt.target.error.NOT_READABLE_ERR:
        alert('File is not readable');
        break;
    case evt.target.error.ABORT_ERR:
        break; // noop
    default:
        alert('An error occurred reading this file.');
    }
}

function onSuccess(evt){
    var fileReader = evt.target;
    if(fileReader.error) return console.log("error onloadend!?");

    renderDXF(dxf.parseString(fileReader.result));
}
function renderDXF(data) {
    // var entities = dxf.denormalise(data);
    // var groups   = dxf.groupEntitiesByLayer(entities);
    // won't use groups or entities for now, just the converted polylines
    var polylines = dxf.toOnlyLines(data);
    
    updateGeometryBuffer(polylines);
}

function DOMCache() {
    this.quadDimension = document.getElementById("quadDimension");
}
var gl;

var perspective = mat4.create();
var model = mat4.create();
var view = mat4.create();

var camera;

var step = Float32Array.BYTES_PER_ELEMENT;

var worldWidth  = 0;
var worldHeight = 0;

var worldPosition = { x: 0, y: 0 };
// [-1 ... +1]
var mousePosition = { ndcx: 0, ndcy: 0 };

var PI = Math.PI;

var cameraZ = 50;

var zoom = false;
var zoomDirection = false;

var mouseController;

var quadSize;

var domCache;

var frameCount = 0;   // used to update GUI every x-frames instead of every second
window.addEventListener('load', initialize);

function initialize() {

    initWebGL(canvas);
    initMatrices();
    initWorld();

    initFileLoader();


    mouseController = new MouseController();
    domCache = new DOMCache();


    createGridProgram();
    createGuiProgram();
    createGeometryProgram();

    window.addEventListener("wheel", onScroll);


    render(0);
}




var then = 0;
function render(now) {
    requestAnimationFrame(render);

    now = 0.001 * now;
    var deltatime = now - then;
    then = now;

    worldUpdate(deltatime);

    renderBackground();
    renderGrid();
    renderGui();
    renderGeometry();
}

function initWebGL(canvas) {
    var canvas = document.getElementById('canvas');
    canvas.width  = innerWidth; 
    canvas.height = innerHeight;


    gl = null;

    // Try to grab the standard context. If it fails, fallback to experimental.
    gl = canvas.getContext('webgl', { }) || canvas.getContext('experimental-webgl', { });

    // If we don't have a GL context, give up now
    if (!gl) {
      alert('Unable to initialize WebGL. Your browser may not support it.');
    }

    return gl;
}

function initMatrices() {
    mat4.perspective(perspective, 45 * PI / 180, innerWidth/innerHeight, 0.3, 1000);
}

function onScroll(e) {
    onZoom(e);
}






// TODO: MOUSE LINES & il coso in basso a destra che ti dice le dimensioni di un quadretto