function EnvmapFilters(effects, renderer) {

    var blur       = effects.blur;
    var brightness = effects.brightness;
    var size       = effects.size;

    var camera = new THREE.PerspectiveCamera( 20, innerWidth / innerHeight, 1, 200 );
    camera.position.set(0, 0, 10);
    var scene = new THREE.Scene();

    var textureA = new THREE.WebGLRenderTarget( size, size / 2, { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter});
	var textureB = new THREE.WebGLRenderTarget( size, size / 2, { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter});

    let meshVertexShader = `
    varying vec2 vUv;

    void main() {
        gl_Position = vec4(position, 1.0); 

        vUv = uv;
    }`;

    let meshFragmentShader = `
    uniform sampler2D inputTexture;
    uniform float     sampleSpacing;
    uniform float     mult;

    varying vec2 vUv;


    const float PI = 3.14159265359;



    vec3 directionFromAngles(float phi, float theta) {
        float x = cos(phi) * sin(theta);
        float y = cos(theta);
        float z = sin(phi) * sin(theta);

        return normalize(vec3(x, y, z));
    }

    vec2 uvsFromAngles(float phi, float theta) {
        phi   = mod(phi, PI * 2.0);

        if(theta > PI) {
            theta = theta > PI ?   PI * 2.0 - theta     : theta;
            phi += PI;      // se theta è maggiore di 180 va invertita la direzione di phi
            phi = mod(phi, PI * 2.0);
        }

        return vec2(phi / (PI * 2.0), 1.0 - theta / PI);
    }


    void main() {
        // vec4 col = texture2D(inputTexture, vUv);


    /*************

        0°       > >        360°    phi
             ________________
            |                |
        v   |                |
        v   |                |
            |________________|

        180°

        theta

    **************/


        float phi   = vUv.x * PI * 2.0;
        float theta = (1.0 - vUv.y) * PI;

        vec3 accum = vec3(0.0);

        for(float i = -2.0; i <= 2.0; i++)
        for(float j = -2.0; j <= 2.0; j++) {
            float sphi   = phi   + i * sampleSpacing;
            float stheta = theta + j * sampleSpacing;

            vec2 uvs = uvsFromAngles(sphi, stheta);
            accum += texture2D(inputTexture, uvs).rgb;
        }

        accum /= 25.0;
        accum *= mult;


        // This one looks cool!
        // vec3 sphericalDir = directionFromAngles(phi, theta);
        // gl_FragColor = vec4(sphericalDir * 0.5 + 0.5, 1.0);

        gl_FragColor = vec4(accum.rgb, 1.0);
    }`;


    var planegeo = new THREE.PlaneBufferGeometry( 2, 2 );
    var planemat = new THREE.ShaderMaterial( {
        uniforms: {
            inputTexture: { type: "t", value: null /* textureA.texture */ },
            
            sampleSpacing: { value: 0.01 },
            mult: { value: 1 }
        },
        vertexShader: meshVertexShader,
        fragmentShader: meshFragmentShader
    } );

    var planeMesh = new THREE.Mesh(planegeo, planemat);
    scene.add(planeMesh);


    this.applyFilters = function(inputEnvmap) {

        // if we have nothing to do, just return the inputEnvmap unchanged
        if(blur === 0 && brightness === 1) return inputEnvmap;

        
        planemat.uniforms.inputTexture.value = inputEnvmap;
        planemat.uniforms.sampleSpacing.value = 0.01 * blur;
        planemat.uniforms.mult.value = brightness;
    
        for(let i = 0; i < 2; i++) {
            renderer.render( scene, camera, textureA );
            planemat.uniforms.inputTexture.value = textureA.texture;
            planemat.uniforms.sampleSpacing.value *= 1 + 1.5 * blur;
            // planemat.uniforms.sampleSpacing.value += 0.001;
    
            renderer.render( scene, camera, textureB );
            planemat.uniforms.inputTexture.value = textureB.texture;
            planemat.uniforms.sampleSpacing.value *= 1 + 1.5 * blur; 
            // planemat.uniforms.sampleSpacing.value += 0.001;
        }
    
        renderer.render( scene, camera, textureA );

        return textureA.texture;
    };
}