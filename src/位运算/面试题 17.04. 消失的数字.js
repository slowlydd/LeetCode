/**
 * @param {number[]} nums
 * @return {number}
 */
// 数学思路
var missingNumber = function(nums) {
    let n = nums.length;
    let sum = 0
    for(let i = 0; i < n; i++) {
        sum = sum + nums[i]
    }
    return n*(n+1) / 2 - sum
};

// 位运算 利用 x^x = 0
var missingNumber = function(nums) {
    let res = 0, n = nums.length
    for(let i = 0; i < n; i++) {
        res = res^i^nums[i]
    }
    return res^n
};