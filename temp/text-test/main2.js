import * as THREE from "./three.module.min.js";
import { OrbitControls } from "./OrbitControls.js";
import MSDFMeshGenerator from "./msdfMeshGenerator.js";

window.addEventListener("load", init);

/**
input:
1. I need font JSON
2. I need font texture
3. opt --- fragment shaders?

output:
1. Quad geometries for the text they give me as input?
2. The text mesh? 
	2.1	with the provided fs / material?

What if the quad geometry is too small for the kind of stuff I'd like to do in the fragmentshader? 
- increase the quad geometry size, and expand its uvs, then store somewhere the original uvs extent of the quad and if the displacement you do in fs goes beyond the original uvs where the character is contained simply return 0 or something similiar

So if the original quad is:
          
 _________(0.6, 0.6) <- uvs
|         |
|         |
|	      |
|_________| 
(0.5, 0.5) <- uvs


then expand the geometry like this:
 ________________(0.8, 0.8)
|                |      
|	             |        
|	             |      
|	  	         |       
|	  	         |       
|	  	         |
|________________| 	 
(0.3, 0.3)

and while making displacements in fragment shaders ignore everything that falls outside of [0.5 ... 0.6]
 */

let renderer;
let scene;
let camera;
let controls;

let fontJSON;
let fontTexture;
let fontMesh;

function init() {
  renderer = new THREE.WebGLRenderer({});
  renderer.setSize(innerWidth, innerHeight);
  document.body.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 30);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.screenSpacePanning = true;

  loadAssets();
}

function loadAssets() {
  fetch("assets/font.json")
    .then((res) => res.json())
    .then((res) => {
      fontJSON = res;

      console.log(fontJSON);
      onAssetsReady();
    });

  new THREE.TextureLoader().load("assets/sheet0.png", (texture) => {
    texture.anisotropy = 16;
    texture.flipY = false;
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    // texture.minFilter = THREE.NearestFilter;
    // texture.magFilter = THREE.NearestFilter;

    fontTexture = texture;
    onAssetsReady();
  });
}

let assetsCounter = 0;
function onAssetsReady() {
  if (++assetsCounter < 2) return;

  let msdfMeshGenerator = new MSDFMeshGenerator(fontTexture, fontJSON, {
    padding: 0,
    // fragmentShader: fontFragShader,
  });
  fontMesh = msdfMeshGenerator.fromStringArray([
    "Lorem ipsum dolor sit amet,",
    "consectetur adipiscing elit",
  ]);
  fontMesh.material.uniforms.uTime = { value: 0 };

  fontMesh.scale.set(0.02, 0.02, 0.02);

  // scene.add(fontMesh);

  requestAnimationFrame(animate);

  textTest(msdfMeshGenerator);
}

function textTest(msdfMeshGenerator) {
  let pt = new THREE.Vector3(-10, +10, 0);
  let ts = 0;

  for (let i = 0; i < 16; i++) {
    let fontMesh = msdfMeshGenerator.fromStringArray([
      "Varying text size rendering test",
    ]);
    let s = 1 - i * 0.05;
    s *= 0.02;
    fontMesh.scale.set(s, s, s);

    ts += s;

    fontMesh.position.set(0, -ts * 100 - i * 0.1, 0).add(pt);

    scene.add(fontMesh);
  }
}

function animate(now) {
  requestAnimationFrame(animate);

  fontMesh.material.uniforms.uTime.value = now;

  controls.update();
  renderer.render(scene, camera);
}

// wobbly shader used for fun
let fontFragShader = `
#ifdef GL_OES_standard_derivatives
    #extension GL_OES_standard_derivatives : enable
#endif

uniform sampler2D uFontTexture;
uniform float uTime;

varying vec2 vUv;
#ifdef IS_PADDED
    varying vec4 vUvBounds;
#endif

float rand(vec2 n) { return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }
float noise(vec2 p){
	vec2 ip = floor(p);
	vec2 u = fract(p);
	u = u*u*(3.0-2.0*u);
	
	float res = mix(
		mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
		mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
	return res*res;
}

float getMedian(vec3 texel) {
    return max(min(texel.r, texel.g), min(max(texel.r, texel.g), texel.b));
}

void main() {
    vec2 uv = vUv;

    uv += (noise(uv * 65.0 + vec2(0.0, uTime * 0.003)) - vec2(0.5, 0.0)) * 0.01;

    vec4 texelCol = texture2D(uFontTexture, uv);

    // ricorda che questa non è una vera e propria "sdf", perchè il valore massimo che puoi
    // prendere dalla texture è 1 (quindi dopo un po' fuori dai bordi del carattere la texture è 1 e basta, quindi non ritorna una
    // vera e propria distanza, proprio perchè è limitata ad 1 arrivati ad un certo punto) stessa cosa per il limite inferiore a 0
    float median = getMedian(texelCol.rgb);
    float w = 0.75 * fwidth(median);
    float alpha = 1.0 - smoothstep(0.5 - w, 0.5 + w, median);

    // float sigDist = median - 0.5;
    // float alpha = clamp(sigDist/fwidth(sigDist) + 0.5, 0.0, 1.0);

    #ifdef IS_PADDED
        if(
            uv.x < vUvBounds.x || 
            uv.x > vUvBounds.z ||
            uv.y < vUvBounds.y ||
            uv.y > vUvBounds.w
        ) {
            alpha = 0.0;
        }
    #endif
    

    gl_FragColor = vec4(1.0, 1.0, 1.0, alpha + 0.05);
}`;
