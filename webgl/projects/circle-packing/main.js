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

let ctx;

let circles = [];
let circlesIdentifier = 0;

let minCircleSize = 2.7;
let maxAddedCircleSize = 20;

let boundaryCircleRadius = 450;
let canvasSize = (boundaryCircleRadius + 50) * 2;
let quadTreeRadius = 500;
// let repulsionFactor = 0.045;
let exponentialRadiusUpdateFactor = 0.2;
let repulsionFactor = 0.25;
let asymmetricRepulsion = false;
let normalizedRepulsionFactor = 0.1;
let normalizedRepulsionVector = false;
let iterationsPerFrame = 2;


let imageData;


let simIterations = 0;













function init() {
    var c    = document.getElementById("canvas");
    c.width  = canvasSize;
    c.height = canvasSize;


    ctx = c.getContext("2d");
    ctx.save();



    
    var img = new Image();
    img.src = 'fd3.jpg';    
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


        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup",   onMouseUp);

        animate();


        // let rootNode = createQuadTree(circles);
        // myWorker.postMessage(rootNode);
    };


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
        for(let i = 0; i < 50; i++) {

            circles.push(new Circle(lastMousePos.x + rn()*20, lastMousePos.y + rn()*20, 3));
        }
    }
}


function animate() {
    requestAnimationFrame(animate);

    mouseInteraction();

    ctx.fillStyle = "white";
    ctx.fillRect(-9999, -9999, 99999, 99999);
    // ctx.clearRect(-9999, -9999, 99999, 99999);

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

    for(let i = 0; i < circles.length; i++) {
        let c1 = circles[i];
        if(boundaryIntersection(c1)) {
            c1.addPushAwayVector(boundaryPushAwayVector(c1));        
        }
    }

    let rootNode = createQuadTree(circles);
    // drawQuadTree(rootNode);
    intersectionTestsAndSimulation(rootNode, circles);


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
        
        let c = (imageData.data[pixel_index] / 255) * maxAddedCircleSize + minCircleSize;
        
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
        // ctx.fill();
        ctx.stroke();
    }
} 


class AABB {
    constructor(v0, v1) {
        if(v0 instanceof Circle) {
            this.v0 = vec3(v0.x - v0.r, v0.y - v0.r, 0);
            this.v1 = vec3(v0.x + v0.r, v0.y + v0.r, 0);
        } else {
            this.v0 = v0;
            this.v1 = v1;
        }

        // used for intersection tests & canvas drawing
        this.w = this.v1.x - this.v0.x; 
        this.h = this.v1.y - this.v0.y; 
    }

    intersects(aabb) {
        return (this.v0.x < aabb.v0.x + aabb.w &&
                this.v0.x + this.w > aabb.v0.x &&
                this.v0.y < aabb.v0.y + aabb.h &&
                this.v0.y + this.h > aabb.v0.y);
    }

    contains(aabb) {
        return this.v0.x < aabb.v0.x && 
               this.v0.y < aabb.v0.y && 
               this.v1.x > aabb.v1.x && 
               this.v1.y > aabb.v1.y;
    }

    draw() {
        ctx.beginPath();
        ctx.strokeStyle = "rgb(230,230,230)";
        ctx.rect(this.v0.x, this.v0.y, this.w, this.h);
        ctx.stroke();
    }
}

class QTNode {
    constructor(aabb) {
        this.aabb  = aabb;

        this.level = 0;

        // will contain other AABB for intersection tests
        this.objects = [];

        // will contain other QTNode children
        this.children = [];
        this.leaf = true;
    }

    draw() {
        this.aabb.draw();
    }

    makeChildren() {
        this.leaf = false;
       
        // if we can go deeper let's see if circleAABB can be contained in one of the children
        for(let i = 0; i < 4; i++) {
            let ox = 0; 
            let oy = 0; 

            // this index structure is the same when we actually create children in a QTNode 
            if(i === 0) { };
            if(i === 1) { ox = this.aabb.w / 2 };
            if(i === 2) { oy = this.aabb.h / 2 };
            if(i === 3) { ox = this.aabb.w / 2; oy = this.aabb.h / 2; }

            let nv0 = this.aabb.v0.clone().add(vec3(ox, oy, 0));
            let childAABB = new AABB(
                nv0,
                nv0.clone().add(vec3(this.aabb.w / 2, this.aabb.h / 2, 0)),
            );

            this.children.push(new QTNode(childAABB));
        }
    }
}






