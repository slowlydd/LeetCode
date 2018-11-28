/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // 判断字符串长度为0和字符串的元素为奇数个
    if (s.length === 0) {
        return true;
    }

    if (s.length % 2 === 1) {
        return false;
    }

    let stackArray = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stackArray.push(s[i]);
        }

        if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
            let temp = stackArray[stackArray.length - 1];
            if ((temp === '(' && s[i] === ')') || (temp === '[' && s[i] === ']') || (temp === '{' && s[i] === '}')) {
                stackArray.pop();
            }
        }
    }

    if (stackArray.length) {
        return false;
    } else {
        return true;
    }
};