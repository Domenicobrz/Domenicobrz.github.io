class ResetPasswordModal extends SideModal {
    constructor() {
        super("left", app.viewContainer.clientWidth);
        this._modalContainer.classList.add("app-reset-password-modal"); 


        this._modalContainer.innerHTML = `
        <header>
            <svg class="close-btn"> <use xlink:href="#icon-close" /> </svg>
            <h2 class="reset-password">Reset Password</h2>
        </header>

        <form class="reset-password-form" action="">
            <label for="email">Email</label>
            <input type="text" placeholder=""     name="email" required>
        
            <button class="reset-password-btn" type="submit">Send me a link</button>
        </form>
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