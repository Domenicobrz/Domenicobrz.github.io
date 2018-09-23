var renderScene;     
var sceneCube;
var quadScene;     
var depthScene;    
var pong1Scene;     
var pong2Scene;     
var copyScene; 

var camera;     
var cameraCube;

var renderer;   
var controls;
var stats;
var light;

var linearDepthRenderTarget;
var pong1RT;
var pong2RT;
var farPlaneZ = 200;

const statuerotation = 0.0;
const cubemaprotation = -1.0; //-1.0; //-0.5;

window.addEventListener('load', init);

function init() {
    let loader2 = new THREE.OBJLoader();
    loader2.load(
        "assets/models/statue2.obj",
        function ( object ) {    

            new THREE.TextureLoader().load( "assets/envmaps/env3_6k.jpg", function ( texture ) {
            
                document.querySelector("#loading-modal").style.display = "none";
                modelLoaded(object.children[0].geometry, texture);       

            });
        }
    );
}


function modelLoaded (geometry, texture) { // Initialization

    window.statuegeometry = geometry;

    renderer = new THREE.WebGLRenderer( { antialias: true, alpha: false } );
    renderer.autoClear = false;    
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( innerWidth, innerHeight );
    renderer.domElement.style.position = "relative";
    document.querySelector(".main-canvas-container").appendChild( renderer.domElement );

    

    camera = new THREE.PerspectiveCamera( 60, innerWidth / innerHeight, 1, farPlaneZ );
    cameraCube = new THREE.PerspectiveCamera( 80, innerWidth / innerHeight, 1, farPlaneZ );
    camera.position.set(-0.5, 2.2, -4.2);
    quadScene = new THREE.Scene();
    renderScene = new THREE.Scene();
    sceneCube = new THREE.Scene();
    pong1Scene = new THREE.Scene();
    pong1Scene.background = new THREE.Color(0x000000);
    pong2Scene = new THREE.Scene();
    pong2Scene.background = new THREE.Color(0x000000);
    copyScene = new THREE.Scene();
    copyScene.background = new THREE.Color(0x000000);
    depthScene = new THREE.Scene();
    depthScene.background = new THREE.Color(0x000000);

    // prepare controls (OrbitControls)
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target = new THREE.Vector3(0.75, 1.5, 0);
	controls.rotateSpeed = 0.1;
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







    

    linearDepthRenderTarget = createRenderTarget(innerWidth, innerHeight, undefined, undefined, undefined, undefined, true);
    var depthMaterial = new THREE.ShaderMaterial({
        vertexShader: depthVertexShader,
        fragmentShader: depthFragmentShader,
        depthWrite: true,
        depthTest: true,
        side: THREE.DoubleSide,
        blending: THREE.NoBlending,
    });

    // var geometry = new THREE.SphereBufferGeometry( 5, 32, 32 );
    // var geometry = new THREE.BoxBufferGeometry( 5, 5, 5 );
    // var geometry = new THREE.TorusKnotBufferGeometry( 10, 3, 100, 16 );
    window.sphereMesh = new THREE.Mesh(geometry, depthMaterial);
    sphereMesh.position.set(0,0,0);
    sphereMesh.rotation.set(0,statuerotation,0);
    depthScene.add(sphereMesh);











    pong1RT = createRenderTarget(innerWidth, innerHeight, undefined, undefined, undefined, undefined, false);
    pong2RT = createRenderTarget(innerWidth, innerHeight, undefined, undefined, undefined, undefined, false);
    window.pong1depthMaterial = new THREE.ShaderMaterial({
        vertexShader: pong1VertexShader,
        fragmentShader: pong1FragmentShader,
        uniforms: {
            depthTexture: { 
                // value: new THREE.TextureLoader().load("assets/textures/try1.png") 
                value: linearDepthRenderTarget.texture,
            },
            previousClosestDepth: {
                value: pong2RT.texture
            }
        },
        blending: THREE.NoBlending,
        depthWrite: false,
        depthTest: false,
        side: THREE.DoubleSide,
    });
    window.spherePongMesh = new THREE.Mesh(geometry, pong1depthMaterial);
    spherePongMesh.position.set(0,0,0);
    spherePongMesh.rotation.set(0,statuerotation,0);
    pong1Scene.add(spherePongMesh);





    window.pong2depthMaterial = new THREE.ShaderMaterial({
        vertexShader: pong2VertexShader,
        fragmentShader: pong2FragmentShader,
        uniforms: {
            depthTexture: { 
                // value: new THREE.TextureLoader().load("assets/textures/try1.png") 
                value: linearDepthRenderTarget.texture,
            },
            previousClosestDepth: {
                value: pong1RT.texture
            }
        },
        blending: THREE.NoBlending,
        depthWrite: false,
        depthTest: false,
        side: THREE.DoubleSide,
    });
    window.sphere2PongMesh = new THREE.Mesh(geometry, pong2depthMaterial);
    sphere2PongMesh.position.set(0,0,0);
    sphere2PongMesh.rotation.set(0,statuerotation,0);
    pong2Scene.add(sphere2PongMesh);








    window.copyPongQuad = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.ShaderMaterial({
            vertexShader: copyPongVertexShader,
            fragmentShader: copyPongFragmentShader,
            uniforms: {
                prevPongTexture: { 
                    value: null,
                }
            },
            depthWrite: false,
            depthTest: false,
            side: THREE.DoubleSide,
        })
    );
    copyScene.add(copyPongQuad);











    window.quadMaterial = new THREE.ShaderMaterial({
        vertexShader: quadVertexShader,
        fragmentShader: quadFragmentShader,
        uniforms: {
            depthTexture: { 
                type: "t",             
                // value: new THREE.TextureLoader().load("assets/textures/try1.png") 
                value: linearDepthRenderTarget.texture,
            },
            secondDepthTexture: { 
                type: "t",             
                // value: new THREE.TextureLoader().load("assets/textures/try1.png") 
                value: pong2RT.texture,
            }
        },
        depthWrite: false,
        depthTest: false,
        side: THREE.DoubleSide,
    });
    var quad = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        quadMaterial
    );
    quadScene.add(quad);




    var absColor = new THREE.Color(0xcd5615);
    window.sceneMaterial = new THREE.ShaderMaterial({
        vertexShader: sceneVertexShader,
        fragmentShader: sceneFragmentShader,
        uniforms: {
            depthTexture: { 
                value: linearDepthRenderTarget.texture,
            },
            secondDepthTexture: {
                value: pong1RT.texture
            },
            radiance: {
                type:"t", value: null
            },
            gui1: {
                type:"4f", value: [1, 6, 0, 10]
            },
            gui2: {
                type:"4f", value: [0, 0, 0, 0]
            },
            absorptionColor: {
                type:"3f", value: [absColor.r, absColor.g, absColor.b]
            }
        }
    });
    var renderSceneMesh = new THREE.Mesh(geometry, sceneMaterial)
    renderSceneMesh.rotation.set(0, statuerotation, 0);
    renderScene.add(renderSceneMesh);










    //new THREE.TextureLoader().load( "assets/envmaps/env3_6k.jpg", function ( texture ) {
        texture.mapping = THREE.EquirectangularReflectionMapping;

        
        var cubemapGenerator = new THREE.EquirectangularToCubeGenerator( texture, 512 );
        window.cubeMapTexture = cubemapGenerator.update( renderer );

        var pmremGenerator = new THREE.PMREMGenerator( cubeMapTexture );
        pmremGenerator.update( renderer );

        var pmremCubeUVPacker = new THREE.PMREMCubeUVPacker( pmremGenerator.cubeLods );
        pmremCubeUVPacker.update( renderer );

        window.exrCubeRenderTarget = pmremCubeUVPacker.CubeUVRenderTarget;



        let shader = THREE.ShaderLib.cube;
        shader.uniforms.tCube.value = cubeMapTexture;

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

        let fshader = `
        uniform samplerCube tCube;
        uniform float tFlip;
        uniform float opacity;
        varying vec3 vWorldPosition;
        void main() {
        	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) ) * 1.1;
        	gl_FragColor.a *= opacity;
        }`;

        let material = new THREE.ShaderMaterial({
            vertexShader: vshader,
            fragmentShader: fshader, // shader.fragmentShader,
            uniforms: shader.uniforms,
            depthWrite: false,
            side: THREE.BackSide
        });

        var cubeMesh = new THREE.Mesh( new THREE.BoxBufferGeometry( 1000, 1000, 1000 ), material );
        cubeMesh.rotation.set(0, cubemaprotation, 0);
        cubeMesh.scale.set(-1, 1, 1);
        sceneCube.add( cubeMesh );

        sceneMaterial.uniforms.radiance.value = cubeMapTexture;





        var planeGeometry = new THREE.PlaneGeometry(15, 15);
        var planeMaterial = new THREE.MeshPhysicalMaterial({
            envMap: exrCubeRenderTarget.texture,
            roughness: 1,
            metallic: 0,
            reflectivity: 0.2,
            envMapIntensity: 2.15,
            map: new THREE.TextureLoader().load( "assets/textures/terrain.jpg" ),
            side: THREE.DoubleSide
        });
        window.planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
        planeMesh.scale.set(1.18, 1, 1.18);
        planeMesh.position.set(0.8, 0, -0.55);
        planeMesh.rotation.set(-Math.PI / 2, 0, statuerotation);
        renderScene.add(planeMesh);
    //});















    initGUI();
    animate();
}




