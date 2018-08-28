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
var clothTexture;

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
    // SHOULD BE CONTROLLED WITH DATGUI.js
    // SHOULD BE CONTROLLED WITH DATGUI.js
    // renderer.toneMappingExposure = params.exposure;

	camera = new THREE.PerspectiveCamera( 20, innerWidth / innerHeight, 1, 200 );
	camera.position.z = 80;
	camera.position.y = 20;



	scene = new THREE.Scene();




    sceneCube = new THREE.Scene();
    cameraCube = new THREE.PerspectiveCamera( 70, innerWidth / innerHeight, 1, 1000 );




    // var light = new THREE.SpotLight( 0xffffff, 1.2, 1550, Math.PI / 6 );
    // light.position.set( 100, 300, 100 );
    // scene.add(light);


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
    clothTexture = textureLoader.load( "assets/textures/cloth.jpg" );
    

    
    new THREE.TextureLoader().load( 'assets/envmaps/equirectangular.png', function ( texture ) {

        pngEquiRectTexture = texture;
        pngEquiRectTexture.mapping = THREE.EquirectangularReflectionMapping;
        pngEquiRectTexture.magFilter = THREE.LinearFilter;
        pngEquiRectTexture.minFilter = THREE.LinearMipMapLinearFilter;
        // texture.encoding = THREE.sRGBEncoding;

        var cubemapGenerator = new THREE.EquirectangularToCubeGenerator( texture, 512 );
        var cubeMapTexture = cubemapGenerator.update( renderer );
    

        // var equirectShader = THREE.ShaderLib[ "equirect" ];
        // var equirectMaterial = new THREE.ShaderMaterial( {
        //     fragmentShader: equirectFragmentShader,
        //     vertexShader: equirectShader.vertexShader,
        //     uniforms: equirectShader.uniforms,
        //     depthWrite: false,
        //     side: THREE.BackSide
        // } );

        // equirectMaterial.uniforms[ "tEquirect" ].value = texture;

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

        var loader = new THREE.CTMLoader();

        loader.load( "assets/models/cloth.ctm", function( geometry ) {
            var material = new THREE.MeshStandardMaterial( 
                {   color: 0xffffff, 
                    map: clothTexture, 
                    envMap: cubeMapTexture,
                    // envMap: exrCubeRenderTarget.texture,
                    // combine: THREE.MixOperation, 
                    roughness: 0,
                    metalness: 1,
                    envMapIntensity: 2.0,
                    // reflectivity: 0.9,
                    // side: THREE.DoubleSide
            } );
            // var material = new THREE.MeshLambertMaterial( { color: 0xff00aa, map: textureLoader.load( "assets/textures/cloth.jpg" ), envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.3 } );
            callbackModel( geometry, 0.5, material, 0, -20, 0, 0, 0 );
            // callbackModel( geometry, 0.5, material, 0, -20, 0, 0, 0 );
        
        }, { useWorker: false } );
    } );



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

    //     // texture.dispose();
    //     cubemapGenerator.dispose();
    //     pmremGenerator.dispose();
    //     pmremCubeUVPacker.dispose();


    //     let shader = THREE.ShaderLib.cube;
    //     shader.uniforms.tCube.value = exrCubeRenderTarget.texture;
    //     shader.uniforms.tCube.needsUpdate = true;
    
    //     let material = new THREE.ShaderMaterial({
        
    //         fragmentShader: shader.fragmentShader,
    //         vertexShader: shader.vertexShader,
    //         uniforms: shader.uniforms,
    //         depthWrite: false,
    //         side: THREE.DoubleSide
        
    //     });

    //     mesh = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100), material);
    //     sceneCube.add(mesh);

    //     // loadModel();
    // } );











    // new THREE.TextureLoader().load( 'assets/envmaps/equirectangular.png', function ( texture ) {

    //     pngEquiRectTexture2 = texture;
    //     pngEquiRectTexture2.mapping = THREE.EquirectangularReflectionMapping;
    //     pngEquiRectTexture2.magFilter = THREE.LinearFilter;
    //     pngEquiRectTexture2.minFilter = THREE.LinearMipMapLinearFilter;

    //     // loadModel();
        
    // } );



    

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







function loadModel() {
    var loader = new THREE.CTMLoader();
    
    // loader.load( "assets/models/alperson.ctm", function( geometry ) {

    //     // var material = new THREE.MeshLambertMaterial( { color: 0xffaa00, map: textureLoader.load( "textures/UV_Grid_Sm.jpg" ), envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.3 } );
    //     var material = new THREE.MeshPhysicalMaterial( { 
    //         color: 0x252525,
    //         envMap: pngEquiRectTexture,
    //         // envMap: exrCubeRenderTarget.texture,
    //         roughness: 0.2,
    //         metalness: 0.4,
    //         envMapIntensity: 1.0,
    //         reflectivity: 0.8,
    //     } );
    //     callbackModel( geometry, 0.5, material, 0, -20, 0, 0, 0 );

    // }, { useWorker: false } );


    // loader.load( "assets/models/cloth.ctm", function( geometry ) {
        var geometry = new THREE.SphereGeometry( 20, 60, 60 );
        var material = new THREE.MeshStandardMaterial( 
            {   color: 0xffffff, 
                // map: clothTexture, 
                envMap: pngEquiRectTexture2,
                // envMap: exrCubeRenderTarget.texture,
                // combine: THREE.MixOperation, 
                roughness: 0.2,
                // metalness: 0,
                envMapIntensity: 2.0,
                // reflectivity: 0.9,
                // side: THREE.DoubleSide
        } );
        // var material = new THREE.MeshLambertMaterial( { color: 0xff00aa, map: textureLoader.load( "assets/textures/cloth.jpg" ), envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.3 } );
        callbackModel( geometry, 0.5, material, 0, 0, 0, 0, 0 );
        // callbackModel( geometry, 0.5, material, 0, -20, 0, 0, 0 );

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