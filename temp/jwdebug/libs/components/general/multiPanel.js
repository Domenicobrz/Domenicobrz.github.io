class MultiPanelComponent extends Component {
    constructor(args) {
        super();
        this._container.classList.add("app-component-multi-panel");
        
        this._header                = document.createElement("div");
        this._headerSelectedTrack   = document.createElement("div");
        this._panelsContainer       = document.createElement("div");
        this._header.className              = "header";
        this._panelsContainer.className     = "panels-container";
        this._headerSelectedTrack.className = "header-selected-track";
        // this._panelsContainer.scrollTo(0, 0);

        this._header.appendChild(this._headerSelectedTrack);
        if(!args.headerToBottom) {
            this._container.appendChild(this._header);
            this._container.appendChild(this._panelsContainer);    
        } else {
            this._header.classList.add("header-to-bottom");

            this._container.appendChild(this._panelsContainer);        
            this._container.appendChild(this._header);
        }

        // array of Objects of type { iconId:  ,  HTMLcontainer:  ,  name:  , components: [] }
        this._panels = [];
        this._currentPanel = 0;
        this._queuedSwitchToPanelIndex = -1; 

        this._slideSetup();
    }

    _slideSetup() {
        let pointerDown   = false;
        let dragActive    = false;
        let pointerDownXY = { x: -1, y: -1 };
        let lastXY        = { x: -1, y: -1 };

        // function used to convert mobile touches arguments to desktop-like arguments for mousemove events
        function pointerMoveProxy(e) {
            onPointerMove({
                clientX: e.touches[0].clientX,
                clientY: e.touches[0].clientY,
            });
        }

        let onPointerDown = (e) => {
            if(e.preventMultiPanelScroll) return;
            if(!app.animationManager.isIdle()) {
                console.log("multiPanel.js --- slide action blocked: animation was playing");
                return;
            } 

            pointerDown = true;
            pointerDownXY.x = e.clientX;
            pointerDownXY.y = e.clientY;
            lastXY.x        = e.clientX; 
            lastXY.y        = e.clientY;

            this._panelsContainer.addEventListener("mousemove", onPointerMove);
            this._panelsContainer.addEventListener("touchmove", pointerMoveProxy);
            window.addEventListener("mouseup",  onPointerUp);
            window.addEventListener("touchend", onPointerUp);
        };
        
        let onPointerUp = (e) => {
            // if the pointer was down then we might have scrolled enough
            if(pointerDown) {

                let delta    = lastXY.x - pointerDownXY.x;
                let absDelta = Math.abs(delta);
                if (absDelta > app.viewContainer.clientWidth * 0.3) {

                    let panelWidth    = app.viewContainer.clientWidth;
                    let newPanelIndex = delta > 0 ? this._currentPanel - 1 : this._currentPanel + 1;
                    if (newPanelIndex < 0) newPanelIndex = 0;
                    if (newPanelIndex >= this._panels.length) newPanelIndex = this._panels.length - 1;

                    this.switchPanel(newPanelIndex);

                    this._currentPanel = newPanelIndex;

                } else {
                    // this._panelsContainer.scrollTo({
                    //     left: this._currentPanel * app.viewContainer.clientWidth, 
                    //     behavior: 'smooth',
                    // });

                    let animTarget  = { t: 0 };
                    let scrollStart = this._panelsContainer.scrollLeft;
                    let scrollEnd   = this._currentPanel * app.viewContainer.clientWidth;
                    let duration    = (Math.abs(scrollStart - scrollEnd) / app.viewContainer.clientWidth) * 1200;
                    duration        = Math.min(duration, 350);

                    app.animationManager.addToNextTimeline({
                        targets: animTarget,
                        t: [0, 1],
                        update: () => {
                            let t = animTarget.t;
                            this._panelsContainer.scrollLeft = scrollStart * (1-t) + scrollEnd * t;
                        },
                        easing: 'easeOutQuad',
                        duration: duration,
                        offset: 0,
                    });
                }
            }

            pointerDown = false;
            dragActive  = false;
            pointerDownXY = { x: -1, y: -1 };


            this._panelsContainer.removeEventListener("mousemove", onPointerMove);
            this._panelsContainer.removeEventListener("touchmove", pointerMoveProxy);
            window.removeEventListener("mouseup",  onPointerUp);
            window.removeEventListener("touchend", onPointerUp);
        };
        
        let onPointerMove = (e) => {
            if(!pointerDown) return;
            if(!app.animationManager.isIdle()) {
                console.log("multiPanel.js --- drag stop: animation was playing");
                return;
            } 

            
            // ************ preventing drag action if we don't slide enough   
            if(!dragActive) {
                let dragDelta    = {
                    x: Math.abs(pointerDownXY.x - e.clientX),
                    y: Math.abs(pointerDownXY.y - e.clientY),
                };

                if( (dragDelta.x > app.viewContainer.clientWidth * 0.05) && (dragDelta.x > dragDelta.y * 2)) {
                    dragActive = true;
                    lastXY.x = e.clientX;
                    lastXY.y = e.clientY;
                } else {
                    return;
                }
            }
            // ************ preventing drag action if we don't slide enough - END



            let deltax = -(e.clientX - lastXY.x); 
            let deltay = e.clientY - lastXY.y;

            lastXY.x = e.clientX;
            lastXY.y = e.clientY;

            let totalDelta    = {
                x: pointerDownXY.x - lastXY.x,
                y: pointerDownXY.y - lastXY.y,
            };
            let absTotalDelta    = {
                x: Math.abs(pointerDownXY.x - lastXY.x),
                y: Math.abs(pointerDownXY.y - lastXY.y),
            };

            // ********** if we scrolled past a set amount, invoke pointerUp and return
            if(absTotalDelta.x > app.viewContainer.clientWidth * 0.4) {
                onPointerUp({
                    clientX: e.clientX,
                    clientY: e.clientY,
                });
                return;
            }
            // ********** if we scrolled past a set amount, invoke pointerUp and return - END

            this._panelsContainer.scrollBy(deltax, 0);
        };

        this._panelsContainer.addEventListener("mousedown",  onPointerDown);
        this._panelsContainer.addEventListener("touchstart", function(e) {
            onPointerDown({
                clientX: e.touches[0].clientX,
                clientY: e.touches[0].clientY,
                preventMultiPanelScroll: e.preventMultiPanelScroll,
            });
        });
    }


    addActionIcon(iconId, iconText) {
        let switchPanelBtn = document.createElement("div");
        switchPanelBtn.classList.add("switch-panel-btn");
        switchPanelBtn.classList.add("action-icon");
        switchPanelBtn.addEventListener("click", () => {
            this._fireEvent("action-icon-click", { iconId: iconId });
        });

        let svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        let useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        let iconTextElement = document.createElement("h4");
        iconTextElement.classList.add("icon-text");
        iconTextElement.textContent = iconText;

        useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', iconId);
        // svgElem.setAttribute("class", "action-icon");
        svgElem.appendChild(useElem);
        // svgElem.addEventListener("click", () => {
        //     this._fireEvent("action-icon-click", { iconId: iconId });
        // });

        switchPanelBtn.appendChild(svgElem);
        switchPanelBtn.appendChild(iconTextElement);
        // this._header.appendChild(svgElem);
        this._header.appendChild(switchPanelBtn);
    }

    /**
     * @param {String} iconId icon to associate in the panel-switch header 
     * @param {String} name   name associated with this panel
     * @param {String} iconText text to display under the icon
     */
    addPanel(iconId, name, iconText) {
        let switchPanelBtn = document.createElement("div");
        switchPanelBtn.classList.add("switch-panel-btn");

        let svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        let useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', iconId);
        svgElem.appendChild(useElem);

        let iconTextElement = document.createElement("h4");
        iconTextElement.classList.add("icon-text");
        iconTextElement.textContent = iconText;


        switchPanelBtn.appendChild(svgElem);
        switchPanelBtn.appendChild(iconTextElement);
        switchPanelBtn.setAttribute("data-index", this._panels.length);
        switchPanelBtn.addEventListener("click", this._onHeaderBtnClick.bind(this));
        // this._header.appendChild(svgElem);
        this._header.appendChild(switchPanelBtn);


        let panel = document.createElement("div");
        panel.classList.add("panel");
        // ************ required to solve a pretty obscure bug with scrolling in chrome
        panel.style.pointerEvents = "none";
        setTimeout(function() {
            panel.style.pointerEvents = "";
        }, 150);
        // ************ required to solve a pretty obscure bug with scrolling in chrome - END

        
        this._panelsContainer.appendChild(panel);
        this._panels.push({
            name: name,
            iconId: iconId,
            container: panel,
            components: [],
            index: this._panels.length,
        });
    }

    onComponentAttached() {
        // selecting all svgs that are not action-icons
        let spbs       = this._header.querySelectorAll(".switch-panel-btn:not(.action-icon)");
        if(spbs.length > 0) {
            spbs[0].classList.add("active");
            let viewContainerRect = app.viewContainer.getBoundingClientRect();
            let spbRect = spbs[0].getBoundingClientRect();
            this._headerSelectedTrack.style.left  = (spbRect.left - viewContainerRect.left) + "px";
            this._headerSelectedTrack.style.width = spbRect.width + "px";
        }

        // for some reason if I don't do this upon a page refresh the DOM remembers the scrollLeft 
        // of the container and it messes up with the fact that I expect the first panel to be selected onload
        this._panelsContainer.scrollTo(0, 0);


        // fire the event through every attached component
        for(let i = 0; i < this._panels.length; i++) {
            let panelComponents = this._panels[i].components;

            for(let j = 0; j < panelComponents.length; j++) {
                panelComponents[j].onComponentAttached();
            }
        }
    }

    getPanel(iconId) {
        for( let i = 0; i < this._panels.length; i++) {
            if (this._panels[i].iconId == iconId) 
                return this._panels[i];
        }
    }

    getActivePanelIndex() {
        return this._currentPanel;
    }

    /**
     * You also have to select to which panel you're adding the component, currently we're using the iconId as an index
     * @param {String} iconId 
     * @param {Component} component 
     */
    addComponent(iconId, component) {
        let panel = this.getPanel(iconId);
        panel.container.appendChild(component.getContainer());
        panel.components.push(component);

        component.setParent(panel.container); 
    }

    _onHeaderBtnClick(e) {
        let newPanel = parseInt(e.currentTarget.getAttribute("data-index"));
        this.switchPanel(newPanel);
    }

    intervalUpdate() {
        // If a switchpanel request was blocked because an animation was playing, let's fire it if the animationManager is idle
        // only the last modification to _queuedSwitchToPanelIndex is taken into account, eg:
        // the animator is playing, and a switchpanel request to index -> 1 is received, this gets queued by setting:
        //      this._queuedSwitchToPanelIndex = 1
        // while the animator is still playing, a new switchpanel request to index -> 2 is received, this gets queued by setting:    
        //      this._queuedSwitchToPanelIndex = 2
        // note that this operation overrides the previous request to index -> 1, because only the most recent assignment is taken into account
        if (this._queuedSwitchToPanelIndex !== -1 && app.animationManager.isIdle()) {
            console.log("multiPanel.js --- accepted queued switchpanel request");
            this.switchPanel(this._queuedSwitchToPanelIndex);
            this._queuedSwitchToPanelIndex = -1;
        }
    }

    switchPanel(nextPanelIndex, skipAnimation) {
        if (!app.animationManager.isIdle()) {
            console.log("multiPanel.js --- switchpanel request while animation was running, adding to queue..");
            this._queuedSwitchToPanelIndex = nextPanelIndex;
            return false;
        }
        if (this._currentPanel === nextPanelIndex) return false;

        // makes sure we block pending switchpanel requests 
        this._queuedSwitchToPanelIndex = -1;

        let viewContainerLeft = app.viewContainer.getBoundingClientRect().left; 
        // selecting all switch-panel-btns that are not action-icons
        let spbs         = this._header.querySelectorAll(".switch-panel-btn:not(.action-icon)");
        let iconTextElement = spbs[nextPanelIndex].querySelector("h4.icon-text");

        let padding = 3;
        let start        = this._headerSelectedTrack.getBoundingClientRect().left - viewContainerLeft;
        let finish       = iconTextElement.getBoundingClientRect().left - viewContainerLeft - padding;
        let currentWidth = this._headerSelectedTrack.clientWidth;
        let newWidth     = iconTextElement.clientWidth + padding * 2;

        let scrollStart = this._panelsContainer.scrollLeft;
        let scrollEnd   = nextPanelIndex * app.viewContainer.clientWidth;
        
        // **************** animate header track
        if(!skipAnimation) {
            app.animationManager.addToNextTimeline({
                targets: this._headerSelectedTrack,
                width: [currentWidth, newWidth],
                left: [start, finish],
                easing: 'easeOutQuad',
                duration: 350,
                offset: 0,
            });
            let animTarget  = { t: 0 };
            
            app.animationManager.addToNextTimeline({
                targets: animTarget,
                t: [0, 1],
                update: () => {
                    let t = animTarget.t;
                    this._panelsContainer.scrollLeft = scrollStart * (1-t) + scrollEnd * t;
                },
                easing: 'easeOutQuad',
                duration: 350,
                offset: 0,
            });
        } else {
            this._headerSelectedTrack.style.left  = finish   - padding + "px";
            this._headerSelectedTrack.style.width = newWidth + padding * 2 + "px";
            this._panelsContainer.scrollLeft = scrollEnd;
        }
        // **************** animate header track - END

        let from = this._currentPanel; 
        this._currentPanel = nextPanelIndex;

        Utils.setActive(spbs, nextPanelIndex);

        let eventArgs = {
            name: this._panels[nextPanelIndex].name,
            from: from,
            to:   nextPanelIndex,
            commandName: "panelswitch",
        };
        this._fireEvent("panelswitch", eventArgs);
        
        return true;
    }


    /**
     * Function fired to directly set a starting panel, it bypasses the animation
     * @param {Number} nextPanelIndex 
     */
    switchPanelImmediate(nextPanelIndex) {
        if (this._currentPanel === nextPanelIndex) return;
        this.switchPanel(nextPanelIndex, true);
    }
}