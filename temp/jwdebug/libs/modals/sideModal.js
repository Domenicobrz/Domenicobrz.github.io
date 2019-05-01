/**
 * TODO: animations with anime.js for slide-to-close functionality are not controlled for clashes, so 
 *       you can still see some artifacts/error if you do too many actions in a short time 
 */
class SideModal {
    constructor(side, width) {
        this._side = side || "left";
        this._width = width || app.viewContainer.clientWidth * 0.8;

        this._container = document.createElement("div");
        this._container.classList.add("app-side-modal-container"); 

        this._eventListeners = { };


        this._modalContainer = document.createElement("div");
        this._modalContainer.classList.add("app-side-modal"); 

        this._modalContainer.style.width = this._width + "px";
        
        // will be by default a left sided modal
        if (this._side == "left")  this._modalContainer.style.left  = "0";
        if (this._side == "right") this._modalContainer.style.right = "0";



        this._container.addEventListener("click", (e) => {
            if(e.target == this._container) {
                this.hide();
            }
        });
        this._container.appendChild(this._modalContainer);


        this._linkTarget = undefined;
        this._linkTargetTranslationFactor = 0.35;

        this._slideSetup();
    }

    _slideSetup() {
        let translationX  = 0;
        let pointerDown   = false;
        let dragActive    = false;
        let pointerDownXY = { x: -1, y: -1 };
        let lastXY        = { x: -1, y: -1 };

        function pointerMoveProxy(e) {
            onPointerMove({
                clientX: e.touches[0].clientX,
                clientY: e.touches[0].clientY,
            });
        }

        let onPointerDown = (e) => {
            pointerDown = true;
            pointerDownXY.x = e.clientX;
            pointerDownXY.y = e.clientY;
            lastXY.x       = e.clientX; 
            lastXY.y       = e.clientY;

            this._modalContainer.addEventListener("mousemove", onPointerMove);
            this._modalContainer.addEventListener("touchmove", pointerMoveProxy);
            window.addEventListener("mouseup",  onPointerUp);
            window.addEventListener("touchend", onPointerUp);
        };
        
        let onPointerUp = () => {
            // if the pointer was down then we might have scrolled enough
            if(pointerDown && dragActive) {

                let delta    = lastXY.x - pointerDownXY.x;
                let absDelta = Math.abs(delta);
                if (absDelta > app.viewContainer.clientWidth * 0.25) {

                    this.hide(translationX);

                } else {

                    // we cannot use this.show() since it calls appendChild()
                    anime({
                        targets: this._modalContainer,
                        translateX: [translationX, 0],
                        duration: 300,
                        easing: 'easeOutQuad',
                    });

                    if(this._linkTarget) {
                        let stx = this._width * this._linkTargetTranslationFactor;
                        if(this._side == "right") stx = -stx;
            
                        let from = stx + translationX * 0.2;
                        let to   = stx;

                        anime({
                            targets: this._linkTarget,
                            translateX: [from, to],
                            duration: 300,
                            easing: 'easeOutQuad',
                        });
                    }
                }
            }

            pointerDown   = false;
            dragActive    = false;
            pointerDownXY = { x: -1, y: -1 };

            this._modalContainer.removeEventListener("mousemove", onPointerMove);
            this._modalContainer.removeEventListener("touchmove", pointerMoveProxy);
            window.removeEventListener("mouseup",  onPointerUp);
            window.removeEventListener("touchend", onPointerUp);
        };
        
        let onPointerMove = (e) => {
            if(!pointerDown) return;
            
            // ************ preventing drag action if we don't slide enough   
            if(!dragActive) {
                let dragDelta    = {
                    x: e.clientX - pointerDownXY.x,
                    y: e.clientY - pointerDownXY.y,
                };

                let requiredDelta = app.viewContainer.clientWidth * 0.05;
                if (this._side == "left") requiredDelta = -requiredDelta;

                if(this._side == "left"  && dragDelta.x > requiredDelta) return;
                if(this._side == "right" && dragDelta.x < requiredDelta) return;
                if(Math.abs(dragDelta.x) < Math.abs(dragDelta.y * 2))    return;

                dragActive = true;
                // lastXY.x = e.clientX;
                // lastXY.y = e.clientY;
                pointerDownXY.x = e.clientX;                
                pointerDownXY.y = e.clientY;
            }
            // ************ preventing drag action if we don't slide enough - END

            lastXY.x = e.clientX;
            lastXY.y = e.clientY;

            let totalDelta    = {
                x: lastXY.x - pointerDownXY.x,
                y: lastXY.y - pointerDownXY.y,
            };

            let requiredDelta = app.viewContainer.clientWidth * 0.3;
            if (this._side == "left") requiredDelta = -requiredDelta;

            // ********** if we scrolled past a set amount, invoke pointerUp and return
            if( (this._side == "left"  && totalDelta.x < requiredDelta) || 
                (this._side == "right" && totalDelta.x > requiredDelta) ) {

                onPointerUp({
                    clientX: e.clientX,
                    clientY: e.clientY,
                });
                return;
            }
            // ********** if we scrolled past a set amount, invoke pointerUp and return - END

            
            // ********** we didn't translate enough, so lets set the temporary translation ourselves
            translationX = totalDelta.x;
            if (this._side == "left"  && translationX > 0) translationX = 0; 
            if (this._side == "right" && translationX < 0) translationX = 0; 
            this._modalContainer.style.transform = "translateX(" + translationX + "px)";
            if (this._linkTarget) {
                let stx = this._width * this._linkTargetTranslationFactor;
                if(this._side == "right") stx = -stx;

                this._linkTarget.style.transform = "translateX(" + (stx + translationX * 0.2) + "px)";
            }
            // ********** we didn't translate enough, so lets set the temporary translation ourselves - END
        };

        this._modalContainer.addEventListener("mousedown",  onPointerDown);
        this._modalContainer.addEventListener("touchstart", function(e) {
            onPointerDown({
                clientX: e.touches[0].clientX,
                clientY: e.touches[0].clientY,
            });
        });
    }



