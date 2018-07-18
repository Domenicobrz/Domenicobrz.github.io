window.addEventListener("load", WGLStart);

var gl;
var canvas;

var projection 	= mat4.create();
var model 		= mat4.create();
var view 		= mat4.create();
var pvm         = mat4.create();

var multiPurposeBuffer = [0,0,0];
var mpb = [0,0,0];


//how many drawable quads
var hmdquads = 115;
var step     = Float32Array.BYTES_PER_ELEMENT;



var texture_brushes;
var palette_texture;
var texture_landscape = [];

var loaded_textures    = 0;
var number_of_textures = 5;
var textures_loaded    = false;



var heraldryLion;
var webglexptext;

var can_scroll_down = false;

var camera;
var zoom = 45;
var yscroll = 0;
function WGLStart()	 {
	canvas = document.getElementById("canvas");
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;

	canvas.addEventListener("mousedown", canvas_mousedown);
	canvas.addEventListener("mousemove", canvas_drag);
	canvas.addEventListener("mouseup",   canvas_mouseup);


	window.addEventListener("keydown",  key_pressed);
    window.addEventListener("mousemove", block_switcher_move);
    window.addEventListener("mousedown", block_switcher_down);
    window.addEventListener("mouseup",   block_switcher_up);

	document.getElementById("container").addEventListener("scroll", 
		function(e){

			yscroll = document.getElementById("container").scrollTop;

			camera.reach[0] = yscroll * 0.01 + block_pos * 0.01;
			camera.reach[1] += 0;
			camera.reach[2] += 0;
			camera.reach[3] = 30 - yscroll * 0.01;
	});


	

	

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







    initDOMElements();







    /*create_quads_framebuffers();

    create_quads_program();
    create_blit_program();
    create_blit_in_main_fbo_program();
    create_draw_background_program();
    create_blit_bkg_texture_in_quads_fbo_program();
    create_gui_program();
	*/


	/*texture_brushes      = generate_texture("brushes.png");
    palette_texture	     = generate_texture("palette.png");
    texture_deformmap    = generate_texture("deformmap.png");
    texture_landscape[0] = generate_texture("landscape.jpg");
    texture_landscape[1] = generate_texture("landscape2.jpg");
    texture_landscape[2] = generate_texture("landscape3.jpg");*/




    //starting anim Programs
    createOffscreenFBO();
    createPostProcessProgram();
    create_starting_anim_program();
    create_lion_program();
    //create_load_circle_program();
    create_2d_general_anim_program();
    createLettersProgram();
    //starting anim Programs - end





    draw_background();	//starting as white






    camera = new createCamera();
    camera.autoCentered = true;
    camera.radius = 30.0;
    camera.look = [0, 1, -25];
    camera.yaw  = 0;
    camera.non_click_movement = true;
    camera.reach = [camera.look[0], camera.look[1], camera.look[2], camera.radius];



    heraldryLion		 = generate_mainpage_texture("anim.png", true);
    webglexptext		 = generate_texture("webglexptextlowres.png");



    foreCanvasInit();

    requestAnimationFrame(Draw);
}

var foregl;
var foreProgram;
var lensProgram;
function foreCanvasInit() {
	var canvas = document.getElementById("forecanvas");
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;

	var names = ["webgl", "experimental-webgl", "webkit-3d", "mozwebgl"];

	for(var i in names)
	{
        try 
        {
            foregl = canvas.getContext(names[i], { premultipliedAlpha: true, alpha: true });

            if (foregl && typeof foregl.getParameter == "function") 
            {
                /* WebGL is enabled */
                break;
            }
        } catch(e) { }
    }

    if(foregl == null)
    	alert("could not initialize webGL");



    foreProgram = getShaderCustomContext("forevert", "forefrag", false, foregl);
    foreProgram.a1 = foregl.getAttribLocation(foreProgram, "pos");
    foreProgram.utexture = foregl.getUniformLocation(foreProgram, "texture");
    foreProgram.time = foregl.getUniformLocation(foreProgram, "time");
    

    foreProgram.texture = generate_texture_custom_context("anim.png", false, foregl, true);

    var vertices = [
    	-1.0, -1.0, 0.685, 0.252,
    	-1.0, +1.0, 0.685, 0.441,
    	+1.0, -1.0, 0.988, 0.252,
	
    	+1.0, -1.0, 0.988, 0.252,
    	-1.0, +1.0, 0.685, 0.441,
    	+1.0, +1.0, 0.988, 0.441
    ];

    foreProgram.buffer = foregl.createBuffer();
    foregl.bindBuffer(foregl.ARRAY_BUFFER, foreProgram.buffer);
    foregl.bufferData(foregl.ARRAY_BUFFER, new Float32Array(vertices), foregl.STATIC_DRAW);


    lensProgram = getShaderCustomContext("lensvert", "lensfrag", false, foregl, false);
    lensProgram.a1 = foregl.getAttribLocation(lensProgram, "pos");
    lensProgram.a2 = foregl.getAttribLocation(lensProgram, "coord");
    lensProgram.utexture = foregl.getUniformLocation(lensProgram, "texture");
    lensProgram.opacity = foregl.getUniformLocation(lensProgram, "opacity");
    lensProgram.mat0 = foregl.getUniformLocation(lensProgram, "transforms[0]");
    lensProgram.mat1 = foregl.getUniformLocation(lensProgram, "transforms[1]");
    lensProgram.mat2 = foregl.getUniformLocation(lensProgram, "transforms[2]");
    lensProgram.mat3 = foregl.getUniformLocation(lensProgram, "transforms[3]");
    lensProgram.mat4 = foregl.getUniformLocation(lensProgram, "transforms[4]");
    

    lensProgram.texture = foreProgram.texture;

    var p  = 0.0615;
    var xo = 0.25;
    var yo = 0.25;
    //width ratio
    var wr = 1.0; //window.innerHeight / window.innerWidth;
    var lensvertices = [
    	//first quad    xyz	  id	coord		   
    	-1.0 * wr, -1.0, 0,   0,    0.383, 0.331,	
    	-1.0 * wr, +1.0, 0,   0,    0.383, 0.402, 	
    	+1.0 * wr, -1.0, 0,   0,    0.454, 0.331,	
    	+1.0 * wr, -1.0, 0,   0,    0.454, 0.331,	
    	-1.0 * wr, +1.0, 0,   0,    0.383, 0.402,		
    	+1.0 * wr, +1.0, 0,   0,    0.454, 0.402,

        //second quad   xyz   id    coord          
        -1.0 * wr, -1.0, 0,   1,    0.4609,    0.337,  
        -1.0 * wr, +1.0, 0,   1,    0.4609,    0.337+p,    
        +1.0 * wr, -1.0, 0,   1,    0.4609+p,  0.337,  
        +1.0 * wr, -1.0, 0,   1,    0.4609+p,  0.337,  
        -1.0 * wr, +1.0, 0,   1,    0.4609,    0.337+p,        
        +1.0 * wr, +1.0, 0,   1,    0.4609+p,  0.337+p,

        //fifth quad    xyz   id    coord          
        -1.0 * wr, -1.0, 0,   4,    0.606,   0.332,   
        -1.0 * wr, +1.0, 0,   4,    0.606,   0.332+p,   
        +1.0 * wr, -1.0, 0,   4,    0.606+p, 0.332,   
        +1.0 * wr, -1.0, 0,   4,    0.606+p, 0.332,   
        -1.0 * wr, +1.0, 0,   4,    0.606,   0.332+p,       
        +1.0 * wr, +1.0, 0,   4,    0.606+p, 0.332+p,

        //fourth quad    xyz  id    coord          
        -1.0 * wr, -1.0, 0,   3,    0.536,   0.332,   
        -1.0 * wr, +1.0, 0,   3,    0.536,   0.332+p,   
        +1.0 * wr, -1.0, 0,   3,    0.536+p, 0.332,   
        +1.0 * wr, -1.0, 0,   3,    0.536+p, 0.332,   
        -1.0 * wr, +1.0, 0,   3,    0.536,   0.332+p,       
        +1.0 * wr, +1.0, 0,   3,    0.536+p, 0.332+p,

        //third quad    xyz   id    coord          
        -1.0 * wr, -1.0, 0,   2,    0.4609,   0.327-p,   
        -1.0 * wr, +1.0, 0,   2,    0.4609,   0.327,    
        +1.0 * wr, -1.0, 0,   2,    0.4609+p, 0.327-p,   
        +1.0 * wr, -1.0, 0,   2,    0.4609+p, 0.327-p,   
        -1.0 * wr, +1.0, 0,   2,    0.4609,   0.327,        
        +1.0 * wr, +1.0, 0,   2,    0.4609+p, 0.327

    ];

    lensProgram.buffer = foregl.createBuffer();
    foregl.bindBuffer(foregl.ARRAY_BUFFER, lensProgram.buffer);
    foregl.bufferData(foregl.ARRAY_BUFFER, new Float32Array(lensvertices), foregl.STATIC_DRAW);

    for(var i = 0; i < 5; i++)
        lens_flares_matrices.push(mat4.create());
}




var then = 0;
var play_starting_anim = true;
var skip_webgl_experiment_draw = true;
function Draw(now)	{
    requestAnimationFrame(Draw);
    
    now *= 0.001;
    var deltatime = now - then;
    then = now;

    //independent from canvas routine, dom elements need to be constantly animated
    animate_dom_elements(now, deltatime);

    //if no other element in the page required to skip/stop the drawing routine of the webgl experiment, go on and draw it
    /*if(!skip_webgl_experiment_draw) {
    	if(!textures_loaded) return;
    	draw_header_webgl_experiment(now, deltatime);
	}*/



	if(play_starting_anim && heraldryLion.loaded) {
		draw_starting_anim(now, deltatime);
		draw_starting_anim_lion(now, deltatime);
		//draw_starting_load_cicle(now, deltatime);
		draw_2d_general_anim(now, deltatime);
		draw_glyphs(now, deltatime);
		draw_post_process(now, deltatime);


		draw_forecanvas(now, deltatime);
	}
}

var framebuffer_bkg;
var framebuffer_quads;
var framebuffer_bkg_texture;
var framebuffer_quads_texture;
function create_quads_framebuffers()  {
	framebuffer_bkg = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer_bkg);

    framebuffer_bkg_texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, framebuffer_bkg_texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    //gl.generateMipmap(gl.TEXTURE_2D);

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, canvas.width, canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

    /*var renderbuffer3 = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer3);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, pingFramebuffer.width, pingFramebuffer.height);

    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer3);*/

    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, framebuffer_bkg_texture, 0);
    
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);





    framebuffer_quads = gl.createFramebuffer();
    framebuffer_quads_texture = gl.createTexture();

    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer_quads);
    gl.bindTexture(gl.TEXTURE_2D, framebuffer_quads_texture);

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    //gl.generateMipmap(gl.TEXTURE_2D);

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, canvas.width, canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

    var renderbuffer = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, canvas.width, canvas.height);

    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer);

    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, framebuffer_quads_texture, 0);
    
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
}






// *******  PROGRAMS CREATION ROUTINES  *******
var mainProgram;
var mainBuffer;
var world_width;
var world_height;
function create_quads_program()	 {

	mainProgram = getShader("qvertex", "qfragment", false);
	mainProgram.a1 = gl.getAttribLocation(mainProgram, "pos");
	mainProgram.a2 = gl.getAttribLocation(mainProgram, "coord");
	mainProgram.a3 = gl.getAttribLocation(mainProgram, "fx");
	mainProgram.a4 = gl.getAttribLocation(mainProgram, "fx2");
	mainProgram.a5 = gl.getAttribLocation(mainProgram, "color");


	mainProgram.projection = gl.getUniformLocation(mainProgram, "projection");
	mainProgram.model      = gl.getUniformLocation(mainProgram, "model");
	mainProgram.view 	   = gl.getUniformLocation(mainProgram, "view");

	mainProgram.brushes    = gl.getUniformLocation(mainProgram, "brushes");
	mainProgram.image      = gl.getUniformLocation(mainProgram, "image");
	mainProgram.deformmap      = gl.getUniformLocation(mainProgram, "deformmap");

	mainProgram.canvas_size = gl.getUniformLocation(mainProgram, "canvas_size");
	mainProgram.Rotator     = gl.getUniformLocation(mainProgram, "Rotator");
	mainProgram.camera_movement     = gl.getUniformLocation(mainProgram, "camera_movement");





	generate_quads_vertices();





	mainBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, mainBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, quadsBuffer, gl.STATIC_DRAW);





	var boundingVertices = getBoundingVertices(45, canvas.width / canvas.height, 5);
	world_width  = boundingVertices[2][0] * 2;
	world_height = boundingVertices[2][1] * 2;
}
var blitProgram;
var blitBuffer;
function create_blit_program()	 {

	blitProgram = getShader("blitvert", "blitfrag", false);
	blitProgram.a1 = gl.getAttribLocation(blitProgram, "pos");
	blitProgram.a2 = gl.getAttribLocation(blitProgram, "coord");	

	blitProgram.quad_texture = gl.getUniformLocation(blitProgram, "quad_texture");
	blitProgram.bkg_texture = gl.getUniformLocation(blitProgram, "bkg_texture");
	blitProgram.bkg_pass = gl.getUniformLocation(blitProgram, "bkg_pass");

	var quad_vertices = [
		-1.0, -1.0, 	0.0, 0.0,
		-1.0, +1.0, 	0.0, 1.0,
		+1.0, -1.0, 	1.0, 0.0,
	
		+1.0, -1.0, 	1.0, 0.0,
		-1.0, +1.0, 	0.0, 1.0,
		+1.0, +1.0, 	1.0, 1.0	
	];

	blitBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, blitBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(quad_vertices), gl.STATIC_DRAW);
}
function create_blit_in_main_fbo_program()	 {
	bimfProgram = getShader("blitvert", "bimffrag", false);
	bimfProgram.a1 = gl.getAttribLocation(bimfProgram, "pos");
	bimfProgram.a2 = gl.getAttribLocation(bimfProgram, "coord");	

	bimfProgram.quad_texture = gl.getUniformLocation(bimfProgram, "quad_texture");
}
function create_blit_bkg_texture_in_quads_fbo_program()	 {
	bbtiqfProgram = getShader("blitvert", "bbtiqffrag", false);
	bbtiqfProgram.a1 = gl.getAttribLocation(bbtiqfProgram, "pos");
	bbtiqfProgram.a2 = gl.getAttribLocation(bbtiqfProgram, "coord");	

	bbtiqfProgram.bkg_texture = gl.getUniformLocation(bbtiqfProgram, "bkg_texture");
}
function create_draw_background_program()	 {
	dbProgram = getShader("blitvert", "dbfrag", false);
	dbProgram.a1 = gl.getAttribLocation(dbProgram, "pos");
	dbProgram.a2 = gl.getAttribLocation(dbProgram, "coord");	

	dbProgram.quad_texture = gl.getUniformLocation(dbProgram, "quad_texture");
}
var guiProgram;
var guiBuffer;
function create_gui_program()	 {
	guiProgram = getShader("guivert", "guifrag", false);
	guiProgram.a1 = gl.getAttribLocation(guiProgram, "pos");
	guiProgram.a2 = gl.getAttribLocation(guiProgram, "coord");	
	guiProgram.a3 = gl.getAttribLocation(guiProgram, "transl");	

	guiProgram.palette_texture = gl.getUniformLocation(guiProgram, "palette_texture");
	guiProgram.palette_opacity = gl.getUniformLocation(guiProgram, "palette_opacity");
	guiProgram.reloading = gl.getUniformLocation(guiProgram, "reloading");

	guiProgram.projection = gl.getUniformLocation(guiProgram, "projection");
	guiProgram.model = gl.getUniformLocation(guiProgram, "model");
	guiProgram.view  = gl.getUniformLocation(guiProgram, "view");



	guiBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, guiBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, generate_gui_quads_vertices(), gl.STATIC_DRAW);
}
// *******  PROGRAMS CREATION ROUTINES - END *******






var quadsBuffer;
var quadsBuffer_compute;
var quads = [];
var quads_snapshot = [];
var properties = 18;
function generate_quads_vertices()	{
 	quadsBuffer = new Float32Array(
 					    hmdquads *   //max number of quads
 					    6 *		//vertices for each quad
 					    properties);		//attributes

 	quadsBuffer_compute = new Float32Array(
 						quadsBuffer.length
 						);


 	var vertices = [];
 	for(var i = 0; i < 6; i++)
 		vertices.push({x:0 , y:0, z:0, s:0, t:0});

 	//last entry has the highest depth
 	for(var i = 0; i < hmdquads; i++)
 	{

 		//var color = (i * vTessellation + j) / (hTessellation * vTessellation);
 		//color = Math.random();

 		/*
			1-
			|    -
 			0---------2
 		*/
 		vertices[0].x = -1;
 		vertices[0].y = -1;
 		vertices[0].s = 0;
 		vertices[0].t = 0;

 		vertices[1].x = -1;
 		vertices[1].y = +1;
		vertices[1].s = 0;
 		vertices[1].t = 1;

 		vertices[2].x = +1;
 		vertices[2].y = -1;
 		vertices[2].s = 1;
 		vertices[2].t = 0;


 		/*
			4---------5
				 -	  |
 					 -3
 		*/
 		vertices[3].x = +1;
 		vertices[3].y = -1;
		vertices[3].s = 1;
 		vertices[3].t = 0;

 		vertices[4].x = -1;
 		vertices[4].y = +1;
 		vertices[4].s = 0;
 		vertices[4].t = 1;

 		vertices[5].x = +1;
 		vertices[5].y = +1;
 		vertices[5].s = 1;
 		vertices[5].t = 1;


 		//it's mandatory to draw transparent quad in 
 		//back to front order, meaning that
 		//quads further away from -5 needs to be drawn first 
 		//for transparency to work
 		//we initialize their depth's to 5 to be off-camera
 		var depth = 5;


 		//next quad index
 		var nqi = i * 6 * properties;

 		for(var r = 0; r < 6; r++) {
 			//next vertex index
 			var nvi = r * properties;

 			quadsBuffer[nqi + nvi + 0] = vertices[r].x;
 			quadsBuffer[nqi + nvi + 1] = vertices[r].y;
 			quadsBuffer[nqi + nvi + 2] = depth;

 			quadsBuffer[nqi + nvi + 3] = vertices[r].s;
 			quadsBuffer[nqi + nvi + 4] = vertices[r].t;
 			quadsBuffer[nqi + nvi + 5] = 0;
 		}
 	}


 	for(var i = 0; i < hmdquads; i++)  {
 		quads.push( {z:5} );
 		quads_snapshot.push( { z:5} );
 	}
}

var guiVertices;
var gui_n_vertices;
var gui_palette_y_offset;
var gui_per_vertex_properties = 10;
var gui_watercolor_y_offsets = [];
function generate_gui_quads_vertices()  {
	gui_n_vertices = 9 * 6;
	guiVertices = new Float32Array(gui_n_vertices * 
								   gui_per_vertex_properties);

	//world width at 2 depth
	var wwa2d = world_width  / 5 * 2; 
	var wha2d = world_height / 5 * 2; 

	var vw = 9; 
	var screen_ratio = canvas.width / canvas.height;
	var x_length = wwa2d * (vw / 100);
	var y_length = x_length;

	var x_off    = -x_length / 2;
	var y_off    = -y_length / 2;

	var x_transl = 0;
	var y_transl = (-wha2d / 2 + (-y_off)) + 
				    //wha2d * gui_palette_y_offset / 100;
				    -y_length;

	gui_palette_y_offset = -y_length;


	//compute palette's vertices first
	var palette_vertices = [
		x_off, y_off, -2,				
				0.0, 0.0, 0,
			x_transl, y_transl, 0, 0,

		x_off, y_off + y_length, -2, 	
				0.0, 1.0, 0,
			x_transl, y_transl, 0, 0,

		x_off + x_length, y_off, -2,	
				1.0, 0.0, 0,
			x_transl, y_transl, 0, 0,
	


		x_off + x_length, y_off, -2,	
				1.0, 0.0, 0,
			x_transl, y_transl, 0, 0,

		x_off, y_off + y_length, -2,	
				0.0, 1.0, 0,
			x_transl, y_transl, 0, 0,

		x_off + x_length, y_off + y_length, -2, 	
				1.0, 1.0, 0,
			x_transl, y_transl, 0, 0
	];













	


	var watercolors_vertices = [];
	var wc_length = x_length / 7.2;
	var wc_offset = -wc_length / 2.0;
	var len = wc_length;

	//palette's left
	//palette's bottom
	//palette's side length
	var pl = x_off + x_transl;
	var pb = y_off + y_transl;
	var psl = x_length;

	//watercolor translations offsets 
	var wc_t = [];
	wc_t.push({x: pl + psl * 0.38, y: pb + psl * 0.38});
	wc_t.push({x: pl + psl * 0.49, y: pb + psl * 0.25});
	wc_t.push({x: pl + psl * 0.33, y: pb + psl * 0.23});
	wc_t.push({x: pl + psl * 0.2, y: pb + psl * 0.33});
	wc_t.push({x: pl + psl * 0.23, y: pb + psl * 0.5});
	wc_t.push({x: pl + psl * 0.35, y: pb + psl * 0.61});
	wc_t.push({x: pl + psl * 0.5, y: pb + psl * 0.66});
	wc_t.push({x: pl + psl * 0.65, y: pb + psl * 0.63});
	
	for(var i = 0; i < 8; i++)
		gui_watercolor_y_offsets.push(wc_t[i].y);

	//watercolor coordinates offsets
	var wc_c = [];
	wc_c.push({so: 0, to: 0});
	wc_c.push({so: 0, to: 0.25});
	wc_c.push({so: 0, to: 0.5});
	wc_c.push({so: 0, to: 0.75});
	wc_c.push({so: 0.25, to: 0});
	wc_c.push({so: 0.25, to: 0.25});
	wc_c.push({so: 0.25, to: 0.5});
	wc_c.push({so: 0.25, to: 0.75});

	for(var i = 0; i < 8; i++) {
		watercolors_vertices.push(
			0, 0, -2,				
			wc_c[i].so, wc_c[i].to, i + 1,
			wc_t[i].x, wc_t[i].y, 0, 0,

			0, len, -2, 	
			wc_c[i].so, 0.25 + wc_c[i].to, i + 1,
			wc_t[i].x, wc_t[i].y, 0, 1,

			len, 0, -2,	
			0.25 + wc_c[i].so, wc_c[i].to, i + 1,
			wc_t[i].x, wc_t[i].y, 1, 0,
	



			len, 0, -2,	
			0.25 + wc_c[i].so, wc_c[i].to, i + 1,
			wc_t[i].x, wc_t[i].y, 1, 0,

			0, len, -2,	
			wc_c[i].so, 0.25 + wc_c[i].to, i + 1,
			wc_t[i].x, wc_t[i].y, 0, 1,

			len, len, -2, 	
			0.25 + wc_c[i].so, 0.25 + wc_c[i].to, i + 1,	
			wc_t[i].x, wc_t[i].y, 1, 1
		);
	}





	for(var i = 0; i < palette_vertices.length; i++)
		guiVertices[i] = palette_vertices[i];

	var next_index = palette_vertices.length;
	for(var i = next_index; i < watercolors_vertices.length + next_index; i++)
		guiVertices[i] = watercolors_vertices[i - next_index];


	return guiVertices;
}



