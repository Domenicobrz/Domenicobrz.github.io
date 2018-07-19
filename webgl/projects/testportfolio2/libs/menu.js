function initMenu() {
    var DOMMenu = document.querySelector(".mhMenuIcon");
    var DOMMenuCellsContainer = document.querySelector(".mhOpenMenuContainer");

    var active = false;

    DOMMenu.addEventListener("click", function(){
        DOMMenu.classList.toggle("active");
        DOMMenuCellsContainer.classList.toggle("active");

        if(!active) {
            DOMMenuCellsContainer.style.pointerEvents = "all";
        } else {
            DOMMenuCellsContainer.style.pointerEvents = "none";            
        }

        active = !active;
    });
}