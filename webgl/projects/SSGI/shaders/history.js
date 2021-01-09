let historyTest_vs = `
varying mat4 vProjectionViewMatrix;
varying vec3 vFragPos;
varying vec3 vWorldFragPos;
varying vec3 vNormal;

uniform vec3 uCameraPos;

float det(mat2 matrix) {
    return matrix[0].x * matrix[1].y - matrix[0].y * matrix[1].x;
}

highp mat3 transpose(in highp mat3 inMatrix) {
    highp vec3 i0 = inMatrix[0];
    highp vec3 i1 = inMatrix[1];
    highp vec3 i2 = inMatrix[2];

    highp mat3 outMatrix = mat3(
        vec3(i0.x, i1.x, i2.x),
        vec3(i0.y, i1.y, i2.y),
        vec3(i0.z, i1.z, i2.z)
        );

    return outMatrix;
}

mat3 inverse(mat3 matrix) {
    vec3 row0 = matrix[0];
    vec3 row1 = matrix[1];
    vec3 row2 = matrix[2];

    vec3 minors0 = vec3(
        det(mat2(row1.y, row1.z, row2.y, row2.z)),
        det(mat2(row1.z, row1.x, row2.z, row2.x)),
        det(mat2(row1.x, row1.y, row2.x, row2.y))
    );
    vec3 minors1 = vec3(
        det(mat2(row2.y, row2.z, row0.y, row0.z)),
        det(mat2(row2.z, row2.x, row0.z, row0.x)),
        det(mat2(row2.x, row2.y, row0.x, row0.y))
    );
    vec3 minors2 = vec3(
        det(mat2(row0.y, row0.z, row1.y, row1.z)),
        det(mat2(row0.z, row0.x, row1.z, row1.x)),
        det(mat2(row0.x, row0.y, row1.x, row1.y))
    );

    mat3 adj = transpose(mat3(minors0, minors1, minors2));

    return (1.0 / dot(row0, minors0)) * adj;
}

mat3 worldNormalMatrix() {
    return transpose(inverse(mat3(modelMatrix)));
}

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vProjectionViewMatrix = projectionMatrix * modelViewMatrix;
    vFragPos = position; // multiplied by PVM in fragment shader
    vWorldFragPos = (modelMatrix * vec4(position, 1.0)).xyz;

    // using worldNormalMatrix() instead of "normalMatrix" is necessary because normalMatrix also contains the viewMatrix
    // using worldNormalMatrix() instead of "normalMatrix" is necessary because normalMatrix also contains the viewMatrix
    // using worldNormalMatrix() instead of "normalMatrix" is necessary because normalMatrix also contains the viewMatrix
    vNormal = worldNormalMatrix() * normal;
}
`;

let historyTest_fs = `
varying mat4 vProjectionViewMatrix;
varying vec3 vFragPos;
varying vec3 vWorldFragPos;
varying vec3 vNormal;

uniform sampler2D uNormalBuffer;
uniform sampler2D uPositionBuffer;
uniform sampler2D uRadianceBuffer;
uniform sampler2D uMomentMove;
uniform vec2 uInvScreenSize;

void main() {
    vec4 projected = vProjectionViewMatrix * vec4(vFragPos, 1.0);
    projected /= projected.w;
    vec2 uv = projected.xy * 0.5 + 0.5;

    vec3 success = vec3(1.0);
   
    // reprojection test
    vec2 olduv = uv + texture2D(uMomentMove, uv).xy;
    vec3 oldNormal = texture2D(uNormalBuffer, olduv).xyz;
    vec3 oldRadiance = texture2D(uRadianceBuffer, olduv).xyz;
    vec3 oldWorldPosition = texture2D(uPositionBuffer, olduv).xyz;

    vec3 normal = normalize(vNormal);
    vec3 radiance = texture2D(uRadianceBuffer, uv).xyz;


    if(dot(oldNormal, normal) < 0.94) success = vec3(0.0);
    if(length(oldWorldPosition - vWorldFragPos) > 0.175) success = vec3(0.0);
    // if(length(oldRadiance - radiance) > 0.35) success = vec3(0.0);


    gl_FragColor = vec4(success, 1.0);
}
`;






let historyAccum_vs = `
varying vec2 vUv;

void main() {
    gl_Position = vec4(position, 1.0);
    vUv = uv;
}
`;

let historyAccum_fs = `
varying vec2 vUv;

uniform sampler2D uHistoryTest;
uniform sampler2D uHistoryAccum;
uniform sampler2D uMomentMove;

void main() {

    // quesito interessante.. l'accumulazione va fatta basandosi
    // sul valore accumulato del pixel reproiettato o su quello corrente?
    vec2 olduv = vUv + texture2D(uMomentMove, vUv).xy;

    float lastTestResult = texture2D(uHistoryTest, vUv).x;
    float accum = texture2D(uHistoryAccum, olduv).x;

    float updatedAccum = lastTestResult < 0.5 ? 0.0 : accum + 1.0;
    gl_FragColor = vec4(vec3(updatedAccum), 1.0);
}
`;


export { historyTest_fs, historyTest_vs, historyAccum_vs, historyAccum_fs };