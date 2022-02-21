import { ShaderMaterial, Vector4, OneFactor, AddEquation, CustomBlending  } from "https://cdn.skypack.dev/three";

export const floorGridMaterial2 = function () {
  return new ShaderMaterial({
    uniforms: {
      uTime: {
        value: 0,
      },
      uOffs: {
        value: new Vector4(0,0,0,0),
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
    uniform vec4 uOffs;

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
      // float gridSize = 30.0 + uOffs.z * 7.5;
      float gridSize = 15.0 + uOffs.z * 3.75;
      vec2 offsettedPos = vFragPos.xz + uOffs.xy * 0.0; 
      vec2 gridMod = mod(offsettedPos, vec2(gridSize));
      vec2 gridPos = gridMod * (1.0 / gridSize);
      float alpha = 0.0;
      float hwidth = 0.02 + (abs(dFdx(length(vFragPos.xz)) + dFdy(length(vFragPos.xz)))) * 0.015;
      float width = hwidth * 2.0;
      if(gridPos.x < hwidth) alpha += smoothstep(0.0, hwidth, gridPos.x);
      if(gridPos.y < hwidth) alpha += smoothstep(0.0, hwidth, gridPos.y);
      if(gridPos.x >= hwidth && gridPos.x < width) alpha += 1.0 - smoothstep(hwidth, width, gridPos.x);
      if(gridPos.y >= hwidth && gridPos.y < width) alpha += 1.0 - smoothstep(hwidth, width, gridPos.y);


      alpha = clamp(0.0, 1.0, alpha);
      alpha = pow(alpha, 0.45);
      alpha *= 0.15;


      gridPos += 0.5 - 0.02;
      gridPos = mod(gridPos, vec2(1.0));

      offsettedPos += gridSize * 0.5;
      vec2 cell = (offsettedPos - mod(offsettedPos, gridSize)) * (1.0 / gridSize);
      float randv = fract(cell.x * 40.19387 + cell.y * 11.2305);

      float dist = length(gridPos - vec2(0.5)) / (1.0 + randv * 0.2);
      float modT = mod(uTime * 2.0 + cell.x * 17.81 + cell.y * 13.3, 10.0);
      float target = -200.0 + modT * 40.0;
      float dist2 = abs(vFragPos.x - target);
      if(dist2 < 20.0) {
        dist *= 0.65 + 0.35 * (dist2 * 0.05);
        alpha *= 1.0 + 0.5 * (dist2 * 0.05);
      } 

      alpha += (1.0 - smoothstep(0.035, 0.05, dist)) * 0.5;

      if(dist < 0.03 && randv > 0.5) {
        alpha *= smoothstep(0.015, 0.03, dist);
      }


      // circle final clamp
      alpha *= 1.0 - smoothstep(120.0, 300.0, length(vFragPos.xz));
      alpha = clamp(0.0, 1.0, alpha);
      
      vec3 gridColor = vec3(0.2, 0.3, 1.0) * alpha * 0.35;
      // vec3 gridColor = vec3(1.0, 0.3, 0.2) * alpha * 0.35;

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
