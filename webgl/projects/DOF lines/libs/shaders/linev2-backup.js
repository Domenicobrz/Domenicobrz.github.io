let linev = `

attribute vec3 position1;
attribute vec3 position2;
attribute float vindex;

uniform vec2 resolution;
uniform float bokehStrengh;
uniform float cameraFocalDistance;

varying vec2  vUv;
varying float vRadius;
varying float vW;

void main() {
    float aspectRatio = resolution.x / resolution.y;


    vec4 projectedPosition1 = projectionMatrix * modelViewMatrix * vec4(position1, 1.0);
    projectedPosition1.xyz /= projectedPosition1.w;
    projectedPosition1.x *= aspectRatio;

    vec4 projectedPosition2 = projectionMatrix * modelViewMatrix * vec4(position2, 1.0);
    projectedPosition2.xyz /= projectedPosition2.w;
    projectedPosition2.x *= aspectRatio;
    
    vec2 lineDirection = normalize(projectedPosition2.xy - projectedPosition1.xy);
    vec2 lineNormal = normalize(vec2(lineDirection.y, -lineDirection.x));
    // vec2 lineNormal = normalize(vec2(0.0, 1.0));





    vec3 projectedPosition = vec3(0.0, 0.0, 0.0);
    float radius1 = abs((modelViewMatrix * vec4(position1, 1.0)).z + cameraFocalDistance) * bokehStrengh;
    float radius2 = abs((modelViewMatrix * vec4(position2, 1.0)).z + cameraFocalDistance) * bokehStrengh;

    radius1 = max(radius1, 0.004);
    radius2 = max(radius2, 0.004);



    if(vindex > 2.5) {
        projectedPosition.xy = projectedPosition2.xy - lineNormal * radius2 + lineDirection * radius2;        
        projectedPosition.z = projectedPosition2.z;

        vW = radius2;               //1.0 / projectedPosition2.w;
        vUv = vec2(1.0, 0.0);
        vRadius = radius2;
    } else if (vindex > 1.5) {
        projectedPosition.xy = projectedPosition2.xy + lineNormal * radius2 + lineDirection * radius2;        
        projectedPosition.z = projectedPosition2.z;

        vW = radius2;               //1.0 / projectedPosition2.w;
        vUv = vec2(1.0, 1.0);
        vRadius = radius2;
    } else if (vindex > 0.5) {
        projectedPosition.xy = projectedPosition1.xy + lineNormal * radius1 - lineDirection * radius1;
        projectedPosition.z = projectedPosition1.z;

        vW = radius1;               //1.0 / projectedPosition1.w;
        vUv = vec2(0.0, 1.0);
        vRadius = radius1;
    } else {
        // negative normal displacement, position 1.
        projectedPosition.xy = projectedPosition1.xy - lineNormal * radius1 - lineDirection * radius1;
        projectedPosition.z = projectedPosition1.z;

        vW = radius1;               //1.0 / projectedPosition1.w;
        vUv = vec2(0.0, 0.0);
        vRadius = radius1;
    }

    // restore ndc aspect ratio
    projectedPosition.x /= aspectRatio;

    vUv.xy *= vW;

	gl_Position = vec4(projectedPosition.xyz, 1.0);
}`;

let linef = `

varying vec2  vUv;
varying float vRadius;
varying float vW;

void main() {

    vec2 uv = vUv / vW;



    float alpha = (1.0 - (abs(uv.y - 0.5) * 2.0));

    if(uv.x < 0.15) {

        vec2 vd = vec2(0.15, 0.5) - vec2(uv.x, uv.y);
        vd.x *= (0.5 / 0.15);

        float posRad = 1.0 - max(      length( vd ) * 2.0,     0.0 );

        alpha = posRad;
    } else if (uv.x > 0.85) {
        
        vec2 vd = vec2(0.85, 0.5) - vec2(uv.x, uv.y);
        vd.x *= (0.5 / 0.15);
        float posRad = 1.0 - max(      length( vd ) * 2.0,     0.0 );

        alpha = posRad;
    }

    alpha *= exp(-vRadius * 50.0);

    gl_FragColor = vec4(vec3(1.0), alpha);
}`;