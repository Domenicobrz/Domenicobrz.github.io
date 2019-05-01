function JSONAPIController() {

    var phpData = { };


    var viewerDataHost      = "php/get-viewer-data.php";
    if(phpData.viewerDataJSONpath !== undefined) viewerDataHost = phpData.viewerDataJSONpath;

    var makeShortcutLinkAPI = "https://drapr.com/viewer/json-api/makeviewerlink.php";
    var shortcutLink        = "https://drapr.com/viewer/v24/";
    var savePBRSettingsAPI  = "https://drapr.com/viewer/json-api/savesettings.php";
    var filterChangeAPI     = "https://drapr.com/viewer/json-api/status.php";
    var likeAPI             = "https://drapr.com/viewer/json-api/likeit.php";
    var requestReserveAPI   = "https://drapr.com/viewer/json-api/requestreserve.php";
   
    var statsPageLink       = "https://drapr.com/viewer/admin/stats.php";

    var storesJSONurl       = "assets/JSON/stores-data.json";

    // TODO: should be renamed "makeBodytypeGETParams" 
    this.getBodytypeGETParams = function() {
        var lsbodytype = JSON.parse(localStorage.getItem("bodydata"));
        var params = Object.keys(lsbodytype).map(
            function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(lsbodytype[k]); }
        ).join('&');

        return params;
    };
    this.getGeneralGETParams = function() {
        var lsgeneral = JSON.parse(localStorage.getItem("general"));
        var params = "viewerId=" + phpData.viewerId + "&" + Object.keys(lsgeneral).map(
            function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(lsgeneral[k]); }
        ).join('&');

        return params;
    };

    this.requestViewerData = function(callback) {

        var params = this.getBodytypeGETParams() + "&" + this.getGeneralGETParams(); 

        var req = new XMLHttpRequest();
        req.open('GET', viewerDataHost + "?" + params);
        req.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        req.onreadystatechange = function () {
            if(req.readyState === 4 && req.status === 200) {
                var newViewerData = JSON.parse(req.responseText);

                callback(newViewerData);
            }
        };
        
        req.send(params);
    };
    
    this.requestShortcutLink = function(customerId, selectiondata, callback) {
        var scenedata = {
            envmapIndex:  0,
            catalogIndex: 0,
            sizeIndex:    0,
            colorIndex:   0,
        };
        
    //     envmapControl = guiManager.getControl("envmap");
    //     if(envmapControl)
    //         scenedata.envmapIndex = envmapControl.getLastSelectedEnvmap();
        
    //     scenedata.catalogIndex = guiManager.garmentLoader.selectedArticleIndex;
    //     scenedata.sizeIndex    = guiManager.garmentLoader.selectedSizeIndex;
    //     scenedata.colorIndex   = guiManager.garmentLoader.selectedColorIndex;
    
    
        var bodytypeParams  = this.getBodytypeGETParams();
        var generalParams   = "&" + this.getGeneralGETParams();
        generalParams       = generalParams.replace("viewType=associate", "viewType=customer");
        var sceneParams     = "&sceneparams=" + encodeURIComponent(JSON.stringify(scenedata));
        var selectionParams = "&selectiondata=" + encodeURIComponent(JSON.stringify(selectiondata));
    
        // console.log("?" + bodytypeParams + sceneParams);
        // console.log( JSON.parse(   decodeURIComponent(sceneParams).substring(13)   ));
        
    
        let params = "?" + bodytypeParams + generalParams + sceneParams + selectionParams;
        params += "&customerId=" + customerId + "&associate_id=" + phpData.associateId;
    
        var req = new XMLHttpRequest();
        req.open("POST", makeShortcutLinkAPI, true);
        // req.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        req.setRequestHeader("Content-Type", "application/json");
    
        req.onreadystatechange = function () {
            if(req.readyState === 4 && req.status === 200) {
                var jsonresponse = req.responseText;
    
                callback(JSON.parse(jsonresponse).shortenedUrl);
            }
        };
    
        var JSONdata = { linkUrl: shortcutLink + params, associateId: phpData.associateId, customerId: customerId };
        var JSONdatastr = JSON.stringify(JSONdata);
        // var JSONdatasres = JSON.parse(JSONdatastr);
        req.send(JSONdatastr);
    };

    // this.savePBRSettings = function(datGUIcontroller) {
    //     var gl = guiManager.garmentLoader;
    //     var vd = gl.viewerData;

    //     var jsonData = JSON.stringify({
    //         articleId:                 vd.catalog[gl.selectedArticleIndex]
    //                                      .articleModels[gl.selectedSizeIndex]
    //                                      .articleColors[gl.selectedColorIndex]
    //                                      .articleId,
    //         materialDefaults: {
    //             shirt_roughness:           datGUIcontroller.shirt_roughness,           
    //             shirt_metallic:            datGUIcontroller.shirt_metallic,            
    //             shirt_reflectivity:        datGUIcontroller.shirt_reflectivity,        
    //             shirt_envMapIntensity:     datGUIcontroller.shirt_envMapIntensity,         
    //         }
    //     });

    //     var xhr = new XMLHttpRequest();
    //     var url = savePBRSettingsAPI;
    //     xhr.open("POST", url, true);
    //     xhr.setRequestHeader("Content-Type", "application/json");
    //     // xhr.onreadystatechange = function () {
    //     //     if (xhr.readyState === 4 && xhr.status === 200) {
    //     //         var json = JSON.parse(xhr.responseText);
    //     //     }
    //     // };
    //     xhr.send(jsonData);
    // };

    // this.notifyFilterChange = function(booleanvalue) {
    //     let ai = guiManager.garmentLoader.selectedArticleIndex;
    //     let si = guiManager.garmentLoader.selectedSizeIndex;
    //     let ci = guiManager.garmentLoader.selectedColorIndex;

    //     let vd = guiManager.garmentLoader.viewerData;
    //     vd.catalog[ai].articleModels[si].articleColors[ci].enabledForUsers = booleanvalue;
        
    //     var jsonData = JSON.stringify({
    //         articleId: vd.catalog[ai].articleModels[si].articleColors[ci].articleId,
    //         size:      si,
    //         sizeText:  vd.catalog[ai].articleModels[si].size,
    //         color:     vd.catalog[ai].articleModels[si].articleColors[ci].colorHex,
    //         enabled:   booleanvalue,
    //         bodytype:  localStorageManager.getBodydataKey("bodyshape"),
    //         height:    localStorageManager.getBodydataKey("height"),
    //         weight:    localStorageManager.getBodydataKey("weight"),
    //         viewerId:  php_viewer_id,
    //     });

    //     var xhr = new XMLHttpRequest();
    //     var url = filterChangeAPI;
    //     xhr.open("POST", url, true);
    //     xhr.setRequestHeader("Content-Type", "application/json");
    //     // xhr.onreadystatechange = function () {
    //     //     if (xhr.readyState === 4 && xhr.status === 200) {
    //     //         var json = JSON.parse(xhr.responseText);
    //     //     }
    //     // };
    //     xhr.send(jsonData);
    // }; 

    this.likeProduct = function(likestatus) {
        var vd = app.garmentLoader.viewerData;
        var ad = app.garmentLoader.getSelectedArticleData();

        var jsonData = JSON.stringify({
            like:       likestatus,
            articleId:  ad.colorData.articleId,
            size:       ad.sizeData.size,
            color:      ad.colorData.colorHex,
            customerId: phpData.customerId,
        });
 
        var xhr = new XMLHttpRequest();
        var url = likeAPI;
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState === 4 && xhr.status === 200) {
        //         var json = JSON.parse(xhr.responseText);
        //     }
        // };
        xhr.send(jsonData);
    };

    // this.moveToStatsPage = function() {
    //     window.location = statsPageLink + "?associate_id=" + php_associate_id;
    // };



    this.getStoresJSON = function(callback) {
        Utils.getJSON(storesJSONurl, function(parsedJSON) {
            callback(parsedJSON);
        });
    };


    this.requestReserve = function(store) {
        var articleData = app.garmentLoader.getSelectedArticleData();
        var jsonData = {
            "action": "requestpickup",
            "storeEmail": store.storeEmail,
	        "customerId": phpData.customerId,
	        "associateId": phpData.associateId,
	        "articleName": articleData.articleData.articleName,
	        "size": articleData.sizeData.size,
	        "colorTitle": articleData.colorData.colorTitle,
	        "articlePrice": articleData.sizeData.articlePrice,
            "articleId": articleData.colorData.articleId
        };

        app.localStorageManager.requestReserve(jsonData);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", requestReserveAPI, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(jsonData));
    };
}