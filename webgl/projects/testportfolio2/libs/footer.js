function footerResize() {
    var footerSvg1 = document.getElementById("footerSvg1");
    var DOMfooter  = document.getElementsByClassName("pageFooter")[0];
    var DOMenhancingWebExp = document.getElementsByClassName("fewe")[0];

    var svgRatio = 1.47;
    var svgWidth = innerWidth;
    var svgHeight = innerWidth / svgRatio;
    var svgHeightDock = 0.82;

    var screenRatio = innerWidth / innerHeight;
    if(screenRatio <= 1.2) {
        svgWidth *= 1.5;
        svgHeight *= 1.5;
        svgHeightDock = 0.76;
    }

    var footerOffsetTop  = DOMfooter.getBoundingClientRect().top;
    var feweOffsetBottom = DOMenhancingWebExp.getBoundingClientRect().bottom;

    footerSvg1.style.top = (feweOffsetBottom - footerOffsetTop - (svgHeight * svgHeightDock)) + "px";
}

function footerSVGHider() {
    if(footerSVGHider.prototype.hidden === false && window.pageYOffset === 0) {
        /* hide svgs, animating dasharray is performance intensive */
        document.querySelector("#footerSvg1").style.display = "none";
        footerSVGHider.prototype.hidden = true;
    }

    if(footerSVGHider.prototype.hidden === true && window.pageYOffset !== 0) {
        document.querySelector("#footerSvg1").style.display = "block";        
        footerSVGHider.prototype.hidden = false;
    }
}
footerSVGHider.prototype.hidden = false;