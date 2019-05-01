class GridPhotosComponent extends Component {
    constructor() {
        super();
        this._container.classList.add("app-component-grid-photos");
    }

    /**
     * 
     * @param {Array} urls  an array of img urls
     */
    update(urls) {
        Utils.removeAllHTMLChildren(this._container);

        for(let i = 0; i < urls.length; i++) {
            let item = document.createElement("div");
            item.classList.add("photo-item");
            item.style.flex  = "0 0 " + app.viewContainer.clientWidth * 0.25 + "px";
            item.style.height = app.viewContainer.clientWidth * 0.25 + "px";

            item.style.background = "url(" + urls[i] + ")";
            item.style.backgroundSize = "cover";


            item.addEventListener("click", () => {
                this._fireEvent("item-click", {
                    element: item,
                    index: i,
                });
            });


            this._container.appendChild(item);
        }
    }
}