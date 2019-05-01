class GarmentLoader {

    constructor() {
        this._selectedArticleIndex = 0;
        this._selectedSizeIndex    = 0;
        this._selectedSizeText     = "";

        this._selectedColorIndex   = 0;
        this._selectedColorHex     = "";

        this._loadingCount         = 0;

        // list of ArticleIds already downloaded, is wiped if we download a new article
        this._currentArticleCacheHelper = { };

        this.viewerData            = undefined;
    }
    
    loadEnvmap(callback) {
        var assets = {
            root: [
                {
                    "type": "ENV_MAP",
                    "path": "assets/envmaps/denvironment_lightbackground_v01.jpg",
                    "radianceMapPath": "assets/envmaps/dradiance_studiolight_v03.jpg",
    
                    "envMapName": "Center City Plaza",
                    "envMapThumb": "assets/envmaps/thumb-daylight/1.jpg",
                    "envMapRotation": 40,
                    "envMapTranslationY": 0,
    
                    "materialScalars": {
                        "iPhone6fix": 1.7,
                        "mannequin_envMapIntensity": "1.3",
                        "shirt_envMapIntensity": "1.1"
                    }
                }
            ]
        };

        this._loadAssets(assets, true, callback, undefined);
    }

    isDownloading() {
        return this._loadingCount !== 0;
    }

    // // first download on page open
    // pageLoadDownload(viewerData, envmapData, callback, delay, indexes) {

    //     this.viewerData = viewerData;

    //     var ei = 0,     cti = indexes.ai,      si = indexes.si,    ci = indexes.ci;
      
    //     this._selectedArticleIndex = cti;
    //     this._selectedColorIndex = ci;
    //     this._selectedSizeIndex = si;
    //     this._selectedSizeText = viewerData.catalog[cti].articleModels[si].size;
    //     this._selectedColorHex = viewerData.catalog[cti].articleModels[si].articleColors[ci].colorHex;

    //     var assets = {
    //         root: [
    //             // viewerData.mannequinModel,
    //             // viewerData.mannequinModel.mannequinTextures,
    //             viewerData.catalog[cti].articleModels[si].articleColors[ci].articleData[0],  // shirt texture
    //             viewerData.catalog[cti].articleModels[si].articleColors[ci].articleData[1]   // shirt model
    //         ]
    //     };


    //     this._currentArticleCacheHelper = { };
    //     this._currentArticleCacheHelper[viewerData.catalog[cti].articleModels[si].articleColors[ci].articleId] = true;        
    //     this._loadAssets(assets, true, callback, delay);


    //     // // here's why we are setting forcerender: true instead of using requestRerender() - assume I called requestRerender ->
    //     // // the very first time threejs renders a material it will compile the associated shaders
    //     // // compilation time may vary but on my machine is roughly 1.5 seconds
    //     // // if I call requestRerender() a new render will be issued in the next frame BUT ->
    //     // // before this function was called, assetLoader faded out the loading-modal, as it always does after
    //     // // the finish event, but in the next frame it will be the very first time we render something on 
    //     // // the canvas, threejs needs to compile the materials shaders and for 1.5 seconds we're going to see a 
    //     // // default gray background instead of the loading modal (that was removed in the previous frame)
    //     // // instead render() blocks the scripts until threejs is done on compiling the shaders and only afterwards the
    //     // // loading-modal is faded out (because the script was blocked)
    //     // loadAssets(assets, true, function onFinishCallback() {
    //     //     // As the page loads with a default envmap, if php variables are set they will override everything
    //     //     // previously set

    //     //     // NOTE: we need to check for undefined since e.g. roughness == 0 is a valid value,
    //     //     // but would result as false if we structured the if statement with a simple falsy/truthy value check
    //     //     if(php_shirt_roughness !== undefined) 
    //     //         shirtMaterial.roughness = php_shirt_roughness;

    //     //     if(php_shirt_metallic !== undefined) 
    //     //         shirtMaterial.metalness = php_shirt_metallic;

    //     //     if(php_shirt_envmap_intensity !== undefined) 
    //     //         shirtMaterial.envMapIntensity = php_shirt_envmap_intensity;

    //     //     if(php_shirt_reflectivity !== undefined) 
    //     //         shirtMaterial.reflectivity = php_shirt_reflectivity;
        
    //     //     updateAdminGUIControls("material controls");
    //     // });
    // }


    /**
     * @param {Object} viewerData    
     */
    onViewerDataChange(viewerData, callback, delay) {
        this.viewerData = viewerData;

        if(this.viewerData.catalog.length <= this._selectedArticleIndex)
            this._selectedArticleIndex = 0;
     
        var article = this.viewerData.catalog[this._selectedArticleIndex];
     
        if(article.articleModels.length <= this._selectedSizeIndex)
            this._selectedSizeIndex = 0;

        var colors = article.articleModels[this._selectedSizeIndex].articleColors;

        if(colors.length <= this._selectedColorIndex) 
            this._selectedColorIndex = 0;

        this._selectedSizeText = article.articleModels[this._selectedSizeIndex].size;
        this._selectedColorHex = colors[this._selectedColorIndex].colorHex;


        var shirtModelTexture = colors[this._selectedColorIndex].articleData[0];
        var shirtModel        = colors[this._selectedColorIndex].articleData[1]; 
     
        var assets = {
            root: [
                this.viewerData.mannequinModel,
                this.viewerData.mannequinModel.mannequinTextures,
                shirtModelTexture,
                shirtModel
            ]
        };

        this._currentArticleCacheHelper = { };
        this._currentArticleCacheHelper[colors[this._selectedColorIndex].articleId] = true;        
        // passing true as a second argument to force a re-render
        // if the first time the page is loaded we have an error (e.g. catalog is empty), materials are not compiled
        // if we then changed the bodytype and a new vd.json was loaded, using requestRerender() will show the problem
        // explained in pageLoadDownload(); this way we're making sure the loading-modal fades out at the correct time
        // (and not before materials have been compiled)
        this._loadAssets(assets, true, callback, delay);
    }


    getSelectedArticleData() {
    
        let ai  = this._selectedArticleIndex;
        let si  = this._selectedSizeIndex;
        let ci  = this._selectedColorIndex;
        let vdc = this.viewerData.catalog;

        return {
            articleData: vdc[ai],
            sizeData:    vdc[ai].articleModels[si],
            colorData:   vdc[ai].articleModels[si].articleColors[ci],

            selectedArticleIndex: this._selectedArticleIndex,  
            selectedSizeIndex:    this._selectedSizeIndex,  
            selectedColorIndex:   this._selectedColorIndex,  
        };
    }

    loadMannequin(callback, delay) {
        var assets = {
            root: [
                this.viewerData.mannequinModel,
                this.viewerData.mannequinModel.mannequinTextures
            ]
        };
     
        this._loadAssets(assets, false, callback, delay);
    };

    /**
     * 
     * @param {Number} action 
     * @param {Object} args 
     * @param {Number} delay    Only applied if the the item is not cached
     * 
     * @return {Object}         Object of type { accepted: x, wasInCache: x }        
     */
    loadGarment(action, args, callback, delay) {

        if (action === GarmentLoader.action.SWITCH_ARTICLE) {
            let newArticleIndex = args;
            this._selectedArticleIndex = newArticleIndex;

            // try to match previously selected size and color, the other if-statement will do the trick
            action = GarmentLoader.action.SWITCH_SIZE;
            args = this._selectedSizeText;  // at this point this._selectedSizeText represents the previously selected size
        }

        if (action === GarmentLoader.action.SWITCH_SIZE) {

            let newSize = args;
            let oldColor = this._selectedColorHex; // at this point this._selectedColorHex represents the previously selected color

            this._selectedSizeIndex = findSizeIndex(this.viewerData, this._selectedArticleIndex, newSize);
            this._selectedSizeText = this.viewerData.catalog[this._selectedArticleIndex]
                                                    .articleModels[this._selectedSizeIndex].size;

            this._selectedColorIndex = findColorIndex(this.viewerData, 
                                                      this._selectedArticleIndex, 
                                                      this._selectedSizeIndex, 
                                                      oldColor);

            this._selectedColorHex = this.viewerData.catalog[this._selectedArticleIndex]
                                                    .articleModels[this._selectedSizeIndex]
                                                    .articleColors[this._selectedColorIndex].colorHex;
        }

        if (action === GarmentLoader.action.SWITCH_COLOR) {

            let newColorHex = args;
            if (newColorHex == this._selectedColorHex) 
                return {
                    // do nothing if the user requested the same article that we already have
                    accepted: false
                };

            let article = this.getSelectedArticleData();

            for (let i = 0; i < article.sizeData.articleColors.length; i++) {
                let color = article.sizeData.articleColors[i].colorHex;
                if (color == newColorHex) {
                    this._selectedColorIndex = i;
                    this._selectedColorHex = newColorHex;
                    break;
                }
            }
        }

        if (action === GarmentLoader.action.SWITCH_FROM_INDICES) {
            this._selectedArticleIndex = args.articleIndex;
            this._selectedSizeIndex    = args.sizeIndex;
            this._selectedColorIndex   = args.colorIndex;

            this._selectedSizeText = this.viewerData.catalog[this._selectedArticleIndex]
                                                    .articleModels[this._selectedSizeIndex].size;
            
            this._selectedColorHex = this.viewerData.catalog[this._selectedArticleIndex]
                                                    .articleModels[this._selectedSizeIndex]
                                                    .articleColors[this._selectedColorIndex].colorHex;
        }

        function findSizeIndex(vd, ai, targetSize) {
            for (let i = 0; i < vd.catalog[ai].articleModels.length; i++) {
                let size = vd.catalog[ai].articleModels[i].size;
                if (size == targetSize) {
                    return i;
                }
            }

            return 0;
        }

        function findColorIndex(vd, ai, si, targetColor) {
            for (let i = 0; i < vd.catalog[ai].articleModels[si].articleColors.length; i++) {
                let color = vd.catalog[ai].articleModels[si].articleColors[i].colorHex;
                if (color == targetColor) {
                    return i;
                }
            }

            return 0;
        }


        var article = this.viewerData.catalog[this._selectedArticleIndex];
        var model   = article.articleModels[this._selectedSizeIndex];
        var color   = model.articleColors[this._selectedColorIndex];
        var shirtModelTexture = color.articleData[0]; 
        var shirtModel        = color.articleData[1]; 
    

        var assets = {
            root: [
                shirtModelTexture,
                shirtModel
            ]
        };


        let wasInCache = false;
        if(this._currentArticleCacheHelper[color.articleId] !== undefined) {
            wasInCache = true;
            // delay is only applied if the item was not in cache
            delay = false;
        }

        this._currentArticleCacheHelper[color.articleId] = true;
        this._loadAssets(assets, true, callback, delay);

        
        return { 
            // means we were not already downloading something when this function was invoked, 
            // so acknowledge the caller the request was successfully sent
            accepted: true, 
            wasInCache: wasInCache,
        };
    }

    /**
     * @param {*} assets 
     * @param {*} forcerender used by onViewerDataChange() to keep the loading-modal active until shaders have been compiled
     * @param {*} callback
     * @param {*} delay       threejs often blocks the entire script, so animating the panels before the loading starts 
     *                        gets complicated if we don't apply a delay here
     */
    _loadAssets(assets, forcerender, callback, delay) {
        // /******  Loading assets and making sure to disable their materials until the batch completes ******/
     
        // // finding meshes from the scene and making those not visible wouldn't work because
        // // each time a new asset is loaded a new mesh is created and appended to the scene 
        // // therefore the current solution is to disable the material altogheter and re-enable it once
        // // loading completes
        // // mannequinMaterial.visible = false;
        // // shirtMaterial.visible = false;
     
        // // requestRerender(); // makes changes visible
     
        // // guard to make sure we're not already downloading a batch
        // if(assetsLoader.load(assets)) {
        //     assetsLoader.addEventListener("finish", function() {
        //         // mannequinMaterial.visible = true;
        //         // shirtMaterial.visible     = true;    
     
        //         if(callback) callback();
    // 
        //         updateAdminGUIControls("enabledForUser control");
    // 
        //         if(forcerender) render();
        //         else            requestRerender(); // makes changes visible
        //     });
        // }
        this._loadingCount++;

        var onComplete = () => {
            this._loadingCount--;

            if(forcerender) app.webGLViewer.render();
            else            app.webGLViewer.requestRerender(); // makes changes visible

            if(callback) callback();
        };

        if(delay) {
            setTimeout(function() { 
                app.webGLViewer.load(assets, onComplete); 
            }, delay);
        } else {
            app.webGLViewer.load(assets, onComplete);
        }
    }
}

GarmentLoader.action = {
    SWITCH_ARTICLE:      0,
    SWITCH_SIZE:         1,
    SWITCH_COLOR:        2,
    SWITCH_FROM_INDICES: 3,
};