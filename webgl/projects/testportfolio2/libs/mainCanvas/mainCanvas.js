window.addEventListener('load', mainCanvasInit);

var gl;

function mainCanvasInit() {



// return;


/*

FILTER: BLUR  SULLE LETTERE ED ANIMARE IL TUTTO  !!!

http://alexandrerochet.com/



http://maxwellito.github.io/vivus/

https://stackoverflow.com/questions/13163129/ray-triangle-intersection



fai la sfera come in frosti (generative art pg 105 credo) e applica l'overlay che c'è in wgl/8/ quando c'è il tema dark nella pagina





lullaby il genre 
Carillon lo strumento
https://www.youtube.com/watch?v=b3BMp7yBqws

*/


    if(blockCanvasOnMobiles()) return;


    // stealing protection
    if(!document.querySelector(".mhCentral")) return;



    window.canvas = document.getElementById("mainCanvas");
    // window.gl;
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

    if(gl === null) alert("could not initialize WebGL");





    window.camera = new createCamera();
    window.cameraZ = 45;
    camera.pos = [0, 0, cameraZ];
    // camera.autoCentered = true;
	// camera.autoRotate = true;
    // camera.radius = 45;
    window.step   = Float32Array.BYTES_PER_ELEMENT;
    window.zoom   = 45;

    window.projection = mat4.create(); 
    window.model      = mat4.create(); 
    window.view       = mat4.create(); 
    window.screenRatio = innerWidth / innerHeight;
    mat4.perspective(projection, 45 * Math.PI / 180, screenRatio, 0.1, 1000);


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



    setTimeout(function() {
        musicBox.start();
        removeInitialCurtain();
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
    footerSVGHider();   /* defined in footer.js */

    

    // draw_background(now, deltatime);

    // console.time('lol');
    draw_static_background(now, deltatime);
    draw_icosahedron(now, deltatime);
    draw_icosahedron_lines(now, deltatime);
    draw_luminous_points(now, deltatime);

    postprocess_blit_in_main_FBO(now, deltatime);
    // console.timeEnd('lol');
}


// will be called by main.js
function canvasResize() {
    if(!canvas) return;

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


    if(screenRatio < 1.2 && innerWidth < 850) {
        window.cameraZ = 65;
        camera.pos = [0, 0, cameraZ];
    } else {
        window.cameraZ = 45;
        camera.pos = [0, 0, cameraZ];    
    }
}


// we won't procede further if we're dealing with mobiles
function blockCanvasOnMobiles() {
    var isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

    if(isMobile) {
        var background = document.createElement("div");
        background.style.background = "red";

        document.body.insertAdjacentElement("afterbegin", background); 
        document.querySelector(".mhMusicBars").style.display = "none";
    }

    return isMobile;
}



function removeInitialCurtain() {
    var curtainDOM = document.querySelector(".mhCurtain");
    var centralSquareDOM = document.querySelector(".mhCentralSquare");
    var siteTitleDOM = document.querySelector(".siteTitle");
    curtainDOM.classList.toggle("active");


    setTimeout(function() {
        curtainDOM.style.display = "none";
    }, 2000);


    // setTimeout(function() {
    //     centralSquareDOM.style.opacity = "1";
    //     siteTitleDOM.style.opacity = "1";
    // }, 2000);
}


// a new hashing function is needed
// lines needs to be in a transform feedback, points (at least as of now, think about it again) do not.
// fix a bit the code and separate it, it already stinks
// separate program's creation from the icosahedron creation
//http://www.hxa.name/minilight/
//https://geometrian.com/programming/tutorials/radcol/index.php