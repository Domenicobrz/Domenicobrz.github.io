window.addEventListener("load", AudioInit);

var gl;
var analyser;
var dataArray;
var bufferLength;


var processor;
var processor2;
var biquadFilter;
var gainNode;
var audioContext;
var convolver;
var sourceBuffer;

var fullBuffer;
var lf;
var rf;


//memory managment vars
    var projection = mat4.create();
    var model = mat4.create();
    var view = mat4.create();

    var mainQuadVertices = new Float32Array(6291456);// * 2 + 24);
    var pointVertices = new Float32Array(8192);  //64*64*2

    var multiPurposeBuffer = [0,0,0];
    var step = Float32Array.BYTES_PER_ELEMENT;
//memory managment vars - END


var Program_main;
var Buffer_main;

var Program_points;
var Buffer_points;




function AudioInit()
{
    //sistemiamo il canvas
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvas.addEventListener("mousedown", moused);
    canvas.addEventListener("mouseup", mouseu);
    canvas.addEventListener("mousemove", mousedrag);
    window.addEventListener('mousewheel', MouseWheelHandler);

    // For Firefox
    window.addEventListener('DOMMouseScroll', MouseWheelHandler);



    gl = canvas.getContext('experimental-webgl');
    var names = ["webgl", "experimental-webgl", "webkit-3d", "mozwebgl"];

    for(var i in names)
    {
        try 
        {
            gl = canvas.getContext(names[i], {stencil: true, premultipliedAlpha: false});
  
            if (gl && typeof gl.getParameter == "function") 
            {
                /* WebGL is enabled */
                break;
            }
        } catch(e) { }
    }
  
    if(gl == null)
        alert("could not initialize webGL");




    //Programs setup
    Program_main = getShader("mainv", "mainf", false);
    Program_main.a1 = gl.getAttribLocation(Program_main, "pos");
    Program_main.a2 = gl.getAttribLocation(Program_main, "ID");
    Program_main.projection = gl.getUniformLocation(Program_main, "projection");
    Program_main.model = gl.getUniformLocation(Program_main, "model");
    Program_main.view = gl.getUniformLocation(Program_main, "view");
    Program_main.values = gl.getUniformLocation(Program_main, "values");
    




    Program_points = getShader("pointv", "pointf", false);
    Program_points.a1 = gl.getAttribLocation(Program_points, "id");
    Program_points.projection = gl.getUniformLocation(Program_points, "projection");
    Program_points.model = gl.getUniformLocation(Program_points, "model");
    Program_points.view = gl.getUniformLocation(Program_points, "view");
    Program_points.samples = gl.getUniformLocation(Program_points, "samples");
    Program_points.pheight = gl.getUniformLocation(Program_points, "pheight");
    //Programs setup - END





    






    var clickedSomewhere = function clickedSomewhere() {

        onAudioContextReady();

        document.body.removeChild(clickAnywhereText);
        window.removeEventListener("mousedown", clickedSomewhere);
        window.removeEventListener("touchstart", clickedSomewhere);
    };

    var clickAnywhereText = document.createElement("p");
    clickAnywhereText.className = "click-anywhere-text";
    clickAnywhereText.textContent = "Click anywhere to start";
    clickAnywhereText.style.position = "absolute";
    clickAnywhereText.style.top = "2em";
    // clickAnywhereText.style.transform = "translateY(-50%)";
    clickAnywhereText.style.width = "100%";
    clickAnywhereText.style.textAlign = "center";
    // clickAnywhereText.style.fontFamily = "Josefin Slab";
    clickAnywhereText.style.fontSize = "calc(0.95vw + 1em)";
    clickAnywhereText.style.color = "white";
    document.body.appendChild(clickAnywhereText);

    window.addEventListener("mousedown", clickedSomewhere);
    window.addEventListener("touchstart", clickedSomewhere);





    function onAudioContextReady() {
        // Create the audio context
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        var oscillator = audioContext.createOscillator();

        //ricordati che quest'API è piena di nodes, che sarebbero come dei
        //middleware che "modificano" il suono prima di arrivare a destinazione, ovvero agli speaker
        var request = new XMLHttpRequest();

        request.open('GET', 'test.mp3', true);
        request.responseType = 'arraybuffer';
        request.addEventListener("progress", function(evt){
            if (evt.lengthComputable) {
                var percentComplete = evt.loaded / evt.total;
                console.log(evt.loaded);
                document.getElementById("loading").getElementsByTagName('div')[0].innerHTML = "Loaded:  " + ((evt.loaded / evt.total) * 100).toFixed(0) + "%";
            } else {
                console.log(uncomputable);
            }
            //if (evt.lengthComputable) 
            //{  //evt.loaded the bytes browser receive
               //evt.total the total bytes seted by the header
              //var loaded = evt.loaded;  
              //document.getElementById("loading").innerHTML = "Loaded" + loaded;
              //console.log(1); 
            //} 
        });
    

        request.onload = function () {
            var undecodedAudio = request.response;
            document.getElementById("loading").getElementsByTagName('div')[0].innerHTML = "Creating buffers...";
            audioContext.decodeAudioData(undecodedAudio, function (buffer) {
                // The contents of our mp3 is now an AudioBuffer
            
                    document.getElementById("loading").style.display = "none";
            
                    if(document.querySelector("p.click-anywhere-text")) {
                        document.querySelector("p.click-anywhere-text").style.display = "none";
                    }
                
                    //criamo l'audiobuffersourceNode - na sorta di player dove mettere canzoni
                    sourceBuffer = audioContext.createBufferSource();
                
                
                
                
                    biquadFilter = audioContext.createBiquadFilter();
                    gainNode = audioContext.createGain();
                
                
                     sourceBuffer.loop = true;
                    // Tell the AudioBufferSourceNode to use this AudioBuffer.
                    sourceBuffer.buffer = buffer;
                    fullBuffer = buffer;

                    gainNode.gain.value = 0.001;
                    gainNode.gain.linearRampToValueAtTime(gainNode.gain.value, audioContext.currentTime);
                    gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + 6);
                
                    /*biquadFilter.type = "lowshelf";
                    biquadFilter.frequency.value = 1000;
                    biquadFilter.gain.value = 25;*/
                
                    biquadFilter.type = 'lowpass'; // Low-pass filter. See BiquadFilterNode docs
                    biquadFilter.frequency.value = 4400; // Set cutoff to 440 HZ
                

                
                
                
                    //convolver = audioContext.createConvolver();
                    //convolver.connect(gainNode);
                    //convolver.buffer = impulseResponse(1, 2, 3);
                    //convolver.normalize = true;
                
                
                    // Create a ScriptProcessorNode.
                    processor = audioContext.createScriptProcessor(2048);
                    // Assign the onProcess function to be called for every buffer.
                    processor.onaudioprocess = onProcess;
                
                    processor2 = audioContext.createScriptProcessor(2048);
                    // Assign the onProcess function to be called for every buffer.
                    processor2.onaudioprocess = math;

                
                
                
                    analyser = audioContext.createAnalyser();
                
                
                    analyser.fftSize = 1024;
                    bufferLength = analyser.frequencyBinCount;
                    dataArray = new Float32Array(bufferLength);
                    analyser.getFloatTimeDomainData(dataArray);
                
                


                    //NODE CONNECTION
                    sourceBuffer.connect(processor);
                    processor.connect(processor2);
                    processor2.connect(biquadFilter);
                    biquadFilter.connect(gainNode);
                    gainNode.connect(analyser);
                    analyser.connect(audioContext.destination);
                    //NODE CONNECTION - END
                
                
                
                    sourceBuffer.start(audioContext.currentTime);
                    lf = fullBuffer.getChannelData(0);
                    rf = fullBuffer.getChannelData(1);
                
                
                
                
                
                    //navigator.getUserMedia  = navigator.getUserMedia ||
                    //              navigator.webkitGetUserMedia ||
                    //              navigator.mozGetUserMedia ||
                    //              navigator.msGetUserMedia;
                    init();
                    draw();
            });
        };

        request.send();
    }
}


