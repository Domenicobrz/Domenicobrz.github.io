import * as THREE from "https://cdn.skypack.dev/three";

export default class PostProcess {
    constructor(renderer, colorRT, bloomRT) {
        this.material = new THREE.ShaderMaterial({
            uniforms: {
                uColorTexture: { type: "t", value: colorRT.texture },
                uBloomTexture: { type: "t", value: bloomRT.texture },
                uBloomStrength: { value: 1 },
            },
            
            vertexShader: `
                varying vec2 vUv;

                void main() {
                    vUv = uv;
                    gl_Position = vec4(position.xy, 0.0, 1.0);    
                }
            `,

            fragmentShader: `
                uniform sampler2D uColorTexture;
                uniform sampler2D uBloomTexture;
                uniform float uBloomStrength;

                varying vec2 vUv;

                void main() {
                    vec4 col = texture2D(uColorTexture, vUv);
                    vec4 bloom = texture2D(uBloomTexture, vUv);

                    col += bloom * uBloomStrength * 1.5;

                    col.rgb = ACESFilmicToneMapping(col.rgb);
                    col = LinearTosRGB(col);

                    gl_FragColor = col;  
                }
            `,

            depthTest:  false,
            depthWrite: false,
        });

        this.mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2), this.material);
        this.camera = new THREE.PerspectiveCamera( 45, 1 /* remember that the camera is worthless here */, 1, 1000 );
        this.renderer = renderer;

        this.scene = new THREE.Scene();
        this.scene.add(this.mesh);
    }

    blit(bloomStrength, renderTargetDest) {
        this.renderer.setRenderTarget(renderTargetDest);

        this.material.uniforms.uBloomStrength.value = bloomStrength;
        this.renderer.render(this.scene, this.camera);

        this.renderer.setRenderTarget(null);
    }
}