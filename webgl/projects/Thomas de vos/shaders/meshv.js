var shader_meshv = `
attribute vec4 aPosition;
attribute vec4 aColor;

uniform mat4 uPerspective;
uniform mat4 uModel;
uniform mat4 uView;

varying vec4 Color;


` + shaderpart_rand + `
` + shaderpart_colors + `


void main() {
    gl_Position  = uPerspective * uView * uModel * vec4(aPosition.xy, -10.0, 1.0); 

    // float t = rand(vec2(aPosition.w, aPosition.w));
    // float t2 = rand(vec2(aPosition.w, aPosition.w * aPosition.w));
    float t2 = mod(aPosition.w, 2.0);

    vec3  mixedColor  = mix(Color1, Color2, t2);

    float animOpacity = min(aPosition.z, 1.0);
    // float mainOpacity = sin(aPosition.w * 35465.47) * 0.5 + 0.5;
    float mainOpacity = rand(vec2(float(int(aPosition.w) / 3)    ));


    // aColor.x  ->  vertex color opacity 


    Color = vec4(mixedColor, (mainOpacity * 0.4 + 0.2) * animOpacity * aColor.x );
}`;