var f = 0;
var then = 0;
var buffery = new Float32Array(512);
var count = 0;
var deltatime = 0;
var threshold = 450;
var pheight = -2.0;
var NOISE_FACTOR = 0;
var zoom = 0;
var deltazoom = 0;
var deltarotvec = [0,0];
function draw(now)
{
    requestAnimationFrame(draw);

    now *= 0.001;
    deltatime = now - then;
    then = now;
    if(deltatime)
        count += deltatime;

    if(zoom != deltazoom)
    {
        var difference = zoom - deltazoom;
        deltazoom += difference * 0.2;
    }

    if(deltarotvec[0] != rotVec[0] || deltarotvec[1] != rotVec[1])
    {
        var differencex = rotVec[0] - deltarotvec[0];
        var differencey = rotVec[1] - deltarotvec[1];

        deltarotvec[0] += differencex * 0.4;
        deltarotvec[1] += differencey * 0.4;
    }

    if(count > Math.pow(threshold * 0.001, 4)) {
        analyser.getFloatTimeDomainData(dataArray);
        count = 0;
    }


    


    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    //gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.SRC_ALPHA, gl.ONE);

    mat4.perspective(projection, 45, window.innerWidth / window.innerHeight, 1, 2000);
    mat4.identity(model);
    mat4.identity(view);


    multiPurposeBuffer[0] = 0.0;
    multiPurposeBuffer[1] = -25.0;
    multiPurposeBuffer[2] = -145.0 + deltazoom;
    mat4.translate(model, model, multiPurposeBuffer);

    multiPurposeBuffer[0] = 0.0;
    multiPurposeBuffer[1] = 0.0;
    multiPurposeBuffer[2] = -180.0;
    mat4.translate(model, model, multiPurposeBuffer);

    multiPurposeBuffer[0] = 1.0;
    multiPurposeBuffer[1] = 0.0;
    multiPurposeBuffer[2] = 0.0;
    mat4.rotate(model, model, deltarotvec[1], multiPurposeBuffer);

    multiPurposeBuffer[0] = 0.0;
    multiPurposeBuffer[1] = 1.0;
    multiPurposeBuffer[2] = 0.0;
    mat4.rotate(model, model, deltarotvec[0], multiPurposeBuffer);

    multiPurposeBuffer[0] = 0.0;
    multiPurposeBuffer[1] = 0.0;
    multiPurposeBuffer[2] = 128.0;
    mat4.translate(model, model, multiPurposeBuffer);

    

    gl.useProgram(Program_main);
    gl.bindBuffer(gl.ARRAY_BUFFER, Buffer_main);
    gl.enableVertexAttribArray(Program_main.a1);
    gl.enableVertexAttribArray(Program_main.a2);
    gl.vertexAttribPointer(Program_main.a1, 3, gl.FLOAT, false, step * 4, 0);
    gl.vertexAttribPointer(Program_main.a2, 1, gl.FLOAT, false, step * 4, step * 3);

    gl.uniformMatrix4fv(Program_main.projection, false, projection);
    gl.uniformMatrix4fv(Program_main.model, false, model);
    gl.uniformMatrix4fv(Program_main.view, false, view);
    gl.uniform4fv(Program_main.values, dataArray);

    gl.drawArrays(gl.TRIANGLES, 0, mainQuadVertices.length / 4);

    






    //points routine
    gl.useProgram(Program_points);
    gl.bindBuffer(gl.ARRAY_BUFFER, Buffer_points);
    gl.enableVertexAttribArray(Program_points.a1);
    gl.vertexAttribPointer(Program_points.a1, 2, gl.FLOAT, false, 0, 0);

    gl.uniformMatrix4fv(Program_points.projection, false, projection);
    gl.uniformMatrix4fv(Program_points.model, false, model);
    gl.uniformMatrix4fv(Program_points.view, false, view);
    gl.uniform4fv(Program_points.samples, dataArray);
    gl.uniform1f(Program_points.pheight, pheight);

    gl.drawArrays(gl.POINTS, 0, pointVertices.length / 2);
}