/*******************************************
intersection routine for quadtrees:

let circleToTest

stack = []
stack.push(   root node   );

while(stack not empty) {
	
	let stack node <- pop from stack

	does it have children in it? test 'em
	
	is it a leaf?
		y: continue;
		n: push in the stack the children (max 4) that intersects with circleToTest

}
********************************************
REMEMBER:  EVERY CIRCLE IS ***ENTIRELY*** CONTAINED IN AT LEAST ONE NODE
insertion routine for circle (or AABB):

let circleToInsert

stack = [];
stack.push(root node)

let tightestFitNode = (root node, level 0);

while(stack not empty) {
    
    let node <-- pop from stack
    let level = node.level;

    does it fit *entirely* in one of the "virtual" children? (because they might have not been created yet) --- UNLESS LEVEL+1 IS DEEPER THAN THE MAXIMUM ALLOWED DEPTH!!
    if so, create the children (unless they're already there) and push the child-node that contains circleToInsert in the stack
        at this point you'd set that this node is a parent, and that the children are leaf nodes
        also update tightestFitNode to (node, level+1)
}
********************************************/


function intersectionTestsAndSimulation(rootNode, circles) {
    for(let i = 0; i < circles.length; i++) {
        let circleToInsert = circles[i];
        let circleAABB = new AABB(circleToInsert);

        let stack = [rootNode];

        let intersectedCircles = [];

        while(stack.length > 0) {
            let node  = stack.pop();
            let level = node.level;

            // does it have objects in it? test 'em
            let c1 = circleToInsert;
            for(let i = 0; i < node.objects.length; i++) {
                let c2 = node.objects[i];

                if(c1.identifier === c2.identifier) continue;

                if(c1.intersects(c2)) {
                    c1.intersectsSomeOtherCircle = true;
                    c2.intersectsSomeOtherCircle = true;

                    c1.addPushAwayVector(c2);
                }
            }

            if(!node.leaf) {
                for(let i = 0; i < node.children.length; i++) {
                    let child = node.children[i];
                    if(child.aabb.intersects(circleAABB)) {
                        stack.push(child);
                    }
                }
            }
        }
    }
}


function createQuadTree(circles) {
    let rootNode = new QTNode(new AABB(vec3(-quadTreeRadius, -quadTreeRadius), vec3(quadTreeRadius, quadTreeRadius)));
    let maxDepth = 5;

    for(let i = 0; i < circles.length; i++) {
        let circleToInsert = circles[i];
        let circleAABB = new AABB(circleToInsert);

        let stack = [rootNode];
        let tightestFitNode = { node: rootNode, level: 0 };

        while(stack.length > 0) {
            let node  = stack.pop();
            let level = node.level;
            
            if(level+1 === maxDepth) continue;

            // if we can go deeper let's see if circleAABB can be contained in one of the children
            for(let i = 0; i < 4; i++) {
                let ox = 0; 
                let oy = 0; 

                // this index structure is the same when we actually create children in a QTNode 
                if(i === 0) { };
                if(i === 1) { ox = node.aabb.w / 2 };
                if(i === 2) { oy = node.aabb.h / 2 };
                if(i === 3) { ox = node.aabb.w / 2; oy = node.aabb.h / 2; }

                let nv0 = node.aabb.v0.clone().add(vec3(ox, oy, 0));
                let virtualChildAABB = new AABB(
                    nv0,
                    nv0.clone().add(vec3(node.aabb.w / 2, node.aabb.h / 2, 0)),
                );

                if(virtualChildAABB.contains(circleAABB)) {

                    // if the test is positive, create all the children and push the containing one in the stack
                    if(node.leaf) {
                        node.makeChildren();
                    }

                    tightestFitNode = { node: node.children[i], level: level+1 };
                    stack.push(node.children[i]);

                    break;
                }
            }
        }

        tightestFitNode.node.objects.push(circleToInsert);
    }


    return rootNode;
}

function drawQuadTree(rootNode) {

    let stack = [rootNode];

    while(stack.length > 0) {
        let node = stack.pop();

        node.draw();

        if(!node.leaf) {
            for(let i = 0; i < 4; i++)
                stack.push(node.children[i]);
        }
    }
}