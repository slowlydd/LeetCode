/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function(a, b) {
    if(a.length < =1) return true

    // 判断单个是不是回文串
    if(check(a) || check(b)) {
        return true
    }

    // 分割判断
    if(a[0] === b[b.length - 1] || b[0] === a[a.length - 1])  {
        return true
    }
    return false
};

function check(s) {
    let i = 0;
    let j = s.length - 1
    while(i <= j) {
        if(s[i] !== s[j]){
            return false
        }
        i++
        j--
    }
    return true
}