<footer class="pageFooter">
    

    <?php footerSvg(1); ?>


    <div class="fcontainer">
        <div class="fcentered">


            <div class="footerRow">
                <img data-src="assets/images/geoiconlow.png"
                     data-src-hd="assets/images/geoiconmid3.png" 
                     class="lazyloadfooter fgeoicon">

                <div class="fewe"> <span>Enhancing</span> <span>web experiences</span> </div>
            </div>


            <div class="footerRowSpacer"></div>


            <div class="footerRow">

                <div class="fInputContainer">
                    <input class="fTypeMessage" type="text" placeholder="Leave me a message!" onblur="this.value=''" />
                    <svg class="fInputArrow" viewBox="-900 0 708 450" xml:space="preserve">
                		<polygon stroke="white" stroke-width="12" fill="white" points="204,0 168.3,35.7 311.1,178.5 -1500,178.5 -1500,229.5 311.1,229.5 168.3,372.3 204,408 408,204"/>
                    </svg>
                </div>


                <p class="fGiveFeedback">Also, give me your feedback on this webpage!</p>
                <!-- Used since in chrome a bug prevents from styling xhref <use> elements such as path/circle etc -->
                <?php require $siteRoot."/core/footerSvgs.php"; ?>

            </div>


            <div class="footerRowSpacer"></div>


            <div class="footerRow">
                <nav class="fLinkRow1">
                    <a>Twitter</a>
                    <a>Facebook</a>
                    <a>Youtube</a>
                    <a>Github</a>
                    <a>LinkedIn</a>
                </nav>

                <nav class="fLinkRow2">
                    <a>About</a>
                    <a>Contact</a>
                    <a>Projects</a>
                    <a>Clients</a>
                    <a>Upwork</a>
                    <a>Services</a>
                    <a>Artwork</a>
                </nav>

                <nav class="fLinkRow3">
                    <a>About</a>
                    <a>Contact</a>
                    <a>Projects</a>
                    <a>Artwork</a>
                </nav>
            </div><!-- footerRow end -->


            
        </div><!-- fcentered - end -->    
    </div> <!-- container - end -->
    
    
    <small>&copy; Copyright 2017 - <span>RR Design</span> </small>


</footer>