import * as THREE from "./dependencies/three.module.js";
import { OrbitControls } from "./dependencies/orbitControls.js";
import { position_fs, position_vs } from "./shaders/position.js";
import { normal_fs, normal_vs } from "./shaders/normals.js";
import { display_fs, display_vs } from "./shaders/display.js";
import { makeSceneShaders } from "./shaders/radiance.js";
import { atrous_fs, atrous_vs } from "./shaders/atrous.js";
import { momentMove_fs, momentMove_vs } from "./shaders/momentMove.js";
import { historyTest_fs, historyTest_vs, historyAccum_fs, historyAccum_vs } from "./shaders/history.js";
import { radianceAccum_fs, radianceAccum_vs } from "./shaders/radianceAccum.js";
import { feedbackloop_fs, feedbackloop_vs } from "./shaders/feedbackloop.js";
import { createDoubleFBO, createTripleFBO } from "./utils.js";
import { createScene, updateScene } from "./scene.js";
import Stats from "./dependencies/stats.js";
import { controller, initGUI } from "./gui.js";

window.addEventListener("load", init);

let scene; 
let displayScene;
let momentBufferScene;

let camera;
let controls;
let renderer;
let radianceFrameCount = 0;

let albedoRT;
let positionRT;
let normalRT;
let emissionRT;
let radianceRT;
let atrousRT;
let momentMoveRT;
let historyRT;
let materialRT;
let hrPositionRT;
let hrNormalRT;

let positionBufferMaterial;
let positionBufferMaterialCulled;
let normalBufferMaterial;
let normalBufferMaterialCulled;
let radianceBufferMaterial;
let momentBufferMaterial;
let historyTestMaterial;
let historyTestMaterialCulled;
let historyAccumMaterial;
let radianceAccumMaterial;
let atrousMaterial;
let feedbackLoopMaterial;

let displayQuadMesh;

let kpress, lpress, opress, ppress, jpress, npress, mpress, ipress, bpress;

let pixelRatio = 0.5;
let pr_width   = Math.floor(innerWidth  * pixelRatio);
let pr_height  = Math.floor(innerHeight * pixelRatio);

var stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );


