/**
 * This class implements ray - AABB intersection through the use of the 'slabs' method - by taking advantage from 
 * tweaks proposed by Andrew Kensler (Pixar)
 */
class AABB {
    /**
    * @param {Vec3} c0  minimum corner of the Axis Aligned Bounding Box
    * @param {Vec3} c1  maximum corner of the Axis Aligned Bounding Box
    */
    constructor(c0, c1) {

        // both corners need to exist
        if(c0 === undefined || c1 === undefined) throw new AABBException('construction: invalid corners passed as parameters');

        this.c0 = new Vec3();
        this.c1 = new Vec3();
        this.c0.copy(c0);
        this.c1.copy(c1);
    }

    /**
     * The parameter in tmin, if set to 0 or greater, will ensure no 'backward intersections' can happen between the AABB and the ray 
     * 
     * 
     * @returns {Boolean} true if an intersection was found, false otherwise
     */
    intersect(ray, tmin, tmax) {
        // implement the intersection test from page 12 - RT:tnw
        for(var i = 0; i < 3; i++) {
            var invD = 1 / ray.d.a[i];
            var t0   = (this.c0.a[i] - ray.o.a[i]) * invD;
            var t1   = (this.c1.a[i] - ray.o.a[i]) * invD;
            if(invD < 0) {  // swap t0 and t1
                var temp = t0; t0 = t1; t1 = temp;
            }
            tmin = t0 > tmin ? t0 : tmin;
            tmax = t1 < tmax ? t1 : tmax;

            if(tmax < tmin) return false;
        }

        return true;
    }

    union(c0, c1) {

        if(c1 === undefined) c1 = c0;

        this.c0.x = Math.min(this.c0.x, c0.x);
        this.c0.y = Math.min(this.c0.y, c0.y);
        this.c0.z = Math.min(this.c0.z, c0.z);

        this.c1.x = Math.max(this.c1.x, c1.x);
        this.c1.y = Math.max(this.c1.y, c1.y);
        this.c1.z = Math.max(this.c1.z, c1.z);
    }
}

function AABBException(message) {
    this.message = message;
    this.name = 'AABB Exception';
}