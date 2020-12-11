/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0
    for(let i = 0; i < 32; i++) {
        let count = 0
        for(let j = 0; j < nums.length; j++) {
            if((nums[j] >> i) & 1 === 1) {
                count++
            }
        }
        if(count % 3 != 0) {
            res = res | 1 << i
        }
    }
    return res
};

var singleNumber = function(nums) {
    let seen_once = seen_twice = 0
    for(let i = 0; i < nums.length; i++) {
        seen_once = ~seen_twice & (seen_once^nums[i])
        seen_twice = ~seen_once & (seen_twice^nums[i])
    }
    return seen_once
}