// should 'extend' shape
class Primitive {
    constructor( material ) {
        // every primitive MAY have a different material
        this.material = undefined;
    }

    intersect( ray, tMin, tMax ) {

    }

    // computeColor( ray, hitPoint, scene) {
    //     // return this.material.compute(ray, hitPoint, this, tMin, scene);
    //     return this.material.compute(ray, hitPoint, this, tMin, scene);
    // }

    normalAt(hitPoint) {

    }

    getAABB() {

    }
}


function PrimitiveException(message) {
    this.message = message;
    this.name = 'Primitive Exception';
}


