import {
  PerspectiveCamera,
  Mesh,
  PlaneGeometry,
  CircleGeometry,
  FloatType,
  LinearEncoding,
  MeshBasicMaterial,
  sRGBEncoding,
  WebGLMultisampleRenderTarget,
  WebGLRenderTarget,
  RGBAFormat,
  UnsignedByteType,
  SphereGeometry,
  Vector4,
} from "https://cdn.skypack.dev/three";
import { OrbitControls } from 'https://cdn.skypack.dev/three-stdlib@2.8.5/controls/OrbitControls';
import { mergeBufferGeometries } from 'https://cdn.skypack.dev/three-stdlib@2.8.5/utils/BufferGeometryUtils';
import SimplexNoise from 'https://cdn.skypack.dev/simplex-noise';
import Blit from "../components/blit.js";
import PostProcess from "../components/postProcess.js";
import Bloom from "../components/bloom.js";
import { mat } from "../materials/materials.js";
import { atom } from "../meshes/atom.js";
import { clock } from "../meshes/clock.js";
import { coxeter } from "../meshes/coxeter.js";
import { theme } from "../theme.js";
import { once } from "../utils/once.js";
import { Stage } from "./stage.js";

export class Stage2 extends Stage {
  constructor(renderer, day) {
    super(renderer, day);

    this.camera = new PerspectiveCamera(
      45,
      innerWidth / innerHeight,
      1,
      1000
    );
    this.camera.position.set(
      -61.80334776372891,
      50.97274819170662,
      66.52528719737116,
    );

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(
      -2.3959613670911883,
      -4.071195289433606,
      0.9729155140082139,
    );
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;

    this.colorRT = new WebGLMultisampleRenderTarget(innerWidth, innerHeight, { 
    // this.colorRT = new WebGLRenderTarget(innerWidth, innerHeight, { 
      type: FloatType,
    });

    this.simplex = new SimplexNoise();

    this.bloomProgram = new Bloom(this.renderer, innerWidth, innerHeight, this.colorRT);
    this.postProcessProgram = new PostProcess(this.renderer, this.colorRT, this.bloomProgram.rt);
  }

  async init() {
    this.clock.start();
    this.buildScene();
  }

  buildScene() {
    this.floorGeo = new PlaneGeometry(2000, 2000);
    this.floorBackground = new Mesh(this.floorGeo, mat.floatingBackground());
    this.floorBackground.position.set(0, -50, 0);
    this.floorBackground.rotation.x = -Math.PI * 0.5;
    this.floorBackground.renderOrder = 0;
    this.scene.add(this.floorBackground);

    this.floorGridGeo = new PlaneGeometry(400, 400);
    this.floorGrid = new Mesh(this.floorGridGeo, mat.floorGrid());
    this.floorGrid.position.set(0, -15, 0);
    this.floorGrid.rotation.x = -Math.PI * 0.5;
    this.scene.add(this.floorGrid);

    this.floorGrid2 = new Mesh(new PlaneGeometry(600, 600), mat.floorGrid2());
    this.floorGrid2.position.set(0, -5, 0);
    this.floorGrid2.rotation.x = -Math.PI * 0.5;
    this.scene.add(this.floorGrid2);


    this.scene.add(new Mesh(
      new SphereGeometry(3, 20, 20),
      new MeshBasicMaterial({ color: 0xaaaaaa }),
    ));
  }

  updateFloorBackground(delta, time) {
    let mTime = time * 0.05;

    for(let i = 0; i < 3; i++) {
      let offx = 0;
      let offy = 0;
      let m = 100;
      let min = m + 75;
      if(i == 1) {
        offx = +100;
        offy = -170;
        m = 75;
        min = m + 125;
      } else if(i == 2) {
        offx = -80;
        offy = -250;
        min = m + 75;
      }
      this.floorBackground.material.uniforms.uData.value[i].x = this.simplex.noise2D(mTime + i * 12.3560, 0.895) * 100 + offx;
      this.floorBackground.material.uniforms.uData.value[i].y = this.simplex.noise2D(mTime + i * 97.8863, 3.340945) * 100 + offy;
      this.floorBackground.material.uniforms.uData.value[i].z = this.simplex.noise2D(mTime + i * 77.9872, 7.93487) * m + min;
    }

    this.floorGrid.material.uniforms.uTime.value = time;

    this.floorGrid2.material.uniforms.uTime.value = time;
    this.floorGrid2.material.uniforms.uOffs.value = new Vector4(
      this.simplex.noise2D(time * 0.07 + 985.34537, 0.895),
      this.simplex.noise2D(time * 0.07 + 3987.757, 3.340945),
      this.simplex.noise2D(time * 0.07 + 3987.757, 3.340945), 
      0
    );
  }

  update() {
    let delta = this.clock.getDelta();
    let time = this.clock.getElapsedTime();

    let bloomStrength = 0.02;
    let bloomSpread = 2.5;

    this.controls.update();

    this.updateFloorBackground(delta, time);

    this.renderer.setRenderTarget(this.colorRT);
    this.renderer.render(this.scene, this.camera);

    this.bloomProgram.compute(bloomSpread);
    this.postProcessProgram.blit(bloomStrength, null);
  }
}
