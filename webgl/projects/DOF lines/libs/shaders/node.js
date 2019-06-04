let nodev = `

attribute vec3 color;
attribute float central;

uniform vec2 resolution;
uniform float bokehStrength;
uniform float cameraFocalDistance;
uniform float time;

varying vec3  vColor;
varying float zFocalDistance;
varying float zFocalDistanceCutOff;
varying float vInnerCircleSize;
varying float vIsCentral;
varying float vbokehStrength;

void main() {
    float aspectRatio = resolution.x / resolution.y;

    vec4 viewSpacePosition = modelViewMatrix * vec4(position + vec3(0.0, sin(position.x * 0.5 + time) * 0.3 + cos(position.z * 0.5 + time) * 0.3, 0.0), 1.0);


    float radius = abs(viewSpacePosition.z + cameraFocalDistance) * bokehStrength * 1.5 * (resolution.x + resolution.y);

    float minSize = (resolution.x + resolution.y) / 50.0;
    float maxSize = (resolution.x + resolution.y) / 10.0;
    float size    = min(        max(minSize,  radius),   maxSize     );
    if(central > 0.0) {
        // size *= 1.45;
        vIsCentral = 1.0;
    } 

    vInnerCircleSize = ((size * 0.1) / size);

    vColor = color;

    gl_PointSize = size;
    gl_Position = projectionMatrix * viewSpacePosition;


    zFocalDistance = abs(viewSpacePosition.z + cameraFocalDistance);
    zFocalDistanceCutOff = 7.0;

    vbokehStrength = bokehStrength;

    if(zFocalDistance > zFocalDistanceCutOff) {
        gl_Position = vec4(999.0, 0.0, 0.0, 1.0);
    }
}`;

let nodef = `

uniform float bokehFalloff;

varying vec3 vColor;
varying float zFocalDistance;
varying float vInnerCircleSize;
varying float zFocalDistanceCutOff;
varying float vIsCentral;
varying float vbokehStrength;

void main() {
    vec2 uv = gl_PointCoord;

    float intensity = 1.0 - length(vec2(0.5, 0.5) - uv) / 0.5;
    intensity = clamp(intensity, 0.0, 1.0);
    intensity = pow(intensity, 1.6) * 0.1;

    float intensity2 = 1.0 - length(vec2(0.5, 0.5) - uv) / clamp(vInnerCircleSize, 0.0, 0.5);
    intensity2 = clamp(intensity2, 0.0, 1.0);
    intensity2 = pow(intensity2, 1.5);

    intensity  = mix(intensity,  0.0, zFocalDistance / zFocalDistanceCutOff);
    intensity2 = mix(intensity2, 0.0, zFocalDistance / zFocalDistanceCutOff);

    if(intensity == 0.0) discard;


    intensity  *= 1.5;
    intensity2 *= 1.5;

    intensity  *= exp(-zFocalDistance * bokehFalloff * vbokehStrength);
    intensity2 *= exp(-zFocalDistance * bokehFalloff * vbokehStrength);    
    


    if(vIsCentral > 0.0) {
        intensity *= 1.5;
        intensity2 *= 1.5;
    }



    gl_FragColor = vec4(vec3(10.0 * intensity * vColor + 20.0 * intensity2 * (vColor + vec3(0.2, 0.2, 0.2))), 1.0);
    // gl_FragColor = vec4(1.0);
}`;