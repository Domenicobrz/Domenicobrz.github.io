var pbrMVshader = `
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorldPos;

void main()
{
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_Position = projectionMatrix * mvPosition;
    vNormal = (modelMatrix * vec4(normal.xyz, 0.0)).xyz;
    vWorldPos = (modelMatrix * vec4(position.xyz, 1.0)).xyz;
}
`;

var pbrMFshader = `
uniform vec3  albedo;
uniform float uMetallicOffs;
uniform float uRoughnessOffs;
uniform float envMapIntensity;
uniform sampler2D uMetallic;
uniform sampler2D uRoughness;
// uniform float ao;

uniform samplerCube irradianceMap;
uniform samplerCube spec1;
uniform sampler2D map;
uniform sampler2D brdfLUT;


varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorldPos;


#define MEDIUMP_PRECISION


const float PI = 3.14159265359;
float DistributionGGX(vec3 N, vec3 H, float roughness)
{
    float a = roughness*roughness;
    float a2 = a*a;
    float NdotH = max(dot(N, H), 0.0);
    float NdotH2 = NdotH*NdotH;

    float nom   = a2;
    float denom = (NdotH2 * (a2 - 1.0) + 1.0);
    denom = PI * denom * denom;

    #ifdef MEDIUMP_PRECISION
        nom = max(nom,   0.0002);
        denom = max(denom, 0.000075);
    #endif

    return nom / denom;
}
float GeometrySchlickGGX(float NdotV, float roughness)
{
    float r = (roughness + 1.0);
    float k = (r*r) / 8.0;

    float nom   = NdotV;
    float denom = NdotV * (1.0 - k) + k;

    return nom / denom;
}
float GeometrySmith(vec3 N, vec3 V, vec3 L, float roughness)
{
    float NdotV = max(dot(N, V), 0.0);
    float NdotL = max(dot(N, L), 0.0);
    float ggx2 = GeometrySchlickGGX(NdotV, roughness);
    float ggx1 = GeometrySchlickGGX(NdotL, roughness);

    return ggx1 * ggx2;
}
vec3 fresnelSchlick(float cosTheta, vec3 F0)
{
    return F0 + (1.0 - F0) * pow(1.0 - cosTheta, 5.0);
}
vec3 FresnelSchlickRoughness(float cosTheta, vec3 F0, float roughness)
{
    return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(1.0 - cosTheta, 5.0);
} 





void main() {

    vec3 albedoColor = texture2D(map, vUv).rgb; // vec3(1.0); // vec3(vNormal * 0.5 + 0.5);
    albedoColor = pow(albedoColor, vec3(2.2)); 
    float roughness  = texture2D(uRoughness, vUv).r  + uRoughnessOffs;
    float metallic   = texture2D(uMetallic, vUv).r   + uMetallicOffs;
    vec3 debugColor = vec3(0.0);

    vec3 F0 = vec3(0.04); 
    F0 = mix(F0, albedoColor, metallic);


    vec3 N = normalize(vNormal);
    vec3 V = normalize(cameraPosition - vWorldPos);
    vec3 R = reflect(-V, N); 


    vec3 LightPosition = vec3(10.0, 10.0, 10.0);
    vec3 LightColor = vec3(300.0);


    // ********************* Point Lights contribution
    vec3 Lo = vec3(0.0);
    // {
    //     // this should be a for loop over all possible point light sources
    //     // calculate per-light radiance
    //     vec3 L = normalize(LightPosition - vWorldPos);
    //     vec3 H = normalize(V + L);
    //     float distance = length(LightPosition - vWorldPos);
    //     float attenuation = 1.0 / (distance * distance);
    //     vec3 radiance = LightColor * attenuation;

    //     // Cook-Torrance BRDF
    //     float NDF = DistributionGGX(N, H, roughness);   
    //     float G   = GeometrySmith(N, V, L, roughness);    
    //     vec3  F   = fresnelSchlick(max(dot(H, V), 0.0), F0);        
    //     
    //     vec3 nominator    = NDF * G * F;
    //     float denominator = 4.0 * max(dot(N, V), 0.0) * max(dot(N, L), 0.0) + 0.001; // prevents divide by zero.
    //     vec3 specular = nominator / denominator;
    //     
    //     vec3 kS = F;
    //     vec3 kD = vec3(1.0) - kS;
    //     kD *= 1.0 - metallic;	                
 
    //     float NdotL = max(dot(N, L), 0.0);        
 
    //     Lo += (kD * albedoColor / PI + specular) * radiance * NdotL;
    // }
    // ********************* Point Lights contribution - END




    vec3 F = FresnelSchlickRoughness(max(dot(N, V), 0.0), F0, roughness);

    vec3 kS = F;
    vec3 kD = 1.0 - kS;
    kD *= 1.0 - metallic;	  
      
    vec3 irradiance = textureCube(irradianceMap, N).rgb;
    vec3 diffuse    = irradiance * albedoColor;
      
    const float MAX_REFLECTION_LOD = 4.0;
    vec3 prefilteredColor = textureCube(spec1, R, roughness * 4.0).rgb;          //, roughness * MAX_REFLECTION_LOD).rgb;   
    vec2 envBRDF  = texture2D(brdfLUT, vec2(max(dot(N, V), 0.0), roughness)).rg;
    vec3 specular = prefilteredColor * (F * envBRDF.x + envBRDF.y);
      
    vec3 ambient = (kD * diffuse + specular) * envMapIntensity;               // * ao; 



    vec3 color = ambient + Lo;

    // HDR tonemapping
    color = color / (color + vec3(1.0));
    // gamma correct
    color = pow(color, vec3(1.0/2.2)); 


    gl_FragColor = vec4(color, 1.0);
    // gl_FragColor = vec4(diffuse, 1.0);
}
`;


var pbrMUniforms = {
    // time: { value: 1.0 },
    // roughness: { value: 1.0 },
    // metallic: { value: 1.0 },
    uRoughness: { type: "t", value: null },
    uMetallicOffs: { value: 1.0 },
    uRoughnessOffs: { value: 1.0 },
    uMetallic: { type: "t", value: null },
    envMapIntensity: { value: 1.0 },
    irradianceMap: { type: "t", value: null },
    spec1: { type: "t", value: null },
    map: { type: "t", value: null },
    brdfLUT: { type: "t", value: null },
    // texture: { value: new THREE.TextureLoader().load( 'textures/disturb.jpg' ) }
};