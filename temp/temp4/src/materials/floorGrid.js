import { ShaderMaterial, Vector4, OneFactor, AddEquation, CustomBlending  } from "https://cdn.skypack.dev/three";

export const floorGridMaterial = function () {
  return new ShaderMaterial({
    uniforms: {
      uTime: {
        value: 0,
      }
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

    uniform float uTime;

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

    vec2 rotate(vec2 v, float a) {
      float s = sin(a);
      float c = cos(a);
      mat2 m = mat2(c, -s, s, c);
      return m * v;
    }

    void main() {
      // dots
      float alpha = 0.0;
      {
        // vec2 pos = vFragPos.xz;
        // vec2 randOffs = vec2(0.0);
        // float divisor = 1.0 / (1.0);
        // vec2 gridPos = mod(pos + randOffs, vec2(1.0)) * divisor;
        // alpha += 1.0 - smoothstep(0.0, 0.45, length(gridPos - vec2(0.5, 0.5)));
      

        vec2 pos = vFragPos.xz + normalize(vFragPos.xz) * (-1.25 + 3.0 * sin(uTime + length(vFragPos.xz) * 0.1) * 0.5 + 0.5);
        float rad = length(pos);
        float radmod = mod(rad, 2.0);
        float cell = rad - radmod;

        pos = rotate(pos, (mod(cell, 4.0) < 2.0 ? uTime : - uTime) * (1.0 / cell));

        float theta = atan(pos.y, pos.x) + PI;

        float targetRad = cell + 1.0;
        // float ndots = cell * 11.0 + 6.0;
        // float angleDiv = (PI * 2.0 ) / ndots; 
        // float targetAngle = theta - mod(theta, PI * angleDiv) + PI * angleDiv * 0.5;
        float ndots = cell * 2.0 + 6.0;
        float angleDiv = (PI * 2.0) / ndots; 
        float targetAngle = theta - mod(theta, angleDiv) + angleDiv * 0.5;
        vec2 target = vec2(
          cos(targetAngle + PI) * targetRad,
          sin(targetAngle + PI) * targetRad
        );         

        alpha = 1.0 - smoothstep(0.5, 0.75, length(pos - target));
        alpha *= 0.25;

        alpha *= 1.0 - mod(cell, 6.0) / 6.0;
        alpha *= (sin(targetAngle * PI * 10.0 + uTime + targetAngle * 897.239) * 0.5 + 0.5) * 1.35;
        alpha *= 2.0;
        if(rad < 2.0) {
          alpha = 0.0;
        }
      }
  
      // circle final clamp
      alpha *= 1.0 - smoothstep(150.0, 180.0, length(vFragPos.xz));
      alpha = clamp(0.0, 1.0, alpha);
      
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
};
