window.addEventListener('load', pageInit);








/**
 * Servono i rendertarget (texture) con precisione Float per la depth texture, altrimenti i 256 livelli della precisione Unsigned Byte danno un'effetto "blocky" (anche perchè i calcoli non sono lineari)

Il manual dof funziona meglio perchè per quanto ne so è più prevedibile e non ho ben capito perchè la cosa automatizzata non va come vorrei. Per settare il manual dof, devi cercare 
per cui è necessario settare nelle opzioni:
        shaderFocus: true,
        fstop: 0.01,
        manualdof: true,
        
"float ndofstart = 100.0; // near dof blur start",
		
"float ndofdist = 200.0; // near dof blur falloff distance",
		
"float fdofstart = 100.0; // far dof blur start",
		
"float fdofdist = 300.0; // far dof blur falloff distance",

dentro lo shader, i valori sono espressi in metri ed indicano:

• fdofstart        se il focus è a depth 300, a che distanza inizia il dof del far plane? Con i parametri sopra, inizierebbe a 400 e sarebbe al massimo a 600 (fdofdist)

• ndofstart        se il focus è a depth 300, a che distanza inizia il dof del near plane? Con i parametri sopra, inizierebbe a 200 e sarebbe al massimo a 100 (ndofdist)

 */

















var container;
var camera, scene, renderer;
var material_depth;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var height = window.innerHeight;

function pageInit() {

    window.raycaster = new THREE.Raycaster();
    window.mouse = new THREE.Vector2();
    window.distance = 100;
    window.target = new THREE.Vector3(0, 20, -50);
    document.addEventListener('mousemove', onDocumentMouseMove, false);



    window.addEventListener('resize', function () {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });


    container = document.createElement('div');
    document.body.appendChild(container);

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 100, 6000);
    camera.position.z = 2000;
    window.controls = new THREE.OrbitControls(camera, renderer.domElement);

    scene = new THREE.Scene();


    var manager = new THREE.LoadingManager();
    var loader = new THREE.OBJLoader(manager);
    loader.load('landscape.obj', function (loadedMesh) {
        var material = new THREE.MeshPhongMaterial({ color: 0x5C3A21 });
        material.side = THREE.DoubleSide;

        // loadedMesh is a group of meshes. For
        // each mesh set the material, and compute the information
        // three.js needs for rendering.
        loadedMesh.children.forEach(function (child) {
            child.material = material;
            child.geometry.computeFaceNormals();
            child.geometry.computeVertexNormals();
        });

        mesh = loadedMesh;
        loadedMesh.scale.set(1, 1, 1);
        loadedMesh.translateX(3500);
        //loadedMesh.rotation.x = -0.3;
        scene.add(loadedMesh);
    });


    // for (var i = 0; i < 3; i++)
    //     for (var j = 0; j < 3; j++)
    //         for (var z = 0; z < 3; z++) {
    //             var geometry = new THREE.SphereGeometry(50, 32, 32);
    //             var material = new THREE.MeshPhongMaterial({ color: 0xffff00 });
    //             var sphere = new THREE.Mesh(geometry, material);
    //             scene.add(sphere);
    //             sphere.position.set(i * 200, j * 200, z * 200);
    //         }





    var light = new THREE.PointLight(0xff0000, 4, 3000, 2);
    light.position.set(500, 500, 500);
    var light2 = new THREE.PointLight(0x0033ff, 10, 3000, 2);
    light2.position.set(-500, 500, -100);
    scene.add(light, light2);


    initPostprocessing();
    initDatGui();
    animate(0);
}

function animate(now) {
    requestAnimationFrame(animate);

    //raycastShit();

    camera.lookAt(scene.position);
    controls.update();
    // renderer.render(scene, camera);

    renderer.clear();
    // Render scene into texture
    scene.overrideMaterial = null;
    renderer.render(scene, camera, postprocessing.rtTextureColor, true);

    // Render depth into texture
    scene.overrideMaterial = material_depth;
    renderer.render(scene, camera, postprocessing.rtTextureDepth, true);

    // Render bokeh composite
    renderer.render(postprocessing.scene, postprocessing.camera);
}





function initPostprocessing() {
    window.shaderSettings = {
        rings: 6,
        samples: 9
    };

    material_depth = new THREE.MeshDepthMaterial();


    window.postprocessing = {};
    window.postprocessing.scene = new THREE.Scene();

    postprocessing.camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, -10000, 10000);
    postprocessing.camera.position.z = 100;

    postprocessing.scene.add(postprocessing.camera);

    //var pars = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat };
    var pars = { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, format: THREE.RGBAFormat, type: THREE.FloatType };
    postprocessing.rtTextureDepth = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, pars);
    postprocessing.rtTextureColor = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, pars);



    var bokeh_shader = THREE.BokehShader;

    postprocessing.bokeh_uniforms = THREE.UniformsUtils.clone(bokeh_shader.uniforms);
    postprocessing.bokeh_uniforms["tColor"].value = postprocessing.rtTextureColor.texture;
    postprocessing.bokeh_uniforms["tDepth"].value = postprocessing.rtTextureDepth.texture;
    postprocessing.bokeh_uniforms["textureWidth"].value = window.innerWidth;
    postprocessing.bokeh_uniforms["textureHeight"].value = window.innerHeight;

    postprocessing.materialBokeh = new THREE.ShaderMaterial({

        uniforms: postprocessing.bokeh_uniforms,
        vertexShader: bokeh_shader.vertexShader,
        fragmentShader: bokeh_shader.fragmentShader,
        defines: {
            RINGS: shaderSettings.rings,
            SAMPLES: shaderSettings.samples
        }

    });

    postprocessing.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(window.innerWidth, window.innerHeight), postprocessing.materialBokeh);
    postprocessing.quad.position.z = - 500;
    postprocessing.scene.add(postprocessing.quad);
}




