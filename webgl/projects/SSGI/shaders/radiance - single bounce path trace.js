function makeSceneShaders(tot_triangles) {
    
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
    uniform vec4 uScene[${tot_triangles * 3}];

    uniform vec3  uCameraPos;
    uniform vec3  uCameraTarget;
    uniform float uAspectRatio;
    uniform float uRadMult;
    uniform float uTime;
    uniform float uMirrorIndex;
    uniform vec4  uRandom;

    uniform sampler2D uPositionBuffer;
    uniform sampler2D uNormalBuffer;
    uniform sampler2D uMaterialBuffer;

    varying vec2 vUv;
    varying mat4 vProjViewModelMatrix;

    struct intersectionResult 
    {
        vec3 n;
        float t;
        bool hit;
        float meshIndex;
    };

    struct bufferData {
        vec3 position;
        vec3 normal;
    };

    #define PI 3.14159265359

    bool rayTriangleIntersect(vec3 O, vec3 D, vec3 A, vec3 B, vec3 C, inout float t, inout vec3 normal) {
        // Ray-triangle isect:
        vec3 E1=B-A; vec3 E2=C-A;

        vec3 N=cross(E1,E2);
        normal = normalize(N);

        float det = -dot(D,N);
        vec3 AO = O - A;
        vec3 DAO = cross(AO,D);

        float u =  dot(E2,DAO)/det;
        float v = -dot(E1,DAO)/det;
        t       =  dot(AO,N)/det;

        return (
            t > 0.0 && u > 0.0 && v > 0.0 && (u+v) < 1.0
        );
    }

    intersectionResult scene(vec3 ro, vec3 rd) {
        vec3 normal = vec3(0.0);
        float mint = 9999999999.0;
        bool hit = false;
        float meshIndex = 0.0;

        // for(int i = 0; i < 2; i++) {
        for(int i = 0; i < ${tot_triangles}; i++) {
            vec3 v0 = uScene[i*3 + 0].xyz;
            vec3 v1 = uScene[i*3 + 1].xyz;
            vec3 v2 = uScene[i*3 + 2].xyz;
        
            vec3 n = vec3(0.0);
            float t = 999999999.0;

            if(rayTriangleIntersect(ro, rd, v0, v1, v2, t, n)) {
                if(t < mint) {
                    mint = t;
                    hit = true;
                    normal = n;
                    meshIndex = uScene[i*3 + 0].w;
                }
            }
        }

        if(dot(normal, rd) > 0.0) {
            normal = -normal;
        }

        return intersectionResult( normal, mint, hit, meshIndex );
    }

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

    // bufferData bufferDataAtP(vec3 p, vec3 viewDir) {
    //     vec4 projP = vProjViewModelMatrix * vec4(p, 1.0);
    //     vec2 pNdc = (projP / projP.w).xy;
    //     vec2 pUv  = pNdc * 0.5 + 0.5;
    //     vec3 positionAtPointP = texture2D(uPositionBuffer, pUv).xyz;
    //     if(positionAtPointP == vec3(0.0)) positionAtPointP = uCameraPos + viewDir * 9999999.0; 
    //     vec3 normalAtPointP   = texture2D(uPositionBuffer, pUv).xyz;
    //     if(dot(normalAtPointP, viewDir) > 0.0) normalAtPointP = -normalAtPointP;

    //     return bufferData(positionAtPointP, normalAtPointP);
    // }

    vec3 positionBufferAtP(vec3 p, vec3 viewDir) {
        vec4 projP = vProjViewModelMatrix * vec4(p, 1.0);
        vec2 pNdc = (projP / projP.w).xy;
        vec2 pUv  = pNdc * 0.5 + 0.5;
        vec3 positionAtPointP = texture2D(uPositionBuffer, pUv).xyz;
        if(positionAtPointP == vec3(0.0)) positionAtPointP = uCameraPos + viewDir * 9999999.0; 

        return positionAtPointP;
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


        vec3 posBuff  = texture2D(uPositionBuffer, vUv).xyz;
        vec3 normBuff = texture2D(uNormalBuffer, vUv).xyz;
        vec3 matBuff  = texture2D(uMaterialBuffer, vUv).xyz;
        if(dot(viewDir, normBuff) > 0.0) normBuff = -normBuff;

        // why posBuff minus rd ?
        // remember: the wall's front-faces are culled!
        // so the first position that you "see" in the positionBuffer,
        // is already far into the scene!
        ro = posBuff - rd * 0.01;

        if(posBuff == vec3(0.0)) {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
            return;
        }

        if(matBuff.x > 14.5) {
            gl_FragColor = vec4(1.0, 6.0, 1.0, 1.0);
            return;   
        }
        if(matBuff.x > 13.5) {
            gl_FragColor = vec4(6.0, 1.0, 1.0, 1.0);
            return;   
        }












        // ************ try screen-space intersection, if we can find something output red ************
            // **** quality params
                float step = 0.05;
                float stepMult = 1.25;
                const int steps = 20;
                const int binarySteps = 5;
            // **** quality params - END

        float maxIntersectionDepthDistance = 0.5;
        ro = posBuff;
        rd = sampleDiffuseHemisphere(normBuff, ro);
        vec3 mult = vec3(1.0) * max(dot(rd, normBuff), 0.0);
        vec3 p = ro;

        for(int i = 0; i < steps; i++) {
            vec3 initialP = p;
            // jittered step increase, can probably use a much better solution
            p += rd * (step * 0.75 + rand(p) * 0.25);
            step *= stepMult;

            vec4 projP = vProjViewModelMatrix * vec4(p, 1.0);
            vec2 pNdc = (projP / projP.w).xy;
            vec2 pUv  = pNdc * 0.5 + 0.5;
            vec3 positionAtPointP = texture2D(uPositionBuffer, pUv).xyz;
            if(positionAtPointP == vec3(0.0)) positionAtPointP = uCameraPos + viewDir * 9999999.0; 
            vec3 normalAtPointP   = texture2D(uPositionBuffer, pUv).xyz;
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
                float lastRecordedPosBuffThatIntersected;
                for(int j = 0; j < binarySteps; j++) {
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
                    // get normal & material at p2
                    vec4 projP2 = vProjViewModelMatrix * vec4(p2, 1.0);
                    vec2 p2Uv = (projP2 / projP2.w).xy * 0.5 + 0.5;
                    vec4 imaterial = texture2D(uMaterialBuffer, p2Uv);
                    vec3 inormal   = texture2D(uNormalBuffer, p2Uv).xyz;
                    if(dot(inormal, viewDir) > 0.0) inormal = -inormal;

                    if(imaterial.x > 14.5) {
                        radiance += vec3(1.0, 6.0, 1.0) * mult;
                    } else if (imaterial.x > 13.5) {
                        radiance += vec3(6.0, 1.0, 1.0) * mult;
                    }

                    gl_FragColor = vec4(radiance, 1.0);
                    return;
                } else {
                    // intersection is invalid
                    // gl_FragColor = vec4(0.0, 1.0, 0.5, 1.0);
                    // return;
                }

                break;
            }
        }

        gl_FragColor = vec4(radiance * uRadMult, 1.0);
        return;
        // ************ try screen-space intersection, if we can find something output red ************
















        // vec3 mult = vec3(1.0);
        // for(int i = 0; i < 4; i++) {
        //     intersectionResult ir = scene(ro, rd);

        //     if(ir.hit) {
        //         vec3 albedo = vec3(1.0);

        //         ro = ro + rd * (ir.t - 0.001);

        //         float cos;

        //         // if(ir.meshIndex > 2.7 && ir.meshIndex < 3.2) {
        //         if(ir.meshIndex > uMirrorIndex - 0.2 && ir.meshIndex < uMirrorIndex + 0.2) {
        //             rd = sampleGlossyHemisphere(ir.n, ro, rd);
        //             albedo = vec3(1.0, 1.0, 1.0);
        //             cos = 1.0;
        //         } else {
        //             rd = sampleDiffuseHemisphere(ir.n, ro);
        //             cos = dot(rd, ir.n);
        //         }

        //         if(ir.meshIndex > 14.0) {
        //             // radiance += vec3(6.0, 5.5, 4.5) * mult;
        //             radiance += vec3(6.0) * mult;
        //         }
        //         if(ir.meshIndex == 1.0) {
        //             // albedo = vec3(1.0, 0.3, 0.15);
        //             // albedo = vec3(1.0, 0.3, 0.15);
        //             albedo = vec3(1.0, 0.15, 0.05);
        //         }
        //         if(ir.meshIndex == 2.0) {
        //             // albedo = vec3(0.15, 1.0, 0.3);
        //             // albedo = vec3(0.6, 1.0, 0.15);
        //             albedo = vec3(0.3, 1.0, 0.08);
        //         }


        //         mult *= albedo;
        //         // sometimes the dot is negative (no idea why) so we need to make sure and guard this operation with max(...)
        //         mult *= max(cos, 0.0);
        //     } 
        // }

        // gl_FragColor = vec4(radiance * uRadMult, 1.0);
    }
    `;
}

export { makeSceneShaders };