function init() {
    renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.8;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.autoClear = false;
    document.body.appendChild( renderer.domElement );

    scene = new THREE.Scene();
    momentBufferScene = new THREE.Scene();
    displayScene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );

    controls = new OrbitControls( camera, renderer.domElement );
    controls.enableDamping = true;
    controls.dampingFactor = 0.1875;
    controls.enablePan = true;
    controls.panSpeed = 1.0;
    controls.screenSpacePanning = true;

    camera.position.set( 0, 1, 18 );
    controls.target.set( 0, 0, 0 );
    controls.update();


    let filterMode = THREE.NearestFilter;

    hrPositionRT = new THREE.WebGLRenderTarget(innerWidth, innerHeight, {
        magFilter: filterMode, minFilter: filterMode, type: THREE.FloatType, stencilBuffer: false,
    });
    hrNormalRT = new THREE.WebGLRenderTarget(innerWidth, innerHeight, {
        magFilter: filterMode, minFilter: filterMode, type: THREE.FloatType, stencilBuffer: false,
    });
    positionRT = new THREE.WebGLRenderTarget(pr_width, pr_height, {
        magFilter: filterMode, minFilter: filterMode, type: THREE.FloatType, stencilBuffer: false,
    });
    normalRT = new THREE.WebGLRenderTarget(pr_width, pr_height, {
        magFilter: filterMode, minFilter: filterMode, type: THREE.FloatType, stencilBuffer: false,
    });
    emissionRT = new THREE.WebGLRenderTarget(pr_width, pr_height, {
        magFilter: filterMode, minFilter: filterMode, type: THREE.FloatType, stencilBuffer: false,
    });
    albedoRT = new THREE.WebGLRenderTarget(pr_width, pr_height, {
        magFilter: filterMode, minFilter: filterMode, type: THREE.FloatType, stencilBuffer: false,
    });
    materialRT = new THREE.WebGLRenderTarget(pr_width, pr_height, {
        magFilter: filterMode, minFilter: filterMode, type: THREE.FloatType, stencilBuffer: false,
    });
    momentMoveRT = new THREE.WebGLRenderTarget(pr_width, pr_height, {
        magFilter: filterMode, minFilter: filterMode, type: THREE.FloatType, stencilBuffer: false,
    }); 
    atrousRT = createDoubleFBO(pr_width, pr_height, filterMode);
    historyRT = createTripleFBO(pr_width, pr_height, filterMode);
    radianceRT = createTripleFBO(pr_width, pr_height, filterMode);


    positionBufferMaterial = new THREE.ShaderMaterial({
        fragmentShader: position_fs,
        vertexShader: position_vs,
        side: THREE.DoubleSide,
    });
    // be careful! apparently .clone() doesn't bind any associated texture uniforms
    positionBufferMaterialCulled = positionBufferMaterial.clone();
    positionBufferMaterialCulled.side = THREE.BackSide;

    normalBufferMaterial = new THREE.ShaderMaterial({
        uniforms: {
            "uCameraPos": { value: camera.position },
        },
        fragmentShader: normal_fs,
        vertexShader: normal_vs,
        side: THREE.DoubleSide,
    });
    // be careful! apparently .clone() doesn't bind any associated texture uniforms
    normalBufferMaterialCulled = normalBufferMaterial.clone();
    normalBufferMaterialCulled.side = THREE.BackSide;

    momentBufferMaterial = new THREE.ShaderMaterial({
        uniforms: {
            "uOldModelViewMatrix": { value: new THREE.Matrix4() },
        },
        fragmentShader: momentMove_fs,
        vertexShader: momentMove_vs,
        side: THREE.DoubleSide,
    });

    radianceBufferMaterial = new THREE.ShaderMaterial({
        uniforms: {
            "uRadMult":    { value: 1 },
            "uTotSamples": { value: 1 },
            "uCurrSample": { value: 1 },
            "uLowHistorySamples": { value: 1 },
            "uCameraPos":    { value: camera.position },
            "uCameraTarget": { value: controls.target },
            "uAspectRatio": { value: pr_width / pr_height },
            "uRandom": { value: new THREE.Vector4(0, 0, 0, 0) },
            "uTime": { value: 0 },
            "uFrame": { value: 0 },
            "uSSRQuality": { value: 0 },
            "uSSRSteps": { value: 0 },
            "uSSRBinarySteps": { value: 0 },
            "uSSRBounces": { value: 0 },
            "uSSRJitter": { value: 0 },
            "uSSRStepMult": { value: 0 },
            "uSSRStartingStep": { value: 0 },
            "uMaxIntersectionDepthDistance": { value: 0.5 },

            "uHistoryBuffer":  { type: "t", value: historyRT.rt3.texture },
            "uMaterialBuffer": { type: "t", value: materialRT.texture },
            "uAlbedoBuffer":   { type: "t", value: albedoRT.texture },
            "uPositionBuffer": { type: "t", value: positionRT.texture },
            "uNormalBuffer":   { type: "t", value: normalRT.texture },
            "uEmissionBuffer": { type: "t", value: emissionRT.texture },
        },
        transparent: true,
        blending: THREE.CustomBlending,
        blendEquation: THREE.AddEquation,
        blendSrc: THREE.OneFactor,
        blendDst: THREE.OneFactor,

        fragmentShader: radiance_fs,
        vertexShader: radiance_vs,
        side: THREE.DoubleSide,
    });

    atrousMaterial = new THREE.ShaderMaterial({
        defines: {
            "atrous3x3": true,
        },
        uniforms: {
            "uMaterial": { type: "t", value: materialRT.texture },
            "uRadiance": { type: "t", value: radianceRT.rt3.texture },
            "uNormal":   { type: "t",   value: normalRT.texture   },
            "uPosition": { type: "t", value: positionRT.texture },
            "uHistoryAccum": { type: "t", value: historyRT.rt3.texture },
            "uFilterHistoryModulation": { value: 0 },
            "uMaxFramesHistory": { value: 0 },
            "uStep": { value: 1.0 },
            "uScreenSize": { value: new THREE.Vector2(pr_width, pr_height) },
            "uC_phi": { value: 0.0 },
            "uN_phi": { value: 0.0 },
            "uP_phi": { value: 0.0 },
            "uH_phi": { value: 0.0 },
        },
        fragmentShader: atrous_fs,
        vertexShader: atrous_vs,
        side: THREE.DoubleSide,
    });

    historyTestMaterial = new THREE.ShaderMaterial({
        uniforms: {
            "uNormalBuffer":   { type: "t", value: normalRT.texture   },
            "uPositionBuffer": { type: "t", value: positionRT.texture },
            "uRadianceBuffer": { type: "t", value: radianceRT.rt3.texture },
            "uMomentMove":     { type: "t", value: momentMoveRT.texture },
            "uCameraPos":      { type: "t", value: camera.position },
            "uInvScreenSize":  { value: new THREE.Vector2(1 / pr_width, 1 / pr_height) },
        },
        fragmentShader: historyTest_fs,
        vertexShader: historyTest_vs,
        side: THREE.DoubleSide,
    });
    // apparently I can't just clone historyTestMaterial, otherwise it wont bind the textures..
    historyTestMaterialCulled = new THREE.ShaderMaterial({
        uniforms: {
            "uNormalBuffer":   { type: "t", value: normalRT.texture   },
            "uPositionBuffer": { type: "t", value: positionRT.texture },
            "uRadianceBuffer": { type: "t", value: radianceRT.rt3.texture },
            "uMomentMove":     { type: "t", value: momentMoveRT.texture },
            "uCameraPos":      { type: "t", value: camera.position },
            "uInvScreenSize":  { value: new THREE.Vector2(1 / pr_width, 1 / pr_height) },
        },
        fragmentShader: historyTest_fs,
        vertexShader: historyTest_vs,
        side: THREE.BackSide,
    });

    historyAccumMaterial = new THREE.ShaderMaterial({
        uniforms: {
            "uHistoryTest": { type: "t",  value: null },
            "uHistoryAccum": { type: "t", value: null },
            "uMomentMove": { type: "t", value: momentMoveRT.texture },
        },
        fragmentShader: historyAccum_fs,
        vertexShader: historyAccum_vs,
        side: THREE.DoubleSide,
    });

    radianceAccumMaterial = new THREE.ShaderMaterial({
        uniforms: {
            "uCurrentRadiance": { type: "t",  value: null },
            "uAccumulatedRadiance": { type: "t", value: null },
            "uHistoryBuffer": { type: "t", value: null },
            "uMomentMoveBuffer": { type: "t", value: null },
            "uMaxFramesHistory": { type: "t", value: null },
            "uRadianceLambdaFix": { value: 0 },
        },
        fragmentShader: radianceAccum_fs,
        vertexShader: radianceAccum_vs,
        side: THREE.DoubleSide,
    });

    feedbackLoopMaterial = new THREE.ShaderMaterial({
        uniforms: {
            "uHistory": { type: "t",  value: null },
            "uRadianceAccumRT": { type: "t",  value: null },
            "uAtrousRT": { type: "t", value: null },
            "uMaterial": { type: "t", value: materialRT.texture },
            "uFeedbackLoopFactor": { value: 0 },
            "uMaxFramesHistory": { value: 0 },
        },
        fragmentShader: feedbackloop_fs,
        vertexShader: feedbackloop_vs,
        side: THREE.DoubleSide,
    });

    window.displayMaterial = new THREE.ShaderMaterial({
        uniforms: {
            "uTexture": { type: "t", value: radianceRT.rt3.texture },
            "uExposure": { value: -1 },
            "uPRScreenSize": { value: new THREE.Vector2(pr_width, pr_height) },
            
            "uPosBuff":    { type: "t", value: positionRT.texture },
            "uHrPosBuff":  { type: "t", value: hrPositionRT.texture },
            "uNormBuff":   { type: "t", value: normalRT.texture },
            "uHrNormBuff": { type: "t", value: hrNormalRT.texture },
        },
        fragmentShader: display_fs,
        vertexShader: display_vs,
        side: THREE.DoubleSide,
    });

    window.addEventListener("keydown", (e) => {
        if(e.key == "k") kpress = true;
        if(e.key == "l") lpress = true;
        if(e.key == "p") ppress = true;
        if(e.key == "o") opress = true;
        if(e.key == "j") jpress = true;
        if(e.key == "m") mpress = true;
        if(e.key == "n") npress = true;
        if(e.key == "i") ipress = true;
        if(e.key == "b") bpress = true;
        
    });
    window.addEventListener("keyup", (e) => {
        if(e.key == "k") kpress = false;
        if(e.key == "l") lpress = false;
        if(e.key == "p") ppress = false;
        if(e.key == "o") opress = false;
        if(e.key == "j") jpress = false;
        if(e.key == "m") mpress = false;
        if(e.key == "n") npress = false;
        if(e.key == "i") ipress = false;
        if(e.key == "b") bpress = false;
    });

    displayQuadMesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2), displayMaterial);
    displayScene.add(displayQuadMesh);

    createScene(scene);

    initGUI();
    animate(0);
}

