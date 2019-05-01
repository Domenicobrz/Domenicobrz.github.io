class DownloadAppModal extends SideModal {
    constructor() {
        super("right", app.viewContainer.clientWidth);
        this._modalContainer.classList.add("app-download-app-modal"); 


        this._modalContainer.innerHTML = `
        <header>
            <svg class=""> <use xlink:href="" /> </svg>
            <h2>Get our app!</h2>
            <svg class="close-btn"><use xlink:href="#icon-arrow-left" /></svg> 

        </header>

        <div class="drapr-shopping"></div>
        
        <div>
            <h3> Clothing shopping just became<br>100x easier </h3>
            <p> If you want to shop with your actual body, download the Drapr iOS app and take a quick 15-second video</p>
        </div>

        <div class="spacer"> </div>

        <a href="https://itunes.apple.com/us/app/drapr-try-on/id1447553848" target="_blank"> <img class="apple-store" src="assets/images/apple-store-2.png" /> </a>
        `;

        let closeBtn = this._modalContainer.querySelector("header svg.close-btn");
        closeBtn.addEventListener("click", () => {
            this.hide();
        });

        window.addEventListener("resize", () => {
            this._width = app.viewContainer.clientWidth;
            this._modalContainer.style.width = this._width + "px";
        });
    }

    show() {
        super.show();
    }
}