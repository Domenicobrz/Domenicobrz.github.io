var shaderpart_rand = `
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}`;


var shaderpart_colors = `
// const vec3 Color1 = vec3(238.0 / 255.0, 158.0 / 255.0, 63.0 / 255.0);
const vec3 Color1 = vec3(247.0 / 255.0, 158.0 / 255.0, 35.0 / 255.0);
const vec3 Color2 = vec3(238.0 / 255.0, 63.0 / 255.0,  30.0 / 255.0);
`;

function getShaderPrecision() {
    if(highpSupport) return "precision highp float;";
    else             return "precision mediump float;";
}