function animate(now) {
    stats.begin();

    requestAnimationFrame( animate );
    now *= 0.001;

    // I had to disable scope.update() during mousemove/mousedown etc
    // inside OrbitControls.js,
    // otherwise controls.lastViewMatrixInverse would have been equal to the
    // current matrix (while I was clicking/dragging), and that was messing history
    // test calculations 
    // I think I haven't disabled scope.update() inside the touch-event handling, so 
    // it's possible that this project wont work on mobiles until you remove
    // scope.update() from there aswell
    controls.update();


    updateScene(now, scene);


    // we need to create moment buffers BEFORE we update normal/position RTs
    // **************** create moment buffers
    // are you surprised I'm using the matrixWorldInverse? then think more..
    let oldCameraMatrix = controls.lastViewMatrixInverse;

    renderer.setRenderTarget(momentMoveRT);
    renderer.clear();

    for(let i = scene.children.length - 1; i >= 0; i--) {
        scene.children[i].savedMaterial = scene.children[i].material;
        scene.children[i].material = momentBufferMaterial;

        if(scene.children[i].savedMaterial.side == THREE.BackSide) {
            momentBufferMaterial.side = THREE.BackSide;
        } else {
            momentBufferMaterial.side = THREE.DoubleSide;   
        }
        momentBufferMaterial.needsUpdate = true;

        let viewModelMatrix = new THREE.Matrix4();
        viewModelMatrix.multiplyMatrices(oldCameraMatrix, scene.children[i].oldWorldMatrix);
        momentBufferMaterial.uniforms.uOldModelViewMatrix.value = viewModelMatrix;
        momentBufferMaterial.uniforms.uOldModelViewMatrix.needsUpdate = true;
        momentBufferMaterial.uniforms.needsUpdate = true;

        // remember: momentBufferScene will always hold 1 single object each time render() is called
        momentBufferScene.add(scene.children[i]);

        renderer.render( momentBufferScene, camera );

        // re-add again this object to scene since it was removed by momentBufferScene.add(...)
        // it should also remove the object from momentBufferScene
        scene.add(momentBufferScene.children[0]);
    }
    for(let i = 0; i < scene.children.length; i++) {
        scene.children[i].material = scene.children[i].savedMaterial;
    }
    // **************** create moment buffers - END



    // ************** create history buffer
    // will use uniform sampler2D uNormalBuffer;
    //          uniform sampler2D uPositionBuffer;
    // of the previous frames
    // on rt1 we add the success vs unsuccess buffer (either +1 or -1)
    historyTestMaterial.uniforms.uCameraPos.value = camera.position;
    historyTestMaterialCulled.uniforms.uCameraPos.value = camera.position;
    
    for(let i = 0; i < scene.children.length; i++) {
        scene.children[i].savedMaterial = scene.children[i].material;

        if(scene.children[i].savedMaterial.side == THREE.BackSide) {
            scene.children[i].material = historyTestMaterialCulled;
        } else {
            scene.children[i].material = historyTestMaterial;
        }
    }

    renderer.setRenderTarget(historyRT.rt1);
    renderer.clear();
    renderer.render( scene, camera );

    for(let i = 0; i < scene.children.length; i++) {
        scene.children[i].material = scene.children[i].savedMaterial;
    }

    // ************** history accumulation
    historyRT.swap_rt2_rt3();
    // rt2 now holds the previously accumulated values
    // rt3 updates the old accumulated values with the new buffer on rt1
    renderer.setRenderTarget(historyRT.rt3);
    renderer.clear();
    displayQuadMesh.material = historyAccumMaterial;
    historyAccumMaterial.uniforms.uHistoryTest.value = historyRT.rt1.texture;
    historyAccumMaterial.uniforms.uHistoryAccum.value = historyRT.rt2.texture;
    renderer.render( displayScene, camera );
    // ************** create history buffer - END



    // **************** position buffer
    for(let i = 0; i < scene.children.length; i++) {
        scene.children[i].savedMaterial = scene.children[i].material;

        if(scene.children[i].savedMaterial.side == THREE.BackSide) {
            scene.children[i].material = positionBufferMaterialCulled;
        } else {
            scene.children[i].material = positionBufferMaterial;
        }

    }

    renderer.setRenderTarget(positionRT);
    renderer.clear();
    renderer.render( scene, camera );

    renderer.setRenderTarget(hrPositionRT);
    renderer.clear();
    renderer.render( scene, camera );

    for(let i = 0; i < scene.children.length; i++) {
        scene.children[i].material = scene.children[i].savedMaterial;
    }
    // **************** position buffer - END



    // at this point all meshes have their material-materials assigned
    // ******* creating emission buffer ********
    for(let i = 0; i < scene.children.length; i++) {
        scene.children[i].material.uniforms.uStep.value = 0;
    }
    renderer.setRenderTarget(emissionRT);
    renderer.clear();
    renderer.render( scene, camera );

    // ******* creating albedo buffer ********
    for(let i = 0; i < scene.children.length; i++) {
        scene.children[i].material.uniforms.uStep.value = 1;
    }
    renderer.setRenderTarget(albedoRT);
    renderer.clear();
    renderer.render( scene, camera );

    // ******* creating material buffer ********
    for(let i = 0; i < scene.children.length; i++) {
        scene.children[i].material.uniforms.uStep.value = 2;
    }
    renderer.setRenderTarget(materialRT);
    renderer.clear();
    renderer.render( scene, camera );
   


    // ************** normal buffer creation
    normalBufferMaterial.uniforms.uCameraPos.value = camera.position;
    normalBufferMaterialCulled.uniforms.uCameraPos.value = camera.position;

    for(let i = 0; i < scene.children.length; i++) {
        scene.children[i].savedMaterial = scene.children[i].material;

        if(scene.children[i].savedMaterial.side == THREE.BackSide) {
            scene.children[i].material = normalBufferMaterialCulled;
        } else {
            scene.children[i].material = normalBufferMaterial;
        }
    }

    renderer.setRenderTarget(normalRT);
    renderer.clear();
    renderer.render( scene, camera );

    renderer.setRenderTarget(hrNormalRT);
    renderer.clear();
    renderer.render( scene, camera );

    for(let i = 0; i < scene.children.length; i++) {
        scene.children[i].material = scene.children[i].savedMaterial;
    }
    // ************** normal buffer creation - END
    


    // ************** rendering samples
    renderer.setRenderTarget(radianceRT.rt1);
    renderer.clear();
    for(let i = 0; i < controller.spp + controller.lowhsspp; i++) {
        renderer.setRenderTarget(radianceRT.rt1);
        radianceBufferMaterial.uniforms.uTotSamples.value = (controller.spp + controller.lowhsspp);
        radianceBufferMaterial.uniforms.uCurrSample.value = i;
        radianceBufferMaterial.uniforms.uLowHistorySamples.value = controller.lowhsspp;
        radianceBufferMaterial.uniforms.uCameraPos.value = camera.position;
        radianceBufferMaterial.uniforms.uCameraTarget.value = controls.target;
        radianceBufferMaterial.uniforms.uRandom.value = new THREE.Vector4(Math.random(), Math.random(), Math.random(), Math.random());
        radianceBufferMaterial.uniforms.uTime.value = now;
        radianceBufferMaterial.uniforms.uFrame.value = radianceFrameCount % 256;
        radianceBufferMaterial.uniforms.uSSRQuality.value = controller.ssrQuality;
        radianceBufferMaterial.uniforms.uSSRSteps.value = controller.ssrSteps;
        radianceBufferMaterial.uniforms.uSSRBinarySteps.value = controller.ssrBinarySteps;
        radianceBufferMaterial.uniforms.uSSRBounces.value = controller.ssrBounces;
        radianceBufferMaterial.uniforms.uSSRJitter.value = controller.ssrJitter;
        radianceBufferMaterial.uniforms.uSSRStepMult.value = controller.ssrStepMult;
        radianceBufferMaterial.uniforms.uSSRStartingStep.value = controller.ssrStartingStep;
        radianceBufferMaterial.uniforms.uMaxIntersectionDepthDistance.value = controller.maxIntersectionDepthDistance;
        displayQuadMesh.material = radianceBufferMaterial;
        renderer.render(displayScene, camera );

        radianceFrameCount++;
    }
    // ************** rendering samples - END



    // ************** accumulating radiance 
    radianceRT.swap_rt2_rt3();

    renderer.setRenderTarget(radianceRT.rt3);
    renderer.clear();
    displayQuadMesh.material = radianceAccumMaterial;
    radianceAccumMaterial.uniforms.uCurrentRadiance.value = radianceRT.rt1.texture;
    radianceAccumMaterial.uniforms.uAccumulatedRadiance.value = radianceRT.rt2.texture;
    radianceAccumMaterial.uniforms.uHistoryBuffer.value = historyRT.rt3.texture;
    radianceAccumMaterial.uniforms.uMomentMoveBuffer.value = momentMoveRT.texture;
    radianceAccumMaterial.uniforms.uMaxFramesHistory.value = controller.maxFramesHistory;
    radianceAccumMaterial.uniforms.uRadianceLambdaFix.value = controller.radianceLambdaFix_;
    renderer.render(displayScene, camera );
    // ************** accumulating radiance - END



    // **************** atrous
    atrousMaterial.uniforms.uN_phi.value = controller.n_phi;
    atrousMaterial.uniforms.uP_phi.value = controller.p_phi;
    atrousMaterial.uniforms.uC_phi.value = controller.c_phi;
    atrousMaterial.uniforms.uH_phi.value = controller.h_phi;

    renderer.setRenderTarget(atrousRT.write);
    atrousMaterial.uniforms.uRadiance.value = radianceRT.rt3.texture;
    atrousMaterial.uniforms.uHistoryAccum.value = historyRT.rt3.texture;
    atrousMaterial.uniforms.uMaxFramesHistory.value = controller.maxFramesHistory;
    atrousMaterial.uniforms.uFilterHistoryModulation.value = controller.filterHistoryModulation;
    atrousMaterial.uniforms.uStep.value  = 1.0;
    displayQuadMesh.material = atrousMaterial;
    renderer.clear();
    renderer.render(displayScene, camera );

    for(let i = 0; i < Math.floor(controller.iterations); i++) {
        atrousRT.swap();

        renderer.setRenderTarget(atrousRT.write);
        atrousMaterial.uniforms.uRadiance.value = atrousRT.read.texture;
        atrousMaterial.uniforms.uStep.value  *= controller.stepMultiplier;
        atrousMaterial.uniforms.uC_phi.value *= controller.c_phiMultPerIt;
        displayQuadMesh.material = atrousMaterial;
        renderer.clear();
        renderer.render(displayScene, camera );
    }
    atrousRT.swap();
    // **************** atrous - END



    // ***********  feedback loop between atrous & radianceRT
    radianceRT.swap_rt2_rt3();
    renderer.setRenderTarget(radianceRT.rt3);
    renderer.clear();
    displayQuadMesh.material = feedbackLoopMaterial;
    feedbackLoopMaterial.uniforms.uHistory.value = historyRT.rt3.texture;
    feedbackLoopMaterial.uniforms.uRadianceAccumRT.value = radianceRT.rt2.texture;
    feedbackLoopMaterial.uniforms.uAtrousRT.value = atrousRT.write.texture;
    feedbackLoopMaterial.uniforms.uFeedbackLoopFactor.value = controller.feedbackLoopFactor;
    feedbackLoopMaterial.uniforms.uMaxFramesHistory.value = controller.maxFramesHistory;
    renderer.render(displayScene, camera);
    // ***********  feedback loop between atrous & radianceRT - END
    


    // *********** final render pass
    renderer.setRenderTarget(null);
    displayQuadMesh.material = displayMaterial;
    displayQuadMesh.material.uniforms.uTexture.value = atrousRT.write.texture;
    displayQuadMesh.material.uniforms.uExposure.value = controller.exposure;
        
    if(kpress) displayQuadMesh.material.uniforms.uTexture.value = radianceRT.rt3.texture;
    if(lpress) displayQuadMesh.material.uniforms.uTexture.value = normalRT.texture;
    if(opress) displayQuadMesh.material.uniforms.uTexture.value = positionRT.texture;
    if(jpress) displayQuadMesh.material.uniforms.uTexture.value = historyRT.rt1.texture;
    if(ppress) displayQuadMesh.material.uniforms.uTexture.value = historyRT.rt3.texture;
    if(npress) displayQuadMesh.material.uniforms.uTexture.value = momentMoveRT.texture;
    if(mpress) displayQuadMesh.material.uniforms.uTexture.value = radianceRT.rt1.texture;
    if(ipress) displayQuadMesh.material.uniforms.uTexture.value = emissionRT.texture;
    if(bpress) displayQuadMesh.material.uniforms.uTexture.value = albedoRT.texture;

    renderer.clear();
    renderer.render(displayScene, camera);
    // *********** final render pass - END

	stats.end();
}

makeSceneShaders();

export { atrousMaterial };