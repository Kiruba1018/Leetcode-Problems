/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let groups = {};

    for (let word of strs) {
        let count = new Array(26).fill(0);

        for (let char of word) {
            count[char.charCodeAt(0) - 97]++;
        }

        let key = count.join("#");

        if (!groups[key]) {
            groups[key] = [];
        }

        groups[key].push(word);
    }

    return Object.values(groups);
};
    
