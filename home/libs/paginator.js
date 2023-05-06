import { loadPage, CELLS_PER_PAGE } from "./mosaicosequential";
import { dom } from "./DOMreferences";
import { onTagChange, selectedPosts } from "./posts";


var paginatorContainer = document.querySelector(".paginator_container");
var activeTag  = "all";
var activePage = 0;

function initPaginator() {
    
    for (var i = 0; i < dom.TagSelectors.length; i++)
        dom.TagSelectors[i].addEventListener("click", function(e) {

            // set all as inactive
            for (var j = 0; j < dom.TagSelectors.length; j++)
                dom.TagSelectors[j].className = "TagSelector";
            // set current as active
            e.target.className = "TagSelector active";

            activeTag = e.target.getAttribute("tag");

            // will take care of assigning to "selectedPosts" only the posts with the given tag
            onTagChange(activeTag);
            activePage = 0;
            updatePaginatorButtons();
            loadPage(0);    
        });
    
    updatePaginatorButtons();
    loadPage(activePage);
}

function updatePaginatorButtons() {
    while (paginatorContainer.firstChild) {
        paginatorContainer.removeChild(paginatorContainer.firstChild);
    }

    var nPages = Math.floor(    (selectedPosts.length - 1) // subtracting one makes sure that if we have 30 elements and 10 per page,
                                                           // we return 3 pages instead of four
                                / CELLS_PER_PAGE) + 1;


    for (var i = 0; i < nPages; i++) {

        // create paginator button
        var paginatorButton = document.createElement("a");
        paginatorButton.className = i == activePage ? "paginator_page_selector active" : "paginator_page_selector";
        paginatorButton.textContent = "" + (i+1);
        paginatorButton.setAttribute("page", "" + (i+1));
        paginatorButton.setAttribute("href", "#mosaico_header");

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




export { initPaginator };