var directions = [

    [1,1,0],
    [-1,1,0],
    [1,-1,0],
    [-1,-1,0],
    [1,0,1],
    [-1,0,1],
    [1,0,-1],
    [-1,0,-1],
    [0,1,1],
    [0,-1,1],
    [0,1,-1],
    [0,-1,-1],

];

function createNoiseTexture() {
    var texture = gl.createTexture();

	var array = new Uint8Array(256 * 256 * 4);

	for(var i = 0; i < 256*256; i++) {
        // sets the global x, y & z variables
        generateVector();

        //var dir = directions[Math.floor(Math.random() * 12)];

		array[i * 4 + 0] = Math.floor( x /*dir[0]*/ * 255.0 );
		array[i * 4 + 1] = Math.floor( y /*dir[1]*/ * 255.0 );
		array[i * 4 + 2] = Math.floor( z /*dir[2]*/ * 255.0 );
		array[i * 4 + 3] = 255;
	}

	//erano valori di tipo 225 25 25 225


	gl.bindTexture(gl.TEXTURE_2D, texture);
	//gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 256, 256, 0, gl.RGBA, gl.UNSIGNED_BYTE, array);

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);

	gl.bindTexture(gl.TEXTURE_2D, null);

	PerlinNoiseProgram.noiseTexture = texture;
}

function createSecondNoiseTexture() {
    var texture = gl.createTexture();

	var array = new Uint8Array(256 * 256 * 4);

	for(var i = 0; i < 256*256; i++) {
        // sets the global x, y & z variables
        generateVector();

        //var dir = directions[Math.floor(Math.random() * 12)];

		array[i * 4 + 0] = Math.floor( x /*dir[0]*/ * 255.0 );
		array[i * 4 + 1] = Math.floor( y /*dir[1]*/ * 255.0 );
		array[i * 4 + 2] = Math.floor( z /*dir[2]*/ * 255.0 );
		array[i * 4 + 3] = 255;
	}

	//erano valori di tipo 225 25 25 225


	gl.bindTexture(gl.TEXTURE_2D, texture);
	//gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 256, 256, 0, gl.RGBA, gl.UNSIGNED_BYTE, array);

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);

	gl.bindTexture(gl.TEXTURE_2D, null);

	PerlinNoiseProgram.secondNoiseTexture = texture;
}

var x, y, z;
function generateVector() {
    var theta = Math.acos(2 * Math.random() - 1);
    var phi = 2 * Math.random() * Math.PI;

    x = Math.cos(phi) * Math.sin(theta);
    y = Math.sin(phi) * Math.sin(theta);
    z = Math.cos(theta); 


    var vlength = Math.sqrt(x*x + y*y + z*z);
    x /= vlength;
    y /= vlength;
    z /= vlength;

    x = x * 0.5 + 0.5; 
    y = y * 0.5 + 0.5; 
    z = z * 0.5 + 0.5; 
}