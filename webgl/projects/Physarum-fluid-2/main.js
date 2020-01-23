(function() {

window.addEventListener("load", init);

// let renderer;
let canvas;
let scene;
let particlesScene;
let camera;
function init() {
    window.renderer = new THREE.WebGLRenderer({ 
        alpha: false, 
        depth: false, 
        stencil: false, 
        antialias: true, 
        preserveDrawingBuffer: true 
    });
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( innerWidth, innerHeight );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.autoClear = false;

    document.body.appendChild(renderer.domElement);
    canvas = renderer.domElement;

    scene = new THREE.Scene();
    particlesScene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 10);


    window.initFluid();



    window.addEventListener("keypress", (e) => {

        // 25.5   21.5 

        switch(e.key) {
            case "g":
                window.nowTarget = 6.5;
                break;            
            case "h":
                window.nowTarget = 7.5;
                break;
            case "j":
                window.nowTarget = 17.5;
                break;
            case "k":
                window.nowTarget = 21.5;
                break;            
            case "l":
                // window.nowTarget = 25.5;
                window.nowTarget = 23;
                break;
            case "f" : 
                window.nowTarget = 11;
                break;
        }
    });



    initMaterials();
    initParticlesGeometry();
    initParticlesTexture();
    // initTrailTexture();

    animate(0);
    // debugView();

}

function createDoubleFBO (w, h, filtering) {
    let rt1 = new THREE.WebGLRenderTarget(w, h, {
        type:          THREE.FloatType,
        minFilter:     filtering || THREE.LinearFilter,
        magFilter:     filtering || THREE.LinearFilter,
        wrapS:     THREE.RepeatWrapping,
        wrapT:     THREE.RepeatWrapping,
        format:        THREE.RGBAFormat,
        depthBuffer:   false,
        stencilBuffer: false,
        anisotropy:    1,
    });

    let rt2 = new THREE.WebGLRenderTarget(w, h, {
        type:          THREE.FloatType,
        minFilter:     filtering || THREE.LinearFilter,
        magFilter:     filtering || THREE.LinearFilter,
        wrapS:     THREE.RepeatWrapping,
        wrapT:     THREE.RepeatWrapping,
        format:        THREE.RGBAFormat,
        depthBuffer:   false,
        stencilBuffer: false,
        anisotropy:    1,
    });

    return {
        read:  rt1,
        write: rt2,
        swap: function() {
            let temp = this.read;
            this.read = this.write;
            this.write = temp;
        }
    };
}

let trailMap;
let particlesPosDir;
let particlesTextureSize = 1024;
let senseAndMovePass;
let depositPass;
let blurDecayPass;
let displayPass;
let splatTextureMaterial;
let splatDyeTextureMaterial;
let quadPlaneMesh;
let particlesMesh;

let canvwidth = innerWidth;
let canvheight = innerHeight;
function initMaterials() {

    particlesPosDir = createDoubleFBO(particlesTextureSize, particlesTextureSize, THREE.LinearFilter); 
    trailMap        = createDoubleFBO(innerWidth, innerHeight, THREE.LinearFilter); 

    
    senseAndMovePass = new THREE.ShaderMaterial({
        uniforms: {
            uTexelSize:       { value: 1 / particlesTextureSize },
            uScreenSize:      { value: new THREE.Vector2(innerWidth, innerHeight) },
            uParticlesPosDir: { type: "t", value: particlesPosDir.read.texture },
            uFluidVelocity:   { type: "t", value: null },
            uTrailMap:        { type: "t", value: trailMap.read.texture },
            uTime:            { value: 0.0 },
            dt:               { value: 0.0 },
        },
        vertexShader: particlesVert, 
        fragmentShader: particlesFrag,
    });

    depositPass = new THREE.ShaderMaterial( {
        uniforms: {
            uTexelSize:       { value: 1 / particlesTextureSize },
            uScreenSize:      { value: new THREE.Vector2(innerWidth, innerHeight) },
            uParticlesPosDir: { type: "t", value: particlesPosDir.read.texture },
        },
        vertexShader: depositVert, 
        fragmentShader: depositFrag,

        blending: THREE.CustomBlending,
        blendEquation: THREE.AddEquation, 
        blendSrc: THREE.OneFactor, 
        blendDst: THREE.OneFactor, 
    });


    blurDecayPass = new THREE.ShaderMaterial( {
        uniforms: {
            uTexelSize:       { value: new THREE.Vector2(1 / innerWidth, 1 / innerHeight) },
            uTrailMap:        { type: "t", value: trailMap.read.texture },
            uFluidDye:   { type: "t", value: null },
            dt:               { value: 0.0 },
        },
        vertexShader: blurDecayVert, 
        fragmentShader: blurDecayFrag,
    });

    displayPass = new THREE.ShaderMaterial( {
        uniforms: {
            uTrailMap:        { type: "t", value: trailMap.read.texture },
            uFluidVelocity:   { type: "t", value: null },
            uFluidDye:        { type: "t", value: null },
            dt:               { value: 0.0 },
        },
        vertexShader: displayVert, 
        fragmentShader: displayFrag,
    });


    splatTextureMaterial = new THREE.ShaderMaterial( {
        uniforms: {
            uTexture: { type: "t", value: null },
        },
        vertexShader: splatTextureVert, 
        fragmentShader: splatTextureFrag,
    });

    splatDyeTextureMaterial = new THREE.ShaderMaterial( {
        uniforms: {
            uTexture: { type: "t", value: null },
        },
        vertexShader: splatDyeTextureVert, 
        fragmentShader: splatDyeTextureFrag,

        blending: THREE.CustomBlending,
        blendEquation: THREE.AddEquation, 
        blendSrc: THREE.OneFactor, 
        blendDst: THREE.OneFactor, 
    });



    quadPlane = new THREE.PlaneBufferGeometry(2, 2);
    quadPlaneMesh = new THREE.Mesh(quadPlane, senseAndMovePass);
    scene.add(quadPlaneMesh);
}

function animate(now) {
    const dt = calcDeltaTime();
    now *= 0.001;

    step(dt, now);

    requestAnimationFrame(animate);
}

let lastUpdateTime = Date.now();
function calcDeltaTime () {
    let now = Date.now();
    let dt = (now - lastUpdateTime) / 1000;
    dt = Math.min(dt, 0.016666);
    lastUpdateTime = now;
    return dt;
}

window.now = 6.5;
window.nowTarget = 6.5;
let count = 0;
// function step(dt, now) {
function step(dt) {
   
    count++;

    window.now = window.now * 0.95 + window.nowTarget * 0.05;


    // ********* sense step - updates the pos/dir framebuffer ***********
    particlesMesh.material = senseAndMovePass;
    senseAndMovePass.uniforms.dt.value               = dt;
    senseAndMovePass.uniforms.uParticlesPosDir.value = particlesPosDir.read.texture;
    senseAndMovePass.uniforms.uTrailMap.value        = trailMap.read.texture;
    senseAndMovePass.uniforms.uFluidVelocity.value   = window.fluidSimVelocityFBO.read.texture;
    senseAndMovePass.uniforms.uTime.value            = now;
 
    renderer.setRenderTarget(particlesPosDir.write);
    renderer.clear();
    renderer.render(particlesScene, camera);
    particlesPosDir.swap();
    // ********* sense step - updates the pos/dir framebuffer - END ***********




    // ********* deposit step - updates the trailmap framebuffer ***********
    particlesMesh.material = depositPass;
    depositPass.uniforms.uParticlesPosDir.value = particlesPosDir.read.texture;
 
    renderer.setRenderTarget(trailMap.write);
    renderer.render(particlesScene, camera);
    // trailMap.swap();

    splatDyeTextureMaterial.uniforms.uTexture.value = window.fluidSimDyeFBO.read.texture;
    quadPlaneMesh.material = splatDyeTextureMaterial;
    renderer.setRenderTarget(trailMap.write);
    renderer.render(scene, camera);

    trailMap.swap();
    // ********* deposit step - updates the trailmap framebuffer - END ***********
 





    // // ********* display pass ***********
    // quadPlaneMesh.material = displayPass;
    // displayPass.uniforms.dt.value               = dt;
    // displayPass.uniforms.uFluidVelocity.value   = window.fluidSimVelocityFBO.read.texture;//;trailMap.read.texture;
    // displayPass.uniforms.uTrailMap.value        = trailMap.read.texture;
 
    // renderer.setRenderTarget(null);
    // renderer.clear();
    // renderer.render(scene, camera);
    // // ********* display pass - END ***********



    let blurPasses = 1;
    for(let i = 0; i < blurPasses; i++) {
        // ********* blur + decay step - updates the trailmap framebuffer ***********
        quadPlaneMesh.material = blurDecayPass;
        blurDecayPass.uniforms.dt.value               = dt;
        blurDecayPass.uniforms.uTrailMap.value        = trailMap.read.texture;
        blurDecayPass.uniforms.uFluidDye.value   = window.fluidSimDyeFBO.read.texture;
         
        renderer.setRenderTarget(trailMap.write);
        renderer.clear();
        renderer.render(scene, camera);
        if(i < blurPasses - 1)
            trailMap.swap();
       // ********* blur + decay step - updates the trailmap framebuffer - END ***********
    }



    

    // ********* display pass ***********
    quadPlaneMesh.material = displayPass;
    displayPass.uniforms.dt.value               = dt;
    displayPass.uniforms.uFluidVelocity.value   = window.fluidSimVelocityFBO.read.texture;//;trailMap.read.texture;
    displayPass.uniforms.uFluidDye.value        = window.fluidSimDyeFBO.read.texture;//;trailMap.read.texture;
    displayPass.uniforms.uTrailMap.value        = trailMap.write.texture;
 
    renderer.setRenderTarget(null);
    renderer.clear();
    renderer.render(scene, camera);
    // ********* display pass - END ***********





    // make write and read trailmap equals
    splatTextureMaterial.uniforms.uTexture.value = trailMap.write.texture;
    quadPlaneMesh.material = splatTextureMaterial;
    renderer.setRenderTarget(trailMap.read);
    renderer.clear();
    renderer.render(scene, camera);




    // // ********* display pass ***********
    // quadPlaneMesh.material = displayPass;
    // displayPass.uniforms.dt.value               = dt;
    // displayPass.uniforms.uFluidVelocity.value   = window.fluidSimVelocityFBO.read.texture;//;trailMap.read.texture;
    // displayPass.uniforms.uTrailMap.value        = trailMap.read.texture;
 
    // renderer.setRenderTarget(null);
    // renderer.clear();
    // renderer.render(scene, camera);
    // // ********* display pass - END ***********




}



function initParticlesGeometry() {
    var geometry = new THREE.BufferGeometry();
    // create a simple square shape. We duplicate the top left and bottom right
    // vertices because each vertex needs to appear once per triangle.
    var vertices = [];
    var verticesPos = [];

    for(let i = 0; i < particlesTextureSize; i++) {
        for(let j = 0; j < particlesTextureSize; j++) {
            let px = i;
            let py = j;

            vertices.push(px, py);
        }
    }

    for(let i = 0; i < particlesTextureSize; i++) {
        for(let j = 0; j < particlesTextureSize; j++) {
            verticesPos.push(i, j, 0);
        }
    }

    // itemSize = 3 because there are 3 values (components) per vertex
    geometry.setAttribute( 'position', new THREE.BufferAttribute( new Float32Array(verticesPos), 3 ) );
    geometry.setAttribute( 'aDataPos', new THREE.BufferAttribute( new Float32Array(vertices), 2 ) );
    particlesMesh = new THREE.Points( geometry, new THREE.MeshBasicMaterial({ }) );
    particlesMesh.frustumCulled = false;
    particlesScene.add(particlesMesh);
}

function initParticlesTexture() {
    let amount = particlesTextureSize * particlesTextureSize;
    let array = new Float32Array(4 * amount);

    let padding = 50;

    for(let i = 0; i < amount * 4; i += 4) {

        let p  = new THREE.Vector2(
            Math.random() * (innerWidth - padding * 2) + padding,
            Math.random() * (innerHeight - padding * 2) + padding, 
        );

        // let p  = new THREE.Vector2(
        //     Math.random() * 2 - 1,
        //     Math.random() * 2 - 1, 
        // ).normalize().multiplyScalar(Math.random() * 450).add(new THREE.Vector2(innerWidth * 0.5, innerHeight * 0.5));
        
        let cp = new THREE.Vector2(innerWidth * 0.5, innerHeight * 0.5);

        // let v2 = new THREE.Vector2(Math.random() * 2 - 1, Math.random() * 2 - 1).normalize();
        let v2 = p.clone().sub(cp).normalize();


        array[i + 0] = p.x;
        array[i + 1] = p.y;
        array[i + 2] = v2.x;
        array[i + 3] = v2.y;
    }

    let dataTex = new THREE.DataTexture(
        array,
        particlesTextureSize, 
        particlesTextureSize,
        THREE.RGBAFormat, 
        THREE.FloatType
    );

    
    splatTextureMaterial.uniforms.uTexture.value = dataTex;
    quadPlaneMesh.material = splatTextureMaterial;

    renderer.setRenderTarget(particlesPosDir.read);
    renderer.render(scene, camera);
    
    renderer.setRenderTarget(particlesPosDir.write);
    renderer.render(scene, camera);
}

function initTrailTexture() {
    let tsize = 1024;
    let amount = tsize * tsize;
    let array = new Float32Array(4 * amount);

    let padding = 50;

    for(let i = 0; i < amount * 4; i += 4) {

        // let p  = new THREE.Vector2(
        //     Math.random() * (innerWidth - padding * 2) + padding,
        //     Math.random() * (innerHeight - padding * 2) + padding, 
        // );

        let p  = new THREE.Vector2(
            Math.random() * 2 - 1,
            Math.random() * 2 - 1, 
        ).normalize().multiplyScalar(Math.random() * 300).add(new THREE.Vector2(innerWidth * 0.5, innerHeight * 0.5));
        
        let cp = new THREE.Vector2(innerWidth * 0.5, innerHeight * 0.5);

        // let v2 = new THREE.Vector2(Math.random() * 2 - 1, Math.random() * 2 - 1).normalize();
        let v2 = p.clone().sub(cp).normalize();


        array[i + 0] = p.x % 20 < 10 ? 50 : 0;
        array[i + 1] = p.x % 20 < 10 ? 50 : 0;
        array[i + 2] = 0;//v2.x;
        array[i + 3] = 0;//v2.y;
    }

    let dataTex = new THREE.DataTexture(
        array,
        tsize, 
        tsize,
        THREE.RGBAFormat, 
        THREE.FloatType
    );
    
    splatTextureMaterial.uniforms.uTexture.value = dataTex;
    quadPlaneMesh.material = splatTextureMaterial;

    renderer.setRenderTarget(trailMap.read);
    renderer.render(scene, camera);

    renderer.setRenderTarget(trailMap.write);
    renderer.render(scene, camera);
}







function debugView() {
    const dt = calcDeltaTime();




    // ********* sense step - updates the pos/dir framebuffer ***********
    particlesMesh.material = senseAndMovePass;
    senseAndMovePass.uniforms.dt.value               = dt;
    senseAndMovePass.uniforms.uParticlesPosDir.value = particlesPosDir.read.texture;
    senseAndMovePass.uniforms.uTrailMap.value        = trailMap.read.texture;
 
    renderer.setRenderTarget(particlesPosDir.write);
    renderer.render(particlesScene, camera);
    particlesPosDir.swap();
    // ********* sense step - updates the pos/dir framebuffer - END ***********



    // ********* deposit step - updates the trailmap framebuffer ***********
    particlesMesh.material = depositPass;
    depositPass.uniforms.uParticlesPosDir.value = particlesPosDir.read.texture;
 
    renderer.setRenderTarget(trailMap.write);
    renderer.render(particlesScene, camera);
    trailMap.swap();
    // ********* deposit step - updates the trailmap framebuffer - END ***********
 


 
    for(let i = 0; i < 20; i++) {
       // ********* blur + decay step - updates the trailmap framebuffer ***********
       quadPlaneMesh.material = blurDecayPass;
       blurDecayPass.uniforms.dt.value               = dt;
       blurDecayPass.uniforms.uTrailMap.value        = trailMap.read.texture;
        
       renderer.setRenderTarget(trailMap.write);
       renderer.render(scene, camera);
       trailMap.swap();
       // ********* blur + decay step - updates the trailmap framebuffer - END ***********
    }


    
    // // ********* debug pass ***********
    // quadPlaneMesh.material = displayPass;
    // displayPass.uniforms.dt.value               = dt;
    // displayPass.uniforms.uTrailMap.value        = trailMap.read.texture;
   
    // renderer.setRenderTarget(null);
    // renderer.render(scene, camera);
    // // ********* debug pass - END ***********
    // return;
      

 
 
    // ********* display pass ***********
    quadPlaneMesh.material = displayPass;
    displayPass.uniforms.dt.value               = dt;
    displayPass.uniforms.uTrailMap.value        = trailMap.read.texture;
 
    renderer.setRenderTarget(null);
    renderer.render(scene, camera);
    // ********* display pass - END ***********
}

})();