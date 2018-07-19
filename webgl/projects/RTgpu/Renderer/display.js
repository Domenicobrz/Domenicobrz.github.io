var rendervertex = `#version 300 es
layout(location = 0) in vec2 pos;

out vec2 vUV;

void main() {
    gl_Position = vec4(pos, 0.0, 1.0);
    vUV         = pos * 0.5 + 0.5;
}`;

var blitvertex   = `#version 300 es
layout(location = 0) in vec2 pos;

out vec2 vUV;

void main() {
    gl_Position = vec4(pos, 0.0, 1.0);
    vUV         = pos * 0.5 + 0.5;
}`;

var blitfragment = `#version 300 es
precision highp float;

in vec2 vUV;

uniform sampler2D uResult;
uniform float     uSamples;

out vec4 Color;

void main() {
    vec4 col = texture(uResult, vUV);
    Color = vec4(col.xyz * (1.0 / uSamples), 1.0);
}`;