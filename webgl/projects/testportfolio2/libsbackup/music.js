function MusicBox(filepath) {



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
    var floatTimeDomainDataArray;
    var musicBoxReady = false;
    function initBackgroundMusic(buffer) {
    
        musicAnalyser = audioCtx.createAnalyser();
        musicAnalyser.fftSize = 512;
        musicAnalyser.smoothingTimeConstant = 0.8; 
    
        var bufferLength = musicAnalyser.frequencyBinCount;
        floatTimeDomainDataArray = new Float32Array(bufferLength);
        for(var i = 0; i < bufferLength; i++) floatTimeDomainDataArray[i] = -140;
        createVisualizerTextureData();
        

        var source = audioCtx.createBufferSource();
        source.buffer = buffer;
        source.loop = true; 

        source.connect(musicAnalyser);
        musicAnalyser.connect(audioCtx.destination);    

        source.start();

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
    /*   public members - END  */
}
