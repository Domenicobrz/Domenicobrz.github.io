var icolinesTFv = `#version 300 es
layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 2) in vec4 v0displaced;
layout(location = 3) in vec4 v1displaced;
layout(location = 4) in vec4 v0musicDisplaced;
layout(location = 5) in vec4 v1musicDisplaced;
layout(location = 6) in vec4 mouseVelocity;
layout(location = 7) in vec4 fx;
layout(location = 8) in vec4 color;

out vec4 tfV0;
out vec4 tfV1;
out vec4 tfV0displaced;
out vec4 tfV1displaced;
out vec4 tfV0musicDisplaced;
out vec4 tfV1musicDisplaced;
out vec4 tfMouseVelocity;
out vec4 tfFx;              // tfFx.x  should dictate wheter this is the 'left' or 'right' vertex
                            // tfFx.y  is the angle of the rotation
                            // tfFx.z  is the angular accelleration
                            // tfFx.w  is the opacity - could be collapsed in tfColor.a
out vec4 tfColor;



uniform float uTime;
uniform float uDeltaTime;

uniform vec3  uMouseOrigin;
uniform vec3  uMouseVelocity;

uniform sampler2D uMusicVisualizerData;


/*  defines  */
` + shaderPart_colors + `

/*  constants declarations  */
` + shaderPart_general + `
` + shaderPart_maxDistance + `
` + shaderPart_screenRatio + `
` + shaderPart_tan225 + `
` + shaderPart_cameraZ + `
` + shaderPart_mouseConstants + `   
` + shaderPart_sphereRadius + `   

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
    float saveTheAttributes = color.x + fx.x;


    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO POINTSTF.JS */
    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO POINTSTF.JS */
    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO POINTSTF.JS */

   
    /* noise deflater - will make noise less apparent if the point is close to the deflaterPoint */
   
    /*  CAN BE OFFLOADED TO THE CPU */
    /*  CAN BE OFFLOADED TO THE CPU */
    vec2 phitheta = vec2(sin(uTime * 0.2) * PI, sin(uTime * 0.1) * PI);
    vec3 pointOnSphere = vec3(cos(phitheta.x) * cos(phitheta.y),  cos(phitheta.y), sin(phitheta.x) * cos(phitheta.y));
    pointOnSphere *= sphereRadius;
    /*  CAN BE OFFLOADED TO THE CPU */
    /*  CAN BE OFFLOADED TO THE CPU */


    /** just a linear interpolation -   eg.   distanceFromDeflater is  12, deflaterRadius is 10,   from 10 to 15 we linearly
     *  interpolate the strenght of the deflater so we have     (12 - 10) / (15 - 10)  and we clamp the result */
    float deflaterRadius = sphereRadius;
    float deflaterInterp = deflaterRadius * 0.5;

    float distanceFromDeflaterV0 = length(v0.xyz - pointOnSphere);
    float noiseDeflaterStrenghtV0 = clamp((distanceFromDeflaterV0 - deflaterRadius) / (deflaterInterp), 0.0, 1.0);
    float distanceFromDeflaterV1 = length(v1.xyz - pointOnSphere);
    float noiseDeflaterStrenghtV1 = clamp((distanceFromDeflaterV1 - deflaterRadius) / (deflaterInterp), 0.0, 1.0);





    

    /** 
     *      ATTRACTORS - will be calculated against non-displaced vertices, v0 & v1
     */

     // attractVertex will normalize the attractor
     vec4 attractorExample = vec4(sin(uTime * 0.2 + 345.0), sin(uTime * 0.37 + 10.0), 1, 1);

     float unusedAttractDistanceV0;   // will be used in pointsTF 
     vec4 attractedV0 = attractVertex(attractorExample, v0, unusedAttractDistanceV0);
     vec4 attractedV1 = attractVertex(attractorExample, v1, unusedAttractDistanceV0);






    /* noise displacement */
    vec4 toCenter = v0 * 1.0;
    float noise = cnoise(vec2(uTime * 0.03 + v0.x * 0.1, uTime * 0.03 + v0.y * 0.1));
    float noise2 = cnoise(vec2(uTime * 0.3 + v0.x * 0.5, uTime * 0.3 + v0.y * 0.3));
    /* noise displacement */
    vec4 whereShouldv0Be = attractedV0 + (toCenter * noise * 0.5 + toCenter * noise2 * 0.15) * noiseDeflaterStrenghtV0;

    toCenter = v1 * 1.0;
    noise = cnoise(vec2(uTime * 0.03 + v1.x * 0.1, uTime * 0.03 + v1.y * 0.1));
    noise2 = cnoise(vec2(uTime * 0.3 + v1.x * 0.5, uTime * 0.3 + v1.y * 0.3));    
    vec4 whereShouldv1Be = attractedV1 + (toCenter * noise * 0.5 + toCenter * noise2 * 0.15) * noiseDeflaterStrenghtV1;














    vec4 wherev0is = v0displaced;
    vec4 wherev1is = v1displaced;

    /** VELOCITIES ROUTINE  */

    tfMouseVelocity.xy = mouseVelocity.xy;
    tfMouseVelocity.zw = mouseVelocity.zw;

    offsetVertexMouseVelocity(wherev0is, 0, 1.0);
    offsetVertexMouseVelocity(wherev1is, 1, 1.0);
    
    applyVelocityToVertex(wherev0is, 0);
    applyVelocityToVertex(wherev1is, 1);

    // decreasing velocities
    tfMouseVelocity.xy *= 0.99; //reboundStrenght;
    tfMouseVelocity.zw *= 0.99; //reboundStrenght;


    /** VELOCITIES ROUTINE - END  */








    // put it back where it should be
    tfV0 = v0;		
    tfV1 = v1;

    tfV0displaced = wherev0is * 0.965 + whereShouldv0Be * 0.035;
    tfV1displaced = wherev1is * 0.965 + whereShouldv1Be * 0.035;


    // final deformation step
    tfV0musicDisplaced = offsetVertexMusic(tfV0displaced, v0);
    tfV1musicDisplaced = offsetVertexMusic(tfV1displaced, v1);

    
    

    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO POINTSTF.JS */
    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO POINTSTF.JS */
    /* DISPLACEMENT ROUTINE  --  SHOULD BE APPLIED ALSO TO POINTSTF.JS */

    tfFx = fx;	











    /**
     * lines closer to the attractor will be more reddish
     */
    float colorMult = (length(mouseVelocity.xy) * 10.0 + 1.0);
    float redComp   = 0.1 + 
    
    pow(                                                         //  vvv radius which shows the effect 
        clamp(1.0 - (unusedAttractDistanceV0 / (sphereCircleLength * 0.4)), 0.0, 1.0)
    , 0.9) * 0.85;




    // tfColor = vec4(redComp * colorMult * 1.5, 0.1 * colorMult, 0.1 * colorMult * 2.0, 0);
    tfColor = ` + shaderPart_colors_TFlineAttractor + `    







    /**
     * 
     * animate line shatter 
     * 
     */

    // the transform feedback will be responsible for color changes, opacity, angle of rotation and angular velocity

    float distancev0v1 = length(v0musicDisplaced.xyz - v1musicDisplaced.xyz);
    
    if(distancev0v1 > maxDistance) {
    
        tfColor = ` + shaderPart_colors_TFlineShatter + `    


        float angularVelocity = tfFx.z;
        float angleRotation   = tfFx.y;


        if(angularVelocity == 0.0) { 
            angularVelocity = 0.06;
            tfFx.y = 0.0; 
            tfFx.w = 1.0; 
        }


        tfFx.z  = angularVelocity * 0.995; 
        tfFx.y  = angleRotation + tfFx.z; 
        tfFx.w  = tfFx.w * 0.99;

        return;
    } 


    // put lines back togheter if we got there, since they're close togheter    
    
    tfFx.z  = 0.0;     // reset angular velocity 
    tfFx.y  *= 0.93;   // slowly rerotate the lines back into place
    tfFx.w  = min(tfFx.w + uDeltaTime, 1.0);
}`;

var icolinesTFf = `#version 300 es
precision mediump float;

out vec4 FragColor;

void main() {
    FragColor = vec4(0);
}`;
