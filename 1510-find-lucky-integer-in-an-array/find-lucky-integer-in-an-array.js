/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
       let freq = {};

    // count frequency
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    let maxLucky = -1;

    // check lucky numbers
    for (let num in freq) {
        if (Number(num) === freq[num]) {
            maxLucky = Math.max(maxLucky, Number(num));
        }
    }

    return maxLucky;
};
