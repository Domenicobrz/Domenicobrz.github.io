function initTypography() {


    if(document.documentElement.className.indexOf( "fonts-loaded" ) > -1 ) {
        // cookie is defined, fonts are already loaded 
        return;    
    }



    var font1 = new FontFaceObserver('Anders');
    var font2 = new FontFaceObserver('Josefin Slab');
    var font3 = new FontFaceObserver('Sorts Mill');

    Promise.all([font1.load(), font2.load(), font3.load()]).then(function () {
        document.documentElement.className += " fonts-loaded";
    });
}