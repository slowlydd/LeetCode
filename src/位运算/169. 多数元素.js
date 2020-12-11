/**
 * @param {number[]} nums
 * @return {number}
 */
/***
 * 摩尔投票法
 */
var majorityElement = function(nums) {
    let candiate = nums[0], count = 1
    for(let i = 1; i < nums.length; i++) {
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
    return candiate
};
/***
 * 位运算
 */
var majorityElement = function(nums) {
    let res = 0
    for(let i = 0; i < 32; i++) {
        let ones = 0;
        for(let j = 0; j < nums.length; j++) {
            /**
             * 统计每个位置上出现1的次数
             */
            ones += (nums[j]>>i&1)
        }
        res += ones > nums.length / 2 ? 1<<i : 0
    }
    return res
};
