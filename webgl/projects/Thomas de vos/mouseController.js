function MouseController() {
    this.origin   = [0, 0, 0];
    this.velocity = [0, 0, 0];
    this.ww       = undefined;
    this.wh       = undefined;




    this.infocus    = false;
    this.focustime  = 0;

    // needs to be in sNDC  -1...+1 in the y    and  (-1...+1) * screenRatio for the x coordinate
    var meshCenterNDCx = (((meshCenter[0] + hww) / (hww * 2)) * 2 - 1) * screenRatio;
    var meshCenterNDCy = (((meshCenter[1] + hwh) / (hwh * 2)) * 2 - 1);
    this.focusPoint = [meshCenterNDCx, meshCenterNDCy];
    this.focusPointWorld = [0, 0];




    this.update = function(deltatime) {
        this.velocity[0] *= (1.0 - (0.1 - deltatime));
        this.velocity[1] *= (1.0 - (0.1 - deltatime));
        this.velocity[2] *= (1.0 - (0.1 - deltatime));


        if(lastx === undefined || lasty === undefined) return;

        var x = (lastx) / canvas.width;
        var y = ((canvas.height - lasty)) / canvas.height;

        this.checkFocusPoint(x, y);
    };

    var mousedown = false;
    window.addEventListener('mousedown', function(e) {
        mousedown = true;

        var x = (e.clientX) / canvas.width;
        var y = ((canvas.height - e.clientY)) / canvas.height;

        this.origin = [hww * 2 * x - hww, hwh * 2 * y - hwh, 0];

        lastx = e.clientX; 
        lasty = e.clientY;
    }.bind(this)); 


    var lastx, lasty;
    window.addEventListener('mousemove', function(e) {
        // if(!mousedown) return;
        if(lastx === undefined) lastx = e.clientX;
        if(lasty === undefined) lasty = e.clientY;

        var deltax = e.clientX - lastx;
        var deltay = e.clientY - lasty;

        var x = (e.clientX) / canvas.width;
        var y = ((canvas.height - e.clientY)) / canvas.height;

        this.origin = [hww * 2 * x - hww, hwh * 2 * y - hwh, 0];
        this.velocity = [deltax * hww * 0.001, -deltay * hww * 0.001, 0];

        lastx = e.clientX;
        lasty = e.clientY;


        this.checkFocusPoint(x, y);

    }.bind(this)); 
    window.addEventListener('mouseup',   function(e) {
        mousedown = false;
    }.bind(this)); 



    /**
     * @param {Number} x    0...1  screen coordinates
     * @param {Number} y    0...1  screen coordinates
     */
    this.checkFocusPoint = function(x, y) {

        var dist = 0;
        var maxDist = 0;


        var streamstart_x = streamstart_s * hww;
        var streamstart_y = streamstart_t * hwh;
        // var streamMaxHeight = (hww * 2 - (streamstart_y + hww)) * 0.8;
        var streamEndY = (hwh * 0.9);
        var streamMaxHeight = streamEndY - streamstart_y;



        // if in focus, check distance from focus point
        if(this.infocus) {
            var dx = this.origin[0] - this.focusPointWorld[0];
            var dy = this.origin[1] - this.focusPointWorld[1];
            dist = dx * dx + dy * dy;
            maxDist = (hwh + hww) * 0.15;
        }

        if(!this.infocus) {
            // if not in focus, check distance from curve
            // domain  +1...-1
            var cos = Math.cos((this.origin[0] + hww) / (hww + streamstart_x) * Math.PI);
            // domain  1...0  
            cos = cos * 0.5 + 0.5; 
            // to ->  y world height             
            var y1   =  cos * (streamMaxHeight) + streamstart_y;

            var cos2 = Math.cos((this.origin[0] - 0.001 + hww) / (hww + streamstart_x) * Math.PI);
            var y2   =  (cos2 * 0.5 + 0.5) * (streamMaxHeight) + streamstart_y;


            // cos * 0.5 + 0.5           1...0   <--
            // mult                      0...1   <--
            var mult = Math.pow(1 - (cos * 0.5 + 0.5), 1.5);
            // suby                      0.45...-0.55   <--
            var suby = 1 - mult - 0.75;
            // suby                      0.45...0       <--            
            if(suby < 0) suby = 0;


            /**
             *    0.005   is the aperture, or randomness of directions at the beginning of the stream
             *    mult is responsible to lower this random aperture and let the particles follow the cosing wave 
             *          it lowers the aperture depending on the x coordinate. Lower x-coordinates means a smaller aperture
             *          and points following the cosine wave more and more instead of random directions
             *    suby    at a certain x direction, points will additionally start to fall down a bit to make the stream look better
             */
            var vectorx = -0.001;
            var vectory = y2 - y1  - (suby * 0.01);

            var pointOnCurve_x = this.origin[0];
            var pointOnCurve_y = y1;

            var distanceFromPointCurve = Math.abs(this.origin[1] - pointOnCurve_y);
            dist = distanceFromPointCurve;
            maxDist = hwh * 0.05 + (cos * hwh * 0.9);


            // if we're not enough away from the start of the stream, we can't be in focus 
            if(cos < 0.04) maxDist = 0;
            // if we're on the opposite side of the start of the stream, we can't be in focus 
            if(this.origin[0] > streamstart_x) maxDist = 0;
        }









        
        
        
        
        // fade-in requested
        if(dist < maxDist && !this.infocus) {
            if(then - this.focustime < effectsController.timeBeforeFocus) return;
            else {
                // set last requested fade-in
                this.focustime = then;
                this.infocus = true;

                this.focusPointWorld[0] = this.origin[0];
                this.focusPointWorld[1] = this.origin[1];
            }
        }

        // fade-out requested
        if(dist > maxDist && this.infocus) {
            this.infocus = false;
            meshesProgram.currentlyBoundMeshId = ( ++meshesProgram.currentlyBoundMeshId ) % meshesProgram.registeredMeshesCount;
        }


        /* As soon as a fade-in is request, a timer starts, calculated by  
                    if(then - this.focustime < effectsController.timeBeforeFocus) return;
           Here we make sure that if we're out of the maxDist from the focus point focustime and then are the same,
           so that if a fade-in is requested, effectsController.timeBeforeFocus time will need to pass to retrigger a new fade-in
        */
        if(dist > maxDist) {
            this.focustime = then;                        
        }
        



        // another way of animating fade-in & fade-out
        // if(then - this.focustime < 0.3) return;     // too little time has passed since the last switch in focus
        // this.focustime = then;
        
        // if(dist < 0.75) {
        //     this.infocus = true;
        // } else {
        //     this.infocus = false;
        // }   
    };
}