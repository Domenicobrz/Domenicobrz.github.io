// should 'extend' shape
class Triangle extends Primitive {
    constructor( v0, v1, v2, normal, material ) {
        super(material);

        this.v0 = v0;
        this.v1 = v1;
        this.v2 = v2;

        this.normal = normal || new Vec3();
        if(normal === undefined) {
            // n = (V1 - V0) x (V2 - V0)

            var v1minusv0 = new Vec3(0,0,0);
            vec3.sub(v1minusv0.a, v1.a, v0.a);

            var v2minusv0 = new Vec3(0,0,0);
            vec3.sub(v2minusv0.a, v2.a, v0.a);

            vec3.cross(this.normal.a, v1minusv0.a, v2minusv0.a);
            vec3.normalize(this.normal.a, this.normal.a);
        }
    }

    intersect( ray, tMin, tMax ) {
        var result = { hit: false, t0: undefined, t1: undefined };


        // intersection with plane 
        // t = dot(n, V0 - ray.o) / dot(n, ray.d)
        var planet = vec3.dot(this.normal.a, [this.v0.x - ray.o.x, this.v0.y - ray.o.y, this.v0.z - ray.o.z]) /
                     vec3.dot(this.normal.a, ray.d.a);

        if(planet < tMin || planet > tMax) return result;





        // you can reconstruct all of these by using hitPx, hitPy, hitPz etc
        // you can reconstruct all of these by using hitPx, hitPy, hitPz etc
        // you can reconstruct all of these by using hitPx, hitPy, hitPz etc
        // you can reconstruct all of these by using hitPx, hitPy, hitPz etc
        // you can reconstruct all of these by using hitPx, hitPy, hitPz etc
        // you can reconstruct all of these by using hitPx, hitPy, hitPz etc
        // you can reconstruct all of these by using hitPx, hitPy, hitPz etc
        // you can reconstruct all of these by using hitPx, hitPy, hitPz etc
        // you can reconstruct all of these by using hitPx, hitPy, hitPz etc
        // you can reconstruct all of these by using hitPx, hitPy, hitPz etc, without the need to create another object



        // intersection point
        var hitP   = new Vec3(ray.o.x + planet * ray.d.x, 
                              ray.o.y + planet * ray.d.y,
                              ray.o.z + planet * ray.d.z);

        // u = V1 - V0   v = V2 - V0
        var u  = new Vec3(this.v1.x - this.v0.x,
                          this.v1.y - this.v0.y,
                          this.v1.z - this.v0.z);

        var v  = new Vec3(this.v2.x - this.v0.x,
                          this.v2.y - this.v0.y,
                          this.v2.z - this.v0.z);

        // w = Pi - V0      Pi = hitP
        var w  = new Vec3(hitP.x - this.v0.x,
                          hitP.y - this.v0.y,
                          hitP.z - this.v0.z);



        var udotv = vec3.dot(u.a, v.a); 
        var wdotv = vec3.dot(w.a, v.a); 
        var wdotu = vec3.dot(w.a, u.a);
        var udotu = vec3.dot(u.a, u.a);
        var vdotv = vec3.dot(v.a, v.a);
        var denominator = udotv*udotv - udotu*vdotv; 


        /*

              (u.v)(w.v) - (v.v)(w.u)
        s =   -----------------------
                (u.v)^2 - (u.u)(v.v)

        */

        var s = (udotv*wdotv - vdotv*wdotu) / denominator;


        /*

              (u.v)(w.u) - (u.u)(w.v)
        t =   -----------------------
                (u.v)^2 - (u.u)(v.v)


        */

        var t = (udotv*wdotu - udotu*wdotv) / denominator;


        // we hit the triangle if  s >= 0, t >= 0    &    s + t <= 1
        // http://geomalgorithms.com/a06-_intersect-2.html
        if(s >= 0 && t >= 0 && (s+t) <= 1) {
            result.hit = true;
            result.t0  = planet;
        }

        return result;
    }

    normalAt(hitPoint) {
        return this.normal;    
    }

    getAABB() {
        var triangleAABB = new AABB(this.v0, this.v0);
        triangleAABB.union(this.v1);
        triangleAABB.union(this.v2);
        return triangleAABB;
    }
}