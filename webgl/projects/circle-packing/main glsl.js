window.addEventListener("load", init);

let vec3 = function(x,y,z) {
    return new THREE.Vector3(x,y,z);
}
let rn = function() {
    return Math.random();
}
let nr = function() {
    return Math.random() * 2 - 1;
}

// let myWorker = new Worker('worker.js');

let imagePath = "fd18.jpg";

let ctx;

let circles = [];
let circlesIdentifier = 0;

// let minCircleSize = 2.15;
// let maxAddedCircleSize = 12;
// let minCircleSize = 2.5;
// let maxAddedCircleSize = 18;
let minCircleSize = 2.5;
let maxAddedCircleSize = 18;
let powerFactor = 3.5;

let boundaryCircleRadius = 450;
let canvasSize = (boundaryCircleRadius + 50) * 2;
let quadTreeRadius = 500;
// let repulsionFactor = 0.045;
let exponentialRadiusUpdateFactor = 0.2;
let repulsionFactor = 0.2;
let asymmetricRepulsion = false;
let normalizedRepulsionFactor = 0.2;
let normalizedRepulsionVector = false;
let iterationsPerFrame = 3;


let imageData;


let simIterations = 0;






let scene; 
let camera;
let renderer;
let computeMaterial;


let kDown = false;


function init() {
    var c    = document.getElementById("canvas");
    c.width  = canvasSize;
    c.height = canvasSize;


    ctx = c.getContext("2d");
    ctx.save();



    
    var img = new Image();
    img.src = imagePath;    
    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvasSize, canvasSize);
        img.style.display = 'none';
        imageData = ctx.getImageData(0, 0, canvasSize, canvasSize);

        ctx.translate(canvasSize / 2, canvasSize / 2);
        ctx.scale(1, -1);

        for(let i = 0; i < 0; i++) {
            let r = 9;

            let x = nr() * boundaryCircleRadius * 0.9;
            let y = nr() * boundaryCircleRadius * 0.9;

        //     // let pixel_x = Math.floor(x + canvasSize / 2);
        //     // let pixel_y = canvasSize - Math.floor(y + canvasSize / 2);
        //     // if(pixel_y < 0) pixel_y = 0;
        //     // if(pixel_y >= canvasSize) pixel_y = canvasSize - 1;
    
        //     // let pixel_index = (pixel_y * canvasSize + pixel_x) * 4;
            
        //     // let c = imageData.data[pixel_index] / 15 + 3;
    
        //     // r = c;
            circles.push(new Circle(x, y, r));
        }



        var canvas2 = document.createElement( 'canvas' );
        var context = canvas2.getContext( 'webgl2', { alpha: false } );
        renderer = new THREE.WebGLRenderer( { canvas: canvas2, context: context } ); 

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.set( 0, 0, 60 );

        computeMaterial = new THREE.ShaderMaterial( {
            uniforms: {
                datatexture: { type: "t", value: null },
                circlesCount: { value: 0 }, 
            },
            vertexShader: vshad,
            fragmentShader: fshad
        
        } );

        
        window.fbh = Math.floor(circles.length / 2048) + 1;
        window.fbw = 2048;

        window.rt = new THREE.WebGLRenderTarget(fbw, fbh, {
            type:      THREE.FloatType,
            magFilter: THREE.NearestFilter,
            minFilter: THREE.NearestFilter,
        });
        renderer.setSize( fbw, fbh );

        window.computeMesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2), computeMaterial);
        scene.add(computeMesh);


        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup",   onMouseUp);

        animate();



        let removeP = function(e) {
            document.querySelector("p").style.display = "none";
            console.log("re");
            window.removeEventListener("mousedown", removeP);
        };
        window.addEventListener("mousedown", removeP);



        // let rootNode = createQuadTree(circles);
        // myWorker.postMessage(rootNode);
    };



    window.addEventListener("keydown", (e) => {
        if(e.key == "k") kDown = true;
    });
    window.addEventListener("keyup", (e) => {
        if(e.key == "k") kDown = false;
    });


}


