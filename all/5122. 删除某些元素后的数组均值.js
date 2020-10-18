/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    let len = arr.length;
    arr.sort((a, b) => a - b)
    let res = 0;
    for(let i = len / 20; i < (len - len/20); i++) {
        res += arr[i]
    }

    return res / (len - len / 10)
};