//COUNTER DEVE AUMENTARE CON DELTATIME IN QUALCHE MODO
//COUNTER DEVE AUMENTARE CON DELTATIME IN QUALCHE MODO
//COUNTER DEVE AUMENTARE CON DELTATIME IN QUALCHE MODO
//COUNTER DEVE AUMENTARE CON DELTATIME IN QUALCHE MODO
//COUNTER DEVE AUMENTARE CON DELTATIME IN QUALCHE MODO
//COUNTER DEVE AUMENTARE CON DELTATIME IN QUALCHE MODO
//COUNTER DEVE AUMENTARE CON DELTATIME IN QUALCHE MODO
//COUNTER DEVE AUMENTARE CON DELTATIME IN QUALCHE MODO
//COUNTER DEVE AUMENTARE CON DELTATIME IN QUALCHE MODO
//COUNTER DEVE AUMENTARE CON DELTATIME IN QUALCHE MODO



// *******  WATERCOLOR DRAWING ROUTINES  *******
var texture_index = 0;
function draw_quads(deltatime)  {
	//(blit_framebuffers(deltatime, 2.2);
	//these instructions still runs with blitProgram in use
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//gl.uniform1f(blitProgram.bkg_pass, 4.0 + fadecounter / 300);
	//l'hai cacciata
	//gl.drawArrays(gl.TRIANGLES, 0, 6);


	gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer_quads);
	

	


    //eventualmente scegliere una delle due
    //eventualmente scegliere una delle due

    //gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.SRC_ALPHA, gl.ONE);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.SRC_ALPHA, gl.ONE);
	//gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	//gl.blendEquation( gl.FUNC_ADD );
    gl.enable(gl.BLEND);






   




    update_quads(deltatime);






    gl.useProgram(mainProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, mainBuffer);

    gl.enableVertexAttribArray(mainProgram.a1);
    gl.enableVertexAttribArray(mainProgram.a2);
    gl.enableVertexAttribArray(mainProgram.a3);
    gl.enableVertexAttribArray(mainProgram.a4);
    gl.enableVertexAttribArray(mainProgram.a5);


    gl.vertexAttribPointer(mainProgram.a1, 3, gl.FLOAT, false, step * 18, 0);
    gl.vertexAttribPointer(mainProgram.a2, 3, gl.FLOAT, false, step * 18, step * 3);
    gl.vertexAttribPointer(mainProgram.a3, 4, gl.FLOAT, false, step * 18, step * 6);
    gl.vertexAttribPointer(mainProgram.a4, 4, gl.FLOAT, false, step * 18, step * 10);
    gl.vertexAttribPointer(mainProgram.a5, 4, gl.FLOAT, false, step * 18, step * 14);


    mat4.identity(model);
    mat4.identity(view);
    mat4.perspective(projection, 45, canvas.width / canvas.height, 1, 100);

    gl.uniformMatrix4fv(mainProgram.projection, false, projection);
    gl.uniformMatrix4fv(mainProgram.model, false, model);

    multiPurposeBuffer[0] = Math.sin(then) * 0.06;
    multiPurposeBuffer[1] = Math.cos(then) * 0.0003;
    multiPurposeBuffer[2] = 0;//Math.sin(then / 2.0) * 0.05;
    mat4.translate(view, view, multiPurposeBuffer);

    gl.uniformMatrix4fv(mainProgram.view, false, view);
    

    gl.uniform2f(mainProgram.canvas_size, canvas.width, canvas.height);
    gl.uniform1f(mainProgram.Rotator, then);
    gl.uniform1f(mainProgram.camera_movement, multiPurposeBuffer[2]);



    		gl.activeTexture(gl.TEXTURE0);
    	gl.bindTexture(gl.TEXTURE_2D, texture_brushes);
    gl.uniform1i(mainProgram.brushes,   0);

    		gl.activeTexture(gl.TEXTURE1);
    	gl.bindTexture(gl.TEXTURE_2D, texture_landscape[texture_index]);
    gl.uniform1i(mainProgram.image, 1);

    		gl.activeTexture(gl.TEXTURE2);
    	gl.bindTexture(gl.TEXTURE_2D, texture_deformmap);
    gl.uniform1i(mainProgram.deformmap, 2);



    gl.drawArrays(gl.TRIANGLES, 0, 6 * hmdquads); //just 6 vertices
}
var firstTime = true;
var dbProgram;
function draw_background(deltatime) {
	gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer_bkg);

	//just fill a blank background in it
	if(firstTime) {
		gl.clearColor(1.0, 1.0, 1.0, 1.0);//1.0, 0.9, 0.8, 1.0);
		gl.clear(gl.COLOR_BUFFER_BIT);

		firstTime = false;
		return;
	}

	gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.SRC_ALPHA, gl.ONE);
    gl.enable(gl.BLEND);

	gl.useProgram(dbProgram);
	gl.bindBuffer(gl.ARRAY_BUFFER, blitBuffer);
	gl.enableVertexAttribArray(dbProgram.a1);
	gl.enableVertexAttribArray(dbProgram.a2);
	

	gl.vertexAttribPointer(dbProgram.a1, 2, gl.FLOAT, false, step * 4, 0);
	gl.vertexAttribPointer(dbProgram.a2, 2, gl.FLOAT, false, step * 4, step * 2);


			gl.activeTexture(gl.TEXTURE0);
    	gl.bindTexture(gl.TEXTURE_2D, framebuffer_quads_texture);
    gl.uniform1i(dbProgram.quad_texture, 0);




	gl.drawArrays(gl.TRIANGLES, 0, 6);
}
function blit_framebuffers(deltatime, pass) {
	//gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	//gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	//gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	//gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	//gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	//gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	if(pass == 0.0)
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	else
		gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer_quads);


	gl.clearColor(1.0, 1.0, 1.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);


	gl.useProgram(blitProgram);
	gl.bindBuffer(gl.ARRAY_BUFFER, blitBuffer);
	gl.enableVertexAttribArray(blitProgram.a1);
	gl.enableVertexAttribArray(blitProgram.a2);


	gl.vertexAttribPointer(blitProgram.a1, 2, gl.FLOAT, false, step * 4, 0);
	gl.vertexAttribPointer(blitProgram.a2, 2, gl.FLOAT, false, step * 4, step * 2);


	gl.uniform1f(blitProgram.bkg_pass, pass);

	if(pass == 0.0) {
				gl.activeTexture(gl.TEXTURE0);
    		gl.bindTexture(gl.TEXTURE_2D, framebuffer_quads_texture);
    	gl.uniform1i(blitProgram.quad_texture,   0);
	}
	else {
				gl.activeTexture(gl.TEXTURE0);
    		gl.bindTexture(gl.TEXTURE_2D, null);
    	gl.uniform1i(blitProgram.quad_texture,   0);
	}

    		gl.activeTexture(gl.TEXTURE1);
    	gl.bindTexture(gl.TEXTURE_2D, framebuffer_bkg_texture);
    gl.uniform1i(blitProgram.bkg_texture,   1);


	gl.drawArrays(gl.TRIANGLES, 0, 6);
}
var bimfProgram;
function blit_in_main_framebuffer(deltatime) {
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);


	gl.clearColor(1.0, 1.0, 1.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);


	gl.useProgram(bimfProgram);
	gl.bindBuffer(gl.ARRAY_BUFFER, blitBuffer);
	gl.enableVertexAttribArray(bimfProgram.a1);
	gl.enableVertexAttribArray(bimfProgram.a2);


	gl.vertexAttribPointer(bimfProgram.a1, 2, gl.FLOAT, false, step * 4, 0);
	gl.vertexAttribPointer(bimfProgram.a2, 2, gl.FLOAT, false, step * 4, step * 2);


			gl.activeTexture(gl.TEXTURE0);
    	gl.bindTexture(gl.TEXTURE_2D, framebuffer_quads_texture);
    gl.uniform1i(bimfProgram.quad_texture,   0);
	

	gl.drawArrays(gl.TRIANGLES, 0, 6);
}
var bbtiqfProgram;
function blit_bkg_texture_in_quads_fbo(deltatime) {

	gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer_quads);

	gl.clearColor(1.0, 1.0, 1.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);


	gl.useProgram(bbtiqfProgram);
	gl.bindBuffer(gl.ARRAY_BUFFER, blitBuffer);
	gl.enableVertexAttribArray(bbtiqfProgram.a1);
	gl.enableVertexAttribArray(bbtiqfProgram.a2);


	gl.vertexAttribPointer(bbtiqfProgram.a1, 2, gl.FLOAT, false, step * 4, 0);
	gl.vertexAttribPointer(bbtiqfProgram.a2, 2, gl.FLOAT, false, step * 4, step * 2);


    		gl.activeTexture(gl.TEXTURE0);
    	gl.bindTexture(gl.TEXTURE_2D, framebuffer_bkg_texture);
    gl.uniform1i(bbtiqfProgram.bkg_texture,   0);


	gl.drawArrays(gl.TRIANGLES, 0, 6);
}
function draw_gui(deltatime) {
	//considera se eliminare questa call o meno
	//considera se eliminare questa call o meno
	//considera se eliminare questa call o meno
	//considera se eliminare questa call o meno
	//considera se eliminare questa call o meno
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);


	gl.useProgram(guiProgram);
	gl.bindBuffer(gl.ARRAY_BUFFER, guiBuffer);
	gl.enableVertexAttribArray(guiProgram.a1);
	gl.enableVertexAttribArray(guiProgram.a2);
	gl.enableVertexAttribArray(guiProgram.a3);


	gl.vertexAttribPointer(guiProgram.a1, 3, gl.FLOAT, false, step * 10, 0);
	gl.vertexAttribPointer(guiProgram.a2, 3, gl.FLOAT, false, step * 10, step * 3);
	gl.vertexAttribPointer(guiProgram.a3, 4, gl.FLOAT, false, step * 10, step * 6);

	

    //opacity uniform routine
    gl.uniform1f(guiProgram.palette_opacity, 8.0 - counter / hmdquads * 8.0);
    if(reload_counter)
    	gl.uniform1f(guiProgram.reloading, 5.0);
    else
    	gl.uniform1f(guiProgram.reloading, 0.0);
    //opacity uniform routine - end
 	


 	mat4.identity(model);
    mat4.identity(view);

    gl.uniformMatrix4fv(guiProgram.projection, false, projection);
    gl.uniformMatrix4fv(guiProgram.model, false, model);
    gl.uniformMatrix4fv(guiProgram.view, false, view);






			gl.activeTexture(gl.TEXTURE0);
    	gl.bindTexture(gl.TEXTURE_2D, palette_texture);
    gl.uniform1i(guiProgram.palette_texture,   0);

	gl.drawArrays(gl.TRIANGLES, 0, gui_n_vertices);
}

//this function also animates palette's height offset
var ftd_then = 0;	//first_texture_draw's then variable
var ftd_e = {clientX: 0, clientY: 0};
function first_texture_draw(now, deltatime) {
	block_mouse_interactions = true;

	if(now > ftd_then + 0.015) {
		//after finishing
		//first_draw = false;
		//block_mouse_interactions = false;

		ftd_e.clientX = Math.random() * canvas.width;
		ftd_e.clientY = Math.random() * canvas.height;
		spawn_quad(ftd_e);

		if(counter < hmdquads) { 
			counter++; 
			fadecounter++; 
		}
		else { 
			animate_palette_height = true;
			reload_counter = true; 
			clicking = false;

			first_draw = false; 
			block_mouse_interactions = false;
		}
		ftd_then = now;
	}
}
var first_draw = true;
function draw_header_webgl_experiment(now, deltatime) {
	/*****  This function controls everything related  *****/
	/*****  to what the experiment draws on screen     *****/

	if(reload_counter) 
    	reload_counter_func(deltatime);

	if(first_draw)
    	first_texture_draw(now, deltatime);

    if(animate_palette_height) 
    	animate_palette_translation(deltatime);


	blit_bkg_texture_in_quads_fbo(deltatime);
    draw_quads(deltatime);
    blit_in_main_framebuffer(deltatime);
    draw_gui(deltatime);
}
// *******  WATERCOLOR DRAWING ROUTINES - END *******









/****** Starting Anim program creation and drawcalls ******/
var FBOoffscreen;
var analyser;
var dataArray;
var dsa_song_ready = false;
var biquadFilter;
function dsa_init_download_song() {
	// Create the audio context
    var audioContext = new (window.AudioContext || window.webkitAudioContext)();
 	var request = new XMLHttpRequest();
 
	request.open('GET', 'Astral_Sea_-_Rocket_Men.mp3', true);
	request.responseType = 'arraybuffer';
	request.addEventListener("progress", function(evt){
        if (evt.lengthComputable) {
            dsa_downloading_t = evt.loaded / evt.total;
        } else {
            //uncomputable
        }
    });

	request.onload = function () {
	    audioContext.decodeAudioData(request.response, function (buffer) {
        	//criamo l'audiobuffersourceNode - na sorta di player dove mettere canzoni
        	var sourceBuffer = audioContext.createBufferSource();
            var gainNode = audioContext.createGain();
            analyser = audioContext.createAnalyser();


 	        sourceBuffer.loop = true;
        	// Tell the AudioBufferSourceNode to use this AudioBuffer.
        	sourceBuffer.buffer = buffer;
           

            gainNode.gain.value = 0.001;
            gainNode.gain.linearRampToValueAtTime(gainNode.gain.value, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + 6);


            biquadFilter = audioContext.createBiquadFilter();
            biquadFilter.type = "lowpass";
			biquadFilter.frequency.value = 20000;


            analyser.fftSize = 512;
            bufferLength = analyser.frequencyBinCount;
            dataArray = new Uint8Array(bufferLength);
            analyser.getByteTimeDomainData(dataArray);



            sourceBuffer.connect(biquadFilter);
            biquadFilter.connect(gainNode);
            gainNode.connect(analyser);
            analyser.connect(audioContext.destination);

        	sourceBuffer.start(audioContext.currentTime);
        	dsa_song_ready = true;
        	dsa_content_ready = 0.001;

        	setTimeout( function() { 
        		document.getElementsByClassName("scrolldown_animation")[0].classList.toggle("toggleOpacity");
        		window.can_scroll_down = true;

        		document.getElementById("container").style.overflowY = "scroll";
        	}, 500);
    	});
	};
	 
	request.send();
}
//this renderbuffer provides DEPTH ONLY - change to include stencilBuffer
function createOffscreenFBO() {
	var FBO = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, FBO);

    FBO.texture = gl.createTexture();

    gl.bindTexture(gl.TEXTURE_2D, FBO.texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    //gl.generateMipmap(gl.TEXTURE_2D);

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, canvas.width, canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

    var renderbuffer = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, canvas.width, canvas.height);

    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer);

    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, FBO.texture, 0);
    
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    FBOoffscreen = FBO;
}
var blitQuadBuffer;		//6 vertices which forms a screen quad

