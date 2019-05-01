class WebGLViewer {
    constructor(width, height) {
        this.renderer = new THREE.WebGLRenderer( { antialias: true, /*alpha: true*/ } );
        this.renderer.autoClear = false;    
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( width, height );
        // this.renderer.domElement.style.position = "relative";

        // document.querySelector(".main-canvas-container").appendChild( renderer.domElement );
        
        // SHOULD BE ACTIVE IN THE DESKTOP / HDR VERSION
        // this.renderer.gammaInput = false;
        // this.renderer.gammaOutput = true;
        
        // SHOULD BE CONTROLLED WITH DATGUI.js
        // renderer.toneMappingExposure = 2;

        this.scene = new THREE.Scene();
        this.sceneCube = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera( 20, width / height, 1, 1000 );
        this.camera.position.z = 30 + 0.5 * 30;
        this.camera.position.y = 10;
        this.cameraCube = new THREE.PerspectiveCamera( 70, width / height, 1, 1000 );


        // prepare clock
        this.clock = new THREE.Clock();
        this.clock.start();


        // prepare controls (OrbitControls)
        this.preventOCRepaintInThisFrame = false;

        this.controls               = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target        = new THREE.Vector3(0, 0, 0);
        this.controls.maxDistance   = 1000;
        this.controls.minDistance   = 0;
        this.controls.minPolarAngle = Math.PI * 0.3;                                                   // radians
        this.controls.maxPolarAngle = Math.PI * 0.6;                                                   // radians
        
        this.controls.autoRotate = false;
        // this.controls.autoRotateSpeed = 60 / 36; // 36 seconds per round when fps is 60

        this.controls.addEventListener("change", (e) => {
            if(!this.preventOCRepaintInThisFrame) this.requestRerender(); //requestAnimationFrame(render); //();
            // since the OCRepaint prevention is for a single frame only, 
            // every time this function is called we need to reset this value to false
            this.preventOCRepaintInThisFrame = false;
        });
        this.controls.update();

        this.controls.addEventListener("rotation-request", (e) => {
            this.autorotate = false;
            this.controls.autorotate = false;
            this.controls.removeEventListener("rotation-request");
            // console.log("got here");
        });

        this.autorotate = false;
        this.initialAutoRotationRadius = this.camera.position.z;
        this.renderRequested = false;

        this._batchesUUIDcounter = 0;

        this.assetsLoader    = new AssetsLoader();
        this.envmapFilters   = new EnvmapFilters({
            blur: 0,
            brightness: 1,
            size: 1024,
        }, this.renderer);


        this._createAndCompileMaterials();
    }


    updateGarmentMatrices(translation, scale) {
        this._updateSceneTransforms({ type: "SHIRT_MODEL", translation: translation, scale: scale })
    }

    requestRerender() {
        if(!this.renderRequested) {
            this.renderRequested = true;
            requestAnimationFrame(this.render.bind(this));
        }
    }

    _autorotationRender(now) {
        if(this.autorotate)
            requestAnimationFrame(this._autorotationRender.bind(this));


        var cameraPositionCopy = new THREE.Vector2(this.camera.position.x, this.camera.position.z);
        var cameraPositionDir  = cameraPositionCopy.clone();
        cameraPositionDir.normalize();

        var radius = cameraPositionCopy.length();
        // var diff = this.camera.position.clone();
        // diff.sub(this.controls.target);
        // var radius = diff.length();
        // var offsetDirection = cameraPositionCopy.clone();
        // offsetDirection.sub(this.controls.target);
        // offsetDirection.normalize();

        var et = this.envMapRotation / 180 * Math.PI;
        var rotAnimOffset = -0.2; 
        var t = (this.controls.totalYaw - et - rotAnimOffset) % (Math.PI * 2);
        if (t < 0) t = Math.PI * 2 + t;
       
        var tt = ((t / (Math.PI * 2)) * 4) % 1;
        var ttt = 0;
        if(tt < 0.4) ttt = 1;
        if(tt > 0.4 && tt < 0.5) {
            ttt = 1 - Utils.smoothStep((tt - 0.4) / 0.1);
        }
        if(tt > 0.5 && tt < 0.9) {
            ttt = 0;
        }
        if(tt > 0.9) {
            ttt = Utils.smoothStep((tt - 0.9) / 0.1);
        }
        ttt = -ttt;

        // var radiusChange = Math.pow(Math.sin( t * 4 ) * 0.5 + 0.5, 4) * 5 + 5;
        var radiusChange = (ttt * 2 - 1) * 5;
        var newRadius = this.initialAutoRotationRadius + radiusChange;

        this.camera.position.set(cameraPositionDir.x * newRadius, this.camera.position.y, cameraPositionDir.y * newRadius);

        this.controls.update();
        this.requestRerender();
    }

    render() {
        // if (phpData.showStatsWidget && stats) {
        //     stats.update();
        // }
    
        // console.log("issued render call");
        // console.trace();
    
        // adjusting the skybox FOV depending on zoom level
        var cameraDistance = this.camera.position.length();
        var t = (cameraDistance - this.controls.minDistance) / (this.controls.maxDistance - this.controls.minDistance);
    
        this.cameraCube.fov = 60 + 20 * t;
        this.cameraCube.updateProjectionMatrix();
        this.cameraCube.rotation.copy( this.camera.rotation );
        // adjusting the skybox FOV depending on zoom level - END
    
        
        // console.log(clock.getElapsedTime());
        this.renderer.render( this.sceneCube, this.cameraCube);
        this.renderer.render( this.scene, this.camera );
    
        // see requestRerender() to understand why we're setting this variable to false 
        this.renderRequested = false;
    
        // console.log("call");
        // console.trace();
    }

    onResize(width, height, forceRender) {
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.cameraCube.aspect = width / height;
        this.cameraCube.updateProjectionMatrix();

        this.renderer.setSize( width, height );

        if(forceRender) this.render();
        else            this.requestRerender();
    }

    clearCachedMeshes() {
        this.assetsLoader.clearCache();
    }

    isLoadingSomething() {
        if(this.assetsLoader.isUnactive) return false;
        return true;
    }

    load(assets, finishCallback) {
        
        let priority = 10;
        // if the assets are a predownload, we're going to give to assign a lower priority to this batch
        // this way if a user requests a new size/combination while pre-download batches are queued inside the assets loader,
        // user request will be served first
        if(assets.predownload) 
            priority = 1;

        let predownload = !!assets.predownload;

        let batch = {
            assets: assets,
            priority: priority,
            uuid: this._batchesUUIDcounter++,
            onComplete: finishCallback,
            // if this set of assets is just a predownload, we don't need to attach the assetsLoaderUpdate function since
            // that function would apply changes in the scene, whereas we only need to cache predownloaded items (and this job is done by assetsLoader.js)
            onUpdate: predownload ? undefined : this._onAssetsLoaderUpdate.bind(this)
        };

        this.assetsLoader.load(batch);

        // console.log("loading batch with UUID: " + this._batchesUUIDcounter + " -- with priority: " + priority + " -- is it a predownload? : " + predownload);
    }

    /**
     * @return {Boolean} wether the mannequin mesh is present in the scene or not
     */
    sceneContainsMannequin() {
        return (this.scene.getObjectByName("mannequin") !== undefined);
    }


    _onAssetsLoaderUpdate(e) {
        if(e.asset.type == "MANNEQUIN_MODEL" || e.asset.type == "SHIRT_MODEL") 
            this._onModelPartLoaded(e);

        if(e.asset.type == "ENV_MAP")
            this._onEnvmapLoaded(e);

        if(e.asset.type == "SHIRT_TEXTURE")
            this._onShirtTextureLoaded(e);

        if(e.asset.type == "MANNEQUIN_TEXTURE")
            this._onMannequinTextureLoaded(e);

        if(e.asset.type == "SCENE_OBJECT")
            this._onSceneObjectLoaded(e);

        this._updateSceneMaterials(e.asset);
        this._updateSceneTransforms(e.asset);    
    }

    _onMannequinTextureLoaded(e) {
        let asset            = e.asset;
        let albedoTexture    = e.data.albedoTexture;
        let normalTexture    = e.data.normalTexture;
        let rmaTexture       = e.data.rmaTexture;
        let maskTexture      = e.data.maskTexture;
        let roughnessTexture = e.data.roughnessTexture;
        let metalnessTexture = e.data.metalnessTexture;
        let aoTexture        = e.data.aoTexture;

        if(albedoTexture) {
            this.mannequinAlbedo = albedoTexture;
            this.mannequinAlbedo.magFilter = THREE.LinearFilter;
            this.mannequinAlbedo.minFilter = THREE.LinearFilter;
        }

        if(normalTexture) {
            this.mannequinNormalTexture = normalTexture;
            // mannequinNormalTexture.magFilter = THREE.LinearFilter;
            // mannequinNormalTexture.minFilter = THREE.LinearFilter;
        }

        if(rmaTexture) {
            this.mannequinRMA = rmaTexture;
            this.mannequinRMA.magFilter = THREE.LinearFilter;
            this.mannequinRMA.minFilter = THREE.LinearFilter;
        }

        if(maskTexture) {
            this.mannequinMaskTexture = maskTexture;
            this.mannequinMaskTexture.magFilter = THREE.LinearFilter;
            this.mannequinMaskTexture.minFilter = THREE.LinearFilter;
        }

        if(roughnessTexture) {
            this.mannequinRoughnessTexture = roughnessTexture;
            this.mannequinRoughnessTexture.magFilter = THREE.LinearFilter;
            this.mannequinRoughnessTexture.minFilter = THREE.LinearFilter;
        }

        if(metalnessTexture) {
            this.mannequinMetalnessTexture = metalnessTexture;
            this.mannequinMetalnessTexture.magFilter = THREE.LinearFilter;
            this.mannequinMetalnessTexture.minFilter = THREE.LinearFilter;
        }

        if(aoTexture) {
            this.mannequinAoTexture = aoTexture;
            this.mannequinAoTexture.magFilter = THREE.LinearFilter;
            this.mannequinAoTexture.minFilter = THREE.LinearFilter;
        }
    }

    _onShirtTextureLoaded(e) {
        let asset         = e.asset;
        let albedoTexture = e.data.albedoTexture;
        let normalTexture = e.data.normalTexture;
        let fuzzTexture   = e.data.fuzzTexture;
        let aoTexture     = e.data.aoTexture;
        let roughnessTexture = e.data.roughnessTexture;
        let metalnessTexture = e.data.metalnessTexture;
        let ormTexture    = e.data.ormTexture;

        if(albedoTexture) {
            this.shirtTexture = albedoTexture;
            this.shirtTexture.magFilter = THREE.LinearFilter;
            this.shirtTexture.minFilter = THREE.LinearFilter;
        }

        if(normalTexture) {
            this.shirtNormalTexture = normalTexture;
            this.shirtNormalTexture.magFilter = THREE.LinearFilter;
            this.shirtNormalTexture.minFilter = THREE.LinearFilter;
        }

        if(ormTexture) {
            this.shirtORMTexture = ormTexture;
            this.shirtORMTexture.magFilter = THREE.LinearFilter;
            this.shirtORMTexture.minFilter = THREE.LinearFilter;
        }

        if(aoTexture) {
            this.shirtAoTexture = aoTexture;
            this.shirtAoTexture.magFilter = THREE.LinearFilter;
            this.shirtAoTexture.minFilter = THREE.LinearFilter;
        }

        if(roughnessTexture) {
            this.shirtRoughnessTexture = roughnessTexture;
            this.shirtRoughnessTexture.magFilter = THREE.LinearFilter;
            this.shirtRoughnessTexture.minFilter = THREE.LinearFilter;
        }

        if(metalnessTexture) {
            this.shirtMetalnessTexture = metalnessTexture;
            this.shirtMetalnessTexture.magFilter = THREE.LinearFilter;
            this.shirtMetalnessTexture.minFilter = THREE.LinearFilter;
        }

        if(fuzzTexture) {
            this.shirtFuzzTexture = fuzzTexture;
            this.shirtFuzzTexture.magFilter = THREE.LinearFilter;
            this.shirtFuzzTexture.minFilter = THREE.LinearFilter;
        }
    }

    _onEnvmapLoaded(e) {
        let asset = e.asset;
        let data  = e.data;
        let skyboxTexture   = data.skyboxTexture;
        let radianceTexture = data.radianceTexture;

        function initSkybox(texture) {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            texture = this.envmapFilters.applyFilters(texture);

            var cubemapGenerator = new THREE.EquirectangularToCubeGenerator( texture, 512 );
            this.cubeMapTexture = cubemapGenerator.update( this.renderer );

            let shader = THREE.ShaderLib.cube;
            shader.uniforms.tCube.value = this.cubeMapTexture;

            let vshader = `
            varying vec3 vWorldPosition;
            #include <common>
            void main() {
            	// vWorldPosition = transformDirection( position, modelMatrix );
            	vWorldPosition = position;
            	#include <begin_vertex>
            	#include <project_vertex>
            	gl_Position.z = gl_Position.w;
            }`;

            let material = new THREE.ShaderMaterial({
                vertexShader: vshader,
                fragmentShader: shader.fragmentShader,
                uniforms: shader.uniforms,
                depthWrite: false,
                side: THREE.BackSide
            });

            let cubeMesh = new THREE.Mesh( new THREE.BoxBufferGeometry( 100, 100, 100 ), material );
            cubeMesh.scale.set(1, 1, 1);

            while(this.sceneCube.children.length > 0) { 
                this.sceneCube.remove(this.sceneCube.children[0]); 
            }
            this.sceneCube.add( cubeMesh );
        }

        function initRadiancemap(texture) {
            var cubemapGenerator = new THREE.EquirectangularToCubeGenerator( texture, 512 );
            let cubeMapText = cubemapGenerator.update( this.renderer );

            var pmremGenerator = new THREE.PMREMGenerator( cubeMapText );
            pmremGenerator.update( this.renderer );

            var pmremCubeUVPacker = new THREE.PMREMCubeUVPacker( pmremGenerator.cubeLods );
            pmremCubeUVPacker.update( this.renderer );

            this.exrCubeRenderTarget = pmremCubeUVPacker.CubeUVRenderTarget;
        }

        if(skyboxTexture) initSkybox.call(this, skyboxTexture);
        if(radianceTexture) initRadiancemap.call(this, radianceTexture);
    }

    _onModelPartLoaded(e) {
        let asset = e.asset;
        // let geometry = e.data.geometry;

        let generatedMesh = e.data.mesh;

        let objectName = "mannequin";
        if(asset.type == "SHIRT_MODEL") objectName = "shirtmodel";

        let objectMaterial = this.mannequinMaterial;
        if(asset.type == "SHIRT_MODEL") objectMaterial = this.shirtMaterial;

        // overrides the placeholder material set by assetsLoader
        generatedMesh.material = objectMaterial;
        
        this._removeObjectFromScene(objectName);
        this.scene.add( generatedMesh );
    }

    _onSceneObjectLoaded(e) {
        let mesh = e.data.mesh;

        mesh.name = "sceneObject";

        let diffuseTexture = e.data.diffuseTexture !== undefined ? e.data.diffuseTexture : this._createBlackTexture();
        let aoTexture = e.data.aoTexture !== undefined ? e.data.aoTexture : this._createWhiteTexture();
        let roughnessTexture = e.data.roughnessTexture !== undefined ? e.data.roughnessTexture : this._createWhiteTexture();
        let metalnessTexture = e.data.metalnessTexture !== undefined ? e.data.metalnessTexture : this._createBlackTexture();
        let normalTexture = e.data.normalTexture !== undefined ? e.data.normalTexture : this._createDefaultNormalTexture();

        // let material = new THREE.MeshPhysicalMaterial({
        //     color:           0xffffff,
        //     roughness: 1,
        //     metalness: 1,

        //     envMap:          this.exrCubeRenderTarget.texture,
        //     envMapIntensity: 2, //e.asset.envMapIntensity,
        //     map:          diffuseTexture,            
        //     aoMap:        aoTexture,
        //     roughnessMap: roughnessTexture,
        //     metalnessMap: metalnessTexture,
        //     normalMap:    normalTexture,
        // });
        let material = new THREE.MeshBasicMaterial({
            color:           0xffffff,
            map:          diffuseTexture,            
        });
        mesh.material = material;

        // console.log(diffuseTexture);
        // console.log(this.exrCubeRenderTarget.texture);







        let pg = new THREE.PlaneBufferGeometry(2,2);
        let pm = new THREE.MeshBasicMaterial( {
            color:  0xffffff,
            map:    diffuseTexture,
            side: THREE.DoubleSide,  
        });
        let pme = new THREE.Mesh(pg, pm);
        this.scene.add(pme);




        // this.scene.add( mesh );
    }

    // /**
    //  * @param {*} geometry 
    //  * @param {*} material 
    //  * @param {*} name
    //  * @returns {THREE.Mesh} the mesh we're adding to the scene, used for caching
    //  */
    // _callbackModel( geometry, material, name ) {
    //     var mesh = new THREE.Mesh( geometry, material );

    //     var uvs = geometry.attributes.uv.array;
    //     geometry.addAttribute( 'uv2', new THREE.BufferAttribute( uvs, 2 ) );

    //     if (name !== undefined)
    //         mesh.name = name;

    //     return mesh;
    // }

    _removeObjectFromScene(name, rerender) {
        var mesh = this.scene.getObjectByName(name);

        if(mesh !== undefined) {
            this.scene.remove( mesh );
            // show the change
            if(rerender) this.requestRerender();
        }
    }





    _createAndCompileMaterials() {
    
        // ****************** Mannequin Material ********************
        this.default_mannequin_color          = 0xffffff;
        this.default_mannequin_roughness      = 0.175;
        this.default_mannequin_metallic       = 0.001;     // 0.001 so the multipliers can have an effect
        this.default_mannequin_reflectivity   = 0.01;  
        this.default_mannequin_envmap_intensity = 1.3;
        this.default_mannequin_albedo_map     = this._createWhiteTexture();
        this.default_mannequin_ao_map         = this._createWhiteTexture();
        // this.default_mannequin_RMA_texture    = this._createDefaultRMATexture();
        this.default_mannequin_mask_texture    = this._createBlackTexture();
        this.default_mannequin_roughness_texture = this._createWhiteTexture();
        this.default_mannequin_metalness_texture = this._createBlackTexture();
        this.default_mannequin_normal_texture = this._createDefaultNormalTexture();
        this.mannequinMaterial = new THREE.MeshPhysicalMaterial({
            // color: new THREE.Color(0xff0000),
            roughness: 1,
            metalness: 1,
            roughnessMap:    this.default_mannequin_roughness_texture,
            metalnessMap:    this.default_mannequin_metalness_texture,
            reflectivity:    this.default_mannequin_reflectivity,
            envMapIntensity: this.default_mannequin_envmap_intensity,
            aoMap:           this.default_mannequin_ao_map,
            normalMap:       this.default_mannequin_normal_texture,
            normalScale:     new THREE.Vector2(1.5, 1.5),
            map:             this.default_mannequin_albedo_map
        });

        // this.mannequinMaterial.userData.fuzzTexture = { value: this.default_mannequin_RMA_texture };
        this.mannequinMaterial.userData.maskTexture = { value: this.default_mannequin_mask_texture };
        this.mannequinMaterial.userData.uMannequinColor = { value: Utils.hexColorToTHREEVector3("#" + 
                                                                   "FFFFFF") };
                                                                   // localStorageManager.getBodydataKey("mannequin_color")) };

        this.mannequinMaterial.onBeforeCompile = (shader) => {
            let prependUniforms = 
            // "uniform sampler2D fuzzTexture;\n" +
            "uniform sampler2D maskTexture;\n" +
            "uniform vec3      uMannequinColor;\n";
            // shader.uniforms.fuzzTexture     = this.mannequinMaterial.userData.fuzzTexture;
            shader.uniforms.maskTexture     = this.mannequinMaterial.userData.maskTexture;
            shader.uniforms.uMannequinColor = this.mannequinMaterial.userData.uMannequinColor;

            // "unroll" the entire shader
            shader.fragmentShader = Utils.parseIncludes(shader.fragmentShader); 

            shader.fragmentShader = shader.fragmentShader.replace(
                // line to replace...
                "diffuseColor *= texelColor;", 
                // ...with:
                "vec4 maskdata = texture2D(maskTexture, vUv); \n" +
                "float maskValue = maskdata.r; \n" +
                // "vec4 mannequinColor = mapTexelToLinear(" + hexColorToFragmentString("#" + php_mannequin_color) + "); \n" +
                "vec4 mannequinColor = vec4(uMannequinColor, 1.0);" + // hexColorToFragmentString("#" + php_mannequin_color) + "; \n" +
                "diffuseColor *= texelColor * maskValue + (1.0 - maskValue) * (texelColor * mannequinColor); \n"
            );

            // shader.fragmentShader = shader.fragmentShader.replace(
            //     "gl_FragColor = linearToOutputTexel( gl_FragColor );", 

            //     "float fresnelStrenght = pow(1.0 - max(0.0, dot(geometry.normal, geometry.viewDir)),   5.0);\n" +
            //     "gl_FragColor.rgb += vec3(fresnelStrenght);\n" +
            //     "gl_FragColor = linearToOutputTexel( gl_FragColor );\n"
            // );

            shader.fragmentShader = prependUniforms + shader.fragmentShader;
        };
        // ****************** Mannequin Material - END ********************



        // ****************** Shirt Material ********************
        this.default_shirt_roughness        = 1;
        this.default_shirt_metallic         = 1;
        this.default_shirt_reflectivity     = 0;
        this.default_shirt_envmap_intensity = 1.25;
        this.default_shirt_map              = this._createWhiteTexture();
        this.default_shirt_aoMap            = this._createWhiteTexture();  // deprecated
        this.default_shirt_NormalMap        = this._createDefaultNormalTexture();
        this.default_shirt_ORMTexture       = this._createDefaultORMTexture();
        this.default_shirt_FuzzTexture      = this._createBlackTexture();

        this.shirtMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            // aoMap: default_shirt_aoMap, // default_shirt_aoMap is deprecated, use ORM maps instead
            map:          this.default_shirt_map,            
            aoMap:        this.default_shirt_ORMTexture,
            roughnessMap: this.default_shirt_ORMTexture,
            metalnessMap: this.default_shirt_ORMTexture,
            normalMap:    this.default_shirt_NormalMap,
            normalScale:  new THREE.Vector2(1.25, 1.25),
            // transparent:     true,
        });

        this.shirtMaterial.userData.fuzzTexture = { value: this.default_shirt_FuzzTexture };

        this.shirtMaterial.onBeforeCompile = (shader) => {
            let prependUniforms = 
            "uniform sampler2D fuzzTexture;\n";
            shader.uniforms.fuzzTexture = this.shirtMaterial.userData.fuzzTexture;

            // "unroll" the entire shader
            shader.fragmentShader = Utils.parseIncludes(shader.fragmentShader); 
            shader.fragmentShader = shader.fragmentShader.replace(
                "gl_FragColor = linearToOutputTexel( gl_FragColor );", 

                "vec4 fuzzTexel = texture2D(fuzzTexture, vUv2);\n" +
                "float fresnelStrenght = pow(1.0 - max(0.0, dot(geometry.normal, geometry.viewDir)),   fuzzTexel.a * 20.0);\n" +
                "gl_FragColor.rgb += fuzzTexel.rgb * fresnelStrenght;\n" +
                "gl_FragColor = linearToOutputTexel( gl_FragColor );\n"
            );

            shader.fragmentShader = prependUniforms + shader.fragmentShader;
        };


        this.exrCubeRenderTarget       = undefined;
        this.shirtTexture              = undefined;
        this.shirtNormalTexture        = undefined;
        this.shirtFuzzTexture          = undefined;
        this.shirtORMTexture           = undefined;
        this.shirtAoTexture            = undefined;
        this.shirtRoughnessTexture     = undefined;
        this.shirtMetalnessTexture     = undefined;
        this.cubeMapTexture            = undefined;
        this.mannequinAoTexture        = undefined;
        this.mannequinAlbedo           = undefined;
        this.mannequinNormalTexture    = undefined;
        this.mannequinMaskTexture      = undefined;
        this.mannequinRoughnessTexture = undefined;
        this.mannequinMetalnessTexture = undefined;
        this.mannequinRMA              = undefined;

        // list of multipliers to apply to the properties specified in materialDefaults
        this.envmapScalars = {
            // mannequin_roughness: 1,
	    	// mannequin_metallic: 1,
	    	mannequin_reflectivity: 1,
            mannequin_envMapIntensity: 1,

	    	shirt_roughness: 1,
	    	shirt_metallic: 1,
	    	shirt_reflectivity: 1,
            shirt_envMapIntensity: 1,

            iPhone6fix: 1,
        };
        // ****************** Shirt Material - END ********************

        this.mannequinTranslation = { x: 0, y: 0, z: 0 };
        this.mannequinScale = 1;
        this.envMapRotation = 0;   // specified in degrees, only in the jaw direction
        this.envMapTranslationY = 0;

        // assign hard-coded values as a fallback
        this.materialDefaults = {
            shirt_roughness:       this.default_shirt_roughness,
            shirt_metallic:        this.default_shirt_metallic,
            shirt_reflectivity:    this.default_shirt_reflectivity,
            shirt_envMapIntensity: this.default_shirt_envmap_intensity,
    
            // mannequin_color: default_mannequin_color
        };
    }




    /**
     * Function to be called as soon as anything requires a change in one of the materials of the scene
     * @param {object} [asset]  if an asset is specified, e.g. the shirt's model, we're going to apply
     *                          in order of priority the material's properties
     * */
    _updateSceneMaterials(asset) {

        // why can't I wrap this over an if statement along the line of:
        // if(asset.type == "ENV_MAP") {
        // assuming a new model is loaded, since it uses the same material reference
        // (which has already set in it the previous envmap texture)
        // it should be safe to apply this change ONLY if a new envmap is loaded 
        if(this.exrCubeRenderTarget !== undefined) {
            this.mannequinMaterial.envMap = this.exrCubeRenderTarget.texture;
            this.shirtMaterial.envMap     = this.exrCubeRenderTarget.texture;
        }

        if(asset.type == "SHIRT_TEXTURE") {
            if (this.shirtTexture !== undefined) {
                this.shirtMaterial.map = this.shirtTexture;
            }

            // attaching Normal texture
            if (asset.normalPath !== undefined) {
                this.shirtMaterial.normalMap = this.shirtNormalTexture;
            } 
           
            // attaching ORM textures
            if (asset.aoPath !== undefined) {
                this.shirtMaterial.aoMap        = this.shirtAoTexture;
            } 
            if (asset.roughnessPath !== undefined) {
                this.shirtMaterial.roughnessMap = this.shirtRoughnessTexture;
            } 
            if (asset.metalnessPath !== undefined) {
                this.shirtMaterial.metalnessMap = this.shirtMetalnessTexture;
            } 
            if (asset.fuzzPath !== undefined) {
                this.shirtMaterial.userData.fuzzTexture.value = this.shirtFuzzTexture;
            } 

        }

        if(asset.type == "MANNEQUIN_TEXTURE") {
            if (this.mannequinAlbedo !== undefined) {
                this.mannequinMaterial.map = this.mannequinAlbedo;
            }

            // attaching rma texture
            // if (asset.rmaPath !== undefined) {
            //     this.mannequinMaterial.userData.rmaTexture.value = this.mannequinRMA;
            // } 
            if (asset.maskPath !== undefined) {
                this.mannequinMaterial.userData.maskTexture.value = this.mannequinMaskTexture;
            } 
            if (asset.roughnessPath !== undefined) {
                this.mannequinMaterial.roughnessMap = this.mannequinRoughnessTexture;
            } 
            if (asset.metalnessPath !== undefined) {
                this.mannequinMaterial.metalnessMap = this.mannequinMetalnessTexture;
            } 
            //else {
            //    this.mannequinMaterial.userData.rmaTexture.value = this.default_mannequin_RMA_texture;
            //}
            // attaching rma texture - END

            // attaching AO texture
            if (asset.aoPath !== undefined) {
                this.mannequinMaterial.aoMap = this.mannequinAoTexture;
            } 
         
            // attaching normal texture
            if (asset.normalPath !== undefined) {
                this.mannequinMaterial.normalMap = this.mannequinNormalTexture;
            } 
        }


        /******  Applying model & mannequin's material values ******/
        
        // update materialDefaults properties
        if(asset.type == "SHIRT_MODEL") {
        
            this.materialDefaults = {
                shirt_roughness:       this.default_shirt_roughness,
                shirt_metallic:        this.default_shirt_metallic,
                shirt_reflectivity:    this.default_shirt_reflectivity,
                shirt_envMapIntensity: this.default_shirt_envmap_intensity,
        
                // mannequin_color: default_mannequin_color
            };

            // if materialDefaults is specified override previously saved properties
            if(asset.materialDefaults !== undefined) {

                if(asset.materialDefaults.shirt_roughness !== undefined)
                    this.materialDefaults.shirt_roughness = parseFloat(asset.materialDefaults.shirt_roughness);
            
                if(asset.materialDefaults.shirt_metallic !== undefined)
                    this.materialDefaults.shirt_metallic = parseFloat(asset.materialDefaults.shirt_metallic);

                if(asset.materialDefaults.shirt_reflectivity !== undefined)
                    this.materialDefaults.shirt_reflectivity = parseFloat(asset.materialDefaults.shirt_reflectivity);

                if(asset.materialDefaults.shirt_envMapIntensity !== undefined)
                    this.materialDefaults.shirt_envMapIntensity = parseFloat(asset.materialDefaults.shirt_envMapIntensity);

                // if(asset.materialDefaults.mannequin_color !== undefined)
                //     materialDefaults.mannequin_color = parseInt(asset.materialDefaults.mannequin_color);
            }
        }

        // update envmapScalars properties
        if(asset.type == "ENV_MAP") {

            for (var property in this.envmapScalars) {
                // assign fallback value of 1 to all envmapScalars properties
                if (this.envmapScalars.hasOwnProperty(property)) {
                    this.envmapScalars[property] = 1;
                }
                // if the envmap asset provides a scalar property assign it
                if(asset.materialScalars !== undefined && asset.materialScalars.hasOwnProperty(property)) {
                    this.envmapScalars[property] = parseFloat(asset.materialScalars[property]);
                }
            }
        }

        this.shirtMaterial.roughness       = this.materialDefaults.shirt_roughness       * this.envmapScalars.shirt_roughness;
        this.shirtMaterial.metalness       = this.materialDefaults.shirt_metallic        * this.envmapScalars.shirt_metallic;
        this.shirtMaterial.reflectivity    = this.materialDefaults.shirt_reflectivity    * this.envmapScalars.shirt_reflectivity;
        this.shirtMaterial.envMapIntensity = this.materialDefaults.shirt_envMapIntensity * this.envmapScalars.shirt_envMapIntensity; 
                                
        // mannequinMaterial.roughness       = default_mannequin_roughness * envmapScalars.mannequin_roughness;
        // mannequinMaterial.metalness       = default_mannequin_metallic * envmapScalars.mannequin_metallic;
        this.mannequinMaterial.reflectivity    = this.default_mannequin_reflectivity * this.envmapScalars.mannequin_reflectivity;
        this.mannequinMaterial.envMapIntensity = this.default_mannequin_envmap_intensity * this.envmapScalars.mannequin_envMapIntensity; 
        // mannequinMaterial.color           = new THREE.Color(this.materialDefaults.mannequin_color);
        this.mannequinMaterial.userData.uMannequinColor.value = 
                Utils.hexColorToTHREEVector3("#" + app.localStorageManager.getBodydataKey("mannequinColor"));
        


        // required for the IPhone6 convolution bug
        if(app.deviceInfo.isIPhone6) {
            this.mannequinMaterial.envMapIntensity *= this.envmapScalars.iPhone6fix;
            this.shirtMaterial.envMapIntensity     *= this.envmapScalars.iPhone6fix;
        }
        // required for the IPhone6 convolution bug - END

        // updateAdminGUIControls("material controls");
        /******  Applying model & mannequin's material values - END  ******/
    }

    _updateSceneTransforms(asset) {
        var mannequinMesh = this.scene.getObjectByName("mannequin");
        var shirtMesh     = this.scene.getObjectByName("shirtmodel");

        if (asset.type == "SHIRT_MODEL" || asset.type == "MANNEQUIN_MODEL") {
            if(asset.translation) {
                this.mannequinTranslation.x = asset.translation.x; 
                this.mannequinTranslation.y = asset.translation.y;
                this.mannequinTranslation.z = asset.translation.z;
            }
            if(asset.scale) {
                this.mannequinScale = asset.scale; 
            }
        }

        if (asset.type == "ENV_MAP") {
            // assign default values to be overridden if new are specified
            this.envMapRotation     = 0;
            this.envMapTranslationY = 0;
            
            if(asset.envMapRotation) {
                this.envMapRotation = asset.envMapRotation;
            } 
            if(asset.envMapTranslationY) {
                this.envMapTranslationY = asset.envMapTranslationY;
            }

            // ******** Rotating the camera along envMapRotation ********
            // spherical to cartesian

            // (r, theta, phi) -> (x, y, z)
            // r == sqrt(camera.x^2 + camera.y^2 + camera.z^2)
            // x == r * sin(theta) * cos(phi)
            // y == r * cos(theta)
            // z == r * sin(theta) * sin(phi)

            // we can simplify to 
            // x == r * cos(phi)
            // z == r * sin(phi)

            let cz = this.camera.position.z;
            let cx = this.camera.position.x;
            let r = Math.sqrt(cx*cx + cz*cz);
            // adding controls.totalYaw preserves relative rotations when changing envmaps.
            // e.g.  first envmap needs the model rotated of about 150 degrees (to get the lighting we're after)
            // then we rotate the camera of about 25 degrees (yaw rotation) this information is saved on controls.totalYaw
            // when we load a new envmap, it requires e.g. the model to be rotated by 60 degrees (again, for the proper
            // lighting to take place) and since we know how much we've rotated the camera previously (25 degrees) we
            // just sum these two values togheter to preserve relative rotations
            let phi = Utils.degToRadians(this.envMapRotation) + this.controls.totalYaw;
            this.camera.position.z = r * Math.cos(phi);
            this.camera.position.x = r * Math.sin(phi);

            // controls.update() was moved before render() in this.update();
            // updating controls here, before applying the rotation to the mannequin would lead to an 
            // unexpected result where the mannequin would be rendered twice
            // ******** Rotating the camera along envMapRotation ******** - END
        }


        var mannequinMatrix = new THREE.Matrix4();
        mannequinMatrix.identity();

        var mannequinScaleMatrix = new THREE.Matrix4();
        mannequinScaleMatrix.makeScale(this.mannequinScale, this.mannequinScale, this.mannequinScale);
    
        var mannequinTranslationMatrix = new THREE.Matrix4();
        mannequinTranslationMatrix.makeTranslation( this.mannequinTranslation.x, 
                                                    this.mannequinTranslation.y + this.envMapTranslationY, 
                                                    this.mannequinTranslation.z);

        var mannequinRotationMatrix = new THREE.Matrix4();
        mannequinRotationMatrix.makeRotationAxis(new THREE.Vector3(0, 1, 0), Utils.degToRadians(this.envMapRotation));


        var m1 = new THREE.Matrix4();
        m1.multiplyMatrices( mannequinMatrix, mannequinScaleMatrix );

        var m2 = new THREE.Matrix4();
        m2.multiplyMatrices( mannequinTranslationMatrix, m1 );

        var m3 = new THREE.Matrix4();
        m3.multiplyMatrices( mannequinRotationMatrix, m2 );
        

        if (mannequinMesh !== undefined) {
            mannequinMesh.matrix.copy(m3);
            mannequinMesh.matrixWorld.copy(m3);
            // it's important to set matrixAutoUpdate to false otherwise the world matrix is derived from
            // rotation, scale, position
            mannequinMesh.matrixAutoUpdate = false;    
            mannequinMesh.matrixWorldNeedsUpdate = true;    
        }


        if (shirtMesh !== undefined) {
            shirtMesh.matrix.copy(m3);
            shirtMesh.matrixWorld.copy(m3);
            // it's important to set matrixAutoUpdate to false otherwise the world matrix is derived from
            // rotation, scale, position
            shirtMesh.matrixAutoUpdate = false;    
            shirtMesh.matrixWorldNeedsUpdate = true;    
        }
    }
















    _createWhiteTexture() {
        var texRGBAdata = new Uint8Array(4 * 4 * 4);
        for(var i=0; i< 4 * 4; i++){
          // RGB from 0 to 255
          texRGBAdata[4*i] = texRGBAdata[4*i + 1] = texRGBAdata[4*i + 2] = 255;
          // OPACITY
          texRGBAdata[4*i + 3] = 255;
        }
        
        var texture = new THREE.DataTexture( texRGBAdata, 4, 4, THREE.RGBAFormat );
        texture.needsUpdate = true;
    
        return texture;
    }

    _createBlackTexture() {
        var texRGBAdata = new Uint8Array(4 * 4 * 4);
        for(var i=0; i< 4 * 4; i++){
          // RGB from 0 to 255
          texRGBAdata[4*i] = texRGBAdata[4*i + 1] = texRGBAdata[4*i + 2] = 0;
          // OPACITY
          texRGBAdata[4*i + 3] = 255;
        }
        
        var texture = new THREE.DataTexture( texRGBAdata, 4, 4, THREE.RGBAFormat );
        texture.needsUpdate = true;
    
        return texture;
    }
    
    _createDefaultRMATexture() {
        var texRGBAdata = new Uint8Array(4 * 4 * 4);
        for(var i=0; i< 4 * 4; i++){
          // RGB from 0 to 255
          texRGBAdata[4*i + 0] = 0;  // mask is always zero, meaning no part is rendered as "pants"
          texRGBAdata[4*i + 1] = 50; // roughness
          texRGBAdata[4*i + 2] = 0;  // metallic
          // OPACITY
          texRGBAdata[4*i + 3] = 255;
        }
        
        var texture = new THREE.DataTexture( texRGBAdata, 4, 4, THREE.RGBAFormat );
        texture.needsUpdate = true;
    
        return texture;
    }
    
    /**
     * used to store ambient occlusion (red channel), roughness (green channel) and metallic (blue channel) factors 
     * in shirt textures
     */
    _createDefaultORMTexture() {
        var texRGBAdata = new Uint8Array(4 * 4 * 4);
        for(var i=0; i< 4 * 4; i++){
          // RGB from 0 to 255
          texRGBAdata[4*i + 0] = 255; // ambient occlusion
          texRGBAdata[4*i + 1] = 255; // roughness
          texRGBAdata[4*i + 2] = 0;   // metallic
          // OPACITY
          texRGBAdata[4*i + 3] = 255;
        }
        
        var texture = new THREE.DataTexture( texRGBAdata, 4, 4, THREE.RGBAFormat );
        texture.needsUpdate = true;
    
        return texture;
    }
    
    _createDefaultNormalTexture() {
        var texRGBAdata = new Uint8Array(4 * 4 * 4);
        for(var i=0; i< 4 * 4; i++){
          // RGB from 0 to 255
          texRGBAdata[4*i + 0] = 127;  // mask is always zero, meaning no part is rendered as "pants"
          texRGBAdata[4*i + 1] = 127; // roughness
          texRGBAdata[4*i + 2] = 255;  // metallic
          // OPACITY
          texRGBAdata[4*i + 3] = 255;
        }
        
        var texture = new THREE.DataTexture( texRGBAdata, 4, 4, THREE.RGBAFormat );
        texture.needsUpdate = true;
    
        return texture;
    }
}