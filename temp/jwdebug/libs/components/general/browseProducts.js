class BrowseProductsComponent extends Component {
    constructor() {
        super();
        this._container.classList.add("app-component-browse-products");

        this._header = document.createElement("div");
        this._header.classList.add("browse-header");
        

        this._container.appendChild(this._header);
    }

    /**
     * 
     * @param {Array} productsInfoArray    an array of products objects of the form: { title: x, desc: y, price: z }
     */
    update(productsInfoArray) {
        Utils.removeAllHTMLChildren(this._colorsContainer);

        // for(let j = 0; j < 10; j++)
        for(let i = 0; i < colors.length; i++) {
            let colorObj = colors[i];
            let colorEntry = document.createElement("div");
            colorEntry.classList.add("color-entry");

            if (colorObj.hex)    colorEntry.style.background = "#" + colorObj.hex;
            if (colorObj.imgSrc) {
                colorEntry.style.background = "url(" + colorObj.imgsrc + ")";
                colorEntry.style.backgroundSize = "cover";
            }

            if (!colorObj.available) {
                // prepend unavailable svg
                colorEntry.textContent = "NA";
            }


            colorEntry.addEventListener("click", (e) => Utils.setActive(this._colorsContainer.children, i) );

            this._colorsContainer.appendChild(colorEntry);
        }

        this._colorsContainer.children[0].classList.add("active");
    }
}