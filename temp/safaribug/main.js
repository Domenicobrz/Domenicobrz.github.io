var scene;      // used primarily by mainCanvas.js
var camera;     // shared between canvases
var renderer;   
var controls;

window.addEventListener('load', init);

function init () { // Initialization

    renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
    renderer.autoClear = false;    
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( innerWidth, innerHeight );
    document.querySelector("body").appendChild( renderer.domElement );

    var gl = renderer.domElement.getContext('webgl') ||
             renderer.domElement.getContext('experimental-webgl');
    gl.getExtension('GL_EXT_shader_texture_lod');


    renderer.gammaInput = false;
    renderer.gammaOutput = true;
  
	camera = new THREE.PerspectiveCamera( 20, innerWidth / innerHeight, 1, 200 );
	camera.position.z = 80;
	camera.position.y = 0;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x232323);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target = new THREE.Vector3(0, 0, 0);
    controls.maxDistance = 2000;

    new THREE.TextureLoader().load( 'equirectangular.png', function ( texture ) {
        var cubemapGenerator = new THREE.EquirectangularToCubeGenerator( texture, 512 );
        var cubeMapTexture = cubemapGenerator.update( renderer );


        let material = new THREE.RawShaderMaterial({ 
            uniforms: { 
                env: { type: "t", value: cubeMapTexture }
            }, 
            extensions: {
                shaderTextureLOD: true // set to use shader texture LOD
            },
            vertexShader: testv, 
            fragmentShader: testf, 
        });
    
        let sphereMesh = new THREE.Mesh(  new THREE.SphereBufferGeometry(5, 32, 32), material );
        sphereMesh.rotation.x = 0.7;
        sphereMesh.rotation.y = 0.5;

        scene.add(sphereMesh);
    } );

    animate();
}

// Animate the scene
function animate() {
    requestAnimationFrame(animate);

    controls.update();

    renderer.render( scene, camera );
}

var testv = `
#extension GL_EXT_shader_texture_lod : enable

precision highp float;
precision highp int;

uniform mat4 modelViewMatrix; // optional
uniform mat4 projectionMatrix; // optional

attribute vec3 position;
attribute vec3 normal;


varying vec3 vNormal;

void main()	{

    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    vNormal = normal;
}
`;

var testf = `
precision highp float;
precision highp int;

uniform samplerCube env;

varying vec3 vNormal;

void main()	{
    gl_FragColor = textureCubeLodEXT(env, vNormal, 6.0);
    // gl_FragColor = textureCube(env, vNormal, 5.0);
}
`;