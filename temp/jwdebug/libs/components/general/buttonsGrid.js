class ButtonsGridComponent extends Component {
    constructor(title, args) {
        super();
        this._container.classList.add("app-component-buttons-grid");

        this._header = document.createElement("div");
        this._header.classList.add("header");
        this._header.textContent = title;

        this._buttonsContainer = document.createElement("div");
        this._buttonsContainer.classList.add("buttons-container");


        this._buttons = [];

        this._container.appendChild(this._header);
        this._container.appendChild(this._buttonsContainer);
    }

    /**
     * 
     * @param {Array} buttons  an array of button objects of the form: { backgroundColor | text | imgSrc | width -- and more }
     */
    update(buttons, containerArgs) {
        Utils.removeAllHTMLChildren(this._buttonsContainer);

        this._buttons = buttons;

        if(containerArgs !== undefined) {
            if (containerArgs.width) {
                this._buttonsContainer.style.width = containerArgs.width + "px"; 
            }
            if (containerArgs.justifyContent) {
                this._buttonsContainer.style.justifyContent = containerArgs.justifyContent; 
            }
        }


        for(let i = 0; i < buttons.length; i++) {
            let buttonObj = buttons[i];
            let buttonEntry = document.createElement("div");
            buttonEntry.classList.add("btn-entry");

            if (buttonObj.backgroundColor) buttonEntry.style.background = "#" + buttonObj.backgroundColor;
            if (buttonObj.text) {
                buttonEntry.textContent = buttonObj.text;
                buttonEntry.classList.add("text-btn");            
            }
            if (buttonObj.imgSrc) {
                buttonEntry.style.background = "url(" + buttonObj.imgSrc + ")";
                buttonEntry.style.backgroundSize = "cover";
            }
            if (buttonObj.width) {
                let width = buttonObj.width;
                buttonEntry.style.flex = "0 0 " + width + "px";
                if(typeof width == "string" && width[width.length - 1] == "%") {
                    let percentage = parseFloat(width.substr(0, width.length - 1));
                    width = "0 0 " + percentage + "%";
                    buttonEntry.style.flex = width;
                }
            }
            if (buttonObj.margin !== undefined) {
                buttonEntry.style.margin = buttonObj.margin + "px";
            }
            if (buttonObj.height) {
                let height = buttonObj.height;
                buttonEntry.style.height = height + "px";
                if(typeof height == "string" && height[height.length - 1] == "%") {
                    throw "ButtonsGrid error -- the height of a button can't be specified in %";
                    // let percentage = parseFloat(height.substr(0, height.length - 1));
                    // height = "0 0 " + percentage + "%";
                }
            }
            if (buttonObj.size) {
                buttonEntry.style.fontSize = buttonObj.size + "em";
            }
            if (buttonObj.available === false) {
                // prepend unavailable svg
                buttonEntry.textContent = "NA";
            }


            buttonEntry.addEventListener("click", (e) => {
                super._fireEvent("item-click", {
                    element: e.currentTarget,
                    button: buttonObj,
                });
                Utils.setActive(this._buttonsContainer.children, i); 
            });

            this._buttonsContainer.appendChild(buttonEntry);
        }

        this._buttonsContainer.children[0].classList.add("active");
    }

    /**
     * 
     * @param {String|Number} index can be either the button's id (specified on creation) or a numeric index 
     */
    setAsActive(index) {
        if (typeof index == "string") {
            for(let i = 0; i < this._buttons.length; i++) {
                if(index == this._buttons[i].id) {
                    // we're essentially converting a color string to a numeric index
                    index = i;
                    break;
                }
            }
        }

        try {
			Utils.setActive(this._buttonsContainer.children, index);
		} catch(err) {
			console.log("could not set active!");
		}
    }

    getActive() {
        for(let i = 0; i < this._buttonsContainer.children.length; i++) {
            if(this._buttonsContainer.children[i].classList.contains("active"))
                return {
                    element: this._buttonsContainer.children[i],
                    button: this._buttons[i],
                };
        }
    }
}