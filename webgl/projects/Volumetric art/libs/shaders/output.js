let outputVert = `
precision highp float;

attribute vec2 aPosition;

varying vec2 vUv;

void main() {
    gl_Position = vec4(aPosition, 0.0, 1.0);
    vUv = aPosition * 0.5 + 0.5;
}`;

let outputFrag = `
precision highp float;

uniform sampler2D uComputedImage;

varying vec2 vUv;

void main() {
    gl_FragColor = texture2D(uComputedImage, vUv);
}`;