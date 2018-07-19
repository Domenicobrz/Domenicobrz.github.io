var shaderPart_general = `
#define PI 3.1415926535897932384626433832795
#define RS 0.4142135623730950488016887242097
`;

var shaderPart_simpleRand = `
float rand(vec2 c){
	return fract(sin(dot(c.xy ,vec2(12.9898,78.233))) * 43758.5453);
}`;

var shaderPart_perlinNoise = `
float rand(vec2 c){
	return fract(sin(dot(c.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

float noise(vec2 p, float freq ){
	float unit = ` + 1 + `.0 / freq;
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
}`;


var shaderPart_classicPerlinNoise = `
//	Classic Perlin 2D Noise 
//	by Stefan Gustavson
//
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec2 P){
  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
  Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x,gy.x);
  vec2 g10 = vec2(gx.y,gy.y);
  vec2 g01 = vec2(gx.z,gy.z);
  vec2 g11 = vec2(gx.w,gy.w);
  vec4 norm = 1.79284291400159 - 0.85373472095314 * 
    vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 *= norm.x;
  g01 *= norm.y;
  g10 *= norm.z;
  g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}`;


var shaderPart_hash3 = `
vec3 hash3( vec2 p ){
    vec3 q = vec3( dot(p,vec2(127.1,311.7)), 
				   dot(p,vec2(269.5,183.3)), 
				   dot(p,vec2(419.2,371.9)) );
	return fract(sin(q)*43758.5453);
}`; 


var shaderPart_atan2 = `
float atan2(in float y, in float x)
{
    bool s = (abs(x) > abs(y));
    return mix(PI/2.0 - atan(x,y), atan(y,x), s);
}`;

var shaderPart_rotMatrix = `
mat4 rotationMatrix(vec3 axis, float angle)
{
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}`;


var shaderPart_sphericalDistance = `
float sphericalDistance(vec3 p0, vec3 p1)
{
	// 2*PI  *r   for a circle    
	// angle *r   for an arc

	float angle = acos(dot(p0, p1));
	return angle * sphereRadius;
}`;


var shaderPart_attractVertex = `
vec4 attractVertex(vec4 attractor, vec4 vertex, out float distanceFromAttractor)
{
	 vec3 normAttr = normalize(attractor.xyz);
	 vec3 normVert = normalize(vertex.xyz);

     float angle = acos(dot(normAttr, normVert));

     float sphereDist = sphericalDistance(normAttr, normVert);
	 distanceFromAttractor = sphereDist;

	 /**
	  *  **Lower** values for compressionStrenght will make compression stronger
	  *  Should be moved to the CPU
	  */
	 float compressionStrenght = clamp(pow(cnoise(vec2(uTime * 0.1, 45.0)) * 0.5 + 0.5, 2.0) * 7.0, 0.2, 7.0);
	 float attractorPower = pow(clamp(1.0 - sphereDist / (sphereCircleLength * 0.5), 0.0, 1.0),   compressionStrenght);
	 
	 vec3 rotAxis = cross(normAttr, normVert);

     return rotationMatrix(normalize(rotAxis), angle * attractorPower) * vertex;
}`;


var shaderPart_offsetVertexMouse = `
void offsetVertexMouseVelocity(vec4 vertex, int whichVertex, float powerMult) {
    float z = abs(vertex.z - uCameraZ);
    float hwh = z * tan225;
    float hww = z * tan225 * uScreenRatio;

    vec4 worldSpaceMouseOrigin = vec4(0.0);

    // uMouseOrigin is in NDC   -1...1
    worldSpaceMouseOrigin.x = hww * uMouseOrigin.x;
    worldSpaceMouseOrigin.y = hwh * uMouseOrigin.y;
    worldSpaceMouseOrigin.z = -z;

    vec3 fakevertex = vertex.xyz;
    fakevertex.z -= uCameraZ;

    float distance = length(fakevertex - worldSpaceMouseOrigin.xyz);


    /**
     * 
     *  Points have a stronger powerStrenght ------------------ v
     *                                                          v
     */
    float power = powerStrenght / (pow(distance, 3.0) + 1.0) * powerMult;
    

    // mouse velocities are different for both vertices
    // v0 will have a different mouseVelocity than v1, and we'll store both of them in   xy & zw of mouseVelocity
    if(whichVertex == 0) {
        tfMouseVelocity.xy += uMouseVelocity.xy * power;
    } else {
        tfMouseVelocity.zw += uMouseVelocity.xy * power;
    }
}`;


var shaderPart_offsetVertexMusic = `
vec4 offsetVertexMusic(vec4 vertex, vec4 startVertex) {
	
	// at this point tfMouseVelocity is already defined by offsetVertexMouseVelocity();
	// so we can just increment it with the incrementor += operator

    float coord_s = 1.0 - abs(atan2(startVertex.y, startVertex.x) / PI);
	float value = texture(uMusicVisualizerData, vec2(coord_s                 * 0.7, 0.5)).x;

    value = ((value == 0.0 ? -140.0 : value) + 140.0) * 0.075; 
    value = max(value, 0.0);

    float mult  = 0.0;    
    vec3 displace = normalize(vertex.xyz) * value;

    mult = clamp(1.0 - abs(vertex.z) / 5.0, 0.0, 1.0);
    mult *= clamp((vertex.y + sphereRadius) * 0.2, 0.0, 1.0);

    vertex.xyz += displace * mult;

    return vertex;
}`;


var shaderPart_applyVelocityToVertex = `
void applyVelocityToVertex(inout vec4 vertex, int whichVertex) {
	if(whichVertex == 0) {
        vertex.xy += tfMouseVelocity.xy;
    } else {  
        vertex.xy += tfMouseVelocity.zw;
    }
}`;
