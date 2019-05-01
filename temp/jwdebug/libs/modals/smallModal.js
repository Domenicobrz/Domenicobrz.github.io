class SmallModal {
    constructor(args, content, okClickCallback, onHideCallback) {
        if (args === undefined) args = { };
        if (args.buttonText === undefined) args.buttonText = "OK";
        
        var modal       = document.createElement('div');
        modal.className = "modal-container";
        if (args.errorModal) modal.className = "modal-container error-modal";

        this._overlay = document.createElement('div');
        this._overlay.className = "small-modal-overlay";
    
        this.onHideCallback = onHideCallback;

        var modalHeader  = document.createElement('div');
        modalHeader.className = "modal-header";
        var modalContent = document.createElement('div');
        modalContent.className = "modal-content";
        modalContent.style.maxHeight = app.viewContainer.clientHeight * 0.5 + "px"; 
        if(content) modalContent.appendChild(content);
    
        var modalFooter  = document.createElement('div');
        modalFooter.className = "modal-footer";
        var okButton = document.createElement('div');
        okButton.className = "modal-ok-btn";
        okButton.textContent = args.buttonText;
        okButton.addEventListener("click", e => {
            if(okClickCallback) okClickCallback();
            this.hide(e); 
        });
        modalFooter.appendChild(okButton);
    
    
        this._closeBtnIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        let useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "#icon-close");
    
        this._closeBtnIcon.addEventListener("click", this.hide.bind(this));
        this._overlay.addEventListener("click", this.hide.bind(this));
    
        this._closeBtnIcon.appendChild(useElem);
        modalHeader.appendChild(this._closeBtnIcon);
        modal.appendChild(modalHeader);
        modal.appendChild(modalContent);
        modal.appendChild(modalFooter);
        this._overlay.appendChild(modal);
    
        this._overlay.style.opacity = 0;
        this._animating = false;
    }

    hide(e) {
        if(this._animating) return;
        if(e.target != e.currentTarget && e.currentTarget != this._closeBtnIcon) return;

        if(this.onHideCallback)
            this.onHideCallback();

        this._animating = true;
        anime({
            targets: this._overlay,
            opacity: [1, 0],
            duration: 250,
            easing: 'easeInOutSine',
            complete: () => {
                this._animating = false;
                app.viewContainer.removeChild(this._overlay);
            }
        });
    }

    show() {
        app.viewContainer.appendChild(this._overlay);
        this._animating = true;

        anime({
            targets: this._overlay,
            opacity: 1,
            duration: 250,
            easing: 'easeInOutSine',
            complete: () => {
                this._animating = false;
            }
        });
    }
}

/**
 * 
 * @param {Function} okButtonCallback   A function accepting a customerId string, which represents the text that was
 *                                      inserted by the user
 */
class CustomerIDModal extends SmallModal {
    constructor(okButtonCallback) {
        var content = document.createElement("div");
        content.innerHTML = 
            '<p class="modal-text">Enter your customer ID</p>' +
            '<input type="text" class="modal-input">';
            
        super({ }, content, function() {
            // if we get to this point the customer gave an input
            let input = content.getElementsByClassName("modal-input")[0];
            okButtonCallback(input.value);
        });
    }
}

/**
 * 
 * @param {String} text                 text to display in the modal dialog
 * @param {String} okButtonText         text to display as the "ok button"
 * @param {Function} okButtonCallback   callback when the "ok button" is pressed
 */
class SimpleTextModal extends SmallModal {
    constructor(text, okButtonText, okButtonCallback) {
        let displaytext = document.createElement("div");
        displaytext.innerHTML = '<p class="modal-text">' + text + '</p>';
    
        super({ buttonText: okButtonText }, displaytext, okButtonCallback);    
    }
}