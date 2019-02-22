var renderer;
var camera;
var scene;
var planesScene;
var compositeScene;
var FXAAScene;
var controls;
var clock;

var framebuffer1;
var planesFramebuffer;
var compositeFramebuffer;

var planemat;

function initTHREE() {
    renderer = new THREE.WebGLRenderer( { antialias: false /*, alpha: true*/ } );
    // renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( innerWidth, innerHeight );
    renderer.domElement.style.position = "relative";
    document.querySelector(".main-canvas-container").appendChild( renderer.domElement );


    camera = new THREE.PerspectiveCamera( 20, innerWidth / innerHeight, 1, 200 );
    camera.position.set(0.8, 3.7, 10);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    // scene.background = new THREE.Color(0x151515);
    planesScene = new THREE.Scene();
    planesScene.background = new THREE.Color(0xffffff);
    compositeScene = new THREE.Scene();
    FXAAScene = new THREE.Scene();

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target = new THREE.Vector3(0.8, 1.85, 0);
    controls.maxDistance = 8;
    controls.minDistance = 3;


    clock = new THREE.Clock();


    framebuffer1 = new THREE.WebGLRenderTarget( innerWidth, innerHeight, { minFilter: THREE.NearestFilter, 
                                                                           magFilter: THREE.LinearFilter });
    planesFramebuffer = new THREE.WebGLRenderTarget( innerWidth, innerHeight, { minFilter: THREE.NearestFilter, 
                                                                                magFilter: THREE.LinearFilter });
    compositeFramebuffer = new THREE.WebGLRenderTarget( innerWidth, innerHeight, { minFilter: THREE.NearestFilter, 
                                                                                   magFilter: THREE.LinearFilter });          

    var planegeo = new THREE.PlaneBufferGeometry(2, 2);
    planemat = new THREE.ShaderMaterial({
        uniforms: {
            texture: { value: framebuffer1.texture },
            planesTexture: { value: planesFramebuffer.texture },
            time: { value: 0 }
        },
    
        vertexShader:   compositeVertexShader,
        fragmentShader: compositeFragmentShader,
    });
    var planemesh = new THREE.Mesh(planegeo, planemat);
    compositeScene.add(planemesh);



    var fxaaplanegeo = new THREE.PlaneBufferGeometry(2, 2);
    var fxaaplanemat = new THREE.ShaderMaterial({
        uniforms: {
            texture: { value: compositeFramebuffer.texture },
        },
    
        vertexShader:   FXAAVertexShader,
        fragmentShader: FXAAFragmentShader,
    });
    var fxaaplanemesh = new THREE.Mesh(fxaaplanegeo, fxaaplanemat);
    FXAAScene.add(fxaaplanemesh);


    // createFlamePlanes();
    loadAssets();
}



var meshTargetPhi  = 0;
var meshTargetTheta  = 0;
function render(now) {
    requestAnimationFrame(render);

    controls.update();

    planemat.uniforms.time.value = now;


    var deltatime = clock.getDelta();
    if (deltatime > 0.5) deltatime = 0.5;
    
    var meshCurrentPhi = pegasusMesh.rotation.y;
    meshCurrentPhi += (meshTargetPhi - meshCurrentPhi) * deltatime * 2;
    
    var meshCurrentTheta = pegasusMesh.rotation.x;
    meshCurrentTheta += (meshTargetTheta - meshCurrentTheta) * deltatime * 2;

    pegasusMesh.rotation.set(meshCurrentTheta, meshCurrentPhi, 0);
    planesMesh.rotation.set(meshCurrentTheta, meshCurrentPhi, 0);
    linepegasusMesh.rotation.set(meshCurrentTheta, meshCurrentPhi, 0);



    renderer.render( scene, camera, framebuffer1 );
    renderer.render( planesScene, camera, planesFramebuffer );
    renderer.render( compositeScene, camera, compositeFramebuffer );
    renderer.render( FXAAScene, camera );
}

