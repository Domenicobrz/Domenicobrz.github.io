// should 'extend' shape
class Sphere extends Primitive {
    constructor( radius, center, material ) {
        super(material);
        this.center = center;
        this.radius = radius;

        this.mpb = new Vec3(0,0,0);
    }

    intersect( ray, tMin, tMax ) {
        var result = {
            hit: false,
            t0: undefined,
            t1: undefined   
        };


        var oc = new Vec3(0,0,0);
        vec3.sub(oc.a, ray.o.a, this.center.a);
        var a  = vec3.dot(ray.d.a, ray.d.a); 
        var b  = 2 * vec3.dot(oc.a, ray.d.a); 
        var c  = vec3.dot(oc.a, oc.a) - this.radius * this.radius; 

        var discriminant = b*b - 4*a*c;

        if( discriminant < 0 ) {
            result.hit = false;
        }

        if( discriminant > 0 ) {
            var temp = (-b - Math.sqrt(discriminant)) / ( 2*a );
            if( temp < tMax && temp > tMin ) {
                result.hit = true;
                result.t0  = temp;
                return result;
            }

                temp = (-b + Math.sqrt(discriminant)) / ( 2*a );
            if( temp < tMax && temp > tMin ) {
                result.hit = true;
                result.t0  = temp;    
                return result;
            }
        }

        return result;
    }

    normalAt(hitPoint) {
        var normal = new Vec3(0,0,0);
        vec3.subtract(normal.a, hitPoint.a, this.center.a);
        normal.normalize();
        return normal;    
    }

    getAABB() {
        var c0 = new Vec3(this.center.x - this.radius,
                          this.center.y - this.radius,
                          this.center.z - this.radius);

        var c1 = new Vec3(this.center.x + this.radius,
                          this.center.y + this.radius,
                          this.center.z + this.radius);

        return new AABB(c0, c1);
    }
}