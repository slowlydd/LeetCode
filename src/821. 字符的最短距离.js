/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let len = S.length
    let l = 0, r = len - 1, lf  = 0, rf = 0
    let res = new Array(len).fill(Number.MAX_SAFE_INTEGER)
    while (l < len) {
        if(S[l] === C) {
            lf = 1
            res[l] = 0
        } else if(lf){
            res[l] = Math.min(res[l], lf)
            lf++
        }

        if(S[r] === C) {
            rf = 1
            res[r] = 0
        } else if(rf){
            res[r] = Math.min(res[r], rf)
            rf++
        }
        l++
        r--
    }
    return res
};