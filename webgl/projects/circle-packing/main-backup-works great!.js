window.addEventListener("load", init);

let vec3 = function(x,y,z) {
    return new THREE.Vector3(x,y,z);
}

let ctx;

let circles = [];

let boundaryCircleRadius = 250;
let repulsionFactor = 0.09;

function init() {
    var c    = document.getElementById("canvas");
    c.width  = innerWidth;
    c.height = innerHeight;


    ctx = c.getContext("2d");
    ctx.save();
    ctx.translate(innerWidth / 2, innerHeight / 2);
    ctx.scale(1, -1);

    // ctx.beginPath();
    // ctx.arc(-500, -175, 50, 0, 2 * Math.PI);
    // ctx.stroke();
   

    for(let i = 0; i < 400; i++) {
        circles.push(new Circle(Math.random() * 10, Math.random() * 10, 8.7));
    }



    animate();
}


function animate() {
    requestAnimationFrame(animate);

    ctx.clearRect(-9999, -9999, 99999, 99999);

    for(let i = 0; i < 100; i++)
        simIteration();

    for(let i = 0; i < circles.length; i++) {
        let circle = circles[i];

        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
        ctx.stroke();
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

    for(let i = 0; i < circles.length; i++) {
        for(let j = 0; j < circles.length; j++) {
            if(i === j) continue;

            let c1 = circles[i];
            let c2 = circles[j];

            if(c1.intersects(c2)) {
                c1.addPushAwayVector(c2);
                c2.addPushAwayVector(c1);
            }
        }
    }

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

        this.pushAwayVector = vec3(0,0,0);
    }

    updateRadius() {
        let distanceFromCenter = vec3(this.x, this.y, 0).length() * 0.1;
        this.r = Math.max(Math.min(30, distanceFromCenter), 5);
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

        this.pushAwayVector.add(  
            vec3(this.x - circle.x, this.y - circle.y, 0)   // let's take the vector between the two points
                .normalize()                                // and make it a third of the intersection length between the two circles
                .multiplyScalar(this.intersectionLength(circle) * repulsionFactor)
        );
    }

    applyPushAwayVector() {
        this.x += this.pushAwayVector.x;
        this.y += this.pushAwayVector.y;

        this.pushAwayVector = vec3(0,0,0);
    }
} 