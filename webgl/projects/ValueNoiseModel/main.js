window.addEventListener('load', pageInit);

var container;
var camera, scene, renderer;

function pageInit() {

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    container = document.createElement('div');
    document.body.appendChild(container);
    container.appendChild(renderer.domElement);


    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.z = 300;
    window.controls = new THREE.OrbitControls(camera, renderer.domElement);

    scene = new THREE.Scene();

    var sphere = new THREE.SphereGeometry( 100, 100, 100 );
    window.material = new THREE.ShaderMaterial({
	    uniforms: {
    		time: { value: 1.0 },
    		// resolution: { value: new THREE.Vector2() }
	    },
	    vertexShader: document.getElementById( 'mainv' ).textContent,
	    fragmentShader: document.getElementById( 'mainf' ).textContent
    });

    var mesh = new THREE.Mesh( sphere, material);
    scene.add(mesh);

    animate(0);
}

function animate(now) {
    requestAnimationFrame(animate);

    window.material.uniforms.time = { value: now * 0.001 };

    camera.lookAt(scene.position);
    controls.update();
    renderer.render(scene, camera);
}