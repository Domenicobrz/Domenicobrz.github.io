let linev = `

attribute vec3 position1;
attribute vec3 position2;
attribute vec3 color1;
attribute vec3 color2;
attribute float vindex;

uniform vec2 resolution;
uniform float bokehStrength;
uniform float cameraFocalDistance;
uniform float time;

varying vec3  vColor;
varying vec2  vUv;
varying float vRadius;
varying float vW;
varying float vAlphaMult;
varying float vTime;

varying vec2 joinStops;

void main() {
    float aspectRatio = resolution.x / resolution.y;


    vec4 viewSpacePosition1 = modelViewMatrix * vec4(position1 + vec3(0.0, sin(position1.x * 0.5 + time) * 0.3 + cos(position1.z * 0.5 + time) * 0.3, 0.0), 1.0);
    vec4 viewSpacePosition2 = modelViewMatrix * vec4(position2 + vec3(0.0, sin(position2.x * 0.5 + time) * 0.3 + cos(position2.z * 0.5 + time) * 0.3, 0.0), 1.0);


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
    float radius1 = abs(viewSpacePosition1.z + cameraFocalDistance) * bokehStrength;
    float radius2 = abs(viewSpacePosition2.z + cameraFocalDistance) * bokehStrength;

    radius1 = max(radius1, 0.0024);
    radius2 = max(radius2, 0.0024);



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


    vTime = time;
}`;

let linef = `

uniform float bokehFalloff;
uniform float falloffType;
uniform float uRandomValue;

varying vec3  vColor;
varying vec2  vUv;
varying float vRadius;
varying float vW;
varying float vAlphaMult;
varying float vTime;

varying vec2 joinStops;


float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}




// //note: uniformly distributed, normalized rand, [0;1[
// float nrand( vec2 n )
// {
// 	return fract(sin(dot(n.xy, vec2(12.9898, 78.233)))* 43758.5453);
// }
// //note: remaps v to [0;1] in interval [a;b]
// float remap( float a, float b, float v )
// {
// 	return clamp( (v-a) / (b-a), 0.0, 1.0 );
// }
// //note: quantizes in l levels
// float truncate( float a, float l )
// {
// 	return floor(a*l)/l;
// }

// float n1rand( vec2 n )
// {
// 	float t = fract( 0.0 );
// 	float nrnd0 = nrand( n + 0.07*t );
// 	return nrnd0;
// }






float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

float noise(vec2 pp){
    vec3 p = vec3(pp, 0.0);
    vec3 a = floor(p);
    vec3 d = p - a;
    d = d * d * (3.0 - 2.0 * d);

    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
    vec4 k1 = perm(b.xyxy);
    vec4 k2 = perm(k1.xyxy + b.zzww);

    vec4 c = k2 + a.zzzz;
    vec4 k3 = perm(c);
    vec4 k4 = perm(c + 1.0);

    vec4 o1 = fract(k3 * (1.0 / 41.0));
    vec4 o2 = fract(k4 * (1.0 / 41.0));

    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

    return o4.y * d.y + o4.x * (1.0 - d.y);
}











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
    if(falloffType < 0.5) {
        alpha *= exp(-vRadius * bokehFalloff);
    } else {
        // this one instead of the line above gives also pretty interesting results!
        alpha *= 1.0 / pow(vRadius * bokehFalloff, 2.71828); 
    }
    if(alpha < 0.0) alpha = 0.0;


    float noiseStrenght = min(0.6, vRadius * 10.0);
    float random =  noise(floor(gl_FragCoord.xy / 2.0 + vRadius)) * 0.5;// + vRadius) * 0.35;
    random       += noise(floor(gl_FragCoord.xy + vRadius)) * 0.65;

    alpha *= (1.0 - random * noiseStrenght);


    gl_FragColor = vec4(vColor * alpha, 1.0);
}`;