class SizeSelectorComponent extends Component {
    constructor(args) {
        super();
        this._container.classList.add("app-component-size-selector");

        this._header = document.createElement("div");
        this._header.classList.add("selector-header");
        this._header.textContent = "Size";

        this._sizesContainer = document.createElement("div");
        this._sizesContainer.classList.add("sizes-container");

        if(args === undefined || !args.hideHeader)
            this._container.appendChild(this._header);
        this._container.appendChild(this._sizesContainer);
    }

    // /**
    //  * 
    //  * @param {Array} availableSizes    an array of size-strings  
    //  */
    // update(availableSizes, activeSize) {
    //     Utils.removeAllHTMLChildren(this._sizesContainer);

    //     let activeIndex = 0;

    //     // create S, M, L, XL, XXL buttons and set all as unavailable
    //     let startingSizes = ["S", "M", "L", "XL", "XXL"];
    //     for(let i = 0; i < 5; i++) {
    //         let btn = document.createElement("span");
    //         btn.classList.add("size-entry");
    //         btn.classList.add("unavailable");
    //         btn.textContent = startingSizes[i];

    //         this._sizesContainer.appendChild(btn);
    //     }
    //     // set existing as available
    //     for(let i = 0; i < availableSizes.length; i++) {
    //         if(availableSizes[i] == "S")   this._sizesContainer.children[0].classList.remove("unavailable");
    //         if(availableSizes[i] == "M")   this._sizesContainer.children[1].classList.remove("unavailable");
    //         if(availableSizes[i] == "L")   this._sizesContainer.children[2].classList.remove("unavailable");
    //         if(availableSizes[i] == "XL")  this._sizesContainer.children[3].classList.remove("unavailable");
    //         if(availableSizes[i] == "XXL") this._sizesContainer.children[4].classList.remove("unavailable");
    //     }
    //     // add additional sizes if present
    //     for(let i = 0; i < availableSizes.length; i++) {
    //         let size = availableSizes[i];
    //         if(size != "S" && size != "M" && size != "X" && size != "XL" && size != "XXL") {
    //             let btn = document.createElement("span");
    //             btn.classList.add("size-entry");
    //             btn.textContent = availableSizes[i];
                
    //             this._sizesContainer.appendChild(btn);
    //         }
    //     }
    //     // set event listeners on all active buttons
    //     for(let i = 0; i < this._sizesContainer.children.length; i++) {
    //         let btn = this._sizesContainer.children[i];
    //         if(btn.classList.contains("unavailable")) continue;
    //         if(btn.textContent == activeSize) activeIndex = i;

    //         btn.addEventListener("click", (e) => {
    //             Utils.setActive(this._sizesContainer.children, i);

    //             super._fireEvent("item-click", {
    //                 element:  e.currentTarget,
    //                 size: btn.textContent,
    //             });
    //         });
    //     }

    //     Utils.setActive(this._sizesContainer.children, activeIndex);
    // }

    /**
     * 
     * @param {Array} availableSizes    an array of size-strings  
     */
    update(availableSizes, activeSize) {
        Utils.removeAllHTMLChildren(this._sizesContainer);        
        
        let activeIndex = 0;

        let sizesOrdering = {
            "XS":  45,
            "S":   50,
            "M":   60,
            "L":   70,
            "XL":  80,
            "XXL": 90,
        };

        // initializing default buttons
        var sizes = [
            {
                size: "S",
                available: false
            },
            {
                size: "M",
                available: false
            },
            {
                size: "L",
                available: false
            },
            {
                size: "XL",
                available: false
            },
            {
                size: "XXL",
                available: false
            },
        ];

        function getSizeIndex(size) {
            for (let i = 0; i < sizes.length; i++) {
                if (size == sizes[i].size) 
                    return i;
            }

            return -1;
        }

        function isThereAnUnavailableSize() {
            for (let i = 0; i < sizes.length; i++) {
                if (!sizes[i].available) 
                    return true;
            }

            return false;
        }

        function replaceUnavailable(newSize) {
            let newSizeOrder = sizesOrdering[newSize];
            if(newSizeOrder === undefined) newSizeOrder = 900;

            let minDelta = 999;
            let minDeltaIndex = -1;

            for (let i = 0; i < sizes.length; i++) {
                // size must be unavailable to be replaced
                if(sizes[i].available) continue;

                let order = sizesOrdering[sizes[i].size];
                let delta = Math.abs(order - newSizeOrder);

                if (delta < minDelta) {
                    minDelta = delta;
                    minDeltaIndex = i;
                }
            }

            // replace the unavailable button
            sizes[minDeltaIndex].size = newSize;
            sizes[minDeltaIndex].available = true;
        }

        for (let i = 0; i < availableSizes.length; i++) {
            let size = availableSizes[i];
        
            // if this size is one of the default buttons
            if(getSizeIndex(size) !== -1) {
                sizes[getSizeIndex(size)].available = true;
                continue;
            }

            // if it's not one of the default buttons, and there's at least 1 unavailable button, replace it
            // if more than 1 is unavailable, replace the unavailable button with the closest ordering value
            if(isThereAnUnavailableSize()) {
                replaceUnavailable(size);
                continue;
            }

            sizes.push({
                size: size,
                available: true,
            });
        } 



        // at this point we can output the HTML for the sizes buttons
        for(let i = 0; i < sizes.length; i++) {
            let btn = document.createElement("span");
            btn.classList.add("size-entry");
            btn.textContent = sizes[i].size;

            if(!sizes[i].available) btn.classList.add("unavailable");
            if(sizes[i].size == activeSize) activeIndex = i;
            
            this._sizesContainer.appendChild(btn);


            if(!sizes[i].available) {
                btn.classList.add("unavailable");
                continue;
            }

            btn.addEventListener("click", (e) => {
                Utils.setActive(this._sizesContainer.children, i);

                super._fireEvent("item-click", {
                    element:  e.currentTarget,
                    size:     btn.textContent,
                    commandName: "switch-size",
                    from:     sizes[activeIndex].size,
                    to:       btn.textContent,
                });

                // remember last selection -- is it even useful? controls are recreated each time a size-selector is clicked
                // it's not -- sizeSelector IS updated if the user clicks on one of the sizes buttons
                activeIndex = i;
            });
        }

        Utils.setActive(this._sizesContainer.children, activeIndex);
    }


    setAsActive(size) {
        let index = 0;

        if (typeof size == "string") {
            for(let i = 0; i < this._sizesContainer.children.length; i++) {
                let btn = this._sizesContainer.children[i];
                if(btn.textContent == size) {
                    index = i;
                    break;
                }
            }
        } 
        
        if (typeof size == "number") {
            index = size;
        }

        Utils.setActive(this._sizesContainer.children, index);
    }
}