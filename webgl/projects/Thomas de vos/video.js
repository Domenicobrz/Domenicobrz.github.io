function initVideo() {
    var videoFunc =  function(e) {
        bgvids[0].play();

        /* mobile phones */
        if(screenRatio < 0.9 || innerWidth < 400) { 
            return;
        }

        videoLoaded = true; 
        block = false;
    };




    /* roll a random video at start */
    var rd = Math.random() * 90;
    var r = Math.floor(rd % 3);
    var sourceElement = document.createElement("source");
    sourceElement.setAttribute("type", "video/mp4");
    var srcpath = "assets/Screen_" + r + ".mp4";
    sourceElement.setAttribute("src", srcpath);
    // bgvids[0].setAttribute("poster", "assets/bgvidposter" + r + ".jpg");
    bgvids[0].appendChild(sourceElement);
    bgvids[0].addEventListener("loadeddata", videoFunc);
    activeVideo = r; currentVideo = r;
    streamstart_s = streamstart_array[r*2 + 0];
    streamstart_t = streamstart_array[r*2 + 1];
    orig_streamstart_s = streamstart_array[r*2 + 0];
    orig_streamstart_t = streamstart_array[r*2 + 1];
    onResizeVideo();
    /* roll a random video at start - END */

}

function onResizeVideo() {
    /* 1920 x 1080 */
    var ratio = 1.77777777;

    var bgvidwidth  = innerWidth;
    var bgvidheight = innerWidth * (1 / ratio);

    if(bgvidheight < innerHeight) {
        bgvidheight = innerHeight;
        bgvidwidth = bgvidheight * ratio;
    }



    /*  background cover to center 
    bgvid.style.width  = bgvidwidth + "px";
    bgvid.style.left   = ((innerWidth - bgvidwidth) / 2) + "px";
    bgvid.style.left   = (innerWidth - bgvidwidth) + "px";
    bgvid.style.top    = ((innerHeight - bgvidheight) / 2) + "px";

    var widthratio = bgvidwidth / innerWidth;
    var heightratio = bgvidheight / innerHeight;

    streamstart_s = orig_streamstart_s * widthratio;
    streamstart_t = orig_streamstart_t * heightratio;
    */



    /*  background cover to left */ 
    bgvids[0].style.width  = bgvidwidth + "px";
    bgvids[0].style.height = bgvidheight + "px";
    bgvids[0].style.left   = (innerWidth - bgvidwidth) + "px";
    bgvids[0].style.top    = ((innerHeight - bgvidheight) / 2) + "px";

    
    /* mobile phones correction */
    if(screenRatio < 0.9 || innerWidth < 400) { 
        bgvids[0].style.left   = (innerWidth - bgvidwidth + 55) + "px";    
    }


    var widthratio = bgvidwidth / innerWidth;
    var heightratio = bgvidheight / innerHeight;

    /* 1 ... 0 */
    var os10 = 1 - (orig_streamstart_s * 0.5 + 0.5);
    /* 0.7 ... 0 */
    var vx   = 1 / widthratio;
    /* 1 ... 0 */
    var indcx = os10 / vx;
    /* 0 ... 1 */
    var ndcx = 1 - indcx;
    /* -1 ... +1 */
    var ss = ndcx * 2 - 1;

    streamstart_s = ss;
    streamstart_t = orig_streamstart_t * heightratio;   
    /**/
}
