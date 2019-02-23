var gl;
var buffer;
var Program;


var finalBuffer;
var finalProgram;

var pongProgram;
var pongBuffer;


var jsonStruct;

var texture;
var glyph_texture;
var skull_texture;

var boundingVertices = [];


var rows = 0;
var columns = 500;
var zoom = 45;


var textureAlpha = 0.0;
var textureBlurAlpha = 0.0;


var WaitTime = 2.5;




var pongFramebuffer;
var pongFramebufferTexture;

var pingFramebuffer;
var pingFramebufferTexture;

var displayFramebuffer;
var displayFramebufferTexture;


/*
per incrementare l'effetto di "lettera attiva" si puo' usare anche una funzione del tipo Math.pow(numerofra0e1,   0.5); in questo modo i numeri si avvicinerebbero secondo funzione naturale esponenziale ad 1 creando uno smoothing effect migliore (?)



se add è maggiore di 2 servirebbe abbassare l'opacità di tutta la colonna (buona fortuna) e poi procedere con l'altra iterazione e rifare lo stesso eventualmente





TIME NON VA BENE PERCHE' VIENE MODULATO OGNI 90 SECONDI E FA SPOSTAMENTI ISTANTANEI IMPREVISTI, USA ROTATOR



le colonne più lontane le faccio più "scure" ?







opacity decreaser diverso per ogni colonna/traverser ?
*/





//opacity di ogni quad
var opacity = [];
//char di ogni quad
var chars = [];
//contiene gli index delle lettere che cambiano di continuo
var changer = [];
//serve al changer per indexare gli item da cambiare nel changer
var percentage = 0.5;
var traverser = [];






var Kpressed = false;
var DistanceTrigger = false;



//quel problema è dato dal fatto che gli toglie l'opacity a colpi di deltatime

//muovi il near plane un po' di più in avanti

//le lettere molto vicine vanno blendate abbassando la trasparenza?







var wwidth;
var quadSize;






var camera;
//projection * view * model si fa nella cpu se possibile
var projection 	= mat4.create();
var model 		= mat4.create();
var view 		= mat4.create();










