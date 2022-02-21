import { Mesh, BufferGeometry, BufferAttribute, ShaderMaterial, Vector4, OneFactor, AddEquation, CustomBlending  } from "https://cdn.skypack.dev/three";

export class FloorGrid {
  constructor() {
    this.material = new ShaderMaterial({
      uniforms: {
        uTime: {
          value: 0,
        }
      },
  
      vertexShader: `
      varying vec3 vFragPos;
      varying vec3 vUv;

      void main() {
        vFragPos = (modelMatrix * vec4(position, 1.0)).xyz;
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
      fragmentShader: `
      #define PI 3.141592653589793
      #define PI2 6.283185307179586
      #define PI_HALF 1.5707963267948966
  
      varying vec3 vFragPos;
      varying vec3 vUv;
  
      uniform vec4 uTime;
  
      highp float rand( const in vec2 uv ) {
        const highp float a = 12.9898, b = 78.233, c = 43758.5453;
        highp float dt = dot( uv.xy, vec2( a, b ) ), sn = mod( dt, PI );
        return fract( sin( sn ) * c );
      }
  
      vec3 dithering( vec3 color ) {
        float grid_position = rand( gl_FragCoord.xy );
        vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
        dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
        return color + dither_shift_RGB;
      }
  
      void main() {
        float alpha = 1.0;
        vec3 gridColor = vec3(0.2, 0.3, 1.0) * alpha * 0.15;
        gl_FragColor = vec4(gridColor, 1.0);
      }
    `,
      transparent: true,
      blending: CustomBlending,
      blendEquation: AddEquation,
      blendSrc: OneFactor,
      blendDst: OneFactor,
    });


    this.geometry = new BufferGeometry();
    const vertices = new Float32Array( [
    	-1.0, -1.0,  1.0,
    	 1.0, -1.0,  1.0,
    	 1.0,  1.0,  1.0,
    
    	 1.0,  1.0,  1.0,
    	-1.0,  1.0,  1.0,
    	-1.0, -1.0,  1.0
    ] );

    // itemSize = 3 because there are 3 values (components) per vertex
    this.geometry.setAttribute( 'position', new BufferAttribute( new Float32Array([]), 3 ) );
    this.geometry.setAttribute( 'uv', new BufferAttribute( new Float32Array([]), 2 ) );

    this.mesh = new Mesh(
      this.geometry,
      this.material,
    );
  }

  update() {
    let vertices = [];
    let uvs = [];

    for(let i = -5; i <= 5; i++) {
      for(let j = -5; j <= 5; j++) {

      }
    }
  }

  // assuming normal is +y
  getLineData(v0, v1, width) {
    
  }
}