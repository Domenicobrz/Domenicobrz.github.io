


let meshVertexShader = `

uniform vec2 uvScale;

varying vec2 vNDCuv;
varying vec2 vUv;

void main() {
	vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;
    
    vNDCuv = vec2(gl_Position.x / gl_Position.w, gl_Position.y / gl_Position.w);
    
    vNDCuv *= uvScale * 1.5;
    vNDCuv = vNDCuv * 0.5 + 0.5;
    vNDCuv += vec2(0.15, 0.0);

    vUv = uv;
}`;



let meshFragmentShader = `
uniform sampler2D texture;
uniform sampler2D aoTexture;
uniform sampler2D radTexture;

varying vec2 vNDCuv;
varying vec2 vUv;

void main() {
    vec3 bgcol = texture2D(texture, vNDCuv).rgb;

    bgcol *= 1.2;

    vec3 ao    = texture2D(aoTexture, vUv).rgb;
    ao *= ao * ao;

    float radiance = texture2D(radTexture, vUv).r;
    radiance = radiance * pow(radiance, 0.7);
    radiance *= 1.35;
    // if(radiance > 0.5) radiance = pow(radiance, 0.85);
    // if(radiance < 0.5) radiance = pow(radiance, 1.25);

    // radiance *= radiance;// * radiance;

    gl_FragColor = vec4(bgcol * radiance, 1.0); 
}`;