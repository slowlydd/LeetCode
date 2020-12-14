/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = []
    let t = []
    let n = nums.length
    for(let i = 0; i < (1<<n); i++) {
        let t = []
        for(let mask = 0; mask < n; mask ++) {
            if(i & (1<<mask)) {
                t.push(nums[mask])
            }
        }
        res.push(t)
    }
    return res
};