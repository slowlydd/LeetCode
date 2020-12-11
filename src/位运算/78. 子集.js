/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 迭代法
var subsets = function(nums) {
    const ans = []
    const n = nums.length
    for(let mask = 0; mask < (1<<n); ++mask) { // 枚举所有的数字
        const t = [] // 构造子集
        for(let i = 0; i < n; i++) { // 枚举对应的位
            if(mask & (1 << i)) { // 判断是否需要取数
                t.push(nums[i])
            }
        }
        ans.push(t)
    }
    return ans
};

// 递归法
/***
 * 对于每个数字都有两种状态，取或者不取，当遍历完
 * 数组里的数字以后，把对应的子集放入到数组中
 */
var subsets = function(nums) {
    const t = []
    const ans = []
    const n = nums.length
    const dfs = cur => {
        if(cur === nums.length) { 
            ans.push(t.slice())
            return
        }
        t.push(nums[cur]) 
        dfs(cur + 1, nums)
        t.pop()
        dfs(cur + 1, nums)
    }
    dfs(0, nums)
    return ans
};

