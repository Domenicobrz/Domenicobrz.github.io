/**
 * 
 * Uses pointf  as the fragment shader
 * 
 */

var shader_meshpointv = `
attribute vec4 aPosition;

uniform mat4 uPerspective;
uniform mat4 uModel;
uniform mat4 uView;

varying vec4 Color;

` + shaderpart_colors + `


uniform float uMaxSize;      // = (3.0 / 1366.0) * ` + screen.width + `.0; 


void main() {

    gl_Position  = uPerspective * uView * uModel * vec4(aPosition.xyz, 1.0); 
    
    gl_PointSize = uMaxSize;

    Color = vec4(Color1, aPosition.w);
}`;