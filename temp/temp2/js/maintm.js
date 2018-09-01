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

    
    // SHOULD BE ACTIVE IN THE DESKTOP VERSION
    // renderer.gammaInput = false;
    // renderer.gammaOutput = true;
    
    // SHOULD BE CONTROLLED WITH DATGUI.js
    // SHOULD BE CONTROLLED WITH DATGUI.js
    // renderer.toneMappingExposure = params.exposure;



	camera = new THREE.PerspectiveCamera( 20, innerWidth / innerHeight, 1, 200 );
	camera.position.z = 80;
	camera.position.y = 20;



    scene = new THREE.Scene();



    sceneCube = new THREE.Scene();
    cameraCube = new THREE.PerspectiveCamera( 70, innerWidth / innerHeight, 1, 1000 );


    // prepare controls (OrbitControls)
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target = new THREE.Vector3(0, 0, 0);
    controls.maxDistance = 2000;
    
    // prepare clock
    clock = new THREE.Clock();
    
    // prepare stats
    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left     = '10px';
    stats.domElement.style.bottom   = '10px';
    stats.domElement.style.zIndex   = 1;
    document.querySelector(".main-canvas-container").appendChild( stats.domElement );




    textureLoader = new THREE.TextureLoader();
    // cubeTextureLoader = new THREE.CubeTextureLoader();
    
    // exrLoader = new THREE.EXRLoader();
    // exrLoader.load( 'assets/envmaps/piz_compressed.exr', function ( texture ) {

    //     texture.minFilter = THREE.NearestFilter;
    //     texture.magFilter = THREE.NearestFilter;
    //     texture.encoding = THREE.LinearEncoding;

    //     var cubemapGenerator = new THREE.EquirectangularToCubeGenerator( texture, 512 );
    //     var cubeMapTexture = cubemapGenerator.update( renderer );

    //     var pmremGenerator = new THREE.PMREMGenerator( cubeMapTexture );
    //     pmremGenerator.update( renderer );

    //     var pmremCubeUVPacker = new THREE.PMREMCubeUVPacker( pmremGenerator.cubeLods );
    //     pmremCubeUVPacker.update( renderer );

    //     exrCubeRenderTarget = pmremCubeUVPacker.CubeUVRenderTarget;

    //     texture.dispose();
    //     cubemapGenerator.dispose();
    //     pmremGenerator.dispose();
    //     pmremCubeUVPacker.dispose();


    //     // loadModel();
    // } );


    // new THREE.TextureLoader().load( 'assets/envmaps/1/the_sky_is_on_fire_2k.jpg', function ( texture ) {

    //     // pngEquiRectTexture = texture;
    //     // pngEquiRectTexture.mapping = THREE.EquirectangularReflectionMapping;
    //     // pngEquiRectTexture.magFilter = THREE.LinearFilter;
    //     // pngEquiRectTexture.minFilter = THREE.LinearMipMapLinearFilter;
    //     texture.encoding = THREE.sRGBEncoding;


    //     texture.minFilter = THREE.NearestFilter;
    //     texture.magFilter = THREE.NearestFilter;
    //     // texture.encoding = THREE.LinearEncoding;

    //     var cubemapGenerator = new THREE.EquirectangularToCubeGenerator( texture, 512 );
    //     window.cubeMapTexture = cubemapGenerator.update( renderer );

    //     var pmremGenerator = new THREE.PMREMGenerator( cubeMapTexture );
    //     pmremGenerator.update( renderer );

    //     var pmremCubeUVPacker = new THREE.PMREMCubeUVPacker( pmremGenerator.cubeLods );
    //     pmremCubeUVPacker.update( renderer );

    //     window.exrCubeRenderTarget = pmremCubeUVPacker.CubeUVRenderTarget;



    //     let shader = THREE.ShaderLib.cube;
    //     shader.uniforms.tCube.value = cubeMapTexture;

    //     let vshader = `
    //     varying vec3 vWorldPosition;
    //     #include <common>
    //     void main() {
    //     	// vWorldPosition = transformDirection( position, modelMatrix );
    //     	vWorldPosition = position;
    //     	#include <begin_vertex>
    //     	#include <project_vertex>
    //     	gl_Position.z = gl_Position.w;
    //     }`;

    //     let material = new THREE.ShaderMaterial({
    
    //         vertexShader: vshader,
    //         fragmentShader: shader.fragmentShader,
    //         uniforms: shader.uniforms,
    //         depthWrite: false,
    //         side: THREE.BackSide
    //     });

    
    //     cubeMesh = new THREE.Mesh( new THREE.BoxBufferGeometry( 100, 100, 100 ), material );
    //     // cubeMesh.rotateY(Math.PI);
    //     cubeMesh.scale.set(-1, 1, 1);
    //     sceneCube.add( cubeMesh );



    //     loadModel();

    // } );


    var path = "assets/envmaps/3/";
				var format = '.jpg';
				var urls = [
						path + 'posx' + format, path + 'negx' + format,
						path + 'posy' + format, path + 'negy' + format,
						path + 'posz' + format, path + 'negz' + format
					];
    
    window.reflectionCube = new THREE.CubeTextureLoader().load( urls, function(texture) {
        var pmremGenerator = new THREE.PMREMGenerator( texture );
        pmremGenerator.update( renderer );

        var pmremCubeUVPacker = new THREE.PMREMCubeUVPacker( pmremGenerator.cubeLods );
        pmremCubeUVPacker.update( renderer );

        window.exrCubeRenderTarget = pmremCubeUVPacker.CubeUVRenderTarget;



        let shader = THREE.ShaderLib.cube;
        shader.uniforms.tCube.value = exrCubeRenderTarget.texture;
        
        let vshader = `
        varying vec3 vWorldPosition;
        #include <common>
        void main() {
        	// vWorldPosition = transformDirection( position, modelMatrix );
        	vWorldPosition = position;
        	#include <begin_vertex>
        	#include <project_vertex>
        	gl_Position.z = gl_Position.w;
        }`;

        let material = new THREE.ShaderMaterial({
        
            vertexShader: vshader,
            fragmentShader: shader.fragmentShader,
            uniforms: shader.uniforms,
            depthWrite: false,
            side: THREE.BackSide
        });

        cubeMesh = new THREE.Mesh( new THREE.BoxBufferGeometry( 100, 100, 100 ), material );
        // cubeMesh.rotateY(Math.PI);
        cubeMesh.scale.set(-1, 1, 1);
        sceneCube.add( cubeMesh );



        loadModel(exrCubeRenderTarget.texture);
    } );
    reflectionCube.format = THREE.RGBFormat;


    // scene.background = reflectionCube;



    initGUI();
    animate();
}


