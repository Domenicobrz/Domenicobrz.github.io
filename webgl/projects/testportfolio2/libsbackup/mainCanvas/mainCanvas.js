window.addEventListener('load', init);

/*
TODO: Filter blur sulle lettere

inspiration:
http://alexandrerochet.com/
http://maxwellito.github.io/vivus/



music genre: lullaby 
instrument: Carillon
https://www.youtube.com/watch?v=b3BMp7yBqws
*/


function init() {

    var canvas = document.getElementById("mainCanvas");
	canvas.width  = innerWidth;
	canvas.height = innerHeight;

	var names = ["webgl2"];

	for(var i in names)
    {
        try 
        {
            gl = canvas.getContext(names[i], { /* alpha: true, preserveDrawingBuffer: true */  });

            if (gl && typeof gl.getParameter == "function") 
            {
                // WebGL is enabled 
                break;
            }
        } catch(e) { }
    }

    if(gl === null)
        alert("could not initialize WebGL");





    window.camera = new createCamera();
    camera.pos = [0, 0, 45];
    // camera.autoCentered = true;
	// camera.autoRotate = true;
    // camera.radius = 45;
    window.step   = Float32Array.BYTES_PER_ELEMENT;
    window.zoom   = 45;

    window.projection = mat4.create(); 
    window.model      = mat4.create(); 
    window.view       = mat4.create(); 
    mat4.perspective(projection, 45 * Math.PI / 180, innerWidth / innerHeight, 0.1, 1000);


    /* custom structures */
    window.mouseController = new MouseController();
    window.musicBox        = new MusicBox('assets/music/test.mp3');

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



	requestAnimationFrame(draw);
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





// a new hashing function is needed
// lines needs to be in a transform feedback, points (at least as of now, think about it again) do not.
// fix a bit the code and separate it, it already stinks
// separate program's creation from the icosahedron creation
// http://www.hxa.name/minilight/
// https://geometrian.com/programming/tutorials/radcol/index.php