{
var quadVertexShader = `
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}`;

var quadFragmentShader = `
varying vec2 vUv;

uniform sampler2D depthTexture;
uniform sampler2D secondDepthTexture;
const float farPlaneZ = ` + farPlaneZ + `.0;

#define DEBUG 

void main() {

    #ifdef DEBUG
        if (gl_FragCoord.x > 675.0)
            gl_FragColor = vec4(   texture2D(depthTexture, vUv).xyz / farPlaneZ   , 1.0);
        else 
            gl_FragColor = vec4(   texture2D(secondDepthTexture, vUv).xyz / farPlaneZ   , 1.0);
    #endif


    float d1 = texture2D(depthTexture, vUv).x / farPlaneZ;
    float d2 = texture2D(secondDepthTexture, vUv).x / farPlaneZ;
    gl_FragColor = vec4(   vec3(d2 - d1) * 2.0   , 1.0);    
}`;
}

{
var sceneVertexShader = `
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vFragPos;


void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = (gl_Position.xy / gl_Position.w) * 0.5 + 0.5;
    vNormal  = (modelMatrix * vec4(normal, 0.0)).xyz;
    vFragPos = (modelMatrix * vec4(position, 1.0)).xyz;
}`;

var sceneFragmentShader = `
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vFragPos;


uniform sampler2D depthTexture;
uniform sampler2D secondDepthTexture;

uniform samplerCube radiance;

uniform vec4 gui1;
uniform vec4 gui2;
uniform vec3 absorptionColor;

const float farPlaneZ = ` + farPlaneZ + `.0;




mat4 rotationMatrix(vec3 axis, float angle)
{
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}




void main() {

    vec3 N = normalize(vNormal);
    // vec3 N = (rotationMatrix(vec3(0.0, 1.0, 0.0), -1.0) * vec4(normalize(vNormal).xyz, 0.0)).xyz;
    // N = normalize(N);
    vec3 V = normalize(cameraPosition - vFragPos);
    vec3 R = normalize(reflect(V, N));
    vec3 Rf = refract(-V, N, 1.0 / 1.4);

    R =  normalize((rotationMatrix(vec3(0.0, 1.0, 0.0), -1.0) * vec4(R.xyz, 0.0)).xyz);
    Rf = normalize((rotationMatrix(vec3(0.0, 1.0, 0.0), -1.0) * vec4(Rf.xyz, 0.0)).xyz);



    float d1 = texture2D(depthTexture, vUv).x;
    float d2 = texture2D(secondDepthTexture, vUv).x;
    float diff = d2-d1;

    // float travelDistanceNDC = pow(diff + 1.0, gui1.x) / gui1.y;
    // float travelDistanceNDC = pow(diff + 1.0, gui1.x) - pow(diff + 1.0, gui1.y) / 6.0;
    // travelDistanceNDC /= gui1.z;
    
    float travelDistanceNDC = pow(diff + 1.0, gui1.x) / gui1.y;
    travelDistanceNDC = clamp(travelDistanceNDC, 0.0, gui1.z);

    vec4 trasmission = textureCube(radiance, Rf);
    
    // RAY PLANE INTERSECTION
    if(Rf.y < 0.0) {
        float distance = vFragPos.y / abs(Rf.y);
        vec3 hitPoint = vFragPos + Rf * distance;
        if(abs(hitPoint.x) < gui1.w && abs(hitPoint.z) < gui1.w) {
            // assign plane color
            trasmission.xyz = vec3(0.5);
        }
    }
    // RAY PLANE INTERSECTION - END
    trasmission.rgb -= (vec3(1.0) - absorptionColor) * travelDistanceNDC;




    float ReflectionTerm  = 1.0 - pow(dot(V, N), 0.4);
    float TrasmissionTerm = 1.0;// - ReflectionTerm;
    
    ReflectionTerm *= gui2.x;
    TrasmissionTerm *= gui2.y;

    vec4 reflection = textureCube(radiance, R);


    gl_FragColor = vec4(trasmission.xyz * TrasmissionTerm + reflection.xyz * ReflectionTerm, 1.0);
    // gl_FragColor = vec4(vec3(d2 / 25.0), 1.0);


    if(dot(N, V) < 0.001)
        gl_FragColor = textureCube(radiance, Rf) * 0.8 + reflection * 0.4;
}`;
}

