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

window.addEventListener('load', init);

function init () { // Initialization

    renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
    renderer.autoClear = false;    
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( innerWidth, innerHeight );
    renderer.domElement.style.position = "relative";
    document.querySelector(".main-canvas-container").appendChild( renderer.domElement );

    renderer.gammaInput = false;
    renderer.gammaOutput = true;

	camera = new THREE.PerspectiveCamera( 20, innerWidth / innerHeight, 1, 200 );
	camera.position.z = 80;
	camera.position.y = 20;

    scene = new THREE.Scene();
    

    sceneCube = new THREE.Scene();
    cameraCube = new THREE.PerspectiveCamera( 80, innerWidth / innerHeight, 1, 1000 );


    // prepare controls (OrbitControls)
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target = new THREE.Vector3(1, 5, 0);
    controls.maxDistance = 2000;

    
    // prepare clock
    clock = new THREE.Clock();
    
    // prepare stats
    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '10px';
    stats.domElement.style.bottom = '10px';
    stats.domElement.style.zIndex = 1;
    document.querySelector(".main-canvas-container").appendChild( stats.domElement );






    textureLoader = new THREE.TextureLoader();
    // cubeTextureLoader = new THREE.CubeTextureLoader();
    
    exrLoader = new THREE.EXRLoader();
    // exrLoader.load( 'assets/envmaps/venice_dawn_1_2k.exr', function ( texture ) {
    // new THREE.TextureLoader().load( 'assets/envmaps/2a2.jpg', function ( texture ) {
    // new THREE.TextureLoader().load( 'assets/envmaps/venice_dawn_1_2k.jpg', function ( texture ) {
    // new THREE.TextureLoader().load( 'assets/envmaps/venice_dawn_1_2a2k.jpg', function ( texture ) {
    new THREE.TextureLoader().load( 'assets/envmaps/venice_dawn_1.jpg', function ( texture ) {
        
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


        loadModel(exrCubeRenderTarget.texture);
        // loadModel(cubeMapTexture);//exrCubeRenderTarget.texture);
    } );

    new THREE.TextureLoader().load( 'assets/envmaps/venice_dawn_1.jpg', function ( texture ) {

        pngEquiRectTexture = texture;
        pngEquiRectTexture.mapping = THREE.EquirectangularReflectionMapping;
        pngEquiRectTexture.magFilter = THREE.LinearFilter;
        pngEquiRectTexture.minFilter = THREE.LinearMipMapLinearFilter;
        // texture.encoding = THREE.sRGBEncoding;

        var cubemapGenerator = new THREE.EquirectangularToCubeGenerator( texture, 512 );
        var cubeMapTexture = cubemapGenerator.update( renderer );

        let shader = THREE.ShaderLib.cube;
        shader.uniforms.tCube.value = cubeMapTexture;

        let material = new THREE.ShaderMaterial({
     
            fragmentShader: shader.fragmentShader,
            vertexShader: shader.vertexShader,
            uniforms: shader.uniforms,
            depthWrite: false,
            side: THREE.BackSide
     
        }),


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
        roughness: 0.8,
        metalness: 0,
        reflectivity: 0.9,
        envMapIntensity: 1.2,
        clearCoat: 0.0,
        clearCoatRoughness: 0.0,
        aoMapIntensity: 1.3,
    };

    var gui = new dat.GUI();
    var f2 = gui.addFolder('Shirt Material');


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







function loadModel(texture) {
    var loader = new THREE.CTMLoader();
    
    loader.load( "assets/models/alperson.ctm", function( geometry ) {

        // var material = new THREE.MeshLambertMaterial( { color: 0xffaa00, map: textureLoader.load( "textures/UV_Grid_Sm.jpg" ), envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.3 } );
        var material = new THREE.MeshPhysicalMaterial( { 
            color: 0x050505,
            envMap: texture,
            roughness: 0.2,
            metalness: 0.2,
            envMapIntensity: 1.0,
            reflectivity: 0.8,
        } );
        callbackModel( geometry, 0.5, material, 0, -17, -3, 0, 0 );

    }, { useWorker: false } );


    loader.load( "assets/models/cloth.ctm", function( geometry ) {

        var uvs = geometry.attributes.uv.array;
        geometry.addAttribute( 'uv2', new THREE.BufferAttribute( uvs, 2 ) );

        window.shirtMaterial = new THREE.MeshPhysicalMaterial( 
            {   color: 0xffffff, 
                map: textureLoader.load( "assets/textures/cloth.jpg" ), 
                // aoMap: textureLoader.load( "assets/textures/aomap3.png" ),
                // aoMapIntensity: 1.3,
                envMap: texture,
                // combine: THREE.MixOperation, 
                roughness: 0.8,
                metalness: 0,
                envMapIntensity: 1.0,
                // reflectivity: 0.9,
                side: THREE.DoubleSide
        } );

        // shirtMaterial.onBeforeCompile = function(object, renderer) {
        //     object.fragmentShader = shaderTestString;
        // };

        // var material = new THREE.MeshLambertMaterial( { color: 0xff00aa, map: textureLoader.load( "assets/textures/cloth.jpg" ), envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.3 } );
        callbackModel( geometry, 0.5, shirtMaterial, 0, -17, -3, 0, 0 );

    }, { useWorker: false } );
}





function callbackModel( geometry, s, material, x, y, z, rx, ry ) {
    var mesh = new THREE.Mesh( geometry, material );

    mesh.position.set( x, y, z );
    mesh.scale.set( s, s, s );
    mesh.rotation.x = rx;
    mesh.rotation.z = ry;

    // mesh.castShadow = true;
    // mesh.receiveShadow = true;

    scene.add( mesh );
}