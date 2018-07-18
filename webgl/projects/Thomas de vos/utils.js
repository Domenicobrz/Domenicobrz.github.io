function rnd(between) {
    return Math.random() * between * 2 - between;
}

// function srnd(between, seed) {
//     return Math.random(seed) * between * 2 - between;
// }


function srnd(between, seed) {
    var x = Math.sin(seed) * 10000;
    return (x - Math.floor(x)) * between * 2 - between;
}

// should be 0...1
function usrnd(seed) {
    var x = Math.sin(seed) * 10000;
    return (x - Math.floor(x)) + 0.3;
}

function smoothstep(t) {
    return t * t * (3 - 2 * t);
}