var pegasusMesh;
var planesMesh;
var linepegasusMesh;
function loadAssets() {


    var assetsToLoad = 6;
    var assetsDownloaded = 0;

    var backgroundTexture;
    var aomapTexture;
    var radianceTexture;

    window.addEventListener("mousemove", mouseMove);
    function mouseMove(e) {
        var phi = e.clientX / innerWidth * 2.0 - 1.0 - 0.3;
        phi *= 0.2;
        meshTargetPhi = phi;

        var theta = e.clientY / innerHeight * 2.0 - 1.0;
        theta *= 0.15;
        meshTargetTheta = theta;
    }

    new THREE.OBJLoader().load(
        "assets/models/planes3.obj",
        function ( object ) {

            var geometry = object.children[0].geometry;
            var material = new THREE.ShaderMaterial({
                uniforms: { },
                vertexShader:   planesVertexShader,
                fragmentShader: planesFragmentShader,
                side: THREE.DoubleSide,
                transparent: true,
                depthWrite: false,
            });

            planesMesh = new THREE.Mesh(geometry, material);   
            planesScene.add(planesMesh);             
            assetDownloaded();
        }
    );

    function loadHorse() {
        new THREE.OBJLoader().load(
            "assets/models/cleanhorse-uv.obj",
            function ( object ) {


                var uvx;
                var uvy;
                var imageWidth  = 1920;
                var imageHeight = 1280;

                var screenAspect = innerWidth / innerHeight;
                var imageAspect  = imageWidth / imageHeight;

                if(screenAspect > imageAspect) {
                    uvx = 1;
                    uvy = 1 * imageAspect / screenAspect;
                } else {
                    uvx = 1;
                    uvy = 1;
                }

                // var uvx = 1, uvy = 1;
                // var sar = innerWidth / innerHeight;
                // if (sar < 2.25) {
                //     uvx /= 2.25 / (sar);
                // } else {
                //     uvy /= 0.444 / (innerHeight / innerWidth);
                // }

                var geometry = object.children[0].geometry;
                var material = new THREE.ShaderMaterial({

                    uniforms: {
                        uvScale: { type: "2f", value: new THREE.Vector2(uvx, uvy) },
                        texture: { type: "t", value: backgroundTexture },
                        aoTexture: { value: aomapTexture },
                        radTexture: { value: radianceTexture }
                    },
                
                    vertexShader:   meshVertexShader,
                    fragmentShader: meshFragmentShader
                });

                pegasusMesh = new THREE.Mesh(geometry, material);                
                assetDownloaded();
            }
        );
    }

    new THREE.OBJLoader().load(
        "assets/models/horse_planes_occluder.obj",
        function ( object ) {


            var geometry = object.children[0].geometry;
            var material = new THREE.ShaderMaterial({
                vertexShader:   planesHorseVertexShader,
                fragmentShader: planesHorseFragmentShader,
                // since this material is not transparent, it will be automatically drawn before the planes
            });

            linepegasusMesh = new THREE.Mesh(geometry, material);
            // linepegasusMesh.scale.set(0.99, 0.99, 0.99);                
            // linepegasusMesh.position.set(0, 0, 0.01);                
            assetDownloaded();
        }
    );
    
    // new THREE.TextureLoader().load("assets/textures/pexels-photo-804954.jpeg", function(texture) {
    // new THREE.TextureLoader().load("assets/textures/pexels-photo-1095826(1).jpeg", function(texture) {
    new THREE.TextureLoader().load("assets/textures/pexels-photo-374684.jpeg", function(texture) {
    // new THREE.TextureLoader().load("assets/textures/pexels-photo-804954-1920.jpeg", function(texture) {
        texture.needsUpdate = true;
        // prevents non-power-of-two rezising
        texture.generateMipmaps = false;
        texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.minFilter = THREE.LinearFilter;    
        backgroundTexture = texture;
        assetDownloaded();

        // required to make sure the texture doesn't end up being undefined
        loadHorse();
    });
    // var video = document.getElementById( 'mainvideo' );
    // var texture = new THREE.VideoTexture(video);
    // texture.needsUpdate = true;
    // texture.minFilter = THREE.LinearFilter;
    // texture.magFilter = THREE.LinearFilter;
    // texture.format = THREE.RGBFormat;
    // texture.crossOrigin = 'anonymous';
    // backgroundTexture = texture;
    // assetDownloaded();    

   


    new THREE.TextureLoader().load("assets/textures/aomap1.png", function(texture) {
        aomapTexture = texture;
        assetDownloaded();
    });

    new THREE.TextureLoader().load("assets/textures/radiance5.png", function(texture) {
        radianceTexture = texture;
        assetDownloaded();
    });



    function assetDownloaded() {
        assetsToLoad -= 1;
        assetsDownloaded++;
        console.log(assetsToLoad);

        // if we downloaded the last asset make sure we call render(); before we call downloadSectionUpdate
        if(assetsToLoad !== 0)
            downloadingSectionUpdate(assetsDownloaded);

        if(assetsToLoad !== 0) return;


        // from now on every asset was downloaded
        scene.add(pegasusMesh);

        // will be used to create a proper depth-buffer over planesFramebuffer
        planesScene.add(linepegasusMesh);


        render();


        setTimeout(() => {
            downloadingSectionUpdate(assetsDownloaded);
        }, 450);
    }
}