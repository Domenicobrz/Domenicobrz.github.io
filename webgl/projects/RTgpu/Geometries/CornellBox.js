class CornellBox extends Geometry {
    constructor(center, size) {
        super();
        this.center = center;
        this.size   = size;
        this.buildCube();
    }


    buildCube() {

        var hsize = this.size / 2;





        var f2v1 = new Vec3(this.center.x + hsize, 
                            this.center.y - hsize,
                            this.center.z - hsize);

        var f2v2 = new Vec3(this.center.x + hsize, 
                            this.center.y - hsize,
                            this.center.z + hsize);
        
        var f2v3 = new Vec3(this.center.x + hsize, 
                            this.center.y + hsize,
                            this.center.z - hsize);

        var f2v4 = new Vec3(this.center.x + hsize, 
                            this.center.y + hsize,
                            this.center.z - hsize);

        var f2v5 = new Vec3(this.center.x + hsize, 
                            this.center.y - hsize,
                            this.center.z + hsize);
        
        var f2v6 = new Vec3(this.center.x + hsize, 
                            this.center.y + hsize,
                            this.center.z + hsize);






        
        var f3v1 = new Vec3(this.center.x - hsize, 
                            this.center.y - hsize,
                            this.center.z + hsize);

        var f3v2 = new Vec3(this.center.x + hsize, 
                            this.center.y - hsize,
                            this.center.z + hsize);
        
        var f3v3 = new Vec3(this.center.x - hsize, 
                            this.center.y + hsize,
                            this.center.z + hsize);

        var f3v4 = new Vec3(this.center.x - hsize, 
                            this.center.y + hsize,
                            this.center.z + hsize);

        var f3v5 = new Vec3(this.center.x + hsize, 
                            this.center.y + hsize,
                            this.center.z + hsize);
        
        var f3v6 = new Vec3(this.center.x + hsize, 
                            this.center.y - hsize,
                            this.center.z + hsize);






               
        var f4v1 = new Vec3(this.center.x - hsize, 
                            this.center.y - hsize,
                            this.center.z - hsize);

        var f4v2 = new Vec3(this.center.x - hsize, 
                            this.center.y + hsize,
                            this.center.z - hsize);
        
        var f4v3 = new Vec3(this.center.x - hsize, 
                            this.center.y - hsize,
                            this.center.z + hsize);

        var f4v4 = new Vec3(this.center.x - hsize, 
                            this.center.y - hsize,
                            this.center.z + hsize);

        var f4v5 = new Vec3(this.center.x - hsize, 
                            this.center.y + hsize,
                            this.center.z + hsize);
        
        var f4v6 = new Vec3(this.center.x - hsize, 
                            this.center.y + hsize,
                            this.center.z - hsize);



        var f5v1 = new Vec3(this.center.x - hsize, 
                            this.center.y - hsize,
                            this.center.z - hsize);

        var f5v2 = new Vec3(this.center.x + hsize, 
                            this.center.y - hsize,
                            this.center.z - hsize);
        
        var f5v3 = new Vec3(this.center.x - hsize, 
                            this.center.y - hsize,
                            this.center.z + hsize);

        var f5v4 = new Vec3(this.center.x - hsize, 
                            this.center.y - hsize,
                            this.center.z + hsize);

        var f5v5 = new Vec3(this.center.x + hsize, 
                            this.center.y - hsize,
                            this.center.z + hsize);
        
        var f5v6 = new Vec3(this.center.x + hsize, 
                            this.center.y - hsize,
                            this.center.z - hsize);




        var f6v1 = new Vec3(this.center.x - hsize, 
                            this.center.y + hsize,
                            this.center.z - hsize);

        var f6v2 = new Vec3(this.center.x + hsize, 
                            this.center.y + hsize,
                            this.center.z - hsize);
        
        var f6v3 = new Vec3(this.center.x - hsize, 
                            this.center.y + hsize,
                            this.center.z + hsize);

        var f6v4 = new Vec3(this.center.x - hsize, 
                            this.center.y + hsize,
                            this.center.z + hsize);

        var f6v5 = new Vec3(this.center.x + hsize, 
                            this.center.y + hsize,
                            this.center.z - hsize);
        
        var f6v6 = new Vec3(this.center.x + hsize, 
                            this.center.y + hsize,
                            this.center.z + hsize);


        this.primitives.push(new Triangle(f2v1, f2v2, f2v3),
                             new Triangle(f2v4, f2v5, f2v6),
                             new Triangle(f3v1, f3v2, f3v3),
                             new Triangle(f3v4, f3v5, f3v6),
                             new Triangle(f4v1, f4v2, f4v3),
                             new Triangle(f4v4, f4v5, f4v6),
                             new Triangle(f5v1, f5v2, f5v3),
                             new Triangle(f5v4, f5v5, f5v6),
                             new Triangle(f6v1, f6v2, f6v3),
                             new Triangle(f6v4, f6v5, f6v6));

    }
}