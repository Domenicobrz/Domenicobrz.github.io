import { ShaderMaterial, Vector4 } from "https://cdn.skypack.dev/three";

export const floatingBackgroundMaterial = function () {
  return new ShaderMaterial({
    uniforms: {
      uData: {
        value: [
          new Vector4(0, 0, 300, 0),
          new Vector4(0, 0, 300, 0),
          new Vector4(0, 0, 300, 0),
        ],
      },
    },

    vertexShader: `
    varying vec3 vFragPos;
    void main() {
      vFragPos = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    fragmentShader: `
    #define PI 3.141592653589793
    #define PI2 6.283185307179586
    #define PI_HALF 1.5707963267948966

    varying vec3 vFragPos;

    uniform vec4 uData[3];
  
    vec3 getContribution(vec2 pos, vec3 col, float spread) {
      float col1t = 1.0 - smoothstep(0.0, spread, length(vFragPos.xz - pos));
      return mix(vec3(0.0), col, col1t); 
    }

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
      gl_FragColor = vec4(
        getContribution(uData[0].xy, pow(vec3(0.3, 0.6, 0.9), vec3(4.0)) * 0.35, uData[0].z) +
        getContribution(uData[1].xy, pow(vec3(0.9, 0.6, 0.3), vec3(4.0)) * 0.35, uData[1].z) +
        getContribution(uData[2].xy, pow(vec3(0.3, 0.7, 0.98), vec3(4.0)) * 0.35, uData[2].z)
        , 1.0
      );

      gl_FragColor.rgb = dithering( gl_FragColor.rgb );
    }
  `,
    transparent: true,
  });
};
