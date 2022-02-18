import { Clock, Scene, Color } from 'https://cdn.skypack.dev/three';

export class Stage {
  constructor(renderer, day) {
    this.renderer = renderer;
    this.day = day;

    this.scene = new Scene();
    this.scene.background = new Color("black");

    this.clock = new Clock();
  }

  async init() {

  }

  update() {
    
  }
}