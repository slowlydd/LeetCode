/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var maximum = function(a, b) {
    let sign = (a / 2 - b / 2) >> 31
    return (sign + 1) * a - sign * b
};