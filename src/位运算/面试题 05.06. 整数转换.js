/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var convertInteger = function(A, B) {
    let bit = A^B
    let sum = 0
    while(bit) {
        sum++
        bit &= bit - 1 
    }
    return sum
};