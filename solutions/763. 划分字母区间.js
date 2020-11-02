/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    const last = new Array(26)
    const length = S.length
    const codePointA = 'a'.codePointAt(0)
    for(let i = 0; i < length; i++) {
        last[S.codePointAt[i] - codePointA] = i
    }

    const partition = []
    let start = 0, end = 0
    for(let i = 0; i < length; i++) {
        end = Math.max(end, last[S.codePointAt(i) - codePointA]); // 找出当前分割区间内字符最后一次出现位置最大的字符
        if(i == end) { // 在最小分割点分割字符串
            partition.push(end - start + 1)
            start = end + 1
        }
    }
    return partition
};