{
var depthVertexShader = `
varying highp float vLinearDepth;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vLinearDepth = -(modelViewMatrix * vec4(position, 1.0)).z;
}`;

var depthFragmentShader = `
varying highp float vLinearDepth;
const float farPlaneZ = ` + farPlaneZ + `.0;

void main() {
    gl_FragColor = vec4(vLinearDepth);
}`;
}


{
var pong1VertexShader = `
varying vec2 vUv;
varying highp float vLinearDepth;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vLinearDepth = -(modelViewMatrix * vec4(position, 1.0)).z;
    vUv = (gl_Position.xy / gl_Position.w) * 0.5 + 0.5;
}`;

var pong1FragmentShader = `
varying vec2 vUv;
varying highp float vLinearDepth;

uniform sampler2D depthTexture;          // represents the closest depth to viewer we've found
uniform sampler2D previousClosestDepth;  // represents the last closest depth that is NOT the depth in depthTexture

void main() {

    float closestDepth = texture2D(depthTexture, vUv).x;
    float prevClosestDepth = texture2D(previousClosestDepth, vUv).x;


    if (vLinearDepth <= closestDepth)
        discard;

    if (vLinearDepth <= prevClosestDepth)
        discard;

    gl_FragColor = vec4(vec3(vLinearDepth), 1.0);
}`;



var pong2VertexShader = `
varying vec2 vUv;
varying highp float vLinearDepth;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vLinearDepth = -(modelViewMatrix * vec4(position, 1.0)).z;
    vUv = (gl_Position.xy / gl_Position.w) * 0.5 + 0.5;
}`;

var pong2FragmentShader = `
varying vec2 vUv;
varying highp float vLinearDepth;

uniform sampler2D depthTexture;          // represents the closest depth to viewer we've found
uniform sampler2D previousClosestDepth;  // represents the last closest depth that is NOT the depth in depthTexture

void main() {

    float closestDepth = texture2D(depthTexture, vUv).x;
    float prevClosestDepth = texture2D(previousClosestDepth, vUv).x;


    if (vLinearDepth <= closestDepth)
        discard;

    if (vLinearDepth <= prevClosestDepth)
        discard;

    gl_FragColor = vec4(vec3(vLinearDepth), 1.0);
}`;








var copyPongVertexShader = `
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}`;

var copyPongFragmentShader = `
varying vec2 vUv;
uniform sampler2D prevPongTexture;

void main() {
    gl_FragColor = texture2D(prevPongTexture, vUv);
}`;
}




