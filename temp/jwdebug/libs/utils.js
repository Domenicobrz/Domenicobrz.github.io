var Utils = {

    getJSON: function(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                var jsonData = JSON.parse(rawFile.responseText);
                callback(jsonData);
            }
        };
        rawFile.send(null);
    },
    
    setActive: function(array, index) {
        for (let i = 0; i < array.length; i++) {
            array[i].classList.remove("active");
        }

        array[index].classList.add("active");
    },

    removeAllHTMLChildren(container) {
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }
    },

    smoothstep: function(x) { //Normal smoothstep
        return -2 * Math.pow(x, 3) + 3 * Math.pow(x, 2);
    },

    degToRadians: function(degree) {
        return degree * Math.PI / 180;
    },


    parseIncludes: function( string ) {
        var utils_includepattern = /#include <(.*)>/gm;
        
        function replace( match , include ) {
    		var replace = THREE.ShaderChunk[ include ];
    		return Utils.parseIncludes( replace );
    	}

    	return string.replace( utils_includepattern, replace );
    },

    hexColorToFragmentString: function(hexColor) {
        let color = new THREE.Color(hexColor);
        let vecstring = "vec4(" + 
                        color.r.toFixed(2) + ", " +
                        color.g.toFixed(2) + ", " +
                        color.b.toFixed(2) + ", " +
                        " 1.0)";

        return vecstring;
    },

    hexColorToTHREEVector3: function(hexColor) {
        let color = new THREE.Color(hexColor);
        return new THREE.Vector3(color.r.toFixed(2), color.g.toFixed(2), color.b.toFixed(2));
    },

    hexToRgb: function(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    },

    // the returned hashstring is numerical, with all the limits of a 32bits hash 
    hashString: function(str) {
        var hash = 0, i, chr;
        if (str.length === 0) return hash;
        for (i = 0; i < str.length; i++) {
          chr   = str.charCodeAt(i);
          hash  = ((hash << 5) - hash) + chr;
          hash |= 0; // Convert to 32bit integer
        }
        return hash;
    },


    scrollTo: function(element, params) {
        var targetObj = { t: 0 };
        var scrollYStart = element.scrollTop;
        var scrollYEnd   = params.top;
        var scrollXStart = element.scrollLeft;
        var scrollXEnd   = params.left;

        // 300ms every "viewport height" scrolled, minimum of 100ms & maximum of 600ms
        var scrollYduration = (Math.abs(scrollYEnd - scrollYStart) / app.viewContainer.clientHeight) * 400;
        var scrollXduration = (Math.abs(scrollXEnd - scrollXStart) / app.viewContainer.clientHeight) * 300;
        scrollYduration = Math.max(scrollYduration, 100);
        scrollXduration = Math.max(scrollXduration, 100);
        scrollYduration = Math.min(scrollYduration, 600);
        scrollXduration = Math.min(scrollXduration, 600);

        var scrollDuration = scrollYduration;
        if(scrollYEnd !== undefined && scrollXEnd !== undefined) 
            scrollDuration = Math.max(scrollXduration, scrollYduration);
        if(scrollYEnd === undefined)
            scrollDuration = scrollXduration;


        anime({
            targets: targetObj,
            update: function() {
                if(scrollYEnd !== undefined)
                    element.scrollTop = Math.floor(scrollYStart * (1 - targetObj.t) + scrollYEnd * targetObj.t);

                if(scrollXEnd !== undefined)
                    element.scrollLeft = scrollXStart * (1 - targetObj.t) + scrollXEnd * targetObj.t;
            },
            t: [0, 1],
            easing: 'easeOutQuad',
            duration: scrollDuration,
        });
    },

    iosCopyToClipboard: function(el) {
        var oldContentEditable = el.contentEditable,
            oldReadOnly = el.readOnly,
            range = document.createRange();

        el.contentEditable = true;
        el.readOnly = false;
        range.selectNodeContents(el);

        var s = window.getSelection();
        s.removeAllRanges();
        s.addRange(range);

        el.setSelectionRange(0, 999999); // A big number, to cover anything that could be inside the element.

        el.contentEditable = oldContentEditable;
        el.readOnly = oldReadOnly;

        document.execCommand('copy');
    },

    copyToClipboard: function(obj) {
        let hiddenInput = document.createElement("input");
        hiddenInput.setAttribute("type", "text");
        hiddenInput.value = obj;
        hiddenInput.style.position = "absolute";
        hiddenInput.style.opacity = "0";
        document.body.appendChild(hiddenInput);
        hiddenInput.select();
        this.iosCopyToClipboard(hiddenInput);
        document.execCommand("copy");
        document.body.removeChild(hiddenInput);
    },

    /**
     * 
     * @param {String} recipient 
     * @param {String} body         NOTE: the caller should make sure URIEncoding applies for the string passed as a parameter 
     */
    sendMailPrompt: function(recipient, body) {
        var hiddenLink = document.createElement('a');
        hiddenLink.setAttribute("href", recipient + "?body=" + body);
        hiddenLink.style.position = "absolute";
        hiddenLink.style.opacity = "0";
        document.body.appendChild(hiddenLink);
        hiddenLink.click();
        document.body.removeChild(hiddenLink);
    },

    /**
     * 
     * @param {String} recipient 
     * @param {String} body         NOTE: the caller should make sure URIEncoding applies for the string passed as a parameter 
     */
    sendSMSPrompt: function(recipient, body) {
        // console.log("sms://+3490322111;?&body=" + encodeURIComponent(encodeURIComponent(link)));
        var hiddenLink = document.createElement('a');
        hiddenLink.setAttribute("href", "sms://+" + recipient + ";?&body=" + body);
        hiddenLink.style.position = "absolute";
        hiddenLink.style.opacity = "0";
        document.body.appendChild(hiddenLink);
        hiddenLink.click();
        document.body.removeChild(hiddenLink);
    },
};