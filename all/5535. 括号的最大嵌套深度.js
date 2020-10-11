/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let stack = []
    let res = 0
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            stack.push('(')
        }

        if(s[i] === ')') {
            res = Math.max(res. stack.length)
            stack.pop()
        }
    }

    return res
    
};