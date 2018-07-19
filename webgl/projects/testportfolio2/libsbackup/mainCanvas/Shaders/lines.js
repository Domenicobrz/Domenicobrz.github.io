var icolinesv = `#version 300 es
layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 2) in vec4 v0displaced;
layout(location = 3) in vec4 v1displaced;
layout(location = 4) in vec4 v0musicDisplaced;
layout(location = 5) in vec4 v1musicDisplaced;
layout(location = 6) in vec4 mouseVelocity;
layout(location = 7) in vec4 fx;
layout(location = 8) in vec4 color;

uniform mat4 projection;
uniform mat4 model;
uniform mat4 view;  

out vec4 Color;


` + shaderPart_maxDistance + `


` + shaderPart_general + `
` + shaderPart_hash3 + `
` + shaderPart_rotMatrix + `



vec4 rotateVertex(float distancev0v1, float maxDistance) {
    float isTheRightVertex = fx.x;

    vec4 v0subv1 = v0musicDisplaced - v1musicDisplaced;
    vec4 v0midv1 = (v0musicDisplaced + v1musicDisplaced) / 2.0;


    float angularRotation = fx.y;

     
    vec4 centered = (v0subv1) * 0.5;
    centered = rotationMatrix(normalize(hash3(v0.xy + v1.xy * 0.376 + angularRotation * 0.000000001)), angularRotation) * centered;
    centered *= 1.0 / (distancev0v1 / maxDistance);
    centered += v0midv1;

    return centered;
}


void main() {	
    vec4 finalPos = v0musicDisplaced;	



    float globalLineAlpha = 0.15 + length(mouseVelocity.xy) * 0.001;



    Color.xyz = color.xyz;
    Color.a   = fx.w * 0.5 * globalLineAlpha;

    float saveTheAttributes = mouseVelocity.x + v0displaced.x + v1displaced.x;


    float distancev0v1 = length(v0musicDisplaced.xyz - v1musicDisplaced.xyz);

    // animate line shatter
    if(distancev0v1 > maxDistance) {
        finalPos = rotateVertex(distancev0v1, maxDistance);
        Color.a   = fx.w * 0.65 * globalLineAlpha;
    } else {
        finalPos = rotateVertex(distancev0v1, distancev0v1);        
    }

    gl_Position = projection * view * model * vec4(finalPos.xyz, 1.0);
}`;

var icolinesf = `#version 300 es
precision mediump float;

in vec4 Color;

out vec4 FragColor;

void main() {
	FragColor = Color;
}`;

