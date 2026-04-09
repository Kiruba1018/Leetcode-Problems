/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
     let set = new Set();

    for (let ch of s) {
        if (ch >= '0' && ch <= '9') {
            set.add(Number(ch));
        }
    }

    let arr = [...set].sort((a, b) => b - a);

    return arr.length >= 2 ? arr[1] : -1;
};