let mouseDown = false;
// in world units
let lastMousePos = { x: 0, y: 0 };
function onMouseDown(e) {
    mouseDown = true;

    let canvasRect = document.querySelector("#canvas").getBoundingClientRect();

    let x = e.clientX - canvasRect.x;
    let y = canvasSize - (e.clientY - canvasRect.y);
    x -= canvasSize / 2;
    y -= canvasSize / 2;

    lastMousePos = { x: x, y: y };
}
function onMouseMove(e) {
    if(mouseDown) {
        let canvasRect = document.querySelector("#canvas").getBoundingClientRect();

        let x = e.clientX - canvasRect.x;
        let y = canvasSize - (e.clientY - canvasRect.y);
        x -= canvasSize / 2;
        y -= canvasSize / 2;
    
        lastMousePos = { x: x, y: y };
    }
}
function onMouseUp(e) {
    mouseDown = false;
}
function mouseInteraction() {
    if(mouseDown) {
        let n = 35;
        let r = 37;
        if(kDown) {
            n = 130;
            r = 50;
        }

        for(let i = 0; i < n; i++) {

            circles.push(new Circle(lastMousePos.x + nr()*r, lastMousePos.y + nr()*r, 3));
        }
    }
}


function animate() {
    requestAnimationFrame(animate);

    mouseInteraction();

    ctx.fillStyle = "#ededed";
    ctx.fillRect(-9999, -9999, 99999, 99999);
    // ctx.clearRect(-9999, -9999, 99999, 99999);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(50,50,50)";
    ctx.fillStyle = "white";
    ctx.arc(0, 0, boundaryCircleRadius + 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.lineWidth = 1;


    for(let i = 0; i < iterationsPerFrame; i++) {
        simIteration();
    }
    simIterations += iterationsPerFrame;

    for(let i = 0; i < circles.length; i++) {
        let circle = circles[i];
        circle.draw();
    }
}


function simIteration() {

    for(let i = 0; i < circles.length; i++) {
        let c1 = circles[i];
        c1.updateRadius();        
    }

    // for(let i = 0; i < circles.length; i++) {
    //     let c1 = circles[i];
    //     if(boundaryIntersection(c1)) {
    //         c1.addPushAwayVector(boundaryPushAwayVector(c1));        
    //     }
    // }

    // let rootNode = createQuadTree(circles);
    // // drawQuadTree(rootNode);
    // intersectionTestsAndSimulation(rootNode, circles);


    // let timer = Date.now();
    // let fbh = Math.floor(circles.length / 1024) + 1;
    // let fbw = circles.length % 1024;

    // let rt = new THREE.WebGLRenderTarget(fbw, fbh, {
    //     type:      THREE.FloatType,
    //     magFilter: THREE.NearestFilter,
    //     minFilter: THREE.NearestFilter,
    // });
    // renderer.setSize( fbw, fbh );
    

    let new_fbh = Math.floor(circles.length / 2048) + 1;
    if(new_fbh > fbh) {
        window.rt.setSize(fbw, new_fbh );
        renderer.setSize( fbw, new_fbh );
        fbh = new_fbh;
    }


    let dataCount = (Math.floor(circles.length / 2048) + 1) * 2048;
    if(circles.length % 2048 === 0) dataCount = (Math.floor(circles.length / 2048)) * 2048;
    dataCount *= 4; // each pixel has 4 components

    let data = new Float32Array( dataCount );

    for(let i = 0; i < dataCount; i++) {
        if(i < circles.length) {
            data[i * 4 + 0] = circles[i].x;
            data[i * 4 + 1] = circles[i].y;
            data[i * 4 + 2] = circles[i].r;    
        } else {
            data[i * 4 + 0] = 0;
            data[i * 4 + 1] = 0;
            data[i * 4 + 2] = 0;
        }
    }
    let dataTexture = new THREE.DataTexture( data, fbw, fbh, THREE.RGBAFormat, THREE.FloatType );

    computeMaterial.uniforms.datatexture.value  = dataTexture;
    computeMaterial.uniforms.circlesCount.value = circles.length;

    renderer.setRenderTarget(rt);
    renderer.render(scene, camera);

    let data3 = new Float32Array( 4 * dataCount );
    renderer.readRenderTargetPixels ( rt, 0, 0, fbw, fbh, data3 );

    for(let i = 0; i < circles.length; i++) {
        let pav_x = data3[i * 4 + 0];
        let pav_y = data3[i * 4 + 1];

        circles[i].addPushAwayVector(vec3(pav_x, pav_y, 0));
    }
    // console.log("t: " + (Date.now() - timer));



    // for(let i = 0; i < circles.length; i++) {
    //     for(let j = 0; j < circles.length; j++) {
    //         if(i === j) continue;

    //         let c1 = circles[i];
    //         let c2 = circles[j];

    //         if(c1.intersects(c2)) {
    //             c1.addPushAwayVector(c2);
    //             // c2.addPushAwayVector(c1);
    //         }
    //     }
    // }


    for(let i = 0; i < circles.length; i++) {
        let c1 = circles[i];
        c1.applyPushAwayVector();        
    }
}


function boundaryIntersection(circle) {
    let furthestPoint = vec3(circle.x, circle.y, 0).length() + circle.r;
    return furthestPoint > boundaryCircleRadius;
}

function boundaryPushAwayVector(circle) {
    let pushStrength = vec3(circle.x, circle.y, 0).length() + circle.r - boundaryCircleRadius;

    return vec3(-circle.x, -circle.y, 0).normalize().multiplyScalar(pushStrength * repulsionFactor);
}



class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;

        this.r = r;

        this.identifier = circlesIdentifier++;

        // only used for debugging
        this.intersectsSomeOtherCircle = false;

        this.pushAwayVector = vec3(0,0,0);
    }

    updateRadius() {
        // let distanceFromCenter = vec3(this.x, this.y, 0).length() * 0.1;
        // this.r = Math.max(Math.min(28, Math.pow(distanceFromCenter, 0.9)), 2);

        let pixel_x = Math.floor(this.x + canvasSize / 2);
        let pixel_y = canvasSize - Math.floor(this.y + canvasSize / 2);
        if(pixel_y < 0) pixel_y = 0;
        if(pixel_y >= canvasSize) pixel_y = canvasSize - 1;

        let pixel_index = (pixel_y * canvasSize + pixel_x) * 4;
        
        let c = Math.pow(imageData.data[pixel_index] / 255, powerFactor) * maxAddedCircleSize + minCircleSize;
        
        // let c = imageData.data[pixel_index] / 25 + 10;

        this.r = this.r * (1 - exponentialRadiusUpdateFactor) + c * exponentialRadiusUpdateFactor;
    }

    intersects(circle) {
        return this.intersectionLength(circle) > 0;
    }

    // will return a positive number if there is an intersection
    intersectionLength(circle) {
        let radSum = circle.r + this.r;
        let distanceBetweenPoints = vec3(this.x - circle.x, this.y - circle.y, 0).length();

        return radSum - distanceBetweenPoints;
    }

    addPushAwayVector(circle) {
        // used in boundaryPushAwayVector();
        if(circle instanceof THREE.Vector3) {
            this.pushAwayVector.add(circle);
            return; 
        }

        let b = circle.r / this.r;
        if(!asymmetricRepulsion) b = 1;
        let scalar = this.intersectionLength(circle) * repulsionFactor * b;

        this.pushAwayVector.add(  
            vec3(this.x - circle.x, this.y - circle.y, 0)   // let's take the vector between the two points
                .normalize()                                
                .multiplyScalar(scalar)
        );
    }

    applyPushAwayVector() {

        if(normalizedRepulsionVector) {
            this.pushAwayVector.normalize() * normalizedRepulsionFactor;
        }

        this.x += this.pushAwayVector.x;
        this.y += this.pushAwayVector.y;

        this.pushAwayVector = vec3(0,0,0);
    }

    draw() {
        ctx.beginPath();

        // if(!this.intersectsSomeOtherCircle)
            ctx.strokeStyle = "rgb(0,0,0)";
        // else
        //     ctx.strokeStyle = "rgb(255,0,0)";



        // let pixel_x = Math.floor(this.x + canvasSize / 2);
        // let pixel_y = canvasSize - Math.floor(this.y + canvasSize / 2);
        // if(pixel_y < 0) pixel_y = 0;
        // if(pixel_y >= canvasSize) pixel_y = canvasSize - 1;

        // let pixel_index = (pixel_y * canvasSize + pixel_x) * 4;
        
        // let r = imageData.data[pixel_index];
        // let g = imageData.data[pixel_index];
        // let b = imageData.data[pixel_index];

        // let color = "rgb(" + r + "," + g + "," + b + ")";

        // ctx.fillStyle = color;
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.arc(this.x, this.y, this.r * 0.5, 0, 2 * Math.PI);
        ctx.arc(this.x, this.y, this.r * 0.2, 0, 2 * Math.PI);
        // ctx.fill();
        ctx.stroke();
    }
} 




