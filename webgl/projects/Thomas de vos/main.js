window.addEventListener('load', pageInit);


var gl;
var points;
var step = Float32Array.BYTES_PER_ELEMENT;

var hwh;
var hww;

var nodes;
var mouseController;
var pointsNum = 950;

var perspective;
var model;
var view;

var screenRatio;

var block = true;
var videoLoaded = false;

var meshCenter = [0, 0];

// NDC domain  +1...-1
var streamstart_array = [+0.26, -0.045, +0.26, -0.095, +0.405, -0.285];
var streamstart_s = +0.26;
var streamstart_t = -0.045;
var orig_streamstart_s = +0.26;
var orig_streamstart_t = -0.045;
var canvas;
var bgvids;
var activeVideo;
var meshCenter;


var backgroundProgram;
var linesProgram;
var meshesProgram;
var meshPointsProgram;


var pointsProgram;
var points;


var currentVideo = 0;
var swappingMeshes = false;

function pageInit() {
    canvas = document.getElementById('canvas');
    canvas.width  = innerWidth; 
    canvas.height = innerHeight; 
    
    var supported = initWebGL(canvas);

    bgvids = document.getElementsByClassName("bgvid");
    activeVideo = 0;
    initVideo();    


    screenRatio = canvas.width / canvas.height;

    perspective = mat4.create();
    model       = mat4.create();
    view        = mat4.create();

    mat4.perspective(perspective, 45 * (Math.PI / 180), screenRatio, 1, 100);


    /* half world width/height */
    hwh = Math.tan((45 * Math.PI / 180) / 2) * 10; 
    hww = Math.tan((45 * Math.PI / 180) / 2) * 10 * (screenRatio);




    // createBackgroundProgram();
    nodes = new Nodes();
    createPointsProgram();
    createMeshPointsProgram();
    createMeshesProgram();
    createLinesProgram();

    // needs meshesProgram to run first
    mouseController = new MouseController();


    window.addEventListener('resize', onResize);
    onResize();

    initGUI();



    window.addEventListener('keydown', function(e) {
        if(e.key == 'k') {
            
        }
    });



    gl.enable(gl.BLEND);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    render(0);  
}



var then = 0;
function render(now) {
    requestAnimationFrame(render);
    now *= 0.001;
    var deltatime = now - then;
    then = now;



    if(block) return;

    /* check page scroll */
    var scrollY = window.pageYOffset || 
                  document.body.scrollTop ||
                  document.documentElement.scrollTop || 0;
    if(scrollY > innerHeight) return; 




    // console.time("frame");
    mouseController.update(deltatime);
    // drawBackground(now);
    drawLines(now);
    drawPoints(now, deltatime);
    drawMeshes(now, deltatime);
    drawMeshesPoints(now, deltatime);
    // console.timeEnd("frame");
}






var highpSupport = false;
function initWebGL(canvas) {
  var supported = true;
  gl = null;
  
  // Try to grab the standard context. If it fails, fallback to experimental.
  gl = canvas.getContext('webgl', { stencil: true, alpha: true }) || canvas.getContext('experimental-webgl', { stencil: true, alpha: true });
  
  // If we don't have a GL context, give up now
  if (!gl) supported = false;
  
  if(!gl.getExtension('OES_texture_float')) supported = false;

  if(gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).precision != 0) highpSupport = true;

  return supported;
}




function onResize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    screenRatio = canvas.width / canvas.height;
    
    /* preventing mobile phones from seeing the animation */
    if(screenRatio < 0.9 || innerWidth < 400) { 
        block = true;
        gl.clearColor(0.0, 0.0, 0.0, 0.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    } else if(videoLoaded) {
        block = false;
    }
    
    hww = hwh * screenRatio;

    gl.viewport(0,0, canvas.width, canvas.height);

    mat4.perspective(perspective, 45 * (Math.PI / 180), screenRatio, 1, 100);  
    
    nodes = new Nodes(hwh);  
    /* change background vertices etc if needed - else moveit to CSS */

    for(var i = 0; i < bgvids.length; i++)
        onResizeVideo(i);
}