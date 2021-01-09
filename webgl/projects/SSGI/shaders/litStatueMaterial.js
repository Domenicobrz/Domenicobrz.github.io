let litStatueMaterial_vs = `

varying vec3 vFragPos;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vFragPos = (modelMatrix * vec4(position, 1.0)).xyz;
}
`;

let litStatueMaterial_fs = `

uniform vec3  uEmissive;
uniform vec3  uAlbedo;
uniform float uRoughness;
uniform float uStep;
uniform float uTime;

varying vec3 vFragPos;

// one out, three in
float rand(vec3 p3)
{
    p3  = fract(p3 * .1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
}

//  3 out, 3 in...
vec3 hash33(vec3 p3)
{
	p3 = fract(p3 * vec3(.1031, .1030, .0973));
    p3 += dot(p3, p3.yxz+33.33);
    return fract((p3.xxy + p3.yxx)*p3.zyx);

}

float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

float noise(vec3 p){
    vec3 a = floor(p);
    vec3 d = p - a;
    d = d * d * (3.0 - 2.0 * d);

    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
    vec4 k1 = perm(b.xyxy);
    vec4 k2 = perm(k1.xyxy + b.zzww);

    vec4 c = k2 + a.zzzz;
    vec4 k3 = perm(c);
    vec4 k4 = perm(c + 1.0);

    vec4 o1 = fract(k3 * (1.0 / 41.0));
    vec4 o2 = fract(k4 * (1.0 / 41.0));

    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

    return o4.y * d.y + o4.x * (1.0 - d.y);
}

void main() {

    if(uStep < 0.5) {
        // compute emissive mat
        vec3 emissive = vec3(0.0);

        float rand = noise(vFragPos * 1.35 + uTime * 0.1);
        float t = pow(sin(vFragPos.x * 7.0 + vFragPos.y * 0.3 + rand * 20.2) * 0.5 + 0.5, 120.0);

        emissive = vec3(t) * vec3(1.0, 0.5, 1.0) * 10.0;

        gl_FragColor = vec4(emissive, 1.0);
    } else if (uStep > 0.5 && uStep < 1.5) {
        // compute albedo mat
        gl_FragColor = vec4(uAlbedo, 1.0);
    } else if (uStep > 1.5) {
        // compute material mat
        gl_FragColor = vec4(uRoughness, 0.0, 0.0, 1.0);
    }
}
`;

export { litStatueMaterial_fs, litStatueMaterial_vs };