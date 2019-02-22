


let planesVertexShader = `

varying vec2 vUv;

void main() {
	vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;
    
    vUv = uv;
}`;



let planesFragmentShader = `
varying vec2 vUv;

void main() {
    vec3 col = vec3(0.0);

    float alpha = 0.0; 
    // if (vUv.y > 0.15) alpha = 1.0 - (vUv.y - 0.15) / 0.85; 
    // if (vUv.y < 0.15) alpha = vUv.y / 0.15;

    alpha = vUv.y / 0.85;
    if(vUv.y > 0.85) alpha = 1.0 - (vUv.y - 0.85) / 0.15;

    gl_FragColor = vec4(col, alpha); 
}`;



let planesHorseVertexShader = `
void main() {
	vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;
}`;



let planesHorseFragmentShader = `
void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 0.0); 
}`;