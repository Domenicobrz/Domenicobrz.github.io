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




























function getShaderCustomContext(vshad_id, fshad_id, from_server, ctx)
{
    var vs;
    var fs;
    
    vs = shaderCustomContext(vshad_id, ctx);
    fs = shaderCustomContext(fshad_id, ctx);
    

    var Program = ctx.createProgram();
    
    ctx.attachShader(Program, vs);
    ctx.attachShader(Program, fs);
    ctx.linkProgram(Program);


    if (!ctx.getProgramParameter(Program, ctx.LINK_STATUS)) 
    {
        alert("Could not initialise shaders");
        return null;
    }

    return Program;
}

function shaderCustomContext(id, ctx)
{
    var shaderScript = document.getElementById(id);
        if (!shaderScript) {
            return null;
        }

        var str = "";
        var k = shaderScript.firstChild;
        while (k) {
            if (k.nodeType == 3) {
                str += k.textContent;
            }
            k = k.nextSibling;
        }

        var shader;
        if (shaderScript.type == "frag") {
            shader = ctx.createShader(ctx.FRAGMENT_SHADER);
        } else if (shaderScript.type == "vert") {
            shader = ctx.createShader(ctx.VERTEX_SHADER);
        } else {
            return null;
        }

        ctx.shaderSource(shader, str);
        ctx.compileShader(shader);

        if (!ctx.getShaderParameter(shader, ctx.COMPILE_STATUS)) {
            alert(ctx.getShaderInfoLog(shader) + "  " + id);
            return null;
        }

        return shader;
}










// creates a shader Program directly from source with the given context
function createProgramFromSource(vertexSource, fragmentSource, ctx) {
    var vs = createShaderFromSource(vertexSource,   "vert", ctx);
    var fs = createShaderFromSource(fragmentSource, "frag", ctx);
    
    var Program = ctx.createProgram();
    
    ctx.attachShader(Program, vs);
    ctx.attachShader(Program, fs);
    ctx.linkProgram(Program);


    if (!ctx.getProgramParameter(Program, ctx.LINK_STATUS)) 
    {
        alert("Could not initialise shaders");
        return null;
    }

    return Program;
}

function createShaderFromSource(source, type, ctx) {
        var shader;
        if (type == "frag") {
            shader = ctx.createShader(ctx.FRAGMENT_SHADER);
        } else if (type == "vert") {
            shader = ctx.createShader(ctx.VERTEX_SHADER);
        } else {
            return null;
        }
        ctx.shaderSource(shader, source);
        ctx.compileShader(shader);

        if (!ctx.getShaderParameter(shader, ctx.COMPILE_STATUS)) {
            alert(ctx.getShaderInfoLog(shader) + "  " + type);
            return null;
        }

        return shader;
}


















// creates a shader Program directly from source with the given context
function createProgramFromSource(vertexSource, fragmentSource) {
    var vs = createShaderFromSource(vertexSource,   "vert");
    var fs = createShaderFromSource(fragmentSource, "frag");
    
    var Program = gl.createProgram();
    
    gl.attachShader(Program, vs);
    gl.attachShader(Program, fs);
    gl.linkProgram(Program);


    if (!gl.getProgramParameter(Program, gl.LINK_STATUS)) 
    {
        alert("Could not initialise shaders");
        return null;
    }

    return Program;
}

function createShaderFromSource(source, type) {
        var shader;
        if (type == "frag") {
            shader = gl.createShader(gl.FRAGMENT_SHADER);
        } else if (type == "vert") {
            shader = gl.createShader(gl.VERTEX_SHADER);
        } else {
            return null;
        }
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            alert(gl.getShaderInfoLog(shader) + "  " + type);
            return null;
        }

        return shader;
}