/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let nA = []
    arr.forEach((value,index)=>{
        nA.push(fn(value,index))
    })
    return nA;
};