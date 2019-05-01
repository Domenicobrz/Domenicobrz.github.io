function AssetsLoader() {

    // this.loading = false;

    // // array of assets, each will be loaded separately
    // var assetsToLoad = []; 
    // var assetsLoaded = 0;
    // var loadingAsset = false;

    // // note that once a batch is fully loaded all the listeners of the finish and update events will be cleared
    // var finishListeners = [];
    // var updateListeners = [];
    // var scope        = this;


    // cached meshes are indexed by their path
    var cachedMeshes = { };
    var placeholderMeshesMaterial = new THREE.MeshBasicMaterial();

    var queuedBatches = [];
    var currentlyDownloadedBatch = undefined;
    var currentlyDownloadedAsset = undefined;
    var updateEvtArgs            = undefined;

    var UNACTIVE = -1;

    var SELECTING_BATCH = 0;
    var DOWNLOADING_BATCH = 1;
    var FINISHED_DOWNLOADING_BATCH = 2;
    var FINISHED_DOWNLOADING_ALL_BATCHES = 3;
    
    var SELECTING_ASSET = 4;
    var DOWNLOADING_ASSET = 5;
    var FINISHED_DOWNLOADING_ASSET = 6;
    var FINISHED_DOWNLOADING_ALL_ASSETS = 7;
    
    var downloadBatchesStatus = UNACTIVE;
    var downloadAssetsStatus  = UNACTIVE;

    /**
     * @param {Object} batch    object of the form   { assets: xxxx, onUpdate: yyyy, onFinish: zzzz }
     */
    this.load = function(batch) { //parsedJSON) {

        queuedBatches.push(batch);
        // console.log("QUEUED_BATCHES: ");
        // for(let i = 0; i < queuedBatches.length; i++) {
        //     for(let j = 0; j < queuedBatches[i].assets.root.length; j++) {
        //         console.log(queuedBatches[i].assets.root[j].type + "   " + queuedBatches[i].assets.root[j].path);
        //     }
        // }
        

        if (downloadBatchesStatus === UNACTIVE) {
            downloadBatchesStatus = SELECTING_BATCH;
            requestAnimationFrame(downloadBatches);
        }

        return true;
    };

    this.isUnactive = function() {
        return downloadBatchesStatus === UNACTIVE;
    } 

    this.clearCache = function() {
        cachedMeshes = { };
    }


    // picks the highest priority element from the array, if there's one, otherwise the algorithm
    // is structured in a way that will return the first element in the list
    function pickBatch() {
        let highestPriority = -1;
        let highestPriorityIndex = -1;

        for (let i = 0; i < queuedBatches.length; i++) {
            let priority = queuedBatches[i].priority;
            if(priority > highestPriority) {
                highestPriority = priority;
                highestPriorityIndex = i;
            }
        }

        return queuedBatches[highestPriorityIndex];
    }

    function downloadBatches() {
        if (downloadBatchesStatus === SELECTING_BATCH) {
            // pick a batch (FIFO required. Envmap always comes first) 
            // and set it as the currently downloaded batch
            currentlyDownloadedBatch = pickBatch();
            console.log("SELECTING_BATCH --- " + "selected batch priority: " + currentlyDownloadedBatch.priority);
            // console.log("BATCH SELECTED: ");
            // for(let i = 0; i < currentlyDownloadedBatch.assets.root.length; i++) {
            //     console.log(currentlyDownloadedBatch.assets.root[i].type + "   " + currentlyDownloadedBatch.assets.root[i].path);
            // }

            downloadAssetsStatus  = SELECTING_ASSET;
            downloadBatchesStatus = DOWNLOADING_BATCH;
            console.log("DOWNLOADING_BATCH");
        }
    
        if (downloadBatchesStatus === DOWNLOADING_BATCH) {
            // call function responsible, get the return value
            let result = downloadAsset();
            
            // if all assets are downloaded, switch state to finished_downloading_batch
            if(result === 1) {
                downloadBatchesStatus = FINISHED_DOWNLOADING_BATCH;
                console.log("FINISHED_DOWNLOADING_BATCH");
            } 
        }
    
        if (downloadBatchesStatus === FINISHED_DOWNLOADING_BATCH) {
            // call the batch onComplete listener
            if(currentlyDownloadedBatch.onComplete)
                currentlyDownloadedBatch.onComplete();
        
            // remove the downloaded batch from the queuedBatches list
            let currentBatchUUID = currentlyDownloadedBatch.uuid;
            queuedBatches = queuedBatches.filter( el => el.uuid !== currentBatchUUID );

            // if there's still batches to download, set state to selecting_batch
            if (queuedBatches.length > 0) {
                downloadBatchesStatus = SELECTING_BATCH;
            }
            else {
                // if not, set state to finished_downloading_all_batches
                downloadBatchesStatus = FINISHED_DOWNLOADING_ALL_BATCHES;
                console.log("FINISHED_DOWNLOADING_ALL_BATCHES");            
            }
        }
    
        if (downloadBatchesStatus === FINISHED_DOWNLOADING_ALL_BATCHES) {
            downloadBatchesStatus = UNACTIVE;
            console.log("UNACTIVE");                        
            return; // skips the requestAnimationFrame
        }

        requestAnimationFrame(downloadBatches);        
    }

    function downloadAsset() {
        if (downloadAssetsStatus === SELECTING_ASSET) {

            currentlyDownloadedAsset = currentlyDownloadedBatch.assets.root[0]; // .shift(); will be done by the FINISHED_DOWNLOADING_ASSET state

            switch(currentlyDownloadedAsset.type) {
                case "MANNEQUIN_MODEL":
                    loadMannequin(currentlyDownloadedAsset);
                    break;    
                    
                case "MANNEQUIN_TEXTURE":
                    loadMannequinTexture(currentlyDownloadedAsset);
                    break;    

                case "SHIRT_MODEL":
                    loadShirt(currentlyDownloadedAsset);
                    break;      

                case "SHIRT_TEXTURE":
                    loadShirtTexture(currentlyDownloadedAsset);
                    break;      

                case "ENV_MAP":
                    loadEnvMap(currentlyDownloadedAsset);
                    break;

                default:
                    // if we don't recognize this asset type, skip it
                    console.log("unrecognized asset type: " + currentlyDownloadedAsset.type);
                    update(currentlyDownloadedAsset);
                    return; // return required, since the update function will set the state to FINISHED_DOWNLOADING_ASSET, if I put break the next line would
                            // override the state to DOWNLOADING_ASSET
            }

            downloadAssetsStatus = DOWNLOADING_ASSET;
        }

        if (downloadAssetsStatus === DOWNLOADING_ASSET) {
            // do nothing...
        }

        // will be set by the internal update() function
        if (downloadAssetsStatus === FINISHED_DOWNLOADING_ASSET) {
            // call the update listeners of the current batch pheraps? not sure
            if(currentlyDownloadedBatch.onUpdate)
                currentlyDownloadedBatch.onUpdate(updateEvtArgs); // updateEvtArgs will be set by the update function... 
                                                                  // it looks very ugly so eventually I'll have to fix this
    
            currentlyDownloadedBatch.assets.root.shift(); // remove one element from the assets list

            // will prevent a re-render if a "change" event is fired from orbitControls.js 
            app.webGLViewer.preventOCRepaintInThisFrame = true;
            app.webGLViewer.controls.update(); 

            console.log("loaded type: " + currentlyDownloadedAsset.type);


            // if there's still assets to download, set state to selecting_asset and return
            if(currentlyDownloadedBatch.assets.root.length > 0)
                downloadAssetsStatus = SELECTING_ASSET;
            else
                // if not, set state to finished_downloading_all_assets
                downloadAssetsStatus = FINISHED_DOWNLOADING_ALL_ASSETS;
        }
    
        if (downloadAssetsStatus === FINISHED_DOWNLOADING_ALL_ASSETS) {
            // return 1 pheraps? so the upper function can do his job
            downloadAssetsStatus = UNACTIVE;
            return 1;
        }

        return 0;
    }

    function update(evtArgs) {
        updateEvtArgs = evtArgs;
        downloadAssetsStatus = FINISHED_DOWNLOADING_ASSET;
    };























    function modelPartLoaded(geometry, asset, name) {
        
        // if(cachedMeshes[asset.path] !== undefined) {
        //     console.log("CACHE HIT -- " + asset.type + "   " + asset.path);
        //     update({ asset: asset,  data: { mesh: cachedMeshes[asset.path] } });
        //     return;
        // }

        if(name == "shirtmodel") {
            let tempGeo = new THREE.Geometry().fromBufferGeometry(geometry);

            tempGeo.mergeVertices();

            // after only mergeVertices my textrues were turning black so this fixed normals issues
            tempGeo.computeVertexNormals();
            tempGeo.computeFaceNormals();

            geometry = new THREE.BufferGeometry().fromGeometry(tempGeo);
        }

        var generatedMesh = callbackModel( geometry, name );
        // cachedMeshes[asset.path] = generatedMesh;

        update({ asset: asset,  data: { mesh: generatedMesh }    });
    }

    function callbackModel( geometry, name ) {
        var mesh = new THREE.Mesh( geometry, placeholderMeshesMaterial );

        var uvs = geometry.attributes.uv.array;
        geometry.addAttribute( 'uv2', new THREE.BufferAttribute( uvs, 2 ) );

        if (name !== undefined)
            mesh.name = name;

        return mesh;
    }

    function loadMannequin(asset) {
        // var loader = new THREE.CTMLoader();
    
        // loader.load( asset.path, function( geometry ) {
        //     modelPartLoaded(geometry, asset, "mannequin");
        // }, { useWorker: false } );


        let loader2 = new THREE.OBJLoader2();
            loader2.setUseIndices(true);
            loader2.load(
                asset.path,
                function ( object ) {
                    modelPartLoaded(object.detail.loaderRootNode.children[0].geometry, asset, "mannequin");                    
                }
            );
    }

    function loadShirt(asset) {
        // if (asset.path.endsWith(".ctm")) {

        //    let loader = new THREE.CTMLoader();
        //    loader.load( asset.path, function( geometry ) {
        //        modelPartLoaded(geometry, asset, "shirtmodel");
        //    }, { useWorker: false } );
        // } else if (asset.path.endsWith(".obj")) {
            
            let loader2 = new THREE.OBJLoader2();
            loader2.setUseIndices(true);
            loader2.load(
                asset.path,
                function ( object ) {
                    modelPartLoaded(object.detail.loaderRootNode.children[0].geometry, asset, "shirtmodel");                    
                }
            );
        // } else {
        //     console.log("only .obj or .ctm models can be currently loaded");
        // }
    }

    function loadShirtTexture(asset) {

        let itemsDownloaded = 0;
        let itemsToDownload = 0;
        if(asset.path   !== undefined) itemsToDownload++;
        if(asset.aoPath !== undefined) itemsToDownload++;  
        if(asset.roughnessPath !== undefined) itemsToDownload++;  
        if(asset.metalnessPath !== undefined) itemsToDownload++;  
        if(asset.normalPath !== undefined) itemsToDownload++;

        let albedoTexture;
        let normalTexture;
        let aoTexture;
        let roughnessTexture;
        let metalnessTexture;

        if(asset.path !== undefined) {
            new THREE.TextureLoader().load( asset.path, function(texture) {
                albedoTexture = texture;
    
                itemsDownloaded++;
                if(itemsDownloaded === itemsToDownload) onDownloadComplete();
            });
        }

        if(asset.aoPath !== undefined) {
            new THREE.TextureLoader().load( asset.aoPath, function(texture) {
                aoTexture = texture;

                itemsDownloaded++;
                if(itemsDownloaded === itemsToDownload) onDownloadComplete();
            });
        }

        if(asset.roughnessPath !== undefined) {
            new THREE.TextureLoader().load( asset.roughnessPath, function(texture) {
                roughnessTexture = texture;

                itemsDownloaded++;
                if(itemsDownloaded === itemsToDownload) onDownloadComplete();
            });
        }

        if(asset.metalnessPath !== undefined) {
            new THREE.TextureLoader().load( asset.metalnessPath, function(texture) {
                metalnessTexture = texture;

                itemsDownloaded++;
                if(itemsDownloaded === itemsToDownload) onDownloadComplete();
            });
        }

        if(asset.normalPath !== undefined) {
            new THREE.TextureLoader().load( asset.normalPath, function(texture) {
                normalTexture = texture;

                itemsDownloaded++;
                if(itemsDownloaded === itemsToDownload) onDownloadComplete();
            });
        }

        function onDownloadComplete() {
            update({ 
                asset: asset, 
                data: { 
                    albedoTexture:    albedoTexture,
                    normalTexture:    normalTexture,
                    aoTexture:        aoTexture,
                    roughnessTexture: roughnessTexture,
                    metalnessTexture: metalnessTexture,
                }   
            });           
        }
    }

    function loadMannequinTexture(asset) {

        let itemsDownloaded = 0;
        let itemsToDownload = 0;
        

        let albedoTexture = asset.path;
        let rmaTexture = asset.rmaPath;
        let aoTexture = asset.aoPath;
        let normalTexture = asset.normalPath;

        if(albedoTexture !== undefined) itemsToDownload++;
        if(rmaTexture !== undefined) itemsToDownload++;
        if(aoTexture !== undefined) itemsToDownload++;
        if(normalTexture !== undefined) itemsToDownload++;

        if(asset.path !== undefined) {
            new THREE.TextureLoader().load( asset.path, function(texture) {
                albedoTexture = texture;
    
                itemsDownloaded++;
                if(itemsDownloaded === itemsToDownload) onDownloadComplete();
            });
        }

        if(asset.aoPath !== undefined) {
            new THREE.TextureLoader().load( asset.aoPath, function(texture) {
                aoTexture = texture;

                itemsDownloaded++;
                if(itemsDownloaded === itemsToDownload) onDownloadComplete();
            });
        }

        if(asset.rmaPath !== undefined) {
            new THREE.TextureLoader().load( asset.rmaPath, function(texture) {
                rmaTexture = texture;

                itemsDownloaded++;
                if(itemsDownloaded === itemsToDownload) onDownloadComplete();
            });
        }

        if(asset.normalPath !== undefined) {
            new THREE.TextureLoader().load( asset.normalPath, function(texture) {
                normalTexture = texture;

                itemsDownloaded++;
                if(itemsDownloaded === itemsToDownload) onDownloadComplete();
            });
        }

        function onDownloadComplete() {
            update({ 
                asset: asset, 
                data: {
                    albedoTexture: albedoTexture, 
                    rmaTexture: rmaTexture, 
                    aoTexture: aoTexture, 
                    normalTexture: normalTexture, 
                }  
            });           
        }
    }

    function loadEnvMap(asset) {
        let skyboxPath   = asset.path;
        let radiancePath = asset.radianceMapPath || asset.path;

        let texLoader = new THREE.TextureLoader();
        let assetsLoaded = 0;
        let assetsToLoad = 0;
        if(skyboxPath   !== undefined) assetsToLoad++;
        if(radiancePath !== undefined) assetsToLoad++;

        let skyboxTexture = undefined;
        let radianceTexture = undefined;

        if(skyboxPath) {
            texLoader.load( skyboxPath, function ( texture ) {
                skyboxTexture = texture;
    
    
                assetsLoaded++;
                if (assetsLoaded == assetsToLoad) onComplete();
            });
        }

        if(radiancePath) {
            texLoader.load( radiancePath, function ( texture ) {
                texture.mapping = THREE.EquirectangularReflectionMapping;
                radianceTexture = texture;


                assetsLoaded++;
                if (assetsLoaded == assetsToLoad) onComplete();
            });
        }

        function onComplete() {
            update({ asset: asset, data: { skyboxTexture: skyboxTexture, radianceTexture: radianceTexture }   });
        }
    }
}