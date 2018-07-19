var BRDF_Lambert_RTOW = `
vec3 normal = normalAt(hitPoint, prim);
float vecsum = (hitPoint.y + hitPoint.x + hitPoint.z);
 
vec3 randpt = vec3(0, 1, 0);
float index = 1.0;
for(int i = 0; i < 100; i++) {
    float x = rand2((uRand * 23.546  + index) * (float(bounces) + uTime * 325.2135 + 250.0 * vecsum + gl_FragCoord.x + gl_FragCoord.y) * 0.1);
    float y = rand2((uRand * 8.72356 + index) * (float(bounces) + uTime * 125.0275 + 250.0 * vecsum + gl_FragCoord.x + gl_FragCoord.y) * 0.1);
    float z = rand2((uRand * 0.51293 + index) * (float(bounces) + uTime * 995.9346 + 250.0 * vecsum + gl_FragCoord.x + gl_FragCoord.y) * 0.1);
    //float s = rand2(uRand * 42.49   * (float(bounces) + uTime * 238.2485 + 250.0 * vecsum + gl_FragCoord.x + gl_FragCoord.y) * 0.1); 
    
    x = x * 2.0 - 1.0; 
    y = y * 2.0 - 1.0; 
    z = z * 2.0 - 1.0; 
    if(dot(vec3(x, y, z), vec3(x, y, z)) <= 1.0) {
        randpt = vec3(x, y, z);
        break;
    }  

 
    index += 1.0;   
}

vec3 hitplus = hitPoint + normal + randpt;

ray.o = hitPoint;
ray.d = normalize(hitplus - hitPoint);
return ray;
`;