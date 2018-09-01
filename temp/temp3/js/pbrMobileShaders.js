function mobilePBRmaterial(params) {

    var useMap = params.map !== undefined ? true : false;

    var defines =
    `
    #define MEDIUMP_PRECISION
    // #define ROUGHNESS_METALLIC_MAP
    `;

    if (useMap)
        defines += "\n #define USE_MAP";



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

    uniform float uMetallic;
    uniform float uRoughness;
    uniform float uMetallicMapOffs;
    uniform float uRoughnessMapOffs;
    uniform sampler2D uMetallicMap;
    uniform sampler2D uRoughnessMap;

    uniform float envMapIntensity;
    // uniform float ao;

    uniform samplerCube irradianceMap;
    uniform samplerCube spec1;
    uniform samplerCube spec2;
    uniform sampler2D map;
    uniform sampler2D brdfLUT;


    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vWorldPos;

    ` + defines + `



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
        return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(1.0 - cosTheta, 5.0);  // era 5.0
    } 



    vec3 getPrefilteredColor(vec3 R, float roughness) {
        const float MAX_REFLECTION_LOD = 5.0;
        const float switchOffset1 = 0.3;
        const float switchOffset2 = 0.6;

        if (roughness < switchOffset1) {
            return textureCube(spec1, R, roughness * MAX_REFLECTION_LOD - 0.5).rgb;
        } else if (roughness < switchOffset2) {
            return  mix(textureCube(spec1, R, roughness * MAX_REFLECTION_LOD).rgb, 
                        textureCube(spec2, R, (roughness - switchOffset2) * MAX_REFLECTION_LOD).rgb,
                        (roughness - switchOffset1) / (switchOffset2 - switchOffset1)
                    );
        } else {
            return textureCube(spec2, R, (roughness - switchOffset2) * MAX_REFLECTION_LOD).rgb;
        }
    }



    void main() {

        #ifdef USE_MAP
            vec3 albedoColor = texture2D(map, vUv).rgb;
            // GAMMA CORRECTION
            albedoColor      = pow(albedoColor, vec3(2.2)); 
            // GAMMA CORRECTION
        #else
            vec3 albedoColor = albedo;     
        #endif


        #ifdef ROUGHNESS_METALLIC_MAP
            float roughness  = texture2D(uRoughnessMap, vUv).r + uRoughnessMapOffs;
            float metallic   = texture2D(uMetallicMap, vUv).r  + uMetallicMapOffs;
        #else 
            float roughness  = uRoughness;
            float metallic   = uMetallic;
        #endif

        vec3 debugColor  = vec3(0.0);

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

        vec3 prefilteredColor = getPrefilteredColor(R, roughness);  
        // GAMMA CORRECTION
        prefilteredColor      = pow(prefilteredColor, vec3(2.2)); 
        // GAMMA CORRECTION
        vec2 envBRDF  = texture2D(brdfLUT, vec2(max(dot(N, V), 0.0), roughness)).rg;
        vec3 specular = prefilteredColor * (F * envBRDF.x + envBRDF.y);


        #ifdef MEDIUMP_PRECISION
            if (roughness > 0.99975) {
                // specular = vec3(0.0);
            }
        #endif

        vec3 ambient = (kD * diffuse + specular) * envMapIntensity;               // * ao; 



        vec3 color = ambient + Lo;

        // HDR tonemapping
        color = color / (color + vec3(1.0));
        // gamma correct
        color = pow(color, vec3(1.0/2.2)); 


        gl_FragColor = vec4(color, 1.0);
        // gl_FragColor = vec4((kD * diffuse ) * envMapIntensity, 1.0);
    }`;


    var pbrMUniforms = {
        // time: { value: 1.0 },
        albedo: { type: "3f", value: [0,0,0] },
        uRoughness: { value: 0.0 },
        uMetallic: { value: 0.0 },
        uRoughnessMap: { type: "t", value: null },
        uMetallicMapOffs: { value: 1.0 },
        uRoughnessMapOffs: { value: 1.0 },
        uMetallicMap: { type: "t", value: null },
        envMapIntensity: { value: 1.0 },
        irradianceMap: { type: "t", value: null },
        spec1: { type: "t", value: null },
        spec2: { type: "t", value: null },
        map: { type: "t", value: null },
        brdfLUT: { type: "t", value: null },
        // texture: { value: new THREE.TextureLoader().load( 'textures/disturb.jpg' ) }
    };


    var material = new THREE.ShaderMaterial({
        vertexShader: pbrMVshader,
        fragmentShader: pbrMFshader,
        uniforms: pbrMUniforms,
    });

    if (params.map)
        material.uniforms.map.value = params.map;
    if (params.color)
        material.uniforms.albedo.value = params.color;

    material.uniforms.brdfLUT.value = (new THREE.TextureLoader()).load( 'assets/envmaps/brdf_lut_5.png' );
    material.uniforms.envMapIntensity.value = params.envMapIntensity;
    material.uniforms.uRoughness.value = params.roughness;
    material.uniforms.uMetallic.value  = params.metallic;



    return material;
}