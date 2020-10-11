/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    // 如果数组长度小于 2
    if(nums.length < 2) return false
    let target = 0
    for(let i = 0; i < nums.length; i++) {
        target += nums[i]
    } 
    // 如果和值是奇数
    if(target % 2 !== 0) return false

    target = target / 2

    // 初始化数组
    // const dp = new Array(n).fill(0).map(v => new Array(target + 1, false))
    // for (let i = 0; i < n; i++) {
    //     // 一个整数都不选
    //     dp[i][0] = true
    // }
    // // 当选一个元素，且在 i = 0 的地方选取
    // dp[0][nums[0]] = true
    // for (let i = 1; i < n; i++) {
    //     const num = nums[i]
    //     for (let j = 1; j <= target; j++) {
    //         if (j >= num) {
    //             dp[i][j] = dp[i - 1][j] | dp[i - 1][j - num]
    //         } else {
    //             dp[i][j] = dp[i - 1][j]
    //         }
    //     }
    // }

    // 优化
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;
    for (const num of nums) {
        for (let j = target; j >= num; --j) {
            dp[j] |= dp[j - num];
        }
    }
    return dp[target]
};

