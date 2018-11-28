/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) {
        return "";
    }

    // 初始化，默认最短的字符串是第一个
    let shortStrIndex = 0;

    // 寻找最短的字符串
    for (let i = 0; i < strs.length; i++) {
        if (strs[shortStrIndex].length > strs[i].length) {
            shortStrIndex = i;
        }
    }

    if (!strs[shortStrIndex].length) {
        return "";
    }

    // 最短的字符串
    for (let i = 0; i < strs[shortStrIndex].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[shortStrIndex][i] !== strs[j][i]) {
                return strs[shortStrIndex].slice(0, i);
            }
        }
    }

    return strs[shortStrIndex];
};