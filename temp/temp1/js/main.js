var initialVertices = [];

var scene;      // used primarily by mainCanvas.js
var camera;     // shared between canvases
var renderer;   
var controls;
var clock;
var stats;
var components = { };
var lastComponent = "d_00";

// secondary canvases refers to the slideable canvases displayed in the lower part of the prototype
// every global variable related to those canvases will be prefixed with "sec" 
// e.g.:   secScenes, secCanvas1, secCameraCube  etc.
var secScenes = [];
var secCamera;
var secCameras = [];
var secRenderer;
var secCanvasCount = 0;
var secCanvasWidth; 
var secCanvasHeight;
var secSceneWidth;

var DOMcache = { };
var mainSlider;


if (window.addEventListener)
    window.addEventListener('load', initializePage, false);
else if (window.attachEvent)
    window.attachEvent('onload', initializePage);
else window.onload = initializePage;


function initializePage() {
    init('0');
}


function init (new_component) { // Initialization


    initializeDOMCache();

    
    initializeMainCanvas(new_component);

    window.addEventListener("resize", onResize);


    animate();
}

// Animate the scene
function animate() {
    requestAnimationFrame(animate);


    mainCanvasRender();
    // secondaryCanvasesRender();
}

function initializeDOMCache() {
    DOMcache = {
        mainCanvasContainer: document.querySelector(".main-canvas-container"),
        // DOM element of the *first* secondary canvas, it does not represent the container of all the secondary canvases 
        secCanvasContainer1: document.querySelector(".sec-canvas-1"),
    };
}

function onResize() {
    onMainCanvasResize();
    // onSecondaryCanvasesResize();
}

// NON-IMPLEMENTED CODE 

// document.onkeydown = function(evt) {
//     evt = evt || window.event;

//     // we use number keys 1-7 to trigger different models showing up, and since some people don't have a numberpad, we accept the number keys from the top of the keyboard as well

//     /*
//     if (evt.keyCode == 97 || evt.keyCode == 49) {
//       setComponentValue('m<?php echo (3*$multiplier); ?>');
//     }

//     if (evt.keyCode == 98 || evt.keyCode == 50) {
//       setComponentValue('m<?php echo (2*$multiplier); ?>');
//     }

//     if (evt.keyCode == 99 || evt.keyCode == 51) {
//       setComponentValue('m<?php echo (1*$multiplier); ?>');
//     }

//     if (evt.keyCode == 100 || evt.keyCode == 52) {
//       setComponentValue('0');
//     }

//     if (evt.keyCode == 101 || evt.keyCode == 53) {
//       setComponentValue('<?php echo (1*$multiplier); ?>');
//     }

//     if (evt.keyCode == 102 || evt.keyCode == 54) {
//       setComponentValue('<?php echo (2*$multiplier); ?>');
//     }

//     if (evt.keyCode == 103 || evt.keyCode == 55) {
//       setComponentValue('<?php echo (3*$multiplier); ?>');
//     }

//     if (evt.keyCode == 13) {
//       goToNextComponent(selected_component);
//     }
//     */
// };

// // we need to force download of the file, so we're pointing to a PHP script that sets the content-disposition appropriately for a download
// function downloadModel() {
//     window.open(model_download_path+selected_component+'.obj', '_blank');
// }

// // when updating the multiplier, send us to the right page
// function modifyMultiplier(selected_component) {
//     window.location = multiplier_link + '&multiplier=' + document.getElementById('multiplier').value;
// }
