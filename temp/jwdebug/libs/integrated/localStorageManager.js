function LocalStorageManager() {


    // ************* likes-functionality setup
    var likesJSONdata;

    function setupLikesFunctionality() {
        likesJSONdata = localStorage.getItem('likes');
        if(likesJSONdata === null) likesJSONdata = { };
        else                       likesJSONdata = JSON.parse(likesJSONdata);

        // remove expired entries 
        var currentTimestamp = Date.now();
        var hashesToRemove = [];

        for (var hash in likesJSONdata) {
            if (likesJSONdata.hasOwnProperty(hash)) {

                var expiretime = likesJSONdata[hash].expireEpoch;
                var expired    = (expiretime < currentTimestamp);

                if(expired) hashesToRemove.push(hash);
            }
        }

        for (let i = 0; i < hashesToRemove.length; i++) {
            delete likesJSONdata[hashesToRemove[i]];
        }

        localStorage.setItem('likes', JSON.stringify(likesJSONdata));
        // remove expired entries - END
    }
    setupLikesFunctionality();

    function likeButtonArticleHash(article) {
        let title = article.articleData.articleName;
        let size  = article.sizeData.size;
        let colorHex = article.colorData.colorHex;
        let articleId = article.colorData.articleId;
        return Utils.hashString(title + size + colorHex + articleId);
    }
    this.productLikeStatus = function(article) {
        let hash = likeButtonArticleHash(article);
        return likesJSONdata.hasOwnProperty("" + hash);
    };
    this.productLiked = function(article) { 
        let hash = likeButtonArticleHash(article);

        likesJSONdata["" + hash] = {
            expireEpoch: Date.now() + 1000 * 86400 * 30,
        };

        localStorage.setItem('likes', JSON.stringify(likesJSONdata));
        app.jsonAPIController.likeProduct(1);

        _fireEvent("product-liked", { });
    };
    this.productUnliked = function(article) {
        let hash = likeButtonArticleHash(article);

        if(likesJSONdata.hasOwnProperty("" + hash)) {
            delete likesJSONdata["" + hash];
        }

        localStorage.setItem('likes', JSON.stringify(likesJSONdata));
        app.jsonAPIController.likeProduct(0);

        _fireEvent("product-unliked", { });
    };
    // ************* likes-functionality setup - END







    // ************* setup event listeners
    let _eventListeners = { };

    this.addEventListener = function(type, callback) {
        if(_eventListeners[type] === undefined) {
            _eventListeners[type] = [];
        }

        _eventListeners[type].push(callback);
    }

    function _fireEvent(type, args) {
        let listeners = _eventListeners[type];

        if(listeners === undefined) return;

        for(let i = 0; i < listeners.length; i++) {
            let callback = listeners[i];
            callback(args);
        }
    }
    // ************* setup event listeners - END







    var phpData = { };





    var lsBodydata = "";
    var lsGeneraldata = "";

    // setting defaults from either .php or localstorage
    function setBodytypeDefaultsFromLS() {

        var lsBodytypeData = localStorage.getItem("bodydata");
        if (lsBodytypeData === null) lsBodytypeData = { };
        else lsBodytypeData = JSON.parse(lsBodytypeData);


        var props    = ['height', 'bodyShape', 'pantsType', 'mannequinColor', 'skinTexture',
                        'weight', 'gender', 'look_article_id', 'size', 'color'];
        var defaults = [50,       'hourglass', 'jeans',     'f8ddc4',         'marble1',
                        130,      'female', '1', 'M', ''];

        for (let i = 0; i < props.length; i++) {
            let property = props[i];

            // checking the string 'undefined' because some .php variables requires interpolation over strings
            if (phpData[property] !== undefined && phpData[property] != "undefined") {
                // if a php GET variable was set for this property, update the localStorage key
                lsBodytypeData[property] = phpData[property];
                continue;
            } 

            // if we get here, php didn't define a GET variable for this property, and if localstorage doesn't have 
            // it specified set a default value
            if (!lsBodytypeData.hasOwnProperty(property)) {
                lsBodytypeData[property] = defaults[i];
            }
        } 


        let gender = lsBodytypeData["gender"];
        let bodyshape = lsBodytypeData["bodyShape"];
        if (gender == "female") {
			if(!['hourglass', 'rectangle', 'triangle', 'upside-down-triangle', 'oval'].includes(bodyshape)){
				lsBodytypeData["bodyShape"] = 'hourglass';
			}
		}
		if (gender == "male") {
			if(!['mhourglass', 'mrectangle', 'mtriangle', 'mupside-down-triangle', 'moval'].includes(bodyshape)){
				lsBodytypeData["bodyShape"] = 'mhourglass';                
			}
		}



        // save reference to lsBodydata
        lsBodydata = lsBodytypeData;
        localStorage.setItem("bodydata", JSON.stringify(lsBodytypeData));
    }

    function setGeneralDefaultsFromLS() {
        var lsData = localStorage.getItem("general");
        if (lsData === null) lsData = { };
        else lsData = JSON.parse(lsData);


        var props    = ['viewType', 'viewerState'];
        var defaults = ['customer', 'unpersonalized'];

        for (let i = 0; i < props.length; i++) {
            let property = props[i];

            // checking the string 'undefined' because some .php variables requires interpolation over strings
            if (phpData[property] !== undefined && phpData[property] != "undefined") {
                // if a php GET variable was set for this property, update the localStorage key
                lsData[property] = phpData[property];
                continue;
            } 

            // if we get here, php didn't define a GET variable for this property
            // and if localstorage doesn't have it specified,
            // set a default value
            if (!lsData.hasOwnProperty(property)) {
                lsData[property] = defaults[i];
            }
        } 

        // save reference to lsGeneraldata
        lsGeneraldata = lsData;
        localStorage.setItem("general", JSON.stringify(lsGeneraldata));
    }

    function setRequestReserveFromLS() {
        var reqReserveJSONdata = localStorage.getItem('requestReserveData');
        if(reqReserveJSONdata === null) 
            reqReserveJSONdata = { };
        else
            reqReserveJSONdata = JSON.parse(reqReserveJSONdata);

        // remove expired entries 
        var currentTimestamp = Date.now();
        var hashesToRemove = [];

        for (var hash in reqReserveJSONdata) {
            if (reqReserveJSONdata.hasOwnProperty(hash)) {
             
                var expiretime = reqReserveJSONdata[hash].expireEpoch;
                var expired    = (expiretime < currentTimestamp);

                if(expired) hashesToRemove.push(hash);
            }
        }

        for (let i = 0; i < hashesToRemove.length; i++) {
            delete reqReserveJSONdata[hashesToRemove[i]];
        }

        localStorage.setItem('requestReserveData', JSON.stringify(reqReserveJSONdata));
    }
    setBodytypeDefaultsFromLS();
    setGeneralDefaultsFromLS();
    setRequestReserveFromLS();


    this.getBodydataKey = function(key) {
        return lsBodydata[key];
    };
    this.setBodydataKey = function(key, value) {
        lsBodydata[key] = value;
        localStorage.setItem("bodydata", JSON.stringify(lsBodydata));
    };


    this.getGeneraldataKey = function(key) {
        return lsGeneraldata[key];
    };
    this.setGeneraldataKey = function(key, value) {
        lsGeneraldata[key] = value;
        localStorage.setItem("general", JSON.stringify(lsGeneraldata));
    };

    /**
     * @param {Object} jsonData  the jsonData object used by JSONAPIController to make a request to the php API 
     */
    this.requestReserve = function(jsonData) {
        var reqReserveJSONdata = JSON.parse(localStorage.getItem('requestReserveData'));
        reqReserveJSONdata[jsonData.articleId + jsonData.size] = {
            expireEpoch: Date.now() + 1000 * 86400 * 30,
        };

        localStorage.setItem("requestReserveData", JSON.stringify(reqReserveJSONdata));
    };

    this.getReserveRequestData = function() {
        return JSON.parse(localStorage.getItem('requestReserveData'));
    };
}