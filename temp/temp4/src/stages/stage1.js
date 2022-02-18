import {
  PerspectiveCamera,
  Mesh,
  PlaneGeometry,
  CircleGeometry,
  FloatType,
  LinearEncoding,
  sRGBEncoding,
  WebGLMultisampleRenderTarget,
  WebGLRenderTarget,
  RGBAFormat,
  UnsignedByteType,
} from "https://cdn.skypack.dev/three";
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

export class Stage1 extends Stage {
  constructor(renderer, day) {
    super(renderer, day);

    this.camera = new PerspectiveCamera(
      45,
      innerWidth / innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 50);

    this.colorRT = new WebGLMultisampleRenderTarget(innerWidth, innerHeight, { 
    // this.colorRT = new WebGLRenderTarget(innerWidth, innerHeight, { 
      type: FloatType,
    });

    this.bloomProgram = new Bloom(this.renderer, innerWidth, innerHeight, this.colorRT);
    this.postProcessProgram = new PostProcess(this.renderer, this.colorRT, this.bloomProgram.rt);
  }

  async init() {
    this.buildGeometry();
    this.clock.start();
  }

  buildGeometry() {
    if (this.day == 1) {
      this.atomMesh = atom(7, 6.9);
      this.scene.add(this.atomMesh);
    } else if (this.day == 2) {
      this.coxeter = coxeter();
      this.scene.add(this.coxeter.group);
    } else if (this.day == 3) {
      this.clockData = clock({ });
      this.scene.add(this.clockData.group);
    } else if (this.day == 4) {
      this.clockData = clock({ outerRing: true });
      this.scene.add(this.clockData.group);
    }
  }

  update() {
    let delta = this.clock.getDelta();
    let time = this.clock.getElapsedTime();
    const anglesPerSec = (Math.PI * 2) / Math.PI;

    let bloomStrength = 1;

    if (this.day == 1) {
      bloomStrength = 0.3;
      this.atomMesh.rotateZ(delta * anglesPerSec);
    } else if (this.day == 2) {
      bloomStrength = 0.45;
      this.coxeter.atom1.rotateZ(delta * anglesPerSec);
      this.coxeter.atom2.rotateZ(delta * anglesPerSec);

      if(time % 10 < 1) {
        this.coxeter.circle.material.opacity = Math.sin((time + Math.PI * 0.5) * Math.PI * 8) * 0.5 + 0.5;
      } else {
        this.coxeter.circle.material.opacity = 1;
      }
    } else if (this.day == 3 || this.day == 4) {
      bloomStrength = 1.25;
      this.clockData.atom1.rotateZ(delta * anglesPerSec);
      this.clockData.atom2.rotateZ(delta * anglesPerSec);

      if(once("clock-init")) {
        let date = new Date();

        let hourAngle = date.getHours() / 12 * Math.PI * 2;
        this.clockData.hourRotGroup.rotateZ(Math.PI * 0.5 - hourAngle);
    
        let minutesAngle = date.getMinutes() / 60 * Math.PI * 2;
        this.clockData.minutesRotGroup.rotateZ(Math.PI * 0.5 - minutesAngle);
      }

      const howManyMinuteAnglesPerSecond = (Math.PI * 2) / (60 * 60);
      const howManyHourAnglesPerSecond = (Math.PI * 2) / (60 * 60 * 12);

      this.clockData.hourRotGroup.rotateZ(-howManyHourAnglesPerSecond * delta * 6.626);
      this.clockData.minutesRotGroup.rotateZ(-howManyMinuteAnglesPerSecond * delta * 6.626);
    
      if(this.day == 4) {
        this.clockData.outerCircle.rotateZ((Math.PI * 2) / 87.97 * delta);
      }
    }

    this.renderer.setRenderTarget(this.colorRT);
    this.renderer.render(this.scene, this.camera);

    this.bloomProgram.compute();

    this.postProcessProgram.blit(bloomStrength, null);
  }
}
