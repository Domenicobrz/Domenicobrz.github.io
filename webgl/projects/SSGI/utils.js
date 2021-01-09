import * as THREE from "./dependencies/three.module.js";

function createDoubleFBO(w, h, filtering) {
    let rt1 = new THREE.WebGLRenderTarget(w, h, {
        type:          THREE.FloatType,
        minFilter:     filtering || THREE.LinearFilter,
        magFilter:     filtering || THREE.LinearFilter,
        wrapS:         THREE.ClampToEdgeWrapping,
        wrapT:         THREE.ClampToEdgeWrapping,
        format:        THREE.RGBAFormat,
        stencilBuffer: false,
        anisotropy:    1,
    });

    let rt2 = new THREE.WebGLRenderTarget(w, h, {
        type:          THREE.FloatType,
        minFilter:     filtering || THREE.LinearFilter,
        magFilter:     filtering || THREE.LinearFilter,
        wrapS:         THREE.ClampToEdgeWrapping,
        wrapT:         THREE.ClampToEdgeWrapping,
        format:        THREE.RGBAFormat,
        stencilBuffer: false,
        anisotropy:    1,
    });

    return {
        read:  rt1,
        write: rt2,
        swap: function() {
            let temp   = this.read;
            this.read  = this.write;
            this.write = temp;
        }
    };
}

function createTripleFBO(w, h, filtering) {
    let rt1 = new THREE.WebGLRenderTarget(w, h, {
        type:          THREE.FloatType,
        minFilter:     filtering || THREE.LinearFilter,
        magFilter:     filtering || THREE.LinearFilter,
        wrapS:         THREE.ClampToEdgeWrapping,
        wrapT:         THREE.ClampToEdgeWrapping,
        format:        THREE.RGBAFormat,
        stencilBuffer: false,
        anisotropy:    1,
    });

    let rt2 = new THREE.WebGLRenderTarget(w, h, {
        type:          THREE.FloatType,
        minFilter:     filtering || THREE.LinearFilter,
        magFilter:     filtering || THREE.LinearFilter,
        wrapS:         THREE.ClampToEdgeWrapping,
        wrapT:         THREE.ClampToEdgeWrapping,
        format:        THREE.RGBAFormat,
        stencilBuffer: false,
        anisotropy:    1,
    });

    let rt3 = new THREE.WebGLRenderTarget(w, h, {
        type:          THREE.FloatType,
        minFilter:     filtering || THREE.LinearFilter,
        magFilter:     filtering || THREE.LinearFilter,
        wrapS:         THREE.ClampToEdgeWrapping,
        wrapT:         THREE.ClampToEdgeWrapping,
        format:        THREE.RGBAFormat,
        stencilBuffer: false,
        anisotropy:    1,
    });

    return {
        rt1: rt1,
        rt2: rt2,
        rt3: rt3,
        swap_rt2_rt3: function() {
            let temp = this.rt2;
            this.rt2 = this.rt3;
            this.rt3 = temp;
        }
    };
}

export { createDoubleFBO, createTripleFBO }