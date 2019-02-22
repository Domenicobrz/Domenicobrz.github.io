function initMusicCanvas() {
    var canvas    = document.querySelector("#music-canvas");

    var bars       = 34;
    var barwidth   = 4;
    var barspacing = 2;

    var WIDTH     = bars * (barwidth + barspacing);
    var HEIGHT    = 50;

    canvas.width  = WIDTH;
    canvas.height = HEIGHT;
    var canvasCtx = canvas.getContext("2d");



    // ***************   WEBAUDIO context & nodes   *******************
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var gainNode = audioCtx.createGain();
    var analyser = audioCtx.createAnalyser();
    analyser.smoothingTimeConstant = 0.15;
    analyser.fftSize = 256;
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);

    var songDownloaded = false;

    var source = audioCtx.createBufferSource();
    source.loop = true;
    source.connect(gainNode);
    gainNode.connect(analyser);
    analyser.connect(audioCtx.destination);    

    gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);

    /* --- load buffer ---  */
    var request = new XMLHttpRequest();
    request.open('GET', "assets/audio/High on Fire.mp3", true); 
    request.responseType = 'arraybuffer';
    request.onload = function() {
        audioCtx.decodeAudioData(request.response, function(response) {
            /* --- play the sound AFTER the buffer loaded --- */
            //set the buffer to the response we just received.
            source.buffer = response;
            //start(0) should play asap.
            source.start(0);
            source.loop = true;

            songDownloaded = true;
        }, function () { console.error('The request failed.'); } );
    }
    //Now that the request has been defined, actually make the request. (send it)
    request.send();
    // ***************   WEBAUDIO context & nodes - END   ******************* 




    let frameSkipper = 0;
    function render() {
        requestAnimationFrame(render);

        if(!songDownloaded) return;

        // logic used to skip few frames
        frameSkipper++;
        if(frameSkipper % 2 !== 0) {
            return;
        }
        // logic used to skip few frames - END


        analyser.getByteFrequencyData(dataArray);
        // analyser.getByteTimeDomainData(dataArray);

        canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
        canvasCtx.fillStyle = 'rgba(0, 0, 0, 0)';
        canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);


        for (let i = 0; i < bars; i++) {

            // bufferLength   bars   i
            let sampleIndex = Math.floor((bufferLength / 1.7) * (i / bars)); 
            let barHeight   = dataArray[sampleIndex] / 4 + 5;
            // let barHeight = (dataArray[i] - 120) * 3;
            // barHeight = Math.pow(barHeight, 1.5) / 25;

            let barWidth  = barwidth;
            let x         = WIDTH - i * (barwidth + barspacing);


            canvasCtx.fillStyle = 'rgba(35, 35, 35, 1)';
            canvasCtx.fillRect(x, HEIGHT-barHeight/2, barWidth, barHeight);
        }
    }
    render();
}