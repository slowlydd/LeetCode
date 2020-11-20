/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let flag = 0, len = digits.length
    digits[len - 1] += 1
    for(i = len - 1; i >= 0; i--) {
        if(digits[i] + flag < 10) {
            digits[i] = digits[i] + flag
            return digits
        } else {
            digits[i] = 0
            flag = 1
        }
    }
    digits.unshift(1)
    return digits
};