var StartingAnimProgram;
var StartingAnimBuffer;
var StartingAnimTessellation = 65;
function create_starting_anim_program() {
	StartingAnimProgram    = getShader("savert", "safrag", false);
    StartingAnimProgram.a1 = gl.getAttribLocation(StartingAnimProgram, "pos");
    StartingAnimProgram.a2 = gl.getAttribLocation(StartingAnimProgram, "upSpeed");
    //Program.a2 = gl.getAttribLocation(Program, "normal");
    StartingAnimProgram.pvm = gl.getUniformLocation(StartingAnimProgram, "pvm");

    StartingAnimProgram.rotator  = gl.getUniformLocation(StartingAnimProgram, "rotator");
    StartingAnimProgram.hTessellation  = gl.getUniformLocation(StartingAnimProgram, "hTessellation");
    StartingAnimProgram.randomizer     = gl.getUniformLocation(StartingAnimProgram, "randomizer");

    var vertices = [];
    var upspeeds = [];

    var sat = StartingAnimTessellation;
    for(var i = 0; i < sat * sat; i++)
    	upspeeds.push(Math.random());

    var htessellation = sat / 2;

    for(var i = sat - 1; i >= 0; i--)
    {
    	for(var j = 0; j < sat; j++)
    	{
    		var px  = j - htessellation;
    		var py  = 0;
    		var pz  = -20 - i;
    		var us  = upspeeds[(sat - i - 1) * sat + j];

    		var px2 = (j + 1) - htessellation;
    		var py2 = 0;
    		var pz2 = -20 - i;
    		var us2 = upspeeds[(sat - i - 1) * sat + (j + 1)];


    		var tx  = j - htessellation;
    		var ty  = 0;
    		var tz  = -20 - i;
    		var ts  = upspeeds[(sat - i - 1) * sat + j];

    		var tx2 = j - htessellation;
    		var ty2 = 0;
    		var tz2 = -20 - (i - 1);
    		var ts2 = upspeeds[(sat - i) * sat + j];

    		if(i == 0)
    		{
    			vertices.push(px, py, pz, us, px2, py2, pz2, us2);
    			continue;
    		}

    		if(j == sat - 1)
    		{
    			vertices.push(tx, ty, tz, ts, tx2, ty2, tz2, ts2);
    			continue;
    		}




    		//l'originale sarebbe
    		//vertices.push(px, py, pz, us, px2, py2, pz2, us2,
    		//	     		tx, ty, tz, ts, tx2, ty2, tz2, ts2);
			//senza if

    		if(i < 30)
    			vertices.push(px, py, pz, us, px2, py2, pz2, us2,
    					  tx * 1.0, ty + 2.0, tz, ts, tx2, ty2, tz2, ts2);
    		else
    			vertices.push(px, py, pz, us, px2, py2, pz2, us2);//,0,0,0,0,0,0,0,0);
    	}
    }

    StartingAnimBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, StartingAnimBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
}
var LionProgram;
var LionBuffer;
var LionVertices;
var LionFBO;
var LionFBOtexture;
var blitLionProgram;
function create_lion_program() {
	LionProgram    = getShader("lionvert", "lionfrag", false);
    LionProgram.a1 = gl.getAttribLocation(LionProgram, "pos");
    LionProgram.a2 = gl.getAttribLocation(LionProgram, "coord");
    LionProgram.a3 = gl.getAttribLocation(LionProgram, "translrot");

    LionProgram.projection = gl.getUniformLocation(LionProgram, "projection");
    LionProgram.model = gl.getUniformLocation(LionProgram, "model");
    LionProgram.view = gl.getUniformLocation(LionProgram, "view");

    LionProgram.time  = gl.getUniformLocation(LionProgram, "time");

    var toffset = 0.20019; //410 pxls offset for each bodypart quad
   
    var top     = toffset;
	var l1      = toffset * 1;    
	var l2      = toffset * 2;    
	var l3      = toffset * 3;    
	var l4      = toffset * 4;    

	var totalVertices = [];
	var propPerVertex = 10;
	var floatsPerQuad = propPerVertex * 6;

	var arm2_vertices = [
    	-2.4, -0,   -7, l4,0,       4,-0.2,-0.45,0,0,
    	-2.4, +2.4, -7, l4,top,   4,-0.2,-0.45,0,0,
    	+0, -0,     -7, 1,0,          4,-0.2,-0.45,0,0,

    	+0, -0,     -7, 1,0,          4,-0.2,-0.45,0,0,
    	-2.4, +2.4, -7, l4,top,   4,-0.2,-0.45,0,0,
    	+0, +2.4,   -7, 1,top,      4,-0.2,-0.45,0,0
    ];

    for(var i = 0; i < floatsPerQuad; i++)
    	totalVertices.push(arm2_vertices[i]);

	var leg_vertices = [
    	-2.2, -2.2, -7, l3,0,   3,	0.75,-0.97,0,0,
    	-2.2, +0,   -7, l3,top,   3,	0.75,-0.97,0,0,
    	+0, -2.2,   -7, l4,0,     3,	0.75,-0.97,0,0,
	
    	+0, -2.2,   -7, l4,0,     3,	0.75,-0.97,0,0,
    	-2.2, +0,   -7, l3,top,   3,	0.75,-0.97,0,0,
    	+0, +0,     -7, l4,top,     3,	0.75,-0.97,0,0
    ];

    for(var i = 0; i < floatsPerQuad; i++)
    	totalVertices.push(leg_vertices[i]);

	var torso_vertices = [
    	-1.5, -1.5, -7, l2,0,   2,   0.85,-1,0,0,
    	-1.5, +1.5, -7, l2,top, 2,   0.85,-1,0,0,
    	+1.5, -1.5, -7, l3,0,   2,   0.85,-1,0,0,
   
    	+1.5, -1.5, -7, l3,0,   2,   0.85,-1,0,0,
    	-1.5, +1.5, -7, l2,top, 2,   0.85,-1,0,0,
    	+1.5, +1.5, -7, l3,top, 2,   0.85,-1,0,0
    ];

    for(var i = 0; i < floatsPerQuad; i++)
    	totalVertices.push(torso_vertices[i]);

	var arm1_vertices = [
    	-2.4, -2.4, -7, l1,0,     1,0,-0.3,0,0,
    	-2.4, +0,   -7, l1,top,     1,0,-0.3,0,0,
    	+0, -2.4,   -7, l2,0,       1,0,-0.3,0,0,

    	+0, -2.4,   -7, l2,0,       1,0,-0.3,0,0,
    	-2.4, +0,   -7, l1,top,     1,0,-0.3,0,0,
    	+0, +0,     -7, l2,top,       1,0,-0.3,0,0
    ];

    for(var i = 0; i < floatsPerQuad; i++)
    	totalVertices.push(arm1_vertices[i]);

    var head_vertices = [
    	-1.25, -1.25, -7, 0,0,      0, 0,0.4,0,0,
    	-1.25, +1.25, -7, 0,top,    0, 0,0.4,0,0,
    	+1.25, -1.25, -7, l1,0,     0, 0,0.4,0,0,
 
    	+1.25, -1.25, -7, l1,0,     0, 0,0.4,0,0,
    	-1.25, +1.25, -7, 0,top,    0, 0,0.4,0,0,
    	+1.25, +1.25, -7, l1,top,   0, 0,0.4,0,0
    ];

    for(var i = 0; i < floatsPerQuad; i++)
    	totalVertices.push(head_vertices[i]);


    
    //scaling routine, we iterate each quad
    var scaleFactor = 0.9;
    for(var i = 0; i < totalVertices.length; i += floatsPerQuad) {
    	for(var j = 0; j < floatsPerQuad; j += propPerVertex) {
    		totalVertices[i + j] *= scaleFactor;
    		totalVertices[i + j + 1] *= scaleFactor;

    		totalVertices[i + j + 6] *= scaleFactor;
    		totalVertices[i + j + 7] *= scaleFactor;
    	}
    }

    //translation routine
    var x = -3;
    var y = 0;
    for(var i = 0; i < totalVertices.length; i += floatsPerQuad) {
    	for(var j = 0; j < floatsPerQuad; j += propPerVertex) {
			totalVertices[i + j + 2] = -7;
    		totalVertices[i + j + 6] += x;
    		totalVertices[i + j + 7] += y;
    	}
    }









    var second_index = totalVertices.length;
    var Rarm2_vertices = [
    	+0, -0, -7.5,   1,0,       4,  0.2, -0.45,0,0,
    	+0, +2.4, -7.5, 1,top,     4,  0.2, -0.45,0,0,
    	+2.4, -0, -7.5,     l4,0,  4,  0.2, -0.45,0,0,

    	+2.4, -0, -7.5,     l4,0,  4,  0.2, -0.45,0,0,
    	+0, +2.4, -7.5, 1,top,     4,  0.2, -0.45,0,0,
    	+2.4, +2.4, -7.5,   l4,top,4,  0.2, -0.45,0,0
    ];

    for(var i = 0; i < floatsPerQuad; i++)
    	totalVertices.push(Rarm2_vertices[i]);

	var Rleg_vertices = [
    	+0, -2.2, -7.5, l4,0,   3,	    -0.7,-0.87,0,0,
    	+0, +0, -7.5,   l4,top,   3,	    -0.7,-0.87,0,0,
    	+2.2, -2.2, -7.5,   l3,0,     3,	-0.7,-0.87,0,0,
	
    	+2.2, -2.2, -7.5,   l3,0,     3,	-0.7,-0.87,0,0,
    	+0, +0, -7.5,   l4,top,   3,	    -0.7,-0.87,0,0,
    	+2.2, +0, -7.5,     l3,top,   3, -0.7,-0.87,0,0
    ];

    for(var i = 0; i < floatsPerQuad; i++)
    	totalVertices.push(Rleg_vertices[i]);

	var Rtorso_vertices = [
    	-1.5, -1.5, -7.5, l3,0,   2,   -0.8,-1.0,0,0,
    	-1.5, +1.5, -7.5, l3,top, 2,   -0.8,-1.0,0,0,
    	+1.5, -1.5, -7.5, l2,0,   2,   -0.8,-1.0,0,0,
   
    	+1.5, -1.5, -7.5, l2,0,   2,   -0.8,-1.0,0,0,
    	-1.5, +1.5, -7.5, l3,top, 2,   -0.8,-1.0,0,0,
    	+1.5, +1.5, -7.5, l2,top, 2,   -0.8,-1.0,0,0
    ];

    for(var i = 0; i < floatsPerQuad; i++)
    	totalVertices.push(Rtorso_vertices[i]);

	var Rarm1_vertices = [
    	+0, -2.4, -7.5, l2,0,       1, 0,-0.4,0,0,
    	+0, +0, -7.5,   l2,top,     1, 0,-0.4,0,0,
    	+2.4, -2.4, -7.5,   l1,0,   1, 0,-0.4,0,0,

    	+2.4, -2.4, -7.5,   l1,0,   1, 0,-0.4,0,0,
    	+0, +0, -7.5,   l2,top,     1, 0,-0.4,0,0,
    	+2.4, +0, -7.5,     l1,top, 1, 0,-0.4,0,0
    ];

    for(var i = 0; i < floatsPerQuad; i++)
    	totalVertices.push(Rarm1_vertices[i]);

    var Rhead_vertices = [
    	-1.25, -1.25, -7.5, l1,0,      0, 0,0.4,0,0,
    	-1.25, +1.25, -7.5, l1,top,    0, 0,0.4,0,0,
    	+1.25, -1.25, -7.5, 0,0,     0, 0,0.4,0,0,
 
    	+1.25, -1.25, -7.5, 0,0,     0, 0,0.4,0,0,
    	-1.25, +1.25, -7.5, l1,top,    0, 0,0.4,0,0,
    	+1.25, +1.25, -7.5, 0,top,   0, 0,0.4,0,0
    ];

    for(var i = 0; i < floatsPerQuad; i++)
    	totalVertices.push(Rhead_vertices[i]);


    //scaling routine, we iterate each quad
    for(var i = second_index; i < second_index * 2; i += floatsPerQuad) {
    	for(var j = 0; j < floatsPerQuad; j += propPerVertex) {
    		totalVertices[i + j] *= scaleFactor;
    		totalVertices[i + j + 1] *= scaleFactor;

    		totalVertices[i + j + 6] *= scaleFactor;
    		totalVertices[i + j + 7] *= scaleFactor;
    	}
    }

    //translation routine
    x = 3;
    for(var i = second_index; i < second_index * 2; i += floatsPerQuad) {
    	for(var j = 0; j < floatsPerQuad; j += propPerVertex) {
    		totalVertices[i + j + 2] = -7;
    		totalVertices[i + j + 6] += x;
    		totalVertices[i + j + 7] += y;
    	}
    }






    LionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, LionBuffer);
    LionVertices = new Float32Array(totalVertices);
    gl.bufferData(gl.ARRAY_BUFFER, LionVertices, gl.STATIC_DRAW);





    /***** LION FBO CREATION *****/
    LionFBO = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, LionFBO);

    LionFBOtexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, LionFBOtexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, canvas.width, canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, LionFBOtexture, 0);
    
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    /***** LION FBO CREATION - END *****/








    /***** BLIT LIONS PROGRAM *****/
	blitLionProgram    = getShader("blitlionvert", "blitlionfrag", false);
    blitLionProgram.a1 = gl.getAttribLocation(blitLionProgram, "pos");
    blitLionProgram.a2 = gl.getAttribLocation(blitLionProgram, "coord");

    blitLionProgram.texture = gl.getUniformLocation(blitLionProgram, "texture");

    var quad_vertices = [
		-1.0, -1.0, 	0.0, 0.0,
		-1.0, +1.0, 	0.0, 1.0,
		+1.0, -1.0, 	1.0, 0.0,
	
		+1.0, -1.0, 	1.0, 0.0,
		-1.0, +1.0, 	0.0, 1.0,
		+1.0, +1.0, 	1.0, 1.0	
	];

	blitQuadBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, blitQuadBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(quad_vertices), gl.STATIC_DRAW);
    /***** BLIT LIONS PROGRAM - END *****/
}
var LoadCircleProgram;
var LoadCircleTessellation = 100;
//load circle svn = small vertex num
var lc_svn, lc_bvn, lc_cvn, lc_dcvn;
//ribbon vertex offset
var lc_ro;
var LoadRibbonVertNum	   = 0;
var animate2dProgram;
var bigCircleBuffer;
var bigDownloadCircleBuffer;
function create_2d_general_anim_program() {
	lc_svn     = LoadCircleTessellation * 3;
	lc_bvn     = LoadCircleTessellation * 12;
	//download big circle
	lc_dbcvn   = LoadCircleTessellation * 12;
	lc_cvn     = LoadCircleTessellation * 3;
	//download circle vertex num
	lc_dcvn    = LoadCircleTessellation * 3;
	lc_ro      = lc_svn + lc_bvn + lc_cvn + lc_dcvn + lc_dbcvn;

 	var Program = getShader("2dgeneralanimvert", "2dgeneralanimfrag", false);
 	Program.a1 = gl.getAttribLocation(Program, "pos");
 	Program.a2 = gl.getAttribLocation(Program, "color");
 	Program.a3 = gl.getAttribLocation(Program, "coord");

 	Program.projection = gl.getUniformLocation(Program, "projection");
 	Program.model = gl.getUniformLocation(Program, "model");
 	Program.view = gl.getUniformLocation(Program, "view");
 	//Program.pvm = gl.getUniformLocation(Program, "pvm");

 	Program.smallcircle = gl.getUniformLocation(Program, "transform[0]");
 	Program.bigcircle   = gl.getUniformLocation(Program, "transform[1]");
 	Program.ribbon 		= gl.getUniformLocation(Program, "transform[2]");
 	Program.centralcircle = gl.getUniformLocation(Program, "transform[3]");
 	Program.downloadcircle = gl.getUniformLocation(Program, "transform[4]");
 	Program.downloadbigcircle = gl.getUniformLocation(Program, "transform[5]");


 	var outer_vertices = [];
 	var inner_vertices = [];
 	var little_vertices = [];
 	for(var i = 0; i < (LoadCircleTessellation * 2) + 1; i++) {
 		var angle = ((Math.PI * 2) / (LoadCircleTessellation * 2)) * i + 3.14 / 2.0;

 		var langle = ((Math.PI * 2) / (LoadCircleTessellation)) * i + 3.14 / 2.0;

 		var ox = Math.cos(angle) * 2.0;
 		var oy = Math.sin(angle) * 2.0;
 		var ix = Math.cos(angle) * 1.4;
 		var iy = Math.sin(angle) * 1.4;

 		var oxx = Math.cos(langle) * 2.0;
 		var oyy = Math.sin(langle) * 2.0;
 		var ixx = Math.cos(langle) * 1.4;
 		var iyy = Math.sin(langle) * 1.4;

 		var lx = Math.cos(langle) * 0.65;
 		var ly = Math.sin(langle) * 0.65;

 		outer_vertices.push(  { x: ox, y: oy, xx:oxx, yy:oyy} );
 		inner_vertices.push(  { x: ix, y: iy, xx:ixx, yy:iyy} );
 		little_vertices.push( { x: lx, y: ly} );
 	}

 	var vertices = [];
 	//smallcircle
 	for(var i = 0; i < LoadCircleTessellation; i++) {
 		//i dictates which quad are we tessellating
 		var l1, l2;	//vertices
 		l1 = little_vertices[i];
 		l2 = little_vertices[i+1];

 		vertices.push(
 			l1.x, l1.y, -5.9, 0, 0.2, 0.2, 0.2, 0.2, 0, 0, 0,
 			l2.x, l2.y, -5.9, 0, 0.2, 0.2, 0.2, 0.2, 0, 0, 0,
 			0.0, 0.0,   -5.9, 0, 0.2, 0.2, 0.2, 0.2, 0, 0, 0
 		);
 	}
 	//bigcircle
 	for(var i = 0; i < LoadCircleTessellation * 2; i++) {
 		//i dictates which quad are we tessellating
 		var o1, o2, i1, i2;	//vertices
 		o1 = outer_vertices[i];
 		o2 = outer_vertices[i+1];
 		i1 = inner_vertices[i];
 		i2 = inner_vertices[i+1];

 		var alpha = 0.9;
 		var cutoff = 0.0;
 		var t = (LoadCircleTessellation * 2) - 6;
 		if(i < 6) {
 			alpha = 0.0;
 			if(i > 1) alpha = (i - 1) / 4 * 0.9;
 		}
 		if(i > t) {
 			alpha = 0.0;
 			if(i < t+4) {
 				alpha = (1.0 - ((i - t) / 4)) * 0.9
 			}
 		}

 		vertices.push(
 			o1.x, o1.y, -6, 1,   0.65, 0.65, 0.65, alpha + cutoff,   i, 0, 0,
 			o2.x, o2.y, -6, 1,   0.65, 0.65, 0.65, alpha,   		 i, 0, 0,
 			i1.x, i1.y, -6, 1,   0.65, 0.65, 0.65, alpha + cutoff,   i, 0, 0,

 			i1.x, i1.y, -6, 1,   0.65, 0.65, 0.65, alpha + cutoff,   i, 0, 0,
 			o2.x, o2.y, -6, 1,   0.65, 0.65, 0.65, alpha,   		 i, 0, 0,
 			i2.x, i2.y, -6, 1,   0.65, 0.65, 0.65, alpha,   		 i, 0, 0
 		);
 	}

 	bigCircleBuffer = new Float32Array(LoadCircleTessellation * 2 * 66);
 	var r = 33 * LoadCircleTessellation;
 	for(var i = 0, l = bigCircleBuffer.length; i < l; i++) {
 		bigCircleBuffer[i] = vertices[i + r];
 	}

	//centralcircle
 	for(var i = 0; i < LoadCircleTessellation; i++) {
 		//i dictates which quad are we tessellating
 		var i1, i2;	//vertices
 		i1 = inner_vertices[i];
 		i2 = inner_vertices[i+1];

 		vertices.push(
 			i1.xx*1.1, i1.yy*1.1, -6.1, 3, 0.2, 0.2, 0.2, 0.8, 0, 0, 0,
 			i2.xx*1.1, i2.yy*1.1, -6.1, 3, 0.2, 0.2, 0.2, 0.8, 0, 0, 0,
 			0.0, 0.0,           -6.1, 3, 0.2, 0.2, 0.2, 0.8, 0, 0, 0
 		);
 	}

 	//downloadcircle
 	for(var i = 0; i < LoadCircleTessellation; i++) {
 		var i1, i2;	//vertices
 		i1 = inner_vertices[i];
 		i2 = inner_vertices[i+1];

 		vertices.push(
 			i1.xx*0.2, i1.yy*0.2, -5.8, 4, 0.1, 0.1, 0.1, 0.9, 0, 0, 0,
 			i2.xx*0.2, i2.yy*0.2, -5.8, 4, 0.1, 0.1, 0.1, 0.9, 0, 0, 0,
 			0.0, 0.0,           -5.8, 4, 0.1, 0.1, 0.1, 0.9, 0, 0, 0
 		);
 	}

 	//download BIG circle
 	for(var i = 0; i < LoadCircleTessellation * 2; i++) {
 		//i dictates which quad are we tessellating
 		var o1, o2, i1, i2;	//vertices
 		o1 = outer_vertices[i];
 		o2 = outer_vertices[i+1];
 		i1 = inner_vertices[i];
 		i2 = inner_vertices[i+1];

 		var alpha = 1.0;
 		var cutoff = 0.0;

		if(i < 12 || i > (LoadCircleTessellation * 2) - 13) alpha = 0.0;

 		var o = 0.85;
 		var t = 1.15;

 		vertices.push(
 			o1.x * o, o1.y * o, -5.87, 5,   0.15, 0.15, 0.15, alpha,   i, 0, 0,
 			o2.x * o, o2.y * o, -5.87, 5,   0.15, 0.15, 0.15, alpha,   i, 0, 0,
 			i1.x * t, i1.y * t, -5.87, 5,   0.15, 0.15, 0.15, alpha,   i, 0, 0,

 			i1.x * t, i1.y * t, -5.87, 5,   0.15, 0.15, 0.15, alpha,   i, 0, 0,
 			o2.x * o, o2.y * o, -5.87, 5,   0.15, 0.15, 0.15, alpha,   i, 0, 0,
 			i2.x * t, i2.y * t, -5.87, 5,   0.15, 0.15, 0.15, alpha,   i, 0, 0
 		);
 	}

 	//lc_ro      = lc_svn + lc_bvn + lc_cvn + lc_dcvn + lc_dbcvn;
 	bigDownloadCircleBuffer = new Float32Array(lc_dbcvn * 11);
 	var dbcsi = (lc_svn + lc_bvn + lc_cvn + lc_dcvn) * 11;
 	for(var i = 0; i < bigDownloadCircleBuffer.length; i++) {
 		bigDownloadCircleBuffer[i] = vertices[dbcsi + i];
 	}






    var ribbon = [
    ];

    for(var i = 17; i < 135; i++) {
    	var angle = 3.0 + i / 50;
    	var m = i < 95 ? i / 95 : 1;
    	var multiplier = Math.cos(i / 5);
    	var z  = Math.sin(i / 5) * m;
    	var color = Math.sin(i / 5) * 0.5 + 0.5;
    	var x1 = Math.cos(angle) * (1.6 - multiplier * m);
    	var y1 = Math.sin(angle) * (1.6 - multiplier * m);

    	var ribbonlength = 0.4 + i / 140 * 0.3;
    	var x2 = x1 - Math.sin(angle) * ribbonlength;
    	var y2 = y1 + Math.cos(angle) * ribbonlength;

    	ribbon.push(x1, y1, -6 + z, 2, color,color,color, 1,    0, 0, 0);
    	ribbon.push(x2, y2, -6 + z, 2, color,color,color, 1,    0, 0, 0);
    }

    //last x1
    var lx1 = ribbon[ribbon.length - 1 - 21];
    var ly1 = ribbon[ribbon.length - 1 - 20];
    var lz1 = ribbon[ribbon.length - 1 - 19];

    var lx2 = ribbon[ribbon.length - 1 - 10];
    var ly2 = ribbon[ribbon.length - 1 - 9];
    var lz2 = ribbon[ribbon.length - 1 - 8];

    var lzm = (lz1 + lz2) / 2.0;

    var angle  = 3.14 + 2.45  / 2;
    var anglee = 3.14 + 2.32  / 2;
    var angleX  = -Math.cos(angle);
    var angleY  = -Math.sin(angle);

    var angleeX = -Math.cos(anglee);
    var angleeY = -Math.sin(anglee);

    var aperture1  = 3.3;
    var aperture2  = 4.9;
    var z = 0.952;
    for(var i = 0; i < 15; i++) {
    	var color = 1.0 - Math.pow((i / 15), 3.0) * 0.15;
    	angle  += 1 / 15;
    	anglee += 1 / 25;
    	
    	var x2 = Math.cos(angle) * (aperture1) + angleX * aperture1;
    	var y2 = Math.sin(angle) * (aperture1) + angleY * aperture1;

    	var x1 = Math.cos(anglee) * aperture2 + angleeX * aperture2;
    	var y1 = Math.sin(anglee) * aperture2 + angleeY * aperture2;

    	x1 += lx1;
    	y1 += ly1;
    	x2 += lx2;
    	y2 += ly2;

    	var r = color, g = color, b = color;
    	var c = color;
    	
    	var textured = 0.0;
    	var yoff     = 0;
    	if(i <= 13) {
    		r = i / 13 * 0.34 + 0.003;
    		textured = 10;

    		if(i > 3) {
    			t = ((i - 3) / 10) * 0.008;
    			yoff = t;
    		}
    	}

    	if(i == 14) {
    		ribbon.push(x1, y1, lzm, 2,   c, c, c, 1,   color, 0.415  -yoff, 0);
    		ribbon.push(x2, y2, lzm, 2,   c, c, c, 1,   color, 0.465  +yoff, 0);
    	} else {
    		ribbon.push(x1, y1, lzm, 2,   c, c, c, 1,   r, 0.413  -yoff, 1);
    		ribbon.push(x2, y2, lzm, 2,   c, c, c, 1,   r, 0.467  +yoff, 1);
    	}
    }

    LoadRibbonVertNum = ribbon.length / 11;






    //small circle has vID == 0
    //large circle has vID == 1
    //ribbon has vID == 2
    //central circle has vID == 3
    //download circle has vID == 4
    //download BIG circle has vID == 5
    var totalVertices = vertices.concat(ribbon);

    Program.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(totalVertices), gl.DYNAMIC_DRAW);

    animate2dProgram = Program;
}
var GlyphsProgram;
var fxvertbuffer;
function createLettersProgram() {
	var Program = getShader("glyphsvert", "glyphsfrag", false);
 	Program.a1 = gl.getAttribLocation(Program, "pos");
 	Program.a2 = gl.getAttribLocation(Program, "coord");
 	Program.a3 = gl.getAttribLocation(Program, "fx");

 	Program.projection = gl.getUniformLocation(Program, "projection");
 	Program.model = gl.getUniformLocation(Program, "model");
 	Program.view = gl.getUniformLocation(Program, "view");
 	//Program.pvm = gl.getUniformLocation(Program, "pvm");

 	Program.texture = gl.getUniformLocation(Program, "texture");



 	var vertices = [];
 	var offset = 1 / 32;
 	var coord    = [
 		{s: 28 * offset, t: 1.0 - offset},		//L
 		{s: 31 * offset, t: 1.0 - offset * 2},	//o
 		{s: 17 * offset, t: 1.0 - offset * 2},	//a
 		{s: 20 * offset, t: 1.0 - offset * 2},	//d
 		{s: 25 * offset, t: 1.0 - offset * 2},	//i
 		{s: 30 * offset, t: 1.0 - offset * 2},	//n
 		{s: 23 * offset, t: 1.0 - offset * 2},	//g


 		{s: 2 * offset,  t: 1.0 - offset * 2},	//R
 		{s: 21 * offset, t: 1.0 - offset * 2},	//e
 		{s: 17 * offset, t: 1.0 - offset * 2},	//a
 		{s: 20 * offset, t: 1.0 - offset * 2},	//d
 		{s: 9 * offset,  t: 1.0 - offset * 3},	//y
 		{s: 17 * offset,  t: 1.0 - offset * 3}	//!
 	];
 	for(var i = 0; i < 13; i++) {
 		var s = coord[i].s;
 		var t = coord[i].t;	//bottom left of the letter glyph
 		var scale = 0.32;
 		if(i == 0) scale = 0.42;
 		if(i == 7) scale = 0.42;

 		vertices.push(-1.0 * scale, -1.0 * scale, -5.7, 0, s, t);
 		vertices.push(-1.0 * scale, +1.0 * scale, -5.7, 0, s, t + offset);
 		vertices.push(+1.0 * scale, -1.0 * scale, -5.7, 0, s + offset, t);

 		vertices.push(+1.0 * scale, -1.0 * scale, -5.7, 0, s + offset, t);
 		vertices.push(-1.0 * scale, +1.0 * scale, -5.7, 0, s, t + offset);
 		vertices.push(+1.0 * scale, +1.0 * scale, -5.7, 0, s + offset, t + offset);
 	}


 	//we'll be using two buffers
 	var fxverts = []; 
 	for(var i = 0; i < 13; i++) {
 		var r = 0;
 		var y = 0;
 		if(i == 0) { r = -0.8; y = -0.04}
 		if(i == 1) r = -0.57;
 		if(i == 2) { r = -0.4; y = +0.02}
 		if(i == 3) r = -0.2;
 		if(i == 4) r = -0.05;
 		if(i == 5) r = +0.1;
 		if(i == 6) { r = +0.2; y = -0.05}

 		if(i == 7) { r = -0.8; y = -0.04}
 		if(i == 8) r = -0.57;
 		if(i == 9) { r = -0.4; y = +0.02}
 		if(i == 10) r = -0.2;
 		if(i == 11) r = -0.05;
 		if(i == 12) r = 0.075;

 		y += 1.1;
 		if(i > 6) r += 0.2;

 		fxverts.push(0,y, r * 1.0 - 0.1, 0);
 		fxverts.push(0,y, r * 1.0 - 0.1, 0);
 		fxverts.push(0,y, r * 1.0 - 0.1, 0);
 
 		fxverts.push(0,y, r * 1.0 - 0.1, 0);
 		fxverts.push(0,y, r * 1.0 - 0.1, 0);
 		fxverts.push(0,y, r * 1.0 - 0.1, 0);
 	}


 	Program.vbuffer = gl.createBuffer();
 	gl.bindBuffer(gl.ARRAY_BUFFER, Program.vbuffer);
 	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

 	fxvertbuffer 	  = new Float32Array(fxverts);
 	fxvertbuffer.orig = new Float32Array(fxverts);
 	
 	Program.fxbuffer = gl.createBuffer();
 	gl.bindBuffer(gl.ARRAY_BUFFER, Program.fxbuffer);
 	gl.bufferData(gl.ARRAY_BUFFER, fxvertbuffer, gl.STATIC_DRAW);

 	GlyphsProgram = Program;
}
var PostProcessProgram;
function createPostProcessProgram() {
	var Program = getShader("postprocvert", "postprocfrag", false);
 	Program.a1 = gl.getAttribLocation(Program, "pos");
 	Program.a2 = gl.getAttribLocation(Program, "coord");
 	Program.a3 = gl.getAttribLocation(Program, "id");

 	Program.time    = gl.getUniformLocation(Program, "time");
 	Program.type    = gl.getUniformLocation(Program, "type");
 	Program.texture = gl.getUniformLocation(Program, "texture");

 	var vertices = [
		-1.0, -1.0, 0.0, 0.0, 0,
		-1.0, +1.0, 0.0, 1.0, 0,
		+1.0, -1.0, 1.0, 0.0, 0,
 
		+1.0, -1.0, 1.0, 0.0, 0,
		-1.0, +1.0, 0.0, 1.0, 0,
		+1.0, +1.0, 1.0, 1.0, 0
	];

 	Program.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    //assegnalo così puoi usare il nome che vuoi quando serve
    PostProcessProgram = Program;
}
//USE A GLOBAL COUNTER INSTEAD!!
var dsa_counter  = 0;
var dsa_counter_delta = 0;
var dsa_content_ready = 0;
var dsa_dl_song_started = false;
function draw_starting_anim(now, deltatime) {
	gl.bindFramebuffer(gl.FRAMEBUFFER, FBOoffscreen);

	if(!dsa_dl_song_started && dsa_counter > 6.9) {
		dsa_init_download_song();
		dsa_dl_song_started = true;
	}

	mat4.identity(model);
	mat4.identity(view);
    mat4.identity(pvm);


    if(camera.reach[3] != camera.radius) {
    	var distance = camera.reach[3] - camera.radius;
    	if(distance > 0.01) {
    		camera.radius += distance * deltatime * 5;
    	} else {
    		camera.radius = camera.reach[3];
    	}
    }
    if(camera.reach[0] != camera.look[0]) {
    	var distance = camera.reach[0] - camera.look[0];
    	if(distance > 0.01) {
    		camera.look[0] += distance * deltatime * 5;
    	} else {
    		camera.look[0] = camera.reach[0];
    	}
    }

    view = camera.getViewMatrix(deltatime, 0.3);
	projection = mat4.perspective(projection, zoom, canvas.width * 0.96 / canvas.height, 2.0, 500.0);


	gl.useProgram(StartingAnimProgram);
	gl.bindBuffer(gl.ARRAY_BUFFER, StartingAnimBuffer);

	gl.enableVertexAttribArray(StartingAnimProgram.a1);
	gl.enableVertexAttribArray(StartingAnimProgram.a2);
	gl.vertexAttribPointer(StartingAnimProgram.a1, 3, gl.FLOAT, false, step * 4, 0);
	gl.vertexAttribPointer(StartingAnimProgram.a2, 1, gl.FLOAT, false, step * 4, step * 3);

	
    mat4.multiply(pvm, pvm, projection);
    mat4.multiply(pvm, pvm, view);
    mat4.multiply(pvm, pvm, model);
	gl.uniformMatrix4fv(StartingAnimProgram.pvm, false, pvm);

	
	gl.uniform1f(StartingAnimProgram.hTessellation, StartingAnimTessellation / 2);


    var mod = now % 7;
    var offset = 1.8;
    if(mod < 2) {
        gl.uniform1f(StartingAnimProgram.randomizer, 0.0);
    }
    else if(mod < 3) {
        var t = (mod - 2);
        gl.uniform1f(StartingAnimProgram.randomizer, offset * t);
    }
    else if(mod < 6) {
        gl.uniform1f(StartingAnimProgram.randomizer, offset);
    }
    else {
        var t = 1.0 - (mod - 6);
        gl.uniform1f(StartingAnimProgram.randomizer, offset * t);
    }
    



	gl.enable(gl.DEPTH_TEST);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	//gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
	gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE);


	gl.enable(gl.BLEND);
	
	var t = dsa_counter - 2 < 0 ? 0 : dsa_counter - 2;
	gl.uniform1f(StartingAnimProgram.rotator, t);


	if(deltatime > 0.4)      {
		dsa_counter += 0.1;
		dsa_counter_delta = 0.1;
	}
	else if(deltatime > 0.0) { 
		dsa_counter += deltatime;
		dsa_counter_delta = deltatime;
	}

	//a ognuno va dato lo stesso counter
	for(var i = 0; i < 8; i++) {
		gl.clear(gl.DEPTH_BUFFER_BIT);
		
		camera.depth_of_field_transform_count = i;
	       
        mat4.identity(pvm);
        view = camera.getViewMatrix(deltatime, 0.3);

        mat4.multiply(pvm, pvm, projection);
        mat4.multiply(pvm, pvm, view);
        mat4.multiply(pvm, pvm, model);
        gl.uniformMatrix4fv(StartingAnimProgram.pvm, false, pvm);

        //eu cuntai 12mila, poi quant'ennu ennu
		gl.drawArrays(gl.LINES, 0, 12162);/*StartingAnimTessellation * 
								   StartingAnimTessellation * 4 - 
								   StartingAnimTessellation * 4);*/
	}
}
function draw_starting_anim_lion(now, deltatime) {
	if(dsa_counter < 3.0) return;

	//drawing lions in their greyscale FBO
	gl.bindFramebuffer(gl.FRAMEBUFFER, LionFBO);
	gl.useProgram(LionProgram);
	gl.bindBuffer(gl.ARRAY_BUFFER, LionBuffer);

	/***** animation routine *****/
	for(var i = 9; i < 60; i += 10)
		LionVertices[180 +  i] = Math.sin(now * 1.5) * 0.23;
	for(var i = 9; i < 60; i += 10)
		LionVertices[0 + i] = Math.sin(now * 1.7) * 0.09;
	for(var i = 9; i < 60; i += 10)
		LionVertices[120 + i] = Math.sin(now) * 0.08;
	for(var i = 9; i < 60; i += 10)
		LionVertices[60 + i] = Math.sin(now * 1.3) * 0.07;
	for(var i = 9; i < 60; i += 10)
		LionVertices[240 + i] = Math.sin(now * 1.3) * 0.07 + 0.2;

	var r = 300;
	for(var i = 9; i < 60; i += 10)
		LionVertices[r + 180 + i] = Math.sin(now * 1.5) * 0.08;
	for(var i = 9; i < 60; i += 10)
		LionVertices[r + 0 + i] = Math.sin(now * 2.7) * 0.15;
	for(var i = 9; i < 60; i += 10)
		LionVertices[r + 120 + i] = Math.sin(now) * 0.08;
	for(var i = 9; i < 60; i += 10)
		LionVertices[r + 60 + i] = Math.sin(now * 1.3) * 0.07;
	for(var i = 9; i < 60; i += 10)
		LionVertices[r + 240 + i] = Math.sin(now * 1.3) * 0.07 - 0.2;

	gl.bufferSubData(gl.ARRAY_BUFFER, 0, LionVertices);
	/***** animation routine - end *****/











	gl.clearColor(1.0, 1.0, 1.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.disable(gl.DEPTH_TEST);


	mat4.identity(model);
	mat4.identity(view);

	gl.enableVertexAttribArray(LionProgram.a1);
	gl.enableVertexAttribArray(LionProgram.a2);
	gl.enableVertexAttribArray(LionProgram.a3);

	gl.vertexAttribPointer(LionProgram.a1, 3, gl.FLOAT, false, step * 10, 0);
	gl.vertexAttribPointer(LionProgram.a2, 3, gl.FLOAT, false, step * 10, step * 3);
	gl.vertexAttribPointer(LionProgram.a3, 4, gl.FLOAT, false, step * 10, step * 6);

	gl.uniformMatrix4fv(LionProgram.projection, false, projection);
	gl.uniformMatrix4fv(LionProgram.model, false, model);
	gl.uniformMatrix4fv(LionProgram.view, false, camera.getViewMatrix(0.3, deltatime));

	gl.uniform1f(LionProgram.time, dsa_counter);

	//fix texture/program naming convention
	//fix texture/program naming convention
	//fix texture/program naming convention
	//fix texture/program naming convention
	//fix texture/program naming convention
	//fix texture/program naming convention
			gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, heraldryLion);
	gl.uniform1i(LionProgram.texture, 0);

	//DRAWS ONLY 60 VERTICES
	//DRAWS ONLY 60 VERTICES
	//DRAWS ONLY 60 VERTICES
	gl.drawArrays(gl.TRIANGLES, 0, 6 * 10);




	//blitting lions into main framebuffer
	gl.bindFramebuffer(gl.FRAMEBUFFER, FBOoffscreen);
	gl.useProgram(blitLionProgram);
	gl.bindBuffer(gl.ARRAY_BUFFER, blitQuadBuffer);
	gl.enableVertexAttribArray(blitLionProgram.a1);
	gl.enableVertexAttribArray(blitLionProgram.a2);


	gl.vertexAttribPointer(blitLionProgram.a1, 2, gl.FLOAT, false, step * 4, 0);
	gl.vertexAttribPointer(blitLionProgram.a2, 2, gl.FLOAT, false, step * 4, step * 2);


			gl.activeTexture(gl.TEXTURE0);
    	gl.bindTexture(gl.TEXTURE_2D, LionFBOtexture);
    gl.uniform1i(blitLionProgram.texture, 0);
	

	gl.drawArrays(gl.TRIANGLES, 0, 6);
}/*
function draw_starting_load_cicle(now, deltatime) {
	gl.useProgram(LoadCircleProgram);
	gl.enableVertexAttribArray(LoadCircleProgram.a1);
	gl.enableVertexAttribArray(LoadCircleProgram.a2);
	gl.enableVertexAttribArray(LoadCircleProgram.a3);


    gl.uniformMatrix4fv(LoadCircleProgram.projection, false, projection);
    gl.uniformMatrix4fv(LoadCircleProgram.model, false, model);
    gl.uniformMatrix4fv(LoadCircleProgram.view, false, camera.getViewMatrix(0.3, deltatime));
	

    gl.enable(gl.DEPTH_TEST);
    //needed to avoid collision with first line's z value
    gl.clear(gl.DEPTH_BUFFER_BIT);




    //se non faccio l'assegnazione, per qualche motivo chrome pensa che stia assegnando la texture dell'fbo al posto di heraldrylion e quindi "source and destination textures are the same" blablabla
    		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, heraldryLion);
	gl.uniform1i(LoadCircleProgram.texture, 0);
 
    //draw ribbon first (to avoid transparency issue)
    if(dsa_counter > 3.5) {
    	gl.bindBuffer(gl.ARRAY_BUFFER, LoadRibbonBuffer);
		gl.vertexAttribPointer(LoadCircleProgram.a1, 4, gl.FLOAT, false, step * 10, 0);
		gl.vertexAttribPointer(LoadCircleProgram.a2, 4, gl.FLOAT, false, step * 10, step * 4);
		gl.vertexAttribPointer(LoadCircleProgram.a3, 2, gl.FLOAT, false, step * 10, step * 8);
		gl.uniform1f(LoadCircleProgram.ribbon, 2.0);

		var rt;
		if(dsa_counter > 4.5) rt = 1;
		else rt = dsa_counter - 3.5;		

		rt = Math.floor(rt * LoadRibbonVertNum);

		gl.drawArrays(gl.TRIANGLE_STRIP, 0, rt);
	}





	//draw the rest
	gl.bindBuffer(gl.ARRAY_BUFFER, LoadCircleBuffer);
	gl.vertexAttribPointer(LoadCircleProgram.a1, 4, gl.FLOAT, false, step * 10, 0);
	gl.vertexAttribPointer(LoadCircleProgram.a2, 4, gl.FLOAT, false, step * 10, step * 4);
	gl.vertexAttribPointer(LoadCircleProgram.a3, 2, gl.FLOAT, false, step * 10, step * 8);


    var t = 0; 
    if(dsa_counter > 3.0) t = 2; //t is used for two animation, hence why the 2
    else
    {
    	//first circle anim
    	var tt = Math.pow(dsa_counter / 1.0, 2.0);
    	if(tt > 1.0) tt = 1.0;

    	var s = dsa_counter - 1.0 < 0 ? 0 : dsa_counter - 1.0; //starts 1 seconds after;
    	if(s > 0) {
    		t = Math.pow(s / 2, 2);
    		if(t > 1) t = 1;
    		else      t = t * t * (3 - 2 * t);
    	}

    	t += tt;
    }
    gl.uniform1f(LoadCircleProgram.time,   t);
    gl.uniform1f(LoadCircleProgram.ribbon, 0.0);


	gl.drawArrays(gl.TRIANGLES, 0, LoadCircleVertNum * 2);
}*/
var transform2d = mat4.create();
var dsa_downloading_song = true;
var dsa_downloading_t    = 0;
var dsa_downloading_dt	 = 0;
function draw_2d_general_anim(now, deltatime) {
	var Program = animate2dProgram;
	gl.useProgram(Program);
	gl.enableVertexAttribArray(Program.a1);
	gl.enableVertexAttribArray(Program.a2);
	gl.enableVertexAttribArray(Program.a3);


    gl.uniformMatrix4fv(Program.projection, false, projection);
    gl.uniformMatrix4fv(Program.model, false, model);
    gl.uniformMatrix4fv(Program.view, false, camera.getViewMatrix(0.3, deltatime));
	

    gl.enable(gl.DEPTH_TEST);
    //needed to avoid collision with first line's z value
    gl.clear(gl.DEPTH_BUFFER_BIT);


	

	gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
	gl.vertexAttribPointer(Program.a1, 4, gl.FLOAT, false, step * 11, 0);
	gl.vertexAttribPointer(Program.a2, 4, gl.FLOAT, false, step * 11, step * 4);
	gl.vertexAttribPointer(Program.a3, 3, gl.FLOAT, false, step * 11, step * 8);







	//big circle music animation
	if(dsa_song_ready) {
		//if(now % 0.01 > 0.005) 
			analyser.getByteFrequencyData(dataArray);
		
		var t = dsa_counter % 8.0;
		if(t < 2.0) 	 t = t / 2.0;
		else if(t < 4.0) t = 1;
		else if(t < 6.0) t = 1.0 - (t - 4) / 2;
		else t = 0;
		
		if(t > 0.2) t = 0.2;

		for(var i = 0; i < LoadCircleTessellation * 2; i++) {
			//data array index
			var dai = 0;
			var mult = 0;

			/*if(i < 61) { 
				dai = (60 - i) * 2;
				mult = 0.025 * (1.0 - i / 60);
			}
			if(i > 139) { 
				dai = ((200 - i) * 2) + 120;
				mult = 0.025 * ((i - 140) / 60);
			}
			//oppure = value(dataArray[dai] - 30) * mult
			var value = (dataArray[dai] - 128) * mult;*/
			

			/*if(i < 61) { 
				dai = Math.floor((60 - i) * 1.5);
				mult = 0.014 * (1.0 - i / 60);
			}
			if(i > 139) { 
				dai = Math.floor(((200 - i) * 1.5)) + 90;
				mult = 0.014 * ((i - 140) / 60);
			}
			var value = (dataArray[dai] - 70.0) * mult;*/

			/*if(i < 61) {
				if(i < 21) {
					//da 0 a 40
					dai = Math.floor((20 - i) * 2);
					mult = 0.010 * (1.0 - i / 60);
				}
				else {
					//da 0 a 80
					dai = Math.floor((i - 20) * 2);
					mult = 0.010 * (1.0 - i / 60);
				}
			}
			if(i > 139) {
				//da 60 a 180 
				dai = Math.floor(((200 - i) * 2)) + 40;
				mult = 0.014 * ((i - 140) / 60);
			}*/

			if(i < 81) {
				if(i < 31) {
					//da 0 a 60
					dai = Math.floor((30 - i) * 2);
					mult = 0.010 * (1.0 - i / 80);
				}
				else {
					//da 0 a 100
					dai = Math.floor((i - 30) * 2);
					mult = 0.010 * (1.0 - i / 80);
				}
			}
			if(i > 119) {
				//da 60 a 220 
				dai = Math.floor(((200 - i) * 1)) + 60;
				mult = 0.014 * ((i - 120) / 80);
			}
			var value = (dataArray[dai] - 75.0) * mult;







			if(value < 0) value = 0;

    		//which quad offset
    		var qo = 11 * 6 * i;
    	
    		/*bigCircleBuffer[qo +  9] = Math.sin(i*5 + now) * t;
    		bigCircleBuffer[qo + 20] = Math.sin(i*5 + now) * t;
    		bigCircleBuffer[qo + 31] = Math.sin(i*5 + now) * t;

    		bigCircleBuffer[qo + 42] = Math.sin(i*5 + now) * t;
    		bigCircleBuffer[qo + 53] = Math.sin(i*5 + now) * t;
    		bigCircleBuffer[qo + 64] = Math.sin(i*5 + now) * t;*/

    		bigCircleBuffer[qo +  9] = value;
    		bigCircleBuffer[qo + 20] = value;
    		bigCircleBuffer[qo + 31] = value;

    		bigCircleBuffer[qo + 42] = value;
    		bigCircleBuffer[qo + 53] = value;
    		bigCircleBuffer[qo + 64] = value;



    		bigDownloadCircleBuffer[qo +  9] = value;
    		bigDownloadCircleBuffer[qo + 20] = value;
    		bigDownloadCircleBuffer[qo + 31] = value;

    		bigDownloadCircleBuffer[qo + 42] = value;
    		bigDownloadCircleBuffer[qo + 53] = value;
    		bigDownloadCircleBuffer[qo + 64] = value;
   	 	}

   	 	gl.bufferSubData(gl.ARRAY_BUFFER, 33 * LoadCircleTessellation * 4, bigCircleBuffer);

   	 	gl.bufferSubData(gl.ARRAY_BUFFER, 92400, bigDownloadCircleBuffer);
	}
	//big circle music animation - END







			gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, heraldryLion);
	gl.uniform1i(Program.texture, 0);






    //draw ribbon first (to avoid transparency issue)
    mat4.identity(transform2d);
    if(dsa_counter > 3.5) {
	    mat4.identity(transform2d);
		var rt;
		if(dsa_counter > 4.5) rt = 1;
		else rt = dsa_counter - 3.5;		

		rt = Math.floor(rt * LoadRibbonVertNum);
		transform2d[3] = 1.0;
		gl.uniformMatrix4fv(Program.ribbon, false, transform2d);
		gl.drawArrays(gl.TRIANGLE_STRIP, lc_ro, rt);
	}









    //animate small circle
    mat4.identity(transform2d);
    if(dsa_counter < 1.0) {
    	mpb[0] = 0; mpb[1] = +1.75; mpb[2] = 0;
    	mat4.translate(transform2d, transform2d, mpb);

    	mpb[0] = 13.0 * (1.0 - dsa_counter) + 1.0;
    	mpb[1] = 13.0 * (1.0 - dsa_counter) + 1.0;
    	mpb[2] = 1.0;
    	mat4.scale(transform2d, transform2d, mpb); //????????
		transform2d[3] = Math.pow(dsa_counter, 2.5);
	} else if(dsa_counter < 3.5 && dsa_counter > 1.5) {
		var t = (dsa_counter - 1.5) / 2.0;
		t = t * t * (3 - 2 * t);
    	mat4.rotateZ(transform2d, transform2d, Math.PI * 2 * t);

		mpb[0] = 0; mpb[1] = +1.75; mpb[2] = 0;
    	mat4.translate(transform2d, transform2d, mpb);
		transform2d[3] = 1.0;
	} else {
		mpb[0] = 0; mpb[1] = +1.75; mpb[2] = 0;
    	mat4.translate(transform2d, transform2d, mpb);
    	transform2d[3] = 1.0;
	}

	gl.uniformMatrix4fv(Program.smallcircle, false, transform2d);
    //animate small circle - END






  	//animate big circle
    mat4.identity(transform2d);
    if(dsa_counter < 1.5) {
    	transform2d[3] = 0.0;
    } else if(dsa_counter < 3.5) {
    	var t = (dsa_counter - 1.5) / 2;
    	if(t > 1) t = 1;
    	else      t = t * t * (3 - 2 * t);

    	transform2d[7] = LoadCircleTessellation * 2;
    	transform2d[3] = t;
    } else {
    	transform2d[7] = LoadCircleTessellation * 2;
    	transform2d[3] = dsa_counter;
    }
    gl.uniformMatrix4fv(Program.bigcircle, false, transform2d);
  	//animate big circle - END









  	//animating centralcircle
  	mat4.identity(transform2d);

  	if(dsa_counter > 4.7) {
  		mpb[0] = 0; mpb[1] = -0.8; mpb[2] = 0;
  		mat4.translate(transform2d, transform2d, mpb);
  		transform2d[3] = 1.0;
  	}
  	else if(dsa_counter > 3.7) {
  		mpb[0] = 0;
  		mpb[1] = -10 * (1.0 - (dsa_counter - 3.7)) - 0.8; 
  		mpb[2] = 0;
  		mat4.translate(transform2d, transform2d, mpb);
  		transform2d[3] = 1.0;
  	}
  	else {
  		mpb[0] = 0; mpb[1] = -100; mpb[2] = 0;
  		mat4.translate(transform2d, transform2d, mpb);	
  		transform2d[3] = 1.0;
  	}
  	gl.uniformMatrix4fv(Program.centralcircle, false, transform2d);
  	//animating centralcircle - END






  	//animating downloadcircles
  	if(dsa_downloading_dt != 1) {
  		var distance = dsa_downloading_t - dsa_downloading_dt;
  		dsa_downloading_dt += distance * 3 * dsa_counter_delta;
  		if(dsa_downloading_dt > 0.999) dsa_downloading_t = 1.0;
  	}

  		//little downloadcircle
  	mat4.identity(transform2d);
  	if(dsa_counter < 5.25) {
  		transform2d[3] = 0.0;

  		if(dsa_counter > 4.75) {
  			mpb[0] = 0; mpb[1] = 1.7; mpb[2] = 0;
  			mat4.translate(transform2d, transform2d, mpb);
  			var t = dsa_counter - 4.75;
  			transform2d[3] = t * 2;
  		}
  	} else {
  		mpb[0] = 0; mpb[1] = 1.7; mpb[2] = Math.sin(dsa_counter * 5.0) * 0.08 + 0.08;
  		mat4.rotateZ(transform2d, transform2d, dsa_downloading_dt * Math.PI * 2);
  		mat4.translate(transform2d, transform2d, mpb);
  		transform2d[3] = 1.0;
  	}
  	gl.uniformMatrix4fv(Program.downloadcircle, false, transform2d);
  	
  		//BIG downloadcircle
  	mat4.identity(transform2d);
  	transform2d[7] = LoadCircleTessellation * 2;
  	transform2d[3] = dsa_downloading_dt;
  	gl.uniformMatrix4fv(Program.downloadbigcircle, false, transform2d);
  	//animating downloadcircles - END






	gl.drawArrays(gl.TRIANGLES, 0, lc_ro);
}
var dsa_rise = 0;
function draw_glyphs(now, deltatime) {
	gl.useProgram(GlyphsProgram);
	gl.bindBuffer(gl.ARRAY_BUFFER, GlyphsProgram.vbuffer);
	gl.enableVertexAttribArray(GlyphsProgram.a1);
	gl.enableVertexAttribArray(GlyphsProgram.a2);
	gl.vertexAttribPointer(GlyphsProgram.a1, 4, gl.FLOAT, false, step * 6, 0);
	gl.vertexAttribPointer(GlyphsProgram.a2, 2, gl.FLOAT, false, step * 6, step * 4);
	gl.bindBuffer(gl.ARRAY_BUFFER, GlyphsProgram.fxbuffer);
	gl.vertexAttribPointer(GlyphsProgram.a3, 4, gl.FLOAT, false, 0, 0);


	


	/**** animation routine ****/
	if(dsa_counter > 5.0) {

		//loading rising
		if(dsa_rise < 2.5)
		for(var i = 0; i < 7; i++) {
			var nqi = 4 * 6 * i;
			var rise = (dsa_counter - 5.0 - i / 10) * 1.5;
			dsa_rise = rise;

			if(rise > 1) rise = 1;
			if(rise < 0) rise = 0; 
			rise = smoothstep(rise);

			var t = Math.sin(now * 2 + i * 0.6) * 0.032;
			var a = 1.0 + Math.sin(now * 5 + i * 234) * 0.8;
			if(rise != 1) a = rise * a;

			for(var j = 0; j < 6; j++) {
				var nvi = j * 4;
	
				fxvertbuffer[nqi + nvi + 1] = 
						fxvertbuffer.orig[nqi + nvi + 1] * rise + 
						t;

				fxvertbuffer[nqi + nvi + 3] = a;
			}
		}
		else if(dsa_content_ready == 0) //loading already rose, not ready yet
		for(var i = 0; i < 7; i++) {
			var nqi = 4 * 6 * i;
	
			for(var j = 0; j < 6; j++) {
				var nvi = j * 4;
	
				fxvertbuffer[nqi + nvi + 1] = 
						fxvertbuffer.orig[nqi + nvi + 1] + 
						Math.sin(now * 2 + i * 0.6) * 0.032;

				fxvertbuffer[nqi + nvi + 3] = 
						1.0 + Math.sin(now * 5 + i * 234) * 0.8;
			}
		}		//putting loading aside
		else if((dsa_content_ready += dsa_counter_delta) < 0.5) {
			var rise = dsa_content_ready;
			var alpha = 1.0 - rise * 2.6;
			for(var i = 0; i < 7; i++) {
				var nqi = 4 * 6 * i;
		
				for(var j = 0; j < 6; j++) {
				var nvi = j * 4;
				fxvertbuffer[nqi + nvi + 1] += rise * 0.2;
				fxvertbuffer[nqi + nvi + 3] = 
					(1.0 + Math.sin(now * 5 + i * 234) * 0.8) * alpha;
				}
			}	
		}		//rising Ready
		else if((dsa_content_ready += dsa_counter_delta) < 3.0) {

			for(var i = 7; i < 13; i++) {
				var rise = (dsa_content_ready - 0.5 - (i - 7) / 6) * 1.5;
				if(rise > 1) rise = 1;
				if(rise < 0) rise = 0; 
				rise = smoothstep(rise);
	
				var t = Math.sin(now * 2 + i * 0.6) * 0.032;
				var a = 1.0 + Math.sin(now * 5 + i * 234) * 0.8;
				if(rise != 1) a = rise * a;
				var nqi = 4 * 6 * i;
		
				for(var j = 0; j < 6; j++) {
					var nvi = j * 4;
					fxvertbuffer[nqi + nvi + 1] = fxvertbuffer.orig[nqi + nvi + 1] * rise + t;
	
					fxvertbuffer[nqi + nvi + 3] = a;
				}
			}	
		}		//ready Rose
		else {
			for(var i = 7; i < 13; i++) {
				var a = 1.0 + Math.sin(now * 5 + i * 234) * 0.8;
				var nqi = 4 * 6 * i;
		
				for(var j = 0; j < 6; j++) {
					var nvi = j * 4;
	
					fxvertbuffer[nqi + nvi + 3] = a;
				}
			}	
		}
		gl.bufferSubData(gl.ARRAY_BUFFER, 0, fxvertbuffer);
	}
	/**** animation routine - END ****/





	gl.uniformMatrix4fv(GlyphsProgram.projection, false, projection);
	gl.uniformMatrix4fv(GlyphsProgram.model, false, model);
	gl.uniformMatrix4fv(GlyphsProgram.view, false, camera.getViewMatrix(0.3, deltatime));


	gl.disable(gl.DEPTH_TEST);

			gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, heraldryLion);
	gl.uniform1i(GlyphsProgram.texture, 0);


	gl.drawArrays(gl.TRIANGLES, 0, 13 * 6);
}
var dpp_t = 0;
var dpp_r = 0;
var dpp_rgb = 0;
var dpp_then = 0;
var dpp_type = 1;
var dpp_fadetoblack = false;
function draw_post_process(now, deltatime) {
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);

	gl.useProgram(PostProcessProgram);
	gl.enableVertexAttribArray(PostProcessProgram.a1);
	gl.enableVertexAttribArray(PostProcessProgram.a2);
	gl.enableVertexAttribArray(PostProcessProgram.a3);

    gl.bindBuffer(gl.ARRAY_BUFFER, PostProcessProgram.buffer);
	gl.vertexAttribPointer(PostProcessProgram.a1, 2, gl.FLOAT, false, step * 5, 0);
	gl.vertexAttribPointer(PostProcessProgram.a2, 2, gl.FLOAT, false, step * 5, step * 2);
	gl.vertexAttribPointer(PostProcessProgram.a3, 1, gl.FLOAT, false, step * 5, step * 4);


			gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, FBOoffscreen.texture);
	gl.uniform1i(PostProcessProgram.texture, 0);



	/*if(dsa_counter > 7.0) {
		var dpp_counter = dsa_counter - 6.0;
		if(dpp_counter % 28 <= 14) 	{ dpp_t = 0.0; dpp_fadetoblack = true;  }
		else 						{ dpp_t = 1.0; dpp_fadetoblack = false; }


		if(dpp_counter - dpp_then > Math.random() * 0.07) {
			dpp_then = dpp_counter;
			dpp_r = 43354.453 * Math.random();
		}
	
    	dpp_type = dpp_counter % 7.0 < 0.75 ? 5 : 1;
    	if(dpp_type == 5) { 
    		//noise distortion triggered
    		dpp_rgb = 0;

    		if(dpp_counter % 14.0 < 0.75)  {
    		//trigger also t change
    			dpp_t = (dpp_counter % 7.0) / 0.75 + Math.random() * 0.3 - 0.15; 
    			if(dpp_fadetoblack) dpp_t = 1.0 - dpp_t;
    		}
    	}
		else if(dpp_counter % 7.0 > 4.0) {
			//rgboffset increase triggered
			var tt = (dpp_counter % 7.0 - 4.0) / 3;
			var t = Math.pow(tt, 32.0);    
			dpp_rgb = t + tt * 0.11;
			dpp_rgb *= 0.06;
		}
	}*/

	if(dsa_counter > 7.0) {
		var dpp_counter = dsa_counter - 6.0;
		if(dpp_counter % 40 <= 20) 	{ dpp_t = 0.0; dpp_fadetoblack = true; }
		else 						{ dpp_t = 1.0; dpp_fadetoblack = false; }

		overlay_texture = (dpp_counter % 20.0) / 20.0;
		overlay_texture_trigger = 0;


		if(dpp_counter - dpp_then > Math.random() * 0.07) {
			dpp_then = dpp_counter;
			dpp_r = 43354.453 * Math.random();
		}
	
    	dpp_type = dpp_counter % 10.0 < 0.75 ? 5 : 1;
    	if(dpp_type == 5) { 
    		//noise distortion triggered
    		dpp_rgb = 0;

    		if(dpp_counter % 20.0 < 0.75)  {
    		//trigger also t change
    			dpp_t = (dpp_counter % 10.0) / 0.75 + Math.random() * 0.3 - 0.15; 
    			if(dpp_fadetoblack) dpp_t = 1.0 - dpp_t;
    			//overlay_texture = dpp_fadetoblack ? dpp_t : 1.0 - dpp_t;

    			overlay_texture_trigger = Math.random() * 0.5;
    		}
    	}
		else if(dpp_counter % 10.0 > 7.0) {
			//rgboffset increase triggered
			var tt = (dpp_counter % 10.0 - 7.0) / 3;
			var t = Math.pow(tt, 32.0);    
			overlay_texture_trigger = Math.pow(tt, 3.0);  
			dpp_rgb = t + tt * 0.11;
			dpp_rgb *= 0.06;
		}
	}


	gl.uniform3f(PostProcessProgram.time, dpp_t, dpp_r, dpp_rgb);
    gl.uniform1f(PostProcessProgram.type, dpp_type);

	gl.drawArrays(gl.TRIANGLES, 0, 6);
}

