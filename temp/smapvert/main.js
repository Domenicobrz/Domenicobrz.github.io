import * as THREE from "./dependencies/three.module.js";
import { OrbitControls } from "./dependencies/orbitControls.js";

window.addEventListener("load", init);

let scene; 
let camera;
let controls;
let renderer;
let kpress = false;
let ipress = false;
let light;

let Utils = { };
Utils.parseIncludes = function( string ) {
    var utils_includepattern = /#include <(.*)>/gm;
    
    function replace( match , include ) {
        var replace = THREE.ShaderChunk[ include ];
        return Utils.parseIncludes( replace );
    }

    return string.replace( utils_includepattern, replace );
}

let sphereY = -100;
let sphereRad = 100;
let sphericalMappingMaterial;

function init() {
    renderer = new THREE.WebGL1Renderer({ antialias: false });
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.8;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.autoClear = false;
    document.body.appendChild( renderer.domElement );

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );

    controls = new OrbitControls( camera, renderer.domElement );
    controls.enableDamping = true;
    controls.dampingFactor = 0.1875;
    controls.enablePan = false;
    controls.panSpeed = 1.0;
    controls.screenSpacePanning = true;

    camera.position.set( 0, 20, 30 );
    controls.target.set( 0, 0, 0 );
    controls.update();

    sphericalMappingMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    sphericalMappingMaterial.userData.uSphereCenter = { value: new THREE.Vector3(0, sphereY, 40) };

    sphericalMappingMaterial.onBeforeCompile = (shader) => {
        let prependUniforms = [
            "uniform vec3 uSphereCenter;\n",
        ].join("\n");

        shader.vertexShader = Utils.parseIncludes(shader.vertexShader); 

        shader.uniforms.uSphereCenter = sphericalMappingMaterial.userData.uSphereCenter;

        shader.vertexShader = shader.vertexShader.replace(
            "gl_Position = projectionMatrix * mvPosition;", 

            `
            vec3 worldPos = (modelMatrix * vec4(position, 1.0)).xyz;
            float height = worldPos.y;
            vec3 shCenter = uSphereCenter;
            float radius = ${sphereRad}.0;

            vec3 dir = normalize(worldPos - shCenter) * (radius + height);
            vec3 newWorldPos = vec3(shCenter + dir);

            mvPosition = viewMatrix * vec4(newWorldPos, 1.0);

            gl_Position = projectionMatrix * mvPosition;
            `, 
        );

        shader.vertexShader = prependUniforms + shader.vertexShader;
    };


    let plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(200, 400, 30, 60), sphericalMappingMaterial);
    plane.rotation.x = Math.PI * 0.5;
    scene.add(plane);

    for(let i = 0; i < 80; i++) {
        let x = (Math.random() * 2 - 1) * 35;
        let z = -Math.random() * 35 - i * 3;
        let h = Math.random() * 7 + 5;

        let box = new THREE.Mesh(new THREE.BoxBufferGeometry(4, h, 4), sphericalMappingMaterial);
        box.position.set(x, h * 0.5, z);
        scene.add(box);
    }

    light = new THREE.PointLight(0xffffff, 10, 1000000, 100000);
    light.position.set(0, 15, 0);
    scene.add(new THREE.AmbientLight(0x111111, 1));
    scene.add(light);

    animate(0);
}

window.addEventListener("keydown", (e) => {
    if(e.key == "k") {
        kpress = true;
    }
    if(e.key == "i") {
        ipress = true;
    }
});

window.addEventListener("keyup", (e) => {
    if(e.key == "k") {
        kpress = false;
    }
    if(e.key == "i") {
        ipress = false;
    }
});

function animate(now) {
    requestAnimationFrame( animate );
    now *= 0.001;

    if(kpress || ipress) {
        let delta = ipress ? -0.5 : 0.5;

        // console.log(light.position);
        console.log(camera.position);
        // console.log(controls.target);
        console.log(sphericalMappingMaterial.userData.uSphereCenter.value);

        light.position.set(light.position.x,   light.position.y,  light.position.z  - delta);
        camera.position.set(camera.position.x, camera.position.y, camera.position.z - delta);
        controls.target.set(controls.target.x, controls.target.y, controls.target.z - delta);
        sphericalMappingMaterial.userData.uSphereCenter.value = new THREE.Vector3(
            sphericalMappingMaterial.userData.uSphereCenter.value.x, 
            sphericalMappingMaterial.userData.uSphereCenter.value.y, 
            sphericalMappingMaterial.userData.uSphereCenter.value.z - delta);
    }

    controls.update();
    renderer.render( scene, camera );
}