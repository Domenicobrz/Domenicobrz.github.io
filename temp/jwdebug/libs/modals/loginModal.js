class LoginModal extends SideModal {
    constructor() {
        super("left", app.viewContainer.clientWidth);
        this._modalContainer.classList.add("app-login-modal"); 


        this._modalContainer.innerHTML = `
        <header>
            <svg class="close-btn"> <use xlink:href="#icon-close" /> </svg>
            <h2 class="login">Log in</h2>
        </header>

        <form class="login-form" action="">
            <label for="email">Email</label>
            <input type="text" placeholder=""     name="email" required>
        
            <label for="psw">Password</label>
            <input type="password" placeholder="" name="psw" required>

            <button class="login-btn" type="submit">Log In</button>
        </form>

        <div class="section-register-forgot">
            <p>New? <a>Register!</a></p>  
            <a>Forgot password :(</a>
        </div>

        <div class="social-controls">
            <h3>Or</h3>
            <button class="facebook-login-btn">
                <svg> <use xlink:href="#icon-social-facebook"/> </svg>
                <span> Sign In with Facebook </span>
            </button>
            <button class="google-login-btn">
                <svg> <use xlink:href="#icon-social-google"/> </svg>
                <span> Sign In with Google </span>                
            </button>
        </div>

        <div class="spacer"></div>

        <p class="privacy-policy">
            By signing up you are agreeing to Drapr's<br>
            <a>Terms of Service</a> and <a>Privacy Policy</a>
        </p>
        `;

        let closeBtn = this._modalContainer.querySelector("header svg.close-btn");
        closeBtn.addEventListener("click", () => {
            this.hide();
        });

        let forgotPasswordBtn = this._modalContainer.querySelector(".section-register-forgot > a");
        forgotPasswordBtn.addEventListener("click", () => {
            app.resetPasswordModal.show();
        });

        // for(let i = 0; i < anchors.length; i++) {
        //     anchors[i].addEventListener("dragstart", function(e) {
        //         e.preventDefault();
        //     });
        // }

        // let backgroundImage = new Image();
        // backgroundImage.onload = () => {
        //     let modalHeader = this._modalContainer.querySelector(".menu-modal-header");
        //     modalHeader.style.background = "url(assets/images/boutique.jpg)";
        //     modalHeader.style.backgroundSize = "cover";
        // };
        // backgroundImage.src = "assets/images/boutique.jpg";


        window.addEventListener("resize", () => {
            this._width = app.viewContainer.clientWidth;
            this._modalContainer.style.width = this._width + "px";
        });
    }

    show() {
        super.show();

        // anime({
        //     targets: this._modalContainer.querySelector(".menu-modal-header img"),
        //     translateX: ["-50%", "-50%"],
        //     translateY: ["50%", "-50%"],
        //     opacity: [0, 1],
        //     duration: 300,
        //     delay: 150,
        //     easing: 'easeInOutQuad'
        // });

        // anime({
        //     targets: this._modalContainer.querySelector(".links-container"),
        //     translateY: [60, 0],
        //     opacity: [0, 1],
        //     duration: 300,
        //     delay: 250,
        //     easing: 'easeInOutQuad'
        // });
    }
}