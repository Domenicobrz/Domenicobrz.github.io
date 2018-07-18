var shader_pointv = `
attribute vec4 aPosition;

uniform mat4 uPerspective;
uniform mat4 uModel;
uniform mat4 uView;

uniform float uPointSize;

varying vec4 Color;

` + shaderpart_colors + `


uniform float uMaxSize;      // = (3.0 / 1366.0) * ` + screen.width + `.0; 
uniform float uMaxSize2;     // = (7.0 / 1366.0) * ` + screen.width + `.0; 


void main() {

    gl_Position  = uPerspective * uView * uModel * vec4(aPosition.xyz, 1.0); 
    

    // pointSize will grow depending on the x position
    // inverse NDC position - we're mapping x values to   1...0   from right to left
    float idncp = 1.0 - ((gl_Position.x / gl_Position.w) * 0.5 + 0.5);
    gl_PointSize = max(idncp * uMaxSize2, uMaxSize) * uPointSize;



    float gradientMix = ((gl_Position.x / gl_Position.w) * 0.5 + 0.5) * 4.0 - 1.5;
    vec3  mixedColor  = mix(Color1, Color2, 1.0 - clamp(gradientMix, 0.0, 1.0));

    Color = vec4(mixedColor * 1.2, 0.6);
}`;