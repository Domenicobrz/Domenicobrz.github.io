var initialized = false;
var cachedResult = false;

function isMobile() {
    if (initialized) return cachedResult;
    initialized = true;

    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        cachedResult = true;
        return true;
    }
  
    if (/android/i.test(userAgent)) {
        cachedResult = true;
        return true;
    }
  
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        cachedResult = true;
        return true;
    }
  
    cachedResult = false;
    return false;
}


export { isMobile };