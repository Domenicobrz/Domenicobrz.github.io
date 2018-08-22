function initializeMainCanvas(new_component) {
    // create main scene
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xcce0ff, 0.0003);
    
    var mainCanvasWidth  = DOMcache.mainCanvasContainer.clientWidth;
    var mainCanvasHeight = DOMcache.mainCanvasContainer.clientHeight;

    // prepare camera
    var VIEW_ANGLE = 45, ASPECT = mainCanvasWidth / mainCanvasHeight, NEAR = 1, FAR = 2000;
    camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
    scene.add(camera);
    camera.position.set(0, 100, 300);
    camera.lookAt(new THREE.Vector3(1,0,0));
    
    // prepare renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mainCanvasWidth, mainCanvasHeight);
    renderer.setClearColor(scene.fog.color);
    
    // prepare container
    var container = document.createElement('div');
    DOMcache.mainCanvasContainer.appendChild(container);
    container.appendChild(renderer.domElement);
}


function mainCanvasRender() {
    if (renderer) {
        renderer.render(scene, camera);
    }
}


function onMainCanvasResize() {
    // disable all renderers, this will make sure we get the right size of the canvases containers
    renderer.domElement.style.display = "none";
    
    var containerWidth = DOMcache.mainCanvasContainer.clientWidth;
    var containerHeight = DOMcache.mainCanvasContainer.clientHeight;
    
    camera.aspect = containerWidth / containerHeight;
    camera.updateProjectionMatrix();
    
    /* Resize renderers */
    renderer.setSize( containerWidth, containerHeight );

    renderer.domElement.style.display = "block";
}