var ParticlesCount = 150;
var ParticleFBOSwapper = 1; 


var ParticlesFBO1;
var ParticlesFBO2;
//this renderbuffer provides DEPTH ONLY - change to include stencilBuffer
function createParticlesFBOs() {
	var FBO = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, FBO);

    FBO.texture = createParticlesTexture();
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, FBO.texture, 0);
    
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    ParticlesFBO1 = FBO;





    var FBO2 = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, FBO2);

    FBO2.texture = createParticlesTexture();
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, FBO2.texture, 0);
    
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    ParticlesFBO2 = FBO2;
}

function createParticlesTexture() {
    var texture = gl.createTexture();

    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    //gl.generateMipmap(gl.TEXTURE_2D);


    var array = new Float32Array(ParticlesCount * ParticlesCount * 4);

	for(var i = 0; i < ParticlesCount*ParticlesCount; i++) {
        // sets the global x, y & z variables
        generateVector();

        //var dir = directions[Math.floor(Math.random() * 12)];

		array[i * 4 + 0] = Math.random() * innerWidth;
		array[i * 4 + 1] = Math.random() * innerHeight;
		array[i * 4 + 2] = Math.random() * 100.0;
		array[i * 4 + 3] = 255;
	}
    
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, ParticlesCount, ParticlesCount, 0, gl.RGBA, gl.FLOAT, array);

    return texture;
}


















var ParticlePositionProgram;
function createParticlePositionProgram() {
    var Program = getShader("particlesPositionv", "particlesPositionf", false);
    Program.a1  = gl.getAttribLocation(Program, "pos");

    Program.noiseTexture  = gl.getUniformLocation(Program, "noiseTexture");
    Program.screenSize  = gl.getUniformLocation(Program, "screenSize");

    vertices = [
        -1.0, -1.0,
        -1.0, +1.0,
        +1.0, -1.0,

        +1.0, -1.0,
        -1.0, +1.0,
        +1.0, +1.0
    ];

    Program.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    Program.nverts = 6;

    window.ParticlePositionProgram = Program;
}

var DrawParticlesProgram;
function createDrawParticlesProgram() {
    var Program = getShader("drawParticlesv", "drawParticlesf", false);
    Program.a1  = gl.getAttribLocation(Program, "samplerCoord");

    Program.particlePositions  = gl.getUniformLocation(Program, "particlePositions");
    Program.screenSize  = gl.getUniformLocation(Program, "screenSize");

    vertices = [];

    for(var i = 0; i < ParticlesCount; i++) 
    for(var j = 0; j < ParticlesCount; j++) {
         vertices.push(i / ParticlesCount, j / ParticlesCount);
    }

    Program.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    Program.nverts = vertices.length / 2;

    window.DrawParticlesProgram = Program;
}























var firstIter = true;
function DrawParticles() {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    

    if(firstIter) {
        gl.clearColor(1.0, 1.0, 1.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        firstIter = false;    
    }


	gl.useProgram(DrawParticlesProgram);
	gl.enableVertexAttribArray(DrawParticlesProgram.a1);

    gl.bindBuffer(gl.ARRAY_BUFFER, DrawParticlesProgram.buffer);
	gl.vertexAttribPointer(DrawParticlesProgram.a1, 2, gl.FLOAT, false, 0, 0);



    // ParticleFBOSwapper will be 1 initially
    gl.activeTexture(gl.TEXTURE0);
    if(ParticleFBOSwapper % 2 === 0)
        gl.bindTexture(gl.TEXTURE_2D, ParticlesFBO1.texture);
    else 
        gl.bindTexture(gl.TEXTURE_2D, ParticlesFBO2.texture);
	gl.uniform1i(DrawParticlesProgram.particlePositions, 0);




    gl.uniform2f(DrawParticlesProgram.screenSize, innerWidth, innerHeight);




    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	gl.drawArrays(gl.POINTS, 0, DrawParticlesProgram.nverts);
    gl.disable(gl.BLEND);
    ParticleFBOSwapper++;
    
}

function computeParticlesPositions() {
    // ParticleFBOSwapper will be set to 1 initially, the FBO2 will be bound and we'll read from FBO1.texture


    gl.viewport(0,0, ParticlesCount, ParticlesCount);


    if(ParticleFBOSwapper % 2 === 0)
        gl.bindFramebuffer(gl.FRAMEBUFFER, ParticlesFBO1);
    else 
        gl.bindFramebuffer(gl.FRAMEBUFFER, ParticlesFBO2);


    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

	gl.useProgram(ParticlePositionProgram);
	gl.enableVertexAttribArray(ParticlePositionProgram.a1);

    gl.bindBuffer(gl.ARRAY_BUFFER, ParticlePositionProgram.buffer);
	gl.vertexAttribPointer(ParticlePositionProgram.a1, 2, gl.FLOAT, false, 0, 0);




	gl.activeTexture(gl.TEXTURE0);
    if(ParticleFBOSwapper % 2 === 0)
        gl.bindTexture(gl.TEXTURE_2D, ParticlesFBO2.texture);
    else 
        gl.bindTexture(gl.TEXTURE_2D, ParticlesFBO1.texture);
	gl.uniform1i(ParticlePositionProgram.particlePositions, 0);



	gl.uniform2f(ParticlePositionProgram.screenSize, innerWidth, innerHeight);
    



    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, PerlinNoiseFBO.texture);    
	gl.uniform1i(ParticlePositionProgram.noiseTexture, 1);



    gl.uniform2f(ParticlePositionProgram.screenSize, innerWidth, innerHeight);

	gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.viewport(0,0, innerWidth, innerHeight);
}

















window.addEventListener('keydown', function(e){
    if(e.key == 'k') {
        var array = new Float32Array(ParticlesCount * ParticlesCount * 4);

	    for(var i = 0; i < ParticlesCount*ParticlesCount; i++) {
            // sets the global x, y & z variables
            generateVector();

            //var dir = directions[Math.floor(Math.random() * 12)];

	    	array[i * 4 + 0] = Math.random() * innerWidth;
	    	array[i * 4 + 1] = Math.random() * innerHeight;
	    	array[i * 4 + 2] = Math.random() * 100.0;
	    	array[i * 4 + 3] = 255;
	    }

        if(ParticleFBOSwapper % 2 === 0)
            gl.bindTexture(gl.TEXTURE_2D, ParticlesFBO2.texture);
        else 
            gl.bindTexture(gl.TEXTURE_2D, ParticlesFBO1.texture);

        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, ParticlesCount, ParticlesCount, 0, gl.RGBA, gl.FLOAT, array);
    }
});