//In order for the script to work, you need to declare the gl variable
//globally

function getShader(vshad_id, fshad_id, from_server)
{
    var vs;
    var fs;
    if(from_server) {
    //vshad_id is the fullpath to shader
	   vs = retrieveShader(vshad_id, "vertex");
	   fs = retrieveShader(fshad_id, "fragment");
    } else {
    //vshad_id is the id to the base shader
        vs = shader(vshad_id);
        fs = shader(fshad_id);
    }

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


function retrieveShader(id, type)
{
    //implementa con l'XMLHTTP AJAX REQUEST
    //prendi il file direttamente dal server e
    //displaya un loader su schermo che mostra
    //i progressi 
}


//implementalo come fanno in learningWEBGL
function shader(id)
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
            shader = gl.createShader(gl.FRAGMENT_SHADER);
        } else if (shaderScript.type == "vert") {
            shader = gl.createShader(gl.VERTEX_SHADER);
        } else {
            return null;
        }

        gl.shaderSource(shader, str);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            alert(gl.getShaderInfoLog(shader) + "  " + id);
            return null;
        }

        return shader;
}