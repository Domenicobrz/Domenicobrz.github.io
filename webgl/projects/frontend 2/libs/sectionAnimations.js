var SA = {

    hideS1: function(onComplete) {
        let container = document.querySelector(".section1");

        anime({
            targets: container.children,
            translateY: [0, -innerHeight * 0.1],
            delay: function(el, i) {
                return i * 50
            },
            opacity: [1, 0],
            duration: 200,
            complete: () => {
                let s1BtnContainer = container.querySelector(".s1-btns");
                s1BtnContainer.style.transform = "";
                onComplete();
            },
            easing: "easeOutQuad",
        });
    },

    hideS2: function(onComplete) {
        let container = document.querySelector(".section2");

        anime({
            targets: container.children,
            translateY: [0, -innerHeight * 0.1],
            delay: function(el, i) {
                return i * 35
            },
            opacity: [1, 0],
            duration: 200,
            complete: onComplete,
            easing: "easeOutQuad",
        });
    },

    hideS3: function(onComplete) {
        let container = document.querySelector(".section3");

        anime({
            targets: container.children,
            translateY: [0, -innerHeight * 0.1],
            delay: function(el, i) {
                return i * 50
            },
            opacity: [1, 0],
            duration: 200,
            complete: onComplete,
            easing: "easeOutQuad",
        });
    },

    hideS4: function(onComplete) {
        let container = document.querySelector(".section4");

        anime({
            targets: container.children,
            translateY: [0, -innerHeight * 0.1],
            delay: function(el, i) {
                return i * 50
            },
            opacity: [1, 0],
            duration: 200,
            complete: onComplete,
            easing: "easeOutQuad",
        });
    },

    hideS5: function(onComplete) {
        let container = document.querySelector(".section5");

        anime({
            targets: container.children,
            translateY: [0, -innerHeight * 0.1],
            delay: function(el, i) {
                return i * 50
            },
            opacity: [1, 0],
            duration: 200,
            complete: onComplete,
            easing: "easeOutQuad",
        });
    },




    showS1: function(onComplete) {
        let mainContainer = document.querySelector(".main-section-container");
        let container = document.querySelector(".section1");
        let hr = container.querySelector("hr");
        let s1Title = container.querySelector(".s1-title");
        let s1Title2 = container.querySelector(".s1-title2");
        let s1TextDivider = container.querySelector(".s1-text-divider");
        let s1Line1 = container.querySelector(".s1-line1");
        let s1Line2 = container.querySelector(".s1-line2");
        let s1Text = container.querySelector(".s1-text");
        let s1BtnContainer = container.querySelector(".s1-btns");
        // let s1Btns = container.querySelectorAll(".s1-btn");

        Utils.setActive(mainContainer.children, 0);
        s1BtnContainer.style.opacity = 1;
        Utils.setChildrenZeroOpacity(s1BtnContainer);

        var t = anime.timeline({
            complete: () => {
                if(onComplete)
                    onComplete();
            }
        })
        .add({
            targets: s1Title,
            scale:   [1.3, 1],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 200,
            offset: 0
        })
        .add({
            targets: hr,
            translateY: [innerWidth * 0.1, 0],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 200,
            offset: 0
        })
        .add({
            targets: [ s1Title2, s1TextDivider ],
            translateY: function(el, i) {
                return i == 0 ? [innerWidth * 0.1, 0] : [-innerWidth * 0.1, 0];
            },
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 200,
            offset: 100
        })
        .add({
            targets: s1BtnContainer.children,
            // translateY: [innerWidth * 0.1, 0],
            delay: function(el, i) {
                return i * 50;
            },
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 200,
            offset: 250
        })
        .add({
            targets: s1Text,
            translateY: [innerWidth * 0.05, 0],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 450,
            offset: 150
        })
        .add({
            targets: s1Line1,
            translateY: [-innerWidth * 1, 0],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 350,
            offset: 450
        })
        .add({
            targets: s1Line2,
            translateX: [innerWidth * 1, 0],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 350,
            offset: 450
        })
    },

    showS2: function(onComplete) {
        let mainContainer = document.querySelector(".main-section-container");
        let container = document.querySelector(".section2");
        let s2Header = container.querySelector(".s2-header");
        let s2HeaderImage = container.querySelector(".s2-header-image");
        let s2TextDivider = container.querySelector(".s2-text-divider");
        let s2FooterText1 = container.querySelector(".s2-footer-text-1");
        let s2FooterText2 = container.querySelector(".s2-footer-text-2");
        let s2Entries = container.querySelectorAll(".s2-entry");

        Utils.setActive(mainContainer.children, 1);
        Utils.setChildrenZeroOpacity(container);

        var t = anime.timeline({
            complete: () => {
                for(let i = 0; i < s2Entries.length; i++) {
                    s2Entries[i].style.transform = "";
                }

                if(onComplete)
                    onComplete();
            }
        })
        .add({
            targets: s2Header,
            translateX:   [-innerWidth * 0.2, 0],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 200,
            offset: 0
        })
        .add({
            targets: s2HeaderImage,
            translateX:   [innerWidth * 0.2, 0],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 200,
            offset: 0
        })
        .add({
            targets: [s2TextDivider, s2FooterText1, s2FooterText2],
            translateY:   [innerWidth * 0.1, 0],
            delay: function(el, i) {
                return i * 50;
            },
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 200,
            offset: 100
        })
        .add({
            targets: s2Entries,
            translateY:   [innerWidth * 0.05, 0],
            delay: function(el, i) {
                return i * 25;
            },
            opacity: { value: [0, 1], duration: 1060 },
            easing: 'easeOutQuad',
            duration: 250,
            offset: 200
        })

    },

    showS3: function(onComplete) {
        let mainContainer = document.querySelector(".main-section-container");
        let container = document.querySelector(".section3");
        let s3lettersFlexRow = container.querySelectorAll(".s3_letters_flex_row");
        let s3divider = container.querySelectorAll(".s3-divider");
        let s3secHeaderText = container.querySelectorAll(".s3-sec-header-text");
        let s3fakeLogos = container.querySelector(".s3-fake-logos");
        let s3footerListElement = container.querySelectorAll(".s3-footer-list-element");
        let img = container.querySelector("img");

        Utils.setActive(mainContainer.children, 2);
        Utils.setChildrenZeroOpacity(container);

        var t = anime.timeline({
            complete: () => {
                if(onComplete)
                    onComplete();
            }
        })
        .add({
            targets: s3lettersFlexRow,
            translateX: [-innerWidth * 0.2, 0],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 200,
            offset: 0
        })
        .add({
            targets: [ s3divider, s3secHeaderText ],
            translateX:   [innerWidth * 0.2, 0],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 200,
            offset: 0
        })
        .add({
            targets: s3fakeLogos,
            translateX: [-innerWidth * 0.2, 0],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 200,
            offset: 130
        })
        .add({
            targets: s3footerListElement,
            translateX:   [innerWidth * 0.2, 0],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 200,
            offset: 190
        })
        .add({
            targets: img,
            translateY: [innerWidth * 0.05, 0],
            rotateX: [50, 0],
            opacity: { value: [0, 1], duration: 670 },
            easing: 'easeOutQuad',
            duration: 450,
            offset: 350
        })

    },

    showS4: function(onComplete) {
        let mainContainer = document.querySelector(".main-section-container");
        let container = document.querySelector(".section4");
        let s4Chart = container.querySelector(".s4-chart");
        let s4hr1 = container.querySelector(".s4-hr1");
        let s4pendingTitle = container.querySelector(".s4-pending-title");

        Utils.setActive(mainContainer.children, 3);
        Utils.setChildrenZeroOpacity(container);
        
        let s4paragraphsContainer = container.querySelector(".s4-paragraphs");
        s4paragraphsContainer.style.opacity = 1;
        s4paragraphsContainer.style.transform = "";
        let s4paragraphs = container.querySelectorAll(".s4-paragraphs p");
        Utils.setChildrenZeroOpacity(s4paragraphsContainer);

        let s4rotatedQuadsContainer = container.querySelector(".s4-rotated-quads");
        s4rotatedQuadsContainer.style.opacity = 1;
        s4rotatedQuadsContainer.style.transform = "";
        let s4rotatedQuads = container.querySelectorAll(".s4-rotated-quads div");
        Utils.setChildrenZeroOpacity(s4rotatedQuadsContainer);

        var t = anime.timeline({
            complete: () => {
                if(onComplete)
                    onComplete();
            }
        })
        .add({
            targets: s4Chart,
            translateY: [-innerWidth * 0.1, 0],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 200,
            offset: 0
        })
        .add({
            targets: [ s4hr1, s4pendingTitle ],
            translateY:   [-innerWidth * 0.1, 0],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 200,
            offset: 50
        })
        .add({
            targets: s4paragraphs,
            translateY:   [innerWidth * 0.1, 0],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            delay: function(el, i) {
                return i * 35;  
            },
            duration: 200,
            offset: 150
        })
        .add({
            targets: [s4rotatedQuads[0], s4rotatedQuads[2]],
            translateY: [innerWidth * 0.1, 0],
            rotate: [45, 45],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            scale: 0.8,
            duration: 350,
            offset: 250
        })
        .add({
            targets: s4rotatedQuads[1],
            translateY: [innerWidth * 0.1, 0],
            rotate: [45, 45],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            scale: 1,
            duration: 350,
            offset: 150
        })
    },

    showS5: function(onComplete) {
        let mainContainer = document.querySelector(".main-section-container");
        let container = document.querySelector(".section5");
       
        let h2 = container.querySelector("h2");
        let s5ClockText   = container.querySelector(".s5-clock-text");
        let p   = container.querySelector("p");
        let a   = container.querySelector("a");

        Utils.setActive(mainContainer.children, 4);
        Utils.setChildrenZeroOpacity(container);
      
        var t = anime.timeline({
            complete: () => {
                if(onComplete)
                    onComplete();
            }
        })
        .add({
            targets: [ h2, s5ClockText, p, a ],
            translateY: [innerWidth * 0.1, 0],
            opacity: [0, 1],
            delay: function(el, i) {
                return i * 100;
            },
            easing: 'easeOutQuad',
            duration: 200,
            offset: 0
        });
    },



}