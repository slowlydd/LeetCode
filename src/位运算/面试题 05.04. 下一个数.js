/**
 * @param {number} num
 * @return {number[]}
 */
var findClosedNumbers = function(num) {
    let max = nextNum(num)
    let min = ~nextNum(~num)
    return [max > 0 ? max : -1, min > 0 ? min : -1]
};

function nextNum(num) {
    let lastOne = num & -num
    let near = lastOne + num
    // 将最右边连续值为1的部分转移至低位并减去多余一位，或运算出结果
    return (num & ~near)/lastOne >> 1 | near
}