//non va bene l'onload, ricordati di cambiarlo
window.onload = function() {

	var canvas = document.getElementById("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;


	document.addEventListener("keydown", keypress);
	document.addEventListener("keyup", keyup);


	camera = new createCamera();
	camera.speed = 7.5;


	var names = ["webgl", "experimental-webgl", "webkit-3d", "mozwebgl"];

	for(var i in names)
	{
        try 
        {
            gl = canvas.getContext(names[i], {premultipliedAlpha: false});

            if (gl && typeof gl.getParameter == "function") 
            {
                /* WebGL is enabled */
                break;
            }
        } catch(e) { }
    }

    if(gl == null)
    	alert("could not initialize webGL");

	var retVal = gl.getExtension('OES_texture_float');



	setAudio();





	var xmlhttp = new XMLHttpRequest();
	var url = "timevals.json";
	
	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        jsonStruct = JSON.parse(xmlhttp.responseText);
	        var shit = 234;
	    }
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();













	Program = getShader("vertex", "fragment", false);
	Program.a1 = gl.getAttribLocation(Program, "pos");
	Program.a2 = gl.getAttribLocation(Program, "coord");

	Program.floatingTex = gl.getUniformLocation(Program, "floatingTex");
	Program.glyphs = gl.getUniformLocation(Program, "glyphs");
	Program.rows = gl.getUniformLocation(Program, "rows");
	Program.columns = gl.getUniformLocation(Program, "columns");

	Program.Time = gl.getUniformLocation(Program, "Time");
	Program.rotator = gl.getUniformLocation(Program, "rotator");
	Program.values = gl.getUniformLocation(Program, "values");
	Program.world_width = gl.getUniformLocation(Program, "world_width");
	Program.quadSize = gl.getUniformLocation(Program, "quadSize");

	Program.projection = gl.getUniformLocation(Program, "projection");
	Program.model = gl.getUniformLocation(Program, "model");
	Program.view = gl.getUniformLocation(Program, "view");

	gl.enableVertexAttribArray(Program.a1);
	gl.enableVertexAttribArray(Program.a2);


	wwidth = getBoundingVertices(zoom, window.innerWidth / window.innerHeight, 45.5)[2][1] * 2;


	boundingVertices = getBoundingVertices(zoom, window.innerWidth / window.innerHeight, 30);

	
	var world_Width_At_30_depth  = boundingVertices[2][0] * 2;
	var world_Height_At_30_depth = boundingVertices[2][1] * 2;

	//le creiamo by column per ora
	var quadside = world_Width_At_30_depth / 120;
	quadSize = quadside;

	rows = Math.floor(world_Height_At_30_depth / quadside + 5);
	array = new Float32Array(rows*columns*4);

	var vertices = [];




	//if active è rows+1 allora ha finito per cui:
	//togliamo a wait deltatime
	//appena wait è <= 0 assegnamo 0 a active e 0.5 a wait
	//così si ricomincia
	for(var i = 0; i < columns; i++)
		traverser[i] = { active:9999, 
						 wait:Math.random()*2.5, 
						 incrementor: Math.pow(Math.random(), 1.8) * 0.85 + 0.15};

	for(var i = 0; i < rows * columns; i++)
		opacity.push(0.0);

	for(var i = 0; i < rows * columns; i++)
		chars.push(0.0);


	//scrivere 100 non va bene perchè different screens have different cose quindi bho buttagli un numero in percentuale
	percentage = Math.floor(rows*columns*percentage);
	for(var i = 0; i < percentage; i++)
		changer.push(Math.floor(Math.random() * rows * columns));

	var columnindexes = [];
	for(var i = 0; i < columns; i++)
		columnindexes.push(i);


	//di tutto sto burdello devi solo capire che la depth è generata in base alle i, mentre le posizioni in x sono RANDOM. non puoi usare l'ID della colonna per capire in che posizione ti trovi
	//tutto sto macello è necessario per evitare problemi di display causati dal z-buffer nel calcolo della trasparenza
	for (var i = 0; i < columns; i++) {

		//var depth = -(Math.pow((columns - i) / columns, 3.0)) * 35.5 - 20;
		//var depth = -(Math.pow((columns - i) / columns, 1.0)) * 45.5 - 5;
		

		var side = (columns - i) / columns;
		var concentrationDepth = 30;
		if(side <= 0.5)
		{
			side *= 2;
			side = Math.pow(side, 0.3);
			depth = -side * (concentrationDepth - 2) - 2;
		}
		else
		{
			//gicoa un po' con sti valori che si possono migliorare


			side = (side - 0.5) * 2;
			side = Math.pow(side, 3.0);
			depth = -side * 25.5 - concentrationDepth;
		}






		//var xpos = i * quadside - world_Width_At_30_depth / 2;
		//var xpos = Math.random() * 50 - 25;



		var array_index = Math.floor(Math.random() * columnindexes.length);
		var index = columnindexes[array_index];
		columnindexes.splice(array_index, 1);

		//var xpos = index * quadside - world_Width_At_30_depth / 2;
		var world_width = getBoundingVertices(zoom, window.innerWidth / window.innerHeight, depth)[2][0] * 2;
		var wsoffset = world_width / columns;
		var xpos = index * wsoffset - world_width / 2;



		for(var j = 0; j < rows; j++)
		{
			
			var ypos = (world_Height_At_30_depth / 2) - (j * quadside); 

			//1st quad
			var quad = [
				xpos, ypos-quadside, depth,      	  0.0, 0.0,   j,i,
				xpos, ypos, depth,				  	  0.0, 0.0625, j,i,
				xpos+quadside, ypos-quadside, depth,  1.0, 0.0,   j,i,
	  
				xpos+quadside, ypos-quadside, depth,  1.0, 0.0,   j,i,
				xpos, ypos, depth,					  0.0, 0.0625, j,i,
				xpos+quadside, ypos, depth,			  1.0, 0.0625, j,i
			];

			for(var r = 0; r < 42; r++)
				vertices.push(quad[r]);
		}
	}






	/*
	var vertices = [
		-1.0, -1.0,
		-1.0,  1.0,
		 1.0, -1.0,

		-1.0,  1.0,
		 1.0,  1.0,
		 1.0, -1.0
	];*/

	buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

	var step = Float32Array.BYTES_PER_ELEMENT;
	gl.vertexAttribPointer(Program.a1, 3, gl.FLOAT, false, step * 7, 0);
	gl.vertexAttribPointer(Program.a2, 4, gl.FLOAT, false, step * 7, step * 3);

















	/* ping pong framebuffer & program */
	pongFramebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, pongFramebuffer);
    pongFramebuffer.width  = window.innerWidth;
    pongFramebuffer.height = window.innerHeight;

    pongFramebufferTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, pongFramebufferTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    //gl.generateMipmap(gl.TEXTURE_2D);

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, pongFramebuffer.width, pongFramebuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);


    var renderbuffer2 = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer2);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, pongFramebuffer.width, pongFramebuffer.height);

    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pongFramebufferTexture, 0);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer2);

    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);








    pingFramebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, pingFramebuffer);
    pingFramebuffer.width  = window.innerWidth;
    pingFramebuffer.height = window.innerHeight;

    pingFramebufferTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, pingFramebufferTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    //gl.generateMipmap(gl.TEXTURE_2D);

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, pingFramebuffer.width, pingFramebuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);


    var renderbuffer3 = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer3);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, pingFramebuffer.width, pingFramebuffer.height);

    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pingFramebufferTexture, 0);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer3);

    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);






    pongProgram = getShader("pvertex", "pfragment", false);
	pongProgram.a1 = gl.getAttribLocation(pongProgram, "pos");
	pongProgram.texture = gl.getUniformLocation(pongProgram, "texture");
	pongProgram.hor = gl.getUniformLocation(pongProgram, "hor");


	var pongquad = [
		0.0, 0.0,
		0.0, 1.0,
		1.0, 0.0,

		1.0, 0.0,
		0.0, 1.0,
		1.0, 1.0
		];

	pongBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, pongBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pongquad), gl.STATIC_DRAW);

	/* ping pong framebuffer & program - END*/







































	/* Final framebuffer routine */
	displayFramebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, displayFramebuffer);
    displayFramebuffer.width  = window.innerWidth;
    displayFramebuffer.height = window.innerHeight;

    displayFramebufferTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, displayFramebufferTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    //gl.generateMipmap(gl.TEXTURE_2D);

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, displayFramebuffer.width, displayFramebuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);


    var renderbuffer = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, displayFramebuffer.width, displayFramebuffer.height);

    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, displayFramebufferTexture, 0);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer);

    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);



	var quad = [
		0.0, 0.0,
		0.0, 1.0,
		1.0, 0.0,

		1.0, 0.0,
		0.0, 1.0,
		1.0, 1.0
		];



	finalProgram = getShader("fvertex", "ffragment", false);
	finalProgram.a1 = gl.getAttribLocation(finalProgram, "pos");
	finalProgram.blurtexture = gl.getUniformLocation(finalProgram, "blurtexture");
	finalProgram.displaytexture = gl.getUniformLocation(finalProgram, "displaytexture");
	finalProgram.skulltexture = gl.getUniformLocation(finalProgram, "skulltexture");
	finalProgram.textureAlpha = gl.getUniformLocation(finalProgram, "textureAlpha");
	finalProgram.screenRatio = gl.getUniformLocation(finalProgram, "screenRatio");
	finalProgram.blurAlpha = gl.getUniformLocation(finalProgram, "blurAlpha");
	finalProgram.textureBlurAlpha = gl.getUniformLocation(finalProgram, "textureBlurAlpha");




	finalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, finalBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(quad), gl.STATIC_DRAW);














	texture = generateTexture();
	glyph_texture = generateGlyphTexture();
	skull_texture = skullTexture();
	requestAnimationFrame(draw);
}

