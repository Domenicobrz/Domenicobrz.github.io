window.addEventListener("load", init);



var animating = false;


function init() {
    initTHREE();
    initIcons();
    // initMusicCanvas();
    initPageElements();
    initS4chart();
    initS5clock();
}


function downloadingSectionUpdate(assetsDownloaded) {

    let p = document.querySelector(".downloading-section p");
    let s = document.querySelector(".downloading-section span");

    p.textContent = "Downloading... " + assetsDownloaded + "/6";
    s.style.width = (assetsDownloaded / 6) * 100 + "%";

    if(assetsDownloaded === 6) {

        
        anime.timeline({
            complete: () => {
                animating = true;
                SA.showS1(() => {
                    animating = false;
                });
            }
        })
        .add({
            targets: document.querySelector(".downloading-section"),
            translateX: ["-50%", "-50%"],
            translateY: ["-50%", "-50%"],
            scaleY: [1, 0],
            duration: 350,
            easing: "easeOutQuad",
            offset: 0,
        })
        .add({
            targets: document.querySelector(".downloading-section > .downloading-info"),
            opacity: [1, 0],
            duration: 250,
            easing: "easeOutQuad",
            offset: 0,
        })
    }
}

function initPageElements() {
    var hexagons = document.getElementsByClassName("hexagon");
    var sepContainers = document.getElementsByClassName("sep-container");

    let previousHexagon = 0;
    for (let i = 0; i < hexagons.length; i++) {
        let hexagon = hexagons[i];
        hexagon.addEventListener("click", function() {
            
            if(animating) return;

            animating = true;
            var hideCurrentFunction = SA["hideS" + (previousHexagon+1)];
            var showNewFunction = SA["showS" + (i+1)];

            hideCurrentFunction(() => {
                showNewFunction(() => {
                    animating = false;
                });
            });

            previousHexagon = i;

            Utils.setActive(hexagons, i);
            // Utils.setActive(document.querySelectorAll('[class *= "section"]'), i + 1);


            let separatorBeforeIndex = i - 1;
            let separatorAfterIndex  = i;

            // deactivate all separators
            for (let j = 0; j < sepContainers.length; j++) 
                sepContainers[j].classList.remove("active");

            if (separatorBeforeIndex >= 0)                  sepContainers[separatorBeforeIndex].classList.add("active");
            if (separatorAfterIndex  < hexagons.length - 1) sepContainers[separatorAfterIndex].classList.add("active");
        });
    }




    var main         = document.querySelector(".content-container > .main");
    var canvasDOM    = document.querySelector(".main-canvas-container");      
    var secondary    = document.querySelector(".content-container > .secondary");
    var expanderMenu = document.querySelector(".expander-menu");
    var expanderBtn  = document.querySelector(".expander-expand-btn");
    var expanderPlusBtn1 = document.querySelector(".expander-plus-icon-1");
    var expanderPlusBtn2 = document.querySelector(".expander-plus-icon-2");
    var mainDarkOverlay  = document.querySelector(".main-dark-overlay");
    var expanderMenuLinks = document.getElementsByClassName("expander-menu-link");


    let menuClosedSize = Math.max(innerWidth * 0.075, 7 * 14);


    var anim_menuClose = anime.timeline({
        autoplay: false,
        begin:    function() { 
            main.classList.remove("expander-active");
            animating = true; 
        },
        complete: function() { animating = false; }
    });
    anim_menuClose.add({
        targets: main,
        width:   [innerWidth - innerWidth * 0.2, innerWidth - menuClosedSize],
        easing: 'easeOutExpo',
        duration: 300,
        offset: 250,
    })
    .add({
        targets: secondary,
        width:   [innerWidth * 0.2, menuClosedSize],
        easing: 'easeOutExpo',
        duration: 300,
        offset: 250,
    })
    .add({
        targets: canvasDOM,
        translateX: [-innerWidth * 0.05, 0],
        easing: 'easeOutExpo',
        duration: 300,
        offset: 250,
    })
    .add({
        targets: expanderPlusBtn2,
        rotate: [90, 0],
        duration: 300,
        offset: 250,
        easing: 'easeOutExpo',
    })
    .add({
        targets: expanderPlusBtn1,
        backgroundColor: ["#dd2222", "#f0f0f0"],
        duration: 300,
        offset: 250,
        easing: 'easeOutExpo',
    })
    .add({
        targets: expanderMenuLinks,
        opacity: [1, 0],
        translateX: function(el, i) {
            return i % 2 === 0 ? [0, 100] : [0, -100];
        },
        duration: 300,
        offset:   0,
        easing: 'easeOutExpo',
    })
    .add({
        targets: expanderMenu,
        height:  [innerHeight * 0.6, 0],
        translateY: [ innerHeight * 0.4 * 0.5 * 0.95, 0 ],
        duration: 300,
        offset: 250,
        easing: 'easeOutExpo',
    })
    .add({
        targets: mainDarkOverlay,
        opacity: [1, 0],
        duration: 300,
        offset: 250,
        easing: 'easeOutExpo',
    });



    var anim_menuOpen = anime.timeline({
        autoplay: false,
        begin:    function() { 
            main.classList.add("expander-active");
            animating = true; 
        },
        complete: function() { animating = false; }
    });
    anim_menuOpen.add({
        targets: main,
        width:   [innerWidth - menuClosedSize, innerWidth - innerWidth * 0.2],
        easing: 'easeOutExpo',
        duration: 300,
        offset: 0
    })
    .add({
        targets: secondary,
        width:   [menuClosedSize, innerWidth * 0.2],
        easing: 'easeOutExpo',
        duration: 300,
        offset: 0
    })
    .add({
        targets: canvasDOM,
        translateX: [0, -innerWidth * 0.05],
        easing: 'easeOutExpo',
        duration: 500,
        offset: 0,
    })
    .add({
        targets: expanderPlusBtn2,
        rotate: [0, 90],
        duration: 300,
        offset: 0,
        easing: 'easeOutExpo',
    })
    .add({
        targets: expanderPlusBtn1,
        backgroundColor: ["#f0f0f0", "#dd2222"],
        duration: 300,
        offset: 0,
        easing: 'easeOutExpo',
    })
    .add({
        targets: expanderMenuLinks,
        color: ["#dd2222", "#f0f0f0"],
        opacity: [0, 1],
        translateX: function(el, i) {
            return i % 2 === 0 ? [100, 0] : [-100, 0];
        },
        delay: function(el, i) {
            return i * 50;
        },
        duration: 300,
        offset:   300,
        easing: 'easeOutExpo',
    })
    .add({
        targets: expanderMenu,
        height:  [0, innerHeight * 0.6],
        translateY: [ 0, innerHeight * 0.4 * 0.5 * 0.95 ],
        duration: 300,
        offset: 0,
        easing: 'easeOutExpo',
    })
    .add({
        targets: mainDarkOverlay,
        opacity: [0, 1],
        duration: 300,
        offset: 0,
        easing: 'easeOutExpo',
    });

    // main.style.width      = (innerWidth - menuClosedSize) + "px";
    // secondary.style.width = (menuClosedSize) + "px";
   


    expanderBtn.addEventListener("click", function() {
        if(animating) return;

        if(expanderMenu.classList.contains("active")) {
            anim_menuClose.restart();
            expanderMenu.classList.remove("active");
    //         main.style.width = "calc(100% - 7em)";
    //         secondary.style.width = "7em";
    //         canvasDOM.classList.remove("moveleft");
        } else {
            anim_menuOpen.restart();
            expanderMenu.classList.add("active");
    //         canvasDOM.classList.add("moveleft");
    //         main.style.width = "calc(100% - 15em)";
    //         secondary.style.width = "15em";    
        }
    });

}