// Animate the scene
function animate() {
    requestAnimationFrame(animate);


    controls.update(clock.getDelta());
    stats.update();


    statuegeometry.setDrawRange(0, 160026);


    renderer.render( depthScene, camera, linearDepthRenderTarget );


    // copia il depthRT nel primo e nel secondo
    copyScene.background = new THREE.Color(0x000000);
    window.copyPongQuad.material.uniforms.prevPongTexture.value  = linearDepthRenderTarget.texture;
    renderer.render( copyScene, camera, pong1RT );

    copyScene.background = new THREE.Color(0x000000);
    window.copyPongQuad.material.uniforms.prevPongTexture.value  = linearDepthRenderTarget.texture;
    renderer.render( copyScene, camera, pong2RT );


    for(let i = 0; i < 4; i++) {

        pong1Scene.background = null;
        window.pong1depthMaterial.uniforms.depthTexture.value = linearDepthRenderTarget.texture;
        window.pong1depthMaterial.uniforms.previousClosestDepth.value = pong2RT.texture;
        renderer.render( pong1Scene, camera, pong1RT );


        copyScene.background = new THREE.Color(0x000000);
        window.copyPongQuad.material.uniforms.prevPongTexture.value  = pong1RT.texture;
        renderer.render( copyScene, camera, pong2RT );


        pong2Scene.background = null;
        window.pong2depthMaterial.uniforms.depthTexture.value = linearDepthRenderTarget.texture;
        window.pong2depthMaterial.uniforms.previousClosestDepth.value = pong1RT.texture;
        renderer.render( pong2Scene, camera, pong2RT );


        // copia il secondo nel primo
        copyScene.background = new THREE.Color(0x000000);
        window.copyPongQuad.material.uniforms.prevPongTexture.value  = pong2RT.texture;
        renderer.render( copyScene, camera, pong1RT );    
    }


    // quadScene.background = new THREE.Color(0x000000);
    // window.quadMaterial.uniforms.depthTexture.value = linearDepthRenderTarget.texture;
    // window.quadMaterial.uniforms.secondDepthTexture.value = pong1RT.texture;
    // renderer.render( quadScene, camera );

    cameraCube.rotation.copy( camera.rotation );
    renderer.render( sceneCube, cameraCube);
    renderer.render( renderScene,  camera );
}