var overlay_texture = 0;
var overlay_texture_trigger = 0;
var lens_flares_matrices = [];
var forecanvas_counter = 0;
function draw_forecanvas(now, deltatime) {  
	if(!foreProgram.texture.loaded) return;

	foregl.disable(foregl.BLEND);
	foregl.clearColor(0.0, 0.0, 0.0, 0.0);
	foregl.clear(foregl.COLOR_BUFFER_BIT);

	foregl.useProgram(foreProgram);
	foregl.bindBuffer(foregl.ARRAY_BUFFER, foreProgram.buffer);
	foregl.enableVertexAttribArray(foreProgram.a1);
	foregl.vertexAttribPointer(foreProgram.a1, 4, foregl.FLOAT, false, 0, 0);


			foregl.activeTexture(foregl.TEXTURE0);
		foregl.bindTexture(foregl.TEXTURE_2D, foreProgram.texture);
	foregl.uniform1i(foreProgram.utexture, 0);





	/*** overlay texture anim routine ***/

    //trigger animation as soon as italyAnim finished and count everything from there on
    if(italyAnim && 
        italyAnim.finished) {
        if(forecanvas_counter == 0) {
            forecanvas_counter = 7.0;
        } else {
            forecanvas_counter += deltatime;
        }
    }


	//yscroll
	var mod = forecanvas_counter % 11.5;
	var t   = 0;
	if(mod < 7.5) { } 
	else if(mod < 8.5) {
		t = smoothstep(mod - 7.5) * 0.9;
	} else if(mod < 9.5) {
		t = 0.9 - smoothstep(mod - 8.5) * 0.4;
	} else if(mod < 10.5) {
		t = 0.5 + smoothstep(mod - 9.5) * 0.2;		
	} else if(mod < 11.5) {
		t = 0.7 - smoothstep(mod - 10.5) * 0.7;		
	}

	var tt = 0;
	tt = Math.sin(now) * 0.2 + 0.2 + 0.1 + overlay_texture_trigger * 0.5;

	if(!dpp_fadetoblack) {
		tt = Math.sin(now) * 0.2 + 0.4 + overlay_texture_trigger * 0.5;
	}

    var block1_shown = yscroll / window.innerHeight;
	var i = yscroll == 0 ? 0 : block1_shown;
	//interpolate between both
	var ibb = i * (t * 1.3) + (1.0 - i) * tt;


	overlay_texture = ibb;

    if(block_pos != 0)
        overlay_texture /= Math.abs(block_pos / 300) + 1;

	/*** overlay texture anim routine - END ***/








	foregl.uniform1f(foreProgram.time, overlay_texture);

	foregl.uniform1f(foreProgram.useAlpha, 0.0);
	foregl.drawArrays(foregl.TRIANGLES, 0, 6);



    /**** CAREFUL ON THIS INSTRUCTION, IT STOPS THE EXECUTION OF THE LENS FLARE ****/
    /**** CAREFUL ON THIS INSTRUCTION, IT STOPS THE EXECUTION OF THE LENS FLARE ****/
    /**** CAREFUL ON THIS INSTRUCTION, IT STOPS THE EXECUTION OF THE LENS FLARE ****/
    /**** CAREFUL ON THIS INSTRUCTION, IT STOPS THE EXECUTION OF THE LENS FLARE ****/
    if(Math.abs(block_pos) >= window.innerWidth) return;
    /**** CAREFUL ON THIS INSTRUCTION, IT STOPS THE EXECUTION OF THE LENS FLARE ****/
    /**** CAREFUL ON THIS INSTRUCTION, IT STOPS THE EXECUTION OF THE LENS FLARE ****/
    /**** CAREFUL ON THIS INSTRUCTION, IT STOPS THE EXECUTION OF THE LENS FLARE ****/
    /**** CAREFUL ON THIS INSTRUCTION, IT STOPS THE EXECUTION OF THE LENS FLARE ****/





    if(mod > 7.15 && mod < 11.15 && block1_shown > 0.95) {
	    //lens effect routine
        var t = (mod - 7.15) / 4;
        var opacity = 0.0;
        if(t <= 0.6) {
            opacity = Math.pow(t / 0.6, 2.0); 
            t = t / 0.67;
            t = Math.pow(t, 0.5) * 0.31;
        } else {
            t = (t - 0.6) / 0.4;
            opacity = Math.pow(1.0 - t, 2.0);
            if(dpp_fadetoblack) Math.pow(1.0 - t, 5.0);  
            t = 0.3 + smoothstep(t) * 0.7;
        }

        /*** if we're not facing block_1 fade the lens flare away ***/
        if(block_pos != 0)
            opacity /= Math.abs(block_pos / 10) + 1;


        foregl.enable(foregl.BLEND);
        foregl.blendFuncSeparate(foregl.SRC_ALPHA, foregl.ONE, foregl.ONE_MINUS_SRC_ALPHA, foregl.ONE);
	    foregl.useProgram(lensProgram);
	    foregl.bindBuffer(foregl.ARRAY_BUFFER, lensProgram.buffer);
	    foregl.enableVertexAttribArray(lensProgram.a1);
	    foregl.enableVertexAttribArray(lensProgram.a2);
	    foregl.vertexAttribPointer(lensProgram.a1, 4, foregl.FLOAT, false, step * 6, 0);
	    foregl.vertexAttribPointer(lensProgram.a2, 2, foregl.FLOAT, false, step * 6, step * 4);
    
	   		foregl.activeTexture(foregl.TEXTURE0);
	   	foregl.bindTexture(foregl.TEXTURE_2D, lensProgram.texture);
        foregl.uniform1i(lensProgram.utexture, 0);
        foregl.uniform1f(lensProgram.opacity,  opacity);
    
    
    
    
    
        //INFINE, li transliamo nella parte alta dello schermo
        mpb[0] = -1.0; mpb[1] = +0.7; mpb[2] = 0.0;
        mat4.translate(lens_flares_matrices[1], lens_flares_matrices[1], mpb);
        mat4.translate(lens_flares_matrices[2], lens_flares_matrices[2], mpb);
        mat4.translate(lens_flares_matrices[3], lens_flares_matrices[3], mpb);
        mat4.translate(lens_flares_matrices[4], lens_flares_matrices[4], mpb);
    
        //per quarta cosa correggiamo l'errore di dimensioni causato dall'assenza di una projection matrix, per la quale i  valori di -1.0 e +1.0 della x sono diversi da quelli della y in base allo schermo
        mpb[0] = window.innerHeight / window.innerWidth; mpb[1] = 1.0; mpb[2] = 1.0;
        mat4.scale(lens_flares_matrices[1], lens_flares_matrices[1], mpb);
        mat4.scale(lens_flares_matrices[2], lens_flares_matrices[2], mpb);
        mat4.scale(lens_flares_matrices[3], lens_flares_matrices[3], mpb);
        mat4.scale(lens_flares_matrices[4], lens_flares_matrices[4], mpb);
    
        //per terza cosa li ruotiamo sull'asse z
        mpb[0] = 0.0; mpb[1] = 0.0; mpb[2] = 1.0;
        mat4.rotateZ(lens_flares_matrices[1], lens_flares_matrices[1], t * -0.45);
        mat4.rotateZ(lens_flares_matrices[2], lens_flares_matrices[2], t * -0.75);
        mat4.rotateZ(lens_flares_matrices[3], lens_flares_matrices[3], t * -0.75);
        mat4.rotateZ(lens_flares_matrices[4], lens_flares_matrices[4], t * -0.45);
    
        //per seconda cosa li transliamo nella x mantenendoli al centro
        mpb[0] = t * -0.7; mpb[1] = 0.0; mpb[2] = 0.0;
        mpb[0] = t * 1.9;
        mat4.translate(lens_flares_matrices[1], lens_flares_matrices[1], mpb);
        mpb[0] = t * 8.2;
        mat4.translate(lens_flares_matrices[2], lens_flares_matrices[2], mpb);
        mpb[0] = t * 7.9;
        mat4.translate(lens_flares_matrices[3], lens_flares_matrices[3], mpb);        
        mpb[0] = t * 3.9;
        mat4.translate(lens_flares_matrices[4], lens_flares_matrices[4], mpb);
    
        //per prima cosa li scaliamo
        mpb[0] = 0.4 + 0.3 * t; mpb[1] = 0.4 + 0.3 * t; mpb[2] = 0.4 + 0.3 * t;
        mat4.scale(lens_flares_matrices[1], lens_flares_matrices[1], mpb);
        mpb[0] = 1.0; mpb[1] = 1.0; mpb[2] = 1.0;
        mat4.scale(lens_flares_matrices[2], lens_flares_matrices[2], mpb);
        mpb[0] = 0.3 + 1.3 * t; mpb[1] = 0.3 + 1.3 * t; mpb[2] = 0.3 + 1.3 * t;
        mat4.scale(lens_flares_matrices[3], lens_flares_matrices[3], mpb);
        mpb[0] = 0.05 + 0.2 * t; mpb[1] = 0.05 + 0.2 * t; mpb[2] = 0.05 + 0.2 * t;
        mat4.scale(lens_flares_matrices[4], lens_flares_matrices[4], mpb);








        //il primo subisce passaggi particolari perchè va nella direzione contraria
        mpb[0] = -0.7; mpb[1] = +0.6; mpb[2] = 0.0;
        mat4.translate(lens_flares_matrices[0], lens_flares_matrices[0], mpb);

        mpb[0] = window.innerHeight / window.innerWidth; mpb[1] = 1.0; mpb[2] = 1.0;
        mat4.scale(lens_flares_matrices[0], lens_flares_matrices[0], mpb);
    
        mpb[0] = 0.0; mpb[1] = 0.0; mpb[2] = 1.0;
        mat4.rotateZ(lens_flares_matrices[0], lens_flares_matrices[0], t * -0.65);
    
        mpb[0] = t * -0.9; mpb[1] = 0.0; mpb[2] = 0.0;
        mat4.translate(lens_flares_matrices[0], lens_flares_matrices[0], mpb);

        mpb[0] = 0.2; mpb[1] = 0.2; mpb[2] = 0.2;
        mat4.scale(lens_flares_matrices[0], lens_flares_matrices[0], mpb);

    
        foregl.uniformMatrix4fv(lensProgram.mat0, false, lens_flares_matrices[0]);
        foregl.uniformMatrix4fv(lensProgram.mat1, false, lens_flares_matrices[1]);
        foregl.uniformMatrix4fv(lensProgram.mat2, false, lens_flares_matrices[2]);
        foregl.uniformMatrix4fv(lensProgram.mat3, false, lens_flares_matrices[3]);
        foregl.uniformMatrix4fv(lensProgram.mat4, false, lens_flares_matrices[4]);
    
        for(var i = 0; i < 5; i++)
            mat4.identity(lens_flares_matrices[i]);
    
	    foregl.drawArrays(foregl.TRIANGLES, 0, 6 * 5);
    
    }
}
/****** Starting Anim program creation and draw - END ******/









