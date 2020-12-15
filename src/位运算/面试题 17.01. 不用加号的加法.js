/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {
    let temp = 0
    while(b !== 0) {

        temp = a ^ b // 不带进位的加法
        b = (a & b) << 1 // 只带进位的加法
        a = temp
    }
    return a
};