function createRenderTarget( sizeXTexture, sizeYTexture, wrapS, wrapT, minFilter, magFilter, depthBf ) {

    sizeXTexture = sizeXTexture || 0;
    sizeYTexture = sizeYTexture || 0;

    wrapS = wrapS || THREE.ClampToEdgeWrapping;
    wrapT = wrapT || THREE.ClampToEdgeWrapping;

    minFilter = minFilter || THREE.NearestFilter;
    magFilter = magFilter || THREE.NearestFilter;

    var renderTarget = new THREE.WebGLRenderTarget( sizeXTexture, sizeYTexture, {
        wrapS: wrapS,
        wrapT: wrapT,
        minFilter: minFilter,
        magFilter: magFilter,
        format: THREE.RGBAFormat,
        type: THREE.FloatType,
        stencilBuffer: false,
        depthBuffer: depthBf
    } );

    return renderTarget;
}


function initGUI() {
    var controller = {
        gui1_x: 3.9,
        gui1_y: 8.2,
        gui1_z: 1.1,
        gui1_w: 2.1,
        absorptionColor: 0xd47d5a,
        gui2_x: 0.7,
        gui2_y: 1.15,
        gui2_z: 0,
        gui2_w: 0,
    };

    sceneMaterial.uniforms.gui1.value = [controller.gui1_x, controller.gui1_y, controller.gui1_z, controller.gui1_w];
    sceneMaterial.uniforms.gui2.value = [controller.gui2_x, controller.gui2_y, controller.gui2_z, controller.gui2_w];
    // var color = new THREE.Color(0xcd1481);
    var color = new THREE.Color(0xd47d5a);
    sceneMaterial.uniforms.absorptionColor.value[0] = color.r;
    sceneMaterial.uniforms.absorptionColor.value[1] = color.g;
    sceneMaterial.uniforms.absorptionColor.value[2] = color.b;




    gui = new dat.GUI();
    var f1 = gui.addFolder('f1');

    f1.add(controller, 'gui1_x', 0, 10).onChange(function(value) {
        sceneMaterial.uniforms.gui1.value[0] = value;
    });  
    f1.add(controller, 'gui1_y', 0, 40).onChange(function(value) {
        sceneMaterial.uniforms.gui1.value[1] = value;
    });
    f1.add(controller, 'gui1_z', 0, 10).onChange(function(value) {
        sceneMaterial.uniforms.gui1.value[2] = value;
    });
    f1.add(controller, 'gui1_w', 0, 10).onChange(function(value) {
        sceneMaterial.uniforms.gui1.value[3] = value;
    }); 
    f1.add(controller, 'gui2_x', 0, 2).onChange(function(value) {
        sceneMaterial.uniforms.gui2.value[0] = value;
    });  
    f1.add(controller, 'gui2_y', 0, 2).onChange(function(value) {
        sceneMaterial.uniforms.gui2.value[1] = value;
    });
    f1.add(controller, 'gui2_z', 0, 10).onChange(function(value) {
        sceneMaterial.uniforms.gui2.value[2] = value;
    });
    f1.add(controller, 'gui2_w', 0, 10).onChange(function(value) {
        sceneMaterial.uniforms.gui2.value[3] = value;
    }); 
    f1.addColor(controller, 'absorptionColor').onChange(function(value) {
        var color = new THREE.Color(value);
        sceneMaterial.uniforms.absorptionColor.value[0] = color.r;
        sceneMaterial.uniforms.absorptionColor.value[1] = color.g;
        sceneMaterial.uniforms.absorptionColor.value[2] = color.b;
    }); 


    f1.close();
}