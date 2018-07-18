function getLineVertexShader() {


var shader_linev = `
attribute vec4 aId;
// attribute vec4 aFx;

uniform sampler2D uPointsData;

uniform mat4 uPerspective;
uniform mat4 uModel;
uniform mat4 uView;

uniform float uColorGradientDistance;


varying vec4 Color;


uniform float uNumPoints;
uniform float uHwwtsss;     // hww * streamstart_s
uniform float uHwhtsst;     // hwh * streamstart_t
` + shaderpart_colors + `

void main() {


    // float attributeBug = aFx.x; 

    /**
     * 
     * v0.xy  -  world position
     * v0.z   -  meshVertexId
     * 
     */
    vec4 v0 = texture2D(uPointsData, vec2(aId.x / uNumPoints + 0.5 / uNumPoints, 0.5));
    vec4 v1 = texture2D(uPointsData, vec2(aId.y / uNumPoints + 0.5 / uNumPoints, 0.5));


    vec2 startPos = vec2( uHwwtsss, uHwhtsst);

    // dsf1 = distance From start of first vertex
    float dfs1 = length(v0.xy - startPos) + 1.0;
    float dfs2 = length(v1.xy - startPos) + 1.0;
    
    // old - used before connecting only the 4 closest points
    // float maxDistance = min(max(dfs1, dfs2) * 0.085, 0.7); 
    float maxDistance = min(max(dfs1, dfs2) * 0.045 + 0.3, 0.7); 
    




    /*  discard fragment check  */
    
    float distance = length(v0.xy - v1.xy);
    if(distance > maxDistance) v0 = vec4(0.0, 0.0, 0.0, 0.0);
    
    /*  discard fragment check  - end */





    gl_Position  = uPerspective * uView * uModel * vec4(v0.xy, -10.0, 1.0); 

    float gradientMix = (gl_Position.x / gl_Position.w) * 0.5 + 0.5;
    gradientMix = max(gradientMix - 0.2, 0.0);
    float delta       = gradientMix <= 0.5 ? pow(gradientMix, uColorGradientDistance) : pow(gradientMix, 1.0 / uColorGradientDistance);
    vec3  mixedColor  = mix(Color1, Color2, clamp(delta, 0.0, 1.0));





    float opacity = clamp((maxDistance - distance) / (maxDistance / 3.0), 0.0, 1.0); 
    // same for both vertex of the line, since their Id is summed
    float opacityFromIds = fract(sin((aId.x + aId.y) * 35447.57)) * 0.65 + 0.35;
    
    
    // avoids self intersections from points of a mesh
    float opacityFromSelfIntersection = max(v0.z, v1.z);

    Color = vec4(mixedColor, opacity * opacityFromIds * opacityFromSelfIntersection);


    if(aId.w > 0.9) Color.a *= 0.4;



    // if(distance < maxDistance) Color = vec4(0.0, 1.0, 0.0, 1.0);
    // if(aFx.w > 7.0) Color = vec4(1.0, 1.0, 1.0, 0.1);
}`;

    return shader_linev;
}