// *******  CLICK EVENT ROUTINES  *******
var clicking = false;
var counter = 0;
var fadecounter = 0;
var reload_counter = false;
var ready_to_change_picture = false;
var block_mouse_interactions = false;
function canvas_mousedown(e)  {
	clicking = true;

	//reloading counter, don't keep track of mouse drags
	if(reload_counter)           return;
	if(block_mouse_interactions) return;

	//swap pictures to be drawn
	if(ready_to_change_picture)	{
		reset_quads();  update_quads_vertices();
		texture_index = texture_index < 2 ? ++texture_index : 0;
		draw_background();  fadecounter = 0;

		ready_to_change_picture = false;
	}

	if(counter < hmdquads) { counter++; fadecounter++; }
	else { reload_counter = true; clicking = false; return; }
	
	spawn_quad(e);
}
var lastMove = 0;
function canvas_drag(e)  {
	var ms = Date.now();
	var delta = ms - lastMove;
	if(delta > 30 && clicking) {
		lastMove = ms;

		canvas_mousedown(e);
	}

	//inverting colors routine
	/*if(e.clientX / window.innerWidth < 0.3)
		dpp_fadetoblack = true;
	else if(e.clientX / window.innerWidth > 0.7)
		dpp_fadetoblack = false;*/
}
function canvas_mouseup()  {
	clicking = false;
}
function key_pressed(e) {
	//K == 75;
	if(e.keyCode == 75) {
		dsa_content_ready = 0.001;
	}
}

