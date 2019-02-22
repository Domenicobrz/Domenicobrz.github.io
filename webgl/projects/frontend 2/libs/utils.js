var Utils = {
    setActive: function(array, index) {
        for(let i = 0; i < array.length; i++) {
            array[i].classList.remove("active");
        }

        array[index].classList.add("active");
    },

    setChildrenZeroOpacity(container) {
        for(let i = 0; i < container.children.length; i++) {
            container.children[i].style.opacity = "0";
        }
    }
}