/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    x = String(x);
    var left = 0;
    var right = x.length - 1;
    while (right > left) {
        if (x.charCodeAt(left) != x.charCodeAt(right)) {
            return false;
        }
        left += 1;
        right -= 1;
    }

    return true;
};