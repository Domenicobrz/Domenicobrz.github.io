window.addEventListener('load', pageInit);

var container;
var camera, scene, renderer;
var meshes = [];
var nMeshes = 16;

function pageInit() {

    container = document.createElement('div');
    document.body.appendChild(container);


    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);



    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mouseup', onMouseUp);



    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 2, 200);
    camera.position.z = -20;
    camera.position.y = 20;
    camera.position.x = -40;

    scene = new THREE.Scene();


    var pointLight = new THREE.PointLight(0xff4545, 20, 100, 3);
    pointLight.castShadow = true;
    // pointLight.shadow.camera.near = 1;
    // pointLight.shadow.camera.far = 100;
    // pointLight.shadowCameraVisible = true;
    pointLight.shadow.bias = 0.001;
    pointLight.shadow.mapSize.width = 2048;
    pointLight.shadow.mapSize.height = 2048;
    pointLight.position.set(20, 50, 20);
    scene.add(pointLight);


    var bluepointLight = new THREE.PointLight(0x3545ff, 20, 100, 3);
    bluepointLight.castShadow = true;
    // pointLight.shadow.camera.near = 1;
    // pointLight.shadow.camera.far = 100;
    // pointLight.shadowCameraVisible = true;
    bluepointLight.shadow.bias = 0.001;
    bluepointLight.shadow.mapSize.width = 2048;
    bluepointLight.shadow.mapSize.height = 2048;
    bluepointLight.position.set(-20, 50, 20);
    scene.add(bluepointLight);



    texture = THREE.ImageUtils.loadTexture("texture.jpg");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(50, 50);
    var planegeometry = new THREE.PlaneGeometry(1000, 1000, 1, 1);
    var planematerial = new THREE.MeshPhongMaterial({ color: 0x777777, map: texture });
    window.planemesh = new THREE.Mesh(planegeometry, planematerial);
    planemesh.receiveShadow = true;
    scene.add(planemesh);



    var cubeGeo = new THREE.BoxGeometry(2, 2, 2, 10, 10);

    for (var i = 0; i < nMeshes; i++) {
        var cubeMaterial = new THREE.MeshPhongMaterial({ color: new THREE.Color(Math.random(), Math.random(), Math.random()) });
        var cubemesh = new THREE.Mesh(cubeGeo, cubeMaterial);
        cubemesh.castShadow = true;
        cubemesh.receiveShadow = true;
        meshes.push(cubemesh);
        scene.add(cubemesh);
    }


    initDOF();
    initCannon();

    window.controls = new THREE.OrbitControls(camera, renderer.domElement);

    
    animate(0);
}

var then = 0;
function animate(now) {
    requestAnimationFrame(animate);

    now *= 0.001;
    var deltatime = now - then;
    then = now;

    world.step(1 / 60);
    updatePhysics();


    // camera.lookAt(scene.position);
    // controls.update();
    // renderer.render(scene, camera);

    rendererDOF(scene, camera, renderer);
}

function initCannon() {
    window.bodies = [];
    window.world = new CANNON.World();
    world.broadphase = new CANNON.NaiveBroadphase();
    world.gravity.set(0, -10, 0);
    world.solver.tolerance = 0.001;

    // Ground plane
    var plane = new CANNON.Plane();
    var groundBody = new CANNON.Body({ mass: 0 });
    groundBody.addShape(plane);
    groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    world.add(groundBody);
    

    // Create N cubes
    var shape = new CANNON.Box(new CANNON.Vec3(1, 1, 1));
    for (var i = 0; i !== nMeshes; i++) {
        var body = new CANNON.Body({ mass: 1 });
        body.addShape(shape);
        body.position.set(Math.random() - 0.5, 16 * i + 0.5, Math.random() - 0.5);
        world.add(body);
        bodies.push(body);
    }

    // Joint body
    var shape = new CANNON.Sphere(0.1);
    jointBody = new CANNON.Body({ mass: 0 });
    jointBody.addShape(shape);
    jointBody.collisionFilterGroup = 0;
    jointBody.collisionFilterMask = 0;
    world.add(jointBody);
    bodies.push(jointBody);
}

function updatePhysics() {


    for (var i = 0; i !== world.bodies.length - 1; i++) {
        var b = world.bodies[i],
            p = b.position,
            q = b.quaternion;

        if (i === 0) {
            planemesh.position.set(p.x, p.y, p.z);
            planemesh.quaternion.set(q.x, q.y, q.z, q.w);
        } else {
            meshes[i - 1].position.set(p.x, p.y, p.z);
            meshes[i - 1].quaternion.set(q.x, q.y, q.z, q.w);
        }
    }
}


