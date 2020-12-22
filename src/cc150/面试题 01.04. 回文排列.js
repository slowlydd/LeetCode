/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let n = s.length
    if(n <= 1) return true
    s = s.split("").sort()
    let stack = [s[0]]
    for(let i = 1; i < n; i++) {
        if(s[i] === stack[stack.length - 1]) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.length > 1 ? false : true
};