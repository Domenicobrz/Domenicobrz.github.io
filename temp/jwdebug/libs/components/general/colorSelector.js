class ColorSelectorComponent extends Component {
    constructor(title, styleArgs) {
        super();
        this._container.classList.add("app-component-color-selector");

        this._header = document.createElement("div");
        this._header.classList.add("selector-header");
        this._header.textContent = title;
        if(styleArgs !== undefined && styleArgs.marginTop)
            this._header.style.marginTop = styleArgs.marginTop;

        this._colorsContainer = document.createElement("div");
        this._colorsContainer.classList.add("colors-container");

        if(styleArgs !== undefined && styleArgs.underlineSelection) {
            this._colorsContainer.classList.add("underline-selection");
        }

        this._colors = [];
        this._lastActiveIndex = -1;

        if(styleArgs === undefined || !styleArgs.hideHeader)
            this._container.appendChild(this._header);
        
        this._container.appendChild(this._colorsContainer);
    }

    /**
     * 
     * @param {Array} colors    an array of color objects of the form: { hex:  , imgSrc:  ,  available:  }
     */
    update(colors, containerArgs) {
        Utils.removeAllHTMLChildren(this._colorsContainer);

        this._colors = colors;

        if(containerArgs !== undefined) {
            if (containerArgs.width) {
                this._colorsContainer.style.width = containerArgs.width + "px"; 
            }
            if (containerArgs.justifyContent) {
                this._colorsContainer.style.justifyContent = containerArgs.justifyContent; 
            }
        }

        // for(let j = 0; j < 10; j++)
        for(let i = 0; i < colors.length; i++) {
            let colorObj = colors[i];
            let colorEntry = document.createElement("div");
            colorEntry.classList.add("color-entry");

            let isImage = colorObj.hex.includes("/");

            if (!isImage) { // colorObj.hex) {
                colorEntry.style.background = "#" + colorObj.hex;
                
                let rgbColor = Utils.hexToRgb("#" + colorObj.hex);
                // if the color is bright enough, add a little gray border over it
                if(rgbColor.r + rgbColor.g + rgbColor.b > (235 * 3)) {
                    colorEntry.classList.add("bright-color");
                }
            }

            if (isImage) {
                colorEntry.style.background = "url(" + colorObj.hex + ")";
                colorEntry.style.backgroundSize = "cover";
            }
            // if (colorObj.imgSrc) {
            //     colorEntry.style.background = "url(" + colorObj.imgSrc + ")";
            //     colorEntry.style.backgroundSize = "cover";
            // }

            if(colorObj.width) {
                colorEntry.style.flex = "0 0 " + colorObj.width + "px";
                colorEntry.style.height = colorObj.width + "px";
            }

            if(colorObj.margin) {
                colorEntry.style.margin = colorObj.margin + "px";
            }

            if (!colorObj.available) {
                let fillColor = "#444"; 

                if (!isImage) {
                    // if it's a dark color, make the "cross" icon white
                    let rgbColor = Utils.hexToRgb("#" + colorObj.hex);
                    if(rgbColor.r < 100 && rgbColor.g < 100 && rgbColor.b < 100) {
                        fillColor = "#ddd";  
                    }
                }

                colorEntry.classList.add("unavailable");

                // applied for image color selectors
                let fadeBackground = '<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255,255,255,0.5)"></div>';

                // prepend unavailable svg
                colorEntry.innerHTML = (isImage ? fadeBackground : '') +
                    '<svg class="close-icon" style="fill: ' + fillColor + ';"><use xlink:href="#icon-close" /></svg>';
            }

            colorEntry.addEventListener("click", e => { 
                if(e.currentTarget.classList.contains("unavailable")) return;

                let toColor   = colorObj.hex;
                let fromColor = colors[this._lastActiveIndex].hex;

                // those two lines have to be called here, since after the "item-click" event fires the might be changed (even though 
                // now the garmentLoader should accept everything so this restriction might be useless -- lookinto it)
                Utils.setActive(this._colorsContainer.children, i);
                this._lastActiveIndex = i;
                
                super._fireEvent("item-click", {
                    element:  e.currentTarget,
                    colorHex: toColor,
                    commandName: "switch-color",
                    from:     fromColor,
                    to:       toColor,
                });
            });

            this._colorsContainer.appendChild(colorEntry);
        }
    }

    setAsActive(index) {
        if (typeof index == "string") {
            for(let i = 0; i < this._colors.length; i++) {
                if(index == this._colors[i].hex) {
                    // we're essentially converting a color string to a numeric index
                    index = i;
                    break;
                }
            }
        }

        this._lastActiveIndex = index;
        Utils.setActive(this._colorsContainer.children, index);
    }

    getActive() {
        for(let i = 0; i < this._colorsContainer.children.length; i++) {
            if(this._colorsContainer.children[i].classList.contains("active"))
                return {
                    element: this._colorsContainer.children[i],
                    color: this._colors[i],
                };
        }
    }
}