var shaderPart_maxDistance = `
    const float maxDistance = 4.0;
`;

var shaderPart_colors = `
    #define RED;
`;

var shaderPart_screenRatio = `
    const float screenRatio = ` + (innerWidth / innerHeight) +  `;
    const float canvasHeight = ` + innerHeight +  `.0;
`;

var shaderPart_FOV = `
    const int FOV = ` + (45 * Math.PI / 180) + `;
`;

var shaderPart_tan225 = `
    const float tan225 = 0.4142135623730950488016887242097;
`;

var shaderPart_cameraZ = `
    const float cameraZ = 45.0;
`;

var shaderPart_sphereRadius = `
    const float sphereRadius = 10.0;
    const float halfSphereRadius = 5.0;
    const float sphereCircleLength = 62.83185307179586476925286766559; // sphereRadius * 2 * PI;
`;

var shaderPart_mouseConstants = `
const float   powerStrenght   = 0.02;
const float   reboundStrenght = 0.975;
`;



/** COLORS -  original */
// var shaderPart_colors_TFlineAttractor = `
//     vec4(redComp * colorMult * 1.5, 0.1 * colorMult, 0.1 * colorMult * 2.0, 0);
// `;
// var shaderPart_colors_TFlineShatter = `
//     vec4(0, 0, 1, 0);
// `;
// var shaderPart_colors_offpointsCol1 = `
//     vec3(0.9, 0.6, 0.3);
// `;
// var shaderPart_colors_offpointsCol2 = `
//     vec3(1.0, 0.2, 0.2);
// `;
// var shaderPart_pointsMouseSpeedColor = `
//     Color.xyz = vec3(1,   max(1.0 - mouseSpeed, 0.1),   max(1.0 - mouseSpeed, 0.1));
// `;






/** COLORS - random */
// var shaderPart_colors_TFlineAttractor = "" +
// "    vec4(" + rnd() + ", " + rnd() + ", " + rnd() + ", 0) * colorMult;";

// var shaderPart_colors_TFlineShatter = "" +
// "    vec4(" + rnd() + ", " + rnd() + ", " + rnd() + ", 0);";

// var shaderPart_colors_offpointsCol1 = "" +
// "    vec3(" + rnd() + ", " + rnd() + ", " + rnd() + ");";

// var shaderPart_colors_offpointsCol2 = "" +
// "    vec3(" + rnd() + ", " + rnd() + ", " + rnd() + ");";

// var shaderPart_pointsMouseSpeedColor = "" +
// "    Color.xyz = mix(vec3(" + rnd() + ", " + rnd() + ", " + rnd() + "), vec3(" + rnd() + ", " + rnd() + ", " + rnd() + "), max(1.0 - mouseSpeed * 2.0, 0.0));";




/* WITHEISH */
var shaderPart_colors_TFlineAttractor = '    vec4(0.38914890463251887, 0.3817349169527625274, 0.38217114972887741, 0) * colorMult;';
var shaderPart_colors_TFlineShatter = '    vec4(0.983629832789459, 0.3219759252018275, 0.3940256881549994, 0);';           
var shaderPart_colors_offpointsCol1 = '    vec3(0.5376075549191675, 0.9749653113259806, 0.9577071140151332);';            
var shaderPart_colors_offpointsCol2 = '    vec3(0.49472422263778955, 0.35799897323872586, 0.22805524678906958);';            
var shaderPart_pointsMouseSpeedColor = '    Color.xyz = mix(vec3(0.7726033988519405, 0.7861298760738663, 0.49679731181152237), vec3(0.4486490118661614, 0.449526516430272487, 0.448020577528358366), max(1.0 - mouseSpeed * 2.0, 0.0));';
// var shaderPart_pointsOutsideSpeedColor = '    Color.xyz = mix(vec3(0.9726033988519405, 0.0861298760738663, 0.09679731181152237), vec3(0.4486490118661614, 0.029526516430272487, 0.048020577528358366), max(1.0 - mouseSpeed * 2.0, 0.0));';





function getColors() {
    var str = `
            var shaderPart_colors_TFlineAttractor = '` + shaderPart_colors_TFlineAttractor + `';
            var shaderPart_colors_TFlineShatter = '` + shaderPart_colors_TFlineShatter + `';
            var shaderPart_colors_offpointsCol1 = '` + shaderPart_colors_offpointsCol1 + `';
            var shaderPart_colors_offpointsCol2 = '` + shaderPart_colors_offpointsCol2 + `';
            var shaderPart_pointsMouseSpeedColor = '` + shaderPart_pointsMouseSpeedColor + `';
        `;

    something = window.open("data:text/json," + encodeURIComponent(JSON.stringify({str: str})),
                       "_blank");
    something.focus();
}