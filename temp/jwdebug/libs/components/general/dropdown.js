class DropdownComponent extends Component {
    constructor(title, prefix, styling) {
        super();
        this._container.classList.add("app-component-dropdown");

        if(styling) {
            if(styling.width) {
                this._container.style.width = styling.width + "px";
            }
        }


        this._header = document.createElement("div");
        this._header.classList.add("header");
        this._header.textContent = title;

        this._ddButton = document.createElement("div");
        this._ddButton.classList.add("dropdown-btn");
        this._ddButton.innerHTML =
            '<span class="text1"> </span>' +    // use setValue to set a default value
            '<span class="text2">'+ (prefix || '') +'</span>' +  
            '<svg><use xlink:href="#icon-down-arrow"/></svg>';

        this._prefix = prefix;

        this._dropdownContainer = document.createElement("div");
        this._dropdownContainer.classList.add("dropdown-container");

        // this._dropdownCurtain = document.createElement("div");
        // this._dropdownCurtain.classList.add("dropdown-curtain");

        // let closeDropDown = () => {
        //     this.hideDropdown();
        //     this._dropdownCurtain.classList.remove("active");    
        // }
        // this._dropdownCurtain.addEventListener("mousedown", closeDropDown);
        // this._dropdownCurtain.addEventListener("touchstart", closeDropDown);


        this._ddButton.addEventListener("click", this._onDropdownClick.bind(this));


        this._selectedValue = undefined;

        this._container.appendChild(this._header);
        this._container.appendChild(this._ddButton);
        this._container.appendChild(this._dropdownContainer);
        // this._container.appendChild(this._dropdownCurtain);
    }

    // onComponentAttached() {
    //     let parent = this._container.parentElement;
    //     this._dropdownCurtain.style.width = parent.clientWidth + "px";
    //     this._dropdownCurtain.style.height = parent.clientHeight + "px";
    // }

    _onDropdownClick() {
        if(this._dropdownContainer.classList.contains("active")) {
            this.hideDropdown();
            return;
        } 

        // if we get here we have to open the dropdown and listen to click event to close it
        this._showDropdown();
        this._ddButton.style.zIndex = "1";
    }

    hideDropdown() {
        this._dropdownContainer.classList.remove("active");
        this._ddButton.style.zIndex = "";
    }

    _showDropdown() {
        // evaluate where we can get at least 40% of the screen space, downward is preferred
        let dbcr = this._container.getBoundingClientRect();
        let vcr  = app.viewContainer.getBoundingClientRect();
        let maxHeight = Math.floor(app.viewContainer.clientHeight * 0.4);

        let canOpenDownward = (vcr.bottom - dbcr.bottom) >= maxHeight; 
        let canOpenUpward = (dbcr.top - vcr.top) >= maxHeight; 

        // if(canOpenDownward) {
            this._dropdownContainer.style.top = dbcr.height + "px";
        // } else if(canOpenUpward) {
            // this._dropdownContainer.style.bottom = dbcr.height + "px";
        // } else {
            // if none is applicable, we should compute the maxHeight based on the highest available space in one of both
            // directions

            // atm we just prefer to open it downward no matter the consequences
            // this._dropdownContainer.style.top = dbcr.height + "px";
        // }

        // this._dropdownCurtain.classList.add("active");


        this._dropdownContainer.classList.add("active");
        this._dropdownContainer.style.maxHeight = maxHeight + "px";


        // it's mandatory since using .bind() in the cEventLis function would make it impossible to remove the event listener
        let scope = this;
        // using requestAnimationFrame because directly setting the listener here would immediately fire the function (have no idea why)
        // and if this happens, the event listener is immediately removed without being able to do anything useful
        requestAnimationFrame(() => {
            window.addEventListener("click", function cEventLis(e) {
                let bcr = scope._ddButton.getBoundingClientRect();
    
                if(e.clientX > bcr.right || e.clientX < bcr.left || e.clientY < bcr.top || e.clientY > bcr.bottom) {
                    scope.hideDropdown();
                }

                window.removeEventListener("click", cEventLis);
            });
        })



        // find the index of the active element 
        let activeIndex = -1;
        for (let i = 0; i < this._dropdownContainer.children.length; i++) {
            let value = this._dropdownContainer.children[i].children[1].textContent;
            if (value == this._ddButton.children[0].textContent) {
                activeIndex = i;
                break;
            }
        }

        if(activeIndex !== -1)
            Utils.setActive(this._dropdownContainer.children, activeIndex);
    }

    getValue() {
        return this._selectedValue;
    }

    /**
     * @param {Object} value    object containing at least a text property { text: ,  ... }
     */
    setValue(value) {
        this._selectedValue = value;
        this._ddButton.querySelector(".text1").textContent = value.text;
    }

    update(values) {
        Utils.removeAllHTMLChildren(this._dropdownContainer);

        for(let i = 0; i < values.length; i++) {
            let element = document.createElement("div");
            element.classList.add("dropdown-element");

            let circle = document.createElement("div");
            circle.classList.add("dropdown-circle");

            let text = document.createElement("div");
            text.classList.add("dropdown-text");
            text.textContent = values[i].text;

            element.appendChild(circle);
            element.appendChild(text);

            element.addEventListener("click", () => {
                this._ddButton.querySelector(".text1").textContent = values[i].text;

                this._selectedValue = values[i];

                this._fireEvent("item-click", {
                    value: values[i],
                });

                this._dropdownContainer.classList.remove("active");
            });

            this._dropdownContainer.appendChild(element);
        }
    }
}