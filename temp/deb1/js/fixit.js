var scene;      // used primarily by mainCanvas.js
var sceneCube;
var camera;     // shared between canvases
var cameraCube;
var renderer;   
var controls;

var cubeMesh;

window.addEventListener('load', init);

function init () { // Initialization

    renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
    renderer.autoClear = false;    
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( innerWidth, innerHeight );
    renderer.domElement.style.position = "relative";
    document.querySelector(".main-canvas-container").appendChild( renderer.domElement );


	camera = new THREE.PerspectiveCamera( 20, innerWidth / innerHeight, 1, 200 );
	camera.position.z = 80;
	camera.position.y = 20;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x252525);

    sceneCube = new THREE.Scene();
    cameraCube = new THREE.PerspectiveCamera( 80, innerWidth / innerHeight, 1, 1000 );


    // prepare controls (OrbitControls)
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target = new THREE.Vector3(1, 5, 0);
    controls.maxDistance = 2000;

    new THREE.TextureLoader().load( 'assets/envmaps/venice_dawn_1.jpg', function ( texture ) {
        
        texture = texture;
        texture.magFilter = THREE.LinearMipMapLinearFilter;
        texture.minFilter = THREE.LinearMipMapLinearFilter;
        var cubemapGenerator = new THREE.EquirectangularToCubeGenerator( texture, 512 );
        var cubeMapTexture = cubemapGenerator.update( renderer );


        // texture.dispose();
        // cubemapGenerator.dispose();
        // pmremGenerator.dispose();
        // pmremCubeUVPacker.dispose();


        createBox(cubeMapTexture);
    } );


    initGUI();
    animate();
}



// Animate the scene
function animate() {
    requestAnimationFrame(animate);

    controls.update();
    
    cameraCube.rotation.copy( camera.rotation );

    renderer.render( sceneCube, cameraCube);
    renderer.render( scene, camera );
}


function initGUI() {
    var controller = {
        roughness: 0.8,
        metalness: 0,
    };

    var gui = new dat.GUI();

    gui.add(controller, 'roughness', 0, 1).onChange(function(value) {
        window.boxMaterial.roughness = value;
    });   
    gui.add(controller, 'metalness', 0, 1).onChange(function(value) {
        window.boxMaterial.metalness = value;
    });    
}

function createBox(texture) {


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
        
        material.onBeforeCompile = function(object, renderer) {
            // object.fragmentShader = shaderTestString;
            object.fragmentShader = object.fragmentShader.replace("#include <lights_fragment_maps>", modifiedLightMaps);
            // object.fragmentShader = object.fragmentShader.replace("#include <envmap_physical_pars_fragment>", envPhysical);
            // object.fragmentShader = object.fragmentShader.replace("#include <dithering_fragment>", finalPass);
            
            // object.vertexShader = newvertexshader;
        };
        
        var mesh = new THREE.Mesh( geometry, material );
		mesh.scale.set(0.3, 0.3, 0.3);
        scene.add(mesh);
        
    }, { useWorker: false } );


	loader.load( "assets/models/cloth.ctm", function( geometry ) {

		window.boxMaterial = new THREE.MeshPhysicalMaterial( 
    	    {   color: 0xffffff, 
    	        envMap: texture,
    	        roughness: 0.8,
    	        metalness: 0,
    	        envMapIntensity: 1.0,
                reflectivity: 0.9,
                map: new THREE.TextureLoader().load("assets/textures/cloth.jpg")
    	} );

		boxMaterial.onBeforeCompile = function(object, renderer) {
			object.fragmentShader = object.fragmentShader.replace(
				"#include <lights_fragment_maps>", 
				modifiedLightMaps);
		};

    	var boxgeometry = new THREE.BoxGeometry( 10, 10, 10 );
		var mesh = new THREE.Mesh( geometry, boxMaterial );
		mesh.scale.set(0.3, 0.3, 0.3);
		scene.add(mesh);
	});
}




let modifiedLightMaps = `
#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP

		vec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			lightMapIrradiance *= PI; // factor of PI should not be present; included here to prevent breakage

		#endif

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( PHYSICAL ) // && defined( ENVMAP_TYPE_CUBE_UV )

		irradiance += getLightProbeIndirectIrradiance( /*lightProbe,*/ geometry, maxMipLevel );

	#endif
#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry, Material_BlinnShininessExponent( material ), maxMipLevel );

	#ifndef STANDARD
		clearCoatRadiance += getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );
	#endif
#endif
`;