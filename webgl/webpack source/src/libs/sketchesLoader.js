import { sketches } from "./sketches";
import { dom } from "./DOMreferences";


var paginatorContainer = document.querySelector(".sketches_paginator_container");
var activePage = 0;

function initSketches() {
    initPaginator();
    loadPage(activePage);
}


function initPaginator() {
    var CELLS_PER_PAGE = 18;

    var nPages = Math.floor(    (sketches.length - 1) // subtracting one makes sure that if we have 30 elements and 10 per page,
                                                           // we return 3 pages instead of four
                                / CELLS_PER_PAGE) + 1;

    for (var i = 0; i < nPages; i++) {

        // create paginator button
        var paginatorButton = document.createElement("a");
        paginatorButton.className = i == activePage ? "paginator_page_selector active" : "paginator_page_selector";
        paginatorButton.textContent = "" + (i+1);
        paginatorButton.setAttribute("page", "" + (i+1));
        paginatorButton.setAttribute("href", "#sketches_header");
    
        // ... and add onclick event listener
        paginatorButton.addEventListener("click", function(e) {
            var selectedPage = parseInt( e.target.getAttribute("page") ) - 1;
            // nothing to do, we clicked the button representing the currently selected page
            if (selectedPage === activePage) return;    
            activePage = selectedPage;
    
            // set all as inactive
            for (var j = 0; j < paginatorContainer.children.length; j++)
                paginatorContainer.children[j].className = "paginator_page_selector";
    
            // set current as active
            e.target.className = "paginator_page_selector active";
    
            loadPage(activePage);    
        });
    
        paginatorContainer.appendChild(paginatorButton);
    }
}



function loadPage(pageNumber) {
    // remove all elements
    while (dom.SketchesContainer.firstChild) {
        dom.SketchesContainer.removeChild(dom.SketchesContainer.firstChild);
    }

    let CELLS_PER_PAGE = 27;
    if(innerWidth < 1800) {
        CELLS_PER_PAGE = 7*4;
    }
    if(innerWidth < 1200) {
        CELLS_PER_PAGE = 5*5;
    }
    if(innerWidth < 800) {
        CELLS_PER_PAGE = 4*7;
    }
    if(innerWidth < 600) {
        CELLS_PER_PAGE = 3*7;
    }

    let starting_index = CELLS_PER_PAGE * pageNumber;
    let last_index = CELLS_PER_PAGE * (pageNumber + 1);

    if (sketches.length < last_index) last_index = sketches.length;
    

    for(let i = starting_index; i < last_index; i++) {
        let element = document.createElement("div");
        element.className = "grid-element";

        element.style.backgroundImage = "url(" + sketches[i].thumbnail + ")";

        element.addEventListener("click", () => { showModal(sketches[i]) });

        dom.SketchesContainer.appendChild(element);
    }
}



/* From Modernizr */
function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}

/* Listen for a transition! */
var transitionEvent = whichTransitionEvent();



function showModal(sketch) {

    let sketchModalContainer = document.createElement("div");
    sketchModalContainer.className = "sketch-modal-container";
    sketchModalContainer.innerHTML = `
        <div class="modal-container">
            <div class="media-container">

            </div>
            
            <div class="sketch-description">

            </div>
        </div>
    `;

    sketchModalContainer.addEventListener("click", (e) => {
        if(e.target === e.currentTarget) {
            sketchModalContainer.classList.remove("active");

            // as soon as the CSS animation finishes..
            sketchModalContainer.addEventListener(transitionEvent, function() {
                window.removeEventListener("resize", resizeFunction);
                main.removeChild(sketchModalContainer);
            });            
        }
    });

    setTimeout(function() {
        sketchModalContainer.classList.add("active");
    }, 30);

    let modalContainer = sketchModalContainer.querySelector(".modal-container");
    let mediaContainer = sketchModalContainer.querySelector(".media-container");

    let sketchDescriptionContainer = sketchModalContainer.querySelector(".sketch-description");
    sketchDescriptionContainer.innerHTML = sketch.description;


    let savedImageReference;
    let resizeFunction = () => {
        modalContainer.style.flexFlow = "";

        if(innerWidth > 800 && innerWidth > innerHeight) {
            mediaContainer.style.width  = "300px";
            mediaContainer.style.height = Math.floor(innerHeight * 0.6) + "px";
            sketchDescriptionContainer.style.height = Math.floor(innerHeight * 0.6) + "px";
            sketchDescriptionContainer.style.width = "300px";
        } else if (innerWidth / innerHeight > 0.6) {
            mediaContainer.style.width              = Math.floor(innerHeight * 0.5) + "px";
            mediaContainer.style.height             = Math.floor(innerHeight * 0.5) + "px";
            sketchDescriptionContainer.style.height = Math.floor(innerHeight * 0.3) + "px";
            sketchDescriptionContainer.style.width  = Math.floor(innerHeight * 0.5) + "px";

            modalContainer.style.flexFlow     = "column nowrap";
        } else {
            let sm = innerWidth; // innerWidth < innerHeight ? innerWidth : innerHeight;
    
            mediaContainer.style.width              = Math.floor(sm * 0.8) + "px";
            mediaContainer.style.height             = Math.floor(sm * 0.8) + "px";
            
            modalContainer.style.flexFlow     = "column nowrap";
            
            sketchDescriptionContainer.style.height = Math.floor(sm * 0.4) + "px";
            sketchDescriptionContainer.style.width  = Math.floor(sm * 0.8) + "px";
        }


        if(!savedImageReference) return;
        // from here on it means we provided an image

        let height = Math.floor(innerHeight * 0.6);
        let width  = Math.floor((height / savedImageReference.naturalHeight) * savedImageReference.naturalWidth);

        if(innerWidth > 800 && innerWidth > innerHeight) {
            if(width > innerWidth * 0.5) {
                width = Math.floor(innerWidth * 0.5);
            }

            mediaContainer.style.width = width + "px";
            mediaContainer.style.height = height + "px";
            sketchDescriptionContainer.style.height = height + "px";
            sketchDescriptionContainer.style.width = "300px";
        }
    };
    window.addEventListener("resize", resizeFunction);
    resizeFunction();
    
    if(sketch.mediaType == "image") {
        let image = new Image();
        image.onload = function() {
            savedImageReference = image;
            resizeFunction();
            mediaContainer.appendChild(image);
        };

        image.src = sketch.mediaPath;
    }

    let main = dom.main;
    main.appendChild(sketchModalContainer);
}









export { initSketches };