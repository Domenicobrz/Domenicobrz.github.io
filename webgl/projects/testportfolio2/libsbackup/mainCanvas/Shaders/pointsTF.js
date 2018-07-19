var icoTFv = `#version 300 es
layout(location = 0) in vec4 pos;
layout(location = 1) in vec4 displacedPos;
layout(location = 2) in vec4 musicDisplacedPos;
layout(location = 3) in vec4 mouseVelocity;
layout(location = 4) in vec4 fx;
layout(location = 5) in vec4 fx2;


out vec4 tfPosition;
out vec4 tfDisplacedPos;
out vec4 tfMusicDisplacedPos;
out vec4 tfMouseVelocity;
out vec4 tfFX;
out vec4 tfFX2;


uniform float uTime;
uniform float uDeltaTime;
uniform vec3  uMouseOrigin;
uniform vec3  uMouseVelocity;

uniform sampler2D uMusicVisualizerData;


out vec3 Color;



/*  constants declarations  */
` + shaderPart_maxDistance + `
` + shaderPart_screenRatio + `
` + shaderPart_tan225 + `
` + shaderPart_cameraZ + `
` + shaderPart_mouseConstants + `
` + shaderPart_sphereRadius + `   
` + shaderPart_general + `

/*  functions declarations  */
` + shaderPart_classicPerlinNoise + `
` + shaderPart_atan2 + `
` + shaderPart_rotMatrix + `
` + shaderPart_sphericalDistance + `
` + shaderPart_attractVertex + `
` + shaderPart_offsetVertexMouse + `
` + shaderPart_offsetVertexMusic + `
` + shaderPart_applyVelocityToVertex + `


void main() {		


    float saveTheAttributes = musicDisplacedPos.x;


    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO LINESTF.JS */
    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO LINESTF.JS */
    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO LINESTF.JS */



/* noise deflater - will make noise less apparent if the point is close to the deflaterPoint */
   
    /*  CAN BE OFFLOADED TO THE CPU */
    /*  CAN BE OFFLOADED TO THE CPU */
    vec2 phitheta = vec2(sin(uTime * 0.2) * PI, sin(uTime * 0.1) * PI);
    vec3 pointOnSphere = vec3(cos(phitheta.x) * cos(phitheta.y),  cos(phitheta.y), sin(phitheta.x) * cos(phitheta.y));
    pointOnSphere *= sphereRadius;
    /*  CAN BE OFFLOADED TO THE CPU */
    /*  CAN BE OFFLOADED TO THE CPU */

    float distanceFromDeflater = length(pos.xyz - pointOnSphere);
    /** just a linear interpolation -   eg.   distanceFromDeflater is  12, deflaterRadius is 10,   from 10 to 15 we linearly
     *  interpolate the strenght of the deflater so we have     (12 - 10) / (15 - 10)  and we clamp the result */
    float deflaterRadius = sphereRadius;
    float deflaterInterp = deflaterRadius * 0.5;
    float noiseDeflaterStrenght = clamp((distanceFromDeflater - deflaterRadius) / (deflaterInterp), 0.0, 1.0);





    

    /** 
     *      ATTRACTORS - will be calculated against non-displaced vertices, v0 & v1
     */

     // attractVertex will normalize the attractor
     vec4 attractorExample = vec4(sin(uTime * 0.2 + 345.0), sin(uTime * 0.37 + 10.0), 1, 1);
     float distanceFromAttractor = 0.0;
     vec4 attractedPos = attractVertex(attractorExample, pos, distanceFromAttractor);







    vec4 toCenter = pos * 1.0;
    float noise = cnoise(vec2(uTime * 0.03 + pos.x * 0.1, uTime * 0.03 + pos.y * 0.1));
    float noise2 = cnoise(vec2(uTime * 0.3 + pos.x * 0.5, uTime * 0.3 + pos.y * 0.3));
    vec4 whereShouldPosBe = attractedPos + (toCenter * noise * 0.5 + toCenter * noise2 * 0.15) * noiseDeflaterStrenght;
    

    vec4 wherePosIs = displacedPos;





    /** VELOCITIES ROUTINE  */

    tfMouseVelocity.xy = mouseVelocity.xy;

    offsetVertexMouseVelocity(wherePosIs, 0, 1.3);
    applyVelocityToVertex(wherePosIs, 0);
    
    tfMouseVelocity.xy *= reboundStrenght;

    /** VELOCITIES ROUTINE - END  */






    // put it back where it should be
    tfPosition = pos;

    tfDisplacedPos = wherePosIs * 0.965 + whereShouldPosBe * 0.035;

    tfMusicDisplacedPos = offsetVertexMusic(tfDisplacedPos, pos);

    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO LINESTF.JS */
    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO LINESTF.JS */
    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO LINESTF.JS */




    tfFX           = fx;     // fx.x    distance from attractor
    tfFX.x         = distanceFromAttractor; // points closer to the attractor 
                                            // will be smaller in size

    tfFX2          = fx2;   

    // tfMouseVelocity = mouseVelocity;
}`;
 
var icoTFf = `#version 300 es
precision mediump float;

void main() {

}`;