function init()
{

    //generate the big main quad
    var quad = [];
    var count = 0;
    for(var i = 0; i < bufferLength; i++)
    {
        //y = 0
        //bufferlenght indica quanti quad ci sono in una riga
        //z = 0/1 in questa iterazione

        //generate a quad vertices
        //ogni lato del quad è grande 1 world width
        count = 0;
        for(var j = 0; j < bufferLength; j++) {


            var v1x = 0 + j - bufferLength / 2, 
            v1y = 0, 
            v1z = -(0 + i), 
            v1id = count;


            var v2x = 0 + j - bufferLength / 2, 
            v2y = 0, 
            v2z = (1 + i), 
            v2id = count;


            var v3x = 1 + j - bufferLength / 2, 
            v3y = 0, 
            v3z = -(0 + i), 
            v3id = count;


            var v4x = 1 + j - bufferLength / 2, 
            v4y = 0, 
            v4z = -(0 + i), 
            v4id = count;


            var v5x = 0 + j - bufferLength / 2, 
            v5y = 0, 
            v5z = (1 + i), 
            v5id = count;


            var v6x = 1 + j - bufferLength / 2, 
            v6y = 0, 
            v6z = (1 + i), 
            v6id = count;


    
            quad.push(v1x);quad.push(v1y);quad.push(v1z);quad.push(v1id);
            quad.push(v2x);quad.push(v2y);quad.push(v2z);quad.push(v2id);
            quad.push(v3x);quad.push(v3y);quad.push(v3z);quad.push(v3id);
    
            quad.push(v4x);quad.push(v4y);quad.push(v4z);quad.push(v4id);
            quad.push(v5x);quad.push(v5y);quad.push(v5z);quad.push(v5id);
            quad.push(v6x);quad.push(v6y);quad.push(v6z);quad.push(v6id);


            count++;
        }
    }


var yoff = -3;


    /*for(var i = 0; i < bufferLength; i++)
    {
        //y = 0
        //bufferlenght indica quanti quad ci sono in una riga
        //z = 0/1 in questa iterazione

        //generate a quad vertices
        //ogni lato del quad è grande 1 world width
        count = 0;
        for(var j = 0; j < bufferLength; j++) {


            var v1x = 0 + j - bufferLength / 2, 
            v1y = yoff, 
            v1z = -(0 + i), 
            v1id = count;


            var v2x = 0 + j - bufferLength / 2, 
            v2y = yoff, 
            v2z = (1 + i), 
            v2id = count;


            var v3x = 1 + j - bufferLength / 2, 
            v3y = yoff, 
            v3z = -(0 + i), 
            v3id = count;


            var v4x = 1 + j - bufferLength / 2, 
            v4y = yoff, 
            v4z = -(0 + i), 
            v4id = count;


            var v5x = 0 + j - bufferLength / 2, 
            v5y = yoff, 
            v5z = (1 + i), 
            v5id = count;


            var v6x = 1 + j - bufferLength / 2, 
            v6y = yoff, 
            v6z = (1 + i), 
            v6id = count;


    
            quad.push(v1x);quad.push(v1y);quad.push(v1z);quad.push(v1id);
            quad.push(v2x);quad.push(v2y);quad.push(v2z);quad.push(v2id);
            quad.push(v3x);quad.push(v3y);quad.push(v3z);quad.push(v3id);
    
            quad.push(v4x);quad.push(v4y);quad.push(v4z);quad.push(v4id);
            quad.push(v5x);quad.push(v5y);quad.push(v5z);quad.push(v5id);
            quad.push(v6x);quad.push(v6y);quad.push(v6z);quad.push(v6id);


            count++;
        }
    }

{
    var v1x = 0 - bufferLength / 2, 
    v1y = yoff, 
    v1z = 0, 
    v1id = -1;


    var v2x = 0 - bufferLength / 2, 
    v2y = 0, 
    v2z = 0, 
    v2id = -1;


    var v3x = 512 - bufferLength / 2, 
    v3y = yoff, 
    v3z = 0, 
    v3id = -1;


    var v4x = 512 - bufferLength / 2, 
    v4y = yoff, 
    v4z = 0, 
    v4id = -1;


    var v5x = 0 - bufferLength / 2, 
    v5y = 0, 
    v5z = 0, 
    v5id = -1;


    var v6x = 512 - bufferLength / 2, 
    v6y = 0, 
    v6z = 0, 
    v6id = -1;


    quad.push(v1x);quad.push(v1y);quad.push(v1z);quad.push(v1id);
    quad.push(v2x);quad.push(v2y);quad.push(v2z);quad.push(v2id);
    quad.push(v3x);quad.push(v3y);quad.push(v3z);quad.push(v3id);
    
    quad.push(v4x);quad.push(v4y);quad.push(v4z);quad.push(v4id);
    quad.push(v5x);quad.push(v5y);quad.push(v5z);quad.push(v5id);
    quad.push(v6x);quad.push(v6y);quad.push(v6z);quad.push(v6id);
}*/

    for(var i = 0; i < quad.length; i++)
        mainQuadVertices[i] = quad[i];
    
    Buffer_main = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Buffer_main);
    gl.bufferData(gl.ARRAY_BUFFER, mainQuadVertices, gl.STATIC_DRAW);
    //generate the big main quad - END





    var bufferpts = [];
    for(var i = 0; i < 64; i++) {
        for(var j = 0; j < 64; j++)
        {
            bufferpts.push(j);
            bufferpts.push(i);
        }
    }



    for(var i = 0; i < bufferpts.length; i++)
        pointVertices[i] = bufferpts[i];

    Buffer_points = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, Buffer_points);
    gl.bufferData(gl.ARRAY_BUFFER, pointVertices, gl.STATIC_DRAW);
}


