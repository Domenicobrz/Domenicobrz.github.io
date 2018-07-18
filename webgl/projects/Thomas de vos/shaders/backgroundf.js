function getBackgroundf() {
    var shader_backgroundf = `
    ` + getShaderPrecision() + `

    uniform sampler2D uImage;

    varying vec2 Coord;

    void main() {
        gl_FragColor = texture2D(uImage, Coord); 
    }`;

    return shader_backgroundf;
}

