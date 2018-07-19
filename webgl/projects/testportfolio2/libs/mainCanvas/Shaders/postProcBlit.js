var postProcBlitv = `#version 300 es
layout(location = 0) in vec2  pos;
layout(location = 1) in vec2  coord;
layout(location = 2) in float id;

out vec2  Coord;
out float ID;

void main() {		
    gl_Position = vec4(pos.xy, 0.0, 1.0);		
    Coord = coord;		
    ID    = id;
}`;

var postProcBlitf = `#version 300 es
precision highp float;

in vec2  Coord;
in float ID;

uniform sampler2D uImage;
uniform float uTime;
uniform float uMouseSpeed;

out vec4 FragColor;


/* CONSTANTS */
` + shaderPart_general + `


/* FUNCTIONS */
` + shaderPart_atan2 + `


void main() {				

    vec2 blurVector = Coord - vec2(0.5);
    float distance = length(blurVector);


    vec2 NDCCoord = Coord * 2.0 - 1.0;

    float angle = atan2(NDCCoord.y, NDCCoord.x);
    float angleMultiplier = pow(sin(angle * 6.0 + uTime * 6.0) * .5 + .7, 2.0) * 4.67 * distance;
    // if(distance < 0.4) angleMultiplier *= distance / 0.4 * 0.5;
    



    vec4 col1 = texture(uImage, Coord + 0.00135 * uMouseSpeed * angleMultiplier);
    vec4 col2 = texture(uImage, Coord - 0.00135 * uMouseSpeed * angleMultiplier);
    vec4 col = texture(uImage, Coord);
    col.x = col1.x;
    col.y = col2.y;
    
    
    vec4 blurcol;
    float activeDistance = max(0.25 - uMouseSpeed * 0.05, 0.15);



    if(distance > activeDistance) {

        float redistance = (distance - activeDistance) * 0.175 * uMouseSpeed;

        vec4 sample1 = texture(uImage, Coord + blurVector * 0.025 * redistance);
        vec4 sample2 = texture(uImage, Coord + blurVector * 0.05 * redistance);
        vec4 sample3 = texture(uImage, Coord + blurVector * 0.1 * redistance);
        vec4 sample4 = texture(uImage, Coord + blurVector * 0.125 * redistance);
        vec4 sample5 = texture(uImage, Coord + blurVector * 0.15 * redistance);
        vec4 sample6 = texture(uImage, Coord + blurVector * 0.2 * redistance);
        vec4 sample7 = texture(uImage, Coord + blurVector * 0.225 * redistance);
        vec4 sample8 = texture(uImage, Coord + blurVector * 0.25 * redistance);

        blurcol = sample1 + sample2 + sample3 + sample4 + sample5 + sample6 + sample7 + sample8;
        blurcol *= 0.125;
        col = mix(blurcol, col, 0.5);
    } 

    // float blackness = 1.0 - distance / 0.5;
    // FragColor.xyz = col.xyz * 0.6 + col.xyz * blackness * 0.4;
    // FragColor.a = 1.0;



    FragColor = col;
    // FragColor = vec4(1.0 - col.xyz, 1.0);
}`;