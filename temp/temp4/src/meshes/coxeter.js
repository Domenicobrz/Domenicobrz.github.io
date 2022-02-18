import {
  Mesh,
  PlaneGeometry,
  CircleGeometry,
  Group,
} from "https://cdn.skypack.dev/three";
import { mat } from "../materials/materials.js";
import { atom } from "../meshes/atom.js";

export function coxeter() {
  const atomMesh1 = atom(4, 3.95);
  atomMesh1.position.set(-8, 0, 0);

  const lineMesh = new Mesh(
    new PlaneGeometry(8, 0.02),
    mat.basic.opaque(),
  );

  const circleMesh = new Mesh(
    new CircleGeometry(0.8, 30), 
    mat.basic.transparent(1)
  );

  const atomMesh2 = atom(4, 3.95);
  atomMesh2.position.set(+8, 0, 0);
  atomMesh2.rotateZ(1.5); // give it an initial offset that is different from the other one

  const group = new Group();
  group.add(atomMesh1, lineMesh, circleMesh, atomMesh2);

  return {
    group,
    atom1: atomMesh1,
    atom2: atomMesh2,
    circle: circleMesh,
  };
}