var array;	//definito in webGLStart();
var then = 0;
var controller = 0;
var changerRotator = 0;
var rotator = 0;
var distanceRotator = 86;
var deltamax = 0;
var auto_cascade_not_released = true;
function draw(now)
{
	requestAnimationFrame(draw);
	var step = Float32Array.BYTES_PER_ELEMENT;


	now *= 0.001;
	var deltatime = now - then;
	then = now;



	if(!started) return;




	changerRotator += deltatime;





	//jsonCheck();






	mat4.perspective(projection, zoom, window.innerWidth / window.innerHeight, 1.5, 100);
	mat4.identity(model);
	//mat4.identity(view);




	gl.enable(gl.BLEND);
	gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

	gl.enable(gl.DEPTH_TEST);



	gl.bindFramebuffer(gl.FRAMEBUFFER, displayFramebuffer);
	gl.useProgram(Program);
	gl.clearColor(0.0, 0.0, 0.0, 0.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.enableVertexAttribArray(Program.a1);
	gl.enableVertexAttribArray(Program.a2);
	gl.vertexAttribPointer(Program.a1, 3, gl.FLOAT, false, step * 7, 0);
	gl.vertexAttribPointer(Program.a2, 4, gl.FLOAT, false, step * 7, step * 3);







	gl.uniformMatrix4fv(Program.projection, false, projection);
	gl.uniformMatrix4fv(Program.model, false, model);
	gl.uniformMatrix4fv(Program.view, false, camera.getViewMatrix(deltatime, 0.3));

	gl.uniform1f(Program.rows, rows);
	gl.uniform1f(Program.columns, columns);

	distanceRotator += deltatime;
	if(DistanceTrigger)
		distanceRotator += deltatime * 30.0;
	gl.uniform1f(Program.Time, 0);//(distanceRotator * 2) % 90.0);
	gl.uniform1f(Program.rotator, rotator);
	gl.uniform1f(Program.world_width, wwidth);
	gl.uniform1f(Program.quadSize, quadSize);





	analyser.getByteFrequencyData(frequencyArray);
	analyser.getFloatTimeDomainData(dataArray);
	var average = 0.0; 
	var max = 0;
	for(var i = 0; i < frequencyArray.length; i++)
	{
		if(i < 85)
		{
			average += frequencyArray[i];
		}

		if(dataArray[i] > max)
			max = dataArray[i];

		var distance = dataArray[i] - averageArray[i];
		averageArray[i] += distance * 0.045;
		averageArray[i] = frequencyArray[i];
	}
	average /= frequencyArray.length;
	average /= 128.0;
	rotator += deltatime * (max * 150);
	gl.uniform4fv(Program.values, averageArray);




	//if((controller += deltatime) > 0.0)
	//{
		

		//controller = 0;
	//}


	for(var i = 0; i < columns; i++) {

		var increment = traverser[i].incrementor;
		if(Kpressed) increment = 1.0;
		traverser[i].active += increment;
		var active = Math.floor(traverser[i].active);

		//se voglio far sì che active possa spannare più lettere insieme devo fare un for qui
		//RICORDATI PERO' CHE SE SI ENTRA IN ACTIVE > ROWS DEVO USCIRE SUBITO DA QUESTO ipotetico INNERLOOP
		//perchè? perchè altrimenti toglie al traverser più volte deltatime, diminuendo il traverser.wait di livelli che non erano stati previsti

		//un altra cosa: se ne attivi 20 insieme, saranno tutti e 20 bianchi. dovresti progressivamente togliere un po' di opacity ad ognuno altrimenti uscirebbe strano, ma questo allo stesso tempo non ti aiuta se gli active sono pochi.. pensaci.
		if(active > rows) {
			traverser[i].wait -= deltatime;

			if(traverser[i].wait <= 0.0)
			{
				traverser[i].active = 0;
				traverser[i].wait = Math.random() * WaitTime;
				traverser[i].incrementor = Math.pow(Math.random(), 3.0) * 0.85 + 0.15;
			}
		}
		else
		{
			//active non è maggiore di rows, per cui serve aggiornare
			//l'opacity dell'elemento incriminato

			//questi array vanno indexati in modo strabico usando le colonne perchè
			//l'opengl interpreta le texture in quel modo, dal basso verso l'alto
			var index = (rows - 1) - active;
			opacity[index * columns + i] = 1.0;
			chars[index * columns + i] = Math.floor(Math.random() * 16);
		}
	}


	var sin = ((Math.sin(now * 3) * 0.5 + 0.5) / 2 );
	var t = deltatime > 0.07 ? 0.03 : deltatime;
	for(var i = 0; i < rows*columns; i++) {
		//red is a number between 0 - 8 floorred so between 0 and 7
		array[i * 4 + 0] = chars[i];//Math.floor(Math.random() * 8);
		array[i * 4 + 1] = opacity[i]; //alpha value eventualmente
		array[i * 4 + 2] = i / 1200;
		array[i * 4 + 3] = 1;

		//ho collassato qui anche l'opacity routine
		if(opacity[i] == 0.0) continue;
		opacity[i] -= t * 0.5;
		if(opacity[i] < 0.0) opacity[i] = 0.0;
	}

	gl.bindTexture(gl.TEXTURE_2D, texture);
	//gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, columns, rows, gl.RGBA, gl.FLOAT, array);
	gl.bindTexture(gl.TEXTURE_2D, null);



	if(loadingCascade)
	{
		WaitTime = 25;
	}

	if(releaseCascade)
	{
		for(var i = 0; i < columns; i++) {
			if(traverser[i].active > rows) {
				traverser[i].wait = 0.0;
				traverser[i].active = 0;
				traverser[i].incrementor = 0.75;
			}
		}

		releaseCascade = false;
		loadingCascade = false;
		WaitTime = 2.5;
	}




	/*while(changer.length < percentage)
	{
		var whichColumn = Math.floor(Math.random() * columns);
		var active = Math.floor(traverser[whichColumn].active);

		var index = (rows - 1) - active;
		changer.push(index * columns + whichColumn);
	}*/

	if(changerRotator > 0.06) {

		//in 7.5 seconds i'll remove all of them
		//so in 0.1 seconds i'll remove
		//0.1/7.5 * (rows * columns)   - elements
		var toRemove = Math.floor((0.06 / 7.5) * percentage);
		for(var i = 0; i < toRemove; i++)
		{
			//calcoli non più necessari, ho deciso che in un index ammuzzo gli butto un index ammuzzo. Molto più performante così
			//changer.shift();
			/*var whichColumn = Math.floor(Math.random() * columns);
			var active = Math.floor(traverser[whichColumn].active);
	
			var index = (rows - 1) - active;
			changer.push(index * columns + whichColumn);*/
			changer[Math.floor(Math.random(percentage))] = Math.floor(Math.random(rows * columns));
		}

		for(var i = 0; i < changer.length; i++)
			chars[  changer[i]  ] = Math.floor(Math.random() * 16);

		changerRotator = 0.0;
	}


			gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.uniform1i(Program.floatingTex, 0);

			gl.activeTexture(gl.TEXTURE1);
		gl.bindTexture(gl.TEXTURE_2D, glyph_texture);
	gl.uniform1i(Program.glyphs, 1);

	gl.drawArrays(gl.TRIANGLES, 0, rows * columns * 6);








	//PONG-BLUR RENDERPASS
	gl.useProgram(pongProgram);
	gl.bindBuffer(gl.ARRAY_BUFFER, pongBuffer);
	gl.enableVertexAttribArray(pongProgram.a1);
	gl.vertexAttribPointer(pongProgram.a1, 2, gl.FLOAT, false, 0, 0);

	//se i renderpass sono pari, attacca ping allo stadio finale
	//altrimenti pong



	//first pass is displaypass
	gl.bindFramebuffer(gl.FRAMEBUFFER, pingFramebuffer);
	gl.clearColor(0.0, 0.0, 0.0, 0.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, displayFramebufferTexture);
	gl.uniform1i(pongProgram.texture, 0);
	gl.uniform1f(pongProgram.hor, 15);
	gl.drawArrays(gl.TRIANGLES, 0, 6);

	//then we start with ping pongs


	var blurpasses = 13;
	for(var i = 0; i < blurpasses; i++)
	{
		var hor = 1 - i % 2;

		if(i % 2 == 0) 
			gl.bindFramebuffer(gl.FRAMEBUFFER, pongFramebuffer);
		else 
			gl.bindFramebuffer(gl.FRAMEBUFFER, pingFramebuffer);

		gl.clearColor(0.0, 0.0, 0.0, 0.0);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

		gl.activeTexture(gl.TEXTURE0);

		if(i % 2 == 0) 
			gl.bindTexture(gl.TEXTURE_2D, pingFramebufferTexture);
		else 
			gl.bindTexture(gl.TEXTURE_2D, pongFramebufferTexture);

		gl.uniform1i(pongProgram.texture, 0);
		gl.uniform1f(pongProgram.hor, hor);
		gl.drawArrays(gl.TRIANGLES, 0, 6);
	}








	var currentTime = audioContext.currentTime - start_time;


	if(currentTime < 36.0)
	{
		if(currentTime > 28.0)
		{
			var t = (currentTime - 28.0) / 4.0;
			textureBlurAlpha = t * 2;
		}
		if(currentTime > 32.0)
		{
			var t = 1.0 - (currentTime - 32.0) / 4.0;
			textureBlurAlpha = t * 2;
		}
	}



	if(currentTime < 49.5)
	{
		if(currentTime > 37.6) //40 è perfetto
		{
			WaitTime = 25;
		}
	}
	if(auto_cascade_not_released)
	{
		if(currentTime > 49.5)
		{
			for(var i = 0; i < columns; i++) {
				if(traverser[i].active > rows) {
					traverser[i].wait = 0.0;
					traverser[i].active = 0;
					traverser[i].incrementor = 0.75;
				}
			}
	
			releaseCascade = false;
			loadingCascade = false;
			WaitTime = 2.5;
			auto_cascade_not_released = false;
		}
	}



















	//FINAL RENDERPASS

	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	gl.useProgram(finalProgram);
	gl.bindBuffer(gl.ARRAY_BUFFER, finalBuffer);
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.bindBuffer(gl.ARRAY_BUFFER, finalBuffer);
	gl.enableVertexAttribArray(finalProgram.a1);
	gl.vertexAttribPointer(finalProgram.a1, 2, gl.FLOAT, false, 0, 0);


			gl.activeTexture(gl.TEXTURE0);
		if(blurpasses % 2 == 0)
			gl.bindTexture(gl.TEXTURE_2D, pingFramebufferTexture);
		else
			gl.bindTexture(gl.TEXTURE_2D, pongFramebufferTexture);
	gl.uniform1i(finalProgram.blurtexture, 0);

			gl.activeTexture(gl.TEXTURE1);
		gl.bindTexture(gl.TEXTURE_2D, displayFramebufferTexture);
	gl.uniform1i(finalProgram.displaytexture, 1);

			gl.activeTexture(gl.TEXTURE2);
		gl.bindTexture(gl.TEXTURE_2D, skull_texture);
	gl.uniform1i(finalProgram.skulltexture, 2);


	gl.uniform1f(finalProgram.screenRatio, window.innerWidth / window.innerHeight);




	/*analyser.getByteFrequencyData(frequencyArray);
	var average = 0.0; 
	for(var i = 0; i < frequencyArray.length / 6; i++)
	{
		average += frequencyArray[i];
	}
	average /= frequencyArray.length;
	average /= 128.0;*/
	gl.uniform1f(finalProgram.blurAlpha, Math.pow(average, 2.59));

	if(currentTime < 16.5)
	{
		var t = (currentTime) / 16.5
		textureAlpha = t * t * t; 
		//textureBlurAlpha = 0.0;//(1.0 - Math.pow(t, 1));
	}
	gl.uniform1f(finalProgram.textureAlpha, textureAlpha);
	gl.uniform1f(finalProgram.textureBlurAlpha, textureBlurAlpha);




	gl.drawArrays(gl.TRIANGLES, 0, 6);
}



function generateTexture()
{
	var ftext = gl.createTexture();

	var array = new Float32Array(rows*columns*4);

	for(var i = 0; i < rows*columns; i++) {
		array[i * 4 + 0] = Math.floor(Math.random() * 16);
		array[i * 4 + 1] = 0.0; //era 25
		array[i * 4 + 2] = 25;
		array[i * 4 + 3] = 225;
	}

	//erano valori di tipo 225 25 25 225


	gl.bindTexture(gl.TEXTURE_2D, ftext);
	//gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, columns, rows, 0, gl.RGBA, gl.FLOAT, array);

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

	gl.bindTexture(gl.TEXTURE_2D, null);

	return ftext;
}


function getBoundingVertices(fov, ratio, depth)
{
	var BoundingVertices = [];
	var projection = 		 mat4.create();
	var projection_inverse = mat4.create();

	mat4.perspective(projection, fov, ratio, 0.1, depth);
	mat4.invert(projection_inverse, projection);
	
	var NDCcube = [];

	//NDCcube.push(vec4.fromValues(-1.0, -1.0, -1.0, 1.0));
	//NDCcube.push(vec4.fromValues( 1.0, -1.0, -1.0, 1.0));
	//NDCcube.push(vec4.fromValues(-1.0,  1.0, -1.0, 1.0));
	//NDCcube.push(vec4.fromValues( 1.0,  1.0, -1.0, 1.0));

	NDCcube.push(vec4.fromValues(-1.0, -1.0,  1.0, 1.0));
	NDCcube.push(vec4.fromValues(-1.0,  1.0,  1.0, 1.0));
	NDCcube.push(vec4.fromValues( 1.0,  1.0,  1.0, 1.0));
	NDCcube.push(vec4.fromValues( 1.0, -1.0,  1.0, 1.0));

	/*
		Returned Values:
		2___________3
		|			|
		|			|
		|			|
		|___________|
		1			4
	*/

	for(var i = 0; i < 4; i++)
	{
		var tempvec = vec4.create();
		tempvec = vec4.transformMat4(tempvec, NDCcube[i], projection_inverse);

		BoundingVertices.push(vec3.fromValues(
			tempvec[0] / tempvec[3],
			tempvec[1] / tempvec[3],
			tempvec[2] / tempvec[3]
			   ));
	}

	return BoundingVertices;
}

function generateGlyphTexture()
{
	var ftext = gl.createTexture();

	var image = document.getElementById("chars");

	gl.bindTexture(gl.TEXTURE_2D, ftext);
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    //l'ho dovuta fare power of two per poter generare automaticamente una mipmap altrimenti mi toccava fare i lod a mano
    gl.generateMipmap(gl.TEXTURE_2D);

	gl.bindTexture(gl.TEXTURE_2D, null);

	return ftext;
}


function skullTexture()
{
	var ftext = gl.createTexture();

	var image = document.getElementById("skull");

	gl.bindTexture(gl.TEXTURE_2D, ftext);
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

	gl.bindTexture(gl.TEXTURE_2D, null);

	return ftext;
}




var held = false;
var helddowntime = 0.0;
var loadingCascade = false;
var releaseCascade = false;
function keypress(e)
{
	//if(!held) {
		//console.log(audioContext.currentTime + "  down");
		helddowntime = audioContext.currentTime - start_time + ", ";
	//}
	//held = true;

	if(e.keyCode == 74)
	{
		Kpressed = true;
	}

	if(e.keyCode == 75)
	{
		DistanceTrigger = true;
	}

	if(e.keyCode == 76)
	{
		resetTraverser = true;
		loadingCascade = true;
	}
	if(e.keyCode == 77)
	{
		if(textureBlurAlpha < 1.0)
		{
			textureBlurAlpha += 0.15;
			//textureAlpha -= 0.15;
		}
	}
	if(e.keyCode == 78)
	{
		if(textureBlurAlpha > 0.0)
		{
			textureBlurAlpha -= 0.15;
			//textureAlpha += 0.15;
		}
	}
}


var data = "{\"array\": [";
function keyup(e)
{
	//console.log(audioContext.currentTime - start_time + "  up");
	//data += "[" + helddowntime;
	//data += audioContext.currentTime - start_time + "], ";
	//helddowntime = "";

	//held = false;
	if(e.keyCode == 74)
	{
		Kpressed = false;
	}

	if(e.keyCode == 75)
	{
		DistanceTrigger = false;
		//var url = 'data:text/json;charset=utf8,' + encodeURIComponent(data);
		//window.open(url, '_blank');
		//window.focus();
	}

	if(e.keyCode == 76)
	{
		releaseCascade = true;
	}
}



var start_time = 0.0;
var started = false;
var audioContext;
var dataArray;
var frequencyArray;
var averageArray;
var analyser;
var sourceBuffer;
var gainNode;
function setAudio()
{
	// Create the audio context
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
 	
 	//ricordati che quest'API è piena di nodes, che sarebbero come dei
 	//middleware che "modificano" il suono prima di arrivare a destinazione, ovvero agli speaker
 	var request = new XMLHttpRequest();
 
	request.open('GET', 'test.mp3', true);
	request.responseType = 'arraybuffer';
    request.addEventListener("progress", function(evt){
        if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            console.log(evt.loaded);
            document.getElementById("loading").innerHTML = "Loaded:  " + ((evt.loaded / evt.total) * 100).toFixed(0) + "%";
        } else {
            console.log(uncomputable);
        }
    });

	 
	request.onload = function () {
	    var undecodedAudio = request.response;
        //document.getElementById("loading").getElementsByTagName('div')[0].innerHTML = "Creating buffers...";
        document.getElementById("loading").style.display = "none";
	    audioContext.decodeAudioData(undecodedAudio, function (buffer) {
        	// The contents of our mp3 is now an AudioBuffer

        	//criamo l'audiobuffersourceNode - na sorta di player dove mettere canzoni
        	sourceBuffer = audioContext.createBufferSource();

            gainNode = audioContext.createGain();

 	        sourceBuffer.loop = true;
        	sourceBuffer.buffer = buffer;
           
            gainNode.gain.value = 0.001;
            gainNode.gain.linearRampToValueAtTime(gainNode.gain.value, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + 6);


            analyser = audioContext.createAnalyser();


            analyser.fftSize = 1024;
            var bufferLength = analyser.frequencyBinCount;
            dataArray    = new Float32Array(bufferLength);
            averageArray = new Float32Array(bufferLength);
            frequencyArray = new Uint8Array(bufferLength);
            analyser.getFloatTimeDomainData(dataArray);
            analyser.getFloatTimeDomainData(averageArray);


            
            
            //NODE CONNECTION
            sourceBuffer.connect(gainNode);
            gainNode.connect(analyser);
            analyser.connect(audioContext.destination);
            //NODE CONNECTION - END




			if(audioContext.state == "suspended") {
				let clickAnywhereText = document.createElement("p");
				clickAnywhereText.textContent = "Click anywhere to start";
				clickAnywhereText.style.position = "absolute";
				clickAnywhereText.style.top = "50%";
				clickAnywhereText.style.transform = "translateY(-50%)";
				clickAnywhereText.style.width = "100%";
				clickAnywhereText.style.textAlign = "center";
				clickAnywhereText.style.fontFamily = "Verdana";
				clickAnywhereText.style.color = "#25F890";
				document.body.appendChild(clickAnywhereText);

				function clickedSomewhere() {
					sourceBuffer.start(audioContext.currentTime, 60*5);

					start_time = audioContext.currentTime;
					started = true;	

					document.body.removeChild(clickAnywhereText);

					window.removeEventListener("mousedown", clickedSomewhere);
					window.removeEventListener("touchstart", clickedSomewhere);
				}

				window.addEventListener("mousedown", clickedSomewhere);
				window.addEventListener("touchstart", clickedSomewhere);
			} else {
				sourceBuffer.start(audioContext.currentTime, 60*5);

				start_time = audioContext.currentTime;
				started = true;	
			}
    	});
	};
	 
	request.send();
}




function jsonCheck()
{
	//Kpressed = false;

	/*for(var i = 0; i < jsonStruct.array.length; i++) {
		if(audioContext.currentTime - start_time > jsonStruct.array[i][0])
			if(audioContext.currentTime - start_time < jsonStruct.array[i][1])
				Kpressed = true;
	}*/
}