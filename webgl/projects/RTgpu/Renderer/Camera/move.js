window.addEventListener('load', function() {
    
    var pitch = 0;
    var yaw   = -Math.PI / 2;
    var lastX;
    var lastY;

    var radius = 60;

    var canvas = document.getElementsByTagName('canvas')[0];

    var mousedown = false;
    canvas.addEventListener('mousedown', function(e) {
        mousedown = true;    
    });
    
    canvas.addEventListener('wheel', function(e) {
        if(!mousedown) return;
        radius += e.deltaY * 1;   
        moveCamera(e);

        e.stopPropagation();
        e.preventDefault();
        return false; 
    });

    canvas.addEventListener('mousemove', function(e) {
        if(!mousedown) return;
        moveCamera(e);    
    });

    canvas.addEventListener('mouseup', function(e) {
        mousedown = false;        
        lastX = undefined;
        lastY = undefined;
    });


    function moveCamera(e) {
        if(lastX === undefined) lastX = e.clientX;
        if(lastY === undefined) lastY = e.clientY;

        var deltaYaw   = (e.clientX - lastX) * 0.01; 
        var deltaPitch = (e.clientY - lastY) * 0.01;

        yaw   += deltaYaw; 
        pitch += deltaPitch;

        var x = Math.cos(yaw) * Math.cos(pitch) * radius    + 0;
        var y = Math.sin(pitch)                 * radius    + 0;
        var z = Math.sin(yaw) * Math.cos(pitch) * radius    + 60;

        camera.lookAt = [0, 0, 60]; 
        camera.eye    = [x, y, z]; 

        lastX = e.clientX;     
        lastY = e.clientY;
    }

});