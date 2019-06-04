window.addEventListener("load", init);

var scene;
var postProcScene;
var camera;
var postProcCamera;
var controls;
var renderer;

var cameraFocalDistance = 49;
var bokehStrength       = 0.021;
var bokehFalloff        = 130;
var falloffType         = 1;
var uRandomValue        = 0;

var nodesMaterial;
var linesMaterial;
var connectedLinesMaterial;

let nodes = [ ];
let lines = [ ];
let connectedLines = [ ];
let nodesGeometry;
let linesGeometry;
let connectedLinesGeometry;

let centralNodeIndex = -1;

var offscreenRT;

var controls = { };

function init() {    
    renderer = new THREE.WebGLRenderer( { /*alpha: true*/ } );
    // renderer.autoClear = false;    
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( innerWidth, innerHeight );
    document.body.appendChild(renderer.domElement);

    scene            = new THREE.Scene();
    scene.background = new THREE.Color(0x151010);
    postProcScene    = new THREE.Scene();

    // let cameraPosition = new THREE.Vector3(0.2, 0.25, -1).normalize().multiplyScalar(cameraFocalDistance);
    // cameraPosition.applyAxisAngle(new THREE.Vector3(0,1,0), 1.3);
    camera = new THREE.PerspectiveCamera( 20, innerWidth / innerHeight, 2, 200 );
    // camera.position.set( cameraPosition.x, cameraPosition.y, cameraPosition.z ); //.set(0,0, -cameraFocalDistance);
    camera.position.set( -7, 0, -49 ); //.set(0,0, -cameraFocalDistance);
    // let rad = Math.sqrt(camera.position.x * camera.position.x + camera.position.z * camera.position.z);
    // let angle = 5;
    // camera.position.set( Math.cos(angle) * rad, cameraPosition.y, Math.sin(angle) * rad ); //.set(0,0, -cameraFocalDistance);


    postProcCamera = new THREE.PerspectiveCamera( 20, innerWidth / innerHeight, 2, 200 );
    postProcCamera.position.set(0,0, 10);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.enableDamping   = true;
	controls.dampingFactor   = 0.05;
	controls.minAzimuthAngle = -Infinity; // radians
	controls.maxAzimuthAngle = +Infinity; // radians
	controls.minPolarAngle   = 0.85;      // radians
    controls.maxPolarAngle   = Math.PI - 0.85; // radians
    controls.rotateSpeed     = 0.1;
    //controls.autoRotate = true;
    //controls.autoRotateSpeed = 0.05;


    offscreenRT = new THREE.WebGLRenderTarget(innerWidth, innerHeight, {
        stencilBuffer: false,
        depthBuffer: false,
        type: THREE.FloatType,
    });

    var postProcQuadGeo = new THREE.PlaneBufferGeometry(2,2);
    var postProcQuadMaterial = new THREE.ShaderMaterial({
        vertexShader: postprocv,
        fragmentShader: postprocf,
        uniforms: {
            texture: { type: "t", value: offscreenRT.texture },
        },
        side: THREE.DoubleSide,
    });
    postProcScene.add(new THREE.Mesh(postProcQuadGeo, postProcQuadMaterial));


    
    linesMaterial = new THREE.ShaderMaterial({
        vertexShader: linev,
        fragmentShader: linef,
        uniforms: {
            resolution: new THREE.Uniform(new THREE.Vector2(innerWidth, innerHeight)),
            bokehStrength: { value: bokehStrength },
            bokehFalloff: { value: bokehFalloff },
            falloffType: { value: falloffType },
            uRandomValue: { value: uRandomValue },
            cameraFocalDistance: { value: cameraFocalDistance },
            time: { value: 0 },
        },
        side: THREE.DoubleSide,
        depthTest: false,

        blending:      THREE.CustomBlending,
        blendEquation: THREE.AddEquation,
        blendSrc:      THREE.OneFactor, 
        blendSrcAlpha: THREE.OneFactor,
        blendDst:      THREE.OneFactor, 
        blendDstAlpha: THREE.OneFactor,  
    });


    createLines();
    // createLinesGeometry();


    buildControls();
    render();
}  

function render(now) {
    requestAnimationFrame(render);

    checkControls();

    uRandomValue += 1; //Math.random() * 1000;


    linesMaterial.uniforms.time.value                = now * 0.0005;
    linesMaterial.uniforms.bokehStrength.value       = bokehStrength;
    linesMaterial.uniforms.bokehFalloff.value        = bokehFalloff;
    linesMaterial.uniforms.cameraFocalDistance.value = cameraFocalDistance;
    linesMaterial.uniforms.falloffType.value         = falloffType;
    linesMaterial.uniforms.uRandomValue.value        = uRandomValue;


    controls.update();
    renderer.render(scene, camera, offscreenRT);

    renderer.render(postProcScene, postProcCamera);
}