function initDatGui() {
    window.effectController = {

        enabled: true,
        jsDepthCalculation: true,
        shaderFocus: true,

        fstop: 0.01,
        maxblur: 6.0,

        showFocus: false,
        focalDepth: 2.8,
        manualdof: true,
        vignetting: false,
        depthblur: false,

        threshold: 0.5,
        gain: 2.0,
        bias: 0.5,
        fringe: 0.7,

        focalLength: 35,
        noise: true,
        pentagon: false,

        dithering: 0.0001,
    };

    var matChanger = function () {

        for (var e in effectController) {
            if (e in postprocessing.bokeh_uniforms)
                postprocessing.bokeh_uniforms[e].value = effectController[e];
        }

        postprocessing.enabled = effectController.enabled;
        postprocessing.bokeh_uniforms['znear'].value = camera.near;
        postprocessing.bokeh_uniforms['zfar'].value = camera.far;
        camera.setFocalLength(effectController.focalLength);
    };

    var gui = new dat.GUI();

    gui.add(effectController, "enabled").onChange(matChanger);
    gui.add(effectController, "jsDepthCalculation").onChange(matChanger);
    gui.add(effectController, "shaderFocus").onChange(matChanger);
    gui.add(effectController, "focalDepth", 0.00001, 300.0).listen().onChange(matChanger);

    gui.add(effectController, "fstop", 0.1, 22, 0.001).onChange(matChanger);
    gui.add(effectController, "maxblur", 0.0, 105.0, 0.025).onChange(matChanger);

    gui.add(effectController, "showFocus").onChange(matChanger);
    gui.add(effectController, "manualdof").onChange(matChanger);
    gui.add(effectController, "vignetting").onChange(matChanger);

    gui.add(effectController, "depthblur").onChange(matChanger);

    gui.add(effectController, "threshold", 0, 1, 0.001).onChange(matChanger);
    gui.add(effectController, "gain", 0, 100, 0.001).onChange(matChanger);
    gui.add(effectController, "bias", 0, 3, 0.001).onChange(matChanger);
    gui.add(effectController, "fringe", 0, 5, 0.001).onChange(matChanger);

    gui.add(effectController, "focalLength", 16, 80, 0.001).onChange(matChanger);

    gui.add(effectController, "noise").onChange(matChanger);

    gui.add(effectController, "dithering", 0, 0.001, 0.0001).onChange(matChanger);

    gui.add(effectController, "pentagon").onChange(matChanger);
    gui.add(shaderSettings, "rings", 1, 8).step(1).onChange(shaderUpdate);
    gui.add(shaderSettings, "samples", 1, 13).step(1).onChange(shaderUpdate);


    matChanger();
}




function shaderUpdate() {
    postprocessing.materialBokeh.defines.RINGS = shaderSettings.rings;
    postprocessing.materialBokeh.defines.SAMPLES = shaderSettings.samples;

    postprocessing.materialBokeh.needsUpdate = true;
}






















function raycastShit() {
    if (effectController.jsDepthCalculation) {

        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(scene.children, true);


        if (intersects.length > 0) {

            var targetDistance = intersects[0].distance;

            distance += (targetDistance - distance) * 0.06;

            var sdistance = smoothstep(camera.near, camera.far, distance);

            var ldistance = linearize(1 - sdistance);

            // (Math.random() < 0.1) && console.log('moo', targetDistance, distance, ldistance);

            postprocessing.bokeh_uniforms['focalDepth'].value = ldistance;

            effectController['focalDepth'] = ldistance;

        }

    }
}

function onDocumentMouseMove(event) {

    mouse.x = (event.clientX - windowHalfX) / windowHalfX;
    mouse.y = - (event.clientY - windowHalfY) / windowHalfY;

    postprocessing.bokeh_uniforms['focusCoords'].value.set(event.clientX / window.innerWidth, 1 - event.clientY / window.innerHeight);

}

function linearize(depth) {
    var zfar = camera.far;
    var znear = camera.near;
    return -zfar * znear / (depth * (zfar - znear) - zfar);
}


function smoothstep(near, far, depth) {
    var x = saturate((depth - near) / (far - near));
    return x * x * (3 - 2 * x);
}

function saturate(x) {
    return Math.max(0, Math.min(1, x));
}
