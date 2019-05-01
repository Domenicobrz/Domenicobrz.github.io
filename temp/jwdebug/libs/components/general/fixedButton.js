class FixedButtonComponent extends Component {
    constructor(options) {
        super();
        this._container.classList.add("app-component-fixed-button");


        if(options.icon)
            this._container.innerHTML = '<svg> <use xlink:href="' + options.icon + '" /></svg>';

        // the element over which this item needs to be fixed, will be used to define the viewport position of the button
        if(options.baseElement)
            this._fixedPositionBase = options.baseElement;

        if(options.width)
            this._container.style.width = options.width;

        if(options.height)
            this._container.style.height = options.height;


        this._container.addEventListener("click", () => {
            this._fireEvent("click");
        });



        // we dont need to make crazy calculations here to define the fixed elementsin terms of its parent element
        // because the parent element we're targeting (the MainAppWindow) has a transform applied, and elements with a
        // transform applied will change the coordinate system of fixed positioned elements as per spec:
        // http://www.w3.org/TR/css-transforms-1/
        // https://stackoverflow.com/questions/2637058/positions-fixed-doesnt-work-when-using-webkit-transform
        // https://stackoverflow.com/questions/15194313/transform3d-not-working-with-position-fixed-children/15256339#15256339
        this._container.style.bottom = "15px";
        this._container.style.right  = "12px";

        this._currentIcon = options.icon;

        this._hidden = true;
    }

    isHidden() {
        return this._hidden;
    }

    getCurrentIcon() {
        return this._currentIcon;
    }

    hide() {
        this._container.classList.remove("visible");
        this._hidden = true;
    }

    show() {
        this._container.classList.add("visible");
        this._hidden = false;
    }

    switchIcon(icon) {
        // removing and re-inserting the icon will trigger again the animation specified in CSS
        this._container.innerHTML = '<svg> <use xlink:href="' + icon + '" /></svg>';
        this._currentIcon = icon;
    }
}