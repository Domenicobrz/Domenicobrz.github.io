let linev = `

attribute vec3 position1;
attribute vec3 position2;
attribute vec3 color1;
attribute vec3 color2;
attribute float vindex;

uniform vec2 resolution;
uniform float bokehStrengh;
uniform float cameraFocalDistance;
uniform float time;

varying vec3  vColor;
varying vec2  vUv;
varying float vRadius;
varying float vW;
varying float vAlphaMult;

varying vec2 joinStops;

void main() {
    float aspectRatio = resolution.x / resolution.y;


    vec4 viewSpacePosition1 = modelViewMatrix * vec4(position1 + vec3(0.0, sin(time * 0.1 + position1.x * 0.5), 0.0), 1.0);
    vec4 viewSpacePosition2 = modelViewMatrix * vec4(position2 + vec3(0.0, sin(time * 0.1 + position2.x * 0.5), 0.0), 1.0);


    vec4 projectedPosition1 = projectionMatrix * viewSpacePosition1;
    projectedPosition1.xyz /= projectedPosition1.w;
    projectedPosition1.x *= aspectRatio;

    vec4 projectedPosition2 = projectionMatrix * viewSpacePosition2;
    projectedPosition2.xyz /= projectedPosition2.w;
    projectedPosition2.x *= aspectRatio;
    
    vec2 lineDirection = normalize(projectedPosition2.xy - projectedPosition1.xy);
    vec2 lineNormal = normalize(vec2(lineDirection.y, -lineDirection.x));
    // vec2 lineNormal = normalize(vec2(0.0, 1.0));





    vec3 projectedPosition = vec3(0.0, 0.0, 0.0);
    float radius1 = abs(viewSpacePosition1.z + cameraFocalDistance) * bokehStrengh;
    float radius2 = abs(viewSpacePosition2.z + cameraFocalDistance) * bokehStrengh;

    radius1 = max(radius1, 0.004);
    radius2 = max(radius2, 0.004);



    if(vindex > 2.5) {
        projectedPosition.xy = projectedPosition2.xy - lineNormal * radius2 + lineDirection * radius2;        
        projectedPosition.z = projectedPosition2.z;

        vColor = color2;
        vW = radius2;               //1.0 / projectedPosition2.w;
        vUv = vec2(1.0, 0.0);
        vRadius = radius2;
    } else if (vindex > 1.5) {
        projectedPosition.xy = projectedPosition2.xy + lineNormal * radius2 + lineDirection * radius2;        
        projectedPosition.z = projectedPosition2.z;

        vColor = color2;
        vW = radius2;               //1.0 / projectedPosition2.w;
        vUv = vec2(1.0, 1.0);
        vRadius = radius2;
    } else if (vindex > 0.5) {
        projectedPosition.xy = projectedPosition1.xy + lineNormal * radius1 - lineDirection * radius1;
        projectedPosition.z = projectedPosition1.z;

        vColor = color1;
        vW = radius1;               //1.0 / projectedPosition1.w;
        vUv = vec2(0.0, 1.0);
        vRadius = radius1;
    } else {
        // negative normal displacement, position 1.
        projectedPosition.xy = projectedPosition1.xy - lineNormal * radius1 - lineDirection * radius1;
        projectedPosition.z = projectedPosition1.z;

        vColor = color1;
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

let linef = `

uniform float bokehFalloff;

varying vec3  vColor;
varying vec2  vUv;
varying float vRadius;
varying float vW;
varying float vAlphaMult;

varying vec2 joinStops;

void main() {

    vec2 uv = vUv / vW;

    float alpha = (1.0 - (abs(uv.y - 0.5) * 2.0));
    alpha = sin(alpha * 3.14 * 0.5);

    if(uv.x < joinStops.x) {

        vec2 vd = vec2(joinStops.x, 0.5) - vec2(uv.x, uv.y);
        vd.x *= (0.5 / joinStops.x);

        float posRad = 1.0 - max(      length( vd ) * 2.0,     0.0 );

        alpha = posRad;
        alpha = sin(alpha * 3.14 * 0.5);
    } else if (uv.x > (1.0 - joinStops.y)) {
        
        vec2 vd = vec2(1.0 - joinStops.y, 0.5) - vec2(uv.x, uv.y);
        vd.x *= (0.5 / joinStops.y);
        float posRad = 1.0 - max(      length( vd ) * 2.0,     0.0 );

        alpha = posRad;
        alpha = sin(alpha * 3.14 * 0.5);
    }

    alpha *= 5.0 * vAlphaMult;
    alpha *= exp(-vRadius * bokehFalloff);
    if(alpha < 0.0) alpha = 0.0;

    gl_FragColor = vec4(vColor * alpha, 1.0);
}`;