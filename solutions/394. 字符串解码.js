/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let res = ""
    let num = ""
    let str = ""
    let flag = false
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '[') {
            flag = true
            continue
        }
        if(s[i] === ']') {
            flag = false
            continue
        }

        if(s.charCodeAt[i] >= 48 && s.charCodeAt[i] <= 57) {
            num = num + s[i]
            continue
        }

        if(flag) {
            str += s[i]
        } else {
            res += s[i]
        }

    }
};

function repeat(x, n) {
    let res = ""
    for(let i = 0; i < n; i++) {
        res += x
    }
    return res
}