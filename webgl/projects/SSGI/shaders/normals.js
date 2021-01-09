let normal_vs = `
varying vec3 vWorldSpaceNormal;
varying vec3 vWorldSpacePosition;

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

    // using worldNormalMatrix() instead of "normalMatrix" is necessary because normalMatrix also contains the viewMatrix
    // using worldNormalMatrix() instead of "normalMatrix" is necessary because normalMatrix also contains the viewMatrix
    // using worldNormalMatrix() instead of "normalMatrix" is necessary because normalMatrix also contains the viewMatrix
    vWorldSpaceNormal = worldNormalMatrix() * normal;
    vWorldSpacePosition = position;
}
`;

let normal_fs = `
varying vec3 vWorldSpaceNormal;
varying vec3 vWorldSpacePosition;

uniform vec3 uCameraPos;

void main() {
    // vec3 viewDir = normalize(vWorldSpacePosition - uCameraPos);

    vec3 normal = normalize(vWorldSpaceNormal);
    // if(dot(viewDir, normal) > 0.0) normal = -normal;

    gl_FragColor = vec4(normal, 1.0);
}
`;

export { normal_fs, normal_vs };