function freq(value)
{
    biquadFilter.frequency.value = value;
}

function gainv(value)
{
    gainNode.gain.linearRampToValueAtTime(value, audioContext.currentTime);
}

function reverbt(value)
{
    if(value == 0) {
        sourceBuffer.connect(biquadFilter);
        convolver.disconnect();
        biquadFilter.connect(gainNode);
    }
    else
    {
        biquadFilter.connect(convolver);
        convolver.connect(gainNode);
    }

    convolver.buffer = impulseResponse(value, 2, 3);
}

function noise(value)
{
   NOISE_FACTOR = value;
}

function exponentialc(value)
{
   reverber = Math.floor(value);
}

function analratio(value)
{
    threshold = parseFloat(value);
}

function pointheight(value)
{
    pheight = parseFloat(value);
}


//put that into utils.js
function getBoundingVertices(fov, ratio, depth)
{
    var BoundingVertices = [];
    var projection =         mat4.create();
    var projection_inverse = mat4.create();

    mat4.perspective(projection, fov, ratio, 0.1, depth);
    mat4.invert(projection_inverse, projection);
    
    var NDCcube = [];

    //NDCcube.push(vec4.fromValues(-1.0, -1.0, -1.0, 1.0));
    //NDCcube.push(vec4.fromValues( 1.0, -1.0, -1.0, 1.0));
    //NDCcube.push(vec4.fromValues(-1.0,  1.0, -1.0, 1.0));
    //NDCcube.push(vec4.fromValues( 1.0,  1.0, -1.0, 1.0));

    NDCcube.push(vec4.fromValues(-1.0, -1.0,  1.0, 1.0));
    NDCcube.push(vec4.fromValues(-1.0,  1.0,  1.0, 1.0));
    NDCcube.push(vec4.fromValues( 1.0,  1.0,  1.0, 1.0));
    NDCcube.push(vec4.fromValues( 1.0, -1.0,  1.0, 1.0));

    /*
        Returned Values:
        2___________3
        |           |
        |           |
        |           |
        |___________|
        1           4
    */

    for(var i = 0; i < 4; i++)
    {
        var tempvec = vec4.create();
        tempvec = vec4.transformMat4(tempvec, NDCcube[i], projection_inverse);

        BoundingVertices.push(vec3.fromValues(
            tempvec[0] / tempvec[3],
            tempvec[1] / tempvec[3],
            tempvec[2] / tempvec[3]
               ));
    }

    return BoundingVertices;
}



