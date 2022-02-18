import {
  Mesh,
  PlaneGeometry,
  CircleGeometry,
  RingGeometry,
  Group,
} from "https://cdn.skypack.dev/three";
import { mergeBufferGeometries } from 'https://cdn.skypack.dev/three-stdlib@2.8.5/utils/BufferGeometryUtils';
import { mat } from "../materials/materials.js";
import { atom } from "../meshes/atom.js";

export function clock({ outerRing }) {
  let hoursRimGeo;
  let minutesRimGeo;
  for(let i = 0; i < 12; i++) {
    const plane = new PlaneGeometry(0.5, 0.1);
    let angle = -Math.PI * 0.5 + Math.PI * 2.0 * (i / 12)

    plane.translate(12, 0, 0);
    plane.rotateZ(angle);
    
    if(!hoursRimGeo) hoursRimGeo = plane;
    else hoursRimGeo = mergeBufferGeometries([hoursRimGeo, plane]);

    for(let j = 1; j < 5; j++) {
      const mplane = new PlaneGeometry(0.2, 0.1);
      let mangle = angle + (Math.PI * 2.0 / 12) * (j / 5);
      mplane.translate(12 + (outerRing ? 0.25 : 0), 0, 0);
      mplane.rotateZ(mangle);

      if(!minutesRimGeo) minutesRimGeo = mplane;
      else minutesRimGeo = mergeBufferGeometries([minutesRimGeo, mplane]);
    }
  }

  const hoursRimMesh = new Mesh(
    hoursRimGeo,
    mat.basic.opaque(),
  );
  const minutesRimMesh = new Mesh(
    minutesRimGeo,
    mat.basic.transparent(0.2),
  );

  const circleMesh = new Mesh(
    new CircleGeometry(1, 30), 
    mat.basic.transparent(1)
  );

  
  const atomMesh1 = atom(1, 0.925, "small");
  atomMesh1.position.set(7, 0, 0);

  const lineAtom1 = new Mesh(
    new PlaneGeometry(7, 0.085),
    mat.basic.transparent(0.1),
  );
  lineAtom1.position.set(3.5, 0, 0);

  const hourRotGroup = new Group();
  hourRotGroup.add(atomMesh1, lineAtom1);



  const atomMesh2 = atom(0.9, 0.75, "small");
  atomMesh2.position.set(+9, 0, 0);
  atomMesh2.rotateZ(1.5); // give it an initial offset that is different from the other one

  const lineAtom2 = new Mesh(
    new PlaneGeometry(9, 0.085),
    mat.basic.transparent(0.15),
  );
  lineAtom2.position.set(+4.5, 0, 0);

  const minutesRotGroup = new Group();
  minutesRotGroup.add(atomMesh2, lineAtom2);


  const group = new Group();
  group.add(hourRotGroup, minutesRotGroup, hoursRimMesh, minutesRimMesh, circleMesh);


  let outerRingMesh;
  let outerCircle;
  if(outerRing) {
    outerRingMesh = new Mesh(
      // new RingGeometry(13, 12.9, 80),
      new RingGeometry(12.7, 12.6, 80),
      mat.basic.opaque()
    );

    group.add(outerRingMesh);

    const outerCircleMesh = new Mesh(
      new CircleGeometry(0.5, 30), 
      mat.basic.opaque(),
    );
    outerCircleMesh.position.set(12.7, 0, 0);
   
    // we need a group otherwise the mesh itself would rotate
    // along it's local space z-axis *before* being translated
    // with a group, since it's centered at 0,0,0 the rotation
    // would be as we expect
    outerCircle = new Group();
    outerCircle.add(outerCircleMesh);

    group.add(outerCircle);
  }

  return {
    group,
    atom1: atomMesh1,
    atom2: atomMesh2,
    circle: circleMesh,
    hoursRim: hoursRimMesh,
    minutesRim: minutesRimMesh,
    hourRotGroup, 
    minutesRotGroup,
    outerCircle,
  };
}