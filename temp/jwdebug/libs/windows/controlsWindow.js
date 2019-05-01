class ControlsWindow {
    constructor() {

        let uploadSections = document.querySelector(".controls-grid").getElementsByClassName("upload-section");




        let pd = e => {
            e.preventDefault();
            e.stopPropagation();
        };
        let ds = e => {
            e.currentTarget.classList.add("drag");
        };
        let de = e => {
            e.currentTarget.classList.remove("drag");
        };

        for(let i = 0; i < uploadSections.length; i++) {
            let sectionElement = uploadSections[i];
            let anchor = sectionElement.querySelector("a");
            let fileInput = sectionElement.querySelector('input[type="file"]');
            anchor.addEventListener("click", e => {
                fileInput.click();
            });
            fileInput.addEventListener("change", e => {
                var files = fileInput.files;
                filesSelected(files);
            });

            sectionElement.addEventListener("dragover", pd);
            sectionElement.addEventListener("dragenter", pd);
    
            sectionElement.addEventListener("dragover", ds);
            sectionElement.addEventListener("dragenter", ds);
    
            sectionElement.addEventListener("dragend", de);
            sectionElement.addEventListener("dragleave", de);
            sectionElement.addEventListener("drop", de);
    
            sectionElement.addEventListener("drop", e => {
                e.preventDefault();
    
                var dt    = e.dataTransfer;
                var files = dt.files;
                
                filesSelected(files);
            });

            function filesSelected(files) {
                for (var i=0; i < files.length; i++) {
                    var file = files[i];
                    var reader = new FileReader();
                      
                    reader.addEventListener("load", function () {
                        let result = reader.result;
    
                        if(sectionElement.classList.contains("shirt-obj"))         ShirtOBJDropped(sectionElement, result, file);
                        if(sectionElement.classList.contains("mannequin-obj"))     MannequinOBJDropped(sectionElement, result, file);
                        if(sectionElement.classList.contains("diffuse"))           DiffuseTextureDropped(sectionElement, result, file);
                        if(sectionElement.classList.contains("normal"))            NormalTextureDropped(sectionElement, result, file);
                        if(sectionElement.classList.contains("shirt-ao"))          ShirtAoTextureDropped(sectionElement, result, file);
                        if(sectionElement.classList.contains("shirt-roughness"))   ShirtRoughnessTextureDropped(sectionElement, result, file);
                        if(sectionElement.classList.contains("shirt-metalness"))   ShirtMetalnessTextureDropped(sectionElement, result, file);
                        if(sectionElement.classList.contains("shirt-fuzz"))        ShirtFuzzTextureDropped(sectionElement, result, file);
                        if(sectionElement.classList.contains("env"))               EnvironmentMapDropped(sectionElement, result, file);
                        if(sectionElement.classList.contains("radiance"))          RadianceMapDropped(sectionElement, result, file);
                        if(sectionElement.classList.contains("mannequin-diffuse")) MannequinDiffuseTextureDropped(sectionElement, result, file);
                        if(sectionElement.classList.contains("mannequin-mask"))    MannequinMaskTextureDropped(sectionElement, result, file);
                        if(sectionElement.classList.contains("mannequin-roughness")) MannequinRoughnessTextureDropped(sectionElement, result, file);
                        if(sectionElement.classList.contains("mannequin-metalness")) MannequinMetalnessTextureDropped(sectionElement, result, file);
                        if(sectionElement.classList.contains("mannequin-ao"))      MannequinAOTextureDropped(sectionElement, result, file);
                        if(sectionElement.classList.contains("mannequin-normal"))  MannequinNormalTextureDropped(sectionElement, result, file);
    
                    }, false);
                   
                    reader.readAsDataURL(file);
                }
            }
        }


        let sceneObjectEnvmapIntensity = 1; // might be changed by the slider
        let sceneDownloadAnchor = document.querySelector(".upload-scene-objects .file-input-par a");
        let sceneScalingCheckbox = document.querySelector('.upload-scene-objects input[type="checkbox"]');
        let sceneFileInput = document.querySelector('.upload-scene-objects input[type="file"]');
        sceneDownloadAnchor.addEventListener("click", e => {
            sceneFileInput.click();
        });
        sceneFileInput.addEventListener("change", e => {
            var files = sceneFileInput.files;
            sceneFilesSelected(files);
        });
        // sceneScalingCheckbox.addEventListener("change", e => {
        //     console.log(sceneScalingCheckbox.checked);
        // });
        function sceneFilesSelected(files) {
            
            let obj;
            let diffuseTexture;
            let normalTexture;
            let aoTexture;
            let roughnessTexture;
            let metalnessTexture;
            let count = files.length;

            console.log(files);
            
            for (let i=0; i < files.length; i++) {
                let file = files[i];
                let reader = new FileReader();

                  
                reader.addEventListener("load", function () {
                    console.log("file read: " + file.name);
                    console.log("file read result: " + reader.result);

                    let result = reader.result;
                    if(file.name.includes(".obj")) obj = result;
                    if(file.name.includes("_diffuse")) diffuseTexture = result;
                    if(file.name.includes("_normal")) normalTexture = result;
                    if(file.name.includes("_occlusion")) aoTexture = result;
                    if(file.name.includes("_roughness")) roughnessTexture = result;
                    if(file.name.includes("_metalness")) metalnessTexture = result;

                    onSceneFilesReady();
                }, false);
               
                reader.readAsDataURL(file);
            }

            function onSceneFilesReady() {
                count--;
                if(count > 0) return; // there's still some files to parse / load

                app.webGLViewer.load(
                    {
                        root: [
                            {
                                "type"           : "SCENE_OBJECT",
                                "objPath"        : obj,
                                "diffusePath"    : diffuseTexture,
                                "aoPath"         : aoTexture,
                                "normalPath"     : normalTexture,
                                "roughnessPath"  : roughnessTexture,
                                "metalnessPath"  : metalnessTexture,
                                "envMapIntensity": sceneObjectEnvmapIntensity,
                            }
                        ]
                    },
                    function() {
                        let mesh = app.webGLViewer.scene.getObjectByName("sceneObject");
                        // mesh.scale.set(0.2, 0.2, 0.2);
                        app.webGLViewer.render();
                    }
                );
            }
        }








        let scaleFactor;
        let yTransl; 
        let xTransl; 
        let zTransl; 

        let commonFunc = function(asset, element, result, file, callback) {
            element.querySelector("p span").textContent = file.name;

            app.webGLViewer.load(
                {
                    root: [
                        asset
                    ]
                },
                function() {
                    if(callback) callback();
                    app.webGLViewer.render();
                }
            );
        }






        var SceneEnvmapIntensitySlider = new rSlider({
            target: document.querySelector(".slider-scene-envmap-intensity"), //'#slider',  
            scale:    false,
            width: 110,
            step: 0.05,
            set: [1],
            values: {min: 0, max: 3},
            range: false, // range slider
            onChange: function(value) {
                sceneObjectEnvmapIntensity = parseFloat(value);
            },
            labels:   false,
        });



        this.renderer = new THREE.WebGLRenderer( { antialias: true, /*alpha: true*/ } );
    }












    initORMCreator() {

        document.querySelector(".orm-generator").addEventListener("click", function() {




            let canvas    = document.getElementById("canvas-orm-generator");
            canvas.width  = 4000;
            canvas.height = 4000;
            canvas.style.width  = canvas.parentElement.clientWidth * 0.8 + "px";
            canvas.style.height = canvas.parentElement.clientWidth * 0.8 + "px";
    
    
            let renderer = new THREE.WebGLRenderer( { antialias: true, /*alpha: true*/ } );
            renderer.setSize( canvas.width, canvas.height );
    
            let camera = new THREE.PerspectiveCamera( 20, innerWidth / innerHeight, 1, 200 );
            camera.position.set(0, 0, 10);
            let scene = new THREE.Scene();
    
            // let offScreenFB = new THREE.WebGLRenderTarget(200, 200, { depthBuffer: false, stencilBuffer: false });
    
            let meshVertexShader = `
            varying vec2 vUv;
                   void main() {
                gl_Position = vec4(position, 1.0); 
                vUv = uv;
            }`;
                   let meshFragmentShader = `
            uniform sampler2D shirtAoTexture;
            uniform sampler2D shirtRoughnessTexture;
            uniform sampler2D shirtMetalnessTexture;
            
            varying vec2 vUv;
                   void main() {
                vec4 ao        = texture2D(shirtAoTexture, vUv);
                vec4 roughness = texture2D(shirtRoughnessTexture, vUv);
                vec4 metalness = texture2D(shirtMetalnessTexture, vUv);
                gl_FragColor = vec4(ao.x, roughness.x, metalness.x, 1.0);
            }`;
                          var planegeo = new THREE.PlaneBufferGeometry( 2, 2 );
            var planemat = new THREE.ShaderMaterial( {
                uniforms: {
                    shirtAoTexture:        { type: "t", value: app.webGLViewer.shirtAoTexture },
                    shirtRoughnessTexture: { type: "t", value: app.webGLViewer.shirtRoughnessTexture },
                    shirtMetalnessTexture: { type: "t", value: app.webGLViewer.shirtMetalnessTexture },
                },
                vertexShader: meshVertexShader,
                fragmentShader: meshFragmentShader
            } );
                   var planeMesh = new THREE.Mesh(planegeo, planemat);
            scene.add(planeMesh);
                   renderer.render(scene, camera);
    
    
    
            let context = canvas.getContext("2d");
            context.fillStyle = 'red';
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.drawImage(renderer.domElement, 0, 0, canvas.width, canvas.height);
    
    
    
    
            
            var date = new Date();
            const a = document.createElement('a');
            const bitmap = canvas.toDataURL("image/png");
            a.href = bitmap.replace("image/png", "image/octet-stream");
            a.download = "canvas " + date.valueOf() + '.jpg';
            a.click();





        });
    }

    initAlbedoMoireFix() {

        document.querySelector(".albedo-moire-fix").addEventListener("click", () => {

            this.renderer.setSize( 2048, 2048 );

            var maskScene = new THREE.Scene();

            // get texture pixels
            function getImageData( image ) {

                var canvas = document.createElement( 'canvas' );
                canvas.width = image.width;
                canvas.height = image.height;
            
                var context = canvas.getContext( '2d' );
                context.drawImage( image, 0, 0 );
            
                return context.getImageData( 0, 0, image.width, image.height );
            
            }
            
            function getPixel( imagedata, x, y ) {

                var position = ( x + imagedata.width * y ) * 4, data = imagedata.data;
                return { r: data[ position ], g: data[ position + 1 ], b: data[ position + 2 ], a: data[ position + 3 ] };
            }


            let image = app.webGLViewer.shirtTexture.image;
            let imagedata = getImageData( image );

            var model = app.webGLViewer.scene.getObjectByName("shirtmodel").clone();


            let SAMPLES = 25000;
            let triangleCount = model.geometry.attributes.position.array.length / 9;
            let posArray = model.geometry.attributes.position.array;
            let uvArray = model.geometry.attributes.uv.array;
            var uvs = model.geometry.attributes.uv.array;
            let pixelAccum = { r: 0, g: 0, b: 0 };
            let areaAccum = 0;  // each sample weights as much as his area in world space
            let uvCenter = [];

            for(let i = 0; i < triangleCount; i++) {
                let t1u = uvArray[i * 6 + 0]; 
                let t1v = uvArray[i * 6 + 1];
             
                let t2u = uvArray[i * 6 + 2]; 
                let t2v = uvArray[i * 6 + 3];
             
                let t3u = uvArray[i * 6 + 4]; 
                let t3v = uvArray[i * 6 + 5];

                for(let r = 0; r < 3; r++) {
                    uvCenter.push((t1u + t2u + t3u) / 3);
                    uvCenter.push((t1v + t2v + t3v) / 3);
                }
            }
            model.geometry.addAttribute( 'uvCenter', new THREE.BufferAttribute( new Float32Array(uvCenter), 2 ) );

            for(let i = 0; i < SAMPLES; i++) {
                let triangleIndex = Math.floor(Math.random() * triangleCount);

                let v1x = posArray[triangleIndex * 9 + 0];
                let v1y = posArray[triangleIndex * 9 + 1];
                let v1z = posArray[triangleIndex * 9 + 2];
             
                let v2x = posArray[triangleIndex * 9 + 3];
                let v2y = posArray[triangleIndex * 9 + 4];
                let v2z = posArray[triangleIndex * 9 + 5];
             
                let v3x = posArray[triangleIndex * 9 + 6];
                let v3y = posArray[triangleIndex * 9 + 7];
                let v3z = posArray[triangleIndex * 9 + 8];


                
                // area of triangle:
                // abs of  -->  0.5 * ((x3y2 - x2y3) - (x3y1 - x1y3) + (x2y1 - x1y2))
                // from: https://www.toppr.com/guides/maths/determinants/area-triangle-using-determinants/
                // let a = new THREE.Vector3(v1x, v1y, v1z);
                // let b = new THREE.Vector3(v2x, v2y, v2z);
                // let c = new THREE.Vector3(v3x, v3y, v3z);
                let ab = new THREE.Vector3(v2x - v1x, v2y - v1y, v2z - v1z);
                let ac = new THREE.Vector3(v3x - v1x, v3y - v1y, v3z - v1z);
                let cross = ab.clone().cross(ac);
                let area = 0.5 * cross.length();
                areaAccum += area;

                let t1u = uvArray[triangleIndex * 6 + 0]; 
                let t1v = uvArray[triangleIndex * 6 + 1];
             
                let t2u = uvArray[triangleIndex * 6 + 2]; 
                let t2v = uvArray[triangleIndex * 6 + 3];
             
                let t3u = uvArray[triangleIndex * 6 + 4]; 
                let t3v = uvArray[triangleIndex * 6 + 5];

                let uCenter = (t1u + t2u + t3u) / 3;
                let vCenter = (t1v + t2v + t3v) / 3;

                                                                           // 1 - vCenter because the image is flipped when working with canvas 
                let pixelSample = getPixel(imagedata, Math.floor(uCenter * image.width), Math.floor((1 - vCenter) * image.height));
                pixelAccum.r += (pixelSample.r / 255) * area;
                pixelAccum.g += (pixelSample.g / 255) * area;
                pixelAccum.b += (pixelSample.b / 255) * area;
            }





            pixelAccum.r /= areaAccum;
            pixelAccum.g /= areaAccum;
            pixelAccum.b /= areaAccum;


            maskScene.background = new THREE.Color(pixelAccum.r, pixelAccum.g, pixelAccum.b);
          
         
            let meshMaskVertexShader = `
            attribute vec2 uvCenter;

            varying vec2 vUv;
            void main() {
                vec2 ndcUVcenter = uvCenter * 2.0 - 1.0;
                vec2 position = uv * 2.0 - 1.0;
                vec2 offset = normalize(position - ndcUVcenter) * 0.003;
                
                position += offset;
                gl_Position = vec4(position, 0.0, 1.0); 
                
                vUv = position * 0.5 + 0.5;
            }`;
        
            let meshMaskFragmentShader = `
            varying vec2 vUv;

            uniform sampler2D map;

            void main() {
                gl_FragColor = texture2D(map, vUv);
            }`;
        
            app.webGLViewer.shirtTexture.magFilter = THREE.NearestFilter;
            app.webGLViewer.shirtTexture.minFilter = THREE.NearestFilter;

            var maskMaterial = new THREE.ShaderMaterial( {
                uniforms: {
                    map: { type: "t", value: app.webGLViewer.shirtTexture },
                },
                vertexShader: meshMaskVertexShader,
                fragmentShader: meshMaskFragmentShader
            } );
            model.material = maskMaterial;

            maskScene.add(model);
            this.renderer.render(maskScene, app.webGLViewer.camera);


            // document.body.appendChild(this.renderer.domElement);

    
            
            let dataURL = this.renderer.domElement.toDataURL("image/png");

            $.ajax({
                type: "POST",
                url: "php/albedo-moire-fix.php",
                data: { 
                   imgBase64: dataURL
                }
            }).done(function(o) {
                console.log('saved'); 
            });

            maskMaterial.dispose();
        });
    }
}