/**
 * Currently used to detect iPhone6/S and correct the convolution bug
 * This class could be used in the future to gather device-specific information for other purposes
 */
function DeviceInfo() {
    
    this.isIPhone6 = false;
    this.isIOS     = false;
    this.isMobile  = false;


    var mobileDetect = new MobileDetect(window.navigator.userAgent);

    if(mobileDetect.mobile())      this.isMobile = true;
    if(mobileDetect.os() == "iOS") this.isIOS = true;

    
    if(isIphoneUp6()) this.isIPhone6 = true;


    function isIphoneUp6() {
        var isIPhone = false;
        isIPhone = !!navigator.userAgent.match(/iPhone/i);

        if(isIPhone){
            var iHeight = window.screen.height;
            var iWidth = window.screen.width;
            if ((iWidth === 375 && iHeight === 667) || (iWidth === 414 && iHeight === 736)) {
                return true;
            }
        } else {        
            return false;
        }
    }
}