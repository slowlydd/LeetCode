/**
 * @param {number[]} nums
 * @return {number}
 */
/***
 * 169 题的升级版
 */
// 摩尔投票法
var majorityElement = function(nums) {
    let candiate, len = nums.length, count = 0
    for(let i = 0; i < len; i++) {
        if(nums[i] === candiate) {
            count++
        } else {
            if(count === 0) {
                candiate = nums[i]
                count = 1
            } else {
                count--
            }
        }
    }
    count = 0
    for(let i = 0; i < len; i++) {
        if(candiate === nums[i]) {
            count++
        }
    }
    return count > len / 2 ? candiate : -1
};
// 位运算法
var majorityElement = function(nums) {
    let len = nums.length, candiate = 0
    for(let i = 0; i < 32; i++) {
        let ones = 0
        for(let j = 0; j < len; j++) {
            ones += (nums[j]>>i)&1
        }
        candiate += ones > len/2 ? 1<<i : 0
    }
    let count = 0
    for(let i = 0; i < len; i++) {
        if(candiate === nums[i]) {
            count++
        }
    }
    return count > len / 2 ? candiate : -1
};
majorityElement([1,2,5,9,5,9,5,5,5])