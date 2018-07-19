function initRateStars() {
    var DOMstars = document.querySelectorAll('div.fcentered svg[id*="svgRateStar"]');


    var enterCallback = function(e) {
        var starId = parseInt(e.currentTarget.id.substr(e.currentTarget.id.length - 1, 1));
        for(var i = 0; i < starId; i++) {
            DOMstars[i].setAttribute("class", "active");            
        }        
    };

    var leaveCallback = function(e) {
        for(var i = 0; i < 5; i++) {
            DOMstars[i].setAttribute("class", "");                        
        }
    };


    for(var i = 0; i < DOMstars.length; i++) {
        DOMstars[i].addEventListener("mouseenter", enterCallback);
        DOMstars[i].addEventListener("mouseleave", leaveCallback);
    }
}