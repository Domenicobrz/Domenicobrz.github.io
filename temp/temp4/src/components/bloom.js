import * as THREE from "https://cdn.skypack.dev/three";
import { Vector3, Vector2, FloatType, WebGLRenderTarget, MeshBasicMaterial } from "https://cdn.skypack.dev/three"

export default class Bloom {
  constructor(renderer, width, height, colorRT) {
    let w = Math.floor(width * 0.5);
    let h = Math.floor(height * 0.5);

    this.rt0 = new WebGLRenderTarget(
      w,
      h,
      { type: FloatType }
    );
    this.rt1 = new WebGLRenderTarget(
      w,
      h,
      { type: FloatType }
    );
    this.rt = this.rt1;
    this.colorRT = colorRT;

    this.blurMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { type: "t", value: null },
        uHorizontal: { value: false },
        uStep: { value: 1 },
        uPixelStep: { value: new Vector2(1 / w, 1 / h) },
      },

      vertexShader: `
      varying vec2 vUv;

      void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);    
      }
      `,

      fragmentShader: `
      uniform sampler2D uTexture;

      uniform vec2 uPixelStep;
      uniform bool uHorizontal;
      uniform float uStep;

      varying vec2 vUv;

      float weight[5] = float[] (0.227027, 0.1945946, 0.1216216, 0.054054, 0.016216);

      void main() {   
          float blurRadius = uStep;

          vec3 accum = vec3(0.0);
          for(int i = -4; i <= +4; i++) {
              vec2 offs = vec2(0.0); 

              if(uHorizontal)  offs = vec2(uPixelStep.x * float(i) * blurRadius, 0.0);
              if(!uHorizontal) offs = vec2(0.0, uPixelStep.x * float(i) * blurRadius);

              vec3 value = texture2D(uTexture, vUv + offs).xyz;
              
              vec3 weightedValue = vec3(0.0);
              if(i < 0) weightedValue = value * weight[abs(i)];
              if(i > 0) weightedValue = value * weight[i];
              if(i == 0) weightedValue = value * weight[0];

              accum += weightedValue * 0.7;

              vec3 value2 = texture2D(uTexture, vUv + offs * 0.2).xyz;
              vec3 weightedValue2 = vec3(0.0);
              if(i < 0) weightedValue2 = value2 * weight[abs(i)];
              if(i > 0) weightedValue2 = value2 * weight[i];
              if(i == 0) weightedValue2 = value2 * weight[0];
              accum += weightedValue2 * 0.3;
          }
          
          gl_FragColor = vec4(accum, 1.0);
      }`,

      depthTest: false,
      depthWrite: false,
    });
    
    this.mesh = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(2, 2),
      this.blurMaterial
    );

    this.camera = new THREE.PerspectiveCamera(
      45,
      1 /* remember that the camera is worthless here */,
      1,
      1000
    );
    this.renderer = renderer;

    this.scene = new THREE.Scene();
    this.scene.add(this.mesh);
 
    this.clock = new THREE.Clock();
    this.clock.start();
  }

  compute(bloomSpread = 5.5) {
    this.mesh.material = this.blurMaterial;
    // ping pong blur toruses scene
    for(let i = 0; i < 7; i++) {
      this.blurMaterial.uniforms.uStep.value = (i * bloomSpread + 0.2);

      // horizontal pass
      this.renderer.setRenderTarget(this.rt0);
      this.blurMaterial.uniforms.uHorizontal.value = true;
      this.blurMaterial.uniforms.uTexture.value = i === 0 ? this.colorRT.texture : this.rt1.texture;
      this.renderer.render(this.scene, this.camera);

      // vertical pass
      this.renderer.setRenderTarget(this.rt1);
      this.blurMaterial.uniforms.uHorizontal.value = false;
      this.blurMaterial.uniforms.uTexture.value = this.rt0.texture;
      this.renderer.render(this.scene, this.camera);
    }

    this.rt = this.rt1;
  }
}
