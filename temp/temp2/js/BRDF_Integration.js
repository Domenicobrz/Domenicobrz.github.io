window.addEventListener("load", init);


function GeometrySchlickGGX(/* float */ NdotV, /* float */ roughness) {
    /* float */ var a = roughness;
    /* float */ var k = (a * a) / 2.0;

    /* float */ var nom   = NdotV;
    /* float */ var denom = NdotV * (1.0 - k) + k;

    return nom / denom;
}
// ----------------------------------------------------------------------------
function GeometrySmith(/* vec3 */ N, /* vec3 */ V, /* vec3 */ L, /* float */ roughness) {
    /* float */ var NdotV = Math.max(dotvec3(N, V), 0.0);
    /* float */ var NdotL = Math.max(dotvec3(N, L), 0.0);
    /* float */ var ggx2 = GeometrySchlickGGX(NdotV, roughness);
    /* float */ var ggx1 = GeometrySchlickGGX(NdotL, roughness);

    return ggx1 * ggx2;
}

function ImportanceSampleGGX(/* vec2 */ Xi, /* vec3 */ N, /* float */ roughness) {
    /* float */ var a = roughness * roughness;
	
    /* float */ var phi = 2.0 * Math.PI * Xi.x;
    /* float */ var cosTheta = Math.sqrt((1.0 - Xi.y) / (1.0 + (a*a - 1.0) * Xi.y));
    /* float */ var sinTheta = Math.sqrt(1.0 - cosTheta*cosTheta);
	
    // from spherical coordinates to cartesian coordinates
    var H = new vec3(0,0,0);
    H.x = Math.cos(phi) * sinTheta;
    H.y = Math.sin(phi) * sinTheta;
    H.z = cosTheta;
	
    // from tangent-space vector to world-space sample vector
    /* vec3 */ var up        = Math.abs(N.z) < 0.999 ? new vec3(0.0, 0.0, 1.0) : new vec3(1.0, 0.0, 0.0);
    /* vec3 */ var tangent   = normalizevec3(crossvec3(up, N));
    /* vec3 */ var bitangent = crossvec3(N, tangent);
    
    /* vec3 */ sampleVec = new vec3(0,0,0);
    sampleVec.x = tangent.x * H.x + bitangent.x * H.y + N.x * H.z;
    sampleVec.y = tangent.y * H.x + bitangent.y * H.y + N.y * H.z;
    sampleVec.z = tangent.z * H.x + bitangent.z * H.y + N.z * H.z;

    return normalizevec3(sampleVec);
}

function VanDerCorpus(/* uint */ n, /* uint */ base) {
    /* float */ var invBase = 1 / base;
    /* float */ var denom   = 1;
    /* float */ var result  = 0;

    for(/* uint */ let i = 0; i < 32; ++i) {
        if(n > 0) {
            denom   = n % 2;
            result += denom * invBase;
            invBase = invBase / 2.0;
            n       = Math.floor(n / 2);
        }
    }

    return result;
}

function Hammersley(/* uint */ i, /* uint */ N) {
    return new vec2(/* float cast */ i / /* float cast */ N, VanDerCorpus(i, 2));
}


function IntegrateBRDF(/* float */ NdotV, /* float */ roughness) {
    var V = new vec3(0,0,0);
    V.x = Math.sqrt(1 - NdotV * NdotV);
    V.y = 0;
    V.z = NdotV;

    var A = 0.0;
    var B = 0.0;

    var N = new vec3(0,0,1);

    const SAMPLE_COUNT = 256; // 1024;
    for (let i = 0; i < SAMPLE_COUNT; i++) {
        /* vec2 */ let Xi = Hammersley(i, SAMPLE_COUNT);
        /* vec3 */ let H  = ImportanceSampleGGX(Xi, N, roughness);
        
        let VdotH = dotvec3(V, H);
        let s1H   = scalevec3(H, 2 * VdotH);
        /* vec3 */ let L = normalizevec3(subvec3(s1H, V));

        /* float */ let NdotL = Math.max(L.z, 0.0);
        /* float */ let NdotH = Math.max(H.z, 0.0);
        /* float */     VdotH = Math.max(dotvec3(V, H), 0.0);

        if(NdotL > 0.0) {
            /* float */ let G = GeometrySmith(N, V, L, roughness);
            /* float */ let G_Vis = (G * VdotH) / (NdotH * NdotV);
            /* float */ let Fc = Math.pow(1.0 - VdotH, 5.0);

            A += (1.0 - Fc) * G_Vis;
            B += Fc * G_Vis;
        }
    }

    A /= SAMPLE_COUNT;
    B /= SAMPLE_COUNT;

    return new vec2(A, B);
}




function init() {
    var size = 256;

    var canvas = document.createElement("canvas");
    canvas.width  = size;
    canvas.height = size;
    var ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);


    var biggestX = 0;
    var biggestY = 0;
    var smallestX = 999;
    var smallestY = 999;

    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            var u = i / size;
            var v = j / size;

            if ( i === 4 && j === 4 ) {
                var debug = 0;
            }

            /* vec2 */ var integratedBRDF = IntegrateBRDF(u, v);
            if (integratedBRDF.x > biggestX) biggestX = integratedBRDF.x;
            if (integratedBRDF.y > biggestY) biggestY = integratedBRDF.y;
            if (integratedBRDF.x < smallestX) smallestX = integratedBRDF.x;
            if (integratedBRDF.y < smallestY) smallestY = integratedBRDF.y;

            let r = Math.floor(integratedBRDF.x * 255);
            let g = Math.floor(integratedBRDF.y * 255);
            let b = Math.floor(0 * 255);
            let a = 255;

            ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + (a/255) + ")";
            ctx.fillRect( i, size - 1 - j, 1, 1 );
        }

        console.log("bx : " + biggestX);
        console.log("by : " + biggestY);
        console.log("sx : " + smallestX);
        console.log("sy : " + smallestY);
        console.log("i : " + i);
        console.log("xxxxxxxxxxxxxxxxxx");
    }
}





function subvec3(V1, V2) {
    return new vec3(
        V1.x - V2.x,
        V1.y - V2.y,
        V1.z - V2.z
    );
}

function scalevec3(vect, scale) {
    return new vec3(vect.x * scale, vect.y * scale, vect.z * scale);
}

function dotvec3(vect_A, vect_B) {
    return vect_A.x * vect_B.x + vect_A.y * vect_B.y + vect_A.z * vect_B.z;
}

function crossvec3(vect_A, vect_B) {
 
    var result = new vec3(0,0,0);
    result.x = vect_A.y * vect_B.z - vect_A.z * vect_B.y;
    result.y = vect_A.x * vect_B.z - vect_A.z * vect_B.x;
    result.z = vect_A.x * vect_B.y - vect_A.y * vect_B.x;

    return result;
}

function normalizevec2(point) {
    var norm = Math.sqrt(point.x * point.x + point.y * point.y);
    if (norm !== 0) { // as3 return 0,0 for a point of zero length
        var normalized = new vec2(point.x / norm, point.y / norm);
        return normalized;
    }

    return new vec2(0, 0);
}

function normalizevec3(point) {
    var norm = Math.sqrt(point.x * point.x + point.y * point.y + point.z * point.z);
    if (norm !== 0) { // as3 return 0,0 for a point of zero length
        var normalized = new vec3(point.x / norm, point.y / norm, point.z / norm);
        return normalized;
    }

    return new vec3(0, 0, 0);
}

function vec2(x, y) {
    this.x = x;
    this.y = y;
}

function vec3(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}
