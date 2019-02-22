


let compositeVertexShader = `
varying vec2 vUv;

void main() {
    gl_Position = vec4(position, 1.0);
    
    vUv = uv;
}`;

let compositeFragmentShader = `
uniform sampler2D texture;
uniform sampler2D planesTexture;
uniform float     time;

varying vec2 vUv;


const float PI = 3.14159265359;

float rand(vec2 c){
	return fract(sin(dot(c.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

float noise(vec2 p, float freq ){
	float unit = ` + innerWidth + `.0 / freq;
	vec2 ij = floor(p/unit);
	vec2 xy = mod(p,unit)/unit;
	//xy = 3.*xy*xy-2.*xy*xy*xy;
	xy = .5*(1.-cos(PI*xy));
	float a = rand((ij+vec2(0.,0.)));
	float b = rand((ij+vec2(1.,0.)));
	float c = rand((ij+vec2(0.,1.)));
	float d = rand((ij+vec2(1.,1.)));
	float x1 = mix(a, b, xy.x);
	float x2 = mix(c, d, xy.x);
	return mix(x1, x2, xy.y);
}

float pNoise(vec2 p, int res){
	float persistance = .5;
	float n = 0.;
	float normK = 0.;
	float f = 4.;
	float amp = 1.;
	int iCount = 0;
	for (int i = 0; i<50; i++){
		n+=amp*noise(p, f);
		f*=2.;
		normK+=amp;
		amp*=persistance;
		if (iCount == res) break;
		iCount++;
	}
	float nf = n/normK;
	return nf*nf*nf*nf;
}


void main() {
    
    vec2 uv = vUv;
    


	vec3 planesBuffer = texture2D(planesTexture, uv).rgb;
	float strenght = (1.0 - planesBuffer.r);
	// this line will make the noise distortion stronger when we get closer to the left edge of the screen
	strenght *= max((1.0 - uv.x) * 1.5 - 0.25, 0.0);
    vec2 offset = vec2( pNoise(vec2(uv.x * 2135.0 + time + sin(time * 20.0), uv.y * 722.0), 10),
                        pNoise(vec2(uv.x * 12355.0 + time + cos(time * 23.0), uv.y * 2346.0), 10)
                      );
    uv += offset * 0.1 * strenght;

    

	vec3 col = texture2D(texture, uv).rgb;
	


	if(length(col) < 1.0) 
		col.rgb = mix(col.rgb, vec3(col.r, col.g * 0.5, col.b * 0.5) * 6.0 * (0.05 + length(offset)),   strenght);


    gl_FragColor = vec4(col, 1.0); 
    // gl_FragColor = vec4(planesBuffer, 1.0); 
}`;