    /**
     * 
     * @param { Number } from used internally, can be safely ignored
     */
    hide(from) {
        if (from === undefined) from = 0;

        let tx = this._width;
        if(this._side == "left") tx = -tx;

        this._container.classList.remove("active");
        anime({
            targets: this._modalContainer,
            translateX: [from, tx],
            complete: () => { 
                this._onClose();
                app.viewContainer.removeChild(this._container); 
            },
            duration: 300,
            easing: 'easeOutQuad',
        });
        if(this._linkTarget) {
            anime({
                targets: this._linkTarget,
                translateX: [-(tx - from) * this._linkTargetTranslationFactor, 0],
                duration: 300,
                easing: 'easeOutQuad',
            });
        }
    }

    // useful in derived classes
    _onClose() {

    }

    show() {
        // ftx - reads "from translation x"
        let ftx = app.viewContainer.clientWidth * 0.8;
        if(this._side == "left") ftx = -ftx;

        app.viewContainer.appendChild(this._container);

        // cause reflow otherwise for some reason it doesn't transition when switching classes
        void this._container.offsetHeight;

        this._container.classList.add("active");
        anime({
            targets: this._modalContainer,
            translateX: [ftx, 0],
            duration: 300,
            easing: 'easeOutQuad',
        });

        if(this._linkTarget) {
            anime({
                targets: this._linkTarget,
                translateX: [0, -ftx * this._linkTargetTranslationFactor],
                duration: 300,
                easing: 'easeOutQuad',
            });
        }
    }

    linkTo(target) {
        this._linkTarget = target;
    }


    getContainer() {
        return this._container;
    }
    
    addEventListener(type, callback) {
        if(this._eventListeners[type] === undefined) {
            this._eventListeners[type] = [];
        }

        this._eventListeners[type].push(callback);
    }

    _fireEvent(type, args) {
        let listeners = this._eventListeners[type];

        if(listeners === undefined) return;

        for(let i = 0; i < listeners.length; i++) {
            let callback = listeners[i];
            callback(args);
        }
    }
}