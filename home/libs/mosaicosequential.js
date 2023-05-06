import { dom } from "./DOMreferences";
import { selectedPosts } from "./posts";
import { isMobile } from "./isMobile";


var CELL_MARGIN = 2;
var CELLS_PER_PAGE = 25;

var toSpawn = 0;
var selectedPage = 0;
var starting_index;
var last_index;

function loadPage(pageNumber) {
    deleteExistingChildren();

    starting_index = CELLS_PER_PAGE * pageNumber;
    last_index = CELLS_PER_PAGE * (pageNumber + 1);

    if (selectedPosts.length < last_index) last_index = selectedPosts.length;
    selectedPage = pageNumber;

    requestAnimationFrame(sequentialSpawn);
}

var READY       = 0;
var DOWNLOADING = 1;
var COMPLETE    = 2;
var loadStatus; 
function sequentialSpawn() {
    if ((toSpawn + starting_index) >= last_index) return;  // job's done, skip the call to requestAnimationFrame()

    requestAnimationFrame(sequentialSpawn);
    
    if (loadStatus === READY) {
        var cell = document.createElement("div");
        cell.className = "mosaicogrid_cell";        

        var anchor = document.createElement("a");
        anchor.setAttribute("href", selectedPosts[toSpawn + starting_index].link);
        anchor.setAttribute("target", "_blank");

        loadStatus = DOWNLOADING;

        var img = new Image();
        img.onload = function() { 
            RenderMosaicoGrid(false);
            loadStatus = COMPLETE;
        };
        img.src = selectedPosts[toSpawn + starting_index].imgPath;


        cell.appendChild(anchor);
        anchor.appendChild(img);
        dom.MosaicoContainer.appendChild(cell);
    }

    // advance to next image
    if (loadStatus === COMPLETE) {
        toSpawn++;
        loadStatus = READY;
    }
}

function deleteExistingChildren() {
    while (dom.MosaicoContainer.firstChild) {
        dom.MosaicoContainer.removeChild(dom.MosaicoContainer.firstChild);
    }

    loadStatus = READY;
    toSpawn = 0;
}





function RenderMosaicoGrid(resizeOnly) {
    
    var containerWidth = innerWidth - CELL_MARGIN * 2;
    // fixes an android bug where innerWidth is unreliable
    if (isMobile()) containerWidth = Math.min(innerWidth, outerWidth) - CELL_MARGIN * 2;

    if (innerWidth > 600) containerWidth  = 580 - CELL_MARGIN * 2;
    if (innerWidth > 900) containerWidth  = 700;
    if (innerWidth > 1200) containerWidth = 770;
    if (innerWidth > 1400) containerWidth = 820;
    if (innerWidth > 1600) containerWidth = 1050;

    dom.MosaicoContainer.style.width = containerWidth + "px";
    dom.MosaicoHeader.style.width = containerWidth + "px";
    var mosaicoCells = dom.MosaicoContainer.getElementsByClassName("mosaicogrid_cell");

    var columns = [0, 0];
    if (innerWidth > 900)  columns.push(0);  
    if (innerWidth > 1200) columns.push(0);  

    var cellwidth  = (containerWidth / columns.length) - CELL_MARGIN;

    // apply cells positions
    for(var i = 0; i < mosaicoCells.length; i++) {
        var topmostColumnIndex = 0;

        for (var j = 1; j < columns.length; j++) 
            if (columns[j] < columns[topmostColumnIndex]) {
                topmostColumnIndex = j;
            }    

        var cell = mosaicoCells[i];
        var anchor = cell.firstChild;
        // var captionHeight = cell.children[1].clientHeight;
        var imgNaturalWidth  = anchor.firstChild.naturalWidth; 
        var imgNaturalHeight = anchor.firstChild.naturalHeight;

        cell.style.width  = cellwidth + "px";   // will toggle style refresh
        var cellHeight = Math.round((cellwidth / imgNaturalWidth) * imgNaturalHeight);

        if (resizeOnly) {
            cell.style.top     = columns[topmostColumnIndex] + "px";
            cell.style.left    = (containerWidth / columns.length) * topmostColumnIndex + "px";
            cell.style.height  = cellHeight + "px";
            cell.style.opacity = 1;
        } else if (i === toSpawn) {
            translateCell(cell, /* top:  */ columns[topmostColumnIndex], 
                                /* left: */ (containerWidth / columns.length) * topmostColumnIndex, 
                                cellHeight);
        }

        columns[topmostColumnIndex] += cellHeight + CELL_MARGIN; 
    }


    var maxHeight = 0;
    for (var i = 0; i < columns.length; i++)
        if (columns[i] > maxHeight) maxHeight = columns[i];

    dom.MosaicoContainer.style.height = maxHeight + "px";
}

function translateCell(cell, top, left, cellHeight) {
    cell.style.top     = top - 200 + "px";
    cell.style.left    = left + "px";
    cell.style.height  = cellHeight + "px";
    cell.style.opacity = 0;

    var timeoutFunction = function(cell, top, left, cellHeight) {
            return function() {
                if (cell !== undefined) {
                    cell.style.top     = top + "px";
                    cell.style.left    = left + "px";
                    cell.style.height  = cellHeight + "px";
                    cell.style.opacity = 1;
                }
            };
        }(cell, top, left, cellHeight);

    // Apparently, if you set the timeoutFunction to 10ms it gets executed too early (same frame?) 
    // and it doesn't trigger a refresh of the styles, something we rely on to display properly the fade-in animation 
    setTimeout( timeoutFunction, 50 );
}


window.addEventListener("resize", function() {
    RenderMosaicoGrid(true);
});
window.addEventListener("keydown", function(e) {
    if(e.key == "k") {
        var newPage = (selectedPage + 1) % 2;
        loadPage(newPage);
    }
});



export { loadPage, CELLS_PER_PAGE };