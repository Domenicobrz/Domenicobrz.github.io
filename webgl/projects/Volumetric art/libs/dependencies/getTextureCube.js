import { gl } from "../main";

function getTextureCube(px_path, nx_path, py_path, ny_path, pz_path, nz_path, callback) {
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR_MIPMAP_LINEAR);

    var faces = [[px_path, gl.TEXTURE_CUBE_MAP_POSITIVE_X],
                 [nx_path, gl.TEXTURE_CUBE_MAP_NEGATIVE_X],
                 [py_path, gl.TEXTURE_CUBE_MAP_POSITIVE_Y],
                 [ny_path, gl.TEXTURE_CUBE_MAP_NEGATIVE_Y],
                 [pz_path, gl.TEXTURE_CUBE_MAP_POSITIVE_Z],
                 [nz_path, gl.TEXTURE_CUBE_MAP_NEGATIVE_Z]];

    var downloaded = 0;
    for (var i = 0; i < faces.length; i++) {
        var face = faces[i][1];
        var image = new Image();
        image.onload = function(texture, face, image) {
            return function() {
                gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
                gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
                gl.texImage2D(face, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
                downloaded++;

                if(downloaded === 6) {
                    gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
                    callback();
                    console.log("cubemap downloaded");
                }
            }
        } (texture, face, image);
        image.src = faces[i][0];
    }

    // yeah I know it's not onfinish but I wanted to keep things simple 
    return texture;
}

export { getTextureCube };