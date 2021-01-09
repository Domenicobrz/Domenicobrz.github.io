let standardMaterial_vs = `
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

let standardMaterial_fs = `

uniform vec3  uEmissive;
uniform vec3  uAlbedo;
uniform float uRoughness;
uniform float uStep;

void main() {

    if(uStep < 0.5) {
        // compute emissive mat
        gl_FragColor = vec4(uEmissive, 1.0);
    } else if (uStep > 0.5 && uStep < 1.5) {
        // compute albedo mat
        gl_FragColor = vec4(uAlbedo, 1.0);
    } else if (uStep > 1.5) {
        // compute material mat
        gl_FragColor = vec4(uRoughness, 0.0, 0.0, 1.0);
    }
}
`;

export { standardMaterial_fs, standardMaterial_vs };