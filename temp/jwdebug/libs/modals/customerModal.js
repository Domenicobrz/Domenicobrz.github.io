class CustomerModal extends SideModal {
    constructor() {
        super("right", app.viewContainer.clientWidth);
        this._modalContainer.classList.add("app-customer-modal"); 

        this._components = [];


        // ******* main header *******
        let header = document.createElement("div");
        header.classList.add("customer-modal-header");
        header.innerHTML = 
            '<header>' +
            '   <svg class=""><use xlink:href="" /></svg>' +  
            '   <h2>Change Body</h2>' +  
            '   <svg class="close-icon"><use xlink:href="#icon-arrow-left" /></svg>' +  
            '</header>' +
            '<p>Here you can change various parameters to select a different bodyshape to try your products on</p>';

        let closeIcon = header.querySelector('svg.close-icon');
        closeIcon.addEventListener("click", () => {
            this.hide(); // will call eventually onClose
        });

        this._modalContainer.appendChild(header);
        // ******* main header ******* - END




        // ******* second panel components
        // let dropdownsWidth      = Math.floor(app.viewContainer.clientWidth * 0.39);
        // if(dropdownsWidth < 137) dropdownsWidth = 137;

        let gender = app.localStorageManager.getBodydataKey("gender");
        let m = gender == "male" ? true : false;
        let f = gender == "female" ? true : false;

        this._genderSelector    = new ButtonsGridComponent("Gender");
        this._setGenderSelector({ male: m, female: f });
		// console.log("{ male: "+m+", female: "+f+" }");
        this._genderSelector.addEventListener("item-click", this._onSwitchGender.bind(this));
        this._weightSelector    = new DropdownComponent("Weight", "lbs");
        this._setWeightSelector();
        this._heightSelector    = new DropdownComponent("Height", "");
        this._setHeightSelector();      
        // TO RE-ENABLE SKINCOLOR & PANTS SELECTOR MAKE SURE THE _onSwitchBodyButtonClick IS ALSO UPDATED
        // TO RE-ENABLE SKINCOLOR & PANTS SELECTOR MAKE SURE THE _onSwitchBodyButtonClick IS ALSO UPDATED
        // TO RE-ENABLE SKINCOLOR & PANTS SELECTOR MAKE SURE THE _onSwitchBodyButtonClick IS ALSO UPDATED
        // this._skinToneSelector  = new ColorSelectorComponent("Skintone");
        // this._setSkintoneColorComponent();
        this._bodyshapeSelector = new ButtonsGridComponent("Bodyshape");
        this._setBodyshapeButtons({ male: m, female: f });
        // this._pantsSelector     = new ButtonsGridComponent("Pants");
        // this._setPantsButtons({ male: m, female: f });
        this._switchBodyButton  = new ButtonsGridComponent();
        this._switchBodyButton.addEventListener("item-click", this._onSwitchBodyButtonClick.bind(this));
        this._setSwitchBodyButton();
        // ******* second panel components - END


        //this.addComponent(this._genderSelector);
        this.addComponent(this._weightSelector);
        this.addComponent(this._heightSelector);
        // this.addComponent(this._skinToneSelector);
        this.addComponent(this._bodyshapeSelector);
        // this.addComponent(this._pantsSelector);
        this.addComponent(this._switchBodyButton);
        this.addComponent(new SeparatorComponent({
            height: 50
        }));


        // temporarily add this modal to the view
        app.viewContainer.appendChild(this._container);
        for (let i = 0; i < this._components.length; i++) {
            this._components[i].onComponentAttached();
        }
        // after all components have been attached
        app.viewContainer.removeChild(this._container);



        this._modalContainer.addEventListener("click", (e) => {
            if(e.target === this._modalContainer) {
                this._weightSelector.hideDropdown();
                this._heightSelector.hideDropdown();
            }
        });


        window.addEventListener("resize", () => {
            this._width = app.viewContainer.clientWidth;
            this._modalContainer.style.width = this._width + "px";
        });
    }



    _onSwitchBodyButtonClick(args) {
        let selectedHeight    = this._heightSelector.getValue().id;
        let selectedWeight    = parseInt(this._weightSelector.getValue().text);
        // let selectedSkinColor = this._skinToneSelector.getActive().color.hex;
        // let selectedPants     = this._pantsSelector.getActive().button.id;
        let selectedBodyShape = this._bodyshapeSelector.getActive().button.id;
        let selectedGender    = this._genderSelector.getActive().button.id;
        
        let changeDetected = true;
        if( selectedHeight == app.localStorageManager.getBodydataKey("height") &&
            selectedWeight == app.localStorageManager.getBodydataKey("weight") &&
            // selectedSkinColor == app.localStorageManager.getBodydataKey("mannequinColor") &&
            // selectedPants == app.localStorageManager.getBodydataKey("pantsType") &&
            selectedBodyShape == app.localStorageManager.getBodydataKey("bodyShape") &&
            selectedGender == app.localStorageManager.getBodydataKey("gender")) {
                
                changeDetected = false;
                // console.log("customerModal.js --- no change detected, skipping new viewer-data request");
            }

        // app.localStorageManager.setBodydataKey("mannequinColor", selectedSkinColor);
        // app.localStorageManager.setBodydataKey("pantsType", selectedPants);
        app.localStorageManager.setBodydataKey("bodyShape", selectedBodyShape);
        app.localStorageManager.setBodydataKey("height", selectedHeight);
        app.localStorageManager.setBodydataKey("weight", selectedWeight);
        app.localStorageManager.setBodydataKey("gender", selectedGender);


        if(changeDetected) {
            // setTimeout(function() {
            //     app.guiManager.request(
            //         GUIManager.request.API_REQUEST, 
            //         { type: GUIManager.apiRequest.VIEWER_DATA_UPDATE }
            //     );  
            // }, 250);
            this._fireEvent("switchbody-request");
        }  

        // required because if this function was called after an "onClose" event we would be calling this.hide() twice
        if(!args.preventHiding)
            this.hide();
    }

    _onSwitchGender(args) {
        var m = args.button.id == "male" ? true : false;
        var f = args.button.id == "female" ? true : false;
        this._setPantsButtons({     male: m, female: f, skipSetAsActive: true });
        this._setBodyshapeButtons({ male: m, female: f, skipSetAsActive: true });
    }

    _setGenderSelector(args) {
        let gender = args.female ? "female" : "male";
        // let margin = Math.floor(app.viewContainer.clientWidth * 0.01);


        let buttons = [
            { text: "Male",   size: 0.9, id: "male" },
            { text: "Female", size: 0.9, id: "female" },
        ];

        this._genderSelector.update(buttons);
        this._genderSelector.setAsActive(gender);  
    }

    _setWeightSelector() {
        let values = [ ];
        for(let i = 80; i < 240; i += 10) {
            values.push({
                text: "" + i,
            });
        }
        this._weightSelector.update(values);
        this._weightSelector.setValue({
            text: app.localStorageManager.getBodydataKey("weight")
        });
    }

    _setHeightSelector() {
        let values = [ ];

        for(let i = 60; i < 80; i++) {
            let inches = i % 12;
            let feet   = Math.floor(i / 12);
    
            let text = "" + feet + "' " + inches + "''";   
            values.push({
                text: text,
                id: i,
            });
        }

        this._heightSelector.update(values);

        let current = parseFloat(app.localStorageManager.getBodydataKey("height"));
        let inches = current % 12;
        let feet   = Math.floor(current / 12);
        let text = "" + feet + "' " + inches + "''";  
        this._heightSelector.setValue({
            text: text,
            id: current,
        });
    }

    _setSwitchBodyButton() {
        let buttons = [
            { 
                text: "Change Body",
                size: 0.95,
                width: app.viewContainer.clientWidth * 0.6, 
            }
        ];

        this._switchBodyButton.getContainer().classList.add("change-body-btn");
        this._switchBodyButton.update(buttons);
        this._switchBodyButton.getContainer().querySelector(".header").style.margin = "0.5em";
    }

    _setSkintoneColorComponent() {
        let colorHexes = [
            "f8ddc4",
            "efcfb8",
            "f6e3ad",
            "efc797",
            "e8bb93",
            "cc9566",
            "aa8b67",
            "956242",
            "824a24",
            "4a210f",
        ];
        let colorObjects = [];

        let containerArgs = {
            // width: Math.floor(app.viewContainer.clientWidth * 0.47)
            // justifyContent: "flex-start",
        };


        
        for (let i = 0; i < colorHexes.length; i++) {
            colorObjects.push({
                hex: colorHexes[i],
                imgSrc: undefined,
                available: true,
                width:  Math.floor(app.viewContainer.clientWidth * 0.11),
                margin: 0,
            });
        }

        this._skinToneSelector.getContainer().querySelector(".colors-container").style.margin = "0 -0.35em";
        this._skinToneSelector.update(colorObjects, containerArgs);
        this._skinToneSelector.setAsActive(app.localStorageManager.getBodydataKey("mannequinColor"));
    }

    _setPantsButtons(args) {
        let margin = Math.floor(app.viewContainer.clientWidth * 0.01);

        // let containerArgs = {
        //     width: Math.floor(app.viewContainer.clientWidth * 0.5)
        // };

        let skipSetAsActive = false;
        if(args !== undefined && args.skipSetAsActive !== undefined) skipSetAsActive = true;

        let buttons = [];
        if(args.female) {
            buttons = [
                { text: "Jeans",    size: 0.9, id: "jeans" },
                { text: "Slacks",   size: 0.9, id: "slacks" },
                { text: "Leggings", size: 0.9, id: "leggings" },
            ];    
        }
        if(args.male) {
            buttons = [
                { text: "Jeans",    size: 0.9, id: "mjeans" },
            ];    
        }
        
        this._pantsSelector.update(buttons);
        if(!skipSetAsActive)
            this._pantsSelector.setAsActive(app.localStorageManager.getBodydataKey("pantsType"));  
    }

    _setBodyshapeButtons(args) {
        let width  = Math.floor(app.viewContainer.clientWidth * 0.13);
        let height = width;

        let skipSetAsActive = false;
        if(args !== undefined && args.skipSetAsActive !== undefined) skipSetAsActive = true;

        let containerArgs = {
            justifyContent: "space-between",
        };

        let prefix = "";
        if(args.male) prefix = "m";

        let buttons = [
            { imgSrc: "assets/images/" + prefix + "bs1.png", margin: 0, width: width, height: height, id: prefix + "hourglass" },
            { imgSrc: "assets/images/" + prefix + "bs2.png", margin: 0, width: width, height: height, id: prefix + "rectangle" },
            { imgSrc: "assets/images/" + prefix + "bs3.png", margin: 0, width: width, height: height, id: prefix + "triangle" },
            { imgSrc: "assets/images/" + prefix + "bs4.png", margin: 0, width: width, height: height, id: prefix + "upside-down-triangle" },
            { imgSrc: "assets/images/" + prefix + "bs5.png", margin: 0, width: width, height: height, id: prefix + "oval" },
        ];

        this._bodyshapeSelector.getContainer().querySelector(".header").style.margin = "0.7em 0 0.5em 0";
        this._bodyshapeSelector.update(buttons, containerArgs);
        if(!skipSetAsActive)
            this._bodyshapeSelector.setAsActive(app.localStorageManager.getBodydataKey("bodyShape"));
    }


    _onClose() {
        this._weightSelector.hideDropdown();
        this._heightSelector.hideDropdown();

        this._onSwitchBodyButtonClick({ preventHiding: true });
    }



    addComponent(component) {
        component.setParent(this); 
        this._modalContainer.appendChild(component.getContainer());
        this._components.push(component);
    }
}