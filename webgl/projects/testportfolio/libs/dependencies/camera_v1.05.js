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
    this.params = camera_params;
    this.camera_keydown = camera_keydown;
    this.camera_keyup = camera_keyup;
    this.camera_zoom = camera_zoom;


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
	this.look = [0,0,0];
	this.mousecontrols = true;	
	this.depth_of_field_transform_count = 0;	








	this.lookAt = mat4.create();
	this.yaw = -3.14/2;	//-90 e sai perchè
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




	if(this.mousecontrols)	{
		window.addEventListener("keydown", this.camera_keydown.bind(this));
		window.addEventListener("keyup", this.camera_keyup.bind(this));
	}
}

function camera_params(zoom_smoothness, 
					   speed, 
					   _zoom, 
					   smoothDeltatime, 
					   rotationSensitivity)
{
	if(zoom_smoothness !== undefined)
		this.zoom_smoothness = zoom_smoothness;

	if(speed !== undefined)
		this.speed = speed;

	if(_zoom !== undefined)
		this.startingZoom = _zoom;

	if(smoothDeltatime !== undefined)
		this.smoothDeltaTimeCheck = smoothDeltatime;

	if(rotationSensitivity !== undefined)
		this.rotationSensitivity = rotationSensitivity;
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

	if(!this.zoomdefined)
	{
		this.startingZoom = zoom;
		this.zoomdefined = true;
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






    if(Math.abs(this.deltazoom) > 0)
    {
    	var increment = this.deltazoom * this.zoom_smoothness;
    	if(this.deltazoom < 0) this.deltazoom = this.deltazoom < -0.01 ? 
    				this.deltazoom - increment : 0;

    	if(this.deltazoom > 0) this.deltazoom = this.deltazoom > +0.01 ? 
   					this.deltazoom - increment : 0;

    	zoom += increment;
    	if(zoom < 44.5) zoom = 44.5;
    	if(zoom > this.startingZoom) zoom = this.startingZoom;
    }





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

function camera_zoom(e)
{
    var delta = e.wheelDelta ? e.wheelDelta : -e.detail;

    if(delta > 0)
        this.deltazoom += -0.15;
    else
        this.deltazoom += +0.15;
}


function camera_getAutocenteredViewMatrix(deltatime, smoothness, radius)
{
	this.yaw   += this.deltaRot[0] * smoothness;
    this.pitch -= this.deltaRot[1] * smoothness;

    if(this.autoRotate)
    {
    	this.yaw += (this.autoRotateSpeed / 180 * Math.PI) * deltatime;
    }


    this.deltaRot[0] -= this.deltaRot[0] * smoothness;
    this.deltaRot[1] -= this.deltaRot[1] * smoothness;

    if(this.pitch > 3.13/2)  this.pitch = 3.13/2;
    if(this.pitch < -3.13/2) this.pitch = -3.13/2;


	if(Math.abs(this.deltazoom) > 0)
    {
    	var increment = this.deltazoom * this.zoom_smoothness;
    	if(this.deltazoom < 0) this.deltazoom = this.deltazoom < -0.01 ? 
    				this.deltazoom - increment : 0;

    	if(this.deltazoom > 0) this.deltazoom = this.deltazoom > +0.01 ? 
   					this.deltazoom - increment : 0;

    	zoom += increment;
    	if(zoom < 44.5) zoom = 44.5;
    	if(zoom > this.startingZoom) zoom = this.startingZoom;
    }



	var xpos = Math.cos(this.yaw) * Math.cos(this.pitch) * radius;
	var zpos = Math.sin(this.yaw) * Math.cos(this.pitch) * radius;
	var ypos = Math.sin(this.pitch) * radius;


	this.pos[0] = xpos + this.look[0];
	this.pos[1] = ypos + this.look[1];
	this.pos[2] = -zpos + this.look[2];


    mat4.lookAt(this.lookAt, this.pos, this.look, this.up);




    if(this.depth_of_field_transform_count != 0) {


    	var degree = 6.28 * this.depth_of_field_transform_count / 10;

    	var yaw   = this.yaw   + Math.cos(degree) / 150;
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