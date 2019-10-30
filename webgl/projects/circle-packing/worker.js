onmessage = function(e) {
    
    if(e.data.type = "compute") {
        let circles = e.data.circles;
        let rawqt = e.data.rawQuadTree;

        let rootNode = getQT(rawqt);

    }
}




function getQT(rawqtnode) {
    let node = new QTNode();
    
    node.aabb  = rawqtnode.aabb;
    node.level = rawqtnode.level;
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