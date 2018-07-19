function rnd() {
    return Math.random();
}

function rndr(v) {
    return Math.random() * v - v / 2;
}


// with seed
function srnd(s) {
    return Math.random(s);
}

function srndr(v,s) {
    return Math.random(s) * v - v / 2;
}