function createLines1() {


    let vertexCount = 3500;
    for(let j = 0; j < vertexCount; j++) {
        
        let angle  = j     * 0.16;
        let angle2 = (j+1) * 0.16;
        let z1 = j     * 0.03 - (vertexCount * 0.03 * 0.5);
        let z2 = (j+1) * 0.03 - (vertexCount * 0.03 * 0.5);

        let rad = 2.5 + Math.abs(z1) * 0.1;

        let rn1 = {
            x: Math.cos(angle) * rad, 
            y: Math.sin(angle) * rad,
            z: z1,
            col: [1, 1, 1],
        };

        let rn2 = {
            x: Math.cos(angle2) * rad, 
            y: Math.sin(angle2) * rad,
            z: z2,
            col: [1, 1, 1],
        };

        lines.push({
            x1: rn1.x,
            y1: rn1.y,
            z1: rn1.z,
        
            x2: rn2.x,
            y2: rn2.y,
            z2: rn2.z,
        
            c1r: rn1.col[0], 
            c1g: rn1.col[1], 
            c1b: rn1.col[2],
            
            c2r: rn2.col[0], 
            c2g: rn2.col[1], 
            c2b: rn2.col[2],
        });

    }
}

function createLines() {
    let loader2 = new THREE.OBJLoader2();
    loader2.setUseIndices(false);
    loader2.load(
        "models/wolf2.obj",
        function ( object ) {
            let geometry = object.detail.loaderRootNode.children[0].geometry;     
            let vertices = geometry.attributes.position.array;

            let maxx = 0;
            let vertexCount = 350;
            for(let j = 0; j < vertices.length; j += 9) {

                let scale = 5;
                let t_x = -0.3 * scale;
                let t_y = -1.15 * scale;
                let t_z = 0;

                let v1 = {
                    x: vertices[j + 0] * scale + t_x,
                    y: vertices[j + 1] * scale + t_y,
                    z: vertices[j + 2] * scale + t_z,
                };
                let v2 = {
                    x: vertices[j + 3] * scale + t_x,
                    y: vertices[j + 4] * scale + t_y,
                    z: vertices[j + 5] * scale + t_z,
                };
                let v3 = {
                    x: vertices[j + 6] * scale + t_x,
                    y: vertices[j + 7] * scale + t_y,
                    z: vertices[j + 8] * scale + t_z,
                };


                // x interval between [-11 .. 15]


                // if(v1.x < maxx) maxx = v1.x;
                // console.log(maxx);



                // let angle  = j     * 0.16;
                // let angle2 = (j+1) * 0.16;
                // let z1 = j     * 0.008 - (vertexCount * 0.008 * 0.5);
                // let z2 = (j+1) * 0.008 - (vertexCount * 0.008 * 0.5);
            
                // let rad = 2.5 + Math.abs(z1) * 0.1;
            
                let col1t = Math.min( (v1.x + 11) / 26,   1.0); 
                let col2t = Math.min( (v2.x + 11) / 26,   1.0); 

                let rn1 = {
                    // x: Math.cos(angle) * rad, 
                    // y: Math.sin(angle) * rad,
                    // z: z1,
                    col: [1, col1t, col1t],
                };

                
                if(v1.x < 0) {
                    let rep = 12 - Math.floor(-v1.x);
                    if( (j % rep) === 0 )
                        rn1.col = [0, 0.35, 1];  
                    // else 
                        // rn1.col = [1, 1, 1];  

                }

                let rn2 = {
                    // x: Math.cos(angle2) * rad, 
                    // y: Math.sin(angle2) * rad,
                    // z: z2,
                    col: [1, col2t, col2t],
                };
            
                lines.push({
                    x1: v1.x,
                    y1: v1.y,
                    z1: v1.z,
                
                    x2: v2.x,
                    y2: v2.y,
                    z2: v2.z,
                
                    c1r: rn1.col[0], 
                    c1g: rn1.col[1], 
                    c1b: rn1.col[2],

                    c2r: rn2.col[0], 
                    c2g: rn2.col[1], 
                    c2b: rn2.col[2],
                });

                lines.push({
                    x1: v1.x,
                    y1: v1.y,
                    z1: v1.z,
                
                    x2: v3.x,
                    y2: v3.y,
                    z2: v3.z,
                
                    c1r: rn1.col[0], 
                    c1g: rn1.col[1], 
                    c1b: rn1.col[2],

                    c2r: rn2.col[0], 
                    c2g: rn2.col[1], 
                    c2b: rn2.col[2],
                });

                lines.push({
                    x1: v2.x,
                    y1: v2.y,
                    z1: v2.z,
                
                    x2: v3.x,
                    y2: v3.y,
                    z2: v3.z,
                
                    c1r: rn1.col[0], 
                    c1g: rn1.col[1], 
                    c1b: rn1.col[2],

                    c2r: rn2.col[0], 
                    c2g: rn2.col[1], 
                    c2b: rn2.col[2],
                });
            
            }


            createLinesGeometry();
            scene.add(new THREE.Mesh(linesGeometry, linesMaterial));
        }
    );
}

