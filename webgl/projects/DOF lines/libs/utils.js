var seed = 60;
function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}