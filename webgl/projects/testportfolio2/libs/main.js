window.addEventListener("load", init);
window.addEventListener("resize", onResize);

function init() {
    initTypography();
    initRateStars();
    initMenu();
    
    lazyloadImages();



    onResize();
}

function onResize() {
    canvasResize();
    footerResize();
}