var current_block = 1;
var block_switcher = { moving: false, dir: -1, cx: -1, anim: false, from: -1};
function block_switcher_down(e) {
    if(block_switcher.anim) return;


    if(e.clientX < window.innerWidth * 0.1) {
        if(current_block == 0) return;

        block_switcher.moving = true;
        block_switcher.dir    = -1;
        block_switcher.cx = e.clientX;
        //if user clicks when animating
        block_switcher.anim = false;
    }

    if(e.clientX > window.innerWidth * 0.9) {
        if(current_block == 2) return;

        block_switcher.moving = true;
        block_switcher.dir    = +1;
        block_switcher.cx = e.clientX;
        //if user clicks when animating
        block_switcher.anim = false;
    }
}
function block_switcher_up(e) {
    block_switcher.moving = false;
    if(block_switcher.anim) return;

    if(block_switcher.dir == -1) {
        if(e.clientX > window.innerWidth * 0.5) {
            block_switcher.from = e.clientX - block_switcher.cx;
            block_switcher.anim = true;     
        } else {
            block_switcher.from = e.clientX - block_switcher.cx;
            block_switcher.anim = true;  
            block_switcher.dir  = 0;
        }
    }

    if(block_switcher.dir == +1) {
        if(e.clientX < window.innerWidth * 0.5) {
            block_switcher.from = -(block_switcher.cx - e.clientX);
            block_switcher.anim = true;     
        } else {
            block_switcher.from = -(block_switcher.cx - e.clientX);
            block_switcher.anim = true;               
            block_switcher.dir  = 0;
        }
    }
}
var block_pos = 0;
function block_switcher_move(e) {
    if(block_switcher.moving) {
        if(block_switcher.dir == -1) {
            var difference = e.clientX - block_switcher.cx;
            var where       = difference;
            if(current_block == 2) where -= window.innerWidth;

            if(difference > 0) {
                document.getElementById("block_1").style.transform = "translate(" + where + "px, 0px)";
                document.getElementById("block_1_over").style.transform = "translate(" + where + "px, 0px)";
                document.getElementById("block_0").style.transform =      "translate(" + (where +1 - window.innerWidth)+ "px, 0px)";
                document.getElementById("block_2").style.transform =      "translate(" + (where - 1 + window.innerWidth)+ "px, 0px)";
            }

            block_pos = where;
            camera.reach[0] = yscroll * 0.01 - where * 0.01;
        }

        if(block_switcher.dir == +1) {
            var difference = -(block_switcher.cx - e.clientX);
            var where      = difference;
            if(current_block == 0) where += window.innerWidth;

            if(difference < 0) {
                document.getElementById("block_1").style.transform = "translate(" + where + "px, 0px)";
                document.getElementById("block_1_over").style.transform = "translate(" + where + "px, 0px)";
                document.getElementById("block_0").style.transform =      "translate(" + (where + 1 - window.innerWidth) + "px, 0px)";
                document.getElementById("block_2").style.transform =      "translate(" + (where - 1 + window.innerWidth)+ "px, 0px)";
            }

            block_pos = where;
            camera.reach[0] = yscroll * 0.01 - where * 0.01;
        }
    }
}
var bsspeed   = 0.15;
function switch_central_blocks(deltatime) {
    if(block_switcher.dir == -1) {
        var difference = (window.innerWidth - block_switcher.from) * bsspeed;
        var where      = block_switcher.from + difference;
        var max        = window.innerWidth;

        var oldwhere    = where;
        if(current_block == 1) { }
        if(current_block == 2) { 
            where  -= window.innerWidth;
            max     = 0;
        }

        block_pos = where;
        camera.reach[0] = yscroll * 0.01 - where * 0.01;

        if(difference < 0.1) {
            where = max
            block_switcher.anim = false;
            block_switcher.dir  = 9;
            block_switcher.moving = false;
            block_switcher.cx   = -1;
            block_switcher.from = -1;
            current_block = current_block == 0 ? 0 : current_block - 1;

            if(current_block == 0) block_pos = -window.innerWidth; 
        }

        document.getElementById("block_1").style.transform = "translate(" + where + "px, 0px)";
        //document.getElementById("block_0").style.transform = "translate(" + 
        //    (-innerWidth + where) + "px, 0px)";
        document.getElementById("block_1_over").style.transform = "translate(" + where + "px, 0px)";
        document.getElementById("block_0").style.transform =      "translate(" + (where - window.innerWidth)+ "px, 0px)";
        document.getElementById("block_2").style.transform =      "translate(" + (where + window.innerWidth)+ "px, 0px)";
        block_switcher.from = oldwhere;
    }

    if(block_switcher.dir == +1) {
        var difference = (window.innerWidth + block_switcher.from) * bsspeed;
        var where      = (block_switcher.from - difference);
        var max        = -window.innerWidth;


        var oldwhere    = where;
        if(current_block == 1) { }
        if(current_block == 2) { block_switcher.anim = false; }
        if(current_block == 0) { 
            where += window.innerWidth;
            max   += window.innerWidth;
        }

        block_pos = where;
        camera.reach[0] = yscroll * 0.01 - where * 0.01;

        if(difference < 0.1) {
            where = max;
            block_switcher.anim = false;
            block_switcher.dir  = 9;
            block_switcher.moving = false;
            block_switcher.cx   = -1;
            block_switcher.from = -1;
            current_block = current_block == 2 ? 2 : current_block + 1; 

            if(current_block == 2) block_pos = window.innerWidth; 
        }



        document.getElementById("block_1").style.transform = "translate(" + where + "px, 0px)";
        document.getElementById("block_1_over").style.transform = "translate(" + where + "px, 0px)";
        document.getElementById("block_0").style.transform =      "translate(" + (where - window.innerWidth)+ "px, 0px)";
        document.getElementById("block_2").style.transform =      "translate(" + (where + window.innerWidth)+ "px, 0px)";

        block_switcher.from = oldwhere;
    }


    if(block_switcher.dir == 0) {
        var difference = (block_switcher.from) * bsspeed;
        var where      = (block_switcher.from - difference);
        var max        = 0;


        var oldwhere = where;
        if(current_block == 2) { 
            where -= window.innerWidth;
            max   = -window.innerWidth;
        }
        if(current_block == 0) { 
            where += window.innerWidth;
            max   += window.innerWidth;
        }

        block_pos = where;
        camera.reach[0] = yscroll * 0.01 - where * 0.01;

        if((difference >= 0 && difference < +0.1) || 
           (difference < 0  && difference > -0.1)) {
            where = max; 
            block_switcher.anim = false;
            block_switcher.dir  = 0;
            block_switcher.moving = false;
            block_switcher.cx   = -1;
            block_switcher.from = -1;
        }



        document.getElementById("block_1").style.transform = "translate(" + where + "px, 0px)";
        document.getElementById("block_1_over").style.transform = "translate(" + where + "px, 0px)";
        document.getElementById("block_0").style.transform =      "translate(" + (where - window.innerWidth)+ "px, 0px)";
        document.getElementById("block_2").style.transform =      "translate(" + (where + window.innerWidth)+ "px, 0px)";

        block_switcher.from = oldwhere;
    }
}
// *******  CLICK EVENT ROUTINES - END  *******








//******** canvas animations ********
var animate_palette_height = false;
function animate_palette_translation(deltatime) {

	if(gui_palette_y_offset < 0) {
		//increase by distance percentage
		var distance = 0 - gui_palette_y_offset;
		gui_palette_y_offset += deltatime * distance * 3;
	}

	if(gui_palette_y_offset > -0.003) {
		gui_palette_y_offset = 0;
		animate_palette_height = false;
	}

	var wwa2d = world_width  / 5 * 2;
	var wha2d = world_height / 5 * 2; 
	var vw = 9; 
	var x_length = wwa2d * (vw / 100);
	var y_length = x_length;
	var y_off    = -y_length / 2;
	var y_transl = (-wha2d / 2 + (-y_off)) + 
				    gui_palette_y_offset;


	for(var i = 0; i <= gui_per_vertex_properties * 6; i += gui_per_vertex_properties) 
		guiVertices[i + 7] = y_transl;

	for(var i = 1; i < 9; i++) {
		for(var j = 0; j < 6; j++) {
			guiVertices[i * 6 * gui_per_vertex_properties + 
						j * gui_per_vertex_properties     + 
					    7] = gui_watercolor_y_offsets[i-1] + y_length + gui_palette_y_offset;

		}
	}



	gl.bindBuffer(gl.ARRAY_BUFFER, guiBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, guiVertices, gl.STATIC_DRAW);
}
//******** canvas animations - end ********








function update_quads(deltatime) {
	for(var i = 0; i < quads.length; i++)
	{
		if(quads[i].opacity < 2) quads[i].opacity         += deltatime;
		if(quads[i].grayed > 0)  quads[i].grayed          -= deltatime / 1.5;
		if(quads[i].distortion > 0)  quads[i].distortion  -= deltatime / 2.0;
	}
	update_quads_vertices();
}
function update_quads_vertices()	{

	//correct transparency can only be achieved if quads are ordered by zdepth, we cannot use the original quads arrays since it gets spliced at the start causing a continuous splice at the "topmost" element on our array if we were to issue this function on the original quads array
	order_quads_by_zdepth();

	for(var i = 0; i < hmdquads; i++)
	{
		//next quad index
 		var nqi = i * 6 * properties;

 		for(var r = 0; r < 6; r++) {
 			//next vertex index
 			var nvi = r * properties;

 			//modifying translation attributes
 			quadsBuffer[nqi + nvi + 0] = quads_snapshot[i].x;
 			quadsBuffer[nqi + nvi + 1] = quads_snapshot[i].y;
 			quadsBuffer[nqi + nvi + 2] = quads_snapshot[i].z;

 			//& quad texture info
 			quadsBuffer[nqi + nvi + 5] = quads_snapshot[i].texture;

 			//& quads fx
 			quadsBuffer[nqi + nvi + 6] = quads_snapshot[i].scale;
 			quadsBuffer[nqi + nvi + 7] = quads_snapshot[i].rotation;
 			quadsBuffer[nqi + nvi + 8] = quads_snapshot[i].opacity;
 			quadsBuffer[nqi + nvi + 9] = quads_snapshot[i].isImage; 

 			//& quads fx2
 			quadsBuffer[nqi + nvi + 10] = quads_snapshot[i].grayed;
 			quadsBuffer[nqi + nvi + 11] = quads_snapshot[i].distortion;
 			quadsBuffer[nqi + nvi + 12] = 0;
 			quadsBuffer[nqi + nvi + 13] = 0; 

 			//& quads color
 			quadsBuffer[nqi + nvi + 14] = quads_snapshot[i].r;
 			quadsBuffer[nqi + nvi + 15] = quads_snapshot[i].g;
 			quadsBuffer[nqi + nvi + 16] = quads_snapshot[i].b;
 			quadsBuffer[nqi + nvi + 17] = quads_snapshot[i].a; 
 		}
	}

	gl.bindBuffer(gl.ARRAY_BUFFER, mainBuffer);
	gl.bufferSubData(gl.ARRAY_BUFFER, 0, quadsBuffer);
}
function order_quads_by_zdepth()  {

	for(var i = 0; i < quads.length; i++)	{

		for(var prop in quads[i]) {
			if(quads[i].hasOwnProperty(prop))
				quads_snapshot[i][prop] = quads[i][prop];
		}
	}


	quads_snapshot.sort(
		function compare(a, b) {
 			if (a.z < b.z) {
 			  return -1;
 			}
 			if (a.z > b.z) {
 			  return 1;
 			}

 			//we also need to sort every element with -3 depth to avoid bugs in chrome
 			if(a.z == -3 && b.z == -3) {
 				if(a.isImage_depth_ID > b.isImage_depth_ID) 
 					return 1;

 				return -1;
 			}
 			// a must be equal to b
 			return 0;
		});
}
function reset_quads() {
	for(var i = 0; i < quads.length; i++) {
		quads[i].z = 5;
		quads[i].isImage = 0;
	}
}
function spawn_quad(e) {
	//if there's something to compute, go on..
	var xNDC = e.clientX / canvas.width;
	var yNDC = 1.0 - e.clientY / canvas.height;

	var x_world = world_width  * xNDC - world_width  / 2;
	var y_world = world_height * yNDC - world_height / 2;

	var depth = -3.0 - Math.random() * 7;
	var scale = 1;//(5.57 * -depth / 5) / 5.57;

	var _isImage = Math.floor(Math.random() * 100) % 3;
	var _grayed  = Math.random() > 0.5 ? 1 : 0;

	if(_isImage == 0)  {
		_isImage = 1;
		depth = -3;
		//var scale = Math.pow((3.342 * -depth / 5) / 3.342, 0.5);
	}
	else  {
		_isImage = 0;
	}



	//PERSPECTIVE DISTORTION CORRECTION
	var xNDCratio = xNDC <= 0.5 ? 1.0 - xNDC * 2.0 : (xNDC - 0.5) * 2; 
	var yNDCratio = yNDC <= 0.5 ? 1.0 - yNDC * 2.0 : (yNDC - 0.5) * 2; 
	var x_persp_distortion = ((world_width  / 2) / 5) * xNDCratio * Math.abs(depth + 5);
	var y_persp_distortion = ((world_height / 2) / 5) * yNDCratio * Math.abs(depth + 5);

	if(depth > -5.0) {
		x_persp_distortion = -x_persp_distortion;
		y_persp_distortion = -y_persp_distortion;
	}

	if(xNDC > 0.5) x_world += x_persp_distortion;
	else           x_world -= x_persp_distortion;
	if(yNDC > 0.5) y_world += y_persp_distortion;
	else           y_world -= y_persp_distortion;
	//PERSPECTIVE DISTORTION CORRECTION - END
	


	quads.shift();
	quads.push(
		{	x: x_world, y: y_world, z: depth,// - Math.random(),
			scale: scale, //1.5 + Math.random() * 1,
 			rotation: Math.random() * 6.28,
 			texture: Math.floor(Math.random() * 8),
 			opacity: 0,
 			isImage: _isImage,
 			//needed to sort image quads
 			isImage_depth_ID: Date.now(),
 			grayed:  _isImage == 1 ? _grayed : 0,
 			distortion: 1,
 			r: Math.random() * 1.0, 
 			g: Math.random() * 1.0, 
 			b: Math.random() * 1.0, 
 			a: 1
		}
	);

	update_quads_vertices();
}
function reload_counter_func(deltatime) {
	counter -= deltatime * 70;

    if(counter < -20) {
    	//reloading finished
    	reload_counter = false;
    	ready_to_change_picture = true;
    	counter = 0;
    }
}






