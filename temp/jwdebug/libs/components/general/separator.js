/**
 * To be used as a general-purpose separator,
 * a text divider with an icon,
 * or just a vertical separator between components
 */
class SeparatorComponent extends Component {
    constructor(args) {
        super();

        this._container.classList.add("app-component-separator");

        if(args.icon) {
            this._container.innerHTML = '<svg><use xlink:href="'+args.icon+'"/></svg>';
        }

        if(args.line) {
            this._container.classList.add("line-separator");
        }

        if(args.height) {
            this._container.style.height = args.height + "px";
            // if the container is a flex-column container, height alone seems to be ignored
            this._container.style.minHeight = args.height + "px";
        }
    }
}