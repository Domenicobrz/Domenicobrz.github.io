function initDOF() {

    window.mouse = new THREE.Vector2();
    window.material_depth = new THREE.MeshDepthMaterial();
    window.shaderSettings = {
        rings: 6,
        samples: 9
    };
    window.postprocessing = {};
    window.postprocessing.scene = new THREE.Scene();
    window.effectController = { };
    window.windowHalfX = window.innerWidth / 2;
    window.windowHalfY = window.innerHeight / 2;


    document.addEventListener('mousemove', onDocumentMouseMove, false);



    initPostprocessing();
    initDatGui();
}

function rendererDOF(scene, camera, renderer) {

    // camera.lookAt(scene.position);
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
    effectController = {

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

        threshold: 0.85,
        gain: 2.0,
        bias: 0.5,
        fringe: 5.0,

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

    gui.close();


    matChanger();
}

function shaderUpdate() {
    postprocessing.materialBokeh.defines.RINGS = shaderSettings.rings;
    postprocessing.materialBokeh.defines.SAMPLES = shaderSettings.samples;

    postprocessing.materialBokeh.needsUpdate = true;
}

function onDocumentMouseMove(event) {
    mouse.x = (event.clientX - windowHalfX) / windowHalfX;
    mouse.y = - (event.clientY - windowHalfY) / windowHalfY;

    postprocessing.bokeh_uniforms['focusCoords'].value.set(event.clientX / window.innerWidth, 1 - event.clientY / window.innerHeight);
}
