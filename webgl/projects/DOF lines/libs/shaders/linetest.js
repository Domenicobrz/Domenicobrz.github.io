let linetestv = `

attribute vec3 position1;
attribute vec3 position2;
attribute float vindex;

uniform vec2 resolution;
uniform float bokehStrengh;
uniform float cameraFocalDistance;

varying vec2 uvs;
varying float z;

void main() {

    vec4 projected = projectionMatrix * modelViewMatrix * vec4(position1, 1.0);

    projected.xyz /= projected.w;

    z = 1.0 / projected.w;

    gl_Position = vec4(projected.xyz, 1.0);
    
    uvs = position2.xy;

    uvs *= z;
}`;

let linetestf = `

varying float z;
varying vec2 uvs;

void main() {

    vec2 uvss = uvs / z;

    float alpha = (1.0 - (abs(uvss.y - 0.5) * 2.0));
    gl_FragColor = vec4(vec3(1.0), alpha);
}`;