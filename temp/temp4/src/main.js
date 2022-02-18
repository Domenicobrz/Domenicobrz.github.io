import { WebGLRenderer, sRGBEncoding, ACESFilmicToneMapping, LinearEncoding, NoToneMapping, LinearToneMapping } from 'https://cdn.skypack.dev/three';
import { Stage1 } from './stages/stage1.js';

const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
// renderer.outputEncoding = sRGBEncoding;
// renderer.toneMapping = ACESFilmicToneMapping;
renderer.outputEncoding = LinearEncoding;
renderer.toneMapping = LinearToneMapping;
renderer.physicallyAccurateLights = true;
document.body.appendChild(renderer.domElement);

// http://127.0.0.1:5500/index.html?day=1

const day = parseInt(new URLSearchParams(window.location.search).get("day"));

let stageManager;
if(day <= 4) {
  stageManager = new Stage1(renderer, day);
}

(async function init() {
  stageManager.init();
  
  renderer.setAnimationLoop(() => {
    stageManager.update();
  });
})();