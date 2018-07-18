function getLinef() {

var shader_linef = `
` + getShaderPrecision() + `


varying vec4 Color;

void main() {
    gl_FragColor = Color; 
}`;

    return shader_linef;
}