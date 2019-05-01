class MenuModal extends SideModal {
    constructor() {
        super("left");
        this._modalContainer.classList.add("app-menu-modal"); 


        this._modalContainer.innerHTML = `
            <div class="menu-modal-header">
                <img src="assets/images/drapr-logo-2-lr.png" draggable="false" />
                <svg class="close-icon"><use xlink:href="#icon-close"/></svg>
            </div>

            <nav class="links-container">
                <a draggable="false">
                    <svg class="item"><use xlink:href="#icon-tutorial"/></svg>
                    <span>Tutorial</span>
                </a>    
                <a href="https://drapr.com/privacy-policy/" draggable="false" target="_blank">
                    <svg class="item"><use xlink:href="#icon-privacy"/></svg>
                    <span>Privacy</span>
                </a>    
                <a href="mailto:support@drapr.com" target="_blank" draggable="false">
                    <svg class="item"><use xlink:href="#icon-email"/></svg>
                    <span>Feedback</span>
                </a>    
            </nav>
        `;

        let closeIconSvg = this._modalContainer.querySelector(".menu-modal-header svg.close-icon");
        closeIconSvg.addEventListener("click", () => {
            this.hide();
        });

        let anchors = this._modalContainer.getElementsByTagName("a");
        anchors[0].addEventListener("click", function() {
            app.welcomeModal.showTutorial();
        });

        for(let i = 0; i < anchors.length; i++) {
            anchors[i].addEventListener("dragstart", function(e) {
                e.preventDefault();
            });
        }

        let backgroundImage = new Image();
        backgroundImage.onload = () => {
            let modalHeader = this._modalContainer.querySelector(".menu-modal-header");
            modalHeader.style.background = "url(assets/images/boutique.jpg)";
            modalHeader.style.backgroundSize = "cover";
        };
        backgroundImage.src = "assets/images/boutique.jpg";
    }

    show() {
        super.show();

        anime({
            targets: this._modalContainer.querySelector(".menu-modal-header img"),
            translateX: ["-50%", "-50%"],
            translateY: ["50%", "-50%"],
            opacity: [0, 1],
            duration: 300,
            delay: 150,
            easing: 'easeInOutQuad'
        });

        anime({
            targets: this._modalContainer.querySelector(".links-container"),
            translateY: [60, 0],
            opacity: [0, 1],
            duration: 300,
            delay: 250,
            easing: 'easeInOutQuad'
        });
    }
}