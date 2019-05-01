window.addEventListener("load", init);

// global variables are all encapsulated through app
window.app = { 
    viewContainer:      undefined,
    deviceInfo:         undefined,
    guiManager:         undefined,
    jsonAPIController:  undefined,
    garmentLoader:      undefined,

    webGLViewer:        undefined,

    customerModal:      undefined,
    menuModal:          undefined,
    welcomeModal:       undefined,
    startLoadingModal:  undefined,
    photoCarouselModal: undefined,

    animationManager:   undefined,

    mainWindow:         undefined,
    controlsWindow:     undefined,
};

function init() {    

    function initAtFullSize() {
        // ************** initializing viewContainer
        app.viewContainer = document.querySelector(".view-container");
        app.deviceInfo = new DeviceInfo();

        // if(app.deviceInfo.isMobile && (innerWidth / innerHeight) < 1) {
            // app.viewContainer.style.width  = innerWidth  + "px";
            // app.viewContainer.style.height = innerHeight + "px";
        // }
        // ************** initializing viewContainer - END



        app.localStorageManager = new LocalStorageManager();
        app.jsonAPIController   = new JSONAPIController(); 
        app.garmentLoader       = new GarmentLoader();

        // app.menuModal           = new MenuModal();
        app.downloadAppModal    = new DownloadAppModal();
        app.resetPasswordModal  = new ResetPasswordModal();
        app.loginModal          = new LoginModal();
        app.customerModal       = new CustomerModal();

        // will show automatically
        app.mainWindow          = new MainWindow();
        app.controlsWindow      = new ControlsWindow();

        // linking modal views
        app.customerModal.linkTo(app.mainWindow.getContainer());
        app.downloadAppModal.linkTo(app.mainWindow.getContainer());
        app.loginModal.linkTo(app.mainWindow.getContainer());
        app.resetPasswordModal.linkTo(app.loginModal.getContainer());


        window.onmessage = function(e) {
            switch (e.data.type) {
                case "switch-size":
                    app.mainWindow.switchSizeRequest(e.data.newSize);
                    break;
                case "switch-color":
                    app.mainWindow.switchColorRequest(e.data.newColor);
                    break;
            }
        };

        window.addEventListener("keypress", (e) => {
            // if(e.key == "j") {
            //     app.mainWindow.switchSizeRequest("S");
            //     console.log("*************** fired direct request");
            // }
        });


        window.addEventListener("resize", function(e) {
            // app.viewContainer.style.width  = innerWidth  + "px";
            // app.viewContainer.style.height = innerHeight + "px";

            if(app.webGLViewer) {
                app.webGLViewer.onResize(app.viewContainer.clientWidth, app.viewContainer.clientHeight, true);
            }
        });
    }





    var intervalHandle = setInterval( function intervalCallback() {
        if(innerWidth > 10) {
            initAtFullSize();
            clearInterval(intervalHandle);
        }
    }, 50);
}