let connectedlinev = `

attribute vec3 position1;
attribute vec3 position2;
attribute float vindex;
attribute float connectionLevel;

uniform vec2 resolution;
uniform float bokehStrength;
uniform float cameraFocalDistance;
uniform float time;
uniform float ctime;

varying vec3  vColor;
varying vec2  vUv;
varying float vRadius;
varying float vW;
varying float vAlphaMult;
varying float vAlphaMult2;

varying vec2 joinStops;



void main() {
    float aspectRatio = resolution.x / resolution.y;


    vec4 viewSpacePosition1 = modelViewMatrix * vec4(position1 + vec3(0.0, sin(position1.x * 0.5 + time) * 0.3 + cos(position1.z * 0.5 + time) * 0.3, 0.0), 1.0);
    vec4 viewSpacePosition2 = modelViewMatrix * vec4(position2 + vec3(0.0, sin(position2.x * 0.5 + time) * 0.3 + cos(position2.z * 0.5 + time) * 0.3, 0.0), 1.0);


    vec3 viewSpaceLineDir = viewSpacePosition2.xyz - viewSpacePosition1.xyz;


    float timeStep = mod(ctime, 2.0);
    float timeStep1 = 0.0;
    float timeStep2 = 0.0;
    vColor = vec3(0.0, 0.0, 0.0);
    if(timeStep <= 1.0 && connectionLevel < 0.5) {
        timeStep1 = clamp(  (timeStep - 0.3) / 0.7,  0.0,  1.0);
        timeStep2 = clamp(  (timeStep)       / 0.7,  0.0,  1.0);

        // don't invert the order of these lines!! otherwise when viewSpacePosition2 is modified, it would read the modified viewSpacePosition1 -- which is not what we want!!
        viewSpacePosition2 = viewSpacePosition1 + vec4(viewSpaceLineDir.xyz, 0.0) * timeStep2;
        viewSpacePosition1 = viewSpacePosition1 + vec4(viewSpaceLineDir.xyz, 0.0) * timeStep1;
        
    } else if (timeStep > 1.0 && connectionLevel > 0.5) {
        timeStep1 = clamp(  (timeStep - 1.0 - 0.3) / 0.7,  0.0,  1.0);
        timeStep2 = clamp(  (timeStep - 1.0)       / 0.7,  0.0,  1.0);

        // don't invert the order of these lines!! otherwise when viewSpacePosition2 is modified, it would read the modified viewSpacePosition1 -- which is not what we want!!
        viewSpacePosition2 = viewSpacePosition1 + vec4(viewSpaceLineDir.xyz, 0.0) * timeStep2;
        viewSpacePosition1 = viewSpacePosition1 + vec4(viewSpaceLineDir.xyz, 0.0) * timeStep1;
    } else {
        viewSpacePosition1 = vec4(99999999999.0, 0.0, 0.0, 1.0);
        viewSpacePosition2 = vec4(99999999999.0, 0.0, 0.0, 1.0);
    } 

    // converting timeSteps in a form which can be easily used to animate the lines
    timeStep1 = 1.0 - abs(timeStep1 - 0.5) / 0.5;
    timeStep2 = 1.0 - abs(timeStep2 - 0.5) / 0.5;

    if(connectionLevel < 0.5) {
        vColor = vec3(40.0, 0.5, 0.5) * 2.0;
        vColor += vec3(0.0, 40.0, 40.0) * pow(timeStep1, 4.0);
    } else {
        vColor = vec3(30.0, 0.0, 4.5) * 2.0;
        vColor += vec3(0.0, 40.0, 40.0) * pow(timeStep2, 4.0);
    }

    vAlphaMult2 = exp(-abs(viewSpacePosition1.z + cameraFocalDistance) * 0.1);
    if (vindex > 1.5 && timeStep2 < 0.2) {
        vAlphaMult2 *= timeStep2 / 0.2;
    }
    if (vindex < 1.5 && timeStep1 < 0.2) {
        vAlphaMult2 *= timeStep1 / 0.2;        
    }


    // if you manually project points with the projectionMatrix in the vertex shader,
    // remember that points behind the camera WILL be projected in the near plane too!
    // from: https://www.scratchapixel.com/lessons/3d-basic-rendering/perspective-and-orthographic-projection-matrix/projection-matrices-what-you-need-to-know-first
    // so we need to account for points behind the camera and discard those manually ourselves
    if(viewSpacePosition1.z > 0.0 || viewSpacePosition2.z > 0.0) {  // using positive z values because OpenGL is right handed
        gl_Position = vec4(9999999.0, 0.0, 0.0, 1.0);
        return;
    }


    vec4 projectedPosition1 = projectionMatrix * viewSpacePosition1;
    projectedPosition1.xyz /= projectedPosition1.w;
    projectedPosition1.x *= aspectRatio;

    vec4 projectedPosition2 = projectionMatrix * viewSpacePosition2;
    projectedPosition2.xyz /= projectedPosition2.w;
    projectedPosition2.x *= aspectRatio;
    
    vec2 lineDirection = normalize(projectedPosition2.xy - projectedPosition1.xy);
    vec2 lineNormal = normalize(vec2(lineDirection.y, -lineDirection.x));





    vec3 projectedPosition = vec3(0.0, 0.0, 0.0);
    float radius1 = abs(viewSpacePosition1.z + cameraFocalDistance) * bokehStrength + timeStep1 * 0.05;
    float radius2 = abs(viewSpacePosition2.z + cameraFocalDistance) * bokehStrength + timeStep2 * 0.05;

    radius1 = max(radius1, 0.004);
    radius2 = max(radius2, 0.004);



    if(vindex > 2.5) {
        projectedPosition.xy = projectedPosition2.xy - lineNormal * radius2 + lineDirection * radius2;        
        projectedPosition.z = projectedPosition2.z;

        vW = radius2;               //1.0 / projectedPosition2.w;
        vUv = vec2(1.0, 0.0);
        vRadius = radius2;
    } else if (vindex > 1.5) {
        projectedPosition.xy = projectedPosition2.xy + lineNormal * radius2 + lineDirection * radius2;        
        projectedPosition.z = projectedPosition2.z;

        vW = radius2;               //1.0 / projectedPosition2.w;
        vUv = vec2(1.0, 1.0);
        vRadius = radius2;
    } else if (vindex > 0.5) {
        projectedPosition.xy = projectedPosition1.xy + lineNormal * radius1 - lineDirection * radius1;
        projectedPosition.z = projectedPosition1.z;

        vW = radius1;               //1.0 / projectedPosition1.w;
        vUv = vec2(0.0, 1.0);
        vRadius = radius1;
    } else {
        // negative normal displacement, position 1.
        projectedPosition.xy = projectedPosition1.xy - lineNormal * radius1 - lineDirection * radius1;
        projectedPosition.z = projectedPosition1.z;

        vW = radius1;               //1.0 / projectedPosition1.w;
        vUv = vec2(0.0, 0.0);
        vRadius = radius1;
    }




    // calculating line length in screen space
    float lr2o = length(lineDirection * radius2);  // length of radius 2 offset
    float lr1o = length(lineDirection * radius1);  // length of radius 1 offset
    float llss = length(projectedPosition1.xy - projectedPosition2.xy) + lr2o + lr1o;
    joinStops.x = lr1o / llss;
    joinStops.y = lr2o / llss;




    vec3 viewSpaceLineDirection = normalize(viewSpacePosition1.xyz - viewSpacePosition2.xyz);
    float viewSpaceLineDot = abs(pow(dot(viewSpaceLineDirection, normalize(viewSpacePosition1.xyz)), 1.0));
    vAlphaMult = 1.0 + (viewSpaceLineDot);


    // restore ndc aspect ratio
    projectedPosition.x /= aspectRatio;

    vUv.xy *= vW;

    gl_Position = vec4(projectedPosition.xyz, 1.0);
}`;

