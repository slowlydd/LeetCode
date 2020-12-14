/**
 * @param {number} num
 * @return {number}
 */
var exchangeBits = function(num) {
    let odd = num & 0x55555555
    let even = num & 0xaaaaaaaa
    odd <<= 1
    even >>= 1
    return odd | even
};
