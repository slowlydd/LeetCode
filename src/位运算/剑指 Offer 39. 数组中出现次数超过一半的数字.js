/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candiate = nums[0]
    let num = 1
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== candiate) {
            if(num === 0) {
                candiate = nums[i]
                num = 1
            } else {
                num--
            }
        } else {
            num++
        }
    }
    return candiate
};