// *******  GENERAL UTILS   *******
function generate_texture(path, mipmap)  {
	var image = new Image();
	var texture = gl.createTexture();
	image.onload = function(image, texture, mipmap)	{

		return function() {
			
			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

   	 		if(mipmap == true) {
   	 			gl.generateMipmap(gl.TEXTURE_2D);
   	 			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
   	 		}
	

   	 		gl.bindTexture(gl.TEXTURE_2D, null);

   	 		//YOU MAY NOT NEED THIS LINE OF CODE
   	 		//YOU MAY NOT NEED THIS LINE OF CODE
   	 		//YOU MAY NOT NEED THIS LINE OF CODE
   	 		texture.loaded = true;
   	 		//YOU MAY NOT NEED THIS LINE OF CODE
   	 		//YOU MAY NOT NEED THIS LINE OF CODE
   	 		//YOU MAY NOT NEED THIS LINE OF CODE

   	 		if(++loaded_textures >= 4) {
   	 			textures_loaded = true;
   	 		}
   	 	}
	}(image, texture, mipmap);

	image.src = path;
	return texture;
}
function generate_texture_custom_context(path, mipmap, ctx, flipy)  {
	var image = new Image();
	var texture = ctx.createTexture();
	image.onload = function(image, texture, mipmap)	{

		return function() {
			
			ctx.bindTexture(ctx.TEXTURE_2D, texture);
			ctx.pixelStorei(ctx.UNPACK_FLIP_Y_WEBGL, flipy ? true : false);
			ctx.texImage2D(ctx.TEXTURE_2D, 0, ctx.RGBA, ctx.RGBA, ctx.UNSIGNED_BYTE, image);
    		ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MAG_FILTER, ctx.LINEAR);
    		ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MIN_FILTER, ctx.LINEAR);
    		ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_S, ctx.CLAMP_TO_EDGE);
    		ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_T, ctx.CLAMP_TO_EDGE);

   	 		if(mipmap == true) {
   	 			ctx.generateMipmap(ctx.TEXTURE_2D);
   	 			ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MAG_FILTER, ctx.LINEAR);
    			ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MIN_FILTER, ctx.LINEAR_MIPMAP_LINEAR);
   	 		}
	

   	 		ctx.bindTexture(ctx.TEXTURE_2D, null);

   	 		//YOU MAY NOT NEED THIS LINE OF CODE
   	 		//YOU MAY NOT NEED THIS LINE OF CODE
   	 		//YOU MAY NOT NEED THIS LINE OF CODE
   	 		texture.loaded = true;
   	 		//YOU MAY NOT NEED THIS LINE OF CODE
   	 		//YOU MAY NOT NEED THIS LINE OF CODE
   	 		//YOU MAY NOT NEED THIS LINE OF CODE
   	 	}
	}(image, texture, mipmap);

	image.src = path;
	return texture;
}
function generate_mainpage_texture(path, mipmap)  {
	var image = document.getElementById("maintexture");
	var texture = gl.createTexture();
			
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

   	if(mipmap == true) {
   	 	gl.generateMipmap(gl.TEXTURE_2D);
   	 	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
     	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
   	}
	
   	gl.bindTexture(gl.TEXTURE_2D, null);

   	//YOU MAY NOT NEED THIS LINE OF CODE
   	//YOU MAY NOT NEED THIS LINE OF CODE
   	//YOU MAY NOT NEED THIS LINE OF CODE
   	texture.loaded = true;
   	//YOU MAY NOT NEED THIS LINE OF CODE
   	//YOU MAY NOT NEED THIS LINE OF CODE
   	//YOU MAY NOT NEED THIS LINE OF CODE
   	
	return texture;
}
function getBoundingVertices(fov, ratio, depth)	 {
	var BoundingVertices = [];
	var projection = 		 mat4.create();
	var projection_inverse = mat4.create();

	mat4.perspective(projection, fov, ratio, 0.5, depth);
	mat4.invert(projection_inverse, projection);
	
	var NDCcube = [];

	NDCcube.push(vec4.fromValues(-1.0, -1.0,  1.0, 1.0));
	NDCcube.push(vec4.fromValues(-1.0,  1.0,  1.0, 1.0));
	NDCcube.push(vec4.fromValues( 1.0,  1.0,  1.0, 1.0));
	NDCcube.push(vec4.fromValues( 1.0, -1.0,  1.0, 1.0));

	/*
		Returned Values:
		1___________2
		|			|
		|			|
		|			|
		|___________|
		0			3
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
function getBezier(t,C0x,C0y,C1x,C1y) {
	var tt = 1-t;
	return C0y*3*t*t*tt+C1y*3*t*tt*tt+tt*tt*tt;
}
function shader(id) {
    var shaderScript = document.getElementById(id);
        if (!shaderScript) {
            return null;
        }

        var str = "";
        var k = shaderScript.firstChild;
        while (k) {
            if (k.nodeType == 3) {
                str += k.textContent;
            }
            k = k.nextSibling;
        }

        var shader;
        if (shaderScript.type == "frag") {
            shader = gl.createShader(gl.FRAGMENT_SHADER);
        } else if (shaderScript.type == "vert") {
            shader = gl.createShader(gl.VERTEX_SHADER);
        } else {
            return null;
        }

        gl.shaderSource(shader, str);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            alert(gl.getShaderInfoLog(shader) + "  " + id);
            return null;
        }

        return shader;
}
function createFramebuffer(data) {
	/*
	data needs to provide:

	data.width
	data.height
	data.mipmap  -> optional
	data.depth   -> optional
	data.stencil -> optional
	*/

	var framebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);

    framebuffer.texture = gl.createTexture();

    gl.bindTexture(gl.TEXTURE_2D, framebuffer.texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    
    if(data.mipmap)
    	gl.generateMipmap(gl.TEXTURE_2D);

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, data.width, data.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

    if(data.depth || data.stencil) {
    	//requesting depth only
    	if(data.depth && !data.stencil) {
    	var renderbuffer = gl.createRenderbuffer();
    	gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
    	gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, data.width, data.height);

    	gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer);
    	}
	}

    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, framebuffer.texture, 0);
    
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
}
function createProgram(data) {
	/*

	/*PostProcessProgram = createProgram({
		vID: "postprocessvert",
		fID: "postprocessfrag",
		a: ["pos", 2, "coord", 2],
		u: ["texture", "1i"],
		verts: [
			-1.0, -1.0, 0.0, 0.0,
			-1.0, +1.0, 0.0, 1.0,
			+1.0, -1.0, 1.0, 0.0,

			+1.0, -1.0, 1.0, 0.0,
			-1.0, +1.0, 0.0, 1.0,
			+1.0, +1.0, 1.0, 1.0
		],
		staticd: true
	});


	data needs to provide:
	data.vertexID  
	data.fragmentID

	data.attrib     -> array of attributes   ["name", 4, "name", 2]
	data.uniforms   -> array of uniforms     ["name", "1f", "name", "mat4", "name", "2fv"]
	data.vertices   -> array of vertices
	data.staticd    -> if static  draw
	data.dynamicd   -> if dynamic draw

	*/

	var Program = {};
	Program.location = gl.createProgram();

	var vs = shader(data.vID);
    var fs = shader(data.fID);

    gl.attachShader(Program.location, vs);
    gl.attachShader(Program.location, fs);
    gl.linkProgram(Program.location);

    if (!gl.getProgramParameter(Program.location, gl.LINK_STATUS)) {
        alert("Could not initialise shaders");
        return null;
    }


    Program.attrib = [];
    Program.uni    = {};

    //l'attrib dovrebbe essere un oggetto che contiene : location, floatnum, strideoffset
    //l'attrib dovrebbe essere un oggetto che contiene : location, floatnum, strideoffset
    //l'attrib dovrebbe essere un oggetto che contiene : location, floatnum, strideoffset
    //l'attrib dovrebbe essere un oggetto che contiene : location, floatnum, strideoffset
    //l'attrib dovrebbe essere un oggetto che contiene : location, floatnum, strideoffset
    //l'attrib dovrebbe essere un oggetto che contiene : location, floatnum, strideoffset
    for(var i = 0, l = data.a.length; i < l; i += 2)
    	Program.attrib[i / 2] = gl.getAttribLocation(Program.location, data.a[i]);

    for(var i = 0, l = data.u.length; i < l; i += 2) {
    	Program.uni[data.u[i]] = { 
    		type: data.u[i+1], 
    		location: gl.getUniformLocation(Program.location, data.u[i])
    	};
    }


    Program.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Program.buffer);
    if(data.staticd)
    	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.vertices), gl.STATIC_DRAW);

	//here we handle data related to program activation
	//data.activation.

	Program.activation.stride = 0;
	for(var i = 0, l = data.a.length; i < l; i+=2)
    	Program.activation.stride += data.a[i+1];

	Program.activation.offsets = [];
	for(var i = 0, l = data.a.length; i < l; i+=2) {
		if(i == 0)
    		Program.activation.offsets.push(0);

    	var total = 0;
    	for(var j = 0; j < i / 2; j++)
    		total += data.a[j*2 + 1];

    	Program.activation.offsets.push(total);
	}

	Program.activation.floatNum = [];
	for(var i = 0, l = data.a.lenght; i < l; i+=2) {
		program.activation.floatNum.push(data.a[i+1]);
	}

	Program.activate = activate;
	Program.uniform  = uniform;
	return Program;
}
function activate() {
	gl.useProgram(this.location);
	gl.bindBuffer(this.buffer);
	for(var i = 0, l = this.attrib.length; i < l; i++)
		gl.enableVertexAttribArray(this.attrib[i]);

	for(var i = 0, l = this.attrib.length; i < l; i++)
		gl.vertexAttribPointer(this.attrib[i], this.activation.floatNum[i], gl.FLOAT, false, this.activation.stride, this.activation.offsets[i]);
}
function uniform() {
	//arguments[0]    == name;
	//arguments[1etc] == values;
	var name    = arguments[0];
	switch (this.uni[name].type) {
		case "1f":
			gl.uniform1f(this.uni[name].location, arguments[1]); 
			break;
		case "2f":
			gl.uniform2f(this.uni[name].location, arguments[1], arguments[2]); 
			break;
		case "3f":
			gl.uniform3f(this.uni[name].location, arguments[1], arguments[2], arguments[3]); 
			break;
		case "4f":
			gl.uniform4f(this.uni[name].location, arguments[1], arguments[2], arguments[3], arguments[4]); 
			break;
		case "mat4":
			gl.uniformMatrix4fv(this.uni[name].location, false, arguments[1]);
			break; 
	}
}
function smoothstep(t) {
	return t * t * (3 - 2 * t);
}
// *******  GENERAL UTILS - END  *******









// ******** DOM ELEMENTS INITIALIZATION ********
function initDOMElements() {
	init_web_experiment();
	setup_hamburger_anim_handler();
	resize_masked_slider();
}
var rms_children;
function resize_masked_slider(){
	var masked_slider = document.getElementById("masked_slider");
	rms_children 	  = masked_slider.children;

	/*var scr_ratio = window.innerWidth / window.innerHeight;
	if(scr_ratio > 1.5) {
		var vw = (1.5 / scr_ratio) * 100;
		ams_vh  = 100;

		masked_slider.style.width  = vw + "vw";
		masked_slider.style.height = "100vh";

		rms_children[0].style.transform = "translate(0px, 0)";
		rms_children[1].style.transform = "translate(0px, " + ams_vh + "vh)";
	}
	if(scr_ratio < 1.5) {
		var vh = (100 * 0.66666) / (1 / scr_ratio);
		ams_vh  = vh;

		masked_slider.style.width  = "100vw";
		masked_slider.style.height = vh + "vh";

		rms_children[0].style.transform = "translate(0px, 0)";
		rms_children[1].style.transform = "translate(0px, " + ams_vh + "vh)";
	}*/
	var divheight = 20.88;
	masked_slider.style.width  = "40vw";
	masked_slider.style.height = divheight + "vw";
	ams_vh = divheight;
	rms_children[1].style.transform = "translate(0px, " + ams_vh + "vw)";
}
function setup_hamburger_anim_handler() {
	var shah_hamburger  = document.getElementById("hamburger_menu_icon");
	var shah_menu		= document.getElementById("canvas_menu");
	document.getElementById("hamburger_menu_icon").addEventListener("click", 
		function(shah_hamburger, shah_menu) {  
			return function() {
				//toggle handles internally the class swaps
				shah_hamburger.classList.toggle('open');
				shah_menu.classList.toggle('toggled');

				acl_toggle_anim = true;
				acl_direction   = !acl_direction;
			}
		}(shah_hamburger, shah_menu)
	);
}
function init_web_experiment() {
	var container = document.getElementById("container");
	var web_experiment_container = document.createElement('div');
	web_experiment_container.style.margin = "";
}
// ******** DOM ELEMENTS INITIALIZATION - END ********





    

// ******** DOM ELEMENTS ANIMATION ********
var initFunctions = [
	//necessario altrimenti quando fai lo splice come fai a capire quale index appartiene a chi
	{ func: init_block1_greetings, index: 0 }
];
function animate_dom_elements(now, deltatime) {
	//eventually, there should be an array of animation function that needs to happen just one time at start, to avoid the continuos if statement check we could check the lenght of that array and call the corresponding functions if any is present
	//if(!awe_finished) {
	//	animate_web_experiment(now, deltatime);
	//	return; //don't animate/run anything else, we want to run smooth on our first animation
	//}


	//array of functions to init, slowly deletes entry from it's internal list with the index property
	//inside every function there's condition for starting and deleting
	if(initFunctions.length > 0) {
		for(var i = 0, l = initFunctions.length; i < l; i++) {
			initFunctions[i].func(now, deltatime);
		}
	}


	if(yscroll > 0)
		animate_masked_slider(now, deltatime);

	if(acl_toggle_anim) animate_canvas_left(now, deltatime);

    if(block_switcher.anim) {
        switch_central_blocks(deltatime);
    }
}
var awe_finished = false;
function animate_web_experiment(now, deltatime) {

	//stop canvas from drawing
	skip_webgl_experiment_draw = true;


	/* NOT PERMANENT, AS MORE ANIMATIONS GETS ADDED THESE TWO LINES OF CODE WILL NEED TO BE MOVED */
	skip_webgl_experiment_draw = false;
	awe_finished = true;
	/* NOT PERMANENT, AS MORE ANIMATIONS GETS ADDED THESE TWO LINES OF CODE WILL NEED TO BE MOVED */
}
var ams_vh = 0; //masked_slider vh
var ams_anim_sec = 0;
var ams_counter  = 0;
var ams_image_src = [ "landscape.jpg", 
					  "landscape2.jpg",
					  "landscape3.jpg" ];
function animate_masked_slider(now, deltatime) {
	var duration = 6;

	ams_anim_sec += deltatime;




	//animate ribbon
	var ribbon_width = ams_anim_sec / 4 > 1 ? 1 : ams_anim_sec / 4;
	//rms_children[3].style.width = ribbon_width * 100 + "%";
	rms_children[3].style.transform = "scale(" + ribbon_width * 2 + ", 1)";

	if(ams_anim_sec > 4) {
		rms_children[3].style.opacity = Math.pow(1.0 - (ams_anim_sec - 4) / 2, 3.0);
	} else {
		rms_children[3].style.opacity = 1.0;
	}
	//animate ribbon - END




	//first four seconds we do nothing
	if(ams_anim_sec < 4) return; 
	if(ams_anim_sec <= duration) {
		//if we get here, animate divs

		//t is in [0, 1] range
		var t = (ams_anim_sec - 4) / (duration - 4);
		var delta = getBezier(t, .59,-0.01,.58,.14);
		y_offset = ams_vh * delta;
		y_offset_2nd = ams_vh * (1.0 - delta);

		rms_children[0].style.transform = "translate(0px, -" + y_offset_2nd / 3.0 + "vw)";

		rms_children[1].style.transform = "translate(0px, " + y_offset + "vw)";
		return;
	} else {
		//animation finished, swap div's backgrounds & position
		ams_anim_sec = 0;
		ams_counter++;

		var index  = ams_counter % ams_image_src.length;
		var index2 = (ams_counter + 1) % ams_image_src.length;

		rms_children[0].style.backgroundImage = 'url("' + ams_image_src[index] + '")';
		rms_children[1].style.backgroundImage = 'url("' + ams_image_src[index2] + '")';
		

		rms_children[0].style.transform = "translate(0px, 0px)";
		rms_children[1].style.transform = "translate(0px, " + ams_vh + "vw)";

		return;
	}	
}


var acl_left = 0;
var acl_direction   = false;  
var acl_toggle_anim = false;
function animate_canvas_left(now, deltatime) {
	//acl_direction is true if opening false otherwise
	if (acl_direction) {
		acl_left += 10 * deltatime * 2;

		if(acl_left >= 10) {
			acl_left = 10;
			acl_toggle_anim = false;
		}
	}
	else {
		acl_left -= 10 * deltatime * 2;

		if(acl_left <= 0) {
			acl_left = 0;
			acl_toggle_anim = false;
		}
	}

	var delta = Math.pow(acl_left / 10, 2.0);
	var t = getBezier(delta, .42,0,.58, 1);
	canvas.style.right = (1.0 - t) * 10  + "vh";
}

