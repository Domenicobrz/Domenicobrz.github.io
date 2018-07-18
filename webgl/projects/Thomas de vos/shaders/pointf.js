function getPointf() {

var shader_pointf = `
` + getShaderPrecision() + `


varying vec4 Color;

void main() {

    vec4 finalColor = Color;


    float distance = length(gl_PointCoord - vec2(0.5, 0.5));
    float alpha    = 1.0;
    if(distance > 0.4) alpha = 1.0 - (distance - 0.4) / 0.1; 
    if(distance > 0.5) discard;		
    
    finalColor.a *= alpha;

    

    gl_FragColor = finalColor; 
}`;

    return shader_pointf;

}