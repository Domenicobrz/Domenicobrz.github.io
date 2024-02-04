import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Mesh,
  SphereGeometry,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PointLight,
  Color,
  AmbientLight,
  Vector3,
} from "./three.module.min.js";
import { TextGeometry } from "./TextGeometry.js";
import { OrbitControls } from "./OrbitControls.js";
import { FontLoader } from "./FontLoader.js";
import { mergeVertices } from "./BufferGeometryUtils.js";

let renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

let scene = new Scene();

let camera = new PerspectiveCamera(45, innerWidth / innerHeight, 1, 500);
camera.position.set(0, 0, 30);

let controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);

let pointLight = new PointLight(new Color(1, 1, 1), 100, 10000);
pointLight.position.set(-10, 5, 5);
scene.add(pointLight);

let ambientLight = new AmbientLight(new Color(1, 1, 1), 0.05);
scene.add(ambientLight);

let pt = new Vector3(-19, 4);

// to create the font jsons:
// https://gero3.github.io/facetype.js/
const loader = new FontLoader();
const font = loader.load(
  "fonts/Work Sans Medium_Regular.json",
  function (font) {
    let geometry = new TextGeometry("Bevel test - Curve segments: 4", {
      font: font,
      size: 1,
      height: 0.1,
      curveSegments: 4,
      bevelEnabled: true,
      bevelThickness: 0.25,
      bevelSize: 0.08,
      bevelOffset: 0,
      bevelSegments: 1,
    });
    // text geometry sadly doesn't output indexed vertices so we have to do it
    // manually
    geometry = mergeVertices(geometry, 1e-4);

    outputVertexCount(
      geometry.attributes.position.count,
      new Vector3(22.5, 0, 0).add(pt),
      font
    );

    const beveledMesh = new Mesh(
      geometry,
      new MeshStandardMaterial({ color: "white", roughness: 1 })
    );
    beveledMesh.position.add(pt);
    scene.add(beveledMesh);

    for (let i = 8; i > 0; i--) {
      let geometry = new TextGeometry("Curve segments: " + i, {
        font: font,
        size: 1,
        height: 0,
        curveSegments: i,
        bevelEnabled: false,
      });
      // text geometry sadly doesn't output indexed vertices so we have to do it
      // manually
      geometry = mergeVertices(geometry, 1e-4);

      const mesh = new Mesh(
        geometry,
        new MeshBasicMaterial({
          color: "white",
        })
      );

      mesh.position.set(0, (8 - i) * -1.2 - 2, 0);
      mesh.position.add(pt);

      scene.add(mesh);

      outputVertexCount(
        geometry.attributes.position.count,
        new Vector3(13, (8 - i) * -1.2 - 2, 0).add(pt),
        font
      );
    }

    let n = 13;
    let ts = 0;
    for (let i = n; i > 0; i--) {
      const size = 1 - (n - i) * 0.075;
      let geometry = new TextGeometry("Varying text size rendering test", {
        font: font,
        size,
        height: 0,
        curveSegments: 12,
        bevelEnabled: false,
      });

      ts += size;

      const mesh = new Mesh(
        geometry,
        new MeshBasicMaterial({ color: "white" })
      );

      mesh.position.set(23, (n - i) * -0.2 - ts * 1.3 - 1, 0);
      mesh.position.add(pt);

      scene.add(mesh);
    }
  }
);

renderer.setAnimationLoop(() => {
  controls.update();
  renderer.render(scene, camera);
});

function outputVertexCount(count, textPosition, font) {
  const geometry = new TextGeometry("vertex count: " + count, {
    font: font,
    size: 0.5,
    height: 0,
    curveSegments: 5,
    bevelEnabled: false,
  });

  const mesh = new Mesh(geometry, new MeshBasicMaterial({ color: "white" }));

  mesh.position.copy(textPosition);
  scene.add(mesh);
}
