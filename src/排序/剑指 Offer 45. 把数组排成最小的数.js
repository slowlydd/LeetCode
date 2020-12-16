/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    nums.sort((a, b) => {
        if( a + "" + b > b + "" + a) {
            return -1
        } else {
            return 1
        }
    })
    let res = ""
    for(let i = 0; i < nums.length; i++) {
        res += nums[i]
    }
    return res 
};