var dragging = 0;
var startpos = [0.0, 0.0];
function moused(e)
{
    e.preventDefault();
    startpos[0] = e.clientX;
    startpos[1] = e.clientY;
    dragging = 1.0;
}

function mouseu(e)
{
    e.preventDefault();
    startpos[0] = 0.0;
    startpos[1] = 0.0;
    dragging = 0.0;
}

var rotVec = [0.0, 0.18];
function mousedrag(e)
{
    e.preventDefault();
    if(dragging)
    {
        var xdelta = startpos[0] - e.clientX; 
        var ydelta = startpos[1] - e.clientY; 

        rotVec[0] += -(xdelta / 10.0) * deltatime; 
        rotVec[1] += -(ydelta / 10.0) * deltatime; 

        startpos[0] = e.clientX;
        startpos[1] = e.clientY;
    }
}

var impulseL;
var impulseR;
var impulse;
function impulseResponse( duration, decay, reverse ) {
    var sampleRate = audioContext.sampleRate;
    var length = sampleRate * duration;
    

    //è tutto qui secondo me, il channel data che ritorna è diverso
    if(!impulse) {
        alert();
        impulse = audioContext.createBuffer(2, length, sampleRate);
        impulseL = impulse.getChannelData(0);
        impulseR = impulse.getChannelData(1);
    }


    if (!decay)
        decay = 2.0;
    for (var i = 0; i < length; i++){
      var n = reverse ? length - i : i;
      impulseL[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
      impulseR[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
    }

    return impulse;
}



function onProcess(e) {
  var leftIn = e.inputBuffer.getChannelData(0);
  var rightIn = e.inputBuffer.getChannelData(1);

  var leftOut = e.outputBuffer.getChannelData(0);
  var rightOut = e.outputBuffer.getChannelData(1);

  

  for (var i = 0; i < leftOut.length; i++) {
    // Add some noise
    leftOut[i] = leftIn[i] + (Math.random() - 0.5) * NOISE_FACTOR;
    rightOut[i] = rightIn[i] + (Math.random() - 0.5) * NOISE_FACTOR;
  }
}



var gaussianblur = [0.1, 0.3, 0.5, 0.3, 0.1];
var power = 2.0;
var whentostart = 0;
var reverber = 0;

function math(e) {
    if(whentostart == 0)
    {
        whentostart = audioContext.currentTime;
    }

  var leftIn = e.inputBuffer.getChannelData(0);
  var rightIn = e.inputBuffer.getChannelData(1);

  var leftOut = e.outputBuffer.getChannelData(0);
  var rightOut = e.outputBuffer.getChannelData(1);


  if(audioContext.currentTime - whentostart > 275.0)
    reverber = 0;

    if(reverber == 0)
    {
        for (var i = 0; i < leftOut.length; i++) {
            leftOut[i] = leftIn[i];
            rightOut[i] = rightIn[i];
        }
        return;
    }




    var sampl = 48000 * (audioContext.currentTime - whentostart - reverber);
    if(sampl < 0) sampl = 0;    

    var divisor  = 0;
    var divisorf = 0;


    switch(reverber)
    {
        case 0:
            divisorf = 1;
            break;
        case 1:
            divisor  = 2;
            divisorf = 1.5;
            break;
        case 2:
            divisor  = 3;
            divisorf = 2;
            break;
        case 3:
            divisor  = 3;
            divisorf = 2;
            break;
        case 4:
            divisor  = 3;
            divisorf = 2;
            break;
        case 5:
            divisor  = 3;
            divisorf = 2;
            break;
    }

    for (var i = 0; i < leftOut.length; i++) {

        for(var j = 0; j < reverber; j++)
        {
            leftOut[i] +=  lf[Math.floor(sampl) + i + Math.floor(j*48000)] / divisor;
            rightOut[i] += rf[Math.floor(sampl) + i + Math.floor(j*48000)] / divisor;
        }

        leftOut[i]  +=  leftIn[i] / divisorf;  //lf[i * 50];
        rightOut[i] += rightIn[i] / divisorf;  ///lf[i * 50];
    }
}



function mic(checked)
{
    if(checked)
    {
        if(navigator.mediaDevices.getUserMedia)   {
            var p = navigator.mediaDevices.getUserMedia({audio: true}); 
            p.then(function(stream) 
            {

              window.microphone = audioContext.createMediaStreamSource( stream);

              if(!window.microphone) return;
              

                              sourceBuffer.disconnect();
                processor.disconnect();
                processor2.disconnect();
                biquadFilter.disconnect();
                gainNode.disconnect();
                analyser.disconnect();



              
              // microphone -> filter -> destination.
              microphone.connect(biquadFilter);
              //processor.connect(processor2);
              //processor2.connect(biquadFilter);
              biquadFilter.connect(gainNode);
              gainNode.connect(analyser);
              analyser.connect(audioContext.destination);
            });
    
            p.catch(function(err) { console.log(err.name); });
        }
        else if(navigator.webkitGetUserMedia)  //try to support chrome
        {



            navigator.webkitGetUserMedia({audio: true}, function(stream) {
             window.microphone = audioContext.createMediaStreamSource( stream);
              
            if(!window.microphone) return;



                        sourceBuffer.disconnect();
        processor.disconnect();
        processor2.disconnect();
        biquadFilter.disconnect();
        gainNode.disconnect();
        analyser.disconnect();


              // microphone -> filter -> destination.
              microphone.connect(biquadFilter);
              //processor.connect(processor2);
              //processor2.connect(biquadFilter);
              biquadFilter.connect(gainNode);
              gainNode.connect(analyser);
              analyser.connect(audioContext.destination);
            }, function(){});
        }
        else if(navigator.msGetUserMedia)
        {
            navigator.msGetUserMedia({audio: true}, function(stream) {
             window.microphone = audioContext.createMediaStreamSource( stream);
              
            if(!window.microphone) return;

            sourceBuffer.disconnect();
        processor.disconnect();
        processor2.disconnect();
        biquadFilter.disconnect();
        gainNode.disconnect();
        analyser.disconnect();



              // microphone -> filter -> destination.
              microphone.connect(biquadFilter);
              //processor.connect(processor2);
              //processor2.connect(biquadFilter);
              biquadFilter.connect(gainNode);
              gainNode.connect(analyser);
              analyser.connect(audioContext.destination);
            }, function(){});
        }
    }
    else
    {
        if(!window.microphone)
        {
            return;
        }

        microphone.disconnect();
        biquadFilter.disconnect();
        gainNode.disconnect();
        analyser.disconnect();


        whentostart = 0;
        sourceBuffer = audioContext.createBufferSource();
        biquadFilter = audioContext.createBiquadFilter();
        gainNode = audioContext.createGain();


        sourceBuffer.loop = true;
        sourceBuffer.buffer = fullBuffer;
        
        gainNode.gain.value = 0.001;
        gainNode.gain.linearRampToValueAtTime(gainNode.gain.value, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + 6);

        biquadFilter.type = 'lowpass';
        biquadFilter.frequency.value = 4400;

        //NODE CONNECTION
        sourceBuffer.connect(processor);
        processor.connect(processor2);
        processor2.connect(biquadFilter);
        biquadFilter.connect(gainNode);
        gainNode.connect(analyser);
        analyser.connect(audioContext.destination);
        //NODE CONNECTION - END


        sourceBuffer.start(audioContext.currentTime);
        lf = fullBuffer.getChannelData(0);
        rf = fullBuffer.getChannelData(1);
    }
}


function MouseWheelHandler(e)
{
    var delta = e.wheelDelta ? e.wheelDelta : -e.detail;
    if(delta > 0)
        zoom += +20.0;
    else
        zoom += -20.0;

    if(zoom > +140.0) zoom = +140.0;
    if(zoom < -220.0) zoom = -220.0;
}



var datatext;
function dataTexture()
{
    var array = new Float32Array(512);
    gl.bindTexture(gl.TEXTURE_2D, datatext);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.texImage2D(
      gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, array);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.bindTexture(gl.TEXTURE_2D, null);
}