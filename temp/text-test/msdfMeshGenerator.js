import * as THREE from "./three.module.min.js";

class MSDFMeshGenerator {
  constructor(fontTexture, fontJSON, args) {
    if (!args) args = {};

    this.fontJSON = fontJSON;
    this.fontTexture = fontTexture;

    // specified as character units
    this.padding = args.padding || 0;

    this.initShaders(args.vertexShader, args.fragmentShader);

    fontJSON.info.charToIndex = {};
    for (let i = 0; i < fontJSON.info.charset.length; i++) {
      let char = fontJSON.info.charset[i];

      for (let j = 0; j < fontJSON.chars.length; j++) {
        let element = fontJSON.chars[j];
        if (element.id === char.charCodeAt(0)) {
          fontJSON.info.charToIndex[char] = j;
          break;
        }
      }
    }
  }

  initShaders(vertexShader, fragmentShader) {
    this.defaultVertexShader = `
            #ifdef IS_PADDED
                attribute vec4 uvBounds;
            #endif

            varying vec2 vUv;
            #ifdef IS_PADDED
                varying vec4 vUvBounds;
            #endif

            void main() {
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                vUv = uv;
                
                #ifdef IS_PADDED
                    vUvBounds = uvBounds;
                #endif
            }
        `;

    this.defaultFragmentShader = `
            #ifdef GL_OES_standard_derivatives
                #extension GL_OES_standard_derivatives : enable
            #endif

            uniform sampler2D uFontTexture;

            varying vec2 vUv;
            #ifdef IS_PADDED
                varying vec4 vUvBounds;
            #endif

            float getMedian(vec3 texel) {
                return max(min(texel.r, texel.g), min(max(texel.r, texel.g), texel.b));
            }

            void main() {
                vec4 texelCol = texture2D(uFontTexture, vUv);

                float median = 1.0 - getMedian(texelCol.rgb);

                // choose one or the other
                // float w = 0.75 * fwidth(median);
                // float alpha = smoothstep(0.5 - w, 0.5 + w, median);
                float sigDist = median - 0.5;
                float alpha = clamp(sigDist/fwidth(sigDist) + 0.5, 0.0, 1.0);

                #ifdef IS_PADDED
                    if(
                        vUv.x < vUvBounds.x || 
                        vUv.x > vUvBounds.z ||
                        vUv.y < vUvBounds.y ||
                        vUv.y > vUvBounds.w
                    ) {
                        alpha = 0.0;
                    }
                #endif
                

                gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
            }
        `;

    this.defaultShader = new THREE.ShaderMaterial({
      uniforms: {
        uFontTexture: {
          type: "t",
          value: this.fontTexture,
        },
      },
      defines: {
        IS_PADDED: this.padding > 0,
      },
      vertexShader: vertexShader || this.defaultVertexShader,
      fragmentShader: fragmentShader || this.defaultFragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
    });
    this.currentShader = this.defaultShader;
  }

  fromString(string) {
    return this.fromStringArray([string]);
  }

  fromStringArray(strings) {
    let meshGeometry = new THREE.BufferGeometry();
    let positions = [];
    let normals = [];
    let uvs = [];
    let uvBounds = [];
    let indexes = [];

    let lastVertexIndex = 0;
    let lastVertexX = 0;
    let lastVertexY = 0;
    for (let s = 0; s < strings.length; s++) {
      let string = strings[s];

      for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        let data = this.getLetterGeometryData(letter);

        // ignore spaces
        if (letter != " ") {
          // offset positions to the right
          data.positions = data.positions.map((e, i) => {
            if (i % 3 === 0) return e + lastVertexX;
            if (i % 3 === 1) return e + lastVertexY;
            return e;
          });

          positions = positions.concat(data.positions);
          normals = normals.concat(data.normals);
          uvs = uvs.concat(data.uvs);
          uvBounds = uvBounds.concat(data.uvBounds);
          indexes = indexes.concat([
            0 + lastVertexIndex,
            2 + lastVertexIndex,
            1 + lastVertexIndex,
            2 + lastVertexIndex,
            3 + lastVertexIndex,
            1 + lastVertexIndex,
          ]);

          lastVertexIndex += 4;
        }

        lastVertexX += data.xAdvance;
      }

      // simulating a new line
      lastVertexY -= this.fontJSON.common.lineHeight;
      lastVertexX = 0;
    }

    meshGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    meshGeometry.setAttribute(
      "normal",
      new THREE.Float32BufferAttribute(normals, 3)
    );
    meshGeometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
    if (this.padding > 0) {
      meshGeometry.setAttribute(
        "uvBounds",
        new THREE.Float32BufferAttribute(uvBounds, 4)
      );
    }
    meshGeometry.setIndex(indexes);

    let mesh = new THREE.Mesh(meshGeometry, this.currentShader);

    return mesh;
  }

  getLetterGeometryData(letter) {
    let positions = [];
    let normals = [];
    let uvs = [];
    let uvBounds = [];

    let textureWidth = this.fontTexture.image.width;
    let textureHeight = this.fontTexture.image.height;

    let index = this.fontJSON.info.charToIndex[letter];
    if (index > this.fontJSON.chars.length) {
      console.warning(
        "MSDFMesh: this index doesn't exist in fontJSON: " +
          index +
          " falling back to the last available index"
      );
      index = this.fontJSON.chars.length - 1;
    }

    let charW = this.fontJSON.chars[index].width;
    let charH = this.fontJSON.chars[index].height;
    let charX = this.fontJSON.chars[index].x;
    let charY = this.fontJSON.chars[index].y;

    let uvsExtentDerivatives = new THREE.Vector2(
      1 / textureWidth,
      1 / textureHeight
    );
    let padding = this.padding;
    let uvPaddingX = uvsExtentDerivatives.x * padding;
    let uvPaddingY = uvsExtentDerivatives.y * padding;

    // calculated following the guidelines here: https://www.angelcode.com/products/bmfont/doc/render_text.html
    let offX = this.fontJSON.chars[index].xoffset;
    let offY =
      this.fontJSON.common.base -
      this.fontJSON.chars[index].yoffset -
      this.fontJSON.chars[index].height;

    let uvMin = new THREE.Vector2(charX / textureWidth, charY / textureHeight);
    let uvMax = new THREE.Vector2(
      charX / textureWidth + charW / textureWidth,
      charY / textureHeight + charH / textureHeight
    );
    let posMin = new THREE.Vector2(offX, offY);
    let posMax = new THREE.Vector2(offX + charW, offY + charH);

    for (let i = 0; i < 4; i++) {
      if (i === 0) {
        uvs.push(uvMin.x - uvPaddingX, uvMin.y - uvPaddingY);
        positions.push(posMin.x - padding, posMax.y + padding, 0);
        normals.push(0, 0, 1);
        uvBounds.push(uvMin.x, uvMin.y, uvMax.x, uvMax.y);
      }
      if (i === 1) {
        uvs.push(uvMax.x + uvPaddingX, uvMin.y - uvPaddingY);
        positions.push(posMax.x + padding, posMax.y + padding, 0);
        normals.push(0, 0, 1);
        uvBounds.push(uvMin.x, uvMin.y, uvMax.x, uvMax.y);
      }
      if (i === 2) {
        uvs.push(uvMin.x - uvPaddingX, uvMax.y + uvPaddingY);
        positions.push(posMin.x - padding, posMin.y - padding, 0);
        normals.push(0, 0, 1);
        uvBounds.push(uvMin.x, uvMin.y, uvMax.x, uvMax.y);
      }
      if (i === 3) {
        uvs.push(uvMax.x + uvPaddingX, uvMax.y + uvPaddingY);
        positions.push(posMax.x + padding, posMin.y - padding, 0);
        normals.push(0, 0, 1);
        uvBounds.push(uvMin.x, uvMin.y, uvMax.x, uvMax.y);
      }
    }

    return {
      uvs: uvs,
      uvBounds: uvBounds,
      normals: normals,
      positions: positions,
      xAdvance: this.fontJSON.chars[index].xadvance,
    };
  }
}

export default MSDFMeshGenerator;
