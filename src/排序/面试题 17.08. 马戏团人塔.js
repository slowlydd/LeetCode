/**
 * @param {number[]} height
 * @param {number[]} weight
 * @return {number}
 */
var bestSeqAtIndex = function(height, weight) {
    let person = []
    for(let i = 0; i < height.length; i++) {
        person.push({
            height: height[i],
            weight: weight[i]
        })
    }
    person.sort((a, b) => {
        if(a.height < b.height) {
            return -1
        } else if (a.height === b.height) {
            if(a.weight <= b.weight) {
                return 1
            } else {
                return -1
            }
        } else {
            return 1
        }
    })
    let dp = [1]
    let res = 1
    for(let i = 1; i < person.length; i++) {
        let max_val = 0, base_weight =  person[i].weight
        for(let j = 0; j < i; j++) {
            if(base_weight > person[j].weight) {
                max_val = Math.max(max_val, dp[j])
            }
        }
        dp[i] = max_val + 1
        res = Math.max(res, dp[i])
    }
    return res
};

bestSeqAtIndex(
    [65,70,56,75,60,68],
    [100,150,90,190,95,110])