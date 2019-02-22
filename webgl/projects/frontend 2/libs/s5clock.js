function initS5clock() {
    
    animateS5clock(0);
}

var s5then = 0;
var s5counter = 0;
function animateS5clock(t) {
    requestAnimationFrame(animateS5clock);

    now = t * 0.001;
    var deltatime = now - s5then;
    s5then = now;
    s5counter += deltatime;

    if(s5counter < 1) return;
    s5counter = 0; 


    var today = new Date();
    var h = today.getHours();
    if((h + "").length == 1) h = "0" + h;
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('.s5-clock-text').innerHTML =
    h + " <span>:</span> " + m + " <span>:</span> " + s;


    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }
}