function createLinesGeometry() {

    var geometry = new THREE.BufferGeometry();
    var position1 = [];
    var position2 = [];
    var vindexes  = [];
    var color1  = [];
    var color2  = [];

    for(let j = 0; j < lines.length; j++) {

        let line = lines[j];

        let lx1 = line.x1; 
        let ly1 = line.y1;
        let lz1 = line.z1;
    
        let lx2 = line.x2; 
        let ly2 = line.y2;
        let lz2 = line.z2;
    
        for(let i = 0; i < 6; i++) {
            // vertex vindex -- can be [0...3] and defines which corner of the line is assignigned to this vertex
            let vi = 0;
            if(i === 0) vi = 0;
            if(i === 1) vi = 1;
            if(i === 2) vi = 2;
    
            if(i === 3) vi = 0;
            if(i === 4) vi = 2;
            if(i === 5) vi = 3;
    
            position1.push(lx1, ly1, lz1);
            position2.push(lx2, ly2, lz2);
            color1.push(line.c1r, line.c1g, line.c1b);
            color2.push(line.c2r, line.c2g, line.c2b);
            vindexes.push(vi);
        }
    
    }
 
    // itemSize = 3 because there are 3 values (components) per vertex
    geometry.addAttribute( 'position',  new THREE.BufferAttribute( new Float32Array(position1), 3 ) );
    geometry.addAttribute( 'position1', new THREE.BufferAttribute( new Float32Array(position1), 3 ) );
    geometry.addAttribute( 'position2', new THREE.BufferAttribute( new Float32Array(position2), 3 ) );
    geometry.addAttribute( 'vindex',    new THREE.BufferAttribute( new Float32Array(vindexes),  1 ) );
    geometry.addAttribute( 'color1',    new THREE.BufferAttribute( new Float32Array(color1), 3 ) );
    geometry.addAttribute( 'color2',    new THREE.BufferAttribute( new Float32Array(color2), 3 ) );
    
    linesGeometry = geometry;
} 


function buildControls() {
    window.addEventListener("keydown", function(e) {
        controls[e.key] = true;
    });

    window.addEventListener("keyup", function(e) {
        controls[e.key] = false;
    });


    let layout = -1;
    window.addEventListener("keypress", function(e) {
        if(e.key == "u") {
            layout = ++layout % 3;

            switch(layout) {
                case 0:
                    bokehFalloff = 130;
                    bokehStrength = 0.021;
                    break;
                case 1:
                    bokehFalloff = 80;
                    bokehStrength = 0.018;
                    break;
                case 2:
                    bokehFalloff  = 241;
                    bokehStrength = 0.004;
                    break;
            }
        }

        if(e.key == "y") {
            falloffType = ++falloffType % 2;
        }
    });
}

function checkControls() {
    if(controls["o"]) {
        cameraFocalDistance -= 0.1;
        console.log("cfd: " + cameraFocalDistance);
    }
    if(controls["p"]) {
        cameraFocalDistance += 0.1;        
        console.log("cfd: " + cameraFocalDistance);
    }
    
    if(controls["k"]) {
        bokehStrength += 0.00025;
        console.log("bs: " + bokehStrength);
    }
    if(controls["l"]) {
        bokehStrength -= 0.00025;        
        console.log("bs: " + bokehStrength);
    }

    if(controls["n"]) {
        bokehFalloff += 3.5;
        console.log("bf: " + bokehFalloff);
    }
    if(controls["m"]) {
        bokehFalloff -= 3.5;        
        console.log("bf: " + bokehFalloff);
    }
}