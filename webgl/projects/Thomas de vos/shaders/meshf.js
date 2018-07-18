function getMeshf() {

var shader_meshf = `
` + getShaderPrecision() + `


varying vec4 Color;

void main() {
    gl_FragColor = Color; 
}`;


    return shader_meshf;
}