var ib1g_triggered 	= false;
var ib1g_counter 	= 0;
var ib1g_div;
var ib1g_div_text;
var italyAnim;
function init_block1_greetings(now, deltatime) {



	/*

	
	if you switch tabs when this animation is going on, the counter keeps increasing and everything breaks

	if you switch tabs when this animation is going on, the counter keeps increasing and everything breaks

	if you switch tabs when this animation is going on, the counter keeps increasing and everything breaks

	if you switch tabs when this animation is going on, the counter keeps increasing and everything breaks


	*/







	if(!ib1g_triggered) {
		//trigger condition
		if(yscroll >= window.innerHeight) {
			ib1g_triggered = true;
			ib1g_div = document.getElementById("b1_greetings");
			ib1g_div.background = document.getElementById("b1_background");
			ib1g_div_text 	= document.getElementById("text");
			ib1g_div_text.p = document.getElementById("text").children[1];
			ib1g_div_text.div = document.getElementById("text").children[0];
			ib1g_div.bp 	= document.getElementById("beyondpixels").children;
			ib1g_div.ptnb 	= document.getElementsByClassName("pat_black");
			ib1g_div.ptnw 	= document.getElementsByClassName("pat_white");
			ib1g_div.webgl 	= document.getElementById("webgl");
			ib1g_div.golang = document.getElementById("golang");
			ib1g_div.arrl 	= document.getElementsByClassName("arrowleft")[0];
			ib1g_div.arrr   = document.getElementsByClassName("arrowright")[0];
			ib1g_ita_large = document.getElementsByClassName("italylarge");
			ib1g_ita_small = document.getElementsByClassName("italysmall");
			ib1g_div.bluecolumn  = document.getElementById("bluecolumn");
			ib1g_div.onamission  = document.getElementById("onamission");
			ib1g_div.onamission2  = document.getElementById("onamission2");
			ib1g_div.onamission3  = document.getElementById("onamission3");
			window.masked_slider = document.getElementById("masked_slider");

			italyAnim       = new xrAnimation();
			italyAnim.max_deltatime_allowed = 0.15;
			window.italyKeys       = [];
			
			var s = 3.0;
			var e = 0.75;

			italyKeys.push(new xrKeyframe(
				s, s+e, function(t) {
				 	ib1g_ita_large[2].style.transform = "translate(0px, " + (smoothstep(t) * -11.7) + "vw)";	
			}.bind(this)));

			italyKeys.push(new xrKeyframe(
				s+0.2, s+e+0.2, function(t) {
				ib1g_ita_large[1].style.transform = "translate(0px, " + (smoothstep(t) * -11.7) + "vw)";
				ib1g_ita_large[3].style.transform = "translate(0px, " + (smoothstep(t) * -11.7) + "vw)";
			}.bind(this)));

			italyKeys.push(new xrKeyframe(
				s+0.4, s+e+0.4, function(t) {
				ib1g_ita_large[0].style.transform = "translate(0px, " + (smoothstep(t) * -11.7) + "vw)";
				ib1g_ita_large[4].style.transform = "translate(0px, " + (smoothstep(t) * -11.7) + "vw)";
			}.bind(this)));

			italyKeys.push(new xrKeyframe(
				s+0.6, s+e+0.6, function(t) {
				ib1g_ita_small[4].style.transform = "translate(0px, " + (smoothstep(t) * -11.7) + "vw)";
				ib1g_ita_small[5].style.transform = "translate(0px, " + (smoothstep(t) * -11.7) + "vw)";
			}));

			italyKeys.push(new xrKeyframe(
				s+0.8, s+e+0.8, function(t) {
				ib1g_ita_small[3].style.transform = "translate(0px, " + (smoothstep(t) * -11.7) + "vw)";
				ib1g_ita_small[6].style.transform = "translate(0px, " + (smoothstep(t) * -11.7) + "vw)";
			}));

			italyKeys.push(new xrKeyframe(
				s+1.0, s+e+1.0, function(t) {
				ib1g_ita_small[2].style.transform = "translate(0px, " + (smoothstep(t) * -11.7) + "vw)";
				ib1g_ita_small[7].style.transform = "translate(0px, " + (smoothstep(t) * -11.7) + "vw)";
			}));

			italyKeys.push(new xrKeyframe(
				s+1.0, s+e+1.0, function(t) {
				ib1g_ita_small[1].style.transform = "translate(0px, " + (smoothstep(t) * -11.7) + "vw)";
				ib1g_ita_small[8].style.transform = "translate(0px, " + (smoothstep(t) * -11.7) + "vw)";
			}));

			italyKeys.push(new xrKeyframe(
				s+1.2, s+e+1.2, function(t) {
				ib1g_ita_small[0].style.transform = "translate(0px, " + (smoothstep(t) * -11.7) + "vw)";
				ib1g_ita_small[9].style.transform = "translate(0px, " + (smoothstep(t) * -11.7) + "vw)";
			}));

			italyKeys.push(new xrKeyframe(
				e+1.2, e+1.7, function(t) {
				window.masked_slider.style.opacity = smoothstep(t) * 0.9;
			}));

			italyKeys.push(new xrKeyframe(
				0, 0, function(t) {
				ib1g_div_text.style.display = "none"; 		
				ib1g_div_text.p.style.display = "none"; 	 	
				ib1g_div_text.div.style.display = "none"; 	 	
				ib1g_div.bp[0].style.display = "none"; 	 		
				ib1g_div.bp[1].style.display = "none"; 	 		
				ib1g_div.bp[2].style.display = "none"; 	 		
				ib1g_div.ptnb[0].style.display = "none"; 	 		
				ib1g_div.ptnb[1].style.display = "none"; 	 		
				ib1g_div.ptnw[0].style.display = "none"; 	 		
				ib1g_div.ptnw[1].style.display = "none";; 	 		
				ib1g_div.webgl.style.display = "none"; 	 		
				ib1g_div.golang.style.display = "none"; 	
			}.bind(this)));
			 	
			italyKeys.push(new xrKeyframe(
				0, 0.3, function(t) {
				ib1g_div.style.transform = "scale(0.01, " + t * 1.333 + ") " + "translate(0px, " + (12.5 - 5 * t) + "vw)";
			}.bind(this)));

			italyKeys.push(new xrKeyframe(
				0.3, 0.5, function(t) {
				ib1g_div.style.transform = "scale(0.01, " + (1.333 - t * 0.333) + ") " + "translate(0px, " + (7.5 - 7.5 * t) + "vw)";
			}.bind(this)));

			italyKeys.push(new xrKeyframe(
				0.5, 0.95, function(t) {
					ib1g_div.style.transform = "scale(" + (0.01 + 0.99 * smoothstep(t)) + ", 1)";
			}.bind(this)));

			italyKeys.push(new xrKeyframe(
				1.0, 1.0, function(t) {
				ib1g_div.style.transform = "scale(1,1)";

				ib1g_div_text.style.display = "initial"; 		
				ib1g_div_text.p.style.display = "initial"; 	 	
				ib1g_div_text.div.style.display = "initial"; 	 	
				ib1g_div.bp[0].style.display = "inline-block"; 	 		
				ib1g_div.bp[1].style.display = "inline-block"; 	 		
				ib1g_div.bp[2].style.display = "inline-block";	
				ib1g_div.ptnb[0].style.display = "initial"; 	 		
				ib1g_div.ptnb[1].style.display = "initial"; 	 		
				ib1g_div.ptnw[0].style.display = "initial"; 	 		
				ib1g_div.ptnw[1].style.display = "initial"; 	 		
				ib1g_div.webgl.style.display = "initial"; 	 		
				ib1g_div.golang.style.display = "initial"; 
		
				for(var i = 0, l = ib1g_ita_large.length; i < l; i++) 
					ib1g_ita_large[i].style.display = "initial";
				for(var i = 0, l = ib1g_ita_small.length; i < l; i++) 
					ib1g_ita_small[i].style.display = "initial";

			}.bind(this)));

			italyKeys.push(new xrKeyframe(
				1.0, 2.2, function(t) {
					t = t * 1.2;
					var t1 =  t < 0.6 ? t : 0.6;
					var t2 = (t - 0.3) < 0.6 ? (t - 0.3) : 0.6;
					var t3 = (t - 0.6) < 0.6 ? (t - 0.6) : 0.6;
					t1 /= 0.6; t2 /= 0.6; t3 /= 0.6;

					if(t1 > 0) t1 = t1 * t1 * (3 - 2 * t1);
					if(t2 > 0) t2 = t2 * t2 * (3 - 2 * t2);
					if(t3 > 0) t3 = t3 * t3 * (3 - 2 * t3);
			
 					var vw1 = ((1.0 - t1) * -4);
 					var vw2 = ((1.0 - t2) * -4);
 					var vw3 = ((1.0 - t3) * -4);
			
					ib1g_div.bp[0].style.opacity = Math.pow(t1, 4);
					ib1g_div.bp[0].style.transform = "translate(0vw, " + vw1 + "vw)";
					ib1g_div.bp[1].style.opacity = Math.pow(t2, 4);
					ib1g_div.bp[1].style.transform = "translate(0vw, " + vw2 + "vw)";
					ib1g_div.bp[2].style.opacity = Math.pow(t3, 4);
					ib1g_div.bp[2].style.transform = "translate(0vw, " + vw3 + "vw)";
			}.bind(this)));

			italyKeys.push(new xrKeyframe(
				2.2, 2.7, function(t) {
					ib1g_div_text.p.style.opacity = t;
					ib1g_div_text.div.style.transform = "scale(" + (1.0 - t) + ", 1)";
			}.bind(this)));

			italyKeys.push(new xrKeyframe(
				2.7, 3.3, function(t) {
					t = smoothstep(t);
					ib1g_div.ptnb[0].style.transform = 
					"translate(0, +" + 50 * t + "vh)" + " scale(1, " + t * 1000 + ")";
					ib1g_div.ptnb[1].style.transform = 
					"translate(0, -" + 50 * t + "vh)" + " scale(1, " + t * 1000 + ")";
					ib1g_div.ptnw[0].style.transform = "scale(1, " + t * 1000 + ")";
					ib1g_div.ptnw[1].style.transform = "scale(1, " + t * 1000 + ")";
			
					ib1g_div.ptnb[0].height = t * 100;
			}.bind(this)));

			italyKeys.push(new xrKeyframe(
				2.2, 3.7, function(t) {
					ib1g_div.webgl.style.opacity = t;
					ib1g_div.golang.style.opacity = t;
			}.bind(this)));

			italyKeys.push(new xrKeyframe(
				3, 3.5, function(t) {
					ib1g_div.background.style.opacity = t * 0.25;
			}.bind(this)));

			italyKeys.push(new xrKeyframe(
				3.7, 5.0, function(t) {
					t = smoothstep(t);
					ib1g_div.arrl.style.transform  = "translate("  + (1.0 - t) * 40 + "vw, 0vw)";
					ib1g_div.arrr.style.transform  = "translate(-" + (1.0 - t) * 40 + "vw, 0vw)";
					ib1g_div.arrl.style.opacity = t;
					ib1g_div.arrr.style.opacity = t;
					if(t == 1) {
						ib1g_div.arrl.style.margin  = "0";
						ib1g_div.arrr.style.margin  = "0";
						ib1g_div.arrl.style.opacity = 1;
						ib1g_div.arrr.style.opacity = 1;
						ib1g_div.arrl.style.animation = "arrow_anim_left  2s infinite";
						ib1g_div.arrr.style.animation = "arrow_anim_right 2s infinite";
					}
			}.bind(this)));




			italyKeys.push(new xrKeyframe(
				5.0, 5.7, function(t) {
					t = smoothstep(t);
					ib1g_div.bluecolumn.style.transform = "translate(0px, " + ((1.0 - t) * 17.5) + "vh)";
					ib1g_div.bluecolumn.style.opacity = t;
			}.bind(this)));


			italyKeys.push(new xrKeyframe(
				5.75, 6.35, function(t) {
					t = smoothstep(t);
					ib1g_div.onamission.style.transform = "translate(-" + ((1.0 - t) * 7.5) + "vw, 0vh)";
					ib1g_div.onamission.style.opacity = t;
			}.bind(this)));

			italyKeys.push(new xrKeyframe(
				6.1, 6.7, function(t) {
					t = smoothstep(t);
				ib1g_div.onamission2.style.transform = "translate(-" + ((1.0 - t) * 7.5) + "vw, 0vh)";
				ib1g_div.onamission2.style.opacity = t;
			}.bind(this)));

			italyKeys.push(new xrKeyframe(
				6.4, 7.0, function(t) {
					t = smoothstep(t);
					ib1g_div.onamission3.style.transform = "translate(-" + ((1.0 - t) * 7.5) + "vw, 0vh)";
					ib1g_div.onamission3.style.opacity = t;
			}.bind(this)));



			ib1g_div.onamission


			italyAnim.vector(italyKeys);

		} else return;
	}




	//ib1g_counter += deltatime;
	/*if(ib1g_counter <= 0.3) {
		var t = ib1g_counter / 0.3;
		//ib1g_div.style.height = t * 20 + "vw";
		ib1g_div.style.transform = "scale(0.01, " + t * 1.333 + ") " + 
								   "translate(0px, " + (12.5 - 5 * t) + "vw)";*/
	
	/*if(ib1g_counter <= 0.5) {
		var t = (ib1g_counter - 0.3) / 0.2;
		//ib1g_div.style.height = (20 - t * 5) + "vw";
		//ib1g_div.style.bottom = t * 5 + "vw";
		ib1g_div.lastBottom   = t * 5;
		ib1g_div.style.transform = "scale(0.01, " + (1.333 - t * 0.333) + ") " + "translate(0px, " + (7.5 - 7.5 * t) + "vw)";
	} else if(ib1g_div.lastBottom != 5) {
		//ib1g_div.style.bottom = "5vw";
		//ib1g_div.style.height = "15vw";
		ib1g_div.style.transform = "scale(0.01, 1) translate(0, 0)";
		ib1g_div.lastBottom   = 5;
	} else if(ib1g_counter <= 0.95) {
		var t = (ib1g_counter - 0.5) / 0.45;
		t = smoothstep(t);
		//ib1g_div.style.transform = "scale(" + (0.01 + 0.99 * t) + ", 1)";
		ib1g_div.lastWidth = 1 + 99 * t;
	} else if(ib1g_div.lastWidth != 100) {
		//ib1g_div.style.width = "100vw";
		ib1g_div.lastWidth = 100;
		ib1g_div.style.transform = "scale(1,1)";

		ib1g_div_text.style.display = "initial"; 		
		ib1g_div_text.p.style.display = "initial"; 	 	
		ib1g_div_text.div.style.display = "initial"; 	 	
		ib1g_div.bp[0].style.display = "inline-block"; 	 		
		ib1g_div.bp[1].style.display = "inline-block"; 	 		
		ib1g_div.bp[2].style.display = "inline-block";	
		ib1g_div.ptnb[0].style.display = "initial"; 	 		
		ib1g_div.ptnb[1].style.display = "initial"; 	 		
		ib1g_div.ptnw[0].style.display = "initial"; 	 		
		ib1g_div.ptnw[1].style.display = "initial"; 	 		
		ib1g_div.webgl.style.display = "initial"; 	 		
		ib1g_div.golang.style.display = "initial"; 

		for(var i = 0, l = ib1g_ita_large.length; i < l; i++) {
			ib1g_ita_large[i].style.display = "initial";
		}
		for(var i = 0, l = ib1g_ita_small.length; i < l; i++) {
			ib1g_ita_small[i].style.display = "initial";
		}
	} else if(ib1g_counter <= 1.0) {

	} else if(ib1g_counter <= 2.2) {
		var t  = ib1g_counter - 1.0;
		var t1 =  t < 0.6 ? t : 0.6;
		var t2 = (t - 0.3) < 0.6 ? (t - 0.3) : 0.6;
		var t3 = (t - 0.6) < 0.6 ? (t - 0.6) : 0.6;
		t1 /= 0.6; t2 /= 0.6; t3 /= 0.6;
		if(t1 > 0) t1 = t1 * t1 * (3 - 2 * t1);
		if(t2 > 0) t2 = t2 * t2 * (3 - 2 * t2);
		if(t3 > 0) t3 = t3 * t3 * (3 - 2 * t3);

 		var vw1 = ((1.0 - t1) * -4);
 		var vw2 = ((1.0 - t2) * -4);
 		var vw3 = ((1.0 - t3) * -4);

		ib1g_div.bp[0].style.opacity = Math.pow(t1, 4);
		ib1g_div.bp[0].style.transform = "translate(0vw, " + vw1 + "vw)";
		ib1g_div.bp[1].style.opacity = Math.pow(t2, 4);
		ib1g_div.bp[1].style.transform = "translate(0vw, " + vw2 + "vw)";
		ib1g_div.bp[2].style.opacity = Math.pow(t3, 4);
		ib1g_div.bp[2].style.transform = "translate(0vw, " + vw3 + "vw)";
		ib1g_div.bp[2].lastTrans = vw3;
	} else if(ib1g_div.bp[2].lastTrans != 0) {
		ib1g_div.bp[2].lastTrans = 0;
		ib1g_div.bp[2].style.opacity = 1;
		ib1g_div.bp[2].style.transform = "translate(0vw, 0vw)";
	} else if(ib1g_counter <= 2.7) {
		var t = (ib1g_counter - 2.2) / 0.5;
		//ib1g_div_text.style.width = t * 70 + "vw";
		//ib1g_div_text.p.style.left = "-" + (35 - t * 35) + "vw";
		ib1g_div_text.p.style.opacity = t;
		//ib1g_div_text.div.style.width = ((1.0 - t) * 100) + "%";
		ib1g_div_text.div.style.transform = "scale(" + (1.0 - t) + ", 1)";
		ib1g_div_text.lastWidth = t * 70;
	} else if(ib1g_div_text.lastWidth < 70) {
		ib1g_div_text.style.width  = "70vw";
		ib1g_div_text.div.style.width = "0%";
		//ib1g_div_text.p.style.left = "0vw";
		ib1g_div_text.p.style.opacity = 1;
		ib1g_div_text.lastWidth = 70;
	} else if(ib1g_counter <= 3.3) {
		var t = smoothstep((ib1g_counter - 2.7) / 0.6);
		
		//ib1g_div.ptnb[0].style.height = t * 100 + "vh";
		//ib1g_div.ptnb[1].style.height = t * 100 + "vh";
		//ib1g_div.ptnw[0].style.height = t * 100 + "vh";
		//ib1g_div.ptnw[1].style.height = t * 100 + "vh";

		ib1g_div.ptnb[0].style.transform = 
		"translate(0, +" + 50 * t + "vh)" + " scale(1, " + t * 1000 + ")";
		ib1g_div.ptnb[1].style.transform = 
		"translate(0, -" + 50 * t + "vh)" + " scale(1, " + t * 1000 + ")";
		ib1g_div.ptnw[0].style.transform = "scale(1, " + t * 1000 + ")";
		ib1g_div.ptnw[1].style.transform = "scale(1, " + t * 1000 + ")";

		ib1g_div.ptnb[0].height = t * 100;
	} else if(ib1g_div.ptnb[0].height != 100) {
		
		//ib1g_div.ptnb[0].style.height = "100vh";
		//ib1g_div.ptnb[1].style.height = "100vh";
		//ib1g_div.ptnw[0].style.height = "100vh";
		//ib1g_div.ptnw[1].style.height = "100vh";

		ib1g_div.ptnb[0].style.transform = "translate(0, +50vh) scale(1, 1000)";
		ib1g_div.ptnb[1].style.transform = "translate(0, -50vh) scale(1, 1000)";
		ib1g_div.ptnw[0].style.transform = "scale(1, 1000)";
		ib1g_div.ptnw[1].style.transform = "scale(1, 1000)";
		ib1g_div.ptnb[0].height = 100;
	}







	if(ib1g_counter < 2.2) {
		//dummy if starter, nothing to do till this point
	} else if(ib1g_counter < 3.7) {
		var t = (ib1g_counter - 2.2) / 1.5;
		ib1g_div.webgl.style.opacity = t;
		ib1g_div.golang.style.opacity = t;
		ib1g_div.webglopacity = t;
	} else if(ib1g_div.webglopacity != 1 || ib1g_div.webglopacity > 1) {
		ib1g_div.webgl.style.opacity = 1;
		ib1g_div.golang.style.opacity = 1;
		ib1g_div.webgl.style.animation = "logosOpacity 2.5s ease-in-out infinite";
		ib1g_div.golang.style.animation = "logosOpacity 2.5s ease-in-out infinite";
		ib1g_div.webglopacity = 1;
	} else if(ib1g_counter < 5.0) {
		var t = (ib1g_counter - 3.7) / 1.3;
		var tt = 1.0 - t; 
		ib1g_div.arrl.style.transform  = "translate("  + (1.0 - t) * 40 + "vw, 0vw)";
		ib1g_div.arrr.style.transform  = "translate(-" + (1.0 - t) * 40 + "vw, 0vw)";
		ib1g_div.arrl.style.opacity = t;
		ib1g_div.arrr.style.opacity = t;
		ib1g_div.arr_opacity = t;
	} else if(ib1g_div.arr_opacity < 1) {
		ib1g_div.arrl.style.margin  = "0";
		ib1g_div.arrr.style.margin  = "0";
		ib1g_div.arrl.style.opacity = 1;
		ib1g_div.arrr.style.opacity = 1;
		ib1g_div.arrl.style.animation = "arrow_anim_left  2s infinite";
		ib1g_div.arrr.style.animation = "arrow_anim_right 2s infinite";
	}*/


	//if(ib1g_counter > 6.0) {
	if(italyAnim.finished) {
		for(var i = 0, l = initFunctions.length; i < l; i++) {
			if(initFunctions[i].index == 0)
				initFunctions.splice(i, 1);
		}
	}



	italyAnim.update(deltatime);
}
// ******** DOM ELEMENTS ANIMATION - END ********












function xrAnimation() {
	this.uniqueID = 0;
	this.finished = false;
	this.first_time = true;
	this.internal_counter = 0;
	this.max_deltatime_allowed = 99999;	

	this.keyframes = [];

	this.push = function(keyframe) {
		this.keyframes.push(keyframe);
	}

	this.vector = function(array) {
		this.keyframes = array;
	}

	this.update = function(deltatime) {
		if(this.finished) return;
		if(this.first_time) { 
			deltatime = 0;
			this.first_time = false;
		} 

		if(deltatime > this.max_deltatime_allowed)
			this.internal_counter += this.max_deltatime_allowed;
		else
			this.internal_counter += deltatime;

		//check if animation finished
		var length = this.keyframes.length;
		if(length == 0) { this.finished = true; return; }
		//check to delete finished keyframes
		for(var i = 0; i < this.keyframes.length; i++) {
			if(this.keyframes[i].finished) {
				//delete this entry
				this.keyframes.splice(i, 1);
			} 
		}


		//length may have changed at this point
		length = this.keyframes.length;
		for(var i = 0; i < length; i++) {
			if( this.keyframes[i].start <= this.internal_counter 
			&&  this.keyframes[i].end   >= this.internal_counter) {
				var start = this.keyframes[i].start;
				var end   = this.keyframes[i].end;
				var t     = (this.internal_counter - start) / (end - start);
				this.keyframes[i].func(t);
			}

			if(this.keyframes[i].end < this.internal_counter) {
				//finalize and delete animation
				this.keyframes[i].func(1.0);
				this.keyframes[i].finished = true;
			}
		}
	}
}

function xrKeyframe(start, end, func) {
	this.end = end;
	this.start = start;
	this.func = func;
	this.finished = false;
}