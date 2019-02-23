function MusicBox(filepath) {


    /* musicBars DOM element controller */
    var musicBarsDOM = document.querySelector(".mhMusicBars");
    musicBarsDOM.addEventListener("click", function(e) {

        if(!musicBoxReady) return;

        
        musicBarsDOM.classList.toggle("active");
        
        if (gainNode.gain.value === 0)
            gainNode.gain.value = 0.45;
        else
            gainNode.gain.value = 0;
    });

    /* musicBars DOM element controller - END */








    /*   Audio context creation   */
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    var request = new XMLHttpRequest();
    request.open('GET', filepath, true);
    request.responseType = 'arraybuffer';

    request.onload = function() {
        var audioData = request.response;

        audioCtx.decodeAudioData(audioData, 
                                 initBackgroundMusic, 
                                 function(e){ console.log("Error with decoding audio data" + e.err); });
    };
    request.send();
    /*   Audio context creation - END   */





    var musicAnalyser;
    var gainNode;
    var floatTimeDomainDataArray;
    var musicBoxReady = false;
    var source;
    function initBackgroundMusic(buffer) {
    
        musicAnalyser = audioCtx.createAnalyser();
        musicAnalyser.fftSize = 512;
        musicAnalyser.smoothingTimeConstant = 0.8; 

        gainNode = audioCtx.createGain();
        gainNode.gain.value = 0.45;
    
        var bufferLength = musicAnalyser.frequencyBinCount;
        floatTimeDomainDataArray = new Float32Array(bufferLength);
        for(var i = 0; i < bufferLength; i++) floatTimeDomainDataArray[i] = -140;
        createVisualizerTextureData();
        

        source = audioCtx.createBufferSource();
        source.buffer = buffer;
        source.loop = true; 


        source.connect(gainNode);
        gainNode.connect(musicAnalyser);
        musicAnalyser.connect(audioCtx.destination);    


        musicBoxReady = true;
    }

    var visualizerTexture;
    function createVisualizerTextureData() {
        visualizerTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, visualizerTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.R32F, floatTimeDomainDataArray.length, 1, 0, gl.RED, gl.FLOAT, floatTimeDomainDataArray);

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.bindTexture(gl.TEXTURE_2D, null);   
    }










    /*   public members   */
    this.updateVisualizerTextureData = function(deltatime) {
        if(!musicBoxReady) return;

        // musicAnalyser.getFloatTimeDomainData(floatTimeDomainDataArray); 
        musicAnalyser.getFloatFrequencyData(floatTimeDomainDataArray); 

        gl.bindTexture(gl.TEXTURE_2D, visualizerTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.R32F, floatTimeDomainDataArray.length, 1, 0, gl.RED, gl.FLOAT, floatTimeDomainDataArray);
        gl.bindTexture(gl.TEXTURE_2D, null);
    };

    this.getVisualizerTexture = function() {
        return visualizerTexture;
    };
    // it polls musicBoxReady to check if we can start the song
    this.start = function() {
        var centralSquareDOM = document.querySelector(".mhCentralSquare");
        var siteTitleDOM = document.querySelector(".siteTitle");


    
        var startIntervalID = setInterval(function(){
            console.log("there");
            if(musicBoxReady) {

                if(audioCtx.state == "suspended") {
                    let clickAnywhereText = document.createElement("p");
                    clickAnywhereText.textContent = "Click anywhere to start";
                    clickAnywhereText.style.position = "absolute";
                    clickAnywhereText.style.top = "2em";
                    // clickAnywhereText.style.transform = "translateY(-50%)";
                    clickAnywhereText.style.width = "100%";
                    clickAnywhereText.style.textAlign = "center";
                    clickAnywhereText.style.fontFamily = "Josefin Slab";
                    clickAnywhereText.style.fontSize = "calc(0.95vw + 1em)";
                    clickAnywhereText.style.color = "white";
                    document.body.appendChild(clickAnywhereText);
    
                    function clickedSomewhere() {
                        
                        onAudioContextReady();                    
    
                        document.body.removeChild(clickAnywhereText);
                        window.removeEventListener("mousedown", clickedSomewhere);
                        window.removeEventListener("touchstart", clickedSomewhere);
                    }
    
                    window.addEventListener("mousedown", clickedSomewhere);
                    window.addEventListener("touchstart", clickedSomewhere);
                } else {
                    onAudioContextReady();
                }

                window.clearInterval(startIntervalID);
            }
        }, 3000);


        function onAudioContextReady() {
            source.start();
            centralSquareDOM.style.opacity = "1";
            siteTitleDOM.style.opacity = "1";
        }
    };
    /*   public members - END  */
}
