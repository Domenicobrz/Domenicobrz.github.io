class GarmentInfoHeaderComponent extends Component {
    constructor(args) {
        super();
        this._container.classList.add("app-component-garment-info-header");
    

        this._title = document.createElement("h3");
        this._brand = document.createElement("span");
        this._price = document.createElement("div");

        this._title.classList.add("title");
        this._brand.classList.add("brand");
        this._price.classList.add("price");


        this._container.appendChild(this._title);
        if(!args.hideBrand)
            this._container.appendChild(this._brand);
        this._container.appendChild(this._price);
    }

    update(title, brand, price) {
        this._title.textContent = title;
        this._brand.textContent = brand;
        this._price.textContent = "$ " + price;
    }
}