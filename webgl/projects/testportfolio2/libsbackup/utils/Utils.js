function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}


// function strhash( str ) {
//     if (str.length % 32 > 0) str += Array(33 - str.length % 32).join("z");
//     var hash = '', bytes = [], i = j = k = a = 0, dict = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','1','2','3','4','5','6','7','8','9'];
//     for (i = 0; i < str.length; i++ ) {
//         ch = str.charCodeAt(i);
//         bytes[j++] = (ch < 127) ? ch & 0xFF : 127;
//     }
//     var chunk_len = Math.ceil(bytes.length / 32);   
//     for (i=0; i<bytes.length; i++) {
//         j += bytes[i];
//         k++;
//         if ((k == chunk_len) || (i == bytes.length-1)) {
//             a = Math.floor( j / k );
//             if (a < 32)
//                 hash += '0';
//             else if (a > 126)
//                 hash += 'z';
//             else
//                 hash += dict[  Math.floor( (a-32) / 2.76) ];
//             j = k = 0;
//         }
//     }
//     return hash;
// }


var rndrndseed = Date.now() * 0.1;
function rnd() {
    rndrndseed += 63423;
    return (Math.sin(rndrndseed * 345345.325 )) * 0.5 + 0.5;//Math.random();
}


var strhash = function(str) {
  var hash = 0, i, chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr   = str.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};