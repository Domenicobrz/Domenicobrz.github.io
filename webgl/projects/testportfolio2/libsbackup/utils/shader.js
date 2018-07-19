//In order for the script to work, you need to declare the gl variable globally
function getShader(vshad_str, fshad_str) {
    var vs = shader(vshad_str, 'vert');
    var fs = shader(fshad_str, 'frag');

	var Program = gl.createProgram();
    
    gl.attachShader(Program, vs);
    gl.attachShader(Program, fs);
    gl.linkProgram(Program);


    if (!gl.getProgramParameter(Program, gl.LINK_STATUS)) {
        alert("Could not initialise shaders");
        return null;
    }

    return Program;
}

function shader(str, type) {
    
    var shader;
    if (type == "frag") {
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    } else if (type == "vert") {
        shader = gl.createShader(gl.VERTEX_SHADER);
    } else {
        return null;
    }

    gl.shaderSource(shader, str);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader) + "  " + type);
        return null;
    }
    
    return shader;
}


function getTFShader(shader_str, type) {
   
    var shader = null;
    if(type == 'vert') shader = gl.createShader(gl.VERTEX_SHADER);
    else               shader = gl.createShader(gl.FRAGMENT_SHADER);        
    
    gl.shaderSource(shader, shader_str);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader) + "  " + type);
        return null;
    }

    return shader;
}