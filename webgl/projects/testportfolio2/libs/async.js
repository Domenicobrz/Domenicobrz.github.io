function lazyloadImages() {
    [].forEach.call(document.getElementsByClassName('lazyload'), function (item, index) {
        item.setAttribute('src', item.getAttribute('data-src'));
    });

    /* check for HD screens to place pixel perfect images */
    [].forEach.call(document.getElementsByClassName('lazyloadfooter'), function (item, index) {
        if(screen.width < 1800)
            item.setAttribute('src', item.getAttribute('data-src'));
        else
            item.setAttribute('src', item.getAttribute('data-src-hd'));        
    });
}