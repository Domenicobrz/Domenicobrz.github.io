let display_vs = `
varying vec2 vUv;

void main() {
    gl_Position = vec4(position, 1.0);
    vUv = uv;
}
`;

let display_fs = `
varying vec2 vUv;

uniform sampler2D uTexture;
uniform float uExposure;
uniform vec2 uPRScreenSize;

uniform sampler2D uPosBuff; 
uniform sampler2D uHrPosBuff;
uniform sampler2D uNormBuff;
uniform sampler2D uHrNormBuff;

vec3 acesFilm(const vec3 x) {
    const float a = 2.51;
    const float b = 0.03;
    const float c = 2.43;
    const float d = 0.59;
    const float e = 0.14;
    return clamp((x * (a * x + b)) / (x * (c * x + d ) + e), 0.0, 1.0);
}

void main() {

    // float exposure = 3.0;
    float exposure = uExposure;







    // upscaling through pseudo best-fit
    vec3 hrPos  = texture2D(uHrPosBuff, vUv).xyz;
    vec3 hrNorm = texture2D(uHrNormBuff, vUv).xyz;

    vec2 prStepSize = vec2(1.0 / uPRScreenSize.x, 1.0 / uPRScreenSize.y);
    vec2 bestFitUvs = vUv;
    float bestFit = 0.0;
    float p_phi = 0.05;
    float n_phi = 0.01;

    vec2 offs[9];
    offs[6] = vec2(-1.0, +1.0); offs[7] = vec2(+0.0, +1.0); offs[8] = vec2(+1.0, +1.0);
    offs[3] = vec2(-1.0, +0.0); offs[4] = vec2(+0.0, +0.0); offs[5] = vec2(+1.0, +0.0);
    offs[0] = vec2(-1.0, -1.0); offs[1] = vec2(+0.0, -1.0); offs[2] = vec2(+1.0, -1.0);

    for(int i = 0; i < 9; i++) {
        vec2 uvOffset = offs[i] * prStepSize;
        vec2 sampleUv = clamp(vUv + uvOffset, 0.0, 1.0);

        vec3 prNorm = texture2D(uNormBuff, sampleUv).xyz;
        vec3 prPos  = texture2D(uPosBuff, sampleUv).xyz;

        vec3 t = hrPos - prPos;
        float dist2 = dot(t,t);
        float c_w = min(exp(-(dist2)/p_phi), 1.0);
        
        t = hrNorm - prNorm;
        dist2 = max(dot(t,t), 0.0);
        float n_w = min(exp(-(dist2)/n_phi), 1.0);

        if(c_w + n_w > bestFit) {
            bestFit = c_w + n_w;
            bestFitUvs = sampleUv;
        }
    }



    vec3 color = texture2D(uTexture, bestFitUvs).xyz;
    color *= pow(2.0, exposure);
    vec3 mapped = acesFilm(color);

    // // gamma correction
    // mapped = pow(mapped, 1.0 / 2.2);




    // float exposure = 0.1;
    // vec3 mapped = color;
    // mapped *= pow(2.0, exposure);

    // // -- filmic correction
    // mapped *= 0.6;
    // mapped = ((mapped * mapped) * 2.51 + mapped * 0.03) / (mapped * mapped * 2.43 + mapped * 0.59 + 0.14);

    // -- gamma correction + clamp
    mapped = pow(mapped, vec3(1.0 / 2.2));
    mapped = clamp(mapped, 0.0, 1.0);




    gl_FragColor = vec4(mapped, 1.0);
}
`;

export { display_fs, display_vs };