let connectedlinef = `

uniform float bokehFalloff;

varying vec3  vColor;
varying vec2  vUv;
varying float vRadius;
varying float vW;
varying float vAlphaMult;
varying float vAlphaMult2;

varying vec2 joinStops;

void main() {

    vec2 uv = vUv / vW;

    float alpha = (1.0 - (abs(uv.y - 0.5) * 2.0));

    if(uv.x < joinStops.x) {

        vec2 vd = vec2(joinStops.x, 0.5) - vec2(uv.x, uv.y);
        vd.x *= (0.5 / joinStops.x);

        float posRad = 1.0 - max(      length( vd ) * 2.0,     0.0 );

        alpha = posRad;
    } else if (uv.x > (1.0 - joinStops.y)) {
        
        vec2 vd = vec2(1.0 - joinStops.y, 0.5) - vec2(uv.x, uv.y);
        vd.x *= (0.5 / joinStops.y);
        float posRad = 1.0 - max(      length( vd ) * 2.0,     0.0 );

        alpha = posRad;
    }

    float alphaRef = alpha;

    alpha = pow(alpha, 2.1);
    alpha *= 5.0 * vAlphaMult;
    alpha *= exp(-vRadius * bokehFalloff);

    if(alpha < 0.0) alpha = 0.0;
    if(alpha > 1.0) alpha = 1.0;
    
    if(alphaRef < 0.0) alphaRef = 0.0;
    if(alphaRef > 1.0) alphaRef = 1.0;


    gl_FragColor = vec4(vColor * alpha, alphaRef * 0.5 * vAlphaMult2);
}`;