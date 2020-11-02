/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let temp, len = s.length, i = 0
    /* 这里计算注意统一单位 */
    let mid = Math.floor(len / 2) // 这里是按数量计算的
    while(i < mid) {// 这里是按下标计算的 // 这里不能小于等于，这里得到的是数量的一般，不是下标，如果相等的话，就会出现偶数的时候 4 / 2 = 2，会将变换过的再变回来
        let temp = s[i]
        s[i] = s[len - i - 1]
        s[len - i - 1] = temp
        i++
    }
};