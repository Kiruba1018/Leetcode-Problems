/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  const nA = []
  for(let i=0;i<arr.length;i++){
    if(fn(arr[i],i)){
        nA.push(arr[i])
    }
  }  
  return nA;
};