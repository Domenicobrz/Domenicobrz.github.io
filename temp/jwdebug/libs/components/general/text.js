class TextComponent extends Component {
    constructor(args) {
        super();
        this._container.classList.add("app-component-text");

        if(args.width)
            this._container.style.width = args.width;
    }

    update(HTMLtext) {
        Utils.removeAllHTMLChildren(this._container);
        this._container.innerHTML = HTMLtext;
    }
}