let quadv = `
attribute vec3 position1;
attribute vec3 position2;
attribute vec3 uv1;
attribute vec3 uv2;
attribute vec3 color;
attribute vec4 aSeeds;

uniform sampler2D uTexture;
uniform sampler2D uNormalMap;
uniform sampler2D uBokehTexture;

uniform float uRandom;
uniform vec4  uRandomVec4;
uniform float uFocalDepth;
uniform float uBokehStrength;
uniform float uMinimumLineSize;
uniform float uFocalPowerFunction;
uniform float uTime;
uniform float uDistanceAttenuation;

varying vec3 vColor;


//  the function below is hash12 from https://www.shadertoy.com/view/4djSRW - I just renamed it nrand()
//  sin based random functions wont work
float nrand(vec2 p)
{
	vec3 p3  = fract(vec3(p.xyx) * .1031);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.x + p3.y) * p3.z);
}

float n1rand( vec2 n )
{
	float t = fract( uTime );
	float nrnd0 = nrand( n + 0.7*t );
	return nrnd0;
}


void main() {

    // Uncomment these and comment the ones below and have fun with the result you'll get
    // float o1 = n1rand( vec2(uRandom + aSeeds.x, uRandomVec4.x) );
    // float o2 = n1rand( vec2(uRandom + aSeeds.x, uRandomVec4.x) );
    // float o3 = n1rand( vec2(uRandom + aSeeds.x, uRandomVec4.x) );
    // float o4 = n1rand( vec2(uRandom + aSeeds.x, uRandomVec4.x) );
    // float o5 = n1rand( vec2(uRandom + aSeeds.x, uRandomVec4.w) );

    float o1 = n1rand( vec2(uRandom + aSeeds.x, uRandomVec4.x) );
    float o2 = n1rand( vec2(uRandom + aSeeds.y, uRandomVec4.y) );
    float o3 = n1rand( vec2(uRandom + aSeeds.z, uRandomVec4.z) );
    float o4 = n1rand( vec2(uRandom + aSeeds.w, uRandomVec4.w) );
    float o5 = n1rand( vec2(uRandom + aSeeds.w, uRandomVec4.w) );






    float uu = fract(o1 + uRandomVec4.x + aSeeds.z); 
    float vv = fract(o2 + uRandomVec4.y + aSeeds.w);
    vec3 positiont = position + uu * (position1 - position) + vv * (position2 - position);
    vec3 viewSpacePositionT = (modelViewMatrix * vec4(positiont, 1.0)).xyz;

    // ******** texture coordinates calculation
    float ud = uv2.x - uv1.x;
    float vd = uv2.y - uv1.y;
    float ut = uv1.x + fract(o1 + uRandomVec4.x + aSeeds.z) * ud; 
    float vt = uv1.y + fract(o2 + uRandomVec4.y + aSeeds.w) * vd;
    // ******** texture coordinates calculation - END

    vColor = color * (texture2D(uTexture, vec2(ut, vt)).rgb);
    vColor = pow(vColor, vec3(2.0));






	float distanceFromFocalPoint = abs(viewSpacePositionT.z - (-uFocalDepth));
	if(uFocalPowerFunction > 0.5) {
		distanceFromFocalPoint = pow(distanceFromFocalPoint, 1.5);
	}


    float bokehStrength = distanceFromFocalPoint * uBokehStrength;
	bokehStrength = max(bokehStrength, 0.0);  //uMinimumLineSize);








    

    #if USE_BOKEH_TEXTURE 
        vec4 randNumbers = vec4( o2, o3, o4, o5 );
        float ux = randNumbers.x;
        float uy = randNumbers.y;

        float x  = (ux * 2.0 - 1.0) * bokehStrength;
        float y  = (uy * 2.0 - 1.0) * bokehStrength;

        float bokehVal = texture2D(uBokehTexture, vec2(ux, uy)).x;
        viewSpacePositionT += vec3(x, y, 0.0);
        vColor *= bokehVal;
    #else
        // if we're not using a bokeh texture we'll randomly displace points
        // in a sphere

        vec4 randNumbers = vec4( o2, o3, o4, o5 );

        float lambda = randNumbers.x;
        float u      = randNumbers.y * 2.0 - 1.0;
        float phi    = randNumbers.z * 6.28;
        float R      = bokehStrength;

        float x = R * pow(lambda, 0.33333) * sqrt(1.0 - u * u) * cos(phi);
        float y = R * pow(lambda, 0.33333) * sqrt(1.0 - u * u) * sin(phi);
        float z = R * pow(lambda, 0.33333) * u;

        viewSpacePositionT += vec3(x, y, z); 
    #endif













	// two different functions for color attenuation if you need it

	vColor = vec3(
		vColor.r * exp(-distanceFromFocalPoint * uDistanceAttenuation * 0.5),
		vColor.g * exp(-distanceFromFocalPoint * uDistanceAttenuation * 0.5),
		vColor.b * exp(-distanceFromFocalPoint * uDistanceAttenuation * 0.5)	
	);

	// vColor = vec3(
	// 	vColor.r / (1.0 + pow(distanceFromFocalPoint * 0.05, 2.71828)),
	// 	vColor.g / (1.0 + pow(distanceFromFocalPoint * 0.05, 2.71828)),
	// 	vColor.b / (1.0 + pow(distanceFromFocalPoint * 0.05, 2.71828))	
	// );


    vec4 projectedPosition = projectionMatrix * vec4(viewSpacePositionT, 1.0);
    gl_Position = projectedPosition;

    gl_PointSize = 1.0;
}`;

let quadf = `

varying vec3 vColor;

void main() {
    gl_FragColor = vec4(vColor, 1.0);
}`;