var cshader = `
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldPosition;
void main() {
	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ), 5.0 );
	gl_FragColor.a *= opacity;
}
`;



// Animate the scene
function animate() {
    requestAnimationFrame(animate);


    controls.update(clock.getDelta());
    stats.update();

    
    cameraCube.rotation.copy( camera.rotation );

    renderer.render( sceneCube, cameraCube);
    renderer.render( scene, camera );
}

function loadModel(texture) {
    var loader = new THREE.CTMLoader();
    
    loader.load( "assets/models/alperson.ctm", function( geometry ) {

        window.mannequinMaterial = new THREE.MeshStandardMaterial({
            color: 0x222222,
            roughness: 0.1,
            metalness: 0.3,
            envMapIntensity: 3,
            envMap: reflectionCube,
        });
        callbackModel( geometry, 0.5, mannequinMaterial, 0, -20, 0, 0, 0 );
    }, { useWorker: false } );


    var loader2 = new THREE.OBJLoader();
    // load a resource
    loader2.load(
        // resource URL
        'assets/models/cloth5.obj',
        // called when resource is loaded
        function ( object ) {

            window.shirtMaterial = new THREE.MeshPhysicalMaterial({
                color: 0xffffff,
                roughness: 1,
                metalness: 0,
                envMapIntensity: 1.25,
                envMap: texture,
                side: THREE.DoubleSide,
            });

            callbackModel( object.children[0].geometry, 0.5, shirtMaterial, 0, -20, 0, 0, 0 );
        }
    );

    // loader.load( "assets/models/cloth.ctm", function( geometry ) {
    //     var uvs = geometry.attributes.uv.array;
    //     geometry.addAttribute( 'uv2', new THREE.BufferAttribute( uvs, 2 ) );
    //     window.shirtMaterial = new THREE.MeshStandardMaterial({
    //         color: 0xffffff,
    //         map: (new THREE.TextureLoader()).load( 'assets/textures/cloth.jpg' ),
    //         // color: [0.1, 0.05, 0.1],
    //         roughness: 1,
    //         metalness: 0.0,
    //         envMapIntensity: 1.5,
    //         envMap: reflectionCube,
    //     });
    //     // shirtMaterial.onBeforeCompile = function(shader) {
    //     //     shader.fragmentShader = shader.fragmentShader.replace("gl_FragColor = vec4( outgoingLight, diffuseColor.a );", 
    //     //                                   "gl_FragColor = vec4( reflectedLight.indirectDiffuse * 400.0, diffuseColor.a );");
    //     //     console.log(shader.fragmentShader);
    //     // };
    //     callbackModel( geometry, 0.5, shirtMaterial, 0, -20, 0, 0, 0 );
    // }, { useWorker: false } );
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


function initGUI() {
    var controller = {
        lightPosZ: 8,
        lightIntensity: 0,
        lightDecay: 2.8,
        lightColor: "#ffaa23",
        roughness: 1,
        roughnessOffs: 0,
        metallic: 0,
        metallicOffs: 0,
        reflectivity: 0.9,
        envMapIntensity: 1.25,
        clearCoat: 0.0,
        clearCoatRoughness: 0.0,
        aoMapIntensity: 1.3,
    };

    var gui = new dat.GUI();
    // var f1 = gui.addFolder('Light Setup');
    var f2 = gui.addFolder('PBR Material');

    // f1.add(controller, 'lightPosZ', 0, 200).onChange(function(value) {
    //     // light.position.set( 0, 50, value );   
    // });
    // f1.add(controller, 'lightIntensity', 0, 10).onChange(function(value) {
    //     // light.power = value;
    // });
    // f1.add(controller, 'lightDecay', 0, 10).onChange(function(value) {
    //     // light.decay = value;
    // });
    // f1.addColor(controller, 'lightColor').onChange(function(value) {
    //     // light.color = new THREE.Color(value);
    // });



    f2.add(controller, 'roughness', 0, 1).onChange(function(value) {
        shirtMaterial.roughness = value;
    });   
    f2.add(controller, 'metallic', 0, 1).onChange(function(value) {
        shirtMaterial.metalness = value;
    });  
    f2.add(controller, 'reflectivity', 0, 1).onChange(function(value) {
        shirtMaterial.reflectivity = value;
    });
    f2.add(controller, 'envMapIntensity', 0, 5).onChange(function(value) {
        shirtMaterial.envMapIntensity = value;
    });
    // f2.add(controller, 'clearCoat', 0, 1).onChange(function(value) {
    // });
    // f2.add(controller, 'clearCoatRoughness', 0, 1).onChange(function(value) {
    // });
    // f2.add(controller, 'aoMapIntensity', 0, 3).onChange(function(value) {
    // });

    // f1.open();
    f2.open();
}