let vshad =`#version 300 es

out vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = vec4(uv * 2.0 - 1.0, 0.0, 1.0);
}
`;

let fshad =`#version 300 es

uniform sampler2D datatexture;

uniform int circlesCount;

in vec2 vUv;

precision highp float;
precision highp int;

out vec4 out_FragColor;

float intersectionLength(vec3 c1, vec3 c2) {
    float radSum = c1.z + c2.z;
    float distanceBetweenPoints = length(vec3(c1.x - c2.x, c1.y - c2.y, 0));

    return radSum - distanceBetweenPoints;
}

vec3 calculateBoundingPushAwayVector(vec3 circle) {
    // let furthestPoint = vec3(circle.x, circle.y, 0).length() + circle.r;
    // return furthestPoint > boundaryCircleRadius;

    // if(   (length(vec3(circle.x, circle.y, 0)) + circle.r)  < ` + boundaryCircleRadius.toFixed(2) + `) return vec3(0.0);

    // float pushStrength = length(vec3(circle.x, circle.y, 0)) + circle.z - ` + boundaryCircleRadius.toFixed(2) + `;
    // return normalize(vec3(-circle.x, -circle.y, 0)) * pushStrength * ` + repulsionFactor.toFixed(5) + `;




    if(   (length(vec3(circle.x, circle.y, 0)) + circle.z)  < ` + boundaryCircleRadius.toFixed(2) + `) return vec3(0.0);

    float pushStrength = length(vec3(circle.x, circle.y, 0)) + circle.z - ` + boundaryCircleRadius.toFixed(2) + `;
    return normalize(vec3(-circle.x, -circle.y, 0)) * pushStrength * ` + repulsionFactor.toFixed(5) + `;
}

bool intersects(vec3 c1, vec3 c2) {
    return intersectionLength(c1, c2) > 0.0;
}

void main() {

    uint n = uint(circlesCount);
    float fn = float(n);

    vec3 pushAwayVector = vec3(0.0);

    uint textSize = uint(2048);
    float fTextSize = float(textSize);
    uint rows = (n / textSize) + uint(1);

    vec4 c1 = texture2D(datatexture, vUv);
    uint ccix = uint(vUv.y * float(rows)) * textSize + uint(vUv.x * fTextSize);

    pushAwayVector += calculateBoundingPushAwayVector(c1.xyz);

    float epsilon = 0.000001;

    for(uint i = uint(0); i < n; i++) {
        if(i == ccix) continue;

        float uvx = mod(float(i), float(textSize)) / fTextSize;
        float uvy = (float(i / textSize)) / float(rows); 

        vec4 c2 = texture2D(datatexture, vec2(uvx, uvy));

        if(intersects(c1.xyz, c2.xyz)) {
            float scalar = intersectionLength(c1.xyz, c2.xyz) * ` + repulsionFactor.toFixed(4) + `;
            pushAwayVector += normalize(vec3(c1.x - c2.x, c1.y - c2.y, 0)) * scalar;   // let's take the vector between the two points
        }
    }

    out_FragColor = vec4(pushAwayVector, 0.0);
}
`;