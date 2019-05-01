class WindowHeaderComponent extends Component {
    constructor(args) {
        super();
        this._container.classList.add("app-component-window-header");
        this._titleElement = document.createElement("h2");

        let title = args.title || "";

        this._titleElement.className = "title";
        this._titleElement.textContent = title;
        this._container.appendChild(this._titleElement);
    }

    addIcon(iconId, beforeTitle, onClickCallback) {
        let svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        let useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');

        useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', iconId);
        svgElem.appendChild(useElem);

        if(onClickCallback !== undefined)
            svgElem.addEventListener("click", onClickCallback);

        if(beforeTitle)
            this._container.insertBefore(svgElem, this._titleElement);
        else 
            this._container.appendChild(svgElem);
    }


    setParent(window) {
        super.setParent(window);

        let parent = this._parent.getContainer();
        parent.addEventListener("scroll", function() {
            console.log("scroll detected");
        });
    }

    switchTitleName(newName) {
        if(!app.animationManager.isIdle()) return;

        let ty = app.viewContainer.clientHeight * 0.04;

        app.animationManager.addToNextTimeline({
            targets: this._titleElement,
            translateY: [ { value: [0, -ty] }, { value: [ty, 0] } ],
            opacity:    [ { value: [1, 0] }, { value: [0, 1] } ],
            update: (anim) => {
                if(anim.progress > 50) {
                    this._titleElement.textContent = newName;
                }
            },
            duration: 450,
            easing: 'easeOutQuad',
            offset: 0,
        });
    }
}