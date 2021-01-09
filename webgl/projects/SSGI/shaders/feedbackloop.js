let feedbackloop_vs = `
varying vec2 vUv;

void main() {
    gl_Position = vec4(position, 1.0);
    vUv = uv;
}
`;

let feedbackloop_fs = `
varying vec2 vUv;

uniform float uFeedbackLoopFactor;
uniform sampler2D uRadianceAccumRT;
uniform sampler2D uAtrousRT;
uniform sampler2D uHistory;
uniform sampler2D uMaterial;

uniform float uMaxFramesHistory; 

void main() {
    vec4 col1 = texture2D(uRadianceAccumRT, vUv);
    vec4 col2 = texture2D(uAtrousRT, vUv);

    float maxFrames = uMaxFramesHistory;
    float history = min(texture2D(uHistory, vUv).x, maxFrames) / maxFrames;
    vec4 material = texture2D(uMaterial, vUv);

    // float factor = uFeedbackLoopFactor * (1.0 - history);
    float factor = uFeedbackLoopFactor;

    // shiny materials fix
    float roughness = material.x;
    factor *= roughness;


    gl_FragColor = col1 * (1.0 - factor) + col2 * (factor);
}
`;

export { feedbackloop_fs, feedbackloop_vs };