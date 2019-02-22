var s4chart;
var s4chartctx;
var s4chartWIDTH;
var s4chartHEIGHT;
var s4charBars = [];

function initS4chart() {
    s4chartWIDTH  = document.querySelector(".section4").clientWidth;        // innerWidth * 0.32;
    s4chartHEIGHT = document.querySelector(".section4").clientWidth * 0.3;  // innerWidth * 0.1;

    s4chart    = document.querySelector(".s4-chart");
    s4chartctx = s4chart.getContext("2d");

    s4chart.width  = s4chartWIDTH;
    s4chart.height = s4chartHEIGHT;


    let maxbarheight = innerWidth * 0.08;
    let minbarheight = 17;

    for (let i = 0; i < 50; i++) {
        s4charBars.push(
            Math.random() * (maxbarheight - minbarheight) * 0.4 + 
            minbarheight + 
            (Math.sin(i*0.2 - 3.14) * 0.5 + 0.5) * maxbarheight * 1.5
        );
    }

    animateS4chart(0);
}


var timer = 0;
function animateS4chart(t) {
    requestAnimationFrame(animateS4chart);

    timer += 0.012;
    t = Math.sin(timer) * 0.5 + 0.5; //Math.sin(timer) * 0.5 + 0.5;

    s4chartctx.clearRect(0, 0, s4chartWIDTH, s4chartHEIGHT);
    s4chartctx.fillStyle = 'rgba(0, 0, 0, 0)';
    s4chartctx.fillRect(0, 0, s4chartWIDTH, s4chartHEIGHT);


    let bars = s4charBars.length;
    let spacing = 2;
    let barwidth = Math.floor(s4chartWIDTH / bars) - spacing;
    let diff     = (s4chartWIDTH) - ((barwidth + spacing) * bars);


    // drawing edge lines
    for (let i = 1; i < 11; i++) {
        s4chartctx.beginPath();
        
        let xstart = 0;
        let ystart = Math.floor(i / 10 * s4chartHEIGHT);
        let xend   = s4chartWIDTH;

        s4chartctx.lineWidth = 1;
        s4chartctx.strokeStyle = 'rgba(35, 35, 35, 0.07)';

        s4chartctx.moveTo(xstart, ystart);
        s4chartctx.lineTo(xend,   ystart);
        s4chartctx.stroke();

        s4chartctx.closePath();
    }   



    for (let i = 0; i < bars; i++) {
        
        let stopIndex = Math.floor(t * bars) + 1;
        if (i >= stopIndex) return;

        let prevIndex = stopIndex - 1;
        let stopIndexT = stopIndex / bars;
        let prevIndexT = prevIndex / bars;
        let deltaT     = 1 / bars;
        let heightAtIndex = (t - prevIndexT) / deltaT;


        let barHeight = s4charBars[i];
        if (i === prevIndex)
            barHeight *= heightAtIndex;

        let barWidth  = barwidth;
        let x         = i * (barwidth + spacing)    + (diff / 2);
        let alpha1    = 1.0 - Math.abs(Math.cos((i / bars) * Math.PI));
        alpha1        = alpha1 * 0.3 + 0.1;
        let alpha2    = 0.7;

        s4chartctx.fillStyle = 'rgba(35, 35, 35, ' + alpha1 +' )';
        s4chartctx.fillRect(x, s4chartHEIGHT-barHeight/2, barWidth, barHeight);

        barHeight *= 0.6;
        

        s4chartctx.fillStyle = 'rgba(35, 35, 35, ' + alpha2 +' )';
        s4chartctx.fillRect(x, s4chartHEIGHT-barHeight/2, barWidth, barHeight);
    }
}