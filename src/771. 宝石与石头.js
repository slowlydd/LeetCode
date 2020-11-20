/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let setJ = new Set(J.split(""))
    let res = 0
    for(let i = 0, l = S.length; i < l; i++) {
        if(setJ.has(S[i])) res++
    }
    return res
};