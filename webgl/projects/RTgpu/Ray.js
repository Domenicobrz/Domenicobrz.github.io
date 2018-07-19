class Ray {
    constructor( o, d ) {
        
        if(o !== undefined, d !== undefined) {
            this.o = o;
            this.d = d;
        } else {
            this.o = new Vec3(0,0,0);
            this.d = new Vec3(0,0,0);
        }

        this.t = undefined;
    }
}