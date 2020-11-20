/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    const l = A.length
    let i = 0
    // 递增扫描
    while(i + 1 < l && A[i] < A[i + 1]) {
        i++
    }
    // 最高点不能是数组的第一个位置或最后一个位置
    if(i === 0 || i === l - 1) {
        return false
    }
    // 递减扫描
    while(i + 1 < l && A[i] > A[i + 1]) {
        i++
    }
    return i === l - 1
};