class Mesh {
    constructor( geometry, material ) {
        this.geometry = geometry;
        this.material = material;



        this.primitives = [];

        if(geometry.constructor === Array) {
            for(var i = 0, l = geometry.length; i < l; i++) {
                this.primitives.push(geometry[i]);
                geometry[i].material = this.material;
            }
        } else {
            this.primitives.push(geometry);
            geometry.material = this.material;
        }
    }

    intersect( ray, tMin, tMax ) {
        return this.geometry.intersect( ray, tMin, tMax );
    }

    computeColor( ray, hitPoint, scene, recursionLevel ) {
        return this.material.compute(ray, hitPoint, scene, recursionLevel);
    }
}