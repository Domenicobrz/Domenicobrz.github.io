import { RingGeometry, Mesh, CircleGeometry, Group } from 'https://cdn.skypack.dev/three';
import { mat, material } from '../materials/materials.js';

export function atom(or = 7, ir = 6.9, type = "default") {
  let gap = 0.0515;
  if(type == "small") {
    gap = 0.1;    
  }

  const start = Math.PI * (0.5 + gap), end = Math.PI * (2 - gap * 2);

  const ringGeo = new RingGeometry(ir, or, 80, 1, start, end);
  const ringMesh = new Mesh(ringGeo, mat.basic.transparent(0.5));

  let circleRad = or * 0.075;
  if(type == "small") {
    circleRad = or * 0.15;    
  }
  const circleGeo = new CircleGeometry(circleRad, 30);
  circleGeo.translate(0, or * 0.99, 0);
  const circleMesh = new Mesh(circleGeo, mat.basic.opaque());

  const centralCircleGeo = new CircleGeometry(or * 0.275, 60);
  const centralCircleMesh = new Mesh(centralCircleGeo, mat.basic.opaque());

  const group = new Group();
  group.add(circleMesh, centralCircleMesh, ringMesh); //, ringMesh2);

  return group;
}