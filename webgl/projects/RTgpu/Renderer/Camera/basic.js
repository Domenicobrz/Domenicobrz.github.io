class Camera {
    constructor() {
        this.cameraEye    = [];
        this.cameraLookAt = [];
    }

    set eye(value) {
        this.cameraEye = value;
        clearRendererFBO();
    }

    set lookAt(value) {
        this.cameraLookAt = value;
        clearRendererFBO();
    }

    setUniforms() {
        gl.uniform3f(renderProgram.uCameraEye,    this.cameraEye[0], this.cameraEye[1], this.cameraEye[2]);
        gl.uniform3f(renderProgram.uCameraLookAt, this.cameraLookAt[0], this.cameraLookAt[1], this.cameraLookAt[2]);
    }

    get cameraUniforms() {
        var cameraUniforms = `
        uniform vec3 uCameraEye;
        uniform vec3 uCameraLookAt;
        `;

        return cameraUniforms;
    }

    get cameraProperties() {        
        var cameraProperties = `
        const float cameraFOV   = 45.0; 
        `;

        return cameraProperties; 
    }

    get getCameraRay() {
        var getCameraRay =
        `Ray getCameraRay(vec2 UV) {        
            vec3 w = normalize(uCameraLookAt - uCameraEye);
            vec3 u = normalize(cross(vec3(0, 1, 0), w));
            vec3 v = normalize(cross(w, u));        
        

            float vf = tan((cameraFOV / 2.0) * (PI / 180.0)) * 2.0;
            float uf = vf * uScreenRatio;       

            vec3 offsetHash = hash3(vec2(uTime, 0.0));
            float offx = offsetHash.x * (1.0 / screenWidth);
            float offy = offsetHash.y * (1.0 / screenHeight);

            Ray ray;
            ray.o = uCameraEye;
            ray.d = normalize((uCameraEye 
                               + w 
                               + u * uf * (UV.x + offx) 
                               - u * uf * 0.5 
                               + v * vf * (UV.y + offy)
                               - v * vf * 0.5)   - uCameraEye);

            return ray;
        }`;

        return getCameraRay; 
    }
}

