var initialVertices = [];

var scene;      // used primarily by mainCanvas.js
var sceneCube;
var camera;     // shared between canvases
var cameraCube;
var renderer;   
var controls;
var stats;
var textureLoader;
var cubeTextureLoader;
var exrLoader;
var exrCubeRenderTarget;
var pngEquiRectTexture;
var pngEquiRectTexture2;
var light;

var cubeMesh;

window.addEventListener('load', init1);

// window.addEventListener("keypress", function(e) {
//     if(e.key == "k") {
//         init();
//     }
// });


function init1() {
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.autoClear = false;    
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( innerWidth, innerHeight );
    renderer.domElement.style.position = "relative";
    renderer.gammaInput = true;
	renderer.gammaOutput = true;
	renderer.toneMapping = THREE.Uncharted2ToneMapping;
    renderer.toneMappingExposure = 0.75;
    renderer.shadowMap.enabled = true;
    // renderer.shadowMapType = THREE.PCFSoftShadowMap;
    renderer.shadowMapSoft = true;


    document.querySelector(".main-canvas-container").appendChild( renderer.domElement );

    init();
}

function init () { // Initialization


	camera = new THREE.PerspectiveCamera( 45, innerWidth / innerHeight, 5, 800 );
    let radius = 40;
    let angle  = Math.PI + 0.1;
    camera.position.x = Math.cos(angle) * radius;
    camera.position.z = Math.sin(angle) * radius;
    camera.position.y = 15;
    
    // prepare controls (OrbitControls)
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target = new THREE.Vector3(0, 12, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.rotateSpeed = 0.1;
    
    controls.minPolarAngle = 0; // radians
	controls.maxPolarAngle = 1.8; // radians
	// How far you can orbit horizontally, upper and lower limits.
	// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
	controls.minAzimuthAngle = -Infinity; // radians
    controls.maxAzimuthAngle = +Infinity; // radians
    
    controls.maxDistance = 2000;


    scene = new THREE.Scene();
    // scene.background = new THREE.Color(0xffffff);
    

    // light = new THREE.PointLight( 0xffaa23, 1, 10000 );
    // light.position.set( 44, 61, 55 );
    // light.power = 3.7;
    // light.castShadow = true;
    // light.shadowCameraVisible = true;
    // // light.decay = 2.8; 
    // scene.add( light );


    // light = new THREE.DirectionalLight( 0xffaa23 );
    // light.position.set( 100, 100, 100 );
    // light.power = 3.7;
    // // light.target = new THREE.Vector3(0,0,0);

    // light.castShadow = true;

    // light.shadow.mapSize.width = 1024;
    // light.shadow.mapSize.height = 1024;

    // light.shadow.camera.near = 5;
    // light.shadow.camera.far = 3500;
    // light.shadow.camera.fov = 50;

    // light.shadowCameraVisible = true;

    light = new THREE.DirectionalLight(0xffaa23, 0.7);
    light.position.set(40, 29, 31);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    light.shadowDarkness = 0.5;
    // these six values define the boundaries of the yellow box seen above
    light.shadowCameraNear   = 30;
    light.shadowCameraFar    = 150;
    light.shadowCameraLeft   = -20.5;
    light.shadowCameraRight  = 20.5;
    light.shadowCameraTop    = 30.5;
    light.shadowCameraBottom = -20.5;

    // scene.add(new THREE.CameraHelper( light.shadow.camera ));

    scene.add( light );



    sceneCube = new THREE.Scene();
    cameraCube = new THREE.PerspectiveCamera( 45, innerWidth / innerHeight, 1, 1000 );




    // var light = new THREE.SpotLight( 0xffffff, 1.2, 1550, Math.PI / 6 );
    // light.position.set( 100, 300, 100 );
    // scene.add(light);




    
    // prepare clock
    clock = new THREE.Clock();
    
    // prepare stats
    stats                           = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left     = '10px';
    stats.domElement.style.bottom   = '10px';
    stats.domElement.style.zIndex   = 1;
    document.querySelector(".main-canvas-container").appendChild( stats.domElement );






    textureLoader = new THREE.TextureLoader();
    cubeTextureLoader = new THREE.CubeTextureLoader();

    exrLoader = new THREE.EXRLoader();
    exrLoader.load( 'assets/envmaps/san_giuseppe_bridge_1k.exr', function ( texture ) {
    // exrLoader.load( 'assets/envmaps/cayley_interior_2k.exr', function ( texture ) {
     
        texture.minFilter = THREE.NearestFilter;
        texture.magFilter = THREE.NearestFilter;
        texture.encoding = THREE.LinearEncoding;

        var cubemapGenerator = new THREE.EquirectangularToCubeGenerator( texture, 512 );
        var cubeMapTexture = cubemapGenerator.update( renderer );

        var pmremGenerator = new THREE.PMREMGenerator( cubeMapTexture );
        pmremGenerator.update( renderer );

        var pmremCubeUVPacker = new THREE.PMREMCubeUVPacker( pmremGenerator.cubeLods );
        pmremCubeUVPacker.update( renderer );

        exrCubeRenderTarget = pmremCubeUVPacker.CubeUVRenderTarget;

        texture.dispose();
        cubemapGenerator.dispose();
        pmremGenerator.dispose();
        pmremCubeUVPacker.dispose();

        renderer.setSize(innerWidth, innerHeight);


        loadModel(exrCubeRenderTarget.texture);
    } );


    new THREE.TextureLoader().load( 'assets/envmaps/san_giuseppe_bridge.jpg', function ( texture ) {
    // new THREE.TextureLoader().load( 'assets/envmaps/cayley_interior_2k.jpg', function ( texture ) {

        let envmapFilters = new EnvmapFilters({
            blur: 0.2,
            brightness: 0.97,//0.95,
            size: 1024,
        }, renderer);

        texture   = envmapFilters.applyFilters(texture);


        pngEquiRectTexture           = texture;
        pngEquiRectTexture.mapping   = THREE.EquirectangularReflectionMapping;
        pngEquiRectTexture.magFilter = THREE.LinearFilter;
        // pngEquiRectTexture.minFilter = THREE.LinearMipMapLinearFilter;
        // texture.encoding = THREE.sRGBEncoding;

        var cubemapGenerator = new THREE.EquirectangularToCubeGenerator( texture, 512 );
        var cubeMapTexture   = cubemapGenerator.update( renderer );
        
        let shader = THREE.ShaderLib.cube;
        shader.uniforms.tCube.value = cubeMapTexture;


        let material = new THREE.ShaderMaterial({
    
            fragmentShader : shader.fragmentShader,
            vertexShader   : shader.vertexShader,
            uniforms       : shader.uniforms,
            depthWrite     : false,
            side           : THREE.BackSide
    
        });
        material.uniforms.tFlip.value = 1;

        cubeMesh = new THREE.Mesh( new THREE.BoxBufferGeometry( 100, 100, 100 ), material );
        // cubeMesh.rotateY(Math.PI);
        sceneCube.add( cubeMesh );
    } );



    initGUI();
    animate();
}



// Animate the scene
function animate() {
    requestAnimationFrame(animate);


    controls.update(clock.getDelta());
    stats.update();

    
    cameraCube.rotation.copy( camera.rotation );

    renderer.render( sceneCube, cameraCube);
    renderer.render( scene, camera );
}


function initGUI() {
    var controller = {
        lightPosX: 8,
        lightPosY: 8,
        lightPosZ: 8,
        lightIntensity: 0,
        lightDecay: 2.8,
        lightColor: "#ffaa23",
        roughness: 0.8,
        metalness: 0,
        reflectivity: 0.9,
        envMapIntensity: 1.2,
        clearCoat: 0.0,
        clearCoatRoughness: 0.0,
        aoMapIntensity: 1.3,
    };

    var gui = new dat.GUI();
    // var f1 = gui.addFolder('Light Setup');
    var f2 = gui.addFolder('Pole Material');

    // f1.add(controller, 'lightPosZ', -100, 100).onChange(function(value) {
    //     light.position.set( light.position.x, light.position.y, value );   
    // });
    // f1.add(controller, 'lightPosX', -100, 100).onChange(function(value) {
    //     light.position.set( value, light.position.y, light.position.z );   
    // });
    // f1.add(controller, 'lightPosY', 0, 150).onChange(function(value) {
    //     light.position.set( light.position.x, value, light.position.z );   
    // });
    // f1.add(controller, 'lightIntensity', 0, 10).onChange(function(value) {
    //     light.power = value;
    // });
    // f1.add(controller, 'lightDecay', 0, 10).onChange(function(value) {
    //     light.decay = value;
    // });
    // f1.addColor(controller, 'lightColor').onChange(function(value) {
    //     light.color = new THREE.Color(value);
    // });


    f2.add(controller, 'roughness', 0, 1).onChange(function(value) {
        shirtMaterial.roughness = value;
    });   
    f2.add(controller, 'metalness', 0, 1).onChange(function(value) {
        shirtMaterial.metalness = value;
    });    
    f2.add(controller, 'reflectivity', 0, 1).onChange(function(value) {
        shirtMaterial.reflectivity = value;
    });
    f2.add(controller, 'envMapIntensity', 0, 5).onChange(function(value) {
        shirtMaterial.envMapIntensity = value;
    });
    f2.add(controller, 'clearCoat', 0, 1).onChange(function(value) {
        shirtMaterial.clearCoat = value;
    });
    f2.add(controller, 'clearCoatRoughness', 0, 1).onChange(function(value) {
        shirtMaterial.clearCoatRoughness = value;
    });
    f2.add(controller, 'aoMapIntensity', 0, 3).onChange(function(value) {
        shirtMaterial.aoMapIntensity = value;
    });

    // f1.open();
    // f2.open();
}



var equirectFragmentShader = `
    uniform sampler2D tEquirect;
    varying vec3 vWorldPosition;
    #include <common>
    void main() {
    	vec3 direction = normalize( vWorldPosition );
    	vec2 sampleUV;
    	sampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
    	sampleUV.x = atan( direction.z, -direction.x ) * RECIPROCAL_PI2 + 0.5;
    	gl_FragColor = texture2D( tEquirect, sampleUV );
    }
`;





function loadModel(hdrCubeRenderTarget) {
    var loader = new THREE.OBJLoader();
    
    // var material = new THREE.MeshLambertMaterial( { color: 0xffaa00, map: textureLoader.load( "textures/UV_Grid_Sm.jpg" ), envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.3 } );
    window.shirtMaterial = new THREE.MeshPhysicalMaterial( { 
        color: 0xffffff,
        envMap: hdrCubeRenderTarget,
        roughness: 0.23,
        metalness: 1,
        envMapIntensity: 1.8,
        reflectivity: 0.8,
    } );

    function meshScale(mesh) {
        mesh.scale.set(0.0035, 0.0035, 0.0035);
        mesh.rotation.x = -Math.PI/2;
        mesh.rotation.y = 0;

        mesh.castShadow = true;
        mesh.receiveShadow = false;
    }

    loader.load( "assets/models/MA1-B180-102-000100.obj", function( object ) {

        let mesh = object.children[0];

        meshScale(mesh);
        mesh.position.set(0, 21, 0);
        mesh.material = shirtMaterial;

        scene.add( mesh );
        // scene.add(new THREE.Mesh(new THREE.SphereGeometry(0,0, 5), shirtMaterial));
    } );

    loader.load( "assets/models/PAS-0000010.obj", function( object ) {
        let mesh = object.children[0];

        meshScale(mesh);
        mesh.material = shirtMaterial;

        scene.add( mesh );
        // scene.add(new THREE.Mesh(new THREE.SphereGeometry(0,0, 5), shirtMaterial));
        
    });








    var planeGeo = new THREE.PlaneGeometry(250, 250);
    var planeMat = new THREE.MeshPhysicalMaterial( { 
        color: 0xffffff,
        envMap: hdrCubeRenderTarget,
        map: textureLoader.load("assets/textures/ground/tile4b_basecolor.jpg", function ( texture ) {
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(15, 15);
        }),
        normalMap: textureLoader.load("assets/textures/ground/tile4b_normal-ogl.jpg", function ( texture ) {
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(15, 15);
        }),
        normalScale: new THREE.Vector2(0.9,0.9),
        aoMap: textureLoader.load("assets/textures/ground/tile4b_ao.jpg", function ( texture ) {
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(15, 15);
        }),
        roughness: 0.7,
        metalness: 0.4,
        envMapIntensity: 1.2,
    } );

    var planeMesh               = new THREE.Mesh(planeGeo, planeMat);
        planeMesh.castShadow    = false;
        planeMesh.receiveShadow = true;
        planeMesh.rotation.x    = -Math.PI / 2;




    scene.add(planeMesh);

}