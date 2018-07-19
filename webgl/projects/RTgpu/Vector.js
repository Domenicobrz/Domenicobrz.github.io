class Vec3 {

    constructor( x, y, z ) {
        this.a = [ x || 0, y || 0, z || 0 ];  
    }

    set x (x) { this.a[0] = x; }
    set y (y) { this.a[1] = y; }
    set z (z) { this.a[2] = z; }

    get x () { return this.a[0]; }
    get y () { return this.a[1]; }
    get z () { return this.a[2]; }


    normalize() {
        vec3.normalize(this.a, this.a);
    }

    scalarAdd( value ) {
        this.a[0] += value;
        this.a[1] += value;
        this.a[2] += value;
    }

    add( vector ) {
        this.a[0] += vector.x;
        this.a[1] += vector.y;
        this.a[2] += vector.z;
    }

    scale( value ) {
        vec3.scale(this.a, this.a, value); 
    }

    copy( vector ) {
        this.a[0] = vector.x;
        this.a[1] = vector.y;
        this.a[2] = vector.z;
    }
}
