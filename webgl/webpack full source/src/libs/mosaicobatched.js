import { dom } from "./DOMreferences";
import { posts } from "./posts";


var CELL_MARGIN = 2;
var CELLS_PER_PAGE = 20;

var toSpawn = 0;
var mosaicoCellsQueue = [];
function loadPage(pageNumber) {
    deleteExistingChildren();

    for (var i = 0; i < CELLS_PER_PAGE; i++)
        mosaicoCellsQueue.push(undefined);  // we need to fill the array with something

    var starting_index = CELLS_PER_PAGE * pageNumber;
    var last_index = CELLS_PER_PAGE * (++pageNumber);

    if (posts.length < last_index) last_index = posts.length;


    for (var i = starting_index; i < last_index; i++) {

        var cell = document.createElement("div");
        cell.className = "mosaicogrid_cell";        

        var img = new Image();
        img.onload = function(i, cell) { 
            return function() {
                mosaicoCellsQueue[i] = cell;            
                RendermosaicoGrid(false);
            };
        } (i, cell);
        img.src = posts[i].imgPath;
     

        cell.appendChild(img);
        dom.mosaicoContainer.appendChild(cell);

    }
}

function deleteExistingChildren() {
    while (dom.mosaicoContainer.firstChild) {
        dom.mosaicoContainer.removeChild(dom.mosaicoContainer.firstChild);
    }

    mosaicoCellsQueue = [];
    toSpawn = 0;
}





function RendermosaicoGrid(resizeOnly) {
    var containerWidth = innerWidth - CELL_MARGIN * 2;

    if (innerWidth > 600) containerWidth  = 600 - CELL_MARGIN * 2;
    if (innerWidth > 900) containerWidth  = 800;
    if (innerWidth > 1200) containerWidth = 900;

    dom.mosaicoContainer.style.width  = containerWidth + "px";
    var mosaicoCells = dom.mosaicoContainer.getElementsByClassName("mosaicogrid_cell");

    var columns = [0, 0];
    if (innerWidth > 900) columns.push(0);  
    if (innerWidth > 1200) columns.push(0);  

    var cellwidth  = (containerWidth / columns.length) - CELL_MARGIN;

    // apply cells positions
    for(var i = 0; i < CELLS_PER_PAGE; i++) {
        if (mosaicoCellsQueue[i] === undefined)
            break;

        var topmostColumnIndex = 0;

        for (var j = 1; j < columns.length; j++) 
            if (columns[j] < columns[topmostColumnIndex]) {
                topmostColumnIndex = j;
            }    

        var cell = mosaicoCellsQueue[i];
        // var captionHeight = cell.children[1].clientHeight;
        var imgNaturalWidth  = cell.firstChild.naturalWidth; 
        var imgNaturalHeight = cell.firstChild.naturalHeight;

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
            toSpawn++;
        }

        columns[topmostColumnIndex] += cellHeight + CELL_MARGIN; 
    }


    var maxHeight = 0;
    for (var i = 0; i < columns.length; i++)
        if (columns[i] > maxHeight) maxHeight = columns[i];

    dom.mosaicoContainer.style.height = maxHeight + "px";
}

function translateCell(cell, top, left, cellHeight) {
    cell.style.top     = top - 500 + "px";
    cell.style.left    = left + "px";
    cell.style.height  = cellHeight + "px";
    cell.style.opacity = 0;


    var timeoutFunction = function() {
            if (cell !== undefined) {
                cell.style.top     = top + "px";
                cell.style.left    = left + "px";
                cell.style.height  = cellHeight + "px";
                cell.style.opacity = 1;
            }
        };


    setTimeout( timeoutFunction, 100 );
}


window.addEventListener("resize", function() {
    RendermosaicoGrid(true);
});



export { loadPage };