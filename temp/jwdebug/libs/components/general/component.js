class Component {
    constructor() {
        this._container = document.createElement("div");
        this._container.classList.add("app-component");
        this._parent = undefined;

        this._eventListeners = { };
    }

    show() {

    }

    hide() {

    }

    /**
     * @param { AppWindow|Component|Object } window 
     */
    setParent(window) {
        this._parent = window;
    }

    getContainer() {
        return this._container;
    }

    update() {
        // throw "update should be implemented in derived classes";        
    }

    addEventListener(type, callback) {
        if(this._eventListeners[type] === undefined) {
            this._eventListeners[type] = [];
        }

        this._eventListeners[type].push(callback);
    }

    _fireEvent(type, args) {
        let listeners = this._eventListeners[type];

        if(listeners === undefined) return;

        for(let i = 0; i < listeners.length; i++) {
            let callback = listeners[i];

            args.eventType = type;
            callback(args);
        }
    }

    /**
     * See AppWindow.onWindowAttached() for an explanation
     */
    onComponentAttached() {

    }
}