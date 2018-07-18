var drawToScreenProgram;
function createDrawToScreenProgram() {
	var Program = getShader("blitvert", "blitfrag", false);
 	Program.a1 = gl.getAttribLocation(Program, "pos");
 	Program.a2 = gl.getAttribLocation(Program, "coord");

 	Program.texture = gl.getUniformLocation(Program, "texture");

 	var vertices = [
		-1.0, -1.0, 0.0, 0.0,
		-1.0, +1.0, 0.0, 1.0,
		+1.0, -1.0, 1.0, 0.0,
 
		+1.0, -1.0, 1.0, 0.0,
		-1.0, +1.0, 0.0, 1.0,
		+1.0, +1.0, 1.0, 1.0,
	];

 	Program.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    //assegnalo così puoi usare il nome che vuoi quando serve
    drawToScreenProgram = Program;
}




function drawToScreen() {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    
    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

	gl.useProgram(drawToScreenProgram);
	gl.enableVertexAttribArray(drawToScreenProgram.a1);
	gl.enableVertexAttribArray(drawToScreenProgram.a2);

    gl.bindBuffer(gl.ARRAY_BUFFER, drawToScreenProgram.buffer);
	gl.vertexAttribPointer(drawToScreenProgram.a1, 2, gl.FLOAT, false, step * 4, 0);
	gl.vertexAttribPointer(drawToScreenProgram.a2, 2, gl.FLOAT, false, step * 4, step * 2);


			gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, PerlinNoiseFBO.texture);
	gl.uniform1i(drawToScreenProgram.texture, 0);



	gl.drawArrays(gl.TRIANGLES, 0, 6);
}

function drawNoiseToScreen() {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    
    gl.clearColor(0.0, 0.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

	gl.useProgram(drawToScreenProgram);
	gl.enableVertexAttribArray(drawToScreenProgram.a1);
	gl.enableVertexAttribArray(drawToScreenProgram.a2);

    gl.bindBuffer(gl.ARRAY_BUFFER, drawToScreenProgram.buffer);
	gl.vertexAttribPointer(drawToScreenProgram.a1, 2, gl.FLOAT, false, step * 4, 0);
	gl.vertexAttribPointer(drawToScreenProgram.a2, 2, gl.FLOAT, false, step * 4, step * 2);


			gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, PerlinNoiseFBO.texture);
	gl.uniform1i(drawToScreenProgram.texture, 0);



	gl.drawArrays(gl.TRIANGLES, 0, 6);
}