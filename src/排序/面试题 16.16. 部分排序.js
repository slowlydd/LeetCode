/**
 * @param {number[]} array
 * @return {number[]}
 */
var subSort = function(array) {
    if(!array || array.length <= 1) return [-1, -1]
    let left = -1, right = -1, len = array.length
    let max = Number.MIN_SAFE_INTEGER
    let min = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < len; i++) {
        if(array[i] < max) {
            right = i
        } else {
            max = Math.max(max, array[i])
        }

        if(array[len - 1 - i] > min) {
            left = len - 1 - i
        } else {
            min = Math.min(min, array[len - 1 - i])
        }
    }
    return [left, right]
};