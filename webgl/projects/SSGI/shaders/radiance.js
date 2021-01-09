function makeSceneShaders() {

    window.radiance_vs = `
    varying vec2 vUv;
    varying mat4 vProjViewModelMatrix;

    void main() {
        gl_Position = vec4(position, 1.0);

        vProjViewModelMatrix = projectionMatrix * modelViewMatrix;

        vUv = uv;
    }
    `;

    window.radiance_fs = `
    uniform vec3  uCameraPos;
    uniform vec3  uCameraTarget;
    uniform float uAspectRatio;
    uniform float uRadMult;
    uniform float uTotSamples;
    uniform float uCurrSample;
    uniform float uLowHistorySamples;
    uniform float uTime;
    uniform float uFrame;
    uniform vec4  uRandom;

    uniform float uSSRQuality;
    uniform float uSSRSteps;
    uniform float uSSRBinarySteps;
    uniform float uSSRBounces;
    uniform float uSSRJitter;
    uniform float uSSRStepMult;
    uniform float uSSRStartingStep;
    uniform float uMaxIntersectionDepthDistance;


    uniform sampler2D uMaterialBuffer;
    uniform sampler2D uAlbedoBuffer;
    uniform sampler2D uPositionBuffer;
    uniform sampler2D uNormalBuffer;
    uniform sampler2D uEmissionBuffer;
    uniform sampler2D uHistoryBuffer;

    varying vec2 vUv;
    varying mat4 vProjViewModelMatrix;

    #define PI 3.14159265359


    // one out, three in
    float rand(vec3 p3)
    {
    	p3  = fract(p3 * .1031);
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.x + p3.y) * p3.z);
    }

    // //  3 out, 3 in...
    // vec3 hash33(vec3 p3)
    // {
    // 	p3 = fract(p3 * vec3(.1031, .1030, .0973));
    //     p3 += dot(p3, p3.yxz+33.33);
    //     return fract((p3.xxy + p3.yxx)*p3.zyx);

    // }

    vec3 sampleDiffuseHemisphere(vec3 normal, vec3 pos) {
        float theta = 2.0 * PI * rand(pos * 100.0 + uRandom.x * 127.0);
        float phi = acos(2.0 * rand(pos * 100.0 + uRandom.y * 127.0) - 1.0);
       
        vec3 unitSphereSample = vec3(
            cos(theta) * sin(phi),
            sin(theta) * sin(phi),
            cos(phi)
        );

        vec3 np = pos + normal + unitSphereSample;
        return normalize(np - pos);
    }

    vec3 sampleGlossyHemisphere(vec3 normal, vec3 pos, vec3 dir) {
        vec3 wout = reflect(dir, normal);

        float theta = 2.0 * PI * rand(pos * 100.0 + uRandom.x * 127.0);
        float phi = acos(2.0 * rand(pos * 100.0 + uRandom.y * 127.0) - 1.0);

        vec3 unitSphereSample = vec3(
            cos(theta) * sin(phi),
            sin(theta) * sin(phi),
            cos(phi)
        );

        vec3 np = pos + wout + unitSphereSample * 0.001;
        return normalize(np - pos);
    }

    vec3 positionBufferAtP(vec3 p, vec3 viewDir) {
        vec4 projP = vProjViewModelMatrix * vec4(p, 1.0);
        vec2 pNdc = (projP / projP.w).xy;
        vec2 pUv  = pNdc * 0.5 + 0.5;
        vec3 positionAtPointP = texture2D(uPositionBuffer, pUv).xyz;
        if(positionAtPointP == vec3(0.0)) positionAtPointP = uCameraPos + viewDir * 9999999.0;

        return positionAtPointP;
    }

    float distSquared( vec3 A, vec3 B ) {
        vec3 C = A - B;
        return dot( C, C );
    }

    void main() {
        vec3 radiance = vec3(0.0);
        vec2 ndcuv = (vUv * 2.0 - 1.0) * vec2(uAspectRatio, 1.0);

        // "height normalizer"
        // sapendo che la FOV è e.g. 45°, allora voglio fare in modo che per ogni
        // spostamento di un'unità verso la z, vado "in alto" di tan(45°/2)
        // per fare in modo che i raggi del raytracer siano in linea con l'immagine
        // che c'è su schermo
        float hn = tan(/* IN RADIANTI, NON IN GRADI! */ (PI * 45.0 * 0.5) / 180.0);
        ndcuv *= hn;


        vec3 ro = uCameraPos;

        vec3 w = normalize(uCameraTarget - uCameraPos);
        vec3 u = normalize(cross(w, vec3(0.0, 1.0, 0.0)));
        vec3 v = normalize(cross(u, w));

        vec3 d = normalize(vec3(ndcuv, 1.0));
        vec3 nd = normalize( u * d.x + v * d.y + w * d.z );

        vec3 rd = nd;
        vec3 viewDir = rd;


        vec3 matBuff      = texture2D(uMaterialBuffer, vUv).xyz;
        vec3 albedoBuff   = texture2D(uAlbedoBuffer, vUv).xyz;
        vec3 posBuff      = texture2D(uPositionBuffer, vUv).xyz;
        vec3 normBuff     = texture2D(uNormalBuffer, vUv).xyz;
        vec3 emissionBuff = texture2D(uEmissionBuffer, vUv).xyz;
        vec3 historyBuff  = texture2D(uHistoryBuffer, vUv).xyz;
        if(dot(rd, normBuff) > 0.0) normBuff = -normBuff;


        float radMult = 1.0 / uTotSamples;

        if(uLowHistorySamples > 0.5) {
            radMult = 1.0 / (uTotSamples);

            if(historyBuff.x > 3.0) {
                radMult = 1.0 / (uTotSamples - uLowHistorySamples);

                if(uCurrSample > uTotSamples - uLowHistorySamples) {
                    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
                    return;
                }
            }
        }


        // why posBuff minus rd ?
        // remember: the wall's front-faces are culled!
        // so the first position that you "see" in the positionBuffer,
        // is already far into the scene!
        ro = posBuff - rd * 0.01;

        if(posBuff == vec3(0.0)) {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
            return;
        }

        if(length(emissionBuff) > 0.0) {
            gl_FragColor = vec4(emissionBuff, 1.0) * radMult;
            return;
        }






       






        // ************ try screen-space intersection, if we can find something output red ************
            // **** quality params


                // desperate quality
                float startingStep = 0.1;
                float stepMult = 1.375;
                int steps = 12;
                int binarySteps = 5;
                int bounces = 2;
                float jitt_a = 0.65;
                float jitt_b = 0.35;
                float jitter = 0.0;

                const int maxBounces     = 3;
                const int maxSteps       = 50;
                const int maxBinarySteps = 6;

                // lower quality
                if(uSSRQuality > 0.5) {
                    startingStep = 0.1;
                    stepMult = 1.265;
                    steps = 15;
                    binarySteps = 5;
                    bounces = 3;
                }

                // low quality
                if(uSSRQuality > 1.5) {
                    startingStep = 0.15;
                    stepMult = 1.15;
                    steps = 20;
                    binarySteps = 5;
                    bounces = 3;
                }

                // medium quality
                if(uSSRQuality > 2.5) {
                    startingStep = 0.05;
                    stepMult = 1.165;
                    steps = 30;
                    binarySteps = 5;
                    bounces = 3;
                }

                // high quality
                if(uSSRQuality > 3.5) {
                    startingStep = 0.05;
                    stepMult = 1.12;
                    steps = 40;
                    binarySteps = 6;
                    bounces = 3;
                }

                // custom quality
                if(uSSRQuality > 4.5) {
                    startingStep = uSSRStartingStep;
                    stepMult = uSSRStepMult;
                    steps = int(uSSRSteps);
                    binarySteps = int(uSSRBinarySteps);
                    bounces = int(uSSRBounces);
                    jitter = uSSRJitter;
                }
            // **** quality params - END


        vec3 mult = vec3(1.0);
        ro = posBuff;
        if(matBuff.x > 0.9) {   // if roughness > 0.9
            rd = sampleDiffuseHemisphere(normBuff, ro);
        } else {
            rd = sampleGlossyHemisphere(normBuff, ro, rd);
        }
        mult *= albedoBuff * max(dot(rd, normBuff), 0.0);

        for(int b = 0; b < maxBounces; b++) {
            vec3 p = ro;
            float step = startingStep;
            // maxIntersectionDepthDistance will be progressively multiplied by stepMultiplier as we go on with the raymarching
            float maxIntersectionDepthDistance = uMaxIntersectionDepthDistance; //0.5;

            if(b >= bounces) break;

            for(int i = 0; i < maxSteps; i++) {

                if(i >= steps) break;

                vec3 initialP = p;
                // jittered step increase, can probably use a much better solution
                // p += rd * (step * jitt_a + step * jitt_b); //rand(p) * 0.25);
                float jj_a = rand(p) * jitter + (1.0 - jitter);
                float jj_b = 1.0 - jj_a;
                p += rd * (step * jj_a);
                step *= stepMult;
                maxIntersectionDepthDistance *= stepMult;

                vec4 projP = vProjViewModelMatrix * vec4(p, 1.0);
                vec2 pNdc = (projP / projP.w).xy;
                vec2 pUv  = pNdc * 0.5 + 0.5;
                vec3 positionAtPointP = texture2D(uPositionBuffer, pUv).xyz;
                if(positionAtPointP == vec3(0.0)) positionAtPointP = uCameraPos + viewDir * 9999999.0;
                float distanceFromCameraAtP = length(p - uCameraPos);

                // we need to be careful about rays that go "behind" the camera, if they go far enough
                // they may be treated as intersections!! (also notice how I'm using "w" instead of "viewDir")
                // this issue will eventually be entirely resolved by using depthBuffers
                if(dot(normalize(p - uCameraPos), w) < 0.0) {
                    break;
                }
                // out of screen bounds condition
                if(pUv.x < 0.0 || pUv.x > 1.0 || pUv.y < 0.0 || pUv.y > 1.0) {
                    break;
                }

                float distanceFromCameraAtPosBuff = length(positionAtPointP - uCameraPos);
                if(distanceFromCameraAtP > distanceFromCameraAtPosBuff) {

                    // intersection found!

                    // ******** binary search start *********
                    vec3 p1 = initialP;
                    vec3 p2 = p;
                    float lastRecordedPosBuffThatIntersected = distanceFromCameraAtPosBuff;
                    for(int j = 0; j < maxBinarySteps; j++) {
                        
                        if(j >= binarySteps) break;
                        
                        vec3 mid = (p1 + p2) * 0.5;
                        vec3 posAtMid = positionBufferAtP(mid, viewDir);
                        float distanceFromCameraAtMid     = length(mid - uCameraPos);
                        float distanceFromCameraAtPosBuff = length(posAtMid - uCameraPos);

                        if(distanceFromCameraAtMid > distanceFromCameraAtPosBuff) {
                            p2 = (p1 + p2) * 0.5;

                            // we need to save this value inside this if otherwise if it was outside and above this
                            // if statement, it would be possible that it's value would be very large (e.g. if p1 intersected the "background"
                            // since in that case positionBufferAtP() returns viewDir * 99999999.0)
                            // and if that value is very large, it can create artifacts when evaluating this condition:
                            // ---> if(abs(distanceFromCameraAtP2 - lastRecordedPosBuffThatIntersected) < maxIntersectionDepthDistance)
                            // to be honest though, these artifacts only appear for largerish values of maxIntersectionDepthDistance

                            lastRecordedPosBuffThatIntersected = distanceFromCameraAtPosBuff;
                        } else {
                            p1 = (p1 + p2) * 0.5;
                        }
                    }
                    // ******** binary search end   *********


                    // use p2 as the intersection point
                    float distanceFromCameraAtP2 = length(p2 - uCameraPos);
                    if(abs(distanceFromCameraAtP2 - lastRecordedPosBuffThatIntersected) < maxIntersectionDepthDistance) {
                        // intersection validated
                        // get normal & emission at p2
                        vec4 projP2 = vProjViewModelMatrix * vec4(p2, 1.0);
                        vec2 p2Uv = (projP2 / projP2.w).xy * 0.5 + 0.5;
                        vec4 iemission = texture2D(uEmissionBuffer, p2Uv);
                        vec3 inormal   = texture2D(uNormalBuffer, p2Uv).xyz;
                        vec3 ialbedo   = texture2D(uAlbedoBuffer, p2Uv).xyz;
                        if(dot(inormal, rd) > 0.0) inormal = -inormal;

                        radiance += iemission.xyz * mult;

                        ro = p1;
                        rd = sampleDiffuseHemisphere(inormal, ro);
                        ro = ro + rd * 0.95;
                        mult *= ialbedo * max(dot(rd, inormal), 0.0);

                    } else {
                        // intersection is invalid
                        // gl_FragColor = vec4(0.0, 1.0, 0.5, 1.0);
                        // return;
                        continue;
                    }

                    break;
                }

                p += rd * (step * jj_b);
            }
        }

        gl_FragColor = vec4(radiance * radMult, 1.0);
        return;
        // ************ try screen-space intersection, if we can find something output red ************
    }
    `;
}

export { makeSceneShaders };