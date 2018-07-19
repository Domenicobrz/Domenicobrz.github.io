var backgroundv = `#version 300 es
layout(location = 0) in vec4 pos;

void main() {	
    gl_Position = pos;
}`;

var backgroundf = `#version 300 es
precision mediump float;

uniform float uTime;

out vec4 FragColor;

` + shaderPart_simpleRand + `
` + shaderPart_general + `


void main() {
    float random = rand(gl_FragCoord.xy);
    float gray = random * 0.055 + 0.08;     // + sin(uTime * 3.0 + random * 575474.0) * 0.015;
	
    // if(random > 0.998) {
    // float t = mod((random * random * 7759.0 + uTime), 500.0);
    // if( t < 1.0 ) {
    //     gray += sin(t * PI * 2.0) * 0.5;
    // }
    // }


    FragColor = vec4(gray,gray,gray,1);
}`;

