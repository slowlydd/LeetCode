/**
 * @param {number[]} nums
 * @return {number}
 */
/***
 * 一个数字异或自身等于0，0^任何数字等于数字本身
 */
var singleNumber = function(nums) {
    let res = nums[0]
    for(let i = 1; i < nums.length; i++) {
        res = res^nums[i]
    }
    return res
};