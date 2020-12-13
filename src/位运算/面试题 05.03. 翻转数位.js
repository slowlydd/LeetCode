/**
 * @param {number} num
 * @return {number}
 */
var reverseBits = function(num) {
    let l = 0, r = 0, res = 0
    for(let i = 0; i < 32; i++) {
        if(num&1) {
            r++
        } else {
            l = r + 1
            r = 0
        }
        res = res > l + r ? res : l + r
        num = num >> 1
    }
    return res
};
reverseBits(1775)