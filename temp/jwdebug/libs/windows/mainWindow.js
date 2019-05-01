class MainWindow {
    constructor() {
        this._clock50ms  = new Clock(0, 0.05);
        this._clock100ms = new Clock(0, 0.1);
        this._clock250ms = new Clock(0, 0.25);
        this._clock500ms = new Clock(0, 0.5);

        this._firstViewerDataDownload = true;

        this._colorObjects = [];

        this._activeErrorModal = undefined;

        this._container = document.createElement("div");
        this._container.classList.add("main-window");

        this._container.innerHTML = `
            <div class="canvas-container">
        
            </div>

            <div class="lds-roller-container">
                <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        `;

        this._canvasContainer        = this._container.querySelector(".canvas-container");
        this._ldsRollerContainer     = this._container.querySelector(".lds-roller-container");
        this._ldsRollerContainer.classList.add("active");
        this._ldsRollerContainer.classList.add("starting-styling");




        app.customerModal.addEventListener("switchbody-request", () => {
            app.localStorageManager.setGeneraldataKey("viewerState", "personalized");

            this._requestViewerData();
        });

        this._requestViewerData();

        this._oncePerFrameUpdate(0);
    }

    _oncePerFrameUpdate(now) {
        requestAnimationFrame(this._oncePerFrameUpdate.bind(this));

        if(this._clock50ms.elapsed(now)) {

        }

        if(this._clock250ms.elapsed(now)) {

        }
    }

    _requestViewerData() {
      
        let canvasDimensions = { w: app.viewContainer.clientWidth, h: app.viewContainer.clientHeight };
        app.webGLViewer      = new WebGLViewer(canvasDimensions.w, canvasDimensions.h);
        this._canvasContainer.insertBefore(app.webGLViewer.renderer.domElement, this._canvasContainer.firstChild);
        
        // needs to be fired instantly and without delays, otherwise there's the risk that the user selects a garment before this function fires and
        // the garment's batch will be queued before the envmap batch is
        // in that case materials wont be compiled correctly
        
        app.garmentLoader.loadEnvmap(this._onEnvmapLoaded.bind(this));

        this._firstViewerDataDownload = false;
    }


    _onEnvmapLoaded() {
        app.viewContainer.appendChild(this._container);
        this._ldsRollerContainer.classList.add("active");
        this._ldsRollerContainer.classList.remove("starting-styling");

        anime.timeline({ 
            autoplay: true,
            complete: () => {
                this._container.style.transform = "";

                this._ldsRollerContainer.classList.remove("active");
            },
        })
        .add({
            targets: this._container,
            opacity: [0, 1],
            scale: [0.7, 1],
            duration: 300,
            offset: 0,
            easing: "easeOutQuad",
        })